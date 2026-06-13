// @ts-nocheck
import { InjectionKey, provide } from "vue"
import { injectStrict } from "@pockets-core/utils/inject-strict"

let config: InjectionKey< any > = Symbol('pockets-ux-bootstrap-interface')

export let context = {
    inject: {
        config: ( defaultValue ) => injectStrict( config, defaultValue ),
    },
    provide: {
        config: (...args) =>  provide(config, ...args)
    }
}
