<?php 
namespace pockets\crud\models\image;
trait permissions {
    
    function canRead() : bool {

        if( !$this->validateResource() ) return false;
        
        if( $this->resource->post_type !='attachment' ) {
            return false;
        }
        
        /**
            Images are considered public.
        */
        
        return true;

    }

}