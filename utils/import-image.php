<?php 
namespace pockets\utils;
class import_image {
    public $show_log = false;
    static function init(){
        require_once(ABSPATH . 'wp-admin/includes/media.php');
        require_once(ABSPATH . 'wp-admin/includes/file.php');
        require_once(ABSPATH . 'wp-admin/includes/image.php');
        return new static;
    }

    function by_url( string | null $url = null){
        
        if(!$url || $url == '' ) {
            $error  = new \WP_Error;
            $error->add('Error', "Must pass a valid url", ['url given' =>  $url]);
            return $error;
        };
        
        $media = new \wp_query( [
            'post_type' => 'attachment',
            'posts_per_page' => 1,
            'post_mime_type' => 'image',
            'post_status' => 'inherit',
            'meta_query' => [
                'relation' => 'AND',
                [
                    'key'     => 'image_import_url',
                    'value'   => $url,
                    'compare' => '=',
                ],
            ],
        ] );

        if($media->post_count == 0) {

            $attachment_id = media_sideload_image( $url, false, '', 'id');
            
            if( is_wp_error( $attachment_id) ) {
                return $attachment_id;
            }
 
            wp_update_post( [
                'ID' => $attachment_id,
                'post_title' => $url,
                'meta_input' => [
                    'image_import_url' => $url
                ]
            ] ) ;

        } else {
            
            $attachment_id = $media->posts[0]->ID;
 
        }

        return $attachment_id;
        
    }

}

