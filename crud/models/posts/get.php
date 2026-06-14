<?php
namespace pockets\crud\models\posts;

/**
    Transforms requests into an instance of \WP_Query
    @class-document-link https://developer.wordpress.org/reference/classes/wp_query/ for more information
*/
#[ \pockets\crud\schema\attribute(__NAMESPACE__."\get_resource_schema" ) ]
class get extends \pockets\crud\get_resource {
    use validate_resource;

    /**
        $default_array_by 
        
        @class-document-advanced
        
        This is not used, as request_using_array is manually handled in this model.
    */
    public string $default_array_by;

    /**
        Should be an instance of \Wp_Query
        @class-document-link WP_Query
    */
    function request_using_object(){
        return $this->resource;
    }

    /**
        Should be an array containing arguments that \WP_Query accepts
        @class-document-link WP_Query
    */
    function request_using_array() {
        return new \Wp_Query( $this->resource );
    }

}

function get_resource_schema(){

    return [
        'type' => 'object',
        'additionalProperties' => false,
        'definitions' => [
            'orderbyArgs' =>[
                'enum' => [
                    'none', "ID", "author", "title", "name", "type",
                    'date', 'modified', 'parent', 'rand', 'comment_count',
                    'relevance', 'menu_order', 'meta_value',
                    'meta_value_num', 'post__in', 'post_name__in', 'post_parent__in'
                ]
            ],
            'tax_query_entry' => [
                'type' => "object",
                'additionalProperties' => false,
                'patternProperties' => [
                    '^[0-9]+$' => [
                        '$ref' => '/posts/get_resource/#/definitions/tax_query_entry'
                    ]
                ],
                'properties' => [
                    'relation' => [
                        'type' => 'string',
                        'enum' => ["AND", "OR"]
                    ],
                    'terms' => [
                        'type' => [ 'array', 'string', 'number' ],
                        'arrayOfType' => ['string', 'number']
                    ],
                    'taxonomy' => [
                        'type' => [ 'array', 'string' ],
                        'includes' => [
                            '$ref' => "/wp/taxonomies/names/"
                        ]
                    ],
                    'field' => [
                        'type' => "string",
                        'enum' => [
                            "term_id", "name", "slug", "term_taxonomy_id"
                        ]
                    ],
                    'include_children' => [
                        'type' => "boolean"
                    ],
                    'operator' => [
                        'type' => "string",
                        'enum' => [ "IN", "NOT IN", "AND", "EXISTS", "NOT EXISTS" ]
                    ]
                ]
            ],
            'time' => [
                'hour' => [
                    'type' => 'number',
                    'range' => [ 0, 23 ]
                ],
                'minute' => [
                    'type' => 'number',
                    'range' => [ 0, 60 ]
                ],
                'second' => [
                    'type' => 'number',
                    'range' => [ 0, 60 ]
                ],
            ],
            'date' => [
                'day' => [
                    'type' => 'number',
                    'range' => [ 1, 31 ]
                ],
                'month' => [
                    'type' => "number",
                    'range' => [ 1, 12 ]
                ],
                'year' => [
                    'type' => "number",
                ],
                'week' => [
                    'type' => 'number',
                    'range' => [ 0, 53 ]
                ]
            ]
        ],  
        'properties' => [

            // Author Parameters
            'author' => [
                'type' => ["number", "string"],
                '$comment' => "Can be number ID or comma separated string of IDS"
            ],
            'author_name' => [
                'type' => "string"
            ],
            'author__in' => [
                'type' => "array",
                'arrayOfType' => "number" 
            ],
            'author__not_in' => [
                'type' => "array",
                'arrayOfType' => "number" 
            ],
            // Category Parameters
            'cat' => [
                'type' => [ 'number', 'string' ],
                '$comment' => "Can be number ID or comma separated string of IDS"
            ],
            'category_name'  => [
                'type' => 'string'
            ],
            'category__and' => [
                'type' => "array",
                'arrayOfType' => 'number'
            ],
            'category__in' => [
                'type' => "array",
                'arrayOfType' => 'number'
            ],
            'category__not_in' => [
                'type' => "array",
                'arrayOfType' => 'number'
            ],
            // Tag Parameters
            'tag' => [
                'type' => 'string',
                '$comment' => "Can be string slug or comma separated string of slugs. "
            ],
            'tag_id' => [
                'type' => "number"
            ],
            'tag__and' => [
                'type' => "array",
                'arrayOfType' => "number"
            ],
            'tag__in' => [
                'type' => "array",
                'arrayOfType' => "number"
            ],     
            'tag__not_in' => [
                'type' => "array",
                'arrayOfType' => "number"
            ],
            'tag_slug__and' => [
                'type' => "array",
                'arrayOfType' => 'string'
            ],
            'tag_slug__in' => [
                'type' => "array",
                'arrayOfType' => 'string'
            ],
            // Taxonomy Parameters
            'tax_query' => [
                '$ref' => '/posts/get_resource/#/definitions/tax_query_entry'
            ],
            // Search Parameters
            's' => [
                'type' => "string",
                '$comment' => "string to search"
            ],
            // Post & Page Parameters
            'p' => [
                'type' => 'number',
                '$comment' => "Post ID"
            ],
            'name' => [
                'type' => 'string'
            ],
            'page_id' => [
                'type' => 'number'
            ],
            'pagename' => [
                'type' => 'string'
            ],
            'post_parent' => [
                'type' => 'number'
            ],
            'post_parent__in' => [
                'type' => "array",
                'arrayOfType' => "number"
            ],
            'post_parent__not_in' => [
                'type' => "array",
                'arrayOfType' => "number"
            ],
            'post__in' => [
                'type' => "array",
                "arrayOfType" => "number"
            ],
            'post__not_in' => [
                'type' => "array",
                'arrayOfType' => 'number'
            ],
            'post_name__in' => [
                'type' => "array",
                'arrayOfType' => 'string'
            ],
            // Password Parameters,
            'has_password' => [
                'type' => 'boolean'
            ],
            'post_password' => [
                'type' => 'string'
            ],
            // Post Type Parameters
            'post_type' => [
                'type' => ["array", "string"],
                'includes' => [
                    'enum' => [ 'any' ],
                    '$ref' => "/wp/post/types/"
                ],
            ],
            // Status Parameters
            'post_status' => [
                'type' => ["array", "string"],
                'includes' => [
                    '$ref' => "/wp/post/statuses/"
                ],
            ],
            // Comment Parameters
            'comment_count' => [
                'type' => [ "number", "object" ],
                'properties' => [
                    'value' => [
                        'type' => 'number'
                    ],
                    'compare' => [
                        'enum' => [ "=", "!=", ">", ">=", "<", "<=" ]
                    ]
                ],
                'required' => [ 'value', 'compare' ]
            ],
            //Pagination Parameters
            'nopaging' => [
                'type' => "boolean"
            ],
            'posts_per_page' => [
                'type' => 'number'
            ],
            'posts_per_archive_page' => [
                'type' => 'number'
            ],
            'offset' => [
                'type' => 'number'
            ],
            'paged' => [
                'type' => 'number'
            ],
            'page' => [
                'type' => 'number'
            ],
            'ignore_sticky_posts' => [
                'type' => "boolean"
            ],
            // Order & Orderby Parameters
            'order' => [
                'type' => 'string',
                'enum' => ['ASC', "DESC"]
            ],
            'orderby' => [
                'type' => [ "object", "array", "string" ],
                'additionalProperties' => [
                    'type' => 'string',
                    'enum' => [ 'ASC', "DESC" ]
                ],
                'propertyKeys' => [
                    '$ref' => "/posts/get_resource/#/definitions/orderbyArgs"
                ],
                'includes' => [
                    'separator' => " ",
                    '$ref' => "/posts/get_resource/#/definitions/orderbyArgs"
                ],
            ],
            // Date Parameters
            'year' => [
                '$ref' => "/posts/get_resource/#/definitions/date/year",
            ],
            'monthnum' => [
                '$ref' => "/posts/get_resource/#/definitions/date/month",
            ],
            'w' => [
                '$ref' => "/posts/get_resource/#/definitions/date/week",
            ],
            'day' => [
                '$ref' => "/posts/get_resource/#/definitions/date/day",
            ],
            'hour' => [
                '$ref' => "/posts/get_resource/#/definitions/time/hour",
            ],
            'minute' => [
                '$ref' => "/posts/get_resource/#/definitions/time/minute",
            ],
            'second' => [
                '$ref' => "/posts/get_resource/#/definitions/time/second",
            ],
            'm' => [
                'type' => "number",
                '$comment' => "YearMonth (For e.g.: 201307).",
            ],
            'date_query' => [
                'type' => "object",
                'additionalProperties' => false,
                'properties' => [
                    'year' => [
                        '$ref' => "/posts/get_resource/#/definitions/date/year",
                    ],
                    'month' => [
                        '$ref' => "/posts/get_resource/#/definitions/date/month",
                    ],
                    'week' => [
                        '$ref' => "/posts/get_resource/#/definitions/date/week",
                    ],
                    'day' => [
                        '$ref' => "/posts/get_resource/#/definitions/date/day",
                    ],
                    'hour' => [
                        '$ref' => "/posts/get_resource/#/definitions/time/hour",
                    ],
                    'minute' => [
                        '$ref' => "/posts/get_resource/#/definitions/time/minute",
                    ],
                    'second' => [
                        '$ref' => "/posts/get_resource/#/definitions/time/second",
                    ],
                    'after' => [
                        'type' => ['object', 'string'],
                        'additionalProperties' => false,
                        'properties' => [
                            'year' => [
                                '$ref' => "/posts/get_resource/#/definitions/date/year",
                            ],
                            'month' => [
                                '$ref' => "/posts/get_resource/#/definitions/date/month",
                            ],
                            'day' => [
                                '$ref' => "/posts/get_resource/#/definitions/date/day",
                            ],
                        ]
                    ],
                    'before' => [
                        '$ref' => "/posts/get_resource/#/properties/date_query/properties/after"
                    ],
                    'inclusive' => [
                        'type' => "boolean"
                    ],
                    'compare' => [
                        'type' => "string",
                        'enum' => [ '=', '!=', '>', '>=', '<', '<=', 'IN', 'NOT IN', 'BETWEEN', 'NOT BETWEEN' ]
                    ],
                    'column' => [
                        'type' => "string"
                    ],
                    'relation' => [
                        'type' => "string",
                        'enum' => ["AND", "OR"]
                    ]
                ]
            ],
            // Custom Field (post meta) Parameters
            'meta_key' => [
                '$ref' => '/wp/meta_query/#/properties/key'
            ],
            'meta_value' => [
                '$ref' => '/wp/meta_query/#/properties/value'
            ],
            'meta_type' => [
                '$ref' => '/wp/meta_query/#/properties/type'
            ],
            'meta_value_num' => [
                'type' => "number"
            ],
            'meta_compare' => [
                '$ref' => '/wp/meta_query/#/properties/compare'
            ],
            /**
                @todo meta_query is a bit hinky because it doesnt hint at properties properly due
                to additionalProperties. Fix this.
            */
            'meta_query' => [
                '$ref' => '/wp/meta_query/'
            ],
            // Permission Parameters
            'perm' => [
                '$comment' => "Show posts if user has the appropriate capability",
                'type' => 'string'
            ],
            // Mime Type Parameters
            "post_mime_type" => [
                'type' => ["array", "string"],
                'includes' => [
                    '$ref' => "/wp/post/mime-types/"
                ],
            ],
            // Caching Parameters
            'cache_results' => [
                'type' => "boolean"
            ],
            'update_post_meta_cache' => [
                'type' => "boolean"
            ],
            'update_post_term_cache' => [
                'type' => "boolean"
            ],
            // Return Fields Parameter,
            'fields' => [
                'type' => "string",
                'enum' => [ 'all', "ids", "id=>parent" ],
            ]
        ],
    ];

}