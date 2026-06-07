<?php 
namespace pockets\crud\models\crud_resource\tests;

use \pockets\tests\crud\test_model;

abstract class test_crud_resource extends test_model {
    
    public function provider_role_tests (){
        return [
            'as-administrator' => [
                'role' => 'administrator',
                'canRead' => true,
                'canDelete' => true,
                'canCreate' => true,
                'canUpdate' => true
            ],
        ];
    }
    
    function getModels(){

        $test_as_crud_resource = \pockets::crud('crud-resource')::init( $this->getTestResource() )->read( [ 'crud_resource:<=' ] );

        return [

            \pockets::crud('crud-resource')::init( $test_as_crud_resource  ),
            \pockets::crud('crud-resource')::init( $this->getTestResource() ),
            /**
                Testing underlying crud model directly
            */
            \pockets::crud('crud-resource')::init( $this->getTestResource() )->resource

        ];
    }

}

class test_term_as_crud_resource extends test_crud_resource {

    function getMock(){
        return $this->mocks->term();
    }
    
    function getTestResource(){
        return get_term( $this->factory->term->create( [ 'taxonomy' => "category" ] ) );
    }

}

class test_post_as_crud_resource extends test_crud_resource {

    function getMock(){
        return $this->mocks->post();
    }
    
    function getTestResource(){
        return get_post( $this->factory->post->create() );
    }

}
 