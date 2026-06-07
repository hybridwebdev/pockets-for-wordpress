<?php 
namespace pockets\crud\models\image;
use pockets\utils\import_image;
class model extends \pockets\crud\models\post\model {
    
    use permissions; 

    public static string $model_name = 'image';

    public string $get_resource = __NAMESPACE__.'\get';
    public string $read_resource = __NAMESPACE__.'\read';
    public string $update_resource   = __NAMESPACE__.'\update';

    /**

        Create will make a new image in the media library. 

        $input should be an array with the minimum of: [
            'url' => 'path to image url to download'
        ]
        
    */
    #[ \pockets\crud\schema\attribute( [
        'type' => "object",
        'properties' => [
            'input' => [
                '$ref' => '/reset',
                '$merge' => [
                    'source' => [ '$ref' => "/image/update_resource/" ],
                    'with' => [
                        'type' => ['object', 'array', 'boolean'],
                        'properties' => [
                            'url' => [ 'type' => 'string' ]
                        ],
                        'required' => ['url']
                    ]
                ],
            ]
        ]
    ] ) ]
    function create(array $input, array | bool $output = ['ID'] ) : array | \WP_Error {

        if( !$this->canCreate() ) return \pockets::error('Denied');

        list(
            'url' => $url,
        ) = wp_parse_args( $input, [
            'url' => false
        ] );

        $created = null;

        if( !$url ) {
             return \pockets::error('You must provide a valid URL');
        }
        
        if( $url ) {
            $created = import_image::init()->by_url($url);
        }

        if( is_wp_error( $created ) ) {
            return $created;
        }

        /**
            Re-setup resource so it can be used for read/update
        */
        $this->setResource( $created );

        return $this->update( $input, $output );

    }

}