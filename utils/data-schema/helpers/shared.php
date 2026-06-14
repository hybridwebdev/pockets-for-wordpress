<?php 
namespace pockets\utils\data_schema\helpers;

trait shared {
    
    /**
        @class-document-advanced
    */
    
    static $methods = [];

    static function callbacks() {

        $blackList = [
            'callbacks',
        ];

        $class = new \ReflectionClass( static::class );
        
        $methods = array_filter(
            array: $class->getMethods( \ReflectionMethod::IS_STATIC ),
            callback: fn( $method ) => $method->isPublic() && !in_array( 
                needle: $method->getName(), 
                haystack: $blackList 
            )
        );

        return array_reduce( 
            array: $methods, 
            callback: function( $acc, $method ) {
                $methodName = $method->getName();
                $acc[ $methodName ] = [ static::class, $methodName ];
                return $acc;
            }, 
            initial: static::$methods
        );
        
    }
    
}