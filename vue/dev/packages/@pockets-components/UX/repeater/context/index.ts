// @ts-nocheck
import { InjectionKey, provide } from "vue"
import { injectStrict } from "@pockets-core/utils/inject-strict"
import type { VNode } from "vue"
import type { Api } from "../types"

let api: InjectionKey<Api> = Symbol( 'pockets-ux-repeater-api' )
let slots: InjectionKey< Array< VNode > > = Symbol( 'pockets-ux-repeater-slots' )
let loader: InjectionKey<Api> = Symbol( 'pockets-ux-repeater-api' )

export let context = {
    
    inject: {
        api: () : Api => injectStrict( api ),
        slots: () : Array< VNode > => injectStrict( slots ),
        slot: ( key: string ) : VNode => {
            let templates = context.inject.slots()
            return ( props, { slots } ) => ( templates[key] ?? slots.default ).call( null, props )
        },
        loader: () => injectStrict( loader ),
    },

    provide: {
        api: (...args) => provide< Api >( api, ...args ),
        slots: (...args) => provide< Array< VNode > >( slots, ...args ),
        loader: (...args) => provide< loader >( loader, ...args ),
    },

}
