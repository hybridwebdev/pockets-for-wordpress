<?php
namespace pockets\crud\models\post;

trait validate_resource {
    
    /**
        Should be an instance of WP_Post
        @class-document-link WP_Post
    */
    function validateResource() : bool {
        return $this->resource instanceof \WP_Post;
    }
}