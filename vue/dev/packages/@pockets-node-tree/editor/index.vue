<template lang='pug'>

Teleport(
    to='body'
)
    div(
        class='loading-container pockets-node-tree-editor bg-accent-dk position-fixed shadow-menu'  
        :class='{ show: editor.show }'
        :mode='editor.mode'
        :loading='editor.busy'
        ref='container'
        v-show='editor.show'
    )
        
        div(class='d-flex flex-wrap col-12')
            div(class='d-flex flex-wrap col-12 border-5 border-bottom border-accent-lt align-items-center')
                div( 
                    class='drag-handle flex-grow-1 p-half px-1 text-capitalize fw-8 text-white'
                    ref='handle'
                )
                    span(
                        v-if='!editor.active'
                    ) Select a node
                    span(
                        v-if='editor.active'
                    ) {{editor.mode}} - {{editor.active.schema.title ?? editor.active.node.el }} 
                div()
                    button( 
                        class="fa fa-chevron-down btn border-0 btn-accent-dk fw-8 p-half px-1 rounded-0"
                        v-tooltip='"Hide"'
                        @click='editor.show = false'
                        v-if='editor.show'
                    )
                    button( 
                        class='fa fa-times btn border-0 btn-accent-dk fw-8 p-half px-1 rounded-0' 
                        v-if='editor.show' 
                        @click='editor.active = false'
                        v-tooltip='"Clear Selection"'
                        :disabled='!editor.active || editor.modeLocked'
                    )
            titleBar(class='col-12 d-flex align-items-stretch')
                revisionsButtons()
            div( class='col-12' ref='uxContainer' )
                div( 
                    class='bg-accent-dk d-flex border-bottom border-5 border-accent-lt mt-auto col-12 flex-wrap' 
                )
                    mode-buttons()

        div( 
            class='bg-white panel-container' 
            @wheel.capture.passive
            @scroll.capture
        )
            
            component( :is='selectedModePanel')
            
    pockets-ux-movable( 
        v-if='handle && editor.show'
        :target='container' 
        :dragTarget='handle' 
        :draggable="true" 
        :useResizeObserver='true'
        :useMutationObserver='true'
        :resizable='true'
        :key='Date.now()'
    )

button( 
    class="btn-grey-800 fw-8 border border-5 border-grey-md shadow-menu p-0"
    v-tooltip='{ content: "Show editor", placement: "top-end" }'
    @click='editor.show = !editor.show'
    
) 
    i( class='fa fa-cog p-1 bg-grey-800 fs-20 text-white')

</template>
<script lang='ts' setup>  
import { computed, ref } from "vue"

import { editor } from "./"
import { context } from "./context"

import titleBar from "./sections/title-bar/index.vue"
import modeButtons from "./modes/buttons.vue"
import add from "./modes/add/index.vue"
import edit from "./modes/edit/index.vue"
import remove from "./modes/remove/index.vue"
import clone from "./modes/clone/index.vue"
import move from "./modes/drag-drop/move.vue"
import copy from "./modes/drag-drop/copy.vue"
import editJson from "./modes/edit-json/index.vue"
import editNodeSchema from "./modes/edit-node-schema/index.vue"

import revisionsButtons from "./revisions/index.vue"

let handle = ref()

let container = ref()

let uxContainer = ref()

context.provide.uxContainer( uxContainer )

let modePanels = {
    add, 
    edit,
    remove,
    clone,
    move,
    copy,
    "edit json" : editJson,
    "edit node schema": editNodeSchema
}

let selectedModePanel = computed( () =>  modePanels[editor.mode] ?? modePanels['edit'] )

</script>
<style lang='scss'>

.pockets-node-tree-editor {
    
    z-index: 10;
    display: grid;
    grid-template-rows: min-content auto; 
    
    width: 25%;
    min-width: 400px;
    max-width:75vw;
    
    height: 100%;
    min-height: 300px;
    max-height: 95vh;

    bottom: 10px;
    right: 10px;
   
    .panel-container {
        overflow-y: scroll;
        overscroll-behavior: contain;
        &::-webkit-scrollbar {
            width: 0px;
        }
    }
    
    .drag-handle {
        cursor: grab;
    }

    label {
        color: var(--bs-primary-dk);
        font-weight:800;
    }

}
</style>