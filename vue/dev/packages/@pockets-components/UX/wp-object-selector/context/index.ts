// @ts-nocheck
import { InjectionKey, provide } from "vue"
import { injectStrict } from "@pockets-core/utils/inject-strict"

let api: InjectionKey<any> = Symbol( 'wp-object-selector' )

export let context = {
    inject: {
        api: () : api => injectStrict( api ),
    },
    provide: {
        api: (...args) => provide< api >( api, ...args ),
    },
}

 