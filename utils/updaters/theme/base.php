<?php
namespace pockets\utils\updaters\theme;

/**
    This can be added to a class that has:
    $this->themeSlug string of themes slug which is its name turned into a slug.
    Checks for theme updates same way plugin updater does.
*/
trait base {

    use \pockets\traits\init;
    use \pockets\traits\get_theme_data;
    
    final function __construct(){
        parent::__construct();
        add_filter('site_transient_update_themes', [ $this, 'modify_transient' ], 10, 1);
    }

    /**
        For debugging, you can return true.
    */
    function purgeCache() : bool{ 
        return false;
    }
    
    /**
        Fired when update available. Can be used to modify response. 
    */
    function modify_response( \pockets\utils\array_dot_prop $response ) : \pockets\utils\array_dot_prop { 
        return $response;
    }
    
    /**
        getOptions()

        should return [

            url => string that points to remote server hosting update
            transientKey => string used to store transient for caching remote fetch,
            expirationTime => int used to control how long cached result is stored for
            repository => string points to a github repository,
            token => string containing license token.
            
        ]
    */
    abstract function getOptions() : array;

    function setupData(){

        $this->options = $this->getOptions();

        $this->remoteData = \pockets\utils\updaters\remote_fetch::init(
            options: $this->options,
            purgeCache: $this->purgeCache()
        )->getResponse();

    }
    
    public function modify_transient( $transient ) {
        
        $this->themeAPI = $this->getThemeApi();

        if( empty( $transient->checked[ $this->themeAPI->get_stylesheet() ] ) ){
            return $transient;
        }

        $this->setupData();

        if( is_wp_error( $this->remoteData ) ) {
            return $transient;
        }

        if( !$this->hasUpdate() ) {
            return $transient;
        }

        $transient->response[ $this->themeAPI->get_stylesheet() ] = $this->modify_response( \pockets\utils\array_dot_prop::init( [

            'theme' => $this->themeAPI->get_stylesheet(),
            'requires' => $this->themeAPI->get('RequiresWP'),
            'requires_php' => $this->themeAPI->get('RequiresWP'),

            'package' => $this->remoteData['download_link'],
            'new_version' => $this->remoteData['version'],

        ] ) )->all();

        return $transient;

    }

    public function hasUpdate(){

        return $this->remoteData['version'] > $this->themeAPI->get('Version');

    }

}
