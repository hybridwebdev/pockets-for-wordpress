<?php
namespace pockets\crud;
trait render {

    /**
        @function read_resource

        @class-document-advanced
        
        Can be called within a template called via the render() method of this model.
        Can be used to read any fields available in this module.
    */
    final function read_resource( array $fields ) : array {
        return $this->walk( $fields );
    }

    /**
        @function render 
        
        requires an array as an argument with the following:
        
        [
            'template' => "path/to/template", should be a string that points to a valid /templates/ file.
            ...any data you'd like to pass to the template. This will be available as $data->value in the template called.
        ]

        The template will be called within the context of this read_resource model,
        giving it access to the read method of this model, where you can access any of the read fields available in this model.
    */
    #[ \pockets\crud\schema\attribute( [
        'type' => "object",
        'properties' => [
            'template' => [
                'type' => 'string'
            ]
        ],
        'required' => [ 'template' ]
    ] ) ]
    final function render( array $data ) : string | \WP_Error {
        
        $template = \pockets::locate_template( $data );
        
        if( $template ) {
            ob_start();
                require($template);
            return ob_get_clean();
        }

        return \pockets::error("Template {$data['template']} not found.");

    }

}