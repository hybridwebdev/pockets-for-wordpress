// @ts-nocheck
import { InjectionKey, provide } from "vue"
import { injectStrict } from "@pockets-core/utils/inject-strict"

let routes: InjectionKey<any> = Symbol( 'pockets-documentation-routes' )
let story: InjectionKey<any> = Symbol( 'pockets-documentation-story' )
let demoState: InjectionKey<any> = Symbol( 'pockets-documentation-demo-state' )

/**
    Global config for documentation system
*/
let documentationConfig: InjectionKey<any> = Symbol( 'pockets-documentation-config' )

export let context = {
    
    inject: {
        routes: () : routes => injectStrict( routes ),
        story: () : story => injectStrict( story ),
        demoState: (fallback) => injectStrict( demoState, fallback ), 
        documentationConfig: (fallback) => injectStrict( documentationConfig, fallback )
    },

    provide: {
        routes: (...args) => provide< routes >( routes, ...args ),
        story: (...args) => provide< story >( story, ...args ),
        demoState: (...args) => provide< demoState >( demoState, ...args ),
        documentationConfig: (...args) => provide< documentationConfig >( documentationConfig, ...args ),
    },

}

 
