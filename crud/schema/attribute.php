<?php 
namespace pockets\crud\schema;

#[\AllowDynamicProperties]
#[\Attribute]
class attribute {
    function __construct( array | callable $schema, array $args = [] ) {

        if( is_callable( $schema ) ) $schema = call_user_func( $schema, ...$args );

        array_map(
            fn($key, $value) => $this->{$key} = $value,
            array_keys( $schema ), 
            array_values(  $schema )
        );

    }
} 
