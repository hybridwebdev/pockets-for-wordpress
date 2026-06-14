<?php
namespace pockets\crud\models\post_type;
trait permissions {

    /**
        @class-document-advanced
        The create action is unavailable on this model.
    */
    public function canCreate() : bool { 
        if( !$this->validateResource() ) {
            return false;
        }
        return true;
    }

    public function canRead() : bool { 
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
    
    /**
        @class-document-advanced
        The delete action is unavailable on this model.
    */
    public function canDelete() : bool { 
        return false;
    }

}