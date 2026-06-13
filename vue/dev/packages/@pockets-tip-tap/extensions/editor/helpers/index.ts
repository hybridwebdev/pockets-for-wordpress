import '@tiptap/extension-text-style'
import { Extension } from '@tiptap/core'

declare module '@tiptap/core' {
  interface Commands<ReturnType> {
    helpers: {
    }
  }
}

export default Extension.create({
  name: 'helpers',
  addCommands: () => ({
  }),
})
  