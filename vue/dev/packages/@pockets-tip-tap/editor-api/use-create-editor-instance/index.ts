
import { extensions, injectEditorKey, useSelectionHandlers, useCreateEditorApi } from "@pockets-tip-tap"

import { onUnmounted, provide, watch } from "vue"

import type { Ref } from 'vue'

import { Editor } from '@tiptap/vue-3'

export let useCreateEditorInstance = (content: Ref, config: Ref ) => {

  let editorConfig = {
    injectCSS: false,
    extensions,
    content: content.value,
    onUpdate: () => content.value = editor.getHTML(),
    autofocus: false,
  }

  let editor = new Editor(editorConfig)
  
  watch( 
    () => config.value, 
    () => editor.setOptions( config.value ), 
    { deep: true, immediate: true } 
  )

  provide( injectEditorKey, editor )

  useCreateEditorApi( editor, config )

  useSelectionHandlers(editor)
  
  onUnmounted( () => editor.destroy() )
  
  watch(content, (v) => {
    /**
      Syncs editor instances
    */
    if ( editor.getHTML() === v ) return
    editor.commands.setContent(v, false)
  } )

  return editor

}