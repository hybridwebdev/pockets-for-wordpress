<?php 
namespace pockets\utils\data_schema\helpers;
use pockets\utils\data_schema\recursive_reducer_without_aliasing;

/**
    Recursively sanitizes a mixed data structure (arrays, strings, etc.)

    This class walks through each value in the provided array and:
    - Applies $handlers callaback based on $values type. 
        Eg: gettype($value) = 'string' would call $handlers['string'].

    Intended for recursively sanitizing nested arrays.
*/
 
class sanitize_array_recursively {

    static function fallbackHandler( $value, $iterator){
        return $value;
    }

    static function sanitize ( $value, $iterator, $handlers = [] ) {

        if( !is_array( $value ) ) {
            return $value;
        }

        if( !is_array( $handlers ) ) {
            $handlers = [];
        }
        /**
            Returns a function so that array can be handled manually, instead of the 
            top level sanitizer recursing it.  

            By default, the only value type that gets sanitized is strings, which defaults
            to sanitize_text_field.
        */

        $defaultHandlers = [
            'string'            => fn( $value ) => sanitize_text_field( $value ),
            'boolean'           => [ static::class, 'fallbackHandler' ],
            'integer'           => [ static::class, 'fallbackHandler' ],
            'double'            => [ static::class, 'fallbackHandler' ],    
            'array'             => [ static::class, 'fallbackHandler' ],
            'object'            => [ static::class, 'fallbackHandler' ],
            'resource'          => [ static::class, 'fallbackHandler' ],
            'resource (closed)' => [ static::class, 'fallbackHandler' ],
            'NULL'              => [ static::class, 'fallbackHandler' ],
            'unknown type'      => [ static::class, 'fallbackHandler' ],
        ];

        $handlers = wp_parse_args( $handlers, $defaultHandlers );

        return fn() => recursive_reducer_without_aliasing::walk( 
            array: $value,
            callback: function( $value, $iterator ) use ( $handlers ) {

                $handler = $handlers[ gettype( $value ) ] ?? [ static::class, 'fallbackHandler' ];

                if( !is_callable( $handler) ) {
                    $handler = [ static::class, 'fallbackHandler' ];
                }

                return call_user_func( $handler, $value, $iterator );

            }
        );

    }

}
 