<template lang="pug">
div(
     class='fw-8 text-center p-2'
    v-if='!editor.active'
) Select a node to edit.
div(
    v-if='editor.active && canEdit'
    class='pockets-node-json-editor'
)
    render-editor(

    )
div(
    v-if='editor.active && !canEdit'
    class='p-2'
)
    p(
        class='alert alert-danger fw-8 text-center'
    ) This nodes data cannot be edited
</template>
<script setup lang="ts">
import { computed } from "vue"
import renderEditor from "./editor.vue"
import { editor } from "@pockets-node-tree"

let canEdit = computed(() => {
    if(
        editor.active.schema["can-edit-json"] === false
    ) {
        return false
    }
    if(
        editor.active.parent
        &&
        editor.active.parent.schema["can-edit-nodes-json"] === false
    ) {
        return false
    }
    return true
})
</script>
<style scoped lang="scss">
.pockets-node-json-editor {
    background: #333;;
    :deep() {
        .json-editor {
            .jse-separator {
                margin-left: auto !important;
                opacity: 0 !important;
            }
            .cm-scroller {
                //max-height: var(--panel-container-height);
            }
            .jse-menu{
                position: sticky;
                top: 0;
                z-index: 1;
            }
            .jse-status-bar {
                position: sticky;
                bottom: 0;
                z-index: 20;
            }
            .cm-gutters {
                display: none;
            }
        }
        
    }
}
</style>