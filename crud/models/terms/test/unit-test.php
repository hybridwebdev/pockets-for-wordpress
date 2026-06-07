<?php 
namespace pockets\crud\models\terms\test;

abstract class test_query extends \WP_UnitTestCase {

    use \pockets\tests\helpers\set_user;
    use test_functions;

    public $dummy_item_count = 10;

}

trait test_functions {
    
     function test_invalid_query(){
        $model = \pockets::crud('terms')::init( null );
        $this->assertFalse( $model->canRead() );
        $this->assertWPError( $model->read( [ 'IDS' ] ) );
    }

    /**
        @dataProvider provider_test_valid_query 
        test_read should test against a valid query

    */
    function test_valid_query(){

        $data = $this->getProvidedData();

        $this->set_user( $data['role'] );

        $items = call_user_func( [ $this, $data['getTestItems'] ] );

        $read = call_user_func( [ $this, $data['getModel'] ] );

        if( $data['canRead'] === true ) {
            $this->assertCount( $this->dummy_item_count, $read );
            $this->assertEquals( $read, $items );
        }

        if( $data['canRead'] === false ) {
             $this->assertWPError($read);
        }

    }

}

class test_term_query extends test_query {
    
    private $request = [
        'init' => [
            'taxonomy' => 'category',
            'hide_empty' => false,
            /**
                Exclude the uncagetorized term wp automatically creates so it gets ignored in the results
            */
            'exclude' => [1] 
        ],
        'read' => [
            "items:<=" => [ "ID" ]
        ]
    ]; 

    function provider_test_valid_query(){
        return [
            'as-admin-array' => [
                'role' => "administrator",
                'canRead' => true,
                'getModel' => 'modelUsingArray',
                'getTestItems' => 'getTestItems'
            ],
            'as-admin-object' =>[
                'role' => "administrator",
                'canRead' => true,
                'getModel' => 'modelUsingObject',
                'getTestItems' => 'getTestItems'
            ],
            'as-admin-crud-resource' =>[
                'role' => "administrator",
                'canRead' => true,
                'getModel' => 'modelUsingCrudResource',
                'getTestItems' => 'getTestItems'
            ],
        ];
    }

    function modelUsingArray(){
        return \pockets::crud('terms')::init( $this->request['init'] )->read( $this->request['read'] ); 
    }   

    function modelUsingObject()  {
        return \pockets::crud('terms')::init( new \Wp_Term_Query( $this->request['init'] ) )->read( $this->request['read'] ); 
    }

    function modelUsingCrudResource() : array {
        return \pockets::crud('crud-resource')::init( new \Wp_Term_Query( $this->request['init'] ) )->read( $this->request['read'] ); 
    }

    function getTestItems() : array {
        
        return array_map( function() {
            $ID = $this->factory->term->create( [ 
                'taxonomy' => 'category', 
                'term_name' => 'test-term', 
            ] );
            return [ "ID" => $ID ];
        }, array_fill(0, $this->dummy_item_count, null) );

    }

}
