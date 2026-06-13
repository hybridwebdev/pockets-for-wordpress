// @ts-nocheck
import { InjectionKey, ShallowRef, provide } from "vue"
import { injectStrict } from "@pockets-core/utils/inject-strict"

let editor: InjectionKey< any > = Symbol('pockets-crud-editor')
let query: InjectionKey< any > = Symbol('pockets-crud-editor-query')

export let context = {
    inject: {
        editor: () => injectStrict( editor ),
        query: () => injectStrict( query ),
    },
    provide: {
        editor: (...args) => provide( editor, ...args ),
        query: (...args) => provide( query, ...args ),
    }
}
