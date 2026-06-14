<?php
namespace pockets\crud\reducers;
use \pockets\crud\reducer;
class recursive_reducer extends \pockets\crud\reducer {

    /**
        Can be returned in the middleware function to shortcircuit 
        the reducer and force no return value.
    */
    //public $skip = "____SKIP____";
    public static $skip = "____SKIP____";

    private function __construct( 
        public $array, 
        public $model, 
        public array $nestedPath = [],
    ){}

    public function validator(){
        return $this->filtered_value !== static::$skip;
    }

    static function walk(array $array, callable $callback, array $nestedPath = [] ){
        $walker = new static( $array, $callback, $nestedPath );
        return $walker->iterate();
    }

    function reducer( $acc, $index ) {

        $this->reducerInit( $index );
        
        $this->currentPath = array_merge( $this->nestedPath, [ $this->key ] );
        
        $this->currentDotPath = join(
            separator: '.',
            array: $this->currentPath
        );

        $this->filtered_value = $this->middleware();
        
        if( $this->validator() === false ) {
            return $acc;
        }

        if( is_array( $this->filtered_value ) ) {
            
            $this->filtered_value = static::walk( 
                $this->filtered_value, 
                $this->model, 
                $this->currentPath
            );

        }

        /*
            For cases where:Your return value is an array but:
            - You don't want it recursively walked
            - Or you want to run manual logic with the array contents
        */
        if( $this->filtered_value instanceof \Closure ) {
            $this->filtered_value = call_user_func( $this->filtered_value, $this );
        }

        if( $this->filtered_value === static::$skip ){
            return $acc;
        }
        /**
        * This is handling returning the value. 
        * In the case of the alias being a <= the value is pushed back down a level in the array.
        */                
        if( $this->alias == "<=" ) {
            return array_merge( $acc, $this->filtered_value );
        }

        $acc[ $this->alias ] = $this->filtered_value;
        
        return $acc;

    }
 
    function middleware() {
        return call_user_func( $this->model, $this->value, $this );
    }

}