<?php
namespace pockets\url_to_query;

class api {

    static function init(...$args){
        return new static(...$args);
    }

    /**
        Rewrite rules array
    */
    public array $rewrite;

    /**
        $wp_rewrite->use_verbose_page_rules
    */
    public bool $use_verbose;

    /**
        Global WP object
    */
    public \WP $wp;

    /**
        Extra variables to be added to any query resolved
    */
    public array $extra_query_vars = [];
 
    /**
        Extra variables to be added to any query resolved
    */
    function __construct( array $extra_query_vars = [ ] ) {
        
        if ( is_array( $extra_query_vars ) ) {
            $this->extra_query_vars = $extra_query_vars;
        } 
        
        if ( is_string( $extra_query_vars ) && ! empty( $extra_query_vars ) ) {
            parse_str( $extra_query_vars, $this->extra_query_vars );
        }

        $this->rewrite = $GLOBALS['wp_rewrite']->wp_rewrite_rules();
        if( !is_array( $this->rewrite ) ) {
            $this->rewrite = [];
        }
        $this->wp = $GLOBALS['wp'];
        $this->use_verbose = (bool) $GLOBALS['wp_rewrite']->use_verbose_page_rules;

    }

    /**
        Resolve a url to an array of WP_Query arguments for main query.
    */
    function resolve( string $url = '', array $query_string_vars = [] ) : resolver | \WP_Error {
        $url = filter_var( $url, FILTER_SANITIZE_URL );
        if ( empty( $url ) ) {
            return \pockets::error( "You must provide a url" );
        }
        return resolver::init( $this )->resolve( $url, $query_string_vars );
    }
   
}