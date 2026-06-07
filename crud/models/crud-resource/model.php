<?php
namespace pockets\crud\models\crud_resource;

/**
    
    This model acts as middleware for crud models. 

    You can give the "init" method a request as either an object or an array,
    and it will inspect the request and forward it to the correct crud model.
    For example you could give it an instance of \Wp_Post and it would forward
    the request to the "post" crud model.

    Crud models can have a "crud_resource" property on their read_resource class that should return an array
    that can be used to re-fetch the resource. 

*/
final class model extends \pockets\crud\model {
    
    use validate_resource;
    use permissions;

    public static string $model_name = 'crud-resource';

    public string $get_resource = __NAMESPACE__.'\get';

    function create(array $update, array $read = []){
        if( !$this->canCreate() ) {
            return \pockets::error("Denied");
        }
        return $this->resource->create($update, $read);
    }

    function read($fields){
        if( !$this->canRead() ) {
            return \pockets::error("Denied");
        }
        return $this->resource->read($fields);
    }

    function update($update, array | bool $read = []){
        if( !$this->canUpdate() ) {
            return \pockets::error("Denied");
        }
        return $this->resource->update($update, $read);
    }

    function delete($fields = [ 'force' => true ] ){
        if( !$this->canDelete() ) {
            return \pockets::error("Denied");
        }
        return $this->resource->delete($fields);
    }

    static function getSchema() : array {

        $generator = fn( string $model_name, string $action ) => [
            'type' => 'object',
            '$merge' => [
                'source' => [
                    '$ref' => "/{$model_name}/model/{$action}/".'#/$merge/source',
                ],
                'with' => [
                    'properties' => [
                        'init' => [
                            '$ref' => "/reset",
                            '$merge' => [
                                'source' => [
                                    '$ref' => "/{$model_name}/model/{$action}/".'#/$merge/source/properties/init',
                                ] ,
                                'with' => [
                                    'properties' => [
                                        'object_type' => ['type' => "string"]
                                    ]
                                ]
                            ]
                        ]
                    ]
                ]
            ]
        ];

        $object_type_map = get::getObjectMap();

        $schema = array_reduce(
            array: [ 'create', 'read', 'update', 'delete' ],
            callback: fn(array $acc, string $action) => $acc + array_reduce(
                array: array_keys($object_type_map),
                callback: fn(array $_acc, string $object_type) => $_acc + [
                    /**
                        eg: /crud-resource/wp_post/read/
                    */
                    "/crud-resource/{$object_type}/{$action}/" => $generator(
                        model_name: $object_type_map[$object_type]['model'],
                        action: $action
                    )
                ],
                initial: []
            ),
            initial: parent::getSchema()
        );

        $schema = array_reduce(
            array: [ 'create', 'read', 'update', 'delete' ],
            callback: fn( array $acc, string $action) => array_merge( $acc, [
                "/crud-resource/model/{$action}/" => [
                    '$dynamicValidator' => [
                        'map' => array_reduce(
                            array: array_keys($object_type_map),
                            callback: fn($acc, $object_type) => array_merge(
                                $acc,
                                /**
                                    eg: /crud-resource/wp_post/read/
                                */
                                [ $object_type => "/crud-resource/{$object_type}/{$action}/" ]
                            ),
                            initial: []
                        ),
                        'source' => 'rootData.init.object_type',
                    ]
                ]
            ]),
            initial: $schema
        );
        
        return $schema;
        
    }

}