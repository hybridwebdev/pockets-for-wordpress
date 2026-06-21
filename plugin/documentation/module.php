<?php
namespace pockets\plugin\documentation; 

class module extends \pockets\base { 

    function __construct(){

        parent::__construct();
                    
        add_action(
            hook_name: 'pockets/admin-bar/render/content', 
            priority: 1000,
            callback: function(){
                printf(
                    // phpcs:ignore PluginCheck.CodeAnalysis.Heredoc.NotAllowed -- fully sanitized
                    <<<HTML
                        <pockets-local-state :open='false' #default='{state}' v-cloak >
                            <button 
                                @click='state.open = !state.open'
                                class='btn btn-grey-800 p-0 border border-5 border-grey-md shadow-menu'
                                style='z-index: 99'
                                v-tooltip='{ content: !state.open ? "View Pockets Dashboard" : "Close Pockets Dashboard", position: "end" }'
                            >
                                <i 
                                    class='fa fa-book p-1 fs-20' 
                                    v-if='!state.open' 
                                ></i>
                                <i 
                                    class='fa fa-times p-1 fs-20' 
                                    v-if='state.open' 
                                ></i>
                            </button>
                            <div 
                                v-if='state.open' 
                                class='position-fixed top-0 end-0 start-0 bottom-0' 
                            >   
                                %s
                            </div>
                        </pockets-local-state>
                    HTML,
                    // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- fully sanitized earlier
                    $this->render_documentation()
                );
            }
        );

        add_shortcode( 'pockets-documentation', [$this, 'render_documentation'] );
         
    }

    function render_documentation(){

        $props = \pockets::json_attr([
            'assets' => [
                'logo' => sprintf("%s/assets/images/pockets-logo.webp", $this->url ),
                'css' => sprintf("%s/assets/css/styles.css", $this->url )
            ]
        ]);

        // phpcs:disable PluginCheck.CodeAnalysis.Heredoc.NotAllowed -- fully sanitized
        return sprintf(

            <<<HTML
                <pockets-documentation
                    v-bind='$props'
                ></pockets-documentation>
            HTML,
            
        );

    }
 
}
