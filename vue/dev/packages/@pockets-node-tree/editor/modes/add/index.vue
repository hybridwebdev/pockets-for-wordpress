<template>
<div class="p-2">
    <div 
        v-if='!editor.active'
        class='fw-8 text-center'
    >
        Select a node to add to.
    </div>
    <p 
        v-if="editor.active && !canAddTo"
        class='alert alert-danger fw-8 text-center'
    >
        Elements cannot be added to this node
    </p>
    <div 
        v-if='editor.active && canAddTo'
    >

        <div v-show='!selected' class='gap-1 grid columns-1'>
            
            <div class='text-center col-12 fw-8'>
                Select An element
            </div>
            
            <pockets-node-tree-node-selector v-model:selected='selected'/>

        </div>

        <div v-if='selected' class='d-flex align-items-center flex-wrap gap-1'>

            <span 
                class='col-12 text-center fw-8'
            >
                Select A location to add 
                <span class='text-accent-dk fw-8'>
                    {{selected.title}}
                </span>
            </span>
            <div class='grid columns-3 col-12 gap-2'>
                <nodePlacement 
                    :api='editor.active' 
                    @before='confirm("before")'
                    @after='confirm("after")'
                    @inside='confirm("inside")'
                /> 
            </div>

            <div class='col-12 d-flex'>
                <button 
                    @click='selected = false'
                    class='mx-auto btn btn-outline-danger px-8 py-2 fw-8'
                    v-tooltip='"Cancel placing element"'
                >
                    CANCEL
                </button>
            </div>

        </div>
    </div>
</div>    
</template>
<script lang='ts' setup>
import { $pockets } from "@pockets-core/"
import { ref, computed } from "vue"
import pocketsNodeTreeNodeSelector from "@pockets-node-tree/editor/sections/node-list/node-selector.vue"
import nodePlacement from "@pockets-node-tree/editor/sections/node-placement/index.vue"

import { editor } from "@pockets-node-tree"

let selected = ref(false)

let createCopy = async(node) => {
    
    editor.busy = true
    
    try {
        return await $pockets.crud('node-tree/node').init( node ).read( [ 'initialize:<=' ] )
    } catch(e){
        $pockets.toast.error(e.message)
        return Promise.reject()
    } finally {
        editor.busy = false
    }

}

let confirm = async (location) => {
    let copy = await createCopy(selected.value.node)
    selected.value = false
    if(!copy) {
        return;
    }
    let fn = editor.active.add[location] ?? false
    if(typeof fn != 'function') {
        return;
    }
    let node = fn(copy)
    if(node) activateNewNode(node)
}
let activateNewNode = (node) => {
    editor.active = editor.active.getNodeApi(node)
}

let canAddTo = computed(() => {
    if(
        editor.active
        &&
        (
            editor.active.add.before
            ||
            editor.active.add.inside
            ||
            editor.active.add.after
        )
    ) {
        return true
    }
    return false
})
</script>