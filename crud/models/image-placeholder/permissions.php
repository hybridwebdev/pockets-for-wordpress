<?php 
namespace pockets\crud\models\image_placeholder;
/**
    This module is read only
*/
trait permissions {
    
    function canCreate() : bool {
        return false;
    }

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

    function canUpdate() : bool {
        return false;
    }
    
    function canDelete() : bool {
        return false;
    }

}