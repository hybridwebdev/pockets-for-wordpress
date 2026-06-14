<?php 
namespace pockets\crud\models\crud_models\tests;
use pockets\tests\helpers\set_user;

trait test_read {
    
    /**
        @dataProvider provider_test_permissions
    */
    function test_read( $role, $canRead ){
        
        $this->set_user($role);

        $mock = [
            'documents',
            'schemas',
            'names'
        ];

        $read = self::model()->read( $mock );

        $this->assertIsArray( $read['documents'] );
        $this->assertIsArray( $read['schemas'] );
        $this->assertIsArray( $read['names'] );
        
    }

}

trait test_base {
    use set_user;
    
    function provider_test_permissions(){
        return [
            'as-visitor' => [
                'role' => null,
                'canRead' => true
            ],
            'as-administrator' => [
                'role' => 'administrator',
                'canRead' => true
            ],
        ];
    }

    static function model(){
        return  \pockets::crud("crud-models")::init(null);
    }
    
}

class crud_models_unit_test extends \WP_UnitTestCase {
    
    use test_base;
    
    use test_read;

}