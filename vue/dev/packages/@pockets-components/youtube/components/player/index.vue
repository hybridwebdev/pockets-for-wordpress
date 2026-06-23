<template lang="pug">

div( 
    v-bind="$attrs" 
    class='pockets-youtube'
    :class='{ ["showing-placeholder"]: showPlaceholder }'
    @click.capture='triggerClick'
    ref='containerRef'
)
        
    player-component( 
        v-if='player.shouldLoad' 
        v-bind='props'
    )
    
    img(
        ref='playerRef'
        :style='playerStyle'             
        class='pockets-youtube-container'
        :src='image'
    )

    div(
        class='p-1 d-block placeholder-title'
        v-if='showPlaceholder && props.showOverlay'
    ) {{  placeholderTitle }}

    span( 
        class="placeholder-trigger text-white fs-24" 
        v-if='showPlaceholder && props.showOverlay'
    )
        i(
            class='fa-solid'
            :class='{ "fa-play play": !userTriggered, "fa-spinner fa-spin loading": userTriggered || (playerVars.autoplay && !playerState.ready) }'
        )

    slot( v-bind='playerApi' )

</template>
<script setup lang="ts">

import { useFullscreen } from '@vueuse/core'
import { computed, ref, watch, reactive, onUnmounted, onMounted, getCurrentInstance, isRef  } from "vue"

import type { playerVars } from "../../types/index.ts"

import { context, usePlayerApi } from "../../context/"
import { $YT } from "../../api-loader/index"
import playerComponent from "../base-player/index.vue"
import { usePropDefaults } from "../base-player/use-player"

let playerRef = ref('playerRef')
let containerRef = ref('containerRef')

defineOptions( {
    inheritAttrs: false,
} )

defineSlots<{
    /**
        Additional content within player container. Useful for using the player as a background video
        with content. 
        @binding {function( action: string< "play", "pause", "seekTo" >, ...args )} action Takes a string which is a player action. play / pause / seekTo. Additional arguments can be passed in and will be given to the coresponding action
        @binding {reactive<{ ready: < string | null > = null, status: < string > = "unstarted" }>} state Contains players state. Status is the current state of the player. Eg: buffering, playing. Can also be an error code. Ready is set when the player instance is initially ready via the players onReady hook. Will be set to null when player is reinitialized or destroyed.
        @binding { tiny emitter } event An event bus used for performing player actions. 
    */
    default: {}
}>()

let props = withDefaults( defineProps< playerVars >(), usePropDefaults() );

/**
    Prevent nested player instances from inheriting state. Instead, they should
    create their own. 
*/
let playerApi = context.inject.playerApi( () => false )

if( !playerApi || playerApi.providedBy == 'player') {
    playerApi = usePlayerApi( 'player' )
}

context.provide.playerApi( playerApi )

context.provide.playerRef( playerRef )

let { state: playerState } = playerApi 
 
let player = reactive({
 
    autoplay: computed( () => props.playerVars.autoplay ),

    shouldLoad: computed( () => {
        
        if( player.autoplay ) {
            return $YT.value
        }
        
        return userTriggered.value && $YT.value 

    } ),

})

let userTriggered  = ref( false ) 

let triggerClick = () => {
    userTriggered.value = true 
}
 
let image = computed( () => { 

    if( showPlaceholder.value ) {
        return `https://img.youtube.com/vi/${props.videoId}/hqdefault.jpg` 
    }

    return "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3C/svg%3E"

})

let playerStyle = computed( () => {
    
    return [
        {
            backgroundImage: `url(${image.value})`,
            backgroundPosition: "center",
            backgroundSize: "cover"
        },
        props.playerStyle,
    ]

} )

let showPlaceholder = computed( () => {

    if( playerState.ready && player.autoplay ) {
        return false
    }

    if( !props.showPlaceholder ) {
        return false
    }

    if( !userTriggered.value || !playerState.ready ) {
        return true
    }
    
} )

watch(
    () => {
        
        let res = Object.keys( props.playerVars )
            .filter( k => !['mute', 'rate'].includes( k ) )
            .map( k => props.playerVars[k] )
        
        res.concat([props.showPlaceholder, props.showOverlay])
        
        return res

    },
    () => userTriggered.value = false
)

watch( () => playerState.status, ( status ) => {

    if( status == 'queued' ) {
        playerApi.action('play')
    } 
 
})
 
let playWatcher = function( action ){

    if( action == 'play' && !userTriggered.value ) {
        userTriggered.value = true
    }

}

let currentInstance = getCurrentInstance()

let fullscreenRef = computed(() => {

     if (typeof props.containerRef === 'string') {

        if (props.containerRef.startsWith('.') || props.containerRef.startsWith('#')) {

            const el = currentInstance?.proxy?.$el as HTMLElement

            return el?.closest(props.containerRef) ?? el

        }

    }
    
    if( props.containerRef=='container' ) {
        return containerRef.value
    }

    if( props.containerRef == 'parent') {

        const el = currentInstance?.proxy?.$el as HTMLElement

        return el?.parentElement ?? el

    }

    if(props.containerRef instanceof Element ) {
        return props.containerRef
    }
    
    if( isRef( props.containerRef ) ) {
        return props.containerRef.value
    }
    /**
        Default when no other valid selection.
    */
    return containerRef.value

})

onMounted(() => {

    playerApi.event.on('player.action', playWatcher )
    
    playerState.fullscreen = useFullscreen( fullscreenRef.value )

})

onUnmounted(() => {
    
    playerApi.event.off('player.action', playWatcher )

})

</script>
<style lang="scss" scoped>
.pockets-youtube {
    
    display: grid;
     
    &.background-video {
        
        :deep() {

            > * {
                grid-area: 1/1;
            }

            .pockets-youtube-container {
                aspect-ratio: 16 / 9;
                width: 100%;
                height: 100%;
                max-width: 100%;
                min-width: 0;
            }
            
        }
 
    }

    .placeholder-title {
        color: var(--bs-white);
        grid-area:  1 / 1;
        cursor: pointer;
        background-color: rgba( var(--bs-grey-800-rgb ), .5 ); 
        z-index: 0;
    }

    .placeholder-trigger {
        padding: 5px 10px;
        background-color: #FF0000; 
        grid-area:  1 / 1;
        align-self: center;
        justify-self: center;
        z-index: 0;
        cursor: pointer;
    }

    .pockets-youtube-container {
        height: 100%;
        width: 100%;
        grid-area:  1 / 1;
        pointer-events: none;
        object-fit: cover;
    }
 
}
</style>