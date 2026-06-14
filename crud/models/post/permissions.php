<?php
namespace pockets\crud\models\post;

trait permissions {
    function canCreate() : bool {
        if( !current_user_can('edit_posts') ) return false;
        return true;
    }
    function canRead() : bool {
        
        if( !$this->validateResource() ) return false;
        
        if( \pockets::crud_relay_can::check( 'read', static::$model_name ) ) {
            return true;
        }

        if( 
            !is_user_logged_in() 
            && 
            $this->read_resource( ['status'] )['status'] != 'publish'
        ) return false;
        
        return true;
        
    }
    function canUpdate() : bool {
        if( 
            !current_user_can('edit_post', $this->resource ) 
            || 
            !$this->validateResource()
        ) return false;
        return true;
    }
    function canDelete() : bool {
        if( 
            !current_user_can('edit_post', $this->resource ) 
            ||
            !$this->validateResource()
        ) return false;
        return true;
    }
}