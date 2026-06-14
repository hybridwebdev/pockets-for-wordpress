<?php
namespace pockets\crud\models\crud_models;
 
class model extends \pockets\crud\model {
    
    public static string $model_name = 'crud-models';
    public string $read_resource     = __NAMESPACE__.'\read';

    /**
        Create is unavailable for this model.
    */
    #[\pockets\crud\schema\attribute( [ 'crudActionDisabled' => "create" ] ) ]
    function create($input, $output = []){
        return \pockets::error('Denied');
    }

    function read($input, $output = []){
        return $this->read_resource($input);
    }

    /**
        Update is unavailable for this model.
    */
    #[\pockets\crud\schema\attribute( [ 'crudActionDisabled' => "update" ] ) ]
    function update($input, $output = [] ){
        return \pockets::error('Denied');
    }

    /**
        Delete is unavailable for this model.
    */
    #[\pockets\crud\schema\attribute( [ 'crudActionDisabled' => "delete" ] ) ]
    function delete($input){
        return \pockets::error('Denied');
    }
    
}