//@ts-nocheck

import { inject, ref, computed } from "vue"
import { editor } from "@pockets-node-tree"
import { useVModel } from '@vueuse/core'


export let setup = (props, { emit } )  => { 

    let filterText = ref('')
    
    let nodeList = computed(() => {
        return Object.values( editor.nodes.list ).filter( (e) => {
            if(filterText.value == '') return true
            if( e.title.toLowerCase().includes( filterText.value.toLowerCase() ) ) {
                return true
            }
            if( e.group.toLowerCase().includes( filterText.value.toLowerCase() ) ) {
                return true
            }
        }).sort((a, b) => a.title.localeCompare( b.title ) )
    })

    let selectedModel = useVModel(props, 'selected', emit)
    
    let select = (node) => {
        selectedModel.value = node
    }

    let isSelected = (node) => {
        return selectedModel && node.title == selectedModel.title ? "active" : ""
    }
    
    return { 
        filterText,
        nodeList,
        selectedModel, 
        select,
        isSelected,
        displayMode: computed( () => editor.options.nodeList.display),
        changeMode: () => {
            editor.options.nodeList.display = editor.options.nodeList.display == 'list' ? 'grouped' : 'list'
        }
    }

}
export let props ={
    selected: {
        type: [Boolean, Object, String],
        required: true
    }
}