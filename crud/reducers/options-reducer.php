<?php
namespace pockets\crud\reducers;
use \pockets\crud\reducer;

class options_reducer {
    
    private function __construct( 

        /**
            Key that options are saved to and loaded from.
        */
        public string $option_key, 

        /**
            Object type used to register meta key
            @class-document-link https://developer.wordpress.org/reference/functions/register_meta/
        */
        public string $meta_object_type,
        
        /**
            Object subtype used to register meta key
            @class-document-link https://developer.wordpress.org/reference/functions/register_meta/
        */
        public string $meta_object_subtype = ''
    ){}
    
    private function get_registered_meta_keys(){
        return get_registered_meta_keys( $this->meta_object_type, $this->meta_object_subtype );
    }

    function read(array $read) : array {

        $meta_keys = $this->get_registered_meta_keys();

        $options = get_option( $this->option_key );

        if( !is_array($options) ) {
            $options = [];
        }

        return \pockets\crud\reducers\whitelist_reducer::walk(
            array: $read, 
            callback: function($_, $iterator) use($options, $meta_keys) {
                if( key_exists($iterator->key, $options ) ) {
                    return $options[$iterator->key];
                }
                return $meta_keys[$iterator->key]['default'] ?? null;
            },
            whitelist: array_keys( $meta_keys )
        );
        
    }

    function update( $update ) : array | \WP_Error {
        
        $meta_keys = $this->get_registered_meta_keys();

        $options = get_option( $this->option_key );

        if( !is_array($options) ) {
            $options = [];
        }
        
        $response = \pockets\crud\reducers\whitelist_reducer::walk(
            array: $update, 
            callback: function($_, $iterator) use(&$options, $meta_keys) { 
                
                $auth_callback = $meta_keys[$iterator->key]['auth_callback'] ?? null;

                if( is_callable( $auth_callback ) && ( $authorized = $auth_callback() ) !==true)  {
                    return $authorized;
                }

                $sanitizor_fallback = fn($v) => $v;

                $sanitizor = $meta_keys[$iterator->key]['sanitize_callback'] ?? $sanitizor_fallback;

                $sanitizor = is_callable($sanitizor) ? $sanitizor : $sanitizor_fallback;

                $options[$iterator->key] = $sanitizor($iterator->value);

                return true;

            },
            whitelist: array_keys( $meta_keys )
        );

        update_option( $this->option_key, $options );

        return $response;

    }

    static function init(...$args){
        return new static(...$args);
    }

    function getSchema( string $action = 'read' ){
        return \pockets\crud\schema\registered_meta_keys::build(
            meta_keys: $this->get_registered_meta_keys(),
            action: $action,
            meta_object_type: $this->meta_object_type
        );
    }

}