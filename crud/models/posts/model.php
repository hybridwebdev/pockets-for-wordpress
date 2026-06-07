<?php 
namespace pockets\crud\models\posts;
use \WP_Error;

/**
    For safer and more secure implemntation, this module is read only.
*/
class model extends \pockets\crud\model {

    use validate_resource;
    use permissions;
    
    public static string $model_name = 'posts';

    public string $read_resource = __NAMESPACE__.'\read';
    
    public string $get_resource = __NAMESPACE__.'\get';

    /**
        @class-document-advanced
        Create is not available for this model.
    */
    #[\pockets\crud\schema\attribute( [ 'crudActionDisabled' => "create" ] ) ]
    function create( array $input, array $output ) : Wp_Error {
        return \pockets::error('Denied');
    }
    
    
    function read( array $fields) : array | Wp_Error {

        if( !$this->canRead() ) return \pockets::error('Denied');

        return $this->read_resource( $fields );

    }

    /** 
        @class-document-advanced
        Update is not available for this model.
    */
    #[\pockets\crud\schema\attribute( [ 'crudActionDisabled' => "update" ] ) ]
    function update( array $input, array $output ) : Wp_Error {
        return \pockets::error('Denied');
    }
    
    /**
        @class-document-advanced
        Delete is not available for this model.
    */
    #[\pockets\crud\schema\attribute( [ 'crudActionDisabled' => "delete" ] ) ]
    function delete( array $input ) : Wp_Error {
        return \pockets::error('Denied');
    }

}