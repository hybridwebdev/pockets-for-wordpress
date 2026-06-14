<?php 
namespace pockets\crud\models\wp_user\test;

use \pockets\tests\crud\test_model;

class test_wp_user extends test_model {
    
    /**
        "borrowed" from https://stackoverflow.com/questions/4356289/php-random-string-generator
    */
    function generateRandomString($length = 10) {
        return strtolower( substr( str_shuffle( str_repeat( $x='0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ', ceil( $length /strlen( $x ) ) ) ), 1, $length) );
    }

    function getMock(){

        $mock = [
            'read' => [
                'display_name',
                'email',
                'nicename',
                'acf' => [
                    'foo'
                ],
                'meta' => [
                    'test-meta'
                ]
            ],
            'write' => [
                'display_name' => $this->generateRandomString(),
                'email' => $this->generateRandomString()."@test.com",
                'nicename' => $this->generateRandomString(),
                'acf' => [
                    'foo' => "bar"
                ],
                'meta' => [
                    'test-meta' => "foo"
                ]
            ],
        ];

        $mock['write-assert'] = $mock['write'];

        return $mock;

    }

    function getModels(){
         
        $this->factory->user->create( [ 
            'user_slug' => "test-user", 
            'user_email' => "test@test.com", 
            'user_login' => "test-user"
        ] );

        return [
            \pockets::crud('wp-user')::init( [ 'ID' => $this->factory->user->create() ] ),
            \pockets::crud('wp-user')::init( $this->factory->user->create() ),
            \pockets::crud('wp-user')::init( [ 'by' => 'email', 'email' => 'test@test.com' ] ),
            \pockets::crud('wp-user')::init( [ 'by' => 'login', 'login' => 'test-user' ] ),
            \pockets::crud('wp-user')::init( [ 'by' => 'slug', 'slug' => 'test-user' ] ),
            \pockets::crud('wp-user')::init( new \WP_User( $this->factory->user->create() ) ),
        ];

    }

    public function provider_role_tests (){
        return [
            'as-admin' => [
                'role' => 'administrator',
                'canRead' => true,
                'canDelete' => true,
                'canCreate' => true,
                'canUpdate' => true
            ],
            'as-visitor' => [
                'role' => null,
                'canRead' => false,
                'canDelete' => false,
                'canCreate' => false,
                'canUpdate' => false
            ],
        ];
    }

    function test_by_current_user(){

        $this->set_user('administrator');

        $read = \pockets::crud('wp-user')::init( [ 'by' => "current_user" ] )->update( [
            'nicename' => "test-user"
        ], [
            'nicename'
        ] );

        $this->assertEquals( $read, [ 'nicename' => "test-user" ] );

        $this->set_user(null);

        $read = \pockets::crud('wp-user')::init( [ 'by' => "current_user" ] )->read( [ 'nicename' ] );

        $this->assertEquals( is_wp_error( $read ), true );

    }

    
    public function create( $model, $mock ){

        /**
            Have to add some additional write args because the create user
            method needs them. 
        */

        $mock['write'] = array_merge( $mock['write'], [
            'user_login' => $this->generateRandomString(),
            'user_pass' => $this->generateRandomString(),
            'user_email' => $mock['write']['email']
        ] );

        parent::create( $model, $mock );

    }

};
 