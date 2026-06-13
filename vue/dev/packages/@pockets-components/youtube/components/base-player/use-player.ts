// @ts-nocheck
import { reactive, watch, onMounted, onUnmounted, watchEffect, ref } from 'vue'
import { useRafFn } from '@vueuse/core'
import { $YT } from '../../api-loader/'
import { context } from "../../context/"

import { documentVisibilityInterval } from "@pockets-core/utils/use-visibility-interval"

export let usePropDefaults = () => ( {
    playerVars: {
        start: 0,
        end: null,
        controls: 1,
        modestbranding: 1, 
        showinfo: 0,
        rate: 1,
        mute: 0
    }, 
    placeholderTitle: '',
    volume: 0,
    showPlaceholder: true,
    showOverlay: true,
    containerRef: "container"
    
} )

export function usePlayer( props ) {

    let { event: $event, state: playerState } = context.inject.playerApi()

    let playerRef = context.inject.playerRef()
    
    const player = reactive<any>({
 
        instance: null, 
        /**
            Timer is used to sync the videos current time with state. It uses a RAF as a priority, 
            but fallsback to an interval timer when the document isn't visible, eg when in another tab.
        */  
        timer: {
            
            pause: () => {
                player.timer.RAF.pause() 
                player.timer.fallback.pause()
            }, 
            resume: () => {
                player.timer.RAF.resume() 
                player.timer.fallback.resume()
            },
            boundaryCheck: () => {

                if ( playerState.time.current < parseFloat( props.playerVars.start ) ) {
                    player.action( 'seekTo', props.playerVars.start, false )
                }

                if ( props.playerVars.end && playerState.time.current >= parseFloat( props.playerVars.end ) ) {
                    player.action( 'seekTo', props.playerVars.start, false )
                }
                
            },
            callback: () => {
                
                if( playerState.ready && !playerState.time.duration ) {
                    playerState.time.duration = player.instance.getDuration()  
                }

                if ( playerState.ready && playerState.status == 'playing' ) { 
                    playerState.time.current = player.instance.getCurrentTime()
                }
                
                player.timer.boundaryCheck()

            },
            
            fallback: documentVisibilityInterval( () => player.timer.callback(), 500 ),
            RAF: useRafFn( () => player.timer.callback(), { fpsLimit: 1, immediate: false } ),

        },

        events: {

            onReady: () => {

                playerState.ready = true
                playerState.status = "player-ready" 

            },

            onStateChange: (event: any) => { 

                const map: any = {
                    "-1": "unstarted",
                    0: "ended",
                    1: "playing",
                    2: "paused",
                    3: "buffering",
                    5: "queued",
                    default: "unknown-event"
                }

                playerState.status = map[event.data] ?? map.default

            },

            onError: (event: any) => {

                const map: any = {
                    2: 'error-video-not-found',
                    100: "error-video-not-found",
                    101: "error-private-video",
                    150: "error-age-restricted",
                    default: "error-unknown-error"
                }

                playerState.status = map[event.data] ?? map.default

            } 
 
        }, 
 
        init: () => { 
            
            playerState.ready = false

            player.instance = new $YT.value.Player( playerRef.value, {  
                ...props, 
                /**
                    Autoplaying is handled manually
                */
                playerVars: { ...props.playerVars, autoplay: 0 },
                events: player.events
            } )
 
        }, 

        destroy: () => {
            
            playerState.ready = false 

            if( player.instance ) {
                player.instance.destroy()
            } 

        },

        reload: () => {
            player.destroy()  
            player.init()
        },
        
        /**
            Used to perform player actions
        */ 
        action: ( action, ...rest ) => {
            
            let map = {
                play: () => {
                    if( !player.instance.playVideo ) {
                        return;
                    }
                    player.instance.playVideo()
                },
                pause: () => {
                    if( !player.instance.pauseVideo ) {
                        return;
                    }
                    player.instance.pauseVideo() 
                },
                seekTo: ( time: float, applyClamp: bool = true ) => {

                    if( !player.instance.seekTo ) {
                        return;
                    }
                    /**
                        Prevent seek from going past end of video 
                        because this would cause side effects like ending
                        the video. Can bypass this by passing applyClamp = false. 
                        Internal methods do this.
                    */
                    
                    if( applyClamp ) {

                        let { seekEnd:max } = playerState.time.limits

                        if( time > max ) {
                            time = max
                        }

                    }

                    playerState.time.current = time

                    player.instance.seekTo( time )

                },

            }
            
            let cb = map[action] ?? function() {}

            cb( ...rest )

        }

    })
    
    /**
        When these props change, force player to reinitialize.
    */
    watch(
        () => {
            let res = Object.keys( props.playerVars )
                .filter( k => !['mute', 'rate'].includes( k ) )
                .map( k => props.playerVars[k] )
            
            res = res.concat( [ props.width, props.height, props.playerStyle ] )
            return res
        },
        player.reload, 
        { flush: "post" } 
    )

    /**
        Here is where autoplay is handled. You can also watch player.status for the queued
        action if you wish to trigger manually.
    */
    watchEffect( () => {
 
        if( playerState.ready && player.instance ) {
            
            let cb = props.playerVars.autoplay ? "loadVideoById" : "cueVideoById"

            playerState.status = cb

            if( typeof  player.instance[cb] !='function' ) {
                return;
            }

            player.instance[cb]({
                videoId: props.videoId, 
                startSeconds: props.playerVars.start, 
                endSeconds: props.playerVars.end, 
            } )
 
        } 

    }, { flush: "post" }  ) 

    /** 
        Watchers to trigger player changes
    */
    watchEffect( () => {
        if( playerState.ready && player.instance.setPlaybackRate ) { 
            player.instance.setPlaybackRate( props.playerVars.rate ) 
        }
    }, { flush: "post" }  )

    watchEffect( () => {
        if( playerState.ready && player.instance.mute ) {
            if ( props.playerVars.mute == 1 ) {
                player.instance.mute()
            } 
            if ( props.playerVars.mute == 0 ) {
                player.instance.unMute()
            }
        }
    }, { flush: "post" }  )
    
    watchEffect( () => {
        if( playerState.ready && player.instance.setVolume ) {
            player.instance.setVolume( props.volume )
        }
    }, { flush: "post" } ) 
    
    /**
        Will cause video to loop if looping is set when playyback ends
    */
    watchEffect( () => {

        if ( playerState.ready && ['ended' ].includes( playerState.status ) && props.playerVars.loop ) {
            player.action( 'seekTo', props.playerVars.start, false )
        }

    }, { flush: "post" } )
 
    /**
        This is basically fired on initi/destroy.
        Does cleanup.
    */
    watchEffect( () => {
        
        if( playerState.ready || !playerState.ready ) {
        
            playerState.time.set( {
                start: props.playerVars.start ?? 0,
                end:  props.playerVars.end ?? 0,
            } )

        }

        if( playerState.ready ) { 

            player.timer.resume()
            

        }

        if( !playerState.ready ) {

            player.timer.pause()

        }  

    }, { flush: "post" } )  
 
    /**
        Mounting bindings
    */ 
    onMounted( () => {
        player.init()
        $event.on( 'player.action', player.action )
    } )

    onUnmounted( () => {
        player.destroy()
        $event.off( 'player.action', player.action )
    } )
 
}