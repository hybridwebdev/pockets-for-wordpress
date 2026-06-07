<?php namespace pockets\traits;

/**
    To use this trait, you must have:
    $this->pluginFile which points to the full path of a plugin file. 
*/
trait get_plugin_data {
    
    /**
        get_plugin_data is expensive, so cache results. 
    */
    public static $cachedPluginData;

    function get_plugin_data(){	
        
        if( !static::$cachedPluginData ) {

            static::$cachedPluginData = get_plugin_data( $this->pluginFile ) + [
                /**
                    dir/file.php
                    eg pockets/init.php 
                */
                'plugin' => plugin_basename( $this->pluginFile ),
                'is_active' => is_plugin_active(  $this->pluginFile ),
                /**
                    dir name of plugin
                    eg pockets 
                */
                'slug' => dirname ( plugin_basename( $this->pluginFile ) )
            ];
            
        }

        return static::$cachedPluginData;
        
    }
    
}
