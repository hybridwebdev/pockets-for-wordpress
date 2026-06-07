<?php 
namespace pockets\utils\data_schema;

#[\AllowDynamicProperties]
class sanitizer {
    
    use shared;   
    
    /**
        Used to apply sanitation rules to data-schema.
    */
    function apply(){

        return recursive_reducer_without_aliasing::walk(
            array: $this->rules->all(),
            callback: [ $this, 'iterate' ]
        );

    }
    
    /**
        @class-document-advanced 
    */
    function iterate( $value, $iterator ){

        $rules = $this->rules->getRulesByPath( $iterator->currentDotPath, [] );
        
        $rules = array_filter(
            array: $rules,
            callback: fn( $rule ) => $rule['type'] == 'sanitize'
        );

        if( $this->ruleFilter instanceof \Closure ) {
            $rules = array_filter(
                array: $rules,
                callback: fn( $rule ) => call_user_func( $this->ruleFilter, $rule, $iterator )
            );
        }
    
        if( $this->iteratorMiddleware instanceof \Closure ) {
            
            $filtered = call_user_func( $this->iteratorMiddleware, $iterator );
            
            if( $filtered instanceof \Closure ) {
                return $filtered();
            }

        }
        
        if( !in_array( $iterator->currentDotPath, $this->rules->getWhiteListedPaths() ) ) {

            return $iterator::$skip;

        }

        return array_reduce( 
            array: $rules,
            callback: function( $acc, $rule )  use( $iterator ) {
                $cb = $this->mapCallback( $rule['callback'] ?? false );
                if( $cb ) {
                    return call_user_func( $cb, $acc, $iterator, ...array_diff_key( $rule, [ 'type' => true, 'callback' => true ] ) );
                }
                return $acc;
            },
            initial: $this->data->get( $iterator->currentDotPath, $iterator::$skip )
        );

    }
 
}