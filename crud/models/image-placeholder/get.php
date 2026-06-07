<?php
namespace pockets\crud\models\image_placeholder;

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
    'type' => [ 'object' ],
    'properties' => [
        'url' => [
            'type' => "string",
        ],
        'description' => [
            'type' => "string",
        ],
        'title' => [
            'type' => "string",
        ],
        'mime_type' => [
            'type' => "string",
        ],
        'width' => [
            'type' => "integer",
        ],
        'height' => [
            'type' => "integer",
        ],
        'size' => [ 
            'type' => ["string"], 
            'includes'  => [
                '$ref' => '/wp/image/sizes/'
            ]
        ],
    ],
    'required' => [],
    'additionalProperties' => false
] ) ] 
class get extends \pockets\crud\get_resource {

    function request_using_object(){

        $data = [
            'ID'             => 0,
            'post_type'      => 'attachment',
            'post_status'    => 'inherit',
            'post_mime_type' => $this->resource->get( 'mime_type', 'image/jpeg' ),
            'post_title'     => $this->resource->get( 'title', "" ),
            'guid'           => $this->resource->get( 'url', 'https://example.com/fake.jpg' ),
            'post_content' => $this->resource->get( "description", "" ),
        ]; 
        
        return new \WP_Post( (object) $data );

    }

}   
 