<?php
namespace pockets\crud\models\wp_user;

class read extends \pockets\crud\resource_walker {
    
    use \pockets\crud\render;
    
    function filterAllowedMethods( string $method ) : bool {

        if( is_super_admin() ) {
            return true;
        }
        
        if( \pockets::crud_relay_can::check( 'read', 'wp-user' ) === true ) {
            return in_array( 
                needle: $method, 
                haystack: [ 
                    'ID', 
                    'display_name',
                    'nicename'
                ] 
            );
        }

        return true;

    }

    function ID() : int | \WP_Error {
        return $this->resource->ID ?? \pockets::error("Denied");
    }

    function login() : string | \WP_Error {
        return $this->resource->user_login;
    }
    
    function pass() : string | \WP_Error {
        return $this->resource->user_pass;
    }

    function nicename() : string | \WP_Error {
        return $this->resource->user_nicename ?? \pockets::error("Denied");
    }

    function email() : string | \WP_Error {
        return $this->resource->user_email;
    }

    function url() : string {
        return $this->resource->user_url;
    }

    function registered() : string {
        return $this->resource->user_registered;
    }

    function activation_key() : string {
        return $this->resource->user_activation_key;
        return \pockets::error("Denied");
    }

    function status() : string {
        return $this->resource->user_status;
        return \pockets::error("Denied");
    }

    function display_name() : string | \WP_Error {
        return $this->resource->display_name ?? \pockets::error("Denied");
    }

    function caps() : array {
        return $this->resource->caps;
    }

    function cap_key() : string {
        return $this->resource->cap_key;
    }

    function roles() : array {
        return $this->resource->roles;
    }

    function allcaps() : array {
        return $this->resource->allcaps;
    }
    
    function filter() : mixed {
        return $this->resource->filter;
    }
    
    #[ \pockets\crud\schema\attribute('\pockets\crud\models\acf\adapter::getSchema') ]
    function acf( array $args ) : array | \WP_Error {
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
            callback: fn($_, $iterator) => get_user_meta( $this->resource->ID, $iterator->key, true ),
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
            action: "read",
            meta_object_type: "user",
        );
    }

}