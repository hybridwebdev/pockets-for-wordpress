<?php
namespace pockets\crud\models\crud_resource;

class get extends \pockets\crud\get_resource {

    use validate_resource;

    public string $default_array_by = 'crud_resource';
    
    /**
        This is used in apply_model.
        It's a map that should connect a resource object_type to a crud model to handle that resource.
        Each entry should contain a key to a valid wp_class, and an array with a model key that points to a crud model.
        eg => [
            'wp_query' => [ 'model' => "posts" ]
        ]
        you can add a new map entry using the ::addObjectMap method on this class.
    */
    static protected $object_type_map = [ ];

    static function addObjectMap( string $key, array $value){
        static::$object_type_map[$key] = $value;
        return static::class;
    }

    static function getObjectMap(){
        return static::$object_type_map;
    }

    // function request_using_array() {
    //     //return $this->apply_model( $this->resource[ 'object_type' ], 'array');
    // }
    function array_by_queried_object(){

        $object = get_queried_object();
        return $this->apply_model( get_class( $object ), 'array');

    }

    function array_by_crud_resource(){
        return $this->apply_model( $this->resource[ 'object_type' ], 'array');
    }

    function request_using_object(){
        return $this->apply_model( strtolower( get_class( $this->resource ) ), 'object');
    }

    function apply_model($type, $using){

        $map = static::getObjectMap();

        $model_name = $map[$type]['model'] ?? false;

        if( $model_name ) {
            $crud_model = \pockets::crud( $model_name );
            if( is_wp_error( $crud_model ) ) return $crud_model;
            return $crud_model::init( $this->resource );
        }

        return \pockets::error('Model not found', [$type, $model_name]);

    }

}
