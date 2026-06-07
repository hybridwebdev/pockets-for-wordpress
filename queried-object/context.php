<?php

namespace pockets\queried_object;

class context {
    
    use \pockets\traits\initOnce;

    function __construct(){
        
        add_action('wp', [ $this, 'initContext' ] );
        add_filter('pockets/crud/rest-middleware', [ $this, 'initRestContext' ] );

    }

    /**
        Sets up context for server side requests 
    */
    function initContext(){

        if( \pockets::is_rest_request() ) {
            return;
        }

        \pockets\queried_object::set( get_queried_object() );
        
    }

    /**
        Sets up context for rest requests.
        
        When a crud request is made, look at context header which should be a 
        url relative to the site. Eg / for home, or /my-post-type/ for an archive etc.
        Uses global WP() instance to set up context based on url. 
    */
    function initRestContext( \WP_REST_Request $request ) : \WP_REST_Request {
        
        crud_context_handler::run_wp_main( $request->get_header( 'pockets-crud-context' ) );

        \pockets\queried_object::set( get_queried_object() );

        return $request;

    }

}
 