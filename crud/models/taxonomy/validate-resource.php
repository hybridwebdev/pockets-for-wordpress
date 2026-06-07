<?php
namespace pockets\crud\models\taxonomy;

trait validate_resource {
    function validateResource() : bool {
        return $this->resource instanceof \WP_Taxonomy;
    }
}