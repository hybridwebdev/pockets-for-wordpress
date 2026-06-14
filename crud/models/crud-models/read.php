<?php
namespace pockets\crud\models\crud_models;
class read extends \pockets\crud\resource_walker {
    
    /**
        Returns list of registered crud model documentation.
    */
    function documents() : array {
        return array_reduce( 
            initial: [],
            array: \pockets\crud\model::getModels(), 
            /**
                the models get_documentation returns a multimensional array indexed by their class name,
                this returns a merge of the $acc and the models documents. 
            */
            callback: fn( $acc, $model ) => $acc + $model::getDocumentation()
        );
    }

    /**
        Returns list of registered crud model schemas, their resource schemas as well as
        additional helper schemas
    */
    function schemas() : array {
 
        $initial = [

            '/reset'  => [
                '$comment' => 'This schema is intentionally blank, so that it can be used to override $ref declarations.'
            ],
            '/partials/crud/action/' => [
                'type' => 'string',
                'enum' => [ 'create', 'read', 'update', 'delete' ], 
            ],

            '/partials/crud/model/' => [
                'type' => "string",
                'enum' =>  $this->names(),
            ],

            '/partials/crud/base-query/' => [
                "type" => "object",
                'required' => [ 'action', 'model' ],
                "properties" => [
                    "model" => [
                        '$ref' => "/partials/crud/model/"
                    ],
                    "action" => [
                        '$ref' => '/partials/crud/action/'
                    ],
                ],
            ]

        ];

        return array_reduce( 
            initial: $initial,
            array: \pockets\crud\model::getModels(), 
            callback: fn( $acc, $model ) => $acc + $model::getSchema() 
        );

    }
    
    /**
        Returns list of registered crud model names
    */
    function names() : array {
        $names = array_map( 
            array: \pockets\crud\model::getModels(), 
            callback: fn( $model ) => $model::$model_name
        );
        return array_values($names);
    }
    
}