<?php 
namespace pockets\crud\models\term;

class read extends \pockets\crud\resource_walker {
    
    use \pockets\crud\render;
    
    /**
        returns terms slug 
    */
    function slug() : string {
        return $this->resource->slug;
    }
    /**
        returns terms group 
    */
    function term_group() : string {
        return $this->resource->term_group;
    }
    /**
        returns terms taxonmy_id 
    */
    function term_taxonomy_id() : int {
        return $this->resource->term_taxonomy_id;
    }
    /**
        returns terms taxonomy 
    */
    function taxonomy() : string  {
        return $this->resource->taxonomy;
    }
    /**
        returns terms parent id 
    */
    function parent() : int {
        return $this->resource->parent;
    }
    /**
        returns terms count. 
    */
    function count() : int {
        return $this->resource->count;
    }
    /**
        returns terms filter 
    */
    function filter() : string {
        return $this->resource->filter;
    }
    /**
        returns terms name 
    */
    function name() : string {
        return $this->resource->name;
    }
    /**
        returns terms description 
    */
    function description() : string {
        return $this->resource->description;
    }
    /**
        returns terms ID 
    */
    function ID() : int {
        return $this->resource->term_id;
    }
    /**
        returns terms link 
    */
    function link() : string {
        return get_term_link($this->resource->term_id);
    }
    /**
        returns terms children
    */
    #[\pockets\crud\schema\attribute(['$ref' => '/terms/read_resource/'])]
    function terms( ?array $read ) : array | \WP_Error {
        $IDS = get_terms( [
            'parent' => $this->resource->term_id, 
            'taxonomy' => $this->resource->taxonomy,
            'hide_empty' => false
        ] );
        if( is_wp_error( $IDS ) ) return $IDS;
        return \pockets::crud( 'terms' )::init( [ 'by' => "iterate", "items" => $IDS ] )->read($read);
    }
    /**
        You can provide an array of meta_keys, and this will return an array of results for the corresponding field.
    */
    #[ \pockets\crud\schema\attribute('\pockets\crud\models\acf\adapter::getSchema') ]
    function acf( ?array $read ) : array | \WP_Error {
        return \pockets\crud\models\acf\adapter::getField($read, $this->resource);
    }

    /**
        You can provide an array of meta_keys, and this will return an array of results 
        for the corresponding field.
    */
    #[ \pockets\crud\schema\attribute( __CLASS__.'::__get_meta_schema' ) ]
    function meta( ?array $read ) : array | \WP_Error {
        if( !is_array($read) ) return \pockets::error("You must provide an array of fields to read");

        return \pockets\crud\reducers\whitelist_reducer::walk(
            array: $read, 
            callback: fn($_, $iterator ) => get_term_meta($this->resource->term_id, $iterator->key, true),
            whitelist: array_keys( get_registered_meta_keys('term') )
        );

    }

    /**
        @class-document-advanced
        This is used to dynamically generate schema for the meta function.
    */    
    static function __get_meta_schema(){
        return \pockets\crud\schema\registered_meta_keys::build( 
            meta_keys: get_registered_meta_keys('term'),
            action: "read",
            meta_object_type: "term",
        );
    }

    /**
        Returns array of information that can be used to request this resource.
    */
    function crud_resource(){
        return [
            'ID' => $this->resource->term_id,
            'object_type' => 'wp_term',
            'name' => $this->name()
        ];
    }

    function edit_link(){
        return get_edit_term_link( $this->resource );
    }
}