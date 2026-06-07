<?php
namespace pockets\crud;
trait request_using {

    /**
        request_using_boolean
        Handles typeof boolean eg: true | false
    */
    function request_using_boolean(){
        return $this->resource;
    }

    /**
        request_using_integer
        Handles typeof integer eg: 1
    */
    function request_using_integer(){
        return $this->resource;
    }

    /**
        request_using_double
        double is a float eg: 1.00
    */
    function request_using_double(){
        return $this->resource;
    }

    /**
        request_using_string
        Handles typeof string eg: "1"
    */
    function request_using_string(){
        return $this->resource;
    }

    /**
        request_using_array
        Handles typeof array eg: ["1"]
    */
    function request_using_array() {

        list(
            'by' => $by, 
        ) = wp_parse_args( $this->resource, [
            'by' => $this->default_array_by
        ] );    

        $fn = [$this, "array_by_{$by}"];

        if( is_callable($fn) ) return call_user_func( $fn, $this->resource );
        return \pockets::error("No valid handler for array request");

    }

    /**
        request_using_object 
        Handles typeof object eg { foo: "bar" }
    */
    function request_using_object(){
        return $this->resource;
    }

    /** 
        request_using_resource
        resource is a special data type that refers to any external source, such as a file, stream or database. 
    */
    function request_using_resource(){
        return $this->resource;
    }

    /**
        request_using_null
        Handles typeof null
    */
    function request_using_null(){
        return $this->resource;
    }

    /**
        request_using_unknown 
        Handles typeof unknown
    */
    function request_using_unknown(){
        return $this->resource;
    }

}

/**

    @class get_resource

    @link https://www.geeksforgeeks.org/php-gettype-function/

    This class is used by crud models to handle transforming a request into a resource.
    Every type maps to a corresponding requesting_using_{$type} function
*/
class get_resource {

    use request_using;

    /**
        @class-document-advanced
        Represents data that is fetched using the request_using_{$type} functions.  
        Used for CRUD operations by crud models.
    */
    public mixed $resource;

    /**
        Should map to an array_by_{$default_array_by} method
        eg: if $default_array_by was "ID" then it would call array_by_ID.
        For example you could query a post or term by => "ID" or "slug".
    */
    public string $default_array_by;
    
     /**
        @class-document-advanced
        Generates Schema for this class. 
    */
    static function getSchema(string $schema_ID) : array {
        return \pockets\crud\schema\get_resource::init()->build( static::class, $schema_ID );
    }

    /**
        @class-document-advanced
        @function validateResource
        Used to ensure resource is of the correct format/type.
    */
    public function validateResource() : bool {
        return true;
    }

    /**
        @class-document-advanced
        
        Takes the typeof $request and maps it a coresponding request_using_{$type} method.
        Eg: request_using_array() if the request is an array.

        @return \WP_Error or any type
    */
    final function request($request = null) : mixed {

        $this->resource = $request;
        
        $type = gettype( $this->resource );

        $handler = strtolower("request_using_{$type}");

        $fn = [$this, $handler ];

        if( is_callable($fn) ) {
            $this->resource = call_user_func( $fn );
        }

        if( is_wp_error( $this->resource ) ) {
            return $this->resource;
        }

        if( !$this->validateResource() ) {
            return \pockets::error('Request failed');
        }

        return $this->resource;
        
    }

    /**
        @class-document-advanced
        
        Used to instantiate class and call request method.
    */
    static function init($request){
        return (new static)->request($request);
    }

}