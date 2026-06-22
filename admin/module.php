<?php
namespace pockets\admin;
    
class module {
    
    use \pockets\traits\initOnce;

    function __construct(){
        
        menu::init();
        admin_bar::init();
        modify_wp_admin_bar::init();
        
    }

}