<?php 
namespace pockets\crud\models\wp\tests;
use pockets\tests\helpers\set_user;

trait test_post_types {
    
    /**
        @dataProvider provider_test_permissions
    */
    function test_post_types( $role, $canRead ){
        
        $this->set_user($role);

        $mock = [
            'names:<=',
            'operator' => "or",
            'public' => true
        ];

        $read = self::model()->read( [
            'post_types:<=' => $mock
        ] );

        $expect = array_values( get_post_types( $mock, 'names', $mock['operator'] ?? 'or' ) );

        $this->assertEquals( $read, $expect );
        
    }

}

trait test_post_mime_types {
    
    /**
        @dataProvider provider_test_permissions
    */
    function test_post_mime_types( $role, $canRead ){
        
        $this->set_user($role);

        $mock = [
            'names:<=',
            'type' => "attachment"
        ];

        $read = self::model()->read( [
            'post_mime_types:<=' => $mock
        ] );

        $expect = get_available_post_mime_types( $mock['type'] );

        $this->assertEquals( $read, $expect );
        
    }

}

trait test_post_statuses {
    
    /**
        @dataProvider provider_test_permissions
    */
    function test_post_statuses( $role, $canRead ){
        
        $this->set_user($role);

        $read = self::model()->read( [
            'post_statuses:<=' => [
                'names:<='
            ]
        ] );

        $expect = array_keys(get_post_statuses());

        $this->assertEquals( $read, $expect );
        
    }

}

trait test_image_sizes {

    /**
        @dataProvider provider_test_permissions
    */
    function test_image_sizes( $role, $canRead ){
        
        $this->set_user($role);

        $read = self::model()->read( [
            'image_sizes:<=' => [
                'names:<='
            ]
        ] );

        $expect = get_intermediate_image_sizes();

        $this->assertEquals( $read, $expect );
        
    }

}

trait test_taxonomies {
    
    /**
        @dataProvider provider_test_permissions
    */
    function test_taxonomies( $role, $canRead ){
        
        $this->set_user($role);

        $mock = [
            'names:<=',
            'operator' => "OR",
            'public' => true
        ];

        $read = self::model()->read( [
            'taxonomies:<=' => $mock,
        ] );

        $expect = array_values( 
            get_taxonomies( $mock, 'names', $mock['operator'] ) 
        );

        $this->assertEquals( $read, $expect );
        
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
        return  \pockets::crud("wp")::init(null);
    }
    
}

class wp_model_read_test extends \WP_UnitTestCase {
    
    use test_base;
    
    use test_image_sizes, 
        test_taxonomies, 
        test_post_statuses, 
        test_post_mime_types,
        test_post_types
    ;

}