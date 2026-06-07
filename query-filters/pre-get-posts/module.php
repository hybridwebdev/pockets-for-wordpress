<?php
namespace pockets\query_filters\pre_get_posts;
    
class module {

    use \pockets\traits\initOnce;

    function __construct(){
        filters::init();
        hook::init();
    }

}

