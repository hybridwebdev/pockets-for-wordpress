<?php 
namespace pockets\utils\data_schema;

use pockets\utils\array_dot_prop;

trait shared {
    
    /**
        @class-document-advanced 
    */
    static function init( ...$args ){
        return new static( ...$args );
    }

    function __construct(
        
        /**
            Schema data to parse
        */
        public array_dot_prop $data,
        
        /**
            Schema rules to apply for validation/sanitization
        */
        public generate_rules $rules,
        
        /**
            List of approved callbacks that can be applied 
        */
        public array $callbacks = [],

        public bool | \Closure $ruleFilter = false,
        public bool | \Closure $iteratorMiddleware = false

    ) {}

    /**
        Ensures that only registered callbacks or inline functions can be run.
        
        Used by validator and sanitizer to inspect the rules callback:

            - If closure, it will run
            
            - if callback is a string, checks to see
              - if it's in this->callbacks 
                - if found, it runs
        
        @class-document-advanced
    */
    function mapCallback( mixed $callback ){

        if( $callback instanceof \Closure ) {
            return $callback;
        }

        if( is_string( $callback ) ) {
            
            $found = in_array( 
                needle: $callback,
                haystack: array_keys( $this->callbacks )  
            );
            
            if( !$found ){
                $callback = false;
            }

            if( $found ) {
                $callback = $this->callbacks[ $callback ];
            }

        }

        if( is_callable( $callback ) ) {
            return $callback;
        }
        
        return false;

    }
    
}