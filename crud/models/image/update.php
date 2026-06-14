<?php
namespace pockets\crud\models\image;
class update extends \pockets\crud\resource_walker {
    
    function title( string $title) : array {
        $this->resource->post_title = wp_kses_post($title);
        return [ 'updated' => true ];
    }

}