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
				priority: 1,
            	callback: function(){
					
					if( !current_user_can('administrator') ) {
						return;
					}
					
					// phpcs:ignore PluginCheck.CodeAnalysis.Heredoc.NotAllowed -- fully sanitized

					echo <<<'HTML'
						<a 
							class='btn btn-grey-800 fw-8 border border-2 border-grey-md shadow-menu p-1 py-half' 
							v-tooltip='{ content: "Toggle WP Admin Toolbar", placement: "right" }'
							@click='$pockets.data.wpAdmin.showBar = !$pockets.data.wpAdmin.showBar'
							role='button'
							:class='{ active: $pockets.data.wpAdmin.showBar }'
							style='--bs-btn-active-bg: var(--bs-confirm)'
						>
							<i class='fa fa-bars'></i>
						</a>
						<a 
							class='btn btn-grey-800 fw-8 border border-2 border-grey-md shadow-menu p-1 py-half' 
							href='/wp-admin' 
							v-tooltip='{ content: "WP Admin Dashboard", placement: "right" }'
						>
							<i class='fas fa-dashboard'></i>
						</a>
					HTML;

				}

			);

			\pockets::inject_data( 'wpAdmin', [
				'showBar' =>  is_admin() ? true : false
			] );

			add_action( 'wp_before_admin_bar_render', function() {
				echo <<<'HTML'
					<pockets-app v-cloak>
						<div v-show='$pockets.data.wpAdmin.showBar == 1'>
				HTML;
			}, 20);

			add_action( 'wp_after_admin_bar_render', function() {
				echo <<<HTML
						</div>
					</pockets-app>
				HTML;
			});

        }

    }

}