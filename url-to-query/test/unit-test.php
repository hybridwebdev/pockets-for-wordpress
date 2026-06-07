<?php 
namespace pockets\url_to_query\test;

/**
* @group url-to-query
*/

class example_model extends \WP_UnitTestCase {

    use test_pages;
    use test_cpt;
    use test_taxonomy;

    function setup() : void {
        global $wp_rewrite;
        $wp_rewrite->set_permalink_structure('/%postname%/');
        parent::setup();
    }

    function flush(){
        global $wp_rewrite;
        $wp_rewrite->flush_rules();
    }

}
