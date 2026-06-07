<?php
namespace pockets\crud\models\wp_options;
 
class model extends \pockets\crud\model {

    use permissions;

    public static string $model_name = 'wp-options';

    /**
        create method is not available on this model. 
    */
    #[\pockets\crud\schema\attribute( [ 'crudActionDisabled' => "create" ] ) ]
    function create($input, $output = []){
        return \pockets::error('Denied');
    }
     
    function read( array $args ) : array | \WP_Error {
        return \pockets\crud\reducers\whitelist_reducer::walk(
            array: $args, 
            callback: function($_, $iterator) : mixed {
                if( !$this->apply_auth_callback( $iterator->key, 'read' ) ) {
                    return \pockets::error("denied");
                }
                $args = [ $iterator->key ];
                if($iterator->value ?? false) {
                    $args[] = $iterator->value;
                }
                return call_user_func_array('get_option', $args);
            },
            whitelist: array_keys( get_registered_settings() )
        );

    }
 
    function update( array $input, array | bool $output = [] ) : array | \WP_Error {

        if( !$this->canUpdate() ) return \pockets::error("Denied");

        $updated = \pockets\crud\reducers\whitelist_reducer::walk(
            array: $input, 
            callback: function( $value, $iterator ) {
                if( !$this->apply_auth_callback( $iterator->key, 'update') ) {
                    return \pockets::error('Denied');
                }
                return update_option( $iterator->key, $iterator->value ) ? "Updated" : "Updated";
            },
            whitelist: array_keys( get_registered_settings() )
        );

        if( $output === true ) {
            return $updated;
        }
        
        return $this->read($output);

    }
    /**
        delete method is not available on this model. 
    */
    #[\pockets\crud\schema\attribute( [ 'crudActionDisabled' => "delete" ] ) ]
    function delete($input){
        return \pockets::error('Denied');
    }
    
    /**
        - takes option key, looks for entry in registered_settings.
            - if one found 
                - looks for auth_callback entry, and checks if its callable.
                    - If callable, invokes it with the $action as argument.
            if not found it will apply the $fallback method that corresponds
            to the $action.
    */
    private function apply_auth_callback( string $option_key, string $action ){
        
        $fallback = match( $action ) {
            default => fn() => false,
            'read', 
            'update' => fn() => current_user_can("manage_options")
        };

        $setting = get_registered_settings()[$option_key] ?? [
            'auth_callback' => $fallback
        ];

        $validator = $setting['auth_callback'] ?? $fallback;

        $validator = is_callable($validator) ? $validator : $fallback;
        
        return call_user_func( $validator, $action );

    }

     /**
        @class-document-advanced
        Overriding parts of schema as it's built dynamically.
    */    
    static function getSchema( ) : array {
        
        $schema = parent::getSchema();

        $schema['/wp-options/read_resource/'] = static::__get_registered_settings_schema('read');
        $schema['/wp-options/update_resource/'] =  static::__get_registered_settings_schema('update');
        
        return $schema;
        
    }

    /**
        @class-document-advanced
        This is used to dynamically generate schema for registered_settings.
    */    
    static function __get_registered_settings_schema( string $action ){
        return \pockets\crud\schema\registered_options::build( 
            registered_settings: get_registered_settings(),
            action: $action,
        );
    }

}