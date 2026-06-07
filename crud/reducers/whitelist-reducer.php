<?php
namespace pockets\crud\reducers;
class whitelist_reducer extends \pockets\crud\reducer {

    private function __construct( 
        public $array, 
        public $model, 
        public $whitelist 
    ){}

    public function validator(){
        return in_array($this->key, $this->whitelist);
    }

    static function walk(array $array, callable $callback, array $whitelist ){
        $walker = new static( $array, $callback, $whitelist );
        return $walker->iterate();
    }

    function middleware() {
        return call_user_func( $this->model, $this->value, $this);
    }

}