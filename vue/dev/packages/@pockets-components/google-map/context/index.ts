// @ts-nocheck
import { InjectionKey, ShallowRef, provide } from "vue"
import { injectStrict } from "@pockets-core/utils/inject-strict"
import type { google } from "../"

let maps: InjectionKey< ShallowRef< typeof google.maps | undefined > > = Symbol('google-map-api')
let map: InjectionKey< ShallowRef< google.maps.Map | undefined > > = Symbol('google-map-instance')

export let context = {
    inject: {
        maps: () => injectStrict( maps ),
        map: () => injectStrict( map ),
    },
    provide: {
        maps: (...args) => provide( maps, ...args ),
        map: (...args) => provide( map, ...args ),
    }
}
