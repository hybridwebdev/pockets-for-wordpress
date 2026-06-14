<?php  
namespace pockets\crud\end_point;

class module extends \pockets\base {

    use \pockets\traits\init; 

    function __construct() {
        add_action( 'rest_api_init', [ $this, 'register' ] ) ;
        add_filter( 'pockets/vue/app.js/data', [ $this, 'extend_data' ], 9999999, 1 );
    }

    static function is_endpoint_url( string $url ) : bool {
        
        if ( empty( $url ) ) {
            return false;
        }

        return strpos(
            needle: $url,
            haystack: static::url()
        ) !==false ;

    }

    static function url( bool $apply_prefix = true ){
        
        $url = get_site_url();
        
        return sprintf(
            "%s/wp-json/pockets/crud",
            $apply_prefix ? $url : ""
        );

    }

    function extend_data($data){
        $data['crud'] = [
            /**
                This is used in the axios connection to call back to the endpoint.
                Nonce is passed in the headers, allowing things like user role checks to work.
            */
            'nonce' => wp_create_nonce( "wp_rest" ),
            'url' => static::url(),
            'cache' => apply_filters('pockets/crud/cache', [] )
        ];
        return $data;
    }
  
    function register(){
        register_rest_route( "pockets", "/crud", [ 
            'methods'   => 'POST',
            'permission_callback' => fn() => true,
            'callback'  => function(  \WP_REST_Request $request) {

                $request = apply_filters('pockets/crud/rest-middleware', $request);

                $crudResponse =  array_map(
                    callback: fn( ...$args) => $this->crud( ...$args ), 
                    array: $request->get_params() 
                );

                return new \WP_REST_Response(
                    apply_filters( "pockets/crud/rest-response", $crudResponse ),
                    200 
                );

            }
        ] ) ;
    }

    function crud($args){
        list(
            'model'    => $model,
            'action'   => $action,
            'init' => $init,
            'input'   => $input,
            'output' => $output,
        ) = wp_parse_args($args, [
            'model'    => false,
            'action'   => false,
            'init' => false,
            'input'   => false,
            'output'   => false,
        ] );
        
        $object = \pockets::crud($model)::init($init);
        $fn = [$object, $action];
        if(is_callable($fn)) {
            return call_user_func($fn, $input, $output );
        }
        return \pockets::error("Crud Model not found in crud connection");

    }
    
}
