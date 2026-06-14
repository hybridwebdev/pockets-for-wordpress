<?php 
namespace pockets\crud\models\taxonomy;
trait permissions {
    
    use validate_resource;

    function canCreate() : bool {
        return true;
    }

    function canRead() : bool {
        if( !$this->validateResource() ) {
            return false;
        }
        return true;
    }

    public function canUpdate() : bool { 
        if( !$this->validateResource() ) {
            return false;
        }
        if( !current_user_can( 'administrator' ) ) {
            return false;
        }
        return true;
    }
    
    function canDelete() : bool {
        return true;
    }

}