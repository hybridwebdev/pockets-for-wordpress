<?php 
namespace pockets\queried_object {

    class module {
    
        use \pockets\traits\initOnce;

        function __construct(){
            
            context::init();

        }
 
    }

};

/**
    Inject queried_object into pockets top level namespace
    so it can be used via \pockets\queried_object::method_name()
*/
namespace pockets {

    /**
        Used as a holder for a copy of wp's get_queried_obect().
    */
    class queried_object {

        private static $stash = null;
        private static $queried_object = null;

        static function set( $queried_object ){
            static::$queried_object = $queried_object;
        }
        
        static function get(){
            return static::$queried_object;
        }

        /**
            Stash the current queried object for later restoration.
            Should be used before temporarily setting a new object.
        */
        static function stash() {
            static::$stash = static::$queried_object;
        }

        /**
            revert the queried object back to the stashed value.
        */
        static function revert() {
            static::$queried_object = static::$stash;
            static::$stash = null;
        }

    }

}