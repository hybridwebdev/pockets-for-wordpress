import {
  isTextSelection,
  isNodeSelection,
} from '@tiptap/core'

import type { Editor } from '@tiptap/core'

import { 
  onMounted,
  onUnmounted,
} from "vue"

let getSelectionInfo = (editor: Editor) => {

    let { view, state } = editor
    let { selection } = state
    let { empty } = selection

    return {
        focused: view.hasFocus(),
        empty,
        isNodeSelection: isNodeSelection(selection),
        isTextSelection: isTextSelection(state.selection),
        hasTextSelection: isTextSelection(state.selection) && !empty
    }

}

export let selectionInfo = (editor: Editor) => {

  let updateHandler = _ => {
    editor.$editorApi.selection.info = getSelectionInfo(editor)
  }

  onMounted( () => editor.on('transaction', updateHandler ) )

  onUnmounted( () => editor.off('transaction', updateHandler ) )

}