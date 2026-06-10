<?php 
namespace pockets\crud\schema;
class registered_meta_keys {
    /**
        action string "read" | "update"
        meta keys should be an array that is a result of calling get_registered_meta_keys
        @class-document-link https://developer.wordpress.org/reference/functions/register_meta/
    */
    static function build( array $meta_keys, string $action, string $meta_object_type ) : array {
        
        /**
            Remove items without schemas 
        */
        $meta_keys = array_filter(
            array: $meta_keys,
            callback: fn( $item ) => $item['description']['schema'] ?? false
        );

        $properties = array_map(
            array: $meta_keys,
            callback: fn($meta_key) => $meta_key['description']['schema'][$action] ?? [],
        );

        $base = [
            'type' => ["object", 'array'],
            'additionalProperties' => false
        ];

        if( count($properties) == 0) {
            return $base + [
                'errorMessage' => [
                    'additionalProperties' => "Meta key not allowed. This resource has no registered meta keys. You can register a meta key for this resource using '{$meta_object_type}' as the meta object type."
                ]
            ];
        }

        return match( $action ) {
            'read' => $base + [
                'crudFields' => [
                    'patternProperties' => $properties,
                    'items' => [
                        'type' => "string",
                        'enum' => array_keys($meta_keys),
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