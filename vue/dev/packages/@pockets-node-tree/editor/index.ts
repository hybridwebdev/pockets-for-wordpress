import { reactive, computed, ref } from "vue"
import { $pockets } from "@pockets-core"
import type { TreeEditor } from "@pockets-node-tree"
import { trees, getNodeApi } from "@pockets-node-tree"

let useEditor = ($data) => {
    
    let { templates, ...rest } = $data
    
    let editor = reactive( {
        
        activeTree: false,

        show: false,
        mode: "edit",
        busy: false, 
        nodes: {
            list: [],
            fields: []
        },
        active: false,
        selectedNodes: [],
        save: async () => {
            
            editor.busy = true

            let results = await Promise.allSettled( Object.keys( trees.templates ).map( k => {
                return $pockets.crud('node-tree/root')
                    .init( JSON.parse( k ) )
                    .update( trees.templates[k], true )
            } ) )

            editor.busy = false

            let errors = results.filter( result => result.status === 'rejected' )
            let successes = results.filter( result => result.status === 'fulfilled' )

            if ( errors.length > 0 ) {
                $pockets.toast.error( `${errors.length} Templates not saved.` )
            }

            if ( successes.length > 0 ) {
                $pockets.toast.success( `${successes.length} Templates saved.` )
            }
            
        },
        modeLocked: computed( () => {
            if( editor.selectedNodes.length > 0 ) return true
        } ),
        ...rest,
    } )

    return editor

}

export let editor:TreeEditor = useEditor( $pockets.data.nodeTreeEditor )
