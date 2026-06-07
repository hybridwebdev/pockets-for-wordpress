<?php 
namespace pockets\crud\models\image;

class read extends \pockets\crud\resource_walker {

    /**
        returns image title
    */
    function title() : string {
        return $this->resource->post_title;
    }
    
    /**
        returns image ID
    */
    function ID() : int {
        return $this->resource->ID;
    }

    /**
        returns image url
    */
    #[ \pockets\crud\schema\attribute( [
        'type' => ['object', 'null'],
        'properties' => [
            'size' => [ 
                'type' => "string", 
                'includes'  => [
                    '$ref' => '/wp/image/sizes/'
                ]
            ],
        ],
        'additionalProperties' => false
    ] ) ]
    function url( ?array $args = [] ) : string {

        list(
            'size' => $size,
        ) = wp_parse_args( $args, [
            'size' => 'thumbnail',
        ] );

        return wp_get_attachment_image_url( $this->resource->ID , $size );
        
    }
    
    /**
        returns image dimensions
    */
    #[ \pockets\crud\schema\attribute( [
        'type' => 'object',
        'properties' => [
            'size' => [ 
                'type' => "string", 
                'includes'  => [
                    '$ref' => '/wp/image/sizes/'
                ]
            ],
            'width' => [ 
                'type' => "string", 
            ],
            'height' => [ 
                'type' => "string", 
            ],
        ],
        'additionalProperties' => false
    ] ) ]
    function dimensions( ?array $args = [] ) : array {
        
        list(
            'size' => $size,
            'width' => $width,
            'height' => $height
        ) = wp_parse_args( $args, [
            'size' => 'thumbnail',
            'width' => "px",
            'height' => "px"
        ] );

        $image = wp_get_attachment_image_src( $this->resource->ID , $size);
        
        return [
            'width'=> sprintf( "%s%s",  $image[1], $width ),
            'height' => sprintf( "%s%s", $image[2], $height )
        ];

    }
    
    #[ \pockets\crud\schema\attribute( [
        'type' => ['object', 'null'],
        'properties' => [
            'filtered' => [ 
                'type' => "boolean", 
            ],
            'fallback' => [
                'type' => "string"
            ]
        ],
        'additionalProperties' => false
    ] ) ]
    function description( ?array $args ) : string {

        $content = $this->resource->post_content;
        
        if( $content == '' ) {
            $content = (string)$args['fallback'] ?? "";
        }

        if( $args['filtered'] ?? true === true) {
            return apply_filters( 'the_content', $content );
        }
        
        return $content;

    }

    #[ \pockets\crud\schema\attribute( [
        'type' => ['object', 'null'],
        'properties' => [
            'size' => [ 
                'type' => "string", 
                'includes'  => [
                    '$ref' => '/wp/image/sizes/'
                ]
            ],
        ],
        'additionalProperties' => false
    ] ) ]
    
    function ratio(?array $args = []) : string {

        list( 
            'size' => $size,
        ) = wp_parse_args( $args, [
            'size' => 'thumbnail',
        ] );

        $image = wp_get_attachment_image_src( $this->resource->ID, $size );

        $width  = (int) $image[1];
        $height = (int) $image[2];

        if (!$width || !$height) {
            return '1 / 1';
        }

        return sprintf( " %s / %s ", $width, $height );

    }
    
}
