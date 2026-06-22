<?php
/**
	Adds a wrapper around WP's admin bar on the front end, hiding it by default.
	Adds a button to Pockets admin bar that toggles hiding/showing it.
*/
namespace pockets\admin {
    
	class modify_wp_admin_bar {
        
        use \pockets\traits\initOnce;

        function __construct(){

			add_action( 'get_header', function(){
			 	remove_action( 'wp_head', 'wp_enqueue_admin_bar_bump_styles' );
    			remove_action( 'wp_head', '_admin_bar_bump_cb' );
			} );

            
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

			add_action(
            	hook_name: 'pockets/admin-bar/render/content', 
				priority: 2,
            	callback: function(){
					 
					// phpcs:ignore PluginCheck.CodeAnalysis.Heredoc.NotAllowed -- fully sanitized

					echo <<<'HTML'
						<button 
							class='btn btn-grey-800 fw-8 border border-2 border-grey-md shadow-menu p-1 py-half' 
							v-tooltip='{ content: "Toggle WP Admin Toolbar", placement: "right" }'
							@click='$pockets.data.wpAdmin.showBar = !$pockets.data.wpAdmin.showBar'
							:class='{ active: $pockets.data.wpAdmin.showBar }'
							style='--bs-btn-active-bg: var(--bs-confirm)'
						>
							<i class='fa fa-bars'></i>
						</button>
					HTML;

				}

			);

        }

    }

}