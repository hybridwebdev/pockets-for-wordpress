<?php
namespace pockets\crud\models\acf;
/**
    This class serves as an abstraction of advanced custom fields.
    https://www.advancedcustomfields.com/
*/
class adapter {
    static function getSchema(){
        return [
            'type' => [ 'array', 'object' ]
        ];
    }
    /**
        $target should be any type that get_field accepts. 
    */
    static function getField( ?array $data, mixed $target ) : array | \WP_Error {
        if( is_wp_error( $installed = \pockets::pluginInstalled('acf') ) ) return $installed;
        if( !is_array( $data ) ) return \pockets::error("Denied");
        return \pockets\crud\reducer::applyIterator(
            array: $data, 
            callback: fn( $_, $iterator ) => get_field( $iterator->key, $target )
        );
    }
    /**
        $target should be any type that update_field accepts. 
    */
    static function updateField( ?array $data, mixed $target ) : array | \WP_Error {
        if( is_wp_error( $installed = \pockets::pluginInstalled('acf') ) ) return $installed;
        if( !is_array( $data ) ) return \pockets::error("Denied");
        return \pockets\crud\reducer::applyIterator(
            array: $data, 
            callback: fn($_, $iterator ) => update_field($iterator->key, $iterator->value, $target )
        );
    }
}