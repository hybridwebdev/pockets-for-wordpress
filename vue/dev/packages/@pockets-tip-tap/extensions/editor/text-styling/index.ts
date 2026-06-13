// @ts-nocheck
import '@tiptap/extension-text-style'
import { Extension } from '@tiptap/core'

type property = {
  [key: string]: string | null
}

type propertyDef = {
  key: string
}

declare module '@tiptap/core' {
  interface Commands<ReturnType> {
    TextStyle: {
      setTextStyle: (property: property) => any
    }
  }
}

let styleExtension = (propertyDef: propertyDef) => {
  let { key, styleName } = propertyDef
  return {
    types: ['textStyle'],
    attributes: {
      [key]: {
        default: null,
        parseHTML: element => element.style[key],
        renderHTML: attributes => {
          if (!attributes[key]) return {}
          return {
            style: `${key}: ${attributes[key]}`,
          }
        },
      },
    },
  }
}

export default Extension.create({
  name: 'text-styling',
  addCommands: () => ({
    setTextStyle: (o: property) => ({ chain }) => chain().setMark('textStyle', o).removeEmptyTextStyle().run(),
  }),
  addGlobalAttributes: () => [
    
    styleExtension( { key: "background-color" }),
    styleExtension( { key: "color" } ),
    styleExtension( { key: "font-size" } ),  
    styleExtension( { key: "font-family" } ),
    styleExtension( { key: "font-weight" } ),
    styleExtension( { key: "font-style" } ),  
    
  ]
})
  