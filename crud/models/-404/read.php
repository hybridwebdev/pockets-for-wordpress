<?php
namespace pockets\crud\models\_404;

class read extends \pockets\crud\resource_walker {
    
    use \pockets\crud\render;
    
    function crud_resource() : array {
        
        return [
            'object_type' => '404'
        ];

    }

}