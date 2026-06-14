<?php
namespace pockets\crud\models\post;
use \pockets\crud\reducer;
class read extends \pockets\crud\resource_walker {

    use permissions;
    use validate_resource;
    use \pockets\crud\render;

    /**
        Reads posts featured image.
        @class-document-link pockets\crud\models\image\read
    */
    #[ \pockets\crud\schema\attribute( [ 
        '$ref' => "/image/read_resource/" 
    ] ) ]
    function image( array $read ) : \Wp_Error | array {
        $image_id = get_post_thumbnail_id( $this->resource ) ?? false;
        return \pockets::crud('image')::init( $image_id )->read( $read );
    }

    /**
        Returns posts page template.
    */
    function page_template() : string  {
        return get_post_meta( $this->resource->ID, '_wp_page_template', true );
    }

    /**
        Accepts an argument of [
            'format' => "d/j/y" string of valid date format.
        ]
        Returns posts modified date.
    */
    #[\pockets\crud\schema\attribute( [
        'type' => ['object', 'null'],
        'properties' => [
            'format' => [
                'type' => 'string',
            ]
        ],
        'required' => [ 'format' ],
    ] ) ]
    function modified_date( ?array $args = [ 'format'=> 'd/j/y' ] ) : string {
        return get_the_modified_date( $args['format'], $this->resource);
    }

    /**

        Accepts an argument of [
            'format' => "d/j/y" string of valid date format.
        ]
        Returns posts date.
    */
    #[\pockets\crud\schema\attribute( [
        'type' => ['object', 'null'],
        'properties' => [
            'format' => [
                'type' => 'string',
            ]
        ],
        'required' => [ 'format' ],
    ] ) ]
    function date( ?array $args = [ 'format'=> 'd/j/y' ] ) : string  {
        return get_the_date( $args['format'], $this->resource );
    }
    
    /**
        Returns posts editor link
    */
    function edit_link( ?array $args = [] ) : string | null  {
        
        $args = wp_parse_args( $args ?? [], [ 'wp-admin' => true, 'relative' => false ] );

        $link = get_edit_post_link( $this->resource, '&');

        if( !$args['wp-admin'] ) {
            $link = str_replace('wp-admin/', "", $link );
        }
        if( $args['relative'] ) {
            $link = wp_make_link_relative( $link );
        }
        return $link;

    }

    /**
        Returns posts slug
    */
    function slug() : string {
        return $this->resource->post_name;
    }

    /**
        Returns posts type
    */
    function type() : string {
        return $this->resource->post_type;
    }

    /**
        Returns posts ID
    */
    function ID() : int {
        return $this->resource->ID;
    }

    /**
        Returns posts title
    */
    function title() : string {
        return $this->resource->post_title;
    }

    /** 
        Accepts an argument of [
            'relative' => boolean if true, applies wp_make_link_relative to the result
        ]
        Returns posts link
    */
    #[\pockets\crud\schema\attribute( [
        'type' => ['object', 'null'],
        'properties' => [
            'relative' => [
                'type' => 'boolean',
            ]
        ],
        'required' => [ 'relative' ],
    ] ) ]
    function link( ?array $args = [ 'relative' => true ] ) : string {
        $link = get_the_permalink( $this->resource->ID );
        if( $args['relative'] ?? false === true) {
            return wp_make_link_relative( $link );
        }
        return $link;
    }

    /** 
        Accepts an argument of [
            'filtered' => boolean if true, applies the_content filters to the result
        ]
        Returns posts link
    */
    #[\pockets\crud\schema\attribute([
        'type' => ['object', 'null'],
        'properties' => [
            'filtered' => [ 'type' => 'boolean' ]
        ],
        'additionalProperties' => false,
        'required' => [ 'filtered' ],
    ])]
    function content( ?array $args = [ 'filtered' => true ] ) : string {
        if( $args['filtered'] ?? true === true) {
            return apply_filters( 'the_content', $this->resource->post_content );
        }
        return $this->resource->post_content;
    }

    /** 
        Accepts an argument of [
            'filtered' => boolean if true, applies the_content filters to the result
        ]
        Returns posts excerpt
    */
    #[\pockets\crud\schema\attribute([
        'type' => ['object', 'null'],
        'properties' => [
            'filtered' => [ 'type' => 'boolean' ]
        ],
        'additionalProperties' => false,
        'required' => [ 'filtered' ],
    ])]
    function excerpt( ?array $args = [ 'filtered' => true ] ) : string {
        $content = get_the_excerpt( $this->resource);
        if( $args['filtered'] ?? true === true) {
            return apply_filters( 'the_content', $content );
        }
        return $content;
    }

    /**
        You can provide an array of meta_keys, and this will return an array of results for the corresponding field.
    */
    #[ \pockets\crud\schema\attribute('\pockets\crud\models\acf\adapter::getSchema') ]
    function acf( ?array $args ) : array | \WP_Error {
        return \pockets\crud\models\acf\adapter::getField( $args, $this->resource );
    }

    /**
        You can provide an array of meta_keys, and this will return an array of results for the 
        corresponding field.
    */
    #[ \pockets\crud\schema\attribute( __CLASS__.'::__get_meta_schema' ) ]
    function meta( ?array $args ) : array | \WP_Error {
        if( !is_array( $args ) ) return \pockets::error("Denied");
        return \pockets\crud\reducers\whitelist_reducer::walk(
            array: $args, 
            callback: fn($_, $iterator) => get_post_meta($this->resource->ID, $iterator->key, true),
            whitelist: array_keys( get_registered_meta_keys('post') )
        );
    }

    /**
        @class-document-advanced
        This is used to dynamically generate schema for the meta function.
    */    
    static function __get_meta_schema(){
        return \pockets\crud\schema\registered_meta_keys::build( 
            meta_keys: get_registered_meta_keys('post'),
            action: "read",
            meta_object_type: "post",
        );
    }

    /**
        Returns array of information that can be used to request this resource.
    */
    function crud_resource() : array {
        return [
            'ID' => $this->resource->ID,
            'object_type' => 'wp_post',
            'name' => $this->title(),
            'slug' => $this->slug()
        ];
    }
 
    /**
        Returns post status    
    */
    function status() : string {
        return $this->resource->post_status;
    }
    
    /**
        @class-document-link pockets\crud\models\terms\read|method

        To use this, you can pass the following arguments: 
        [
            required 'taxonomy' => "taxonomy of term you're querying" 
        ]
    */
    #[ \pockets\crud\schema\attribute( [ 
        '$merge' => [
            'source' => [
                '$ref' => '/terms/read_resource/',
            ],
            'with' => [
                'properties' => [
                    'taxonomy' => [
                        'type' => 'string',
                        'includes' => [
                            '$ref' => '/wp/taxonomies/names/',
                        ]
                    ],
                ],
                'required' => [ 'taxonomy' ],
            ],
        ]
    ] ) ]
    function terms( array $read = [ 'taxonomy' => "category" ] )  { 
        
        if( !is_array( $read ) ) return \pockets::error("You must provide an array for an argument"); 

        $taxonomy = $read['taxonomy'] ?? false;

        if( !$taxonomy ) return \pockets::error( "You must pass a taxonomy argument." ); 

        $terms = wp_get_post_terms($this->resource->ID, $taxonomy, [ 'parent' => 0 ] );

        if( !is_array($terms) ) {
            return \pockets::error( "This post has no terms for taxonomy: {$taxonomy}" ); 
        }

        return \pockets::crud('terms')::init( [ 'by' => 'iterate', 'items' => $terms ] )->read( $read );

    }

    /**
        @class-document-link pockets\crud\models\wp-user\read|method
    */
    #[ \pockets\crud\schema\attribute( [ 
        '$ref' => '/wp-user/read_resource/',
    ] ) ]
    function author( array $read ){
        
        $revoke = \pockets::crud_relay_can::grant( 'read', 'wp-user' );

        $result = \pockets::crud( 'wp-user' )::init( (int) $this->resource->post_author )->read( $read );

        $revoke();

        return $result;

    }

}