// @ts-nocheck
import { InjectionKey, ShallowRef, provide } from "vue"
import { injectStrict } from "@pockets-core/utils/inject-strict"
import type { api } from "../"
let drawerApi: InjectionKey< any > = Symbol('pockets-ux-drawer-api')

export let context = {
    inject: {
        drawerApi: (fallback) => injectStrict( drawerApi, fallback ),
    },
    provide: {
        drawerApi: (...args) => provide( drawerApi, ...args ),
    }
}
 