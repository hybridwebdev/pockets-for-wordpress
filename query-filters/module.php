<?php
namespace pockets\query_filters;
    
/**
    This module creates an API for adding selectable filter hooks
    for things like post queries. You can register a filter which
    can be shown in a UX like an option list allowin users to select filters they want
    applied

    The selected hooks are then applied in the relevant place, such as pre_get_posts
*/
class module {

    use \pockets\traits\init;

    function __construct(){
        
        pre_get_posts\module::init();
        pre_get_terms\module::init();

    }

}

