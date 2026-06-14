<?php
namespace pockets\crud\models\post;
use \pockets\crud\reducer;

trait update_terms {

    /**
        
        reference https://developer.wordpress.org/reference/functions/wp_set_post_terms/

        Because of the hierachal nature of terms, it's mandatory that the terms argument
        be an array of numeric IDS, So that children with the same names but different parents 
        aren't confused.

    */
    #[ \pockets\crud\schema\attribute( [
        'type' => 'object',
        'properties' => [
            'taxonomy' => [
                '$ref' => '/wp/taxonomies/names/'
            ],
            'append' => [
                'type' => "boolean"
            ],
            'terms' => [
                'type' => 'array',
                'arrayOfType' => ['number']
            ],
            'using' => [
                'type' => "string",
                'enum' => ["ID"]
            ],
        ],
        'required' => [ 'taxonomy', 'terms' ]
    ] ) ]
    function terms( ?array $args ) : array | \WP_Error {
        
        if( !is_array($args) ) return \pockets::error("You must provide an array for an argument"); 

        list(
            'taxonomy' => $this->_create['taxonomy'],
            'append' => $this->_create['append'],
            'terms' => $this->_create['terms'],
            'using' => $this->_create['using'],
        ) = wp_parse_args( $args, [
            'taxonomy' => false,
            'append' => false,
            'terms' => false,
            'using' => "ID"
        ] );
        
        if( !is_string($this->_create['taxonomy']) ) {
            return \pockets::error( "You must provide a taxonomy argument as a string,");
        }

        if( !taxonomy_exists( $this->_create['taxonomy'] ) ) {
            return \pockets::error( "You must provide a valid taxonomy name,");
        }
        
        if( !is_array( $this->_create['terms'] ) ) {
            return \pockets::error("You must provide an array of terms");
        }

        if( !is_string( $this->_create['using'] ) ) {
            return \pockets::error("You must provide a using argument as a string");
        }

        if( $this->_create['using'] == 'ID') {

            $IDS = array_filter( 
                array: $this->_create['terms'], 
                callback: fn($term) => is_numeric( $term ) 
            );

            if( count($IDS) != count( $this->_create['terms'] ) ) {
                return \pockets::error("You must provide a list of terms that only contains IDS.");
            }

            $updated = wp_set_post_terms( $this->resource->ID, $IDS, $this->_create['taxonomy'], $this->_create['append'] );
            
            if( is_wp_error( $updated ) ) {
                return $updated;
            }

        }

        return [ 'updated' => true ];

    }

}
class update extends \pockets\crud\resource_walker {
    
    use update_terms;

    protected string $crud_action = 'update';

    /**
        Updates posts featured image. 
    */
    #[ \pockets\crud\schema\attribute( [
        'type' => "number"
    ] ) ]
    function image( int $ID ) : array | \Wp_Error {
        
        if( $ID === 0 ){
            delete_post_meta( $this->resource->ID, '_thumbnail_id' );
            return [ 'updated' => true, 'message' => "Unset Featured Image"];
        }

        if( get_post($ID) && wp_get_attachment_image( $ID, 'thumbnail' ) ) {
            update_post_meta( $this->resource->ID, '_thumbnail_id', $ID );
            return [ 'updated' => true, 'message' => "Updated Featured Image"];
        }

        return \pockets::error("Image does not exist");

    }
    
    /**
        Updates post content
    */
    #[ \pockets\crud\schema\attribute( [
        'type' => "string"
    ] ) ]
    function content( string $content ) : array {
        $this->resource->post_content = wp_kses_post($content);
        return [ 'updated' => true ];
    }
    
    /**
        Updates post status. Should be one of registered post statuses
    */
    #[ \pockets\crud\schema\attribute( [
        'type' => 'string',
        'includes' => [
            '$ref' => '/wp/post/statuses/'
        ]
    ] ) ]
    function status( string $status ) : array {
        $this->resource->post_status = wp_kses_post($status);
        return [ 'updated' => true ];
    }
    
    /**
        Updates post title
    */
    #[ \pockets\crud\schema\attribute( [
        'type' => "string"
    ] ) ]
    function title( string $title ) : array {
        $this->resource->post_title = wp_kses_post( $title );
        return [ 'updated' => true ];
    }

    /**
        Updates post type. Should be one of registered post types.
    */
    #[ \pockets\crud\schema\attribute( [
        'type' => "string",
        'includes' => [
            '$ref' => '/wp/post/types/'
        ]
    ] ) ]
    function type( string $type ) : array {
        $this->resource->post_type = wp_kses_post($type);
        return [ 'updated' => true ];
    }

    /**
        Updates acf content.
    */
    #[ \pockets\crud\schema\attribute('\pockets\crud\models\acf\adapter::getSchema') ]
    function acf( array $args, $iterator ) : array | \WP_Error {
        return \pockets\crud\models\acf\adapter::updateField( $args, $this->resource );
    }

    /**
        Updates post meta
        Uses a whitelisting approach for security. 
        New keys can be added via register_meta();
        @class-document-link https://developer.wordpress.org/reference/functions/register_meta/ 
    */
    #[ \pockets\crud\schema\attribute( __CLASS__.'::__get_meta_schema' ) ]
    function meta( array $args ) : array | \WP_Error {
        if( !is_array( $args ) ) return \pockets::error("Denied");
        return \pockets\crud\reducers\whitelist_reducer::walk(
            array: $args, 
            callback: fn( $value, $iterator ) => update_post_meta( $this->resource->ID, $iterator->key, $iterator->value ) ? "Updated" : "Updated",
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
            action: "update",
            meta_object_type: "post",
        );
    }

    /**
        Updates post slug.
    */
    #[ \pockets\crud\schema\attribute( [ 'type' => "string" ] ) ]
    function slug( string $slug ) : array {
        $this->resource->post_name = $slug;
        return [ 'updated' => true ];
    }

}
 
 