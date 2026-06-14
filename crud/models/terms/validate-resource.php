<?php
namespace pockets\crud\models\terms;

trait validate_resource {
    function validateResource() : bool {
        return $this->resource instanceof \WP_Term_Query;
    }
}