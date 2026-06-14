<?php
namespace pockets\crud;
class module {
    
    use \pockets\traits\init;

    function __construct(){

        end_point\module::init();
        models\module::init();

    }

}
