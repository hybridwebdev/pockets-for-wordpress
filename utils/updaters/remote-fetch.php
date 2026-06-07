<?php
namespace pockets\utils\updaters;

/**
    This class is used to call pockets update host from a remote server. 
    Can be used by both plugin and theme updaters.
*/
class remote_fetch {
    
    use \pockets\traits\init_new;

    /**
        Response from update host site.
        Stored in transient using $transientKey
    */
    private bool | array | \Wp_Error $response;
    
    function __construct( 
        
        /**
            See plugin-updater class for structure of options via getOptions() method 
        */
        public array $options,
        
        /**
            If true, will purge transient cache and force a remote fetch. 
        */
        public bool $purgeCache = false

    ) {
        
    }

    function getResponse(){
        
        if( ( $this->options['url'] ?? "" ) == "" ) {
            return \pockets::error("Must provide a url option");
        }

        if( ( $this->options['token'] ?? "" ) == "" ) {
            return \pockets::error( "Must provide a token option" );
        }

        $this->response = get_transient( $this->options['transientKey'] );

        if( $this->purgeCache === true || !$this->response || is_wp_error( $this->response ) ) {
            $this->response =  $this->check_for_update();
            set_transient( $this->options['transientKey'], $this->response, $this->options['expirationTime'] );
        }

        return $this->response;

    }

    private function check_for_update() : array | \Wp_Error {

        $curl = curl_init();

        $req = [
            CURLOPT_URL => sprintf("%s/wp-json/pockets/update-checker", untrailingslashit($this->options['url'])),
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_POST => true,
            CURLOPT_HTTPHEADER => [
                'Content-Type: application/json',
                'Accept: application/json',
            ],
            CURLOPT_POSTFIELDS => json_encode( $this->options ),
        ];
        
        curl_setopt_array( $curl, $req );

        $response = curl_exec( $curl );

        curl_close( $curl );

        $response = json_decode($response, true);

        if ( is_array( $response ) ) {

            if( !($response['status'] ?? false ) || $response['status'] !='pockets-updater-success' ) {
                return new \Wp_Error('404', 'url not valid');
            }

            return $response;

        }
        
        if( is_null( $response ) ) {
            return new \WP_Error( 'Bad Response', "No response from server." );
        }

        if( is_wp_error( $response ) ) {
            return $response;
        }

    }

}
