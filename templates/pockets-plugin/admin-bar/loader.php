<?php 
    defined('ABSPATH') || exit; 
?>
<pockets-app 
    class='position-fixed' 
    style='z-index: 20; bottom: 0px; left: 0px;'
>
    <pockets-local-state 
        :open='true' 
        #default='{ state }' 
        v-cloak
    >

        <div class='d-flex gap-0 p-half' style='flex-direction:column;'>
           
            <button
                class="btn btn-grey-800 fw-8 border border-2 border-grey-md shadow-menu p-1 py-half" 
                @click='state.open = !state.open'
                v-tooltip='{ content: "Toggle menu", placement:"right" }'
            >
                <i 
                    class="fa fa-chevron-up"
                    :style="[
                        {
                            transform: state.open ? 'rotate(180deg)' : ''
                        }
                    ]"
                ></i>
            </button>

            <div 
                style='
                    transition: .5s all;
                    display: grid
                ' 
                :style='{
                    "grid-template-rows": state.open ? "1fr" : "0fr"
                }'
            >
                <div style='overflow: hidden'>
                    <div class='d-flex gap-1 pt-1' style='flex-direction:column;'>
                        <?php do_action('pockets/admin-bar/render/content') ?>
                    </div>
                </div>
            </div>

        </div>

    </pockets-local-state>

</pockets-app>