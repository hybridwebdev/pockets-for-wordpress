<?php
namespace pockets\crud\models\terms;

defined('ABSPATH') || exit;

/**
    @see https://developer.wordpress.org/reference/classes/wp_term_query/__construct/
    @class-document-link WP_Term_Query

    Transforms request into instance of WP_Term_Query.
        arguments 
            - object which is an instance of WP_Term_Query.
            - array containing arguments that wp_Term_query accepts.
            - array containing
                [
                    "by" => "", one of "iterate", "term_query"
                ]
                "term_query"
                    - Should be array containing arguments that wp_Term_query accepts.
                "iterate"
                    - Should be an array of items that the "term" model accepts,
                    eg array of numbers or term objects.
*/
#[ \pockets\crud\schema\attribute( __NAMESPACE__."\get_resource_schema"  ) ]
class get extends \pockets\crud\get_resource {

    use validate_resource;
    
    public string $default_array_by = 'term_query';

    function request_using_object(){
        return $this->resource;
    }
    
    function array_by_term_query() {
        return new \WP_Term_Query( $this->resource );
    }

    function array_by_iterate() {
        $items = $this->resource['items'];
        $this->resource = new \WP_Term_Query();
        $this->resource->terms = $items;
        return $this->resource;
    }
    
}

function get_resource_schema(){
    return [
        'type' => 'object',
        'additionalProperties' => false,
        'required' => [ 'taxonomy' ],
        '$comment' => 'Schema for WP_Term_Query https://developer.wordpress.org/reference/classes/wp_term_query/__construct/',
        'properties' => [
            'taxonomy' => [
                'type' => ['array', 'string'],
                'includes' => [
                    '$ref' => "/wp/taxonomies/names/"
                ]
            ],
            'object_ids' => [
                'type' => [ "number", 'array' ],
                'arrayOfType' => "number"
            ],
            'orderby' => [
                'type' => 'string',
                'includes' => [
                    'enum' => [ 
                        'name', 'slug', 'term_group', 'term_id', 'id', 'description', 'parent', 'term_order',
                         'count', 'include', 'slug__in', 'meta_value', 'meta_value_num', 'none'
                    ]
                ]
            ],
            'order' => [
                'type' => "string",
                'enum' => [ "ASC", "DESC" ]
            ],
            'hide_empty' => [
                'type' => "boolean"
            ],
            'include' => [
                'type' => ['array', 'string'],
                'arrayOfType' => 'number',
            ],
            'exclude' => [
                'type' => ['array', 'string'],
                'arrayOfType' => 'number',
            ],
            'exclude_tree' => [
                'type' => ['array', 'string'],
                'arrayOfType' => 'number',
            ],
            'number' => [
                'type' => ['number', 'string'],
            ],
            'offset' => [
                'type' => 'number',
            ],
            'fields' => [
                'type' => 'string',
                'enum' => [
                    "all", "all_with_object_id", "ids", "tt_ids", "names", "slugs", "count",
                    "id=>parent", "id=>name", "id=>slug"
                ]
            ],
            'count' => [
                'type' => 'boolean',
            ],
            'name' => [
                'type' => ['array', "string"],
                'arrayOfType' => "string"
            ],
            'slug' => [
                'type' => ['array', "string"],
                'arrayOfType' => "string"
            ],
            'term_taxonomy_id' => [
                'type' => ['array', "number"],
                'arrayOfType' => "number"
            ],
            'hierarchical' => [
                'type' => "boolean"
            ],
            'search' => [
                'type' => "string"
            ],
            'name__like' => [
                'type' => "string"
            ],
            'description__like' => [
                'type' => "string"
            ],
            'pad_counts' => [
                'type' => "boolean"
            ],
            'get' => [
                'type' => "string"
            ],
            'child_of' => [
                'type' => "number"
            ],
            'parent' => [
                'type' => "number"
            ],
            'childless' => [
                'type' => 'boolean'
            ],
            'cache_domain' => [
                'type' => 'string'
            ],
            'cache_results' => [
                'type' => 'boolean'
            ],
            'update_term_meta_cache' => [
                'type' => "boolean"
            ],

            'meta_key' => [
                '$ref' => "/wp/meta_query/#/properties/key"
            ],
            'meta_value' => [
                '$ref' => "/wp/meta_query/#/properties/value"
            ],
            'meta_compare' => [
                '$ref' => "/wp/meta_query/#/properties/compare"
            ],
            'meta_compare_key' => [
                '$ref' => "/wp/meta_query/#/properties/compare_key"
            ],
            'meta_type' => [
                '$ref' => "/wp/meta_query/#/properties/type"
            ],
            'meta_type_key' => [
                '$ref' => "/wp/meta_query/#/properties/type_key"
            ],
            'meta_query' => [
                '$ref' => "/wp/meta_query/"
            ]
            
        ],

    ];
}