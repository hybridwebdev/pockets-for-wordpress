<?php 

namespace pockets\crud\models\post\test;

use \pockets\tests\crud\test_model;

class test_public_post extends test_model {

    function getMock(){
        return $this->mocks->post();
    }

    function getModels(){
        return [
            \pockets::crud('post')::init( [ 'ID' => $this->factory->post->create() ] ),
            /**
                Test using integer
            */
            \pockets::crud('post')::init( $this->factory->post->create() ),
        ];
    }
};

class test_private_post extends test_model {

    function getMock(){
        $mock = $this->mocks->post();
        /**
            the post mock sets status to publish for testing updates. Overriding that.
        */
        $mock['write']['status'] = 'private';
        return $mock;
    }

    function getModels(){

        return [
            \pockets::crud('post')::init( $this->factory->post->create(['post_status' => 'private']) ),
        ];
        
    }

    public function provider_role_tests (){
        return [
            'as-visitor' => [
                'role' => null,
                'canRead' => false,
                'canDelete' => false,
                'canCreate' => false,
                'canUpdate' => false
            ],
        ];
    }

}
