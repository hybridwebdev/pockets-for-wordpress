<?php 
namespace pockets\crud\models\wp;

class model extends \pockets\crud\model {
    
    public static string $model_name = 'wp';

    public string $read_resource = __NAMESPACE__.'\read';

    /**
        This model has no create action 
    */
    #[\pockets\crud\schema\attribute( [ 'crudActionDisabled' => "create" ] ) ]
    function create( ?array $input, ?array $output){
        return \pockets::error('Denied');
    }

    #[\pockets\crud\schema\attribute( [
        'properties' => [
            'init' => null,
        ],
        'required' => []
    ] ) ]
    function read($fields){
        return $this->read_resource( $fields );
    }

    /**
        This model has no update action 
    */
    #[\pockets\crud\schema\attribute( [ 'crudActionDisabled' => "update" ] ) ]
    function update( ?array $input, ?array $output){
        return \pockets::error('Denied');
    }

    /**
        This model has no delete action 
    */
    #[\pockets\crud\schema\attribute( [ 'crudActionDisabled' => "delete" ] ) ]
    function delete( ?array $a){
        return \pockets::error('Denied');
    }

}