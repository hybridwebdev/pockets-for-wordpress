<?php
namespace pockets\traits;

/**
     
*/
trait init_new {

    public static function init(...$args){
        return new static(...$args);
    }

}