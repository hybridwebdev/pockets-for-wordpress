<?php 
namespace pockets\crud;

/**
    A crud resource is a reference to data, such as a post object. 
    It can be any piece of data that the models will interact with.
*/
#[\AllowDynamicProperties]
class resource_walker {

    /**
        This is used as a way to identify the type of operation
        this walker performs on a resource.
        should be read | update
    */
    protected string $crud_action = 'read';

    /**
        @class-document-advanced
        can be overridden to conditionally filter what methods are available.
    */
    function filterAllowedMethods( string $method ) : bool {
        return true;
    }

    /**
        @class-document-advanced
    */
    function __construct( public mixed $resource ){

        $this->fields = array_reduce(
            array: array_filter(
                array: get_class_methods($this), 
                callback: function( string $method) {
                    if(
                        in_array( $method, static::getReservedMethods() ) 
                        || 
                        str_starts_with( haystack: $method, needle: "__" )
                    ) {
                        return false;
                    }
                    return $this->filterAllowedMethods( $method );
                }
                    
            ), 
            callback: fn(array $acc, string $k) => $acc + [ $k => [ $this, $k ] ],
            initial: [],
        );
        
    }

    /**
        @class-document-advanced

        Any methods not in the array returned from getReservedMethods will be mapped to 
        fields for the read/update operation.
        This can be used to exclude methods you do not want publicly available for the operation.
        It also prevents these methods from having crud documentation applied to them.
    */
    static function getReservedMethods() : array {
        return [  'walk', 'getReservedMethods', 'init', 'read', 'getSchema' ];
    }

    /**
        @class-document-advanced
        Generates Schema for this class. 
        $action should be one of "update" | "read"
    */
    static function getSchema(string $schema_ID) : array { 
        return \pockets\crud\schema\resource_walker::init()->build( static::class, $schema_ID );
    }

    /**
        @class-document-advanced
        This module should be called using the ::init() method
    */
    static function init(...$args){
        return new static(...$args);
    }

    /**
        @class-document-advanced
        applies reducer::applyIterator 
    */
    function walk( array $fields ) : array {
        return reducer::applyIterator($fields, $this->fields );
    }

}