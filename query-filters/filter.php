<?php
namespace pockets\query_filters;

trait filter {

    /**
        Used to get hookname used to bind registered filters to.  
    */
    abstract static function getFilterName() : string ;
    
    static function register(
        /**
            Display name of hook, for things like option selects 
        */
        string $title,
        /**
            Callback applied to hook when applicable.  
        */
        callable $callback,
        /**
            Key used to find hook when being applied 
        */
        string $value
    ){
 
        add_filter( static::getFilterName(), fn( array $filters ) => [
            ...$filters,
            [
                'title'    => $title,
                'callback' => $callback,
                'value'    => $value,
            ],
        ] );

    }

    static function get(){
        return apply_filters( static::getFilterName(), [] );
    }
    
}