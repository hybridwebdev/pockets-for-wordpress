<?php 
// phpcs:ignoreFile 
// because phpcs chokes on this file

namespace pockets\utils\data_schema;

use pockets\utils\array_dot_prop;
use pockets\crud\reducers\recursive_reducer;

/**
    Creates an API that can be used by schemas to set rules, such as for 
    validation and sanitization.
    Methods can be chained.
*/
#[\AllowDynamicProperties]
class generate_rules extends array_dot_prop {

    /**
        @class-document-advanced
        Used internally to key schemas.
    */
    static  string $schema_prop = '__schema_prop__';
    /**
        @class-document-advanced
        List of all properties set by rules
    */
    public false | array $whiteListedPaths = false;
    /**
        @class-document-advanced
    */
    public string | array | null $path = null;

    /**
        @class-document-advanced
    */
    public function __call( $name, $arguments ) {

        if ( in_array( $name, [ 'validate', 'sanitize' ] ) ) {
            
            $name = sprintf("__%s", $name);

            if ( is_array( $this->path ) || is_string( $this->path ) ) {
            
                if ( is_array( $this->path ) ) {

                    array_map(
                        array: $this->path,
                        callback: fn( $path ) => $this->$name( $path, ...$arguments )
                    );

                    return $this; 

                }

                array_unshift( $arguments, $this->path );

            }

        }
        
        return $this->$name( ...$arguments );

    }

    /**
        * Sets the internal path used by subsequent operations, such as `->validate`.
        *
        * This method accepts a single string, an array of string paths, or `null`.
        * If a string path ends with `.*`, it will be treated as a wildcard path and
        * automatically expanded into an array of sub-paths based on the keys found
        * in the referenced data.
        *
        * Optionally, you can exclude certain keys from the expansion using the
        * `$exclude` parameter. This can be either:
        * - An array of keys to omit
        * - A callback function that receives a key and returns `true` to include it, or `false` to exclude
        *
        * ### Examples:
        * ```php
        * $validator->path('user.profile.*');
        * $validator->path('settings.*', ['internal', 'deprecated']);
        * $validator->path('data.items.*', fn($key) => str_starts_with($key, 'public_'));
        * ```
        *
        * @param string|array|null $path     The path or list of paths to set. Use `.*` to expand keys dynamically.
        * @param array|callable    $exclude  Optional. Array of keys to exclude or a callback to filter keys.
        *
        * @return $this
        *
        * @class-document-advanced
    */

    function path( string | array | null $path, array | callable $exclude = [] ){
        
        if ( gettype( $path ) === 'string' ) {

            if ( str_ends_with( $path, '.*' ) ) {
                
                $trimmed = substr( $path, 0, -2 );

                $data = call_user_func( $this->getData )->get( $trimmed );

                if ( is_array( $data ) ) {
                    
                    $keys = array_filter( 
                        array: array_keys( $data ), 
                        callback: fn ( $key ) => is_callable( $exclude ) 
                            ? $exclude( $key ) 
                            : !in_array( $key, $exclude )
                    );

                    $path = array_map(
                        callback: fn( string $key ) => sprintf( "%s.%s", $trimmed, $key ),
                        array: $keys
                    );

                }

            }

        }

        if( is_string( $path) ) {
            $path = [ $path ];
        }
        
        $this->path = $path;
        return $this;

    }

    /**
    *   Called with validate() 
    */
    function __validate( 
        /**
            Property path to validate
        */
        string $path, 
        /**
            Can be either a string that matches to registered validators,
            or a function.
        */
        mixed $callback, 
        /**
            Gets passed through $rules argument in callback
        */
        array $additionalArgs = [] 
    ){
        
        $this->merge( sprintf('%s.%s', $path, static::$schema_prop ), [
            array_merge( $additionalArgs, [
                'type' => 'validate',
                'callback' => $callback
            ] )
        ] );

        return $this;
        
    }

    /**
    *   Called with sanitize() 
    */
    function __sanitize( string $path, mixed $callback, array $additionalArgs = [] ){
        
        $this->merge( sprintf('%s.%s', $path, static::$schema_prop ), [
            array_merge( $additionalArgs, [
                'type' => 'sanitize',
                'callback' => $callback
            ] )
        ] );

        return $this;

    }

    /**
        @class-document-advanced
    */
    function getRulesByPath( string $path, $fallback = [] ){
        return $this->get( sprintf( '%s.%s', $path, static::$schema_prop ), $fallback );
    }

    /**
        @class-document-advanced
    */
    function getWhiteListedPaths(){

        if( !$this->whiteListedPaths ) {

            $this->whiteListedPaths = [];
            
            recursive_reducer::walk(
                array: $this->all(),
                callback: function( $value, $iterator ){
                    if( $iterator->key == static::$schema_prop ) {
                        return;
                    }
                    $this->whiteListedPaths[] = $iterator->currentDotPath;
                    return $iterator->value;
                }
            );

        }

        return $this->whiteListedPaths;
        
    }
 
}
