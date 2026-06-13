import { reactive, computed } from "vue"
import { editor } from "@pockets-node-tree"
import { dragDrop } from "./api" 
export let setup = (props) => {
    let selectNode = () => {
        if(editor.active){
            editor.selectedNodes = [ editor.active ]
        }
    }
    
    let cancel = () => {
        editor.active = selected.value
        editor.selectedNodes = []
    }

    let selectedActiveSame = computed(() => {
        if(!api.selected || !editor.active) return false
        if(editor.active.paths.path == api.selected.paths.path) return true;
    })
    let selected = computed(() => editor.selectedNodes[0] ?? false )

    let confirm = (location) => {
        let node = api.adder.add[location]()
        if(editor.active) {
            editor.active = node
            editor.selectedNodes = []
        }
    }
    let api = reactive({
        cancel,
        confirm,
        selectedActiveSame,
        selectNode,
        adder: {
            add: computed( () => dragDrop( editor.active, selected.value, props.removeSelected ) )
        },
        selected,
        editor,
        canMoveOrCopy: computed(() => {

            if( !editor.active ) {
                return false
            }

            if( !editor.active.parent ) {
                return false
            }

            if(props.mode=='move') {
                if(!editor.active.move.self) {
                    return false
                }
            }

            if(props.mode=='copy') {
                if(!editor.active.clone.self) {
                    return false
                }
            }

            return true

        }),
        canTargetForDrop: computed(() => {
            
            if( !editor.active ) {
                return false
            }

            if( 
                !editor.active.add.before
                &&
                !editor.active.add.inside
                && 
                !editor.active.add.after 
            ) {
                return false
            }

            return true

        } )
    } )

    return api

}
