<?php
namespace pockets\crud\models\taxonomy;
 
class model extends \pockets\crud\model {
    
    use permissions;
    use validate_resource;
    
    public static string $model_name = 'taxonomy';

    public string $get_resource      = __NAMESPACE__.'\get';
    public string $update_resource   = __NAMESPACE__.'\update';
    public string $read_resource     = __NAMESPACE__.'\read';

    /**
        create is disabled for this model
    */
    #[\pockets\crud\schema\attribute( [ 'crudActionDisabled' => "create" ] ) ]
    function create($input, $output = []){
        return \pockets::error('Denied');
    }

    function read( array $input ){
        if( !$this->canRead() ) return \pockets::error("Denied");
        return $this->read_resource($input);
    }

    function update( array $input, array | bool $output = [] ){
        if( !$this->canUpdate() ) return \pockets::error("Denied");

        $updated = $this->update_resource($input);
        
        if($output === true) {
            return $updated;
        }
        
        $this->setResource( $this->resource->name );

        return $this->read($output);

    }
    
    /**
        delete is disabled for this model
    */
    #[\pockets\crud\schema\attribute( [ 'crudActionDisabled' => "delete" ] ) ]
    function delete($input){
        return \pockets::error('Denied');
    }

}