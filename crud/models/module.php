<?php
namespace pockets\crud\models;
class module {

    use \pockets\traits\init;

    function __construct(){
                
        crud_models\model::register();

        
        /**
            Images
        */

        images\model::register();
        image\model::register();

        image_placeholder\model::register();

        /**
            Posts 
        */

        post\model::register();
        posts\model::register();
        post_type\model::register();
        
        /**
            Terms
        */
        taxonomy\model::register();
        term\model::register();
        terms\model::register();

        /**
            Misc
        */

        crud_resource\model::register();
        
        wp\model::register();
        wp_user\model::register();
        wp_options\model::register();

        _404\model::register();

        /**
            Register object maps
        */
        crud_resource\get
            ::addObjectMap('wp_post', [
                'model' => 'post'
            ] )
            ::addObjectMap('wp_post_type', [ 
                "model" => 'post-type'
            ] )
            ::addObjectMap('wp_query', [ 
                "model" => 'posts'
            ] )
            ::addObjectMap('wp_term', [ 
                "model" => 'term'
            ] )
            ::addObjectMap('wp_term_query', [ 
                "model" => 'terms'
            ] )
            ::addObjectMap('wp_taxonomy', [ 
                "model" => 'taxonomy'
            ] ) ;

    }

}
 