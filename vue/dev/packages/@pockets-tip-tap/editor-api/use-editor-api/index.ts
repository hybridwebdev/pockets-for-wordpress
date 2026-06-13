import type { Editor } from "@tiptap/core"
import { reactive } from "vue"
import { nodeSchemas } from "./node-schemas"

import type { editorApi } from "@pockets-tip-tap"

export let useCreateEditorApi = (editor: Editor, config) => {
    
    editor.$editorApi = reactive<editorApi>({

        focused: false,
        config,
        get hasTextSelection() {
            return editor.$editorApi.selection.info.hasTextSelection
        },
        hasField: (ID: string) => {
            return  editor.$editorApi.selection.node.nodeSchema && editor.$editorApi.selection.node.nodeSchema.fields.includes(ID)
        },

        nodeSchemas,

        selection: {
            rect: false,
            node: false,
            info: false,
        }

    } )

}