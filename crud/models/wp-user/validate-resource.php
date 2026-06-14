<?php
namespace pockets\crud\models\wp_user;

trait validate_resource {
    function validateResource() : bool {
        return $this->resource instanceof \WP_User;
    }
}