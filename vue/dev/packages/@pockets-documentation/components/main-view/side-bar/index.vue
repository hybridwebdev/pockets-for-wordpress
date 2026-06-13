
<template>

    <pockets-drawer 
        class="gap-0 pockets-dashboard-sidebar bg-grey-700"
    >

        <pockets-drawer-panel 
            class="border border-5 border-grey-500 bg-grey-800"
            style="
                --expand: 320px; 
                --collapse:0px; 
                overflow: hidden; 
                min-height: 0; 
                grid-row: 1; 
                grid-column: 1
            " 
        >

            <div class='grid gap-0 pockets-dashboard-sidebar-panel'>
            
                <div class="d-flex align-items-center border-5 border-grey-500 border-bottom pockets-dashboard-sidebar-header p-1">
                    <a href="/" class="d-block"  v-tooltip="'Back to site'" history-mode="html5">
                        <img :src="documentationState.assets.logo" style="height: 30px" class="img-fluid">
                    </a>
                    <div class="ms-auto"><search/></div>
                </div>

                <div class="pockets-dashboard-sidebar-body p-2 fancy-scroll" >
                    <walker :children="routes[0].children"/>    
                </div>
                
            </div>

        </pockets-drawer-panel>

        <pockets-drawer-trigger 
            class="pockets-dashboard-sidebar-trigger p-1 btn btn-grey-700 py-2"
            v-tooltip="{ content: 'Toggle sidebar', placement: 'right' }"
        />

    </pockets-drawer>

</template>

<script setup>
 
import walker from './walker.vue'
import search from "@pockets-documentation/components/main-view/search/index.vue"

import { context  } from "@pockets-documentation"

let routes = context.inject.routes()

let documentationState = context.inject.documentationConfig()

</script>
<style lang="scss" scoped>
.pockets-dashboard-sidebar {

    overflow: hidden;  
    display: grid;

    grid-column: 1;
    grid-row: 2;
    order:1;

    @media(max-width: 1040px) {
        z-index: 1000;
    }
    
    .pockets-dashboard-sidebar-panel {
        display: grid;
        grid-template-rows: auto 1fr;
        grid-template-columns: var(--expand);
        overflow: hidden;
        grid-column: 1;
        grid-row: 1;
    }
     
    .pockets-dashboard-sidebar-body {
        overflow-y: auto;
    }
 
    .pockets-dashboard-sidebar-trigger {

        grid-column: 1;
        grid-row: 1;
        display: flex;
        align-items: center;
        justify-self: end;
        align-self: stretch;
        align-self: center;

    }

}
</style>