import { InjectionKey, inject } from "vue"
import { Editor } from "@tiptap/core"
export let injectEditorKey: InjectionKey<Editor> = Symbol('pockets-tiptap-editor-current-selection')

export let injectEditor = () => {
  let resolved = inject(injectEditorKey);
  if (!resolved) {
    throw new Error(`Could not resolve Injection`);
  }
  return resolved;
}
 