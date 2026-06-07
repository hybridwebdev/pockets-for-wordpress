<?php 
namespace pockets\url_to_query\test;

trait test_cpt {
    
    function test_custom_post_types(){

        new \pockets\utils\register_cpt('test-cpt', 'Test CPT', [
            'has_archive' => true,
            'public' => true,
            'publicly_queryable' => true
        ] );

        $this->flush();

        $ID = $this->factory->post->create( [
            'post_type' => 'test-cpt', 
            'post_title' => "parent-post", 
        ] );

        $this->factory->post->create( [
            'post_type' => 'test-cpt', 
            'post_title' => "child-post", 
            'post_parent' => $ID
        ] );

        $resolver = \pockets\url_to_query\api::init();

        $this->assertInstanceOf( 'WP_Post_Type', $resolver->resolve('/test-cpt/')->getQueriedObject() );

        $this->assertInstanceOf( 'WP_Post', $resolver->resolve('/test-cpt/parent-post')->getQueriedObject() );
        
        $this->assertInstanceOf( 'WP_Post', $resolver->resolve('/test-cpt/parent-post/child-post')->getQueriedObject() );

    }

}
