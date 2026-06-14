<?php 
namespace pockets\utils\data_schema\test;
/**
    @group data_schema
*/
class validation_unit_test extends \WP_UnitTestCase {
   
    function setRules(){
        
        add_filter( 'test-schema', function( $schema ){

            $schema
                
                ->rules

                    ->sanitize( 'name', 'sanitize_text_field' )
                    ->sanitize( 'nested.value', "sanitize_text_field" )
                    ->sanitize( 'email', 'sanitize_text_field' )
                    ->sanitize( 'email', 'sanitize_email' )
                    ->sanitize( 'unfiltered', fn( $value ) => $value )
                    
                    ->add('test')
                    ->add('nested.derp')
                    
                    ->validate( 'email-confirm', 'matches', [ 'path' => 'email' ] )
                    ->validate( 'email', 'matches', [ 'path' => 'email-confirm' ] )
                    
            ;

        } );
        
    }

    function test_validation_fails(){

        $data = [
            'email' => "testa",
            'confirm' => [
                'email' => "testb"
            ]
        ];

        $schema = \pockets\utils\data_schema\api::init( 
            data: $data,
            rules: [],
            filterKey: "test-schema",
        );

        $schema
            ->rules
                ->validate( 'confirm.email', 'matches', [ 
                    'path' => 'email', 
                    'error-message' => "Emails must match" 
                ] )
                ->validate( 'email', 'matches', [ 
                    'path' => 'confirm.email' ,
                ] )
        ;


        $schema->apply();

        $this->assertEquals( $schema->isValid(), false );
        
        $this->assertEquals( $schema->data, $data );

    }
    
    function test_sanitize(){
        
        $this->setRules();

        $data = [
            'name' => 'Johnny Doe<script>',
            'unfiltered' => "unfiltered value<script>",
            'email' => "test@email.com abc <script>",
            'email-confirm' => "test@email.comabc",
            'test' => "Hello world",
            'nested' => [
                'value' => "foo<script>alert()</script>",
                'other-value' => "Will be removed",
                'derp' => "derp"
            ],
            'should-be-removed',
            'should-also-be-removed' => [
                'bye' => [
                    'gone'
                ]
            ],
        ];

        $expect = [
            'name' => 'Johnny Doe',
            'unfiltered' => $data['unfiltered'],
            'email-confirm' => "test@email.comabc", 
            'email' => "test@email.comabc",
            'test' => $data['test'],
            'nested' => [
                'value' => "foo",
                'derp' => "derp",
            ]
        ];

        $schema = \pockets\utils\data_schema\api::init( 
            data: $data,
            rules: [],
            filterKey: "test-schema",
        );
        
        $schema->apply();

        $this->assertEquals( $schema->data, $expect );
        
    }
    
    function test_wildcards(){
        
        $data = [
            'hello' => [
                'world' => "abc<script>this is removed</script>123",
                'nested' => [
                    'test' => "one",
                    "foo" => "<div>foo</div><script></script>"
                ]
            ],
        ];

        $expect = [
            'hello' => [
                'world' => 'abc123',
                'nested' => [
                    'test' => "one",
                    "foo" => "<div>foo</div>"
                ]
            ]
        ];

        $schema = \pockets\utils\data_schema\api::init( 
            data: $data,
            rules: [],
            filterKey: "test-schema",
        );
         
        $schema->rules
            ->path( 'hello.*', [ 'nested' ] )
                ->sanitize( 'sanitize_text_field' )
            ->path( 'hello.nested.*', [ 'foo' ] )
                ->sanitize( 'sanitize_text_field' )
            ->path( 'hello.nested.foo')
                ->sanitize( 'wp_kses', ['allowed_html' => [ 'div' => [] ] ] )
        ;

        $schema->sanitize();

        $this->assertEquals( $schema->data, $expect );

    }

}