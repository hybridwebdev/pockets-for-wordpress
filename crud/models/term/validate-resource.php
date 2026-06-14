<?php 
namespace pockets\crud\models\term;

trait validate_resource {
    
    public function validateResource() : bool {
        return $this->resource instanceof \Wp_Term;
    }

}