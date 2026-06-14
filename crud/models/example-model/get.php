<?php
namespace pockets\crud\models\example_model;

class get extends \pockets\crud\get_resource {

    use validate_resource;

    function request_using_object() {
        return $this->resource;
    }

    function request_using_array() {
        return $this->resource;
    }

}   
