<?php 
namespace pockets\crud\models\post_type;

class update extends \pockets\crud\resource_walker {

    /**
        You can provide an array of meta_keys, and this will return an array of results for the corresponding field.
        @todo security need to sanitize this
    */
    #[ \pockets\crud\schema\attribute( '\pockets\crud\models\acf\adapter::getSchema' ) ]
    function acf( ?array $update ) : array | \WP_Error {
        return \pockets\crud\models\acf\adapter::updateField( $update, "{$this->resource->name}_acf_options" );
    }
    
    /**
        Used to update meta data
    */
    #[ \pockets\crud\schema\attribute( __CLASS__.'::__get_meta_schema' ) ]
    function meta($update) : array | \WP_Error {
        return \pockets\crud\reducers\options_reducer::init( 
            option_key:"pockets-cpt-{$this->resource->name}-meta",
            meta_object_type: "pockets-post-type-meta",
        )->update($update);
    }
    
    /**
        @class-document-advanced
        This is used to dynamically generate schema for the meta function.
    */
    static function __get_meta_schema(){
        return \pockets\crud\reducers\options_reducer::init( 
            option_key: "",
            meta_object_type: "pockets-post-type-meta",
        )->getSchema( action: "update" );
    }

}