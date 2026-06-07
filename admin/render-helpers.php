<?php
namespace pockets\admin;

class render_helpers {

    use \pockets\traits\init;
    
    static function valueProp( mixed $value, mixed $fallback = '' ){
        return sprintf("value='%s'", $value ?? $fallback );
    }

    static function checkedProp( mixed $left, mixed $right ){
        return $left === $right ? "checked"  : "";
    }

}