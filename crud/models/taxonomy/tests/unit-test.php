<?php 
namespace pockets\crud\models\taxonomy\tests;
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

        $this->set_user($role);

        /**
            Whitelisting for tests
        */
        register_meta('pockets-taxonomy-meta', 'test-meta', [] );

        $action = [
            'write' =>[
                'acf' => [
                    'test-acf' => 'der'
                ],
                'meta' => [
                    'test-meta' => "foo"
                ]
            ],
            'read' => [
                'acf' => ['test-acf'],
                'meta' => ['test-meta']
            ],
            'default-state' => [
                'acf' => [
                    'test-acf' => null
                ] ,
                'meta' => [
                    'test-meta' => null
                ]
            ]
        ];
        
        $model =  \pockets::crud('taxonomy')::init( get_taxonomy( 'category' ) );

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
            ]);

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
        
        $read_model = \pockets::crud('taxonomy')::init( get_taxonomy( 'category' ) )->read($action['read']); 
        
        $this->assertNotWPError($read_model);

        $this->assertArraySubset( [
            'name' => "category",
            'object_type' => 'wp_taxonomy'
        ], $read_model['crud_resource'] );
 
        $tests = [
            /**
                Test as crud-resource
            */
            \pockets::crud('crud-resource')::init( get_taxonomy( 'category' ) )->read( $action['read'] ),
            \pockets::crud('crud-resource')::init( $read_model['crud_resource'] )->read( $action['read'] ),
            /**
                Test as model
            */
            \pockets::crud('taxonomy')::init( 'category' )->read( $action['read'] ),
            \pockets::crud('taxonomy')::init( $read_model['crud_resource'] )->read( $action['read'] )

        ];

        array_map(function($test) use ( $read_model ) {
            $this->assertEquals( $test, $read_model );
        }, $tests);

        /**
            Ensure invalid request fails gracefully.
        */

        $this->assertWPError( 
            \pockets::crud('taxonomy')::init()->read( $action['read'] )
        );

        $this->assertWPError(
            \pockets::crud('taxonomy')::init('invalid-taxonmy')->read( $action['read'] )
        );
        
        $this->assertWPError(
            \pockets::crud('taxonomy')::init([])->read( $action['read'] )
        );

        $this->assertWPError(
            \pockets::crud('taxonomy')::init((object)[] )->read( $action['read'] )
        );

    }

}

class taxonomy_model_unit_test extends \WP_UnitTestCase {
    
    use set_user;
    use test_read;
    use test_update;

}