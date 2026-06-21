<?php
namespace pockets\plugin {
    
	class admin_bar {
        
        use \pockets\traits\initOnce;

        function __construct(){

			add_action('wp_footer', function(){

				if(  current_user_can('administrator') ) {
					// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- renders template
					echo \pockets::load_template( [ 'template' => 'pockets-plugin/admin-bar/loader' ] );
				}

			}, 5 );
			
			add_action(
            	hook_name: 'pockets/admin-bar/render/content', 
            	callback: function(){
					
					if( !current_user_can('administrator') ) {
						return;
					}
					
					// phpcs:ignore PluginCheck.CodeAnalysis.Heredoc.NotAllowed -- fully sanitized

					echo <<<'HTML'
						<a 
							class='btn-grey-800 fw-8 border border-5 border-grey-md shadow-menu p-0' 
							v-tooltip='"Toggle WP Admin Toolbar"'
							@click='$pockets.data.showAdminBar = !$pockets.data.showAdminBar'
							role='button'
						>
							<i class='text-grey-md fa fa-bars p-1 bg-grey-800 fs-20 text-white '></i>
						</a>
						<a 
							class='btn-grey-800 fw-8 border border-5 border-grey-md shadow-menu p-0' 
							href='/wp-admin' 
							v-tooltip='"WP Admin Dashboard"'
						>
							<i class='text-grey-md fas fa-dashboard p-1 bg-grey-800 fs-20 text-white '></i>
						</a>
					HTML;

				}
			);

			\pockets::inject_data('showAdminBar', false );

			add_action( 'wp_before_admin_bar_render', function() {
				echo <<<'HTML'
					<pockets-app>
						<div v-show='$pockets.data.showAdminBar == 1'>
				HTML;
			}, 20);

			add_action( 'wp_after_admin_bar_render', function() {
				echo <<<HTML
						</div>
					</pockets-app>
				HTML;
			});

			add_action('wp_head', function () {
				echo <<<STYLE
					<style>
						#wpadminbar {
							z-index: 9999999 !important;
						}

						html {
							margin: 0 !important;
						}
					</style>
				STYLE;
			});

        }

    }

}