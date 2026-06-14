<?php
namespace pockets\crud\models\posts;

trait permissions {
    
    /**
        @class-document-advanced
        For safer and more secure implemntation, this module is read only.
    */

    function canCreate() : bool {
        return false;;
    }

    function canRead() : bool {
        if( !$this->validateResource() ) return false;
        return true;
    }
    /**
        @class-document-advanced
        For safer and more secure implemntation, this module is read only.
    */
    function canUpdate() : bool {
        return false;
    }

    /**
        @class-document-advanced
        For safer and more secure implemntation, this module is read only.
    */
    function canDelete() : bool {
        return false;
    }

}
