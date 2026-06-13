<template>

    <div class='flex-fill grid columns-1 gap-2'>
    
        <div 
            v-if='!editor.active' 
            class='p-2 fw-8 text-center'
        >
            Select a node to edit.
        </div>
        
        <div v-if='editor.active && filteredFields.length!=0'>
            
            <Teleport :to="uxContainer" >
                <div 
                    class='d-flex flex-wrap p-0 bg-accent-dk border-bottom border-5 border-accent-lt position-sticky top-0'
                    style="z-index: 1" 
                >
                        <button 
                            v-for='group in filteredGroups' 
                            class='btn btn-accent-dk fw-8 border-0 rounded-0 py-half px-2'
                            @click='activeGroup = group'
                            :class='{ active: activeGroup == group }'
                        >
                            {{group}}
                        </button>
                </div>
            </Teleport>

            <render-html
                :innerHTML='fieldsHtml' 
                :state='editor.active' 
                class='editor-content'
            />

        </div>
        
        <div 
            class="p-2"
            v-if='editor.active && filteredFields.length==0' 
        >
            <p 
                class='alert alert-danger fw-8 text-center'
            >
                This node cannot be edited
            </p>
        </div>

    </div>
</template>
<script lang='ts' setup>

import { watch, ref, computed } from "vue"

import { editor } from "@pockets-node-tree"
import { context } from "@pockets-node-tree/editor/context"

let uxContainer = context.inject.uxContainer()

let filters = {
    group: (node) => node.group == activeGroup.value
}

let activeGroup = ref( false )

let filteredFields = computed( () => {

    let filtered = editor.active.editFields.filter( filters.group )

    return filtered.sort( (a, b ) => {
        let { priority: $a = 10 } = a
        let { priority: $b = 10 } = b
        return $a - $b
    } )

} )

let fieldsHtml = computed( () => filteredFields.value.reduce( ( acc, e ) => acc+e.content, '' ) )

let filteredGroups = computed( () => {
    if(!editor.active.editFields) return []
    return editor.active.editFields
        .map( e => e.group )
        .filter( ( value, index, self )  => self.indexOf( value ) === index)
        .sort( ( a:any, b:any ) => a.localeCompare( b ) )
        
} )

watch( () => filteredGroups.value, () => {

    if(
        filteredGroups.value.includes(activeGroup.value)
        && activeGroup.value
    )  return;

    if(filteredGroups.value.length == 0) {
        activeGroup.value = false
        return;
    }

    activeGroup.value = filteredGroups.value[0]

}, { immediate: true } )

</script>