
import { ref, computed, watch } from "vue"
import { injectEditor } from "@pockets-tip-tap"
import { onClickOutside } from '@vueuse/core'

export let setup = () => {

    let container = ref()
    let handle = ref()

    let editor = injectEditor()

    let shown = computed( () => {
        if( 
            !editor.$editorApi.focused 
            ||
            !editor.$editorApi.config.editable
        ) {
            return false
        }
        if( editor.$editorApi.selection.node ) return true
    } )
     
    onClickOutside( editor.view.dom, () => {
        editor.$editorApi.focused = false
    }, {
        ignore: [ container, '.v-popper__popper', '.pockets-node-tree-editor'],
        capture: true
    } )
    
    return {
        shown,
        container,
        handle
    }

}