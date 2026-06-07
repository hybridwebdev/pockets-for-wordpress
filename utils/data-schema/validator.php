<?php 

namespace pockets\utils\data_schema;

use pockets\crud\reducers\recursive_reducer;

#[\AllowDynamicProperties] 
class validator {
    
    use shared;   
    use validation_messages;

    /**
        Should be called to apply validator rules to data-schema
    */
    function apply(){

        recursive_reducer_without_aliasing::walk(
            array: $this->rules->all(),
            callback: [ $this, 'iterate' ]
        );

        return $this->validation;
        
    }
    
    /**
        @class-document-advanced 
    */
    function iterate( $value, $iterator ){
        
        $rules = $this->rules->getRulesByPath( $iterator->currentDotPath, [] );
        
        $rules = array_filter(
            array: $rules,
            callback: fn( $rule ) => $rule['type'] == 'validate'
        );

        array_map(
            array: $rules,
            callback: function( $rule ) use( $iterator ) {
                
                $validatorFN = $this->mapCallback( $rule['callback'] ?? false );
                
                if ( $validatorFN ) {
                    
                    $response = call_user_func( 
                        $validatorFN, 
                        $this->data->get( $iterator->currentDotPath ), 
                        $rule,
                        $this, 
                        $iterator->currentDotPath
                    );
                    
                    /**
                        ValidatorFN can return one of 3 types, with the type determing
                        what validation message and callback, if any, applies.
                            - wp_error
                                Will use the instances error message and throw a validation error
                            - bool
                                will add success/error message and use rules corresponding 
                                message. if no message set, nothing is thrown.
                            - null
                                Nothing applies. 
                    */
                                        
                    $message = match (true) {
                        is_wp_error( $response ) => $rule['error-message'] ?? $response->get_error_message(),
                        is_bool( $response ) => $response 
                            ? $rule['success-message'] ?? false 
                            : $rule['error-message'] ?? false,
                        default => null,
                    };

                    $messageFN = match (true) {
                        is_wp_error( $response ) => 'add_error_message',
                        is_bool( $response ) => $response ? 'add_success_message' : 'add_error_message',
                        default => null,
                    };

                    if ( $message && $messageFN ) {
                        return call_user_func( [ $this, $messageFN ],  $iterator->currentDotPath, $message );
                    }

                }

            }
            
        );

        /**
            As this function is self-recursing, must return $iterator to continue
            recursion.
        */

        if( !in_array( $iterator->currentDotPath, $this->rules->getWhiteListedPaths() ) ) {
            return $iterator::$skip;
        }
        
        return $iterator->value;
       
    }

}