// @ts-nocheck
import { InjectionKey, provide } from "vue"
import { injectStrict } from "@pockets-core/utils/inject-strict"

let api: InjectionKey< any > = Symbol('fancy-select')

export let context = {
    inject: {
        api: () => injectStrict( api )
    },
    provide: {
        api: (...args) =>  provide( api, ...args)
    }
}
