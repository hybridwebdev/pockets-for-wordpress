<?php
namespace pockets\utils;
#[\AllowDynamicProperties]
class get_class_documentation {

    function get_method(string $key){
        $entry = $this->class->getMethod($key);
        if($entry) return $this->document_method($entry);
    }

    function get_property(string $key){
        $entry = $this->class->getProperty($key);
        if($entry) return $this->document_property($entry);
    }
    /**
        Call this with a class name to get back all of the information about the class.
    */
	function build( string $class_name, array $data ){

        $this->data = $data;

		$this->class = new \ReflectionClass($class_name);

        $this->data['info'] = $this->document_class_info($this->class);

        $this->data['constants'] = array_reduce(
            initial: [],
            array: $this->class->getReflectionConstants(), 
            callback: function($acc, $entry) {
                $data = $this->document_constant($entry);
                if(!$data) return $acc;
                return $acc + [ 
                    $data['name'] => $data
                ];
            },
        );
        $this->data['properties'] = array_reduce(
            initial: [],
            array: $this->class->getProperties(), 
            callback: function($acc, $entry) {
                $data = $this->document_property($entry);
                if(!$data) return $acc;
                return $acc + [ 
                    $data['name'] => $data
                ];
            },
        );
        
        $this->data['methods'] = array_reduce( 
            initial: [],
            array: $this->class->getMethods(),
            callback: function($acc, $entry) {
                $data = $this->document_method($entry);
                if(!$data) return $acc;
                return $acc + [ 
                    $data['name'] => $data
                ];
            },
        );

        return $this->data;

	}

    function parseCommentTags(string $comment) {
        
        $tags = [];
        
        preg_match_all('/@([a-zA-Z0-9_-]+?)\s+(.*?)\n/i', $comment, $annotations);
        
        if( isset( $annotations[1] ) AND count( $annotations[1] ) != 0){
            $tags = array_combine( array_map( "trim", $annotations[1] ), array_map( "trim", $annotations[2] ) );
        }
        
        return $tags;

    }

    function parseComment(string $comment){

        $formatted = $comment;
        
        // $formatted = str_replace( ['/**', "/*", "*/"], '', $formatted);
        $formatted = preg_split("/\r\n|\n|\r/", $formatted );
        $formatted = implode(PHP_EOL, array_map('trim', $formatted ) );

        return [
            'raw' => $comment!='' ? $comment : false,
            'formatted' => $formatted
        ];

    }

    function collect_attributes( object $rc ){
        return array_reduce(
            initial: [],
            array: $rc->getAttributes(), 
            callback: function($acc, $item){
                $name = $item->getName();

                $split = explode('\\', $name);
                $key = end( $split );
                $acc[ $name ] = match( 
                    class_exists( $name ) 
                ) {
                    true =>  $item->newInstance(),
                    false => $item->getArguments()
                };
                return $acc;
            }, 
        );
    }

    /**
        returns straight array so args remain in order they are defined on function
     */
    function document_method_args( $arg ) {
        
        $name = $arg->getName();
        $optional = $arg->isOptional();
        $type = $arg->getType();

        $data = [ 
            'name' => $name,
            'optional' => $optional,
            'attributes' => $this->collect_attributes($arg),
            //'comment' => $this->parseComment( $arg->getDocComment() ),
        ];

        if( $arg->isDefaultValueAvailable() ) {
            $data['default'] = $arg->getDefaultValue();
        }

        if( $type ) {
            $data['type'] = str_replace( search: ['?'], replace: [''], subject: (string) $type);
        }

        return $data;
    }
    /**
        document_method
     */
    function document_method( \ReflectionMethod $method ) : array | bool {
        
        $name = $method->getName();

        $args = array_map(
            [$this, 'document_method_args'], 
            $method->getParameters(), 
        );

        $argNames = array_map( fn($arg) => "$" . $arg->getName(), $method->getParameters());

        $returnType = $method->getReturnType();

        $data = [
            'name' => $name,
            'comment' => $this->parseComment( $method->getDocComment() ),
            'tags' => $this->parseCommentTags($method->getDocComment()),
            'args' => count( $args ) > 0 ? $args : false,
            'isStatic' => $method->isStatic(),
            'isProtected' => $method->isProtected(),
            'isFinal' => $method->isFinal(),
            'isPrivate' => $method->isPrivate(),
            'argNames' => $argNames,
            'attributes' => $this->collect_attributes($method),
        ];

        $properties = [
            $data['isFinal'] ? "final" : "",
            $data['isProtected'] ? "protected" : "",
            $data['isStatic'] ? "static" : "",
            $data['isPrivate'] ? "private" : "",
        ];  
        
        $properties = implode(' ', array_filter($properties, 'trim') );
        
        $data['properties'] = $properties!='' ? $properties : false;

        if($returnType) {
            $data['return'] = (string) $returnType;
        }

        return $data;

    }
 /**
        document_constant
    */
    function document_constant( \ReflectionClassConstant  $property) : array | bool {

        $name = $property->getName();
        
        $data = [
            'name' => $name,
            'comment' => $this->parseComment( $property->getDocComment() ),
            'tags' => $this->parseCommentTags($property->getDocComment()),
            'value' => $property->getValue(),
            'isProtected' => $property->isProtected(),
            'isPrivate' => $property->isPrivate(),
            'attributes' => $this->collect_attributes($property)
        ] ;

        $properties = [
            $data['isProtected'] ? "protected" : "",
            $data['isPrivate'] ? "private" : "",
        ];  
        
        $properties = implode(' ', array_filter($properties, 'trim') );
        
        $data['properties'] = $properties!='' ? $properties : false;


        return $data;

    }

    /**
        document_property
    */
    function document_property( \ReflectionProperty  $property) : array | bool {
        
        $name = $property->getName();
        $type = $property->getType();
        
        $data = [
            'name' => $name,
            'comment' => $this->parseComment( $property->getDocComment() ),
            'tags' => $this->parseCommentTags($property->getDocComment()),
            'value' => $property->getDefaultValue(),
            'isStatic' => $property->isStatic(),
            'isProtected' => $property->isProtected(),
            'isPrivate' => $property->isPrivate(),
            'attributes' => $this->collect_attributes($property)
        ] ;

        $properties = [
            $data['isProtected'] ? "protected" : "",
            $data['isStatic'] ? "static" : "",
            $data['isPrivate'] ? "private" : "",
        ];  
        
        $properties = implode(' ', array_filter($properties, 'trim') );
        
        $data['properties'] = $properties!='' ? $properties : false;

        if( $type ) {
            $data['type'] = (string) $type;
        }

        return $data;

    }

    function document_class_info( \ReflectionClass $class) : array {
        
        $data = [
            'name' => $class->getName(),
            'comment' => $this->parseComment( $class->getDocComment() ),
            'tags' => $this->parseCommentTags( $class->getDocComment() ),
            'isFinal' => $class->isFinal(),
            'isAbstract' => $class->isAbstract(),
            'attributes' => $this->collect_attributes($class),
        ];

        $properties = [
            $data['isFinal'] ? "final" : "",
            $data['isAbstract'] ? "abstract" : "",
        ];  
        
        $properties = implode(' ', array_filter($properties, 'trim') );
        
        $data['properties'] = $properties!='' ? $properties : false;

        return $data;

    }

    function addTag( array $entry, string $k, mixed $value){
        $entry['tags'][$k] = $value;
        return $entry;
    }

    /**
        This should be used to invoke the class.
        The __construct() method of this class is open and should be used for any setup you want to do before calling the
        build method.
    */
    static function init(...$args){
        return new static(...$args);
    }

}
