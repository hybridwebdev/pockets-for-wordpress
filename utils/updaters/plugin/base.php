<?php
namespace pockets\utils\updaters\plugin;

trait base {

    use \pockets\traits\init;
    use \pockets\traits\get_plugin_data;

    final function __construct(){
        
        parent::__construct();

        add_filter( 'site_transient_update_plugins', [ $this, 'update' ], 10, 1 );
        add_filter( 'plugins_api', [ $this, 'info' ], 20, 3 );

    }

    /**
        Can be overridden for debugging. Set to true to force remote request every time.  
    */
    function purgeCache() : bool {
        return false;
    }

    /**
        action will be either info or update.
        Allows modifying response before its returned to api. 
    */
    function modify_response( string $action, \pockets\utils\array_dot_prop $response ) : \pockets\utils\array_dot_prop {
        return $response;
    }

    /**
        Options for fetching updates. Should be: 
        
        [
            url => string that points to remote server hosting update
            transientKey => string used to store cached result of fetched response
            expirationTime => int used to control how long cached result is stored for
            repository => string that points to remote git package. eg {user}/{repository}
            token => string containing license token.
        ]
        
    */
    abstract function getOptions() : array ;
    
    function setupData(){

        $this->options = $this->getOptions();
                
        $this->pluginData = $this->get_plugin_data();

        $this->remoteData = \pockets\utils\updaters\remote_fetch::init(
            options: $this->options,
            purgeCache: $this->purgeCache()
        )->getResponse();

        // \pockets::dump( $this->remoteData );
    }   
        
    /**
        See https://developer.wordpress.org/reference/functions/get_plugin_data/#source
        for how Plugin comment headers are mapped to get_plugin_data()  
    */
    public function info( $result, $action, $args ) {

        if ( $action !== "plugin_information" ) {
            return $result; 
        }

        if( empty( $args->slug ) || $args->slug !== $this->pluginData['slug'] ) {
            return $result;
        }
        
        $this->setupData();

        if( is_wp_error( $this->remoteData ) )  {
            return $result;
        }

        $response = $this->modify_response( 'info', \pockets\utils\array_dot_prop::init( [

            'name' => $this->pluginData['Name'],
            'slug' => $this->pluginData['slug'],
            'requires' => $this->pluginData['RequiresWP'],
            'author' => $this->pluginData['AuthorName'],
            'author_profile' => $this->pluginData['AuthorURI'],
            'homepage' => $this->pluginData['PluginURI'],
            'requires_php' => $this->pluginData['RequiresPHP'],

            'version' => $this->remoteData['version'],
            'last_updated' => $this->remoteData['last_updated'],
            'download_link' => $this->remoteData['download_link'],
 
            'sections' => [
                'description' => $this->pluginData['Description'],
                'changelog' => $this->remoteData['body'],
                "installation" => "Install like any other plugin. Activate. "
            ],
            'donate_link' => "hybridwebdev.com",
            'banners' => [
                'high' => sprintf( "%s/assets/images/pockets-brand-logo-combined-773x250.webp", \pockets\base::init()->url ),
            ],
            

        ] + $this->sharedDefaults() ) )->all();

        return (object)$response;
 
    }
    
    function sharedDefaults(){
        
        return [
            'tested' => 7,
            'icons' => [
                '1x' => sprintf( "%s/assets/images/pockets-brand-logo-combined-256x256.webp", \pockets\base::init()->url ),
                '2x' => sprintf( "%s/assets/images/pockets-brand-logo-combined-256x256.webp", \pockets\base::init()->url ),
            ]
        ];

    }
    /**
        Conditionally signals that plugin has available update.
    */
    public function update( $transient ) {

        if ( empty( $transient->checked ) ) {
            return $transient;
        }

        $this->setupData();

        if( !$this->hasUpdate() ) {
            return $transient;
        }

        $response = $this->modify_response( 'update', \pockets\utils\array_dot_prop::init( [
            
            'slug' => $this->pluginData['slug'],
            'plugin' => $this->pluginData['plugin'],

            'new_version' => $this->remoteData['version'],
            'package' => $this->remoteData['download_link'],

        ] + $this->sharedDefaults() ) )->all(); 
        
        $transient->response[ $this->pluginData['plugin'] ] = (object) $response;
         
        return $transient;

    }
     
    public function hasUpdate(){

        if( is_wp_error( $this->remoteData ) )  {
            return false; 
        }

        return $this->remoteData['version'] > $this->pluginData['Version'];
        
    }

}
