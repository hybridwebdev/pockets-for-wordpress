<?php
namespace pockets\query_filters\pre_get_posts;

class filters {
    
    use \pockets\traits\initOnce;
    use \pockets\query_filters\filter;

    static function getFilterName() : string {
        return 'pockets/query_filters/pre_get_posts';
    }

    function __construct(){

        static::register(
            title: "Exclude current post",
            value: "exclude-current-post",
            callback: function( $query ){
                $current_post_id = get_queried_object_id();
                $excludes = $query->get( 'post__not_in'); 
                $excludes = is_array( $excludes ) ? $excludes : [];
                $excludes[] = $current_post_id;
                $query->set( 'post__not_in', $excludes ); 
            }
        );
        
    }

}
