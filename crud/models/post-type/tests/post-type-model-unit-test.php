<?php 
namespace pockets\crud\models\post_type\tests;
use pockets\tests\helpers\set_user;

trait test_update {
        
    function provider_test_update(){
        return [
            'as-administrator' => [
                'role' => 'administrator',
                'canUpdate' => true
            ],
            'as-visitor' => [
                'role' => null,
                'canUpdate' => false
            ]
        ];
    }

    /**
        @dataProvider provider_test_update
    */
    function test_update($role, $canUpdate) {

        /**
            Whitelisting meta key for test
        */
        register_meta( 'pockets-post-type-meta', 'test-meta', [] );

        $this->set_user($role);

        $action = [
            'write' =>[
                'acf' => [
                    'test-acf' => 'bar'
                ],
                'meta' => [
                    'test-meta' => 'bar'
                ]
            ],
            'read' => [
                'acf' => [ 'test-acf' ],
                'meta' => [ 'test-meta' ]
            ],
            'default-state' => [
                'acf' => [
                    'test-acf' => null
                ],
                'meta' => [
                    'test-meta' => null
                ]
            ]
        ];
        
        $model =  \pockets::crud('post-type')::init( get_post_type_object( 'post' ) );

        $updated = $model->update( $action['write'], true ); 

        /**
            Permission check
        */
        $this->assertEquals( $canUpdate, $model->canUpdate() );

        /**
            Set role so read passes permissions check
            and test clean up can run
        */
        $this->set_user('administrator');

        $read = $model->read( $action['read'] ); 

        if($canUpdate === false) {
            $this->assertWPError( $updated );
            $this->assertEquals( $action['default-state'], $read );
        }

        if($canUpdate === true) {
            
            $this->assertEquals($read, $action['write']);
            /**
                check that update operation return was successful
            */
            $this->assertEquals($updated, [
                'acf' => [
                    'test-acf' => true
                ],
                'meta' => [
                    'test-meta' => true
                ]
            ], 'failed');

        }

        /**
            because the post_type model uses an options table for updating, the data is not reset after
            tests conclude. This cleans the data it creates.
        */

        $model->update( $action['default-state'] ); 

    }

}

trait test_read {

    function provider_test_read(){
        return [
            'as-administrator' => [
                'role' => 'administrator',
                'canRead' => true
            ],
            'as-visitor' => [
                'role' => null,
                'canURead' => true
            ]
        ];
    }
    /**
        @dataProvider provider_test_read
        @todo need to add proper read permission check to post_type model and check them.
    */
    function test_read($role, $canRead){
        
        $this->set_user($role);

        $action = [
            'read' => [
                'crud_resource',
                'link',
                'name',
                'slug'
            ]
        ];
        
        $read_model = \pockets::crud('post-type')::init( get_post_type_object( 'post' ) )->read($action['read']); 
        
        $this->assertNotWPError($read_model);

        $this->assertArraySubset( [
            'name' => "post",
            'object_type' => 'wp_post_type'
        ], $read_model['crud_resource'] );

        $tests = [
            /**
                Test as crud-resource
            */
            \pockets::crud('crud-resource')::init( get_post_type_object( 'post' ) )->read( $action['read'] ),
            \pockets::crud('crud-resource')::init( $read_model['crud_resource'] )->read( $action['read'] ),
            /**
                Test as model
            */
            \pockets::crud('post-type')::init( 'post' )->read( $action['read'] ),
            \pockets::crud('post-type')::init( $read_model['crud_resource'] )->read( $action['read'] )

        ];

        array_map(function($test) use ( $read_model ) {
            $this->assertEquals( $test, $read_model );
        }, $tests);

        /**
            Ensure invalid request fails gracefully.
        */

        $this->assertWPError( 
            \pockets::crud('post-type')::init()->read( $action['read'] )
        );

        $this->assertWPError(
            \pockets::crud('post-type')::init('invalid-post-type')->read( $action['read'] )
        );
        
        $this->assertWPError(
            \pockets::crud('post-type')::init([])->read( $action['read'] )
        );

        $this->assertWPError(
            \pockets::crud('post-type')::init((object)[] )->read( $action['read'] )
        );

    }

}

class post_type_model_unit_test extends \WP_UnitTestCase {
    
    use set_user;
    use test_read;
    use test_update;
 
}