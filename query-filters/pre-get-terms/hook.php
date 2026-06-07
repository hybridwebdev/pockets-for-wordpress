<?php
namespace pockets\query_filters\pre_get_terms;

class hook {

    use \pockets\traits\initOnce;
    
    function __construct(){
        add_action( 'pre_get_terms', [ $this, 'pre_get_terms' ], 100 );
    }
    
    function pre_get_terms( $query ){

        $selections = $query->query_vars['pre_get_terms'] ?? null;

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