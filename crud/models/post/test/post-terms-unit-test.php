<?php 
namespace pockets\crud\models\post\test;
class post_terms_unit_test extends \WP_UnitTestCase  {
    
    use \pockets\tests\helpers\set_user;

    function setup() : void {
        parent::setup();
        $this->postID = $this->factory->post->create();
        $this->set_user('editor');
    }
       
    /**
        validates reading terms
    */
    function test_read_terms(){

        $IDS = [ 
            $this->factory->term->create( [ 'taxonomy' => 'category' ] )
        ];

        wp_set_post_terms( $this->postID, $IDS, 'category');

        $read = \pockets::crud('post')::init($this->postID)->read( [
            'terms:<=' => [
                'taxonomy' => 'category',
                'items' => [
                    'name',
                ],
                'IDS'
            ]
        ] );

        $this->assertCount( count( $read['IDS'] ), $IDS );
        $this->assertCount( count($IDS), $read['items'] );

    }
    
    /**
        validates setting terms using an array of IDS
    */
    function test_update_terms_by_IDS(){

        $IDS = [ 
            $this->factory->term->create( [ 'taxonomy' => 'category' ] )
        ];

        $updated = \pockets::crud('post')::init( $this->postID )->update( [
            'terms' => [
                'taxonomy' => 'category',
                'terms' => $IDS,
            ]
        ], true );

        $this->assertTrue( $updated['terms']['updated'] );
        $this->assertNotWPError( $updated['terms'] );

    }

    /**
        validates that trying to set with an invalid taxonomy fails
    */
    function test_with_invalid_taxonomy(){

        /**
            Test using invalid taxonomy name
        */
        $update = \pockets::crud('post')::init( $this->postID )->update( [
            'terms' => [
                'taxonomy' => 'idontexist',
                'terms' => [ 1 ], // 1 is uncategorized
            ]
        ], true );

        $this->assertWPError( $update['terms'] );

    }

    /**
        validates that setting terms to an empty array sets them to none.
     */
    function test_set_terms_to_none(){

        /**
            first set terms.
        */

        $IDS = [
            $this->factory->term->create( [ 'taxonomy' => 'category' ] ),
            $this->factory->term->create( [ 'taxonomy' => 'category' ] )
        ];
        
        wp_set_post_terms( $this->postID, $IDS, 'category' );

        $read = [
            'terms:<=' => [
                'taxonomy' => 'category',
                'IDS:<='
            ]
        ];

        $updated = \pockets::crud('post')::init( $this->postID )->update( [
            'terms' => [
                'taxonomy' => 'category',
                'terms' => [],
            ]
        ], $read );
        /**
            Wordpress enforces that posts are given an ancategorized term with an ID of 1 when none are set on 
            the category taxonomy. 
        */
        $this->assertEquals($updated, [ 1 ] );

    }

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

        $post = $this->factory->post->create([
            'title' => "Hello word"
        ]);
        
        wp_set_post_terms($post, [ $term_1, $term_2, $term_3 ], 'category' );

        $res = \pockets::crud('post')::init($post)->read( [
            'terms' => [
                'taxonomy' => 'category',
                'items:<=' => [
                    'ID',
                    'terms' => [
                        'items:<=' => [
                            "ID",
                            'terms' => [
                                'items:<=' => [
                                    "ID",
                                ]
                            ]
                        ]
                    ]
                ]
            ]
        ] );

        $this->assertEquals($res, [
            'terms' => [
                [
                    'ID' => $term_1,
                    'terms' => [
                        [
                            'ID' => $term_2,
                            'terms' => [
                                [
                                    'ID' => $term_3
                                ]
                            ]
                        ]
                    ]
                ]
            ]
        ]);

    }

}
 