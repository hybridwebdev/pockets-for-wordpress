<?php 

namespace pockets\utils\data_schema;

trait validation_messages {
    
    /**
        List of validation messages. 

        Message should be an array containing:
        [
            - type 
                string "error" | "success"
            - message
                string or html
            - path 
                string which correlates to the path of a form property.

        ]
    */    
    public array $validation = [];
        
    final function add_success_message( string $path, string $message ){
        $this->validation[] = [
            'type' => 'success',
            'message' => $message,
            'path' => $path
        ];
    }

    final function add_error_message( string $path, string $message ){
        $this->validation[] = [
            'type' => 'error',
            'message' => $message,
            'path' => $path
        ];
    }

}