import type { Editor } from '@tiptap/core'
import { isNodeSelection, posToDOMRect } from '@tiptap/core'
import { onUnmounted, onMounted } from "vue"

let getBoundingRect = (editor: Editor) => {
  
  let { state, view } = editor
  const { ranges } = state.selection
  const from = Math.min(...ranges.map(range => range.$from.pos))
  const to = Math.max(...ranges.map(range => range.$to.pos))
  
  if ( isNodeSelection(state.selection) ) {

    let node = view.nodeDOM(from) as HTMLElement

    const nodeViewWrapper = node.dataset.nodeViewWrapper ? node : node.querySelector('[data-node-view-wrapper]')

    if (nodeViewWrapper) {
      node = nodeViewWrapper.firstChild as HTMLElement
    }

    if (node) {
      return node.getBoundingClientRect()
    }

  }

  return posToDOMRect(view, from, to)

}

let getCoords = (editor: Editor) => {
  let { state, view } = editor
  let start = view.coordsAtPos(state.selection.from) 
  let end = view.coordsAtPos(state.selection.to)
  return { start, end }
}

export let selectionRect = (editor: Editor) => {

  let updateHandler = _ => {
    editor.$editorApi.selection.coords = getCoords(editor)
    editor.$editorApi.selection.rect = getBoundingRect(editor)
  }

  onMounted( () => {
    window.addEventListener("scroll", updateHandler)
    editor.on('transaction', updateHandler )
  } )

  onUnmounted( () => {
    window.removeEventListener("scroll", updateHandler)
    editor.off('transaction', updateHandler ) 
  } )

}