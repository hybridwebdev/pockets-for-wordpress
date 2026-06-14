<?php
namespace pockets\crud\models\wp_user;

class update extends \pockets\crud\resource_walker {
    
    #[ \pockets\crud\schema\attribute('\pockets\crud\models\acf\adapter::getSchema') ]
    function acf( array $args ) : array | \WP_Error {
        return \pockets\crud\models\acf\adapter::updateField( $args, $this->resource );
    }

    function email( string $email ){
        $this->resource->user_email = $email;
    }

    function nicename( string $name ){
        $this->resource->user_nicename = $name;
    }

    function display_name( string $name )  {
        return $this->resource->display_name = $name;
    }

    /**
        Updates user meta
        Uses a whitelisting approach for security. 
        New keys can be added via register_meta();
        @class-document-link https://developer.wordpress.org/reference/functions/register_meta/ 
    */
    #[ \pockets\crud\schema\attribute( __CLASS__.'::__get_meta_schema' ) ]
    function meta( array $args ) : array | \WP_Error {
        if( !is_array( $args ) ) return \pockets::error("Denied");
        return \pockets\crud\reducers\whitelist_reducer::walk(
            array: $args, 
            callback: fn( $value, $iterator ) => update_user_meta( $this->resource->ID, $iterator->key, $iterator->value ) ? "Updated" : "Updated",
            whitelist: array_keys( get_registered_meta_keys('user') )
        );
    }
    /**
        @class-document-advanced
        This is used to dynamically generate schema for the meta function.
    */    
    static function __get_meta_schema(){
        return \pockets\crud\schema\registered_meta_keys::build( 
            meta_keys: get_registered_meta_keys('user'),
            action: "update",
            meta_object_type: "user",
        );
    }

}