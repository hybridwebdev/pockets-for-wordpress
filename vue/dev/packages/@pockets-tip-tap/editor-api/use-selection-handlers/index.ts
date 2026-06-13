import { Editor } from "@tiptap/core"

import { selectionRect } from "./selection-rect"
import { selectionNode } from "./selection-node"
import { selectionInfo } from "./selection-info"
/**
    This should be used on your root editor instance. It registers
    event listeners that modify the $editorApi state
*/
export let useSelectionHandlers = (editor: Editor) : void => {
    selectionNode( editor )
    selectionRect( editor )
    selectionInfo( editor )
} 