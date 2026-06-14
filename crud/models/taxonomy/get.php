<?php
namespace pockets\crud\models\taxonomy;

/**
    @see https://developer.wordpress.org/reference/classes/wp_taxonomy/
    @class-document-link WP_Taxonomy

    Takes request and transforms it into instance of WP_Taxonomy
        arguments
            string - valid taxonomy name
            array  - should be one of:
                [
                    'by => string oneof "name",
                    'name' => valid taxonomy name
                ]
*/
#[\pockets\crud\schema\attribute( [
    'type' => ["object", "string"],
    'properties' => [
        'by' => [
            'type' => "string",
            'enum' => ['name']
        ],
        'name' => [ 
            'type' => "string",
            'includes' => [
                '$ref' => '/wp/taxonomies/names/'
            ]
        ],
    ],
    'additionalProperties' => false,
    'required' => ['name', 'by'],
    'includes' => [
        '$ref' => '/wp/taxonomies/names/'
    ],
] ) ]
class get extends \pockets\crud\get_resource {

    use validate_resource;

    public string $default_array_by = 'name';

    function request_using_object() {
        if( $this->validateResource() ) {
            return $this->resource;
        }
        return \pockets::error('You must provide a valid instance of a WP_Taxonmy class.');    
    }
 
    function request_using_string() {
        return $this->getTaxonomyObject( $this->resource );
    }

    function array_by_name() {
        return $this->getTaxonomyObject( $this->resource['name'] ?? false );
    }

    private function getTaxonomyObject( bool | string $name) {
        if( !is_string( $name ) ) {
            return \pockets::error('You must provide a name argument as a string.');    
        }
        $result = get_taxonomy( $name );
        if( !$result ) {
            return \pockets::error('Taxonomy not found.');
        }
        return $result;
    }

}   
