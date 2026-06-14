<?php
namespace pockets\crud\models\post;

/**
    @class-document-link WP_Post
    
    Accepts 
        - object which is instance of WP_Post
        - array containing
            [
                "by" => "", one of "ID"
                "ID" => "" valid post ID
            ]
        - number which is a valid post ID
*/
#[\pockets\crud\schema\attribute( [
    'type' => ['integer', 'object' ],
    'properties' => [
        'by' => [
            'type' => "string",
            'enum' => ['ID'],
        ],
        "ID" => [
            'type' => "integer"
        ],
    ],
    'required' => ['by', "ID"],
    'additionalProperties' => false
] ) ]
class get extends \pockets\crud\get_resource {

    use validate_resource;

    public string $default_array_by = 'ID';

    function array_by_ID() {
        $ID = $this->resource['ID'] ?? false;
        if(!$ID || !is_numeric($ID) ) return;
        return get_post($ID);
    }

    function request_using_integer(){
        if( !$this->resource ) {
            return;
        }
        return get_post($this->resource);
    }

    function array_by_slug(){

        $slug = $this->resource['slug'] ?? false;
        $post_type = $this->resource['post_type'] ?? false;
        if( !$slug || !$post_type ) return;
        return get_page_by_path( $slug, OBJECT, $post_type );

    }

}   
 