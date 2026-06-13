
import Placeholder from '@tiptap/extension-placeholder'
import TextStyle from '@tiptap/extension-text-style'
import Focus from "@tiptap/extension-focus"
import starterKit from "@tiptap/starter-kit"
import link from "@tiptap/extension-link"

import textStyling  from "./text-styling"
import attributes from './attributes'
import helpers from "./helpers"
export default [
    helpers,    
    TextStyle,
    textStyling,
    attributes,
    link.configure({
      openOnClick: 'whenNotEditable',
      HTMLAttributes: {
        rel: null,
        target: null,
      }
    }),
    starterKit.configure({
        dropcursor: {
            width: 5
        }
    }),
    Placeholder.configure({
        showOnlyCurrent: false,
        placeholder: 'Enter text here',
    }),
    Focus.configure({
      mode: "shallowest"
    }),
]