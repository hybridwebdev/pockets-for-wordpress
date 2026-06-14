<?php 
namespace pockets\crud\reducers\tests;

/**
 * @group pockets_reducers
 */
class options_reducer extends \WP_UnitTestCase {

    public $option_key = "test-option-key";
    public $meta_object_type = "meta_object_type";
    public $meta_object_subtype = "sub-type-key";

    function getMocks(){
        return [
            'update' => [
                'foo' => 'bar'
            ],
            'read' => [
                'foo'
            ]
        ];
    }

    /**
        intentionally fails auth_callback so update doesn't occur, 
        and then validates against default value.
    */
    function test_default_and_auth(){

        $mocks = $this->getMocks();

        $default_value = 'foo-default';

        register_meta('meta_object_type', 'foo', [
            'default' => $default_value,
            'auth_callback' => fn() => false
        ] );

        $api = \pockets\crud\reducers\options_reducer::init( 
            option_key: $this->option_key,
            meta_object_type: $this->meta_object_type,
        );

        $api->update( $mocks['update'] ) ;

        $read = $api->read( $mocks['read'] );

        $this->assertEquals( $read, [
            'foo' => $default_value
        ] ); 

    }

    function test_sanitizor(){

        $mocks = $this->getMocks();

        $sanitized_text = 'sanitizor result';

        register_meta('meta_object_type', 'foo', [
            'sanitize_callback' => fn($value) => str_replace( 'bar', $sanitized_text, $value)
        ] );

        $api = \pockets\crud\reducers\options_reducer::init( 
            option_key: $this->option_key,
            meta_object_type: $this->meta_object_type,
        );

        $api->update( $mocks['update'] ) ;

        $read = $api->read( $mocks['read'] );

        $this->assertEquals( $read, [
            'foo' => $sanitized_text
        ] ); 

    }

    function test_subkey(){
        
        $mocks = $this->getMocks();

        register_meta('meta_object_type', 'foo', [
            'object_subtype' => $this->meta_object_subtype,
        ]);

        $api = \pockets\crud\reducers\options_reducer::init( 
            option_key: $this->option_key,
            meta_object_type: $this->meta_object_type,
            meta_object_subtype: $this->meta_object_subtype
        );

        $api->update( $mocks['update'] ) ;

        $read = $api->read( $mocks['read'] );

        $this->assertEquals( $read, $mocks['update'] ); 

    }

    function test_update_successfully(){
        
        $mocks = $this->getMocks();

        register_meta('meta_object_type', 'foo', []);

        $api = \pockets\crud\reducers\options_reducer::init( 
            option_key: $this->option_key,
            meta_object_type: $this->meta_object_type,
        );

        $api->update( $mocks['update'] ) ;

        $read = $api->read( $mocks['read'] );

        $this->assertEquals( $read, $mocks['update'] ); 

    }

    function test_schema(){
        
        register_meta( $this->meta_object_type, 'test-meta', [
            'description' => [
                'schema' => [
                    'read'  => [
                        'type' => 'boolean'
                    ]
                ]
            ]
        ]);

        $schema = \pockets\crud\reducers\options_reducer::init( 
            option_key: $this->option_key,
            meta_object_type: $this->meta_object_type,
        )->getSchema(action: 'read' );
        
        $mock = [  
            'test-meta' => [
                'type' => 'boolean'
            ]
        ];

        $this->assertEquals( $schema['crudFields']['patternProperties'], $mock );

    }

}
