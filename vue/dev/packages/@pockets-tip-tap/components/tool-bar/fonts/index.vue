<template lang='pug'>
  
pockets-popper(
    :triggers="['click']"
    theme='generic-popper'
    :auto-hide='true'
    :delay='0'
    no-auto-focus
    placement='top'
    :handle-resize='true'
    v-if='show'
)
    button(
        class="fa-solid fa-font text-white btn btn-accent-dk p-1 col-12"
        v-tooltip='"Edit Font Style"'
    )
    template( #popper)
        div(
            class='bg-accent-dk p-1 border border-5 border-accent-lt text-white grid columns-3 gap-1'
        )
            label( class='grid columns-1 gap-1' ) 
                | Weight
                pockets-ux-font-weight( 
                    v-model="textStyle['font-weight']" 
                    class='form-control rounded-0 py-1 px-4' 
                )
            label( class='grid columns-1 gap-1' ) 
                | Style
                pockets-ux-font-style( v-model="textStyle['font-style']"  class='form-control rounded-0 py-1 px-4' )
            label( class='grid columns-1 gap-1' ) 
                | Family
                pockets-ux-font-family( v-model="textStyle['font-family']" class='form-control rounded-0 py-1 px-4' )

</template> 
<script lang='ts' setup>
import { injectEditor } from "@pockets-tip-tap"
import { computed } from "vue"

let editor = injectEditor()
let show = computed(() =>  editor.$editorApi.hasField('text-styling') && editor.$editorApi.hasTextSelection )
let { textStyle } = editor.$editorApi.selection.node


</script>