<?php
namespace pockets\crud\models\taxonomy;

class read extends \pockets\crud\resource_walker {
    
    /**

        Returns taxonomy name
    */
    function name() : string {
        return $this->resource->name;
    }

    /**

        Returns crud resource
    */
    function crud_resource() : array {
        return [
            'object_type' => "wp_taxonomy",
            'name' => $this->resource->name,
        ];
    }
 
    /**

        Returns acf data
        @todo security need to sanitize this
    */
    #[ \pockets\crud\schema\attribute( '\pockets\crud\models\acf\adapter::getSchema' ) ]
    function acf( ?array $read ) : array | \WP_Error {
        return \pockets\crud\models\acf\adapter::getField( $read, "{$this->resource->name}_options" );
    }

    /**
        Used to read meta data
    */
    #[ \pockets\crud\schema\attribute( __CLASS__.'::__get_meta_schema' ) ]
    function meta(array $read) : array {
        return \pockets\crud\reducers\options_reducer::init( 
            option_key:"pockets-cpt-{$this->resource->name}-meta",
            meta_object_type: "pockets-taxonomy-meta",
        )->read( $read );
    }

    /**
        @class-document-advanced
        This is used to dynamically generate schema for the meta function.
    */    
    static function __get_meta_schema(){
        return \pockets\crud\reducers\options_reducer::init( 
            option_key: "",
            meta_object_type: "pockets-taxonomy-meta",
        )->getSchema( action: "read" );
    }

}