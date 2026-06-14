<?php 
namespace pockets\crud\schema;

#[\AllowDynamicProperties]
class get_resource {
    use base;
    function build( string $model, string $schema_ID ) : array {

        $this->model = \pockets\utils\get_class_documentation::init()->build( $model, [] );
        
        return [
            $schema_ID => static::getSchemaAttribute( $this->model['info']['attributes'], [
                '$comment' => 'fallback'
            ] )
        ];
        
    }
}