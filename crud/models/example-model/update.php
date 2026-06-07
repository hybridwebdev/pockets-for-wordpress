<?php
namespace pockets\crud\models\example_model;

class update extends \pockets\crud\resource_walker {
    
    function field() : string {
        /**
            $this->resource contains the request handled by the get_resource method
        */
        return 'updated';
    }

}