<?php 
namespace pockets\crud;
/**
    A reducer takes an array like so:
    [
        'some value',
        'some key' => mixed type eg string or [] etc
    ]
    If a value is key => pair, then it will walk that array, and run a 
    callback function on each entry.
*/ 
#[\AllowDynamicProperties]
class reducer {

    public string | int | null $key; // Current key iterator is on
    public mixed $value; // Current value iterator is on

    function __construct( public $array, public $model ){}

    function alias_key(String $key = ''){
        $arr = explode(":", $key);
        return $key == '' 
            ? false
            : [
                    'key'=> $arr[0],
                    'alias'=> isset( $arr[1] ) ? $arr[1] : $arr[0]
            ];  
    }

    /**
        Helper function that should be called from within reducer.
        Sets up data that is used for current reducer entry. 

    */
    function reducerInit( $index ) {

        $this->index = $index;

        /**
        * Figuring out how to interpret the map.  
        */
        $this->invert = is_numeric( $this->index );

        $this->map_key = $this->invert ? $this->array[ $this->index ] : $this->index;
        $this->value = $this->invert ? null : $this->array[ $this->map_key ];

        if( is_numeric( $this->index ) && is_array( $this->array[ $this->index ] ) ) {
            $this->key = $this->index;
            $this->alias = $this->index;
            $this->map_key = $this->index;
            $this->value = $this->array[$this->index];
            $this->invert = false;
            return;
        }

        list( 
            'key' => $this->key, 
            'alias' => $this->alias
        ) = $this->alias_key( $this->map_key );

    }

    function reducer( $acc, $index ) {

        $this->reducerInit( $index );
        
        if( $this->validator() === false ) return $acc;
        
        $this->filtered_value = $this->middleware();

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

    /**
        Iterate is a function that intercepts each iteration, applying a callback
        that recieves the current iterator
    */
    public function iterate(){
        return array_reduce( array_keys($this->array), [$this, 'reducer'], [] );
    }

    static function applyIterator(array $array, array | callable $callback){
        if( is_array($callback) ) {
            $walker = new arrayMiddleware( $array, $callback );
        }
        if( is_callable($callback) ) {
            $walker = new functionMiddleware( $array, $callback );
        }
        if($walker) return $walker->iterate();
    }     
    /**
        Validator is a function that intercepts each iteration, applying a callback
        that recieves the current iterator. If the function returns false the 
        current iteration will be skipped.
    */
    function validator(){}
    /**
        Middleware is a function that intercepts each iteration, applying a callback
        that recieves the current iterator. 
    */
    function middleware(){}
}

class functionMiddleware extends reducer {
   
    function middleware() {
        if( is_callable($this->model) ) {
            return call_user_func($this->model, $this->value, $this);
        }
    }

    /*
        Because this is handled via a callback, the callback is responsible for validating itself;
    */
    public function validator(){
        return true;
    }

}

class arrayMiddleware extends reducer {

    function middleware() {
        $fn = $this->model[$this->key] ?? false;
        if(!$fn || !is_callable($fn) ) return;
        return call_user_func($fn, $this->value, $this);
    }

    /**
        Validator is a function that intercepts each iteration, applying a callback
        that recieves the current iterator. If the function returns false the 
        current iteration will be skipped.
    */
    public function validator(){
        return in_array($this->key, array_keys($this->model) );
    }
    
}
