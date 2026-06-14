<?php 
namespace pockets\crud\models\term;
use \pockets\crud\reducer;
class update extends \pockets\crud\resource_walker {

    /**
        Updates term description 
    */
    #[\pockets\crud\schema\attribute( [ 'type' => "string" ] ) ]
    function description( string $value) : array {
        $this->resource->description = wp_kses_post($value);
        return [ 'updated' => true ];
    }

    /**
        Updates term parent ID 
    */
    #[\pockets\crud\schema\attribute( [ 'type' => "integer" ] ) ]
    function parent( int $value ) : array | \Wp_Error {
        if( term_exists($value) || $value == 0) {
            $this->resource->parent = $value;
            return [ 'updated' => true ];
        }
        return \pockets::error("Term does not exist");
    }

    /**
        Updates term slug 
    */
    #[\pockets\crud\schema\attribute( [ 'type' => "string" ] ) ]
    function slug( string $value) : array {
        $this->resource->slug = sanitize_title($value, "");
        return [ 'updated' => true ];
    }
    
    /**
        Updates term name 
    */
    #[\pockets\crud\schema\attribute( [ 'type' => "string" ] ) ]
    function name( string $value) : array {
        $this->resource->name  = wp_kses_post($value);
        return [ 'updated' => true ];
    }

    /**
        Updates term taxonmy. Must provide valid taxonomy name 
    */
    #[\pockets\crud\schema\attribute( [ 
        'type' => 'string',
        'includes' => [
            '$ref' => "/wp/taxonomies/names/"
        ]
    ] ) ]
    function taxonomy( string $value) : array | \Wp_Error {
        if( taxonomy_exists($value) ) {
            $this->resource->taxonomy = $value;
            return [ 'updated' => true ];
        }
        return \pockets::error("Taxonomy does not exist");
    }

    /**
        Updates ACF data.
        @todo security this needs sanitization
    */
    #[ \pockets\crud\schema\attribute('\pockets\crud\models\acf\adapter::getSchema') ]
    function acf( ?array $update ) : array | \WP_Error {
        return \pockets\crud\models\acf\adapter::updateField( $update, $this->resource );
    }

    /**
        Updates term meta data.
        @todo security this needs sanitization
    */
    #[ \pockets\crud\schema\attribute( __CLASS__.'::__get_meta_schema' ) ]
    function meta( ?array $update ) : array | \WP_Error {
        if( !is_array($update) ) return \pockets::error("You must provide an array of key=>values to update");

        return \pockets\crud\reducers\whitelist_reducer::walk(
            array: $update, 
            callback: fn( $update, $iterator ) => update_term_meta($this->resource->term_id, $iterator->key, $iterator->value),
            whitelist: array_keys( get_registered_meta_keys('term') )
        );

    }

    /**
        @class-document-advanced
        This is used to dynamically generate schema for the meta function.
    */    
    static function __get_meta_schema(){
        return \pockets\crud\schema\registered_meta_keys::build( 
            meta_keys: get_registered_meta_keys('term'),
            action: "update",
            meta_object_type: "term",
        );
    }

}