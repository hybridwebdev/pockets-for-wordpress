<?php
namespace pockets\plugin\documentation; 

class module extends \pockets\base { 

    function __construct(){

        parent::__construct();
                    
        add_action(
            hook_name: 'pockets/admin-bar/render/content', 
            callback: function(){
                printf(
                    <<<HTML
                        <pockets-local-state :open='false' #default='{state}' v-cloak >
                            <button 
                                @click='state.open = !state.open'
                                class='btn btn-grey-800 p-0 border border-5 border-grey-md fs-24 shadow-menu'
                                style='z-index: 99'
                            >
                                <i 
                                    class='fa fa-book p-1' 
                                    v-if='!state.open' 
                                    v-tooltip='"View Dashboard"'
                                ></i>
                                <i 
                                    class='fa fa-times p-1' 
                                    v-if='state.open' 
                                    v-tooltip='"Close Dashboard"'
                                ></i>
                            </button>
                            <div 
                                v-if='state.open' 
                                class='position-fixed top-0 end-0 start-0 bottom-0' 
                            >
                                {$this->render_documentation()}
                            </div>
                        </pockets-local-state>
                    HTML
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

        return sprintf(
            <<<HTML
                <pockets-documentation
                    v-bind='$props'
                ></pockets-documentation>
            HTML,
        );

    }
 
}
