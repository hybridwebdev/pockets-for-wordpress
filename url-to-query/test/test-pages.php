<?php 
namespace pockets\url_to_query\test;

trait test_pages {

    function test_front_page_using_posts(){
        
        $resolver = \pockets\url_to_query\api::init();
        $this->assertInstanceOf( 'WP_Query', $resolver->resolve('/')->getWPQuery() );

    }

    function test_front_page_using_single_post(){

        $frontPageID = $this->factory->post->create( [ 'post_type' => 'page', 'post_title' => "home-page" ] );

        update_option('show_on_front', 'page');
        update_option('page_on_front', $frontPageID);
        
        $resolver = \pockets\url_to_query\api::init();

        $this->assertInstanceOf( 'WP_Post', $resolver->resolve('/')->getQueriedObject() );

    }

    function test_pages(){
        
        $ID = $this->factory->post->create( [ 
            'post_type' => 'page', 
            'post_title' => "parent-page" 
        ] );
        
        $childID = $this->factory->post->create( [
            'post_type' => 'page', 
            'post_title' => "child-page", 
            'post_parent' => $ID 
        ] );

        $childsChildID = $this->factory->post->create( [
            'post_type' => 'page', 
            'post_title' => "childs-child-page", 
            'post_parent' => $childID 
        ] );

        $resolver = \pockets\url_to_query\api::init();

        $this->assertInstanceOf( 'WP_Post', $resolver->resolve('/parent-page')->getQueriedObject());
        $this->assertInstanceOf( 'WP_Post', $resolver->resolve('/parent-page/child-page')->getQueriedObject());
        $this->assertInstanceOf( 'WP_Post', $resolver->resolve('/parent-page/child-page/childs-child-page')->getQueriedObject());

    }

    function test_invalid_pages(){

        $resolver = \pockets\url_to_query\api::init();

        $this->assertNotInstanceOf( 'WP_Post', $resolver->resolve('/invalid-page')->getQueriedObject() );
        $this->assertEquals( null, $resolver->resolve('/invalid-page')->getQueriedObject() );

    }

}
