<template>
    <div
        v-bind='filteredAttrs'
    >
        <pockets-wysiwyg
            v-model='nodeApi.node.props.innerHTML' 
            :editorConfig="editorConfig"
        />
    </div>
</template>
<script>

import { computed, useAttrs } from "vue"
import { useInject } from "@pockets-node-tree/walker/injection-key"
import { editor } from "@pockets-node-tree"

let setup = _ => {
    
    let nodeApi =  useInject()

    let editorConfig = computed( () => {
        return {
            editable: !editor.modeLocked && editor.show,
        }
    } )

    let filteredAttrs = computed( () => {
        let { innerHTML,  ...rest } = useAttrs()
        return rest
    } )


    return {
        nodeApi,
        filteredAttrs,
        editor,
        editorConfig
    }

}

export default {
    setup,
    inheritAttrs: false,
}

</script>