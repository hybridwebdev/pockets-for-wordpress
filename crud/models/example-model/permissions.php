<?php 
namespace pockets\crud\models\example_model;
trait permissions {
    
    use validate_resource;

    function canCreate() : bool {
        return true;
    }

    function canRead() : bool {
        return true;
    }

    function canUpdate() : bool {
        return true;
    }
    
    function canDelete() : bool {
        return true;
    }

}