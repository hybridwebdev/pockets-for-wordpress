// @ts-nocheck
import { InjectionKey, ShallowRef, provide } from "vue"
import { injectStrict } from "@pockets-core/utils/inject-strict"
import type { api } from "../"
let api: InjectionKey< api > = Symbol('pockets-ux-slider')
let slideWrapper: InjectionKey< api > = Symbol('pockets-ux-slider-slide-wrapper')

export let context = {
    inject: {
        api: () => injectStrict( api ),
        slideWrapper: ( fn:callable ) => injectStrict( slideWrapper, fn )
    },
    provide: {
        api: (...args) => provide( api, ...args ),
        slideWrapper: (...args) => provide( slideWrapper, ...args ),
    }
}
