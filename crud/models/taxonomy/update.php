<?php
namespace pockets\crud\models\taxonomy;

class update extends \pockets\crud\resource_walker {
    
    /**
        returns array of booleans, 1 for each updated key  
        @todo security need to sanitize this
    */
    #[ \pockets\crud\schema\attribute( '\pockets\crud\models\acf\adapter::getSchema' ) ]
    function acf( ?array $update ) : array | \WP_Error {
        return \pockets\crud\models\acf\adapter::updateField( $update, "{$this->resource->name}_options" );
    }
    
    /**
        Used to read meta data
    */
    #[ \pockets\crud\schema\attribute( __CLASS__.'::__get_meta_schema' ) ]
    function meta(array $update) : array {
        return \pockets\crud\reducers\options_reducer::init( 
            option_key:"pockets-cpt-{$this->resource->name}-meta",
            meta_object_type: "pockets-taxonomy-meta",
        )->update( $update );
    }

    /**
        @class-document-advanced
        This is used to dynamically generate schema for the meta function.
    */    
    static function __get_meta_schema(){
        return \pockets\crud\reducers\options_reducer::init( 
            option_key: "",
            meta_object_type: "pockets-taxonomy-meta",
        )->getSchema( action: "update" );
    }

}