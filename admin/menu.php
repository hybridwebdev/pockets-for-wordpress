<?php
namespace pockets\admin;

class menu {

    use \pockets\traits\init; 

    function __construct(){
        
        add_action( 'admin_menu', [ $this, 'register_menus' ] );
        
    } 

    static function before(){
        echo \pockets::load_template( [ 'template' => 'pockets-plugin\admin-dashboard\header' ] );
    }

    static function after(){
        echo \pockets::load_template( [ 'template' => 'pockets-plugin\admin-dashboard\footer' ] );
    }

    static function print_settings_errors( string $option_group ) : string {

        ob_start();

        array_map(
            array: get_settings_errors( $option_group ),
            callback: function( $error ) {
                
                $message = $error['message'];

                if( is_wp_error($message) ) {
                    printf(
                        <<<T
                            <div class='alert alert-primary-dk m-0'>
                                %s
                            </div>
                        T,
                        $message->get_error_message()
                    );
                }

                if( is_array($message) ) {
                    array_map(
                        fn( $k, $v ) => printf(
                            <<<T
                                <div class='alert alert-primary-dk m-0'>
                                    <b>%s</b> - %s
                                </div>
                            T, 
                            $k, 
                            $v
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
                
                    echo \pockets::load_template( [ 'template' => 'pockets-plugin/admin-dashboard/settings-form-open' ] );
                    do_action('pockets/admin/render-plugin-settings');
                    echo \pockets::load_template( [ 'template' => 'pockets-plugin/admin-dashboard/settings-form-close' ] );

                $this->after();
            }, 
        );

    }
    
}