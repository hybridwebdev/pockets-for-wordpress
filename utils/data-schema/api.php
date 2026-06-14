<?php 
namespace pockets\utils\data_schema;

use pockets\utils\array_dot_prop;

#[\AllowDynamicProperties]
/**
    Serves as the main entry point for applying a data schema.
*/
class api {
    use validation_messages;
    /**
        @class-document-advanced 
        Used to instantiate class.
    */
    static function init( ...$args ) : api {
        return new static( ...$args );
    }
    
    /**
        Rules to apply to sanitizer and validater
    */
    public array | generate_rules $rules = [];
  
    function __construct(
        
        /**
            Data to parse
        */
        public array $data,
        
        /**
            Rules to apply to sanitizer and validater
        */
        array $rules,
        
        /**
            FilterKey is used in apply_filters($filterKey, $this )
            to provide a way to externally modify things like rules for the instance.
        */
        private string $filterKey,
        
        /**
            List of approved callbacks validator can apply
        */
        private array $validators = [],
        
        /**
            List of approved callbacks sanitzer can apply
        */
        private array $sanitizers = [],

        

    ) {
        
        $this->rules = generate_rules::init( $rules );
        /**
            Gives rules class access to current data object 
        */
        $this->rules->getData = [ $this, 'getData' ];
        
        /**
            Apply default helper methods
        */
        $this->sanitizers = array_merge( helpers\sanitizers::callbacks(), $this->sanitizers );
        $this->validators = array_merge( helpers\validators::callbacks(), $this->validators );
        
        /**
            Filters instance so hooks can modify, such as adding rules.
        */
        apply_filters( $this->filterKey, $this );

    }
    
    /**
        Applies both sanitize and validate methods to data. 
    */
    function apply() : api {
        $this->sanitize();
        $this->validate();
        return $this;
    }

    /**
        Returns true if validation contains no errors
    */
    final function isValid() : bool {
        
        $filtered = array_filter(
            array: $this->validation ?? [],
            callback: fn( $validation ) => $validation['type'] == 'error'
        );

        return count( $filtered ) == 0;

    }
    
    /**
        Accepts same args rules->path does.
        Set's path and then iterates rules for that path and sanitizes
        part of the data.  
    */
    function sanitizePath( ...$args ) : api {

        $this->rules->path( ...$args );

        $data = $this->getData();
 
        foreach( $this->rules->path as $currentPath ) {
            
            $result = sanitizer::init( 
                data: $data,
                rules: $this->rules,
                callbacks: $this->sanitizers,
                ruleFilter: function( $rule, $iterator ) use( $currentPath ) {
                    /**
                        only apply sanitize rules for current path in iteration
                    */
                    return $iterator->currentDotPath == $currentPath;
                }
            )->apply();

            $data->set( $currentPath, array_dot_prop::init( $result )->get( $currentPath ) );

        }
        
        $this->data = $data->all();
        return $this;

    }

    function sanitize() : api {

        $this->data = sanitizer::init( 
            data: array_dot_prop::init( $this->data ),
            rules: $this->rules,
            callbacks: $this->sanitizers,
        )->apply();

        return $this;

    }

    /**
        Validates data 
    */
    function validate() : api {
        
        $this->validation = validator::init(
            data: array_dot_prop::init( $this->data ),
            rules: $this->rules,
            callbacks: $this->validators
        )->apply();

        return $this;

    }

    /**
        Registers sanitizer method.
    */
    function addSanitizer( string $name, callable $callback ) : api  {
        $this->sanitizers[ $name ] = $callback;
        return $this;
    }

    function addSanitizers( array $sanitizers ) : api {
        $this->sanitizers = array_merge( $sanitizers, $this->sanitizers );
        return $this;
    }

    /**
        Registers validator method.
    */
    function addValidator( string $name, callable $callback ) : api  {
        $this->validators[ $name ] = $callback;
        return $this;
    }

    function addValidators( array $validators ) : api {
        $this->validators = array_merge( $validators, $this->validators );
        return $this;
    }

    function set( ...$args ) : api {
        $this->data = $this->getData()->set( ...$args )->all();
        return $this;
    }

    function get( ...$args ) {
        return $this->getData()->get( ...$args );
    }
      
    function getData(){
        return array_dot_prop::init( $this->data );
    }

}