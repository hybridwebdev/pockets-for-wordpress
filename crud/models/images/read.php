<?php 
namespace pockets\crud\models\images;
class read extends \pockets\crud\models\posts\read {

    /**
        Iterates results and and applies "image" crud model read action 
    */
    #[ \pockets\crud\schema\attribute( [ '$ref' => "/image/read_resource/" ] ) ]
    function items( array $read ) : array {
        return array_map( 
            array: $this->resource->posts ?? [],
            callback: fn($post) => \pockets::crud( 'image' )::init( $post )->read( $read ), 
        );
    }

}
