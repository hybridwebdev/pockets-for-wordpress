<?php
namespace pockets\crud\models\post;
 
/**
    Model for WP_Post.
    @class-document-link WP_Post
*/ 

class model extends \pockets\crud\model {

    use permissions;
    use validate_resource;
 
    public static string $model_name = 'post';

    public string $get_resource      = __NAMESPACE__.'\get';
    public string $update_resource   = __NAMESPACE__.'\update';
    public string $read_resource     = __NAMESPACE__.'\read';
    
    /**
        Create makes a new post. It does not check if one already exists. Any logic requiring that
        should be done before using it.

        arguments 
            - title (required)
            - type (required) valid post type, Eg: "Post"
            - any other aguments post/update_resource accepts
   */    
   
    #[\pockets\crud\schema\attribute([
        'properties' => [
            'input' => [
                'type' => "object",
                'required' => ['title', "type"],
            ],
        ],
    ])]
    function create( array $input, array | bool $output = ['ID'] ) : array | \WP_Error {

        if( !$this->canCreate() ) return \pockets::error('Denied');
        
        list(
            'type' => $type,
            'title' => $title
        ) = wp_parse_args( $input, [
            'type' => false,
            'title' => false
        ] ) ;

        if( !$type || !$title ) return \pockets::error("You must provide a type and title", $input );

        $ID = wp_insert_post( [ 'post_type' => $type, 'post_title' => $title ], true);

        if( is_wp_error( $ID ) ) {
            return $ID;
        }

        /**
            setting up resource so read/writes can work.
        */

        $this->setResource( $ID );

        return $this->update( $input, $output );
      
    }

    /**
        Reads fields returns results
    */
    function read(array $fields) : array | \WP_Error {

        if( !$this->canRead() ) return \pockets::error('Denied');

        return $this->read_resource( $fields );

    }
    
    /**
        if $output is set to true, it will return the result of the update operations. 
        Otherwise returns read operation using $ouput
    */
    function update(array $input, array | bool $output = [ 'ID' ]) : array | \WP_Error {

        if( !$this->canUpdate() ) return \pockets::error('Denied');

        $update_result = $this->update_resource( $input );

        $updated = wp_update_post( $this->resource );
        
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

    /**
        if force is present in $args, and set to true, it will skip the trash and delete it fully.
        WIll return [ 'deleted' => bool, 'ID' => post id ] or error.
    */
    #[\pockets\crud\schema\attribute([
        'type' => 'object',
        'properties' => [
            'input' => [
                'type' => ['null', 'object'],
                'additionalProperties' => false,
                'properties' => [
                    'force' => [ 'type' => 'boolean' ]
                ]
            ],
        ],
    ])]
    function delete( ?array $args = [ 'force' => true ]  ) : array | \WP_Error {

        if( !$this->canDelete() ) return \pockets::error('Denied');

        $ID = $this->resource->ID; 

        $deleted = wp_delete_post($ID, $args['force'] );
        if( is_wp_error($deleted) ) return $deleted;
        
        /**
            Reset Resource to ensure subsequent calls use a fresh copy
        */
        $this->setResource( $ID );

        return [ 'deleted' => true, 'ID' => $ID ];

    }

}
