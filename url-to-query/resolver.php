<?php
namespace pockets\url_to_query;

trait getters {
 
    function getQueryVars(){
        return $this->fixQuery()->query_vars;
    }
    
    function fixQuery(){

        /**
            If request is emppty, look at how front page is set up.
            It can either be a post ID or a page of posts.
        */
        if( $this->request === '' || $this->request === '/' ) {
            
            $cb = match( get_option( 'show_on_front' ) ) {
                'page' => function(){
                    $this->query_vars['page_id'] = get_option( 'page_on_front' );
                },
                default => function(){
                    $this->query_vars['post_type'] = 'post';
                    $this->query_vars['name'] = 'post';
                }
            };

            $cb();

            return $this;

        }

        if(
            isset( $this->query_vars['post_type'] ) 
            && 
            $this->query_vars['post_type'] === ( $this->query_vars['name'] ?? null )
        ){
            unset( $this->query_vars['name'] );
        }

        return $this;

    }

    function getQueriedObject(){
        return $this->getWPQuery()->get_queried_object();
    }
    
    function getWPQuery(){

        $q = new \WP_Query( $this->getQueryVars() );
        
        /**
            Have to remove a few things that the resolver/wp needs.
        */
        
        if( $q->get_queried_object() instanceof \WP_Post_Type ) {
            if(
                isset( $q->query_vars['post_type'] ) 
                && 
                is_string( $q->query_vars['post_type'] )
            ){
                unset( $q->query_vars[ $q->query_vars['post_type'] ] ) ;
            }
            unset( $q->query_vars['pagename'] );
            unset( $q->query_vars['name'] );
        }

        return $q;

    }

}

class resolver {

    use getters;

    static function init(...$args){
        return new static(...$args);
    }

    private api $resolver;

    /**
        Relative path of the url to resolve.
    */
    private string $request;

    /**
        Resolved query arguments.
    */
    public array $query_vars = [];

    /**
        Query string variables in the url to be resolved.
    */
    public array $query_string = [];

    /**
        Query variabes set in the rewrite rule that match against the url to be resolved.
    */
    public array $perma_q_vars = [];

    /**
        Matched rule.
    */
    public string | null $matched_rule = NULL;

    /**
        Matched Query
    */
    public string $matched_query = '';

    /**
        Query variables (slug) for all the publicly queriable registered CPTs.
    */
    public array $post_type_query_vars = [];

    /**
        An id for the error
    */
    public \WP_Error | null $error = NULL;
    
    function __construct( api $resolver ) {
        $this->resolver = $resolver;
    }

    /**
        Resolve an url to an array of WP_Query arguments for main query.
    */
    function resolve( string $url = '', array $query_string_vars = [] ) : resolver {
        
        $this->error = \pockets::error("404");

        $this->parseUrl( $url, $query_string_vars );

        if ( ! empty( $this->resolver->rewrite ) ) {
            list( $matches, $query ) = $this->parseRewriteRules( $this->resolver->rewrite );
            $this->setMatchedQuery( $matches, $query );
        }
        
        $this->resolveVars();

        return $this;

    }

   
    /**
        Parse the url to be resolved taking only relative part and stripping out query vars.
    */
    private function parseUrl( string $url = '', array $query_string_vars = [] ) {
        // phpcs:ignore WordPress.WP.AlternativeFunctions.parse_url_parse_url -- parse_url is perfectly valid as it's consisten in later versions of php including 8 which this plugin requires
        parse_str( parse_url( $url ?? "", PHP_URL_QUERY ) ?? "", $this->query_string );
        // phpcs:ignore WordPress.WP.AlternativeFunctions.parse_url_parse_url
        $request_uri = trim( parse_url( $url, PHP_URL_PATH ) ?? "", '/' );
        $this->request = trim( preg_replace( '#^/*index\.php#', '', $request_uri ), '/' );
        if ( ! empty( $query_string_vars ) ) {
            $this->query_string = array_merge( $this->query_string, $query_string_vars );
        }
    }

    /**
        Loop throught registered rewrite rule and check them against the url to resolve.
    */
    private function parseRewriteRules( array $rewrite ) : array {
        $request_match = $this->request;
        if ( empty( $request_match ) && isset( $rewrite['$'] ) ) {
            $this->matched_rule = '$';
            $matches = [ '' ];
            $query = $rewrite['$'];
        } else {
            foreach ( (array) $rewrite as $match => $query ) {
                $matches = $this->parseRewriteRule( $match, $query );
                if ( ! is_null( $this->matched_rule ) ) {
                    return [ $matches, $query ];
                }
            }
        }
        return [ $matches, $query ];
    }

    /**
        Take the two part of a rewriote rule (the url and the query) and compare against 
        the url to be resolved to find a match.
    */
    private function parseRewriteRule( string $match, string $query ) : array | null {
        $matches = [];
        $request_match = $this->request;
        if ( ! empty( $this->request ) && strpos( $match, $this->request ) === 0 ) {
            $request_match = $this->request . '/' . $this->request;
        }
        if (
            preg_match( "#^{$match}#", $request_match, $matches )
            || 
            preg_match( "#^{$match}#", urldecode( $request_match ), $matches )
        ) {
            $varmatch = NULL;
            if ( $this->resolver->use_verbose && preg_match( '/pagename=\$matches\[([0-9]+)\]/', $query, $varmatch ) ) {
                $page = get_page_by_path( $matches[ $varmatch[1] ] );
                if ( ! $page ) {
                    return null;
                }
            }
            $this->matched_rule = $match;
        }
        return $matches;
    }

    /**
        When a rute matches, save matched query string and matched query array.
    */
    private function setMatchedQuery( array $matches = [], string $query = '' ) {
        if ( ! is_null( $this->matched_rule ) ) {
            $mathed = \WP_MatchesMapRegex::apply( preg_replace( "!^.+\?!", '', $query ), $matches );
            $this->matched_query = addslashes( $mathed );
            parse_str( $this->matched_query, $this->perma_q_vars );
            $this->error = NULL;
        }
    }

    /**
        Setup the query variables if a rewrite rule matched or if some variables are 
        passed as query string. Strips out not registered query variables and perform 
        the 'request' filter before saving and return found query vars.
    */
    private function resolveVars() {
        
        $this->setCptQueryVars();
        
        $wp = $this->resolver->wp;
        $public_query_vars = (array) apply_filters( 'query_vars', $wp->public_query_vars );
        $extra_query_vars = (array) $this->resolver->extra_query_vars;

        $this->parseQueryVars( $public_query_vars, $extra_query_vars );
        $this->parseTaxQueryVars();
        $this->parseCptQueryVars();
        $this->parsePrivateQueryVars( $extra_query_vars, $wp->private_query_vars );

        if ( is_wp_error( $this->error ) ) {
            return;
        }

        $this->query_vars = apply_filters( 'request', $this->query_vars );

    }

    /**
     * Store all the query rewrite slugs for all registered post types
     */
    private function setCptQueryVars() {
        foreach ( get_post_types( [], 'objects' ) as $post_type => $t ) {
            if ( $t->query_var ) $this->post_type_query_vars[$t->query_var] = $post_type;
        }
    }

    /**
        Store query variables to be returned, merging ones coming from matched rule (if any) 
        and ones coming from query string or configs
    */
    private function parseQueryVars( array $public_vars = [], array $extra = [] ) {
        foreach ( $public_vars as $wpvar ) {
            if ( isset( $extra[$wpvar] ) ) {
                $this->query_vars[$wpvar] = $extra[$wpvar];
            } elseif ( isset( $this->query_string[$wpvar] ) ) {
                $this->query_vars[$wpvar] = $this->query_string[$wpvar];
            } elseif ( isset( $this->perma_q_vars[$wpvar] ) ) {
                $this->query_vars[$wpvar] = $this->perma_q_vars[$wpvar];
            }
            if ( ! empty( $this->query_vars[$wpvar] ) ) {
                $this->parseQueryVar( $wpvar );
            }
        }
    }

    /**
        Parse a query variable, "flattening" it if is an array or an object, also set 'post_type'
        and 'name' query var, if a slug of a registered post type is present among query vars
    */
    private function parseQueryVar( string $wpvar = '' ) {
        if ( ! is_array( $this->query_vars[$wpvar] ) ) {
            $this->query_vars[$wpvar] = (string) $this->query_vars[$wpvar];
        } else {
            foreach ( $this->query_vars[$wpvar] as $vkey => $v ) {
                if ( ! is_object( $v ) ) {
                    $this->query_vars[$wpvar][$vkey] = (string) $v;
                }
            }
        }
        if ( isset( $this->post_type_query_vars[$wpvar] ) ) {
            $this->query_vars['post_type'] = $this->post_type_query_vars[$wpvar];
            $this->query_vars['name'] = $this->query_vars[$wpvar];
        }
    }

    /**
     * Convert spacet to '+' in the query variables for custom taxonomies
     */
    private function parseTaxQueryVars() {
        foreach ( get_taxonomies( [], 'objects' ) as $t ) {
            if ( $t->query_var && isset( $this->query_vars[$t->query_var] ) ) {
                $encoded = str_replace( ' ', '+', $this->query_vars[$t->query_var] );
                $this->query_vars[$t->query_var] = $encoded;
            }
        }
    }

    /**
     * Remove from query variables any non publicly queriable post type rewrite slug
     */
    private function parseCptQueryVars() {
        if ( isset( $this->query_vars['post_type'] ) ) {
            $queryable = get_post_types( [ 'publicly_queryable' => TRUE ] );
            if (
                ! is_array( $this->query_vars['post_type'] )
                && ! in_array( $this->query_vars['post_type'], $queryable, TRUE )
            ) {
                unset( $this->query_vars['post_type'] );
            } elseif ( is_array( $this->query_vars['post_type'] ) ) {
                $allowed = array_intersect( $this->query_vars['post_type'], $queryable );
                $this->query_vars['post_type'] = $allowed;
            }
        }
    }

    /**
        Look in extra query variables passed to resolver and compare to WP object private 
        variables if some variables are found they are added to query variables to be 
        returned
    */
    private function parsePrivateQueryVars( array $extra = [], array $private = [] ) {
        if ( ! empty( $extra ) ) {
            foreach ( $private as $var ) {
                if ( isset( $extra[$var] ) ) {
                    $this->query_vars[$var] = $extra[$var];
                }
            }
        }
    }

}
