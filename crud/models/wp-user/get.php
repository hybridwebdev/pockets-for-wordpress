<?php
namespace pockets\crud\models\wp_user;

#[ \pockets\crud\schema\attribute( [
    'type' => ['object', 'integer'],
    'properties' => [

        'by' => [
            'type' => 'string',
            'includes' => [
                'enum' => [ "ID", "slug", "email", "login", 'current_user' ]
            ]
        ],

        "ID" => [
            'type' => 'integer'
        ],
        'slug' => [
            'type' => 'string'
        ],
        'email' => [
            'type' => 'string'
        ],
        'login' => [
            'type' => 'string'
        ],

    ],
    'additionalProperties' => false

] ) ]
class get extends \pockets\crud\get_resource {

    use validate_resource;
    
    public string $default_array_by = 'ID';
    
    function get_user_by(string $key, mixed $value) : \WP_User | \Wp_Error {
        $user = get_user_by( $key, $value );
        if( !$user ) {
            return \pockets::error('Denied');
        };
        return $user;
    }

    function array_by_current_user(){
        if( !is_user_logged_in() ) {
            return \pockets::error('Denied');
        }
        return wp_get_current_user();
    }

    function array_by_ID(){
        return $this->get_user_by( 'ID', $this->resource['ID'] );
    }

    function array_by_slug(){
        return $this->get_user_by( 'slug', $this->resource['slug'] );
    }

    function array_by_email(){
        return $this->get_user_by( 'email', $this->resource['email'] );
    }

    function array_by_login(){
        return $this->get_user_by( 'login', $this->resource['login'] );
    }

    function request_using_integer(){
        return $this->get_user_by( 'ID', $this->resource );
    }
    
}   
 