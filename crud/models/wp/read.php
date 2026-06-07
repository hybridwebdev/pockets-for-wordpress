<?php 
namespace pockets\crud\models\wp;

trait post_statuses {

    /**
        @see https://developer.wordpress.org/reference/functions/get_post_statuses/

        Returns list of registered WP post statuses.
        
        arguments
            - names: returns list of post status names
            - items: returns result of get_post_statuses
    */
    #[\pockets\crud\schema\attribute( [
        'type' => 'object',
        'additionalProperties' => false,
        'crudFields' => [
            'patternProperties' => [
                'names' => [ 'type' => 'null' ],
                'items' => [ 'type' => 'null' ]
            ]
        ]
    ] ) ]
    function post_statuses( array $read ){
        $statuses = get_post_statuses();
        return \pockets\crud\reducer::applyIterator(
            array: $read,
            callback: [
                'names' => fn() => array_keys( $statuses ),
                'items' => fn() => $statuses
            ]
        );
    }

}

trait post_mime_types {

    /**
        @see https://developer.wordpress.org/reference/functions/get_available_post_mime_types/

        Returns list of registered WP post mime types.

        Accepts arguments of:
            - all arguments that "get_available_post_mime_types" accepts.
            - names: returns list of post mime types
    */
    #[\pockets\crud\schema\attribute( [
        'type' => 'object',
        'additionalProperties' => false,
        'properties' => [
            'type' => [ 'type' => "string" ]
        ],
        'crudFields' => [
            'patternProperties' => [
                'names' => [ 'type' => 'null' ],
            ]
        ]
    ] ) ]
    function post_mime_types( array $read ){
        $mime_types = get_available_post_mime_types( $read['type'] ?? "attachment" );
        return \pockets\crud\reducer::applyIterator(
            array: $read,
            callback: [
                'names' => fn() => $mime_types,
            ]
        );
    }
    
    function class_documentation(){
                
        $wordpress_documents = array_reduce(
            initial: [], 
            array: [
                'WP_Query',
                'WP_Taxonomy',
                'WP_Post',
                'WP_User',
                'WP_Term',
                'WP_Error'
            ], 
            callback: function(array $acc, string $class){
                $document = \pockets\utils\get_class_documentation::init()->build( $class, [ 'group' =>  'Wordpress', 'title' => $class ] );
                $acc[$document['info']['name']] =  $document;
                return $acc;
            }
        );

        $pockets_documents = array_reduce(
            initial: [], 
            array: [
                [ 
                    'title' => 'Pockets', 
                    'class' => "Pockets",
                    'group' => "Pockets Plugin"
                ],
                [
                    'title' => "Rules",
                    'class' => '\pockets\utils\data_schema\generate_rules',
                    'group' => "Pockets Data Schema"
                ],
                [
                    'title' => "Validators",
                    'class' => '\pockets\utils\data_schema\helpers\validators',
                    'group' => "Pockets Data Schema"
                ],
                [
                    'title' => "Validator",
                    'class' => '\pockets\utils\data_schema\validator',
                    'group' => "Pockets Data Schema"
                ],
                [
                    'title' => "Sanitizer",
                    'class' => '\pockets\utils\data_schema\sanitizer',
                    'group' => "Pockets Data Schema"
                ],
                [
                    'title' => "API",
                    'class' => '\pockets\utils\data_schema\api',
                    'group' => "Pockets Data Schema"
                ],
                [
                    'title' => "Sanitizers",
                    'class' => '\pockets\utils\data_schema\helpers\sanitizers',
                    'group' => "Pockets Data Schema"
                ],
                [
                    'title' => "Array Dot Prop",
                    'class' => '\pockets\utils\array_dot_prop',
                    'group' => "Pockets Utilities"
                ]
            ], 
            callback: function( array $acc, array $info ){
                $document = \pockets\utils\get_class_documentation::init()->build( $info['class'], [ 'group' => $info['group'], 'title' => $info['title'] ] );
                $acc[$document['info']['name']] =  $document;
                return $acc;
            }
        );

        $crud_model_documents = \pockets::crud('crud-models')::init()->read(['documents:<=']);

        $list = array_merge(
            $wordpress_documents, 
            $crud_model_documents, 
            $pockets_documents, 
        );

        return $list;
        
    }
    
}

trait post_types {

    /**
        @see https://developer.wordpress.org/reference/functions/get_post_types/

        Returns list of registered WP post post types.
        
        Arguments
            - All arguments that "get_post_types" accepts
            - names: returns list of post status names
            - items: returns result of get_post_statuses

    */
    #[\pockets\crud\schema\attribute( [
        'type' => 'object',
        'additionalProperties' => false,
        'properties' => [
            "public" => [ 'type' => "boolean" ],
        ],
        'crudFields' => [
            'patternProperties' => [
                'names' => [ 'type' => 'null' ],
                'items' => [
                    '$ref' => '/post-type/read_resource/'
                ]
            ],
        ]
    ] ) ]
    function post_types( array $read = [] ) {
        $names = array_values( get_post_types( $read, 'names', $read['operator'] ?? 'or' ) );
        return \pockets\crud\reducer::applyIterator(
            array: $read,
            callback: [
                'names' => fn() => $names,
                'items' => fn( $value ) => array_map(
                    array: $names,
                    callback: fn( string $name ) => \pockets::crud( 'post-type' )::init( $name )->read( $value )
                )
            ]
        );
    }

}

trait taxonomies {
    
    /**
        @see https://developer.wordpress.org/reference/functions/get_taxonomies/

        Arguments
            - All arguments that "get_taxonomies" accepts
            - names: returns list of taxonomy names
            - items: returns read operation from "taxonomy" crud model
     */
    #[\pockets\crud\schema\attribute( [
        'type' => 'object',
        'additionalProperties' => false,
        'properties' => [
            "public" => [ 'type' => "boolean" ],
            "name" => [
                'type' => ['array', 'string'],
                'includes' => [
                    '$ref' => "/wp/taxonomies/names/"
                ]
            ],
            'show_ui' => [ 'type' => "boolean" ],
            'show_in_rest' => [ 'type' => "boolean" ],
            'label' => [ 'type' => "string" ],
            'operator' => [
                'type' => 'string',
                'enum' => [ 'and', 'or' ]
            ]
        ],
        'crudFields' => [
            'patternProperties' => [
                'names' => [ 'type' => 'null' ],
                'items' => [
                    '$ref' => '/taxonomy/read_resource/'
                ]
            ],
        ]
    ] ) ]
    function taxonomies( array $read = [] ){
        $names = array_values( get_taxonomies( $read, 'names', $read['operator'] ?? 'or' ) );
        return \pockets\crud\reducer::applyIterator(
            array: $read,
            callback: [
                'names' => fn() => $names,
                'items' => fn( $value ) => array_map(
                    array: $names,
                    callback: fn( string $name ) => \pockets::crud( 'taxonomy' )::init( $name )->read( $value )
                )
            ]
        );
    }
    
}

trait image_sizes {

    /**
        @see https://developer.wordpress.org/reference/functions/get_intermediate_image_sizes/

        returns list of registered image sizes.

        Arguments
            - names: returns list of image sizes
    */
    #[ \pockets\crud\schema\attribute( [
        'type' => 'object',
        'crudFields' => [
            'patternProperties' => [
                'names' => [ 'type' => "null" ]
            ],
        ],
        'additionalProperties' => false
    ] ) ]
    function image_sizes( ?array $read ) {
        $sizes = get_intermediate_image_sizes();
        return \pockets\crud\reducer::applyIterator(
            array: $read,
            callback: [
                'names' => fn() => $sizes,
            ]
        );
    }

}

class read extends \pockets\crud\resource_walker {

    use post_mime_types, post_statuses, post_types, taxonomies, image_sizes;
    
    function static_templates( string | array $type ) : array {
        return \pockets::$templates::get( $type );
    }

    static function load_template( array $data ){
        return \pockets::load_template(  $data );
    }

    static function getSchema( string $schema_ID ) : array {

        $wp_schema = static::init( null )->walk( [
            
            'post_mime_types:/wp/post/mime-types/' => [
                'names:enum'
            ],
            'post_statuses:/wp/post/statuses/' => [
                'names:enum'
            ],
            'post_types:/wp/post/types/' => [
                'names:enum',
                'public' => true
            ],
            'taxonomies:/wp/taxonomies/names/' => [
                'names:enum',
                'public' => true,
                "operator" => "or",
            ],
            'image_sizes:/wp/image/sizes/' => [
                'names:enum',
            ],
        ] );

        $additional_schemas = [
            
            '/wp/meta_query/' => [
                'additionalProperties' => false,
                'type' => "object",
                '$comment' => "Schema for WP_Meta_Query construct. https://developer.wordpress.org/reference/classes/wp_meta_query/__construct/",
                'properties' => [
                    'relation' => [
                        'type' => 'string',
                        'enum' => ['AND', "OR"]
                    ],
                    'compare' => [
                        'type' => 'string',
                        'enum' => [
                            '=', '!=', '>', '>=', '<', '<=',
                            'LIKE', 'NOT LIKE','IN','NOT IN',
                            'BETWEEN','NOT BETWEEN','REGEXP',
                            'NOT REGEXP','RLIKE','EXISTS','NOT EXISTS'
                        ]
                    ],
                    'compare_key' => [
                        'type' => 'string',
                        'enum' => [
                            '=', '!=', 'LIKE', 'NOT LIKE', 'IN',
                            'NOT IN', 'REGEXP', 'NOT REGEXP', 'RLIKE', 'EXISTS',
                        ]
                    ],
                    'type' => [
                        'type' => "string",
                        'enum' => [
                            'NUMERIC','BINARY','CHAR','DATE',
                            'DATETIME','DECIMAL','SIGNED','TIME', 'UNSIGNED'
                        ]
                    ],
                    'type_key' => [
                        'type' => "string",
                        'enum' => ['', "BINARY"]
                    ],
                    'key' => [
                        'type' => ['array', 'string'],
                        'arrayOfType' => 'string'
                    ],
                    'value' => [
                        'type' => ['array', 'string'],
                        'arrayOfType' => 'string'
                    ]
                ],
                'patternProperties' => [
                    '^[0-9]+$' => [
                        '$ref' => '/wp/meta_query/'
                    ]
                ],
            ]
        ];

        return parent::getSchema($schema_ID) + $wp_schema + $additional_schemas;

    }

}
