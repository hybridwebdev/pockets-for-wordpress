<?php
namespace pockets\crud\documentation;

trait get_documentation {

    /**
        @class-document-advanced
        returns models documentation
    */
    static function getDocumentation() : array {

        $class = static::class; 

        $model_name = $class::$model_name;

        $schema = [ 'group' => "Crud - {$model_name}" ] ;
        
        $model = crud_model_documentation::init( model_name: $model_name )->build($class, $schema + [ 'title' => "Model" ] );

        /**
            Flag model so it can be found via filters.
        */
        $model['isCrudModel'] = true;

        $data = [
            "{$model['info']['name']}" => $model
        ];

        $read_resource = $model['properties']['read_resource']['value'] ?? false;
 
        if( $read_resource ) {
            $read_document = resource_walker_documentation::init( model_name: $model_name, model: $model, action: 'read' )->build($read_resource, $schema + [ 'title' => "Read" ]  );
            $data[ $read_document['info']['name'] ] = $read_document;
        }

        $update_resource = $model['properties']['update_resource']['value'] ?? false;

        if( $update_resource ) {
            $update_document = resource_walker_documentation::init( model_name: $model_name, model: $model, action: 'update' )->build($update_resource, $schema + [ 'title' => "Update" ]  );
            $data[ $update_document['info']['name'] ] = $update_document;
        }

        $get_resource = $model['properties']['get_resource']['value'] ?? false;

        if( $get_resource ) {
            $get_document = get_resource_documentation::init( model_name: $model_name, model: $model )->build( $get_resource, $schema + [ 'title' => "Get" ]  );
            $data[ $get_document['info']['name'] ] = $get_document;
        }

        return $data;

    }

} 