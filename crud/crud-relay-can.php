<?php
namespace pockets\crud; 

/**
    WARNING!
    WARNING!
    WARNING!
    
    This should be used with UTMOST care and concern for security!!!
    Ideally this should only ever be used for read operations!!! 
        - If you are exposing data, you should be cautious of what you expose.
        - If parts of your models data shouldn't be exposed, you can always
        use \pockets::crud_relay_can::check() within your read methods as an extra layer.

    If you do use this, make sure the data you are exposing is safe!!!

    Can be used by crud models as middleware to bypass permission checks.

    If you use this, please remember to call the returned revoke method when your 
    operation has concluded.

*/

class crud_relay_can {

    private static $role = 'pockets-crud-relay';

    final static function check( string $action, string $model ){
        return current_user_can( sprintf( '%s-%s-%s', static::$role, $action, $model ) );
    }
    
    /**
        Adds permission role for a specific action for a specific model.
        Returns function that should be called when action is done, to revoke 
        the permission granted.
    */
    final static function grant( string $action, string $model ){
         
        $cb = fn( $allcaps ) => array_merge( $allcaps, [
            sprintf( '%s-%s-%s', static::$role, $action, $model ) => true
        ] );
        
        add_filter('user_has_cap', $cb );

        return fn() => remove_filter('user_has_cap', $cb );

    }

}