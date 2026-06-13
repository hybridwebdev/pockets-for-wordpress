import type { Editor } from '@tiptap/core'
import { isNodeSelection } from '@tiptap/core'

import { onMounted, onUnmounted, } from "vue"

import type { nodeSchema } from "@pockets-tip-tap"

export let selectionNode = ( editor: Editor ) => {

  let updateHandler = _ => {
    editor.$editorApi.selection.node = getSelectedNode(editor)
  }

  onMounted( () => editor.on('transaction', updateHandler ) )

  onUnmounted( () => editor.off('transaction', updateHandler ) )
  
}

let getSelectedNode = ( editor:Editor ) => {

  let { selection } = editor.state
  let { view } = editor
  let node;
  let pos;

  if(selection.$from.depth === 0) {
    return false
  }

  if( isNodeSelection(selection) ) {
      node = selection.node
      pos = selection.$anchor.pos
  }
  if( !isNodeSelection(selection) ) {
    node = selection.$head.parent
    pos = selection.$from.before(selection.$from.depth)
  }
  
  let props = new Proxy(node.attrs, {
    set: (target, key: string, value) => {
      view.dispatch( view.state.tr.setNodeAttribute(pos, key, value) )
      target[key] = value
      return true
    },
    get: (target, key) =>  target[key],
  })
  
  let textStyle = new Proxy({}, {
    set: (target, key: string, v: string) => editor.chain().setTextStyle( { [key]: v } ).run(),
    get: (target, key: any) => {
      let v = editor.getAttributes('textStyle')[key]
      if(v && v.length>0) return v.toString()
    },
  })

  let { name } = node.type

  let nodeSchemas = editor.$editorApi.nodeSchemas

  let nodeSchema = nodeSchemas.find((schema:nodeSchema) => schema.name == name ) ?? false

  return {
    props,
    nodeSchema,
    textStyle
  }

}