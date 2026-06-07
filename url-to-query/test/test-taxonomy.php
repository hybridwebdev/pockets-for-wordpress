<?php 
namespace pockets\url_to_query\test;

trait test_taxonomy {

    function test_taxonomy(){

        new \pockets\utils\register_taxonomy(
               'test-taxonomy', 
               'post', 
               'test-taxonomy', 
               "Test taxonomy", 
               [
                    'rewrite' => [
                        'hierarchical' => true,
                        'with_front' => true,
                        'slug' => "test-taxonomy"
                    ]
               ]
        );

        $this->flush();
        
        $resolver = \pockets\url_to_query\api::init();

        $ID = $this->factory->term->create( [ 
            'taxonomy' => "test-taxonomy", 
            'name' => 'parent-term' 
        ] );

        $childID = $this->factory->term->create( [ 
            'taxonomy' => "test-taxonomy", 
            'name' => 'child-term', 
            'parent' => $ID 
        ] );
        
        $childsChildID = $this->factory->term->create( [ 
            'taxonomy' => "test-taxonomy", 
            'name' => 'child-child-term', 
            'parent' => $childID
        ] );

        $this->assertInstanceOf( 'WP_Term', $resolver->resolve('/test-taxonomy/parent-term/')->getQueriedObject() );
        $this->assertInstanceOf( 'WP_Term', $resolver->resolve('/test-taxonomy/parent-term/child-term')->getQueriedObject() );
        $this->assertInstanceOf( 'WP_Term', $resolver->resolve('/test-taxonomy/parent-term/child-term/child-child-term')->getQueriedObject() );
        
    }
    
}
