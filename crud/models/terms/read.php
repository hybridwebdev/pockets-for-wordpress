<?php 
namespace pockets\crud\models\terms;

/**
    @class-document-link pockets\crud\models\term\read | method
*/
class read extends \pockets\crud\resource_walker {
    use \pockets\crud\render;

    /**
        @class-document-link pockets\crud\models\term\read | method
        Returns array of term data
    */
    #[ \pockets\crud\schema\attribute( [ 
        '$ref' => "/term/read_resource/",
    ] ) ]
    function items( array $read ) : array {
        return array_map( 
            array: (array) $this->resource->terms ?? [],
            callback: fn($term) => \pockets::crud('term')::init($term)->read($read)
        );
    }
    
    /**
        Returns array of term IDS
        @class-document-link pockets\crud\models\term\read|method
    */
    function IDS() : array {
        return array_map( 
            array: (array) $this->resource->terms ?? [],
            callback: fn($term) => \pockets::crud('term')::init($term)->read(['ID'])['ID'] ?? \pockets::error("Denied")
        );
    }
    
}