<template>
<base-editor 
    v-bind="props" 
    :onChange="onChange"
    :content="content"
    :onRenderMenu="onRenderMenuFn"
/>
</template>
<script setup lang="ts">
/*
    @component-description
    An editor that allows you to edit JSON, with basic realtime validation and error highlighting.
*/
import { watch, ref, computed } from "vue"
import { $pockets } from "@pockets-core"
import { useClipboard  } from '@vueuse/core'

import type { props } from "./types/index.ts"
import baseEditor from "./index.vue"

let { copy } = useClipboard(  { legacy: true } )

let props = withDefaults( defineProps< props >(), {
    class: "jse-theme-dark",
    mode: 'text',
    navigationBar: true,
    askToFormat: false,
    ajvOptions: {
        useDefaults: 'empty',
        allowUnionTypes: true,
        allowMatchingProperties: true,
        allErrors: true,
        verbose: true,
        $data: true,
        strict: false
    },
} )

let onRenderMenuFn = computed( () => props.onRenderMenu ?? onRenderMenu )

let onRenderMenu = menuItems => {
    
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
        },
    ] )
        
}

let emit = defineEmits(
    [ 
        /**
            Fired when onChange event fires. Passes 
            current JSON which will be object, or false if not JSON.
        */
        'hasJSON' 
    ]
)
let modelValue = defineModel< object >( 'modelValue', {
    default: () => ( {} )
} )

let strToJson = ( text: string ) => {
    try {
        return JSON.parse( text )
    } catch(e) {
        return false
    }
}

/**
    Syncs text to json editor.
*/
let text = ref< string >("")

watch( [ modelValue.value ], () => {
    let json = JSON.stringify( modelValue.value, null, 4)
    if( json ) {
        text.value = json
    }
}, { immediate: true, deep: true } )

let content = {
    text: text.value
}

let onChange = ( newContent ) => {
    content.text = newContent.text
    let json = strToJson( newContent.text )
    emit( 'hasJSON', json )
    if( json ){
        modelValue.value = json
    }
}
 

</script>