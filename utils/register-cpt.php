<?php
namespace pockets\utils;

class register_cpt {

    function __construct(string $name, string $plural_name, array $params = [], array $labels = []) {

        $labels = array_merge( [
            'name'               => sprintf('%s', $plural_name),
            'singular_name'      => sprintf('%s', $name),
            'add_new'            => 'Add New',
            'add_new_item'       => sprintf('Add New %s', $name),
            'edit_item'          => sprintf('Edit %s', $name),
            'new_item'           => sprintf('New %s', $name),
            'view_item'          => sprintf('View %s', $name),
            'search_items'       => sprintf('Search %s', $plural_name),
            'not_found'          => sprintf('No %s found', $plural_name),
            'not_found_in_trash' => sprintf('No %s found in Trash', $plural_name),
            'parent_item_colon'  => sprintf('Parent %s:', $name),
            'menu_name'          => sprintf('%s', $plural_name),
        ], $labels );

        $args = [
            'labels'               => $labels,
            'description'          => sprintf('%s description', $name),
            'hierarchical'         => true,
            'supports'             => [
                'title',
                'editor',
                'excerpt',
                'author',
                'thumbnail',
                'trackbacks',
                'custom-fields',
                'revisions',
                'page-attributes',
            ],
            'taxonomies'           => [
                'category',
                'post_tag',
                'page-category',
            ],
            'public'               => true,
            'show_ui'              => true,
            'show_in_menu'         => true,
            'menu_position'        => 5,
            'yarpp_support'        => true,
            'show_in_nav_menus'    => true,
            'publicly_queryable'   => true,
            'exclude_from_search'  => false,
            'has_archive'          => true,
            'query_var'            => true,
            'can_export'           => true,
            'rewrite'              => true,
            'capability_type'      => 'post',
        ];

        register_post_type(
            str_replace([' '], ['_'], strtolower($name)),
            array_merge($args, $params)
        );

    }

}

