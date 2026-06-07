<?php 
namespace pockets\crud\models\post_type;

class model extends \pockets\crud\model {
    
    use permissions;
    use validate_resource;

    /**
        This module is read only as it acts as a bridge
        to the post crud.
    */    

    public static string $model_name = 'post-type';

    public string $get_resource = __NAMESPACE__.'\get';   
    public string $read_resource = __NAMESPACE__.'\read';
    public string $update_resource = __NAMESPACE__.'\update';

    /**
        @class-document-advanced
        The create action is unavailable on this model.
    */
    #[ \pockets\crud\schema\attribute( [ 'crudActionDisabled' => 'create' ] ) ]
    function create(array $fields, array $read){}
    
    function read($fields) {

        if( !$this->canRead() ) {
            return \pockets::error("Denied");
        }

        return $this->read_resource( $fields );
    }

    function update( array $input, array | bool $output = []) {

        if( !$this->canUpdate() ) {
            return \pockets::error("Denied");
        }

        $updated_result = $this->update_resource( $input );

        if( $output === true) {
            return $updated_result;
        }

        return $this->read($output);

    }

    /**
        @class-document-advanced
        The delete action is unavailable on this model.
    */
    #[ \pockets\crud\schema\attribute( [ 'crudActionDisabled' => 'delete' ] ) ]
    function delete(array $args){}

}