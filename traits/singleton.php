<?php
namespace pockets\traits;

/**
    Provides a singleton pattern where __contruct is run once and then
    a cached version of the instance is returned. 
*/
trait singleton {

    private static $instance;

    public static function init(...$args){
        if(!static::$instance) {
            static::$instance = new static(...$args);
        }
        return static::$instance;
    }

}