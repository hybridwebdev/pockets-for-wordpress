<?php 
namespace pockets\crud\models\posts\test;

abstract class test_query extends \WP_UnitTestCase {

    use \pockets\tests\helpers\set_user;
    use test_functions;

    public $dummy_item_count = 10;

}

trait test_functions {

    function test_invalid_query(){
        $model = \pockets::crud('posts')::init( null );
        $this->assertFalse( $model->canRead() );
        $this->assertWPError( $model->read( [ 'IDS' ] ) );

    }

    /**
        @dataProvider provider_test_valid_query
        test_valid_query should test against a valid query
    */
    function test_valid_query(){
        /**
            ff user should have read access, 
                - Ensure readModel method operation validates against getTestItems method.
                - Ensure count of read operation equals created item count.
            if user should not have read access
                - ensure all found crud items return a wp error as their canRead should not pass.
        */
        $data = $this->getProvidedData();
    
        $items = call_user_func( [ $this, $data['getTestItems'] ] );
        
        $this->set_user(  $data['role'] );

        $read = call_user_func( [ $this, $data['readModel'] ] );

        if( $data['canRead'] === true ) {
            $this->assertCount( $this->dummy_item_count, $read );
            $this->assertEquals( $read,  $items );
        }

        if(  $data['canRead'] === false ) {
            /**
                User should have no access to read the underlying items, therefore they should return wp_error instances
            */
            $filtered = array_filter( $read, function($item) {
                return !is_wp_error( $item );
            });

            $this->assertCount(0, $filtered);
            
        }
    }

}

class test_wp_query extends test_query {

    public $request = [
        'init' => [
            'posts_per_page' => -1,
            'post_type' => "post",
            'post_status' => 'any',
            'order' => "ASC",
            'orderby' => "ID"
        ],
        'read' => [
            "items:<=" => [ "ID" ]
        ]
    ];

    function provider_test_valid_query(){

        return [
            /**
                Testing as admin
                with different query types
             */
            'as-admin-using-crud-resource' =>[
                'role' => "administrator",
                'canRead' => true,
                'readModel' => 'modelUsingCrudResource',
                'getTestItems' => 'getTestItems'
            ],
            'as-admin-using-object' =>[
                'role' => "administrator",
                'canRead' => true,
                'readModel' => 'modelUsingObject',
                'getTestItems' => 'getTestItems'
            ],
            'as-admin-using-array' =>[
                'role' => "administrator",
                'canRead' => true,
                'readModel' => 'modelUsingArray',
                'getTestItems' => 'getTestItems'
            ],
          /**
                Testing as visitor with private posts
                with different query types
             */
            'as-visitor-using-crud-resource' => [
                'role' => null,
                'canRead' => false,
                'readModel' => 'modelUsingCrudResource',
                'getTestItems' => 'getTestItems'
            ],
            'as-visitor-using-object' => [
                'role' => null,
                'canRead' => false,
                'readModel' => 'modelUsingObject',
                'getTestItems' => 'getTestItems'
            ],
            'as-visitor-using-array' => [
                'role' => null,
                'canRead' => false,
                'readModel' => 'modelUsingArray',
                'getTestItems' => 'getTestItems'
            ],
            /**
                Testing as visitor with public posts
                with different query types
             */
            'as-visitor-using-crud-resource-getTestItemsPublic' => [
                'role' => null,
                'canRead' => true,
                'readModel' => 'modelUsingCrudResource',
                'getTestItems' => 'getTestItemsPublic'
            ],
            'as-visitor-using-object-getTestItemsPublic' => [
                'role' => null,
                'canRead' => true,
                'readModel' => 'modelUsingObject',
                'getTestItems' => 'getTestItemsPublic'
            ],
            'as-visitor-using-array-getTestItemsPublic' => [
                'role' => null,
                'canRead' => true,
                'readModel' => 'modelUsingArray',
                'getTestItems' => 'getTestItemsPublic'
            ],
             
        ];
    }
    
    function modelUsingCrudResource() : array {
        return \pockets::crud('crud-resource')::init( new \WP_Query( $this->request['init'] ) )->read( $this->request['read'] ); 
    }

    function modelUsingObject() : array {
        return \pockets::crud('posts')::init( new \WP_Query( $this->request['init'] ) )->read( $this->request['read'] ); 
    }

    function modelUsingArray() : array {
        return \pockets::crud('posts')::init( $this->request['init'] )->read( $this->request['read'] ); 
    }

    function getTestItems($status = 'private') : array {
        
        $IDS = $this->factory->post->create_many($this->dummy_item_count, [
            'post_status' => $status,
            'post_type' => 'post',
        ]);

        return array_map(function($ID){
            return ["ID" => $ID];
        }, $IDS);

    }

    function getTestItemsPublic(){
        return $this->getTestItems('publish');
    }

};
