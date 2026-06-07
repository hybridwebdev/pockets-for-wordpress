<?php
namespace pockets\plugin\api {
    
    /**
        Dummy module so it can be called via api\module::init()
    */
    class module {

        use \pockets\traits\initOnce;

        function __construct(){}

    }

}
namespace {
	
	/**
		pockets is a global class with static methods that provide a variety of tools. 
	*/
	class pockets extends \pockets\base {
		use \pockets\traits\init;
        use \pockets\plugin\api\template;
        const filters = 'pockets\plugin\api\filters\module';
        const crud_relay_can = '\pockets\crud\crud_relay_can';

        /**
            Calls the relevant crud model using name provided.
        */
        static function crud(string $model_name){
            return \pockets\crud\model::get($model_name);
        }

        /**
            Used to add data to the vuejs-app/data filter which passees
            data to javascript via wp_localize_script 
        */
        static function inject_data( string $key, mixed $data ) {
            add_filter( "vuejs-app/data", fn( array $filtered ) : array => $filtered + [ $key => $data ] ); 
        }

        /**
            Utility to generate instances of WP_Error.
            @class-document-link WP_Error
        */
        static function error( string $message, mixed $data = null) : \WP_Error {
            $error = new \WP_Error;
            $error->add('message', $message, $data);
            return $error;
        }

        static function pluginInstalled( string $plugin_name ){
            return match( $plugin_name ) {
                'acf' => class_exists('acf') ? true : \pockets::error("Acf is not installed or is not active."),
                default => false
            };
        }

        static function dump(mixed $data) {
            // phpcs:ignore WordPress.PHP.DevelopmentFunctions
            var_dump("<pre>", $data, "</pre>");
        }

        static function is_rest_request(){
            return defined('REST_REQUEST') && REST_REQUEST;
        }

        /**
            WARNING!
            WARNING!
            WARNING!
            - This function is dangerous. 
            - It is only available server side.
            - It is an escape hatch. 
            - Its sole use should be for when things like crud models
              need to bypass permission checks. 
            
            Returns a method that should be called after you do what needs
            to be done. 
        */
        static function forcePermission() : callable {
            
            $capCheck = function( $allcaps ){
                $allcaps['crud-relay'] = true;
                return $allcaps;
            };
            
            $loggedInCheck = fn() => true;

            add_filter( 'user_has_cap', $capCheck );
            add_filter( 'is_user_logged_in', $loggedInCheck );

            return function() use( $capCheck, $loggedInCheck ) {
                remove_filter( 'user_has_cap', $capCheck );
                remove_filter( 'is_user_logged_in', $loggedInCheck );
            };

        }

        static function current_url(){
            
            global $wp;
            
            $wp->parse_request();
            $current_url = home_url($wp->request);

            return $current_url;

        }

        /**
            Provides a safe way to inject json into an element attribute
        */
        static function json_attr( array $data ){
            return esc_attr( wp_json_encode( $data ) );
        }

        static function isFullVersion(){
            return class_exists('\pockets\plugin\api\full_version');
        }

	}
    
}
