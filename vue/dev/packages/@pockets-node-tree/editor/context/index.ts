// @ts-nocheck
import { InjectionKey, ShallowRef, provide } from "vue"
import { injectStrict } from "@pockets-core/utils/inject-strict"

let uxContainer: InjectionKey< any > = Symbol('pockets-node-tree-editor-ux-container')

export let context = {
    inject: {
        uxContainer: ( defaultValue ) => injectStrict( uxContainer, defaultValue ),
    },
    provide: {
        uxContainer: (...args) =>  provide(uxContainer, ...args)
    }
}
