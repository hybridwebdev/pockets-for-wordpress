<?php
namespace pockets\crud\models\post_type;

trait validate_resource {
    function validateResource() : bool {
        return $this->resource instanceof \Wp_Post_Type;
    }
}