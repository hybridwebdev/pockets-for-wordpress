<?php 
namespace pockets\crud\models\terms;

/**
    For safer and more secure implemntation, this module is read only.
*/
class model extends \pockets\crud\model {

    use permissions;
    use validate_resource;

    public static string $model_name = 'terms';
    public string $read_resource     = __NAMESPACE__.'\read';
    public string $get_resource     = __NAMESPACE__.'\get';

    #[\pockets\crud\schema\attribute( [ 'crudActionDisabled' => "create" ] ) ]
    function create( array $input, array $output ) : Wp_Error {
        return \pockets::error('Denied');
    }
    
    function read($fields) {
        if( !$this->canRead() ) return \pockets::error("Denied");
        return $this->read_resource( $fields );
    }
    
    #[\pockets\crud\schema\attribute( [ 'crudActionDisabled' => "update" ] ) ]
    function update( array $input, array $output ) : Wp_Error {
        return \pockets::error('Denied');
    }
    
    #[\pockets\crud\schema\attribute( [ 'crudActionDisabled' => "delete" ] ) ]
    function delete( array $input ) : Wp_Error {
        return \pockets::error('Denied');
    }

    
}