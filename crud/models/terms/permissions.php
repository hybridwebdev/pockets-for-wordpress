<?php 
namespace pockets\crud\models\terms;

trait permissions {
    
    /**
        For safer and more secure implemntation, this module is read only.
    */

    function canCreate() : bool {
        return false;;
    }

    function canRead() : bool {
        if( !$this->validateResource() ) return false;
        return true;
    }

    function canUpdate() : bool {
        return false;
    }

    function canDelete() : bool {
        return false;
    }

    
}
