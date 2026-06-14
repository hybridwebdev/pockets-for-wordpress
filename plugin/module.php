<?php
namespace pockets\plugin {
	
	class module extends \pockets\base {

		use \pockets\traits\get_plugin_data;

		function __construct(){
		
			parent::__construct();

			add_action( "wp_enqueue_scripts", [$this, 'load_base_assets'], 10, 1);
          	add_action( "admin_enqueue_scripts", [$this, 'load_base_assets'], 10, 1);
			
			/**
				Adds:
					plugin dir
					theme dir
					child theme dir
				Registered priority 5 so it loads early, but can be overriden.
			*/
			add_filter('pockets/template-locations', fn( array $locations ) => array_merge( $locations, [
				$this->dir,  
				get_template_directory(),  
				get_stylesheet_directory()
			] ), 5, 1 ); 

			/**
			* bootstrapping modules
			*/

			\pockets\query_filters\module::init();
			
			\pockets\plugin\api\module::init();
			
			if( \pockets::isFullVersion() && class_exists( '\pockets\plugin\update\module') ) {
				\pockets\plugin\update\module::init();
			}

			\pockets\crud\module::init();
			\pockets\vue\module::init();
			\pockets\queried_object\module::init();
			\pockets\admin\menu::init();

			\pockets\plugin\documentation\module::init();
			
			
			add_action('wp_footer', function(){
				if(  current_user_can('administrator') ) {
					// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- renders template
					echo \pockets::load_template( [ 'template' => 'pockets-plugin/admin-bar/loader' ] );
				}
			}, 5 );
			
		}
		
		function load_base_assets(){
			
			wp_enqueue_style(  'pockets', "{$this->url}/assets/css/styles.css", false, $this->get_plugin_data()['Version'] );
			// phpcs:ignore PluginCheck.CodeAnalysis.EnqueuedResourceOffloading.OffloadedContent -- fully safe and trusted cdn content
			wp_enqueue_style(  'pockets-fa', "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css", false, $this->get_plugin_data()['Version'] );
			wp_enqueue_style(  'pockets-font-lato', "https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap", false, $this->get_plugin_data()['Version'] );
			wp_enqueue_style(  'pockets-font-lobster', "https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Lobster&display=swap", false, $this->get_plugin_data()['Version'] );
			// phpcs:ignore PluginCheck.CodeAnalysis.EnqueuedResourceOffloading.OffloadedContent -- fully safe and trusted cdn content
			wp_enqueue_script( 'bootstrap-js', 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js', [], null, true );

		}

	}

}
