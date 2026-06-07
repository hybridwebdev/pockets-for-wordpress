<?php 
namespace pockets\crud\models\term;

trait permissions {

    use validate_resource;
    
    function canCreate() : bool {
        if( !current_user_can('manage_categories') ) return false;
        return true;
    }

    function canRead() : bool {
        if( 
            !$this->validateResource() 
        ) return false;
        return true;
    }

    function canUpdate() : bool {
        if( 
            !current_user_can('manage_categories') 
            || 
            !$this->validateResource() 
        ) return false;
        return true;
    }

    function canDelete() : bool {
        if( 
            !current_user_can('manage_categories') 
            || 
            !$this->validateResource()
        ) return false;
        return true;
    }

}