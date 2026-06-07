<?php
namespace pockets\crud\models\crud_resource;
trait permissions {

    public function canCreate() : bool { 
        if( !$this->validateResource() ) return false;
        return $this->resource->canCreate();
    }

    public function canRead() : bool { 
        if( !$this->validateResource() ) return false;
        return $this->resource->canRead();
    }

    public function canUpdate() : bool { 
        if( !$this->validateResource() ) return false;
        return $this->resource->canUpdate();
    }
    
    public function canDelete() : bool { 
        if( !$this->validateResource() ) return false;
        return $this->resource->canDelete();
    }

}