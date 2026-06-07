<?php
/**
    Template Name: Generic Post loop 1
    Template Type: post-loop
*/

array_map(
    array: $this->read_resource( [
        'items:<=' => [
            'render' => [
                'template' => 'post/generic-1'
            ]
        ]
    ] ),
    // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
    callback: fn($e) => print( is_wp_error( $e ) ? "" : $e['render'] )
); 
