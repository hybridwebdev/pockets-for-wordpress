<?php   
/*  
 * Plugin Name: Pockets Core Development Tools
 * Description: A powerful site development framework for wordpress. 
 * Version:     0.99 
 * Author:      Hybrid Web Dev
 * Author URI:  https://hybridwebdev.com   
 * License:     GPLv2 or later
 * Requires PHP: 8.0 
 * Requires at least: 6.0    
 */ 
namespace pockets;

#[\AllowDynamicProperties]
class base {

	function __construct(){

		$this->pluginFile = __FILE__;
		$this->dir = plugin_dir_path( $this->pluginFile );
		$this->url = plugin_dir_url( $this->pluginFile );

	}
	
	static function init(...$args){ 
		return new static(...$args);  
	}
	
}

class autoloader {

	private function __construct( 
		public string $dir, 
		public string $namespace 
	){}

	static function register(...$args){
		spl_autoload_register( [ new static(...$args), 'loader'] );
	}

	private function loader($filename){
		$class_target = explode('\\', str_ireplace('_', '-', untrailingslashit( $filename ) ) );
		if( str_replace("-", "_", $class_target[0]) != $this->namespace ) return;
		array_shift($class_target); // pops off
		$chunks = implode('/', $class_target);
		$file = "{$this->dir}/{$chunks}.php";
		if ( is_file($file) ) require_once($file);
	}
	
}
	
autoloader::register( plugin_dir_path( __FILE__ ), __NAMESPACE__ );

/**
	Binds at earliest priorty so that other plugins can register to load
	after it.  
*/
add_action("plugins_loaded", function(){
	plugin\module::init();
}, 1 );
