<?php 
namespace pockets\utils\data_schema;
use pockets\crud\reducers\recursive_reducer;

class recursive_reducer_without_aliasing extends recursive_reducer {
     
    function reducerInit( $index ) {

        $this->index = $index;

        /**
        * Figuring out how to interpret the map.  
        */
        $this->invert = false;

        $this->map_key = $this->invert ? $this->array[ $this->index ] : $this->index;
        $this->value = $this->invert ? null : $this->array[ $this->map_key ];

        if( is_int( $this->index ) && is_array( $this->array[ $this->index ] ) ) {
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

}
