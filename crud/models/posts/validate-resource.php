<?php
namespace pockets\crud\models\posts;
trait validate_resource {
    function validateResource() : bool {
        return $this->resource instanceof \Wp_Query;
    }
}