<?php 
namespace pockets\crud\schema;

#[\AllowDynamicProperties]
class model {
    
    use base;

    function build( string $model ) : array {
        
        $this->model = \pockets\utils\get_class_documentation::init()->build($model, []);

        $this->model_name = $this->model['properties']['model_name']['value'];

        return [
            static::refPath( "{$this->model_name}/model/create/" ) => $this->create(),
            static::refPath( "{$this->model_name}/model/read/" ) => $this->read(),
            static::refPath( "{$this->model_name}/model/update/" ) => $this->update(),
            static::refPath( "{$this->model_name}/model/delete/" ) => $this->delete()
        ] 
        + $this->model['properties']['get_resource']['value']::getSchema( static::refPath( "{$this->model_name}/get_resource" ) )
        + $this->model['properties']['read_resource']['value']::getSchema( static::refPath( "{$this->model_name}/read_resource" ) )
        + $this->model['properties']['update_resource']['value']::getSchema( static::refPath( "{$this->model_name}/update_resource" ) );
        
    }

    function create() {
        return [
            '$merge' => [
                'source' => [
                    'type' => 'object',
                    'properties' => [
                        "action" => [
                            '$ref' => '/partials/crud/action/'
                        ],
                        "model" => [
                            '$ref' => "/partials/crud/model/"
                        ],
                        'input' => [
                            '$ref' => static::refPath( "{$this->model_name}/update_resource")
                        ],
                        'output' => [
                            '$ref' => static::refPath( "{$this->model_name}/read_resource")
                        ],
                        'init' => [
                            'type' => 'object',
                            '$comment' => ""
                        ]
                    ],
                    'additionalProperties' => false,
                    'required' => [ 'input', 'output', 'action', 'model' ],
                ],
                'with' => static::getSchemaAttribute( $this->model['methods']['create']['attributes'], [
                    '$comment' => ""
                ] ),
            ]
        ];
    }

    function read(){
        return [
            '$merge' => [
                'source' => [
                    'type' => 'object',
                    'properties' => [
                        "action" => [
                            '$ref' => '/partials/crud/action/'
                        ],
                        "model" => [
                            '$ref' => "/partials/crud/model/"
                        ],
                        'init' => [
                            '$ref' => static::refPath( "{$this->model_name}/get_resource")
                        ],
                        'input' => [
                            '$ref' => static::refPath( "{$this->model_name}/read_resource")
                        ],
                    ],
                    'additionalProperties' => false,
                    'required' => [ 'init', 'input', 'model', 'action' ],
                ],
                'with' => static::getSchemaAttribute( $this->model['methods']['read']['attributes'], [
                    '$comment' => ""
                ] ),
            ]
        ];
    }

    function update(){
        return [
            '$merge' => [
                'source' => [
                    'type' => 'object',
                    'properties' => [
                        "action" => [
                            '$ref' => '/partials/crud/action/'
                        ],
                        "model" => [
                            '$ref' => "/partials/crud/model/"
                        ],
                        'init' => [
                            '$ref' => static::refPath( "{$this->model_name}/get_resource")
                        ],
                        'input' => [
                            '$ref' => static::refPath( "{$this->model_name}/update_resource")
                        ],
                        'output' => [
                            '$ref' => static::refPath( "{$this->model_name}/read_resource")
                        ],
                    ],
                    'additionalProperties' => false,
                    'required' =>  [ 'init', "input", "output", "action", "model" ],
                ],
                'with' => static::getSchemaAttribute( $this->model['methods']['update']['attributes'], [
                    '$comment' => ""
                ] ),
            ]
        ];
    }

    function delete() {
        return [
            '$merge' => [
                'source' => [
                    'type' => 'object',
                    'properties' => [
                        "action" => [
                            '$ref' => '/partials/crud/action/'
                        ],
                        "model" => [
                            '$ref' => "/partials/crud/model/"
                        ],
                        'init' => [
                            '$ref' => static::refPath( "{$this->model_name}/get_resource")
                        ],
                        'input' => [
                            '$comment' => ""
                        ],
                    ],
                    'additionalProperties' => false,
                    'required' => [ 'init', 'input', "action", "model"],
                ],
                'with' => static::getSchemaAttribute( $this->model['methods']['delete']['attributes'], [
                    '$comment' => ""
                ] ),
            ]
        ];
    }

}
 