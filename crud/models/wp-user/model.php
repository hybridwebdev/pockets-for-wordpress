<?php
namespace pockets\crud\models\wp_user;
 
class model extends \pockets\crud\model {
    
    use permissions;
    use validate_resource;
    
    public static string $model_name = 'wp-user';

    public string $get_resource      = __NAMESPACE__.'\get';
    public string $update_resource   = __NAMESPACE__.'\update';
    public string $read_resource     = __NAMESPACE__.'\read';

    #[\pockets\crud\schema\attribute([
        'properties' => [
            'input' => [
                'type' => "object",
                'required' => [ 'user_pass', "user_login", 'user_email' ],
            ],
        ],
    ])]
    function create( $input, $output = [] ){

        if( !$this->canCreate() ) {
            return \pockets::error('Denied');
        };
 
        $ID = wp_insert_user( $input );
        
        if( is_wp_error( $ID ) ) {
            return $ID;
        }

        $this->setResource( $ID );

        return $this->update( $input, $output );

    }

    function read( ?array $input ){
        if( !$this->canRead() ) return \pockets::error('Denied');
        return $this->read_resource($input);
    }

    function update($input, array | bool $output = [] ){

        if( !$this->canUpdate() ) return \pockets::error('Denied');

        $update_result = $this->update_resource($input);

        $updated = wp_update_user($this->resource);

        if( is_wp_error($updated) ) {
            return $updated;
        }

        $this->setResource( $this->resource->ID );

        if( $output === true ){
            /**
                if output is a boolean and true, then return update result instead of read.
            */
            return $update_result;
        }

        return $this->read_resource( $output );

    }
    
    function delete( ?array $input = [] ){

        if( !$this->canDelete() ) return \pockets::error('Denied');

        $deleted = wp_delete_user( $this->resource->ID );

        $this->setResource( 0 );

        return [ 'deleted' => $deleted ];
    }

}