<?php
namespace pockets\admin {
    
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
					 
					// phpcs:ignore PluginCheck.CodeAnalysis.Heredoc.NotAllowed -- fully sanitized

					echo <<<'HTML'
						<a 
							class='btn btn-grey-800 fw-8 border border-2 border-grey-md shadow-menu p-1 py-half' 
							href='/wp-admin' 
							v-tooltip='{ content: "WP Admin Dashboard", placement: "right" }'
							target='_blank'
						>
							<i class='fas fa-dashboard'></i>
						</a>
					HTML;

				}

			);

        }

    }

}