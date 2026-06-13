// @ts-nocheck
import { InjectionKey, ShallowRef, provide } from "vue"
import { injectStrict } from "@pockets-core/utils/inject-strict"

let container: InjectionKey< any > = Symbol('pockets-accordion-container')
let groupID: InjectionKey< any > = Symbol('pockets-accordion-ID')
let config: InjectionKey< any > = Symbol('pockets-accordion-config')

export let context = {
    inject: {
        groupID: () => injectStrict( groupID ),
        container: () => injectStrict( container ),
        config: () => injectStrict( config )
    },
    provide: {
        groupID: ( ID: any ) => provide( groupID, ID),
        container: (...args) => provide( container, ...args),
        config: (...args) =>  provide(config, ...args)
    }
}
