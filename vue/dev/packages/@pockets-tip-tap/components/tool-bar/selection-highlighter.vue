<template lang='pug'>
div( 
    class='bg-accent-dk text-white position-fixed fa fa-chevron-down fs-12 shadow-menu p-1 rounded-0 border border-2 border-accent-lt'
    :style='anchors.start'
    v-if='shown'
)
div( 
    class='bg-accent-dk text-white position-fixed fa fa-chevron-up fs-12 shadow-menu p-1 rounded-0 border border-2 border-accent-lt'
    :style='anchors.end'
    v-if='shown'
)
</template>
<script lang='ts' setup>
import { injectEditor } from "@pockets-tip-tap"
import { computed } from "vue"

let editor  = injectEditor()

let anchors = computed( () => {
    
    let { coords } = editor.$editorApi.selection 

    let width = 36;

    return {
        start: {
            top: ( coords.start.top -30 ) + "px",
            left: ( coords.start.left - 36 ) + "px",
            zIndex: 20
        },
        end: {
            left: ( coords.end.left) + "px",
            top: ( coords.end.bottom  ) + "px",
            zIndex: 20
        }
    }

} )

let shown = computed( () => {
    
    if( 
        !editor.$editorApi.focused 
        ||
        !editor.$editorApi.config.editable
    ) {
        return false
    }
    
    if( editor.$editorApi.hasTextSelection ) {
        return true
    }

} )

</script>
