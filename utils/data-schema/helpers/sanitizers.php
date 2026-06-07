<?php 
namespace pockets\utils\data_schema\helpers;

/**
    Class used to provide sanitization callbacks.
*/
#[\AllowDynamicProperties]
class sanitizers {

    use shared;

    static function sanitize_email( $value ){
        return filter_var( $value, FILTER_SANITIZE_EMAIL );
    }

    static function sanitize_text_field( $value ) {
        if( !is_string( $value) ) {
            return $value;
        }
        return sanitize_text_field( $value );
    }

    static function wp_kses( $value, $iterator, $allowed_html = 'post', $allowed_protocols = [] ) {
        return wp_kses(
            content: $value,
            allowed_html: $allowed_html,
            allowed_protocols: $allowed_protocols
        );
    }
    
    static function htmlspecialchars( $value ){
        return htmlspecialchars( $value );
    }

    static function strip_tags( $value ) {
        //phpcs:ignore WordPress.WP.AlternativeFunctions.strip_tags_strip_tags
        return strip_tags( $value );
    }

    static function boolean( $value ) {
        return filter_var( $value, FILTER_VALIDATE_BOOLEAN );
    }
    
    static function trusted( $value ) {
        return fn() => $value;
    }

    static function array( $value ) {
        return fn() => $value;
    }

    static function walk_array( ...$args ) {
        return sanitize_array_recursively::sanitize(...$args );
    }

    static function integer( $value ){

        $fallack = false;

        if( is_int( $value ) ) {
            return $value;
        }
        
        return $fallack;

    }
    
}
    