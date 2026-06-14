<?php 
namespace pockets\crud\models\wp_options\test;
 
class model_test extends \WP_UnitTestCase {
    
    use \pockets\tests\helpers\set_user;

    function setup () : void {
        
        parent::setup();

        register_setting('options', 'foo', [
            'default' => "bar",
            'auth_callback' => fn( string $action ) => match ( $action ) {
                'read' => true,
                'update' => current_user_can('manage_options')
            }
        ] );
        
        $this->model = \pockets::crud('wp-options')::init();

    }
    
    function test_read(){
        
        $this->set_user("administrator");

        $results = $this->model->read( [
            'foo'
        ] );

        $this->assertEquals( $results , [
            'foo' => 'bar'
        ] );

        update_option('foo', 'test');

        $results = $this->model->read( [
            'foo'
        ] );

        $this->assertEquals( $results , [
            'foo' => 'test'
        ] );

    }

    function test_update(){

        $this->set_user("administrator");

        $results = $this->model->update( [
            'foo' => "foo"
        ], true );

        $this->assertEquals( $results , [
            'foo' => 'Updated'
        ] );

        $results = $this->model->read( [
            'foo'
        ] );

        $this->assertEquals( $results , [
            'foo' => 'foo'
        ] );

        $results = $this->model->update( [
            'foo' => "der"
        ], ['foo'] );

        $this->assertEquals( $results , [
            'foo' => 'der'
        ] );

    }

    function test_permissions(){
        
        $this->assertEquals( $this->model->canCreate(), false );
        $this->assertEquals( $this->model->canRead(), true );
        $this->assertEquals( $this->model->canUpdate(), false );
        $this->assertEquals( $this->model->canDelete(), false );

        $this->set_user("administrator");

        $this->assertEquals( $this->model->canCreate(), false );
        $this->assertEquals( $this->model->canRead(), true );
        $this->assertEquals( $this->model->canUpdate(), true );
        $this->assertEquals( $this->model->canDelete(), false );

    }

    function test_sanitize_callback(){
        
        $this->set_user("administrator");

        $default = [
            'foo' => 'bar'
        ];

        register_setting('options', 'test_option', [
            'type' => 'object',
            'default' => null,
            'sanitize_callback' => fn() => $default
        ] );

        $this->model->update( [
            'test_option' => "invalid value"
        ] );

        $results = $this->model->read( [
            'test_option:<='
        ] );

        $this->assertEquals( $results , $default );

    }

    function providerInsufficientPermissions(){
        return [
            'With provided auth_callback' => [
                'cb' => fn() => register_setting('options', 'admin_only', [
                    'default' => "bar",
                    'auth_callback' => fn( string $action ) => current_user_can('manage_options')
                ] )
            ],
            'With fallback auth_callback' => [
                'cb' => fn() => register_setting('options', 'admin_only', [
                    'default' => "bar",
                ] )
            ]
        ];
    }

    /**
        @dataProvider providerInsufficientPermissions 
    */ 
    function test_insufficient_permissions( callable $setup ){

        call_user_func( $setup );

        $results = $this->model->read( [
            'admin_only'
        ] );

        $this->assertEquals(
            true,
            is_wp_error( $results['admin_only'] )
        );

        $results = $this->model->update( [
            'admin_only' => "foo"
        ] );

        $this->assertEquals(
            true,
            is_wp_error( $results )
        );

    }

} 