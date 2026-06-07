<?php 
namespace pockets\crud\models\wp_user;
trait permissions {
    
    use validate_resource;

    function canCreate() : bool {
        
        if(
            current_user_can('administrator')
        ) {
            return true;
        }

        return false;

    }

    function canRead() : bool {

        if( \pockets::crud_relay_can::check( 'read', static::$model_name ) ) {
            return true;
        }

        if( !$this->validateResource() ) {
            return false;
        }
        
        if( $this->resource->ID === get_current_user_id() ) {
            return true;
        }

        if( current_user_can('administrator') ) {
            return true;
        }

        return false;

    }

    function canUpdate() : bool {
        
        if( !$this->validateResource() ) {
            return false;
        }
        
        if( $this->resource->ID === get_current_user_id() ) {
            return true;
        }

        if( current_user_can('administrator') ) {
            return true;
        }

        return false;

    }
    
    function canDelete() : bool {
        
        if( 
            !$this->validateResource()
        ) return false;

        if( current_user_can('administrator') ) return true;

        return false;

    }

}