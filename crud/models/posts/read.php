<?php 
namespace pockets\crud\models\posts;
class read extends \pockets\crud\resource_walker {
    use \pockets\crud\render;

    /**
        Iterates results of WP_Query and returns "post" crud model read action.
        @class-document-link pockets\crud\models\post\read
    */
    #[ \pockets\crud\schema\attribute( [ '$ref' => "/post/read_resource/" ] ) ]
    function items( array $read ) : array {
        /**
            Here
        */
        return array_map( 
            array: $this->resource->posts ?? [],
            callback: fn($post) => \pockets::crud( 'post' )::init( $post )->read( $read ), 
        );
    }

    /**
        Returns array of post IDS or wp_errors.
    */
    function IDS() : array {
        /**
            Here
        */
        return array_map(
            array: $this->resource->posts ?? [],
            callback: function($post) {
                $read = \pockets::crud( 'post' )::init( $post )->read( [ 'ID' ] );
                if( is_wp_error( $read ) ) {
                    return $read;
                }
                return $read['ID'] ?? $this->error("Denied");
            }
        );
    }

    /**
        Returns array of pagination information
    */
    function pagination() : array {
        
        $data = [
            'paged' => $this->resource->query['paged'] ?? 1,
            'pages' => $this->resource->max_num_pages,
        ];
        
        /**
            Boundary Check
        */
        if(
            !is_numeric($data['paged']) 
            || $data['paged'] > $data['pages'] 
            || $data['paged'] < 1
        ) $data['paged'] = 1;

        $data['prev'] = $data['paged'] == 1 ? 1 : $data['paged'] - 1;

        $data['next'] = $data['paged'] == $data['pages'] ? $data['paged'] : $data['paged'] + 1;

        return $data;
        
    }

    /**
        Returns array of pagination links
    */
    function pagination_links( ?array $args = [] ) : array {
        
        $args = wp_parse_args(
            $args,
            [
                'as' => "link"
            ]
        );
        global $wp_query;

        $temp = $wp_query; 
        $wp_query = $this->resource;

        $pagination = $this->pagination();

        if( $args['as'] == 'link' ) {
            $prev = $pagination['paged'] > 1 && $pagination['prev'] >= 1 ? get_pagenum_link( $pagination['prev'] ) : false;
            $next = $pagination['next'] > $pagination['paged'] ? get_pagenum_link( $pagination['next'] ) : false;
        }

        if( $args['as'] == 'number' ) {
            $prev = $pagination['paged'] > 1 && $pagination['prev'] >= 1 ? $pagination['prev'] : false;
            $next = $pagination['next'] > $pagination['paged'] ? $pagination['next'] : false;
        }

        $wp_query = $temp;

        return [
            'prev' => $prev,
            'next' => $next
        ];

    }

    function found_posts(){
        return $this->resource->found_posts;
    }

    function post_count(){
        return $this->resource->post_count;
    }

    function max_num_pages(){
        return $this->resource->max_num_pages ;
    }

}