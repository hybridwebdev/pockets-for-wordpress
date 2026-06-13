<template lang="pug">
div( 
    class='bg-accent-dk d-flex align-items-center text-white border-bottom border-5 border-accent-lt'
)
    div( v-show='editor.show' class='d-flex flex-grow-1' )
        button( 
            class='fa-solid fa-layer-group btn border-0 btn-accent-dk fw-8 p-half px-1 rounded-0'
            v-tooltip='"Toggle showing all node interfaces"'
            v-if='editor.show'
            @click='toggleShowAll'
            :class="{ active: editor.options.nodeFacades.show =='all'}"
        )
        nodeTraverse()
        slot()
    
    div( class='ms-auto gap-1 d-flex' )
        button(
            class='fa fa-save btn border-0 btn-accent-dk fw-8 p-half rounded-0 px-1'
            v-tooltip='"Save"'
            v-if='editor.show'
            @click='editor.save'
        )
</template>
<script lang='ts' setup>
import { editor } from "@pockets-node-tree/editor"
import nodeTraverse from "@pockets-node-tree/editor/sections/node-traverse/index.vue"
let toggleShowAll =() => {
    let { show } =  editor.options.nodeFacades
    editor.options.nodeFacades.show = show == "all" ? "none" : "all"
}
</script>