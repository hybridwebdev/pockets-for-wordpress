<?php

namespace pockets\vue;

use \pockets\crud\reducers\validator_reducer;

#[\AllowDynamicProperties]
class load_assets {
	
	use \pockets\traits\init;
	
	function __construct(){ 

		list(
			'url' => $this->url,
			'dir' => $this->dir,
		) = apply_filters('pockets/vue-app/host-config', [
			'dir' => plugin_dir_path(__DIR__ . "/vue/"),
			'url' => plugin_dir_url(__DIR__ . "/vue/")
		]);

		add_filter('script_loader_tag', function ($tag, $handle, $src) {

			if ( in_array( needle: $handle, haystack: [ 'vuejs-app' ] ) ) {
				// phpcs:ignore WordPress.WP.EnqueuedResources.NonEnqueuedScript
				return '<script type="module" src="' . esc_url($src) . '"></script>';
			}

			return $tag;

		}, 10, 3);

		add_action('init', [$this, 'initConfig']);

		add_action('admin_footer', [$this, 'load_assets']);
		add_action('wp_footer', [$this, 'load_assets']);

	}

	static function getModes(){
		return [
			'host',
			'build'
		];
	}

	static function fallbackOptions(){
		return [
			'mode' => 'build',
			'host' => 'http://localhost:8080'
		];
	}

	function initConfig(){

		$options = static::fallbackOptions();

		if ( is_user_logged_in() ) {
			$options = \pockets::crud('wp-user')::init(['by' => 'current_user'])->read([
				'meta:<=' => [
					'pockets-vue-app:<='
				]
			]);
		}

		if ( is_wp_error( $options ) ) {
			$options = static::fallbackOptions();
		}

		$mode = $options['mode'] ?? null;

		if ( !in_array( needle: $mode, haystack: static::getModes() ) ) {
			$mode = static::fallbackOptions()['mode'];
		}

		$this->vue_config = [
			'mode' => $mode
		];

		$map = [
			'host' => rtrim($options['host'] ?? static::fallbackOptions()['host'], '/'),
			'build' => "{$this->url}/dist",
		];

		$this->vue_config['host'] = $map[$this->vue_config['mode']];
        
	}

	function load_config_file($path){
		return json_decode(@file_get_contents($path), true);
	}
 
	function get_dev_assets(){

		$host = rtrim($this->vue_config['host'], '/');

		return [
			'app.js' => "{$host}/src/main.js",
			'app.css' => false
		];

	}
 
	function get_built_assets(){

		$manifest = $this->load_config_file("{$this->dir}/dist/manifest.json");

		$host = rtrim($this->vue_config['host'], '/');

		return [
			'app.js' => ( $manifest['src/main.ts']['file'] ?? false )
				? sprintf( "%s/%s", $host, $manifest['src/main.ts']['file'] )
				: false,
			'app.css' => ( $manifest['src/main.ts']['css'][0] ?? false ) 
				? sprintf( "%s/%s", $host, $manifest['src/main.ts']['css'][0] ) 
				: false
		];

	}

	function load_assets(){

		$paths = $this->vue_config['mode'] === 'host'
			? $this->get_dev_assets()
			: $this->get_built_assets();

		wp_enqueue_script(
			'vuejs-app',
			$paths['app.js'],
			apply_filters("pockets/vue/app.js/dependencies", []),
			null,
			[ 'in_footer' => true ]
		);
 
		wp_localize_script(
			'vuejs-app',
			'pocketsData',
			apply_filters('vuejs-app/data', [])
		);

		if( $paths['app.css'] ) {
			wp_enqueue_style( "vuejs-app-css", $paths['app.css'] );
		}

	}
	
}