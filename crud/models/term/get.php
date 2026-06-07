<?php 
namespace pockets\crud\models\term;

/**
    
    Takes request and transforms it into an instance of WP_Term or Wp_Error
    @class-document-link Wp_Term
    
    Arguments
        - object
            instance of Wp_Term class
        - integer 
            valid term_id
        - array
            expects one of
                [ 'by' => "ID", "ID" => valid term id ]
                [ 'by' => "slug", "taxonomy" => valid taxonomy name, 'slug' => valid term slug ]
*/
#[\pockets\crud\schema\attribute([
    'type' => [ 'integer', 'object' ],
    'required' => ['by'],
    'additionalProperties' => false,
    'properties' => [
        'by' => [
            'type' => "string",
            'enum' => ['ID', 'slug'],
        ],
        'slug' => [
            'type' => 'string'
        ],
        'taxonomy' => [
            'type' => 'string',
            'includes' => [
                '$ref' => '/wp/taxonomies/names/'
            ]
        ],
        "ID" => ['type' => 'integer']
    ],
    'allOf' => [
        [
            'if' => [
                'properties' => [
                    'by' => [ 'const' => "slug" ]
                ],
                'required' => ['by']
            ],
            'then' => [
                'required' => [ 'slug', 'taxonomy' ],
            ],
        ],
        [
            'if' => [
                'properties' => [
                    'by' => [ 'const' => "ID" ]
                ],
                'required' => ['by'],
            ],
            'then' => [
                'required' => ['ID'],
            ],
        ]
    ],
])]
class get extends \pockets\crud\get_resource {
    
    public string $default_array_by = 'ID';
    
    use validate_resource;

    function request_using_integer(){
        return get_term($this->resource);
    }

    function array_by_ID() {
        $ID = $this->resource['ID'] ?? false;
        if( !$ID || !is_numeric($ID) ) return;
        return get_term($ID);
    }

    function array_by_slug() {
            
        $query = wp_parse_args($this->resource, [
            'slug' => null,
            'taxonomy' => null
        ]);

        return get_term_by( 'slug', $query['slug'], $query['taxonomy']);

    }
    
}

