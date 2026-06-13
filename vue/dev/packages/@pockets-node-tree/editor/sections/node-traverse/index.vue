<template lang="pug">

button( 
    class='fa fa-folder-tree px-1 p-half btn btn-accent-dk text-white fw-8 border-0 rounded-0'
    
    v-tooltip='"Show Template view"'
    @click='show = !show'
    :class='{ active: show }'
)

Teleport(
    to='body'
)
    div(
        class='bg-black text-white mx-auto position-fixed shadow-menu pockets-node-tree-template-view'
        v-show='shouldShow'
        ref='container'
    )
        div(
            class='bg-accent-dk border-5 border-primary-dk border-bottom d-flex'
        )
        
            div(
                ref='handle'
                class=' p-1 flex-grow-1 align-items-center d-flex'
                role='button'
            ) Node Template View
            
            div(
                class='p-1 flex-grow-1'
            )
                select(
                    v-model="selectedTree"
                    class='form-control p-1 rounded-0'
                )
                    option(
                        v-for='source in treeSources'
                        :value='source.value'
                    ) {{ source.name }}

            button(
                class='fa fa-times ms-auto p-2 btn btn-accent-dk text-white'
                @click='show = false'
                v-tooltip='"Close"'
            )

        div(
            @wheel.capture.passive
            @scroll.capture
            class='scroll-panel'
        )
            div(
                v-if='!editor.active && selectedTree=="Automatic"'
                class='p-1'
            )
                | Select a node or template
            div(
                v-if='editor.active || selectedTree !="Automatic"'
            )
                root-loader(
                    v-bind='treeRoot'
                    :key='$rootKey'
                    v-if='treeRoot'
                )
    pockets-ux-movable( 
        v-if='shouldShow'
        :target='container' 
        :dragTarget='handle' 
        :draggable="true" 
        :useResizeObserver='true'
        :useMutationObserver='true'
        :resizable='true'
    )
</template>
<script lang='ts' setup>
import { ref, computed, watch} from 'vue'
import rootLoader from "@pockets-node-tree/root/data-tree/index.vue"
import { editor, trees } from "@pockets-node-tree"

let container = ref()
let handle = ref()

let show = ref( false )

let $rootKey = ref( Date.now() )

let shouldShow = computed( () => {
    if( !editor.show) { 
        return false;
    }
    return show.value 
} )

let selectedTree = ref( 'Automatic' )

let treeRoot = computed( () => {
    if(selectedTree.value == 'Automatic') {
        return editor.activeTree
    }
    return selectedTree.value
} )

watch( [show, selectedTree], () => $rootKey.value = Date.now() )

let treeSources = computed( () => {
    return [
        {
            name: "Automatic",
            value: "Automatic"
        },
        ...Object.keys( trees.templates )
        .sort( ( a, b ) => b.localeCompare( a ) )
        .map( ( templateKey: string ) => {
            let source = JSON.parse( templateKey )
            return {
                name: `${source.crud_resource.name}  - ${source.metaKey}`,
                value: {
                    source,
                    templateKey,
                    tag: "div"
                }
            } 
        } )
    ]
} )  

</script>
<style lang="scss">
.pockets-node-tree-template-view {
    display: grid;
    grid-template-rows: min-content auto; 
    width: 768px;
    min-width: 400px;
    max-width:75vw;
    height: 100%;
    min-height: 300px;
    max-height: 60vh;
    left: 0; 
    right: 0; 
    bottom: 0;
    z-index: 30; 
    .scroll-panel {
        overflow-y: scroll;
        overscroll-behavior: contain;
    }
}
</style>