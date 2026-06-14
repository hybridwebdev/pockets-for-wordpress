<?php
namespace pockets\vue;
use \pockets\crud\reducers\validator_reducer as validator;

class meta_keys {
    use \pockets\traits\init;

    function __construct(){
		
		add_action('pockets/admin/render-plugin-settings', function(){
						// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- renders template
			echo \pockets::load_template([
				'template' => 'pockets-plugin/admin-dashboard/vue-app-settings'
			]);
		} );
		
		register_setting(
			option_group: 'pockets',
			option_name: 'pockets-vue-app',
			args: function($input){

				$response = \pockets::crud('wp-user')::init(wp_get_current_user())->update([
					'meta' => [
						'pockets-vue-app:Vue Settings' => $input
					]
				], true);

				add_settings_error(
					"pockets",
					"",
					is_wp_error($response) ? $response : $response['meta']
				);

			}
		);

	    register_meta( 'user', 'pockets-vue-app', [
			'type' => "object",
			'default' => load_assets::fallbackOptions(),
			'sanitize_callback' => [ $this, 'sanitize_callback' ],
			'description' => [
				'schema' => [
					'read' => [
						'type' => "null"
					],
					'update' => [
						'type' => "object",
						'additionalProperties' => false,
						'required' => ['host', 'mode'],
						'properties' => [
							'host' => [
								'type' => "string"
							],
							'mode' => [
								'type' => "string",
								'enum' => load_assets::getModes(),
							],
						]
					]
				]
			]
		] );

    }

    function sanitize_callback( $data ){

		return validator::init( $data )->sanitize( [
			
			'mode' => function( $value ) {
				if( !is_string( $value) || !in_array( $value, load_assets::getModes() ) ) {
					$value = 'build';
				}
				return $value;
			},
			'host' => fn( $value ) => validator::enforceType( 'string', $value, load_assets::fallbackOptions()['host'] ),
		
		] )->whitelist( load_assets::fallbackOptions() )->getData();
		
	}

}