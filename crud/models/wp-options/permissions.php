<?php
namespace pockets\crud\models\wp_options;

trait permissions {
    
    /**
        The create method is disabled on this model
    */
    function canCreate() : bool {
        return false;
    }
    /**
        canRead is always true because permission checks are done
        on the individual option key in the read method.
    */
    function canRead() : bool {
        return true;
    }

    function canUpdate() : bool {
        return current_user_can('manage_options');
    }
    
    /**
        The delete method is disabled on this model
    */
    function canDelete() : bool {
        return false;
    }

}