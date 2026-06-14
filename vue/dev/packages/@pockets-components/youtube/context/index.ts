// @ts-nocheck
import { InjectionKey, ShallowRef, provide, reactive, computed } from "vue"
import { injectStrict } from "@pockets-core/utils/inject-strict"
import type { api } from "../"
let playerApi: InjectionKey< any > = Symbol('pockets-youtube-player-api')
let playerRef: InjectionKey< any > = Symbol('pockets-youtube-player-ref')

import emitter from "tiny-emitter"

export let context = {
    inject: {
        playerApi: (fallback) => injectStrict( playerApi, fallback, true ),
        playerRef: (fallback) => injectStrict( playerRef, fallback ) 
    },
    provide: {
        playerApi: (...args) => provide( playerApi, ...args ),
        playerRef: (...args) => provide( playerRef, ...args) 
    }
}

type $interface = {
    set: {
        start?: number
        end?: number
        current?: number
        duration?: number
    }
}

export let usePlayerApi = ( providedBy: string ) => {
    
    let playerApi = {
        providedBy,
        event: new emitter(),
        state: reactive({
            ready: false, 
            status: "unstarted",
            /**
                Fullscreen is set by the player when it instantiates.
                It is the result of vueuses useFullscreen method.
            */
            fullscreen: null,
            isFullscreen: computed(() => {
                return playerApi.state.fullscreen && playerApi.state.fullscreen.isFullscreen
            }),
            time: {
                current: 0,
                start: 0,
                end: 0,
                duration: 0,
                remaining: computed(() => {
                    return playerApi.state.time.limits.end - playerApi.state.time.current
                }),
                limits: computed(() => {

                    let { start, end, duration } = playerApi.state.time
                    
                    let limits = {
                        start,
                        end: !end || end == 0 ? duration : end,
                    }
                    
                    limits.seekEnd = limits.end - 2
                    limits.seekStart = limits.start

                    return limits
                    
                }),
                set: ( o:$interface['set'] = {} ) => {
                 
                    Object.assign( playerApi.state.time, {
                        current: o.start ?? 0,
                        duration: o.end ?? 0,
                        start: o.start ?? 0,
                        end: o.end ?? 0,
                    } )

                },

            }
        }),
        action: ( ...args ) => playerApi.event.emit( "player.action", ...args )
    }
    
    return playerApi

}