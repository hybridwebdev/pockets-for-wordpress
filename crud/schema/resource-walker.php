<?php 
namespace pockets\crud\schema;

#[\AllowDynamicProperties] 
class resource_walker {
    use base;

    function build( string $model, string $schema_ID ) : array {

        $this->model = \pockets\utils\get_class_documentation::init()->build( $model, [] );

        $this->crud_action = $this->model['properties']['crud_action']['value'];

        return [
            $schema_ID => (array) $this->resource_walker_fields( $this->model['methods'] ?? [] )
        ];

    }
    
    function resource_walker_fields( array $methods ) : array {
  
        $schema = [
            'type' => [ 'boolean' ],
            'oneOf' => [
                [
                    "if" => [
                        'type' => 'boolean'
                    ],
                    'then' => [
                        'mustBe' => true
                    ]
                ]
            ],
            'crudFields' => [
                'action' => $this->crud_action,
            ]
        ];

        $filtered_methods = array_filter( 
            array: $methods,
            callback: fn($method) => !in_array( 
                needle: $method['name'], 
                haystack: $this->model['info']['name']::getReservedMethods()
            ) && !str_starts_with( haystack: $method['name'], needle: "__" )
        );

        $properties = array_reduce(
            array: $filtered_methods,
            callback: fn($acc, $method) => $acc + [ 
                $method['name'] => $this->process_resource_walker_method($method) 
            ],
            initial: []
        );  

        if(count($properties) > 0) {
            $schema['type'][] = 'object';
            $schema['properties'] = $this->crud_action == 'read' ? (object)[] : $properties;
            $schema['additionalProperties'] = false;
            $schema['crudFields']+= [
                'patternProperties' => $this->crud_action == 'read' ? $properties : (object)[],
            ];
        }

        $item_methods = array_filter(
            array: $filtered_methods,
            callback: function($method){
                $args = $method['args'];
                if( !$args || $args[0]['optional'] === true ) return true;
            }
        );

        $items = array_map(
            array: $item_methods,
            callback: fn( $method ) => $method['name']
        );  

        if( count( $items ) > 0 ) {
            $schema['type'][] = 'array';
            $schema['crudFields'] += [
                'items' => [
                    'enum' => array_values($items),
                    'type' => "string"
                ],
            ];
        }

        return $schema; 

    }

    function process_resource_walker_method( array $method ) {

        if( $schema_def = static::getSchemaAttribute( $method['attributes'] ) ) return $schema_def;

        $first_arg = wp_parse_args( $method['args'][0] ?? [], [
            'type' => false
        ] );

        $schema = [
            'type' => [ 'null' ]
        ];

        if( $first_arg['type'] ) {
            $schema['type'] = explode( separator: "|", string: $first_arg['type'] );
            if( in_array( needle: "array", haystack: $schema['type'] ) ) {
                $schema['type'][] = 'object';
            }
        }

        $schema['type'] = array_values( 
            array_unique(
                array_map(
                    array: array_filter( 
                        array: $schema['type'], 
                        callback: fn($type) => $type!= 'invalid-type' 
                    ),
                    callback: [ static::class, 'type_mapper' ]
                ) 
            )
        );

        return $schema;
        
    }
    
}