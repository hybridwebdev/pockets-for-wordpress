<?php

namespace pockets\utils;

class register_taxonomy {

    function __construct(
        string $taxonomy,
        string $post_type,
        string | null $tax_slug = null,
        string | null $tax_title = null,
        array $args = []
    ) {

        $tax_title = $tax_title
            ? $tax_title
            : ucwords(str_replace('_', ' ', $taxonomy));

        $tax_slug = $tax_slug
            ? $tax_slug
            : $taxonomy;

        $stripped_tax = ucwords(str_replace('_', ' ', $taxonomy));

        $merged = wp_parse_args($args, [
            'hierarchical' => true,

            'labels' => [
                'name'               => sprintf('%s', $tax_title),
                'singular_name'      => sprintf('%s', $tax_title),
                'search_items'       => sprintf('Search %s Types', $stripped_tax),
                'popular_items'      => sprintf('Popular %s Types', $stripped_tax),
                'all_items'          => sprintf('All %s Types', $stripped_tax),
                'parent_item'        => sprintf('Parent %s Types', $stripped_tax),
                'parent_item_colon'  => sprintf('Parent %s Type:', $stripped_tax),
                'edit_item'          => sprintf('Edit %s Type', $stripped_tax),
                'update_item'        => sprintf('Update %s Type', $stripped_tax),
                'add_new_item'       => sprintf('Add New %s Type', $stripped_tax),
                'new_item_name'      => sprintf('New %s Type Name', $stripped_tax),
            ],

            'show_ui'              => true,
            'rewrite'              => [
                'slug' => $tax_slug,
            ],
            'public'               => true,
            'show_admin_column'    => true,
            'show_in_nav_menus'    => true,
            'show_tagcloud'        => true,
        ]);

        register_taxonomy(
            $taxonomy,
            $post_type,
            $merged
        );

    }

}