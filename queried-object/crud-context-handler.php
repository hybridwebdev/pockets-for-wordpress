<?php

namespace pockets\queried_object;

class crud_context_handler {
    
    static function pretty_to_ugly_url( $pretty_url ) {

        global $wp;

        $parsed = wp_parse_url( $pretty_url );
        $path   = $parsed['path'] ?? '';
        $query  = $parsed['query'] ?? '';

        parse_str( $query, $extra_query_vars );

        $extra_query_vars = wp_unslash($extra_query_vars);

        $wp->parse_request( $path . ( $query ? '?' . $query : '' ) );
        
        /**
            I don't think this is necessary but keeping it here for a reminder.
            $wp->query_posts(); // Fills $wp->query_vars
        */

        $all_query_vars = array_merge( $wp->query_vars, $extra_query_vars );

        /**
            Query vars are intentionally derived from URL routing.
            Sanitization is handled by WP core (WP_Query / parse_request) as well
            as earlier in this function.
        */
        //phpcs:ignore WordPress.Security.NonceVerification.Recommended -- nonce is verified earlier in rest endpoint
        $_GET = array_merge( $_GET, $all_query_vars );

        return add_query_arg( $all_query_vars, home_url( 'index.php' ) );
        
    }
        
    static function run_wp_main( string $url ) {

        global $wp;
        
        /**
            $wp uses REQUEST_URI internally, so
            forced to set it to requesting URL so things work correctly.
        */

        $url = wp_make_link_relative( $url );

        $_SERVER['REQUEST_URI'] = $url;

        if( $url!='/' ) {
            $url = static::pretty_to_ugly_url( $url );
        }

        if ( $url == '/' ) {

            /**
                Fixes issue where site root has issues
                because things like $wp_query->is_paged isn't set. This is
                because the WP class doesnt set up any query_vars.
            */                
            $front_page_id = get_option( 'page_on_front' );

            if( $front_page_id ) {
                $url = [ 'page_id' => $front_page_id ];
            }

        }

        $wp->main( $url );

    }

}
