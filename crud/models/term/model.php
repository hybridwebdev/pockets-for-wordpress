<?php 
namespace pockets\crud\models\term;

class model extends \pockets\crud\model {

    use permissions;
    use validate_resource;
    
    public static string $model_name = 'term';

    public string $update_resource   = __NAMESPACE__.'\update';
    public string $read_resource     = __NAMESPACE__.'\read';
    public string $get_resource     = __NAMESPACE__.'\get';
    
    /**
        
        Create makes a new term. It does not check if one already exists. Any logic requiring that
        should be done before using it. Wordpress does some logic checks to ensure
        duplicate slug names are not used. If the term slug exists, will return WP_Error instead.

        Arguments
            - name (required) name of term
            - taxonomy (required) valid taxonomy name
            - slug (required) valid term slug. Eg: "my-slug"
            - any other arguments term/update_resource accepts
    */
    #[ \pockets\crud\schema\attribute( [
        'properties' => [
            'input' => [
                'type' => 'object',
                'required' => [ 'taxonomy', 'name', 'slug' ]
            ]
        ],
    ] ) ]
    function create($fields, $output = ["ID"]) {
        
        if( !$this->canCreate() ) return \pockets::error("Denied");


        list(
            'name' => $name,
            'taxonomy' => $taxonomy,
            'slug'  => $slug
        ) = $fields;

        if( !$name || !$taxonomy || !$slug ) return \pockets::error("You must provide a name, taxonomy and slug");

        $created = wp_insert_term( $name, $taxonomy, [
            'name' => $name,
            'taxonomy' => $taxonomy,
            'slug' => $slug
        ], true );

        if( is_wp_error( $created ) ) return $created;

        /**
            setting up resource so read/writes can work.
        */

        $this->setResource( $created['term_id'] );

        return $this->update( $fields, $output );

    }

    function read($fields) {
        if( !$this->canRead() ) return \pockets::error("Denied");
        return $this->read_resource( $fields );
    }

    function update($fields, $output = []) {

        if( !$this->canUpdate() ) return \pockets::error("Denied");

        $update_result = $this->update_resource( $fields );
        
        $term = $this->resource->to_array();

        $updated = wp_update_term( $term['term_id'], $term['taxonomy'], $term );

        if( is_wp_error($updated) ) {
            return $updated;
        }
        /**
            Reset Resource to ensure subsequent calls use a fresh copy
        */
        $this->setResource( $this->resource->term_id );

        if( $output === true ){
            /**
                if output is a boolean and true, then return update result instead of read.
            */
            return $update_result;
        }

        return $this->read_resource( $output );

    }

    function delete($fields = null) {
        
        if( !$this->canDelete() ) return \pockets::error("Denied");

        list(
            'taxonomy' => $taxonomy,
            'term_id' => $ID,
        ) = $this->resource->to_array();
        
        $deleted = wp_delete_term( $ID, $taxonomy);
        
        if( is_wp_error($deleted) ) {
            return $deleted;
        }

        /**
            Reset Resource to ensure subsequent calls use a fresh copy
        */

        $this->setResource( $ID );

        return [ 'ID' => $ID, 'deleted' => true ];

    }
    
}
