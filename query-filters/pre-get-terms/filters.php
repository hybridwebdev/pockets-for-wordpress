<?php
namespace pockets\query_filters\pre_get_terms;

class filters {
    
    use \pockets\traits\initOnce;
    use \pockets\query_filters\filter;

    static function getFilterName() : string {
        return 'pockets/query_filters/pre_get_terms';
    }

    function __construct(){

        static::register(

            title: "Exclude current Term",
            value: "exclude-current-term",
            callback: function( $query ){

                $current_term_id = get_queried_object_id();
                $excludes = $query->query_vars['exclude'] ?? [];
                $excludes = is_array( $excludes ) ? $excludes : [];
                $excludes[] = $current_term_id;
                $query->query_vars['exclude'] = $excludes;

            }
            
        );
        
    }

}
