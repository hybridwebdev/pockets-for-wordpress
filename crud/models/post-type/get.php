<?php
namespace pockets\crud\models\post_type;
defined('ABSPATH') || exit;

/**
    Takes request and turns it into instance of an instance of Wp_Post_Type or Wp_Error
    arguments
        - string: valid post type name
        - array
            one of: 
                - by (required) oneof ['name']
                - name (required) valid taxonomy name
*/
#[ \pockets\crud\schema\attribute(__NAMESPACE__."\get_resource_schema") ]
class get extends \pockets\crud\get_resource {

    use validate_resource;

    public string $default_array_by = 'name';

    function request_using_object() {
        return $this->resource;
    }

    function request_using_string() {
        return $this->getPostTypeObject( $this->resource );
    }

    function array_by_name() {
        return $this->getPostTypeObject( $this->resource['name'] ?? false );
    }

    private function getPostTypeObject( bool | string $name) {
        if( !is_string( $name ) ) {
            return \pockets::error("You must provide a name argument as a string.");
        }
        $result = get_post_type_object( $name );
        if( !$result ) {
            return \pockets::error("Post type not found.");
        }
        return $result;
    }

}   

function get_resource_schema(){
    return [
        'type' => [ 'object', 'string' ],
        'includes' => [
            '$ref' => '/wp/post/types/'
        ],
        'additionalProperties' => false,
        'properties' => [
            'name' => [ 
                'type' => 'string',
                'includes' => [
                    '$ref' => '/wp/post/types/'
                ]
            ],
            'by' => [ 
                'type' => 'string',
                'enum' => [ 'name' ] 
            ]
        ],
        'required' => ['by', 'name']
    ];
}