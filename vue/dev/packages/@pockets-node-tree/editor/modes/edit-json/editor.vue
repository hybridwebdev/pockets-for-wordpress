<template lang="pug">

pockets-ux-json-editor( 
    v-bind="editorProps" 
    :key='editor.active.paths.path'
    v-model='modelValue'
    @hasJSON='hasJSON'
)
</template>
<script lang="ts" setup>

import { computed, ref, watch } from "vue"

import { editor } from "@pockets-node-tree"

import { $pockets } from "@pockets-core"
import { useClipboard } from '@vueuse/core'

const { copy  } = useClipboard(  { legacy: true } )

let applyChanges = () => {

    if( !isValid.value ) {
        return $pockets.toast.error( "Invalid data" )
    }
    
    editor.active.hydrate.activeWith( modelValue.value )

}

/**
    Stores temp state of editor
*/
let modelValue = ref( false )

/**
    Taking copy of node and using it as a buffer that gets
    pushed up when applyChanges is fired.
*/
watch( () => editor.active.node, () => {
    modelValue.value = { ...editor.active.node }
}, { deep: true, immediate: true } )

let isValid = ref( true ) 

let hasJSON = json => isValid.value = json === false ? false : true

let editorProps = computed( () => {

    return {
         
        onRenderMenu: menuItems => {

            return menuItems.filter(e => {

                if (
                    [ 'separator', 'space' ]
                        .includes(e.type)
                    ||
                    [ 'table', 'tree', 'text' ]
                        .includes(e.text ?? "")
                    ||
                    [ 
                        'jse-transform', 
                        'jse-sort', 
                        'jse-contextmenu', 
                        'jse-search', 
                        "jse-space" 
                    ]
                        .includes(e.className ?? "")
                ) return false

                return true

            } ).concat( [

                {
                    type: 'separator',
                },
                {
                    title: "Copy",
                    onClick: () => {
                        copy( JSON.stringify( modelValue.value, null, 4 ) )
                        $pockets.toast.success("Copied to clipboard")
                    },
                    text: "Copy",
                    disabled: !isValid.value
                },
                {
                    title: "Applies changes and then re-hydrates node.",
                    onClick: applyChanges,
                    text: "Apply Changes",
                    disabled: !isValid.value
                },
                
            ] )
            
        },

    } 
    
} )

</script>
