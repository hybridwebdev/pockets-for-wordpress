<?php 
namespace pockets\crud\models\image_placeholder;

/**
    Abstracts the image crud model, using a "simulated" image
    using a WP_POst instance and doing a little bit of magic with filters
    to trick the underlying model into treating this as a real media library item.
    Useful for creating fallback images for things like posts when they do not have
    an attachment.
    
    YOu shouldn't use things like post meta with this as they will not work. Anything that fetches
    real DB data will fail. 
*/
class model extends \pockets\crud\models\image\model {
    
    use permissions; 

    public static string $model_name = 'image/placeholder';

    public string $get_resource = __NAMESPACE__.'\get';
    public string $read_resource = __NAMESPACE__.'\read';
    
    function read( array $fields ) : array {
        
        add_filter('image_downsize', [ $this, 'image_downsize'], 99999, 3);

        $read = $this->read_resource( $fields );
        
        remove_filter('image_downsize', [ $this, 'image_downsize'], 99999, 3);

        return $read;

    }
    function get_image_size_dimensions( $size ) {

        global $_wp_additional_image_sizes;

        // Core sizes stored in options
        $core_sizes = [ 'thumbnail', 'medium', 'medium_large', 'large' ];

        if ( in_array( $size, $core_sizes, true ) ) {
            return [
                'width'  => (int) get_option( "{$size}_size_w" ),
                'height' => (int) get_option( "{$size}_size_h" ),
                'crop'   => (bool) get_option( "{$size}_crop" ),
            ];
        }

        // Custom sizes
        if ( isset( $_wp_additional_image_sizes[ $size ] ) ) {
            return $_wp_additional_image_sizes[ $size ];
        }

        // Full size
        if ( $size === 'full' ) {
            return null; // depends on the attachment itself
        }

        return null;

    }

    function image_downsize(){
        
        $size = $this->data->get('size', false ) ;
        
        $width = $this->data->get('width', 0);
        $height = $this->data->get('height', 0 );
        $isIntermediate = $this->data->get('isIntermediate', false );
        
        if( is_string( $size ) ) {

            $dimensions = $this->get_image_size_dimensions( $size );
            
            if( $dimensions ) {

                list(
                    'height' => $height,
                    'width' => $width,
                    'crop' => $isIntermediate
                ) = $dimensions;

            }

        }

        /**
            url
            width
            height
            is_intermediate
        */
        return [
            0 => $this->resource->guid,
            1 => $width,
            2 => $height,
            3 => $isIntermediate
        ];

    }

    /**
        Override setResource so original arguments can be passed in.  
        $this->resource will always initially be an instance of \pockets\utils\array_dot_prop
        which is then converted to an instance of WP_Post
    */
    function setResource( $resource = null ) {

        /**
            Store original request data so it can be used in the filters without having to
            pollute the created WP_Post instance
        */
        $this->data = \pockets\utils\array_dot_prop::init( $resource );
        $this->resource = $this->get_resource ::init( $this->data );

    }

}