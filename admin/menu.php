<?php
namespace pockets\admin;

class menu {

    use \pockets\traits\init; 

    function __construct(){
        
        add_action( 'admin_menu', [ $this, 'register_menus' ] );
        
    } 

    static function before(){
        // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- renders template
        echo \pockets::load_template( [ 'template' => 'pockets-plugin\admin-dashboard\header' ] );
    }

    static function after(){
        // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- renders template
        echo \pockets::load_template( [ 'template' => 'pockets-plugin\admin-dashboard\footer' ] );
    }

    static function print_settings_errors( string $option_group ) : string {

        ob_start();

        array_map(
            array: get_settings_errors( $option_group ),
            callback: function( $error ) {
                
                $message = $error['message'];

                if( is_wp_error($message) ) {
                    // phpcs:disable PluginCheck.CodeAnalysis.Heredoc.NotAllowed -- fully sanitized
                    printf(
                        <<<HTML
                            <div class='alert alert-primary-dk m-0'>
                                %s
                            </div>
                        HTML,
                        wp_kses_post( $message->get_error_message() )
                    );
                }

                if( is_array($message) ) {
                    array_map(
                        // phpcs:disable PluginCheck.CodeAnalysis.Heredoc.NotAllowed -- fully sanitized
                        fn( $k, $v ) => printf(
                            <<<HTML
                                <div class='alert alert-primary-dk m-0'>
                                    <b>%s</b> - %s
                                </div>
                            HTML, 
                            wp_kses_post($k), 
                            wp_kses_post($v)
                        ),
                        array_keys($message),
                        array_values($message),
                    );
                }

            }
            
        );

        return ob_get_clean();

    }

    function register_menus() {

        add_menu_page( "Pockets", "Pockets", 'manage_options', 'pockets' );
        
        add_submenu_page(
            'pockets',
            'Getting Started',
            'Getting Started',
            'manage_options',
            'pockets',
            function(){
                
                $this->before();

                    // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- renders template
                    echo \pockets::load_template( [ 'template' => 'pockets-plugin/admin-dashboard/welcome' ] );

                $this->after();

            }, 
        );
 
        add_submenu_page(
            'pockets',
            'Settings',
            'Settings',
            'manage_options',
            'pockets-settings',
            function(){

                $this->before();
                    
                    // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- renders template
                    echo \pockets::load_template( [ 'template' => 'pockets-plugin/admin-dashboard/settings-form-open' ] );
                    
                    do_action('pockets/admin/render-plugin-settings');
                    
                    // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- renders template
                    echo \pockets::load_template( [ 'template' => 'pockets-plugin/admin-dashboard/settings-form-close' ] );

                $this->after();

            }, 
            
        );

    }
    
}