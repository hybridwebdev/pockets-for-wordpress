<?php
namespace pockets\crud\models\crud_resource;
trait validate_resource {
    /**
        In this model, $this->resource should be the relevant crud model for a request.
        Eg a post crud model.
    */
    function validateResource() : bool {
        return $this->resource instanceof \pockets\crud\model;
    }
}