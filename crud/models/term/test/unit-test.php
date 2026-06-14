<?php 
namespace pockets\crud\models\term\test;
use \pockets\tests\crud\test_model;

class term extends test_model {
        
    function getModels(){

        $check_for_term_by = \pockets::crud('term')
            ::init(  $this->factory->term->create( [ 'taxonomy' => "category", 'slug' => 'check-for-term-by' ] ) )
            ->read( [ 'slug', 'taxonomy' ] );

        return [
            /**
                By [ ID => "$ID" ]
            */
            \pockets::crud('term')::init([ 'ID' => $this->factory->term->create( [ 'taxonomy' => "category" ] ) ]),
            /**
                By integer
            */
            \pockets::crud('term')::init( $this->factory->term->create( [ 'taxonomy' => "category" ] ) ),

            /**
                By slug
            */
            \pockets::crud('term')::init( ['by' => 'slug'] + $check_for_term_by ),
        ];
    }
    
    function getMock(){
        return $this->mocks->term();
    }

}

class test_invalid_term_data extends \WP_UnitTestCase  {

    use \pockets\tests\helpers\set_user;

    function test_valid_and_invalid_term_data() {

        $this->set_user("administrator");

        $term_1 = $this->factory->term->create( [ 
            'taxonomy' => 'category', 
            'name' => 'test-term-1', 
        ] );

        $term_2 = $this->factory->term->create( [ 
            'taxonomy' => 'category', 
            'name' => 'test-term-2', 
            'parent' => $term_1
        ] );

        $term_3 = $this->factory->term->create( [ 
            'taxonomy' => 'category', 
            'name' => 'test-term-3', 
        ] );

        $update = \pockets::crud('term')::init($term_2)->update( [
            
            'taxonomy:taxonomy-invalid' => "i-do-not-exist",
            'taxonomy:taxonomy-valid' => "category",

            'parent:parent-invalid' => -9001, // it's over -9000
            'parent:parent-unset' => 0,
            'parent:parent-valid' => $term_3

        ], true );

        $this->assertWpError( $update['taxonomy-invalid'] );
        $this->assertNotWpError( $update['taxonomy-valid'] );

        $this->assertWpError( $update['parent-invalid'] );
        $this->assertNotWpError( $update['parent-unset'] );
        $this->assertNotWpError( $update['parent-valid'] );

    }

}

class nested_terms extends \WP_UnitTestCase  {
    
    function test_read_nested_terms(){

        $term_1 = $this->factory->term->create( [ 
            'taxonomy' => 'category', 
            'name' => 'test-term-1', 
        ] );

        $term_2 = $this->factory->term->create( [ 
            'taxonomy' => 'category', 
            'name' => 'test-term-2', 
            'parent' => $term_1
        ] );

        $term_3 = $this->factory->term->create( [ 
            'taxonomy' => 'category', 
            'name' => 'test-term-3', 
            'parent' => $term_2
        ] );

        $res = \pockets::crud('term')::init($term_1)->read( [
            'ID',
            'terms' => [
                'items:<=' => [
                    'ID',
                    'terms' => [
                        'items:<=' => [
                            "ID",
                        ]
                    ]
                ]
            ]
        ] );

        $this->assertEquals($res, [
            'ID' => $term_1,
            'terms' => [
                [
                    'ID' => $term_2,
                    'terms' => [
                        [
                            'ID' => $term_3,
                        ]
                    ]
                ]
            ]
        ] );

    }

}