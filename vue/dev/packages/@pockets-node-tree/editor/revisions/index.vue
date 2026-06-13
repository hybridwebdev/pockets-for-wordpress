<template lang="pug">
button( 
    :disabled="!api.canUndo"
    @click="api.undo"
    class='fa-solid fa-rotate-left p-half px-1 btn border-0 btn-accent-dk fw-8 rounded-0'
    v-tooltip='"Undo revision"'
)
button( 
    :disabled="!api.canRedo"
    @click="api.redo"
    class='fa-solid fa-rotate-right p-half px-1 btn border-0 btn-accent-dk fw-8 rounded-0'
    v-tooltip='"Redo revision"'
)
</template>
<script setup>
import { useRevisions } from "@pockets-core/utils/observable-slim-revisions"
import { trees, editor } from "@pockets-node-tree"
import { $object } from "@pockets-core/utils"

let api = useRevisions( trees, {
    
    beforeRevisions: _ => {},

    afterRevisions: ( { $revisions, direction, revisions } ) => {
        let state = direction=='undo' ? $revisions[0] : revisions[0]
        let { editorPath } = state
        if( editorPath && editor.active ) {
            let node = $object.get( trees, editorPath )
            if( node ) {
                editor.active = editor.active.getNodeApi(node)
            }
        }
    },

    beforeTracker: revisisions => {
        return revisisions.map( revision => ( {
            ...revision,
            editorPath: editor?.active?.paths?.path ?? false
        } ) )
    }
    
} )

</script>
