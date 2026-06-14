<?php
namespace pockets\utils;

class encrypted_token {
    
    use \pockets\traits\initOnce;

    function __construct(
        public string $key
    ){}
    
    function encrypt( array $data ) : string {

        $data = $data + [
            'timestamp' => time(), 
        ];

        $token = base64_encode( json_encode( $data ) ) . '.' . hash_hmac( 'sha256', json_encode( $data ), $this->key );
        
        return $token;

    }

    function decrypt( string $token) {
       
        $this->key = $this->key;

        $parts = explode('.', $token);
      
        if ( count($parts) !== 2 ) {
            return false; 
        }

        $data = json_decode(base64_decode( $parts[0] ), true);

        $signature = $parts[1];

        $is_valid = hash_hmac( 'sha256', json_encode($data), $this->key) === $signature ;

        if (!$is_valid) {
            return \pockets::error("invalid");
        }

        if ( time() - $data['timestamp'] > 86400) { 
            return \pockets::error("expired");
        }

        return $data; 

    }

} 