<?php 
namespace pockets\crud\schema;
class registered_options {
    
    /**
        action string "read" | "update"
        registered_settings should be an array that is a result of calling get_registered_settings
        @class-document-link https://developer.wordpress.org/reference/functions/get_registered_settings/
    */
    static function build( array $registered_settings, string $action ) : array {

        /**
            Filter out any entries that arent registered as "options"
        */
        $properties = array_filter(
            array: $registered_settings, 
            callback: fn( $option ) => $option['group'] == 'options'
            // && isset( $option['description']['schema'] )
            /**
                ^^^^^^^^
                This line may need to be re-added. Currently filtering on group
                is sufficient, but filtering out entries without a schema
                gives more fine-grain control.
            */
        );

        $properties = array_map(
            array: $properties,
            callback: fn($meta_key) => $meta_key['description']['schema'][$action] ?? [],
        );

        $base = [
            'type' => ["object", 'array'],
            'additionalProperties' => false
        ];

        if( count($properties) == 0) {
            return $base + [
                'errorMessage' => [
                    'additionalProperties' => "There are no registered settings under the 'options' key. You can register an option using register_setting()"
                ]
            ];
        }

        return match( $action ) {
            'read' => $base + [
                'crudFields' => [
                    'patternProperties' => $properties,
                    'items' => [
                        'type' => "string",
                        'enum' => array_keys($properties),
                    ],
                ]
            ],
            'update' => $base + [
                'properties' => $properties
            ],
            default => [
                '$comment' => "Invalid action {$action}"
            ]
        };
        
    }

}