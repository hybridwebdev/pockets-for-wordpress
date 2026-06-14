<?php 
namespace pockets\traits;

/**
    To use this trait, you must have:
    $this->pluginFile which points to the full path of a plugin file. 
*/
trait get_theme_data {
    
    /**
        get_plugin_data is expensive, so cache results. 
    */
    public static $cachedThemeApi;

    function getThemeApi(){	
        
        if( !static::$cachedThemeApi ) {

            static::$cachedThemeApi = wp_get_theme( $this->themeSlug );
            
        }

        return static::$cachedThemeApi;
        
    }
    
}
