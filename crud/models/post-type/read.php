<?php 
namespace pockets\crud\models\post_type;


class read extends \pockets\crud\resource_walker {
    use \pockets\crud\render;

    /**
        return Post types name
    */
    function name() : string {
        return $this->resource->name;
    }

    /**
        You can provide an array of meta_keys, and this will return an array of results for the corresponding field.
        @todo security need to sanitize this
    */
    #[ \pockets\crud\schema\attribute( '\pockets\crud\models\acf\adapter::getSchema' ) ]
    function acf( ?array $read ) : array | \WP_Error {
        return \pockets\crud\models\acf\adapter::getField($read, "{$this->resource->name}_acf_options");
    }

    /**
        You can pass 'relative' => true to make link relative
    */
    #[ \pockets\crud\schema\attribute( [
        'type' => 'object',
        'properties' => [
            'relative' => [ 'type' => "boolean" ]
        ],
        'additionalProperties' => false
    ] ) ]
    function link( array | null $args = [ 'relative' => true ] ) : string {
        
        $link = get_post_type_archive_link($this->resource->name);
        if( $args['relative'] ?? false === true) {
            return wp_make_link_relative( $link );
        }
        return $link;
    }
    
    /**
        If post type has an archive, this will return its slug.     
    */
    function slug() : string | bool {
        return $this->resource->rewrite['slug'] ?? $this->resource->rewrite ?? false;
    }
    
     /**
        Returns array of information that can be used to request this resource.
    */
    function crud_resource() : array {
        return [
            'object_type' => "wp_post_type",
            'name' => $this->resource->name,
        ];
    }
  
    /**
        Used to read meta data
    */
    #[ \pockets\crud\schema\attribute( __CLASS__.'::__get_meta_schema' ) ]
    function meta(array $read) : array {
        return \pockets\crud\reducers\options_reducer::init( 
            option_key:"pockets-cpt-{$this->resource->name}-meta",
            meta_object_type: "pockets-post-type-meta",
        )->read( $read );
    }

    /**
        @class-document-advanced
        This is used to dynamically generate schema for the meta function.
    */    
    static function __get_meta_schema(){
        return \pockets\crud\reducers\options_reducer::init( 
            option_key: "",
            meta_object_type: "pockets-post-type-meta",
        )->getSchema( action: "read" );
    }

}