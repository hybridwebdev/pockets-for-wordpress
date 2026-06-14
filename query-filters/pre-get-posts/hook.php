<?php
namespace pockets\query_filters\pre_get_posts;

class hook {

    use \pockets\traits\initOnce;
    
    function __construct(){
        add_action( 'pre_get_posts', [ $this, 'pre_get_posts' ] );
    }
    
    function pre_get_posts( $query ){

        $selections = $query->get('pre_get_posts') ?? null;

        if( $selections && is_array( $selections ) ) {
            
            $filters = array_filter(
                array: filters::get(),
                callback: fn( $filter ) => in_array( 
                    needle: $filter['value'],
                    haystack: $selections, 
                ) 
            );
        
            array_map(
                array: $filters,
                callback: fn( $filter ) => call_user_func( $filter['callback'], $query )
            );

        }

    }

}