<?php 
namespace pockets\utils\data_schema\helpers;

#[\AllowDynamicProperties]
class validators {
    
    use shared;

    static function required( $value ){
        if( $value == '' ) {
            return \pockets::error("Field is required");
        }
    }

    static function isEmail( $value ){
        if( !filter_var( $value, FILTER_VALIDATE_EMAIL) ) {
            return \pockets::error('Not a valid email');
        }
    }

    static function length( $value, $rule, $schema, $path ) {

        if( !is_string( $value ) ) {
            return;
        }
        
        if( $rule['min'] && strlen( $value ) < $rule['min'] ) {
            
            $schema->add_error_message( $path, $rule['min-error-message'] ?? sprintf( "Minimum length is %d.", $rule['min'] ) );

        }

        if( $rule['max'] && strlen( $value ) > $rule['max'] ) {
            
            $schema->add_error_message( $path, $rule['max-error-message'] ?? sprintf( "Maximum length is %d.", $rule['max'] ) );

        }

    }
 
    static function matches( $value, $rule, $schema ) {

        if( $schema->data->get( $rule['path'] ) !== $value ) {
            return \pockets::error( sprintf( "Value should match %s", $rule['path'] ) );
        }

    }

}
    