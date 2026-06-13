<template lang="pug">
component( 
    class='pockets-slider'
    :is='tag'
    ref="container"
    :style='{ "--animate-interval": `${api.interval}ms`, "--animate-duration": `${api.duration}ms`}'
)   
    slot( v-bind='api' )
</template>

<script setup lang='ts'>

import { ref, onUnmounted, useSlots } from "vue"
import { useSwipe, reactiveComputed, useElementHover, useIntervalFn, useThrottleFn  } from '@vueuse/core'

import { rotateIndex } from "@pockets-core/utils/dot-prop/array"

import { context } from "../context"

import type { Direction, slideContainerProps, api as Api } from "../types"

let props = withDefaults( defineProps< slideContainerProps >(), {
    
    tag: 'div',

    interval: 2000,
    duration: 500,
    shiftCount: 1,
    direction: "right",
    pauseHovered: true,
    debounceRotation: true,
    
    slides: false,
    swipeable: true,
    name: "slide",
    autoRotate: true,
    index: 0

} )

/**
    Bound via v-model:index
*/
const index = defineModel<slideContainerProps['index']>('index', { default: 0 })

/**
    Bound via v-model:direction
*/
const currentDirection = defineModel<Direction>('direction', { default: "right" })

/**
    Setup data
*/

let container = ref< HTMLElement >()

let swiper = useSwipe( container, {
    passive: true,
    onSwipeEnd: ( evt, direction ) => props.swipeable === true ? api.rotate.direction( direction ) : false
} )

let isHovered = useElementHover( container )
 
let slots = useSlots()

/**
    Timer cannot be part of createApi because it needs to be set only once
*/
let timer = useIntervalFn( () => {

  if( !props.autoRotate ) {
    return;
  }
  if( isHovered.value === true && props.pauseHovered === true ) {
      return
  }
  if( api.isManuallyPaused === true ) {
      return
  }

  api.rotate.direction( props.direction )

}, () => props.interval, { immediate: true } )

/**
    Api helpers
*/

let reverseDirection = ( direction: Direction ): Direction => {
    switch (direction) {
        case "right": return "left"
        case "left": return "right"
        case "up": return "down"
        case "down": return "up"
        default: return direction
    }
}

let switchSlide = useThrottleFn( ( direction: Direction, count:number ) => {
    api.timer.pause()
    api.direction = direction
    api.index = rotateIndex( api.slides as [], api.index, Math.round( count ) ) 
    api.timer.resume()
}, () => props.debounceRotation === true ? props.duration : 0 )

let createApi = () => {

    let mode:Api['mode'] = Array.isArray( props.slides ) ? "data" : "template" 

    let slides = ()  => {
        if( mode == 'template' ) {
            return slots?.slides?.call( null ) ?? [] 
        }
        return props.slides ?? []
    }

    return {
        isManuallyPaused: false,

        get index() {
            return index.value
        },
        set index(val: number) {
            index.value = val
        },

        interval: props.interval,

        get direction() {
            return currentDirection.value
        },
        set direction(val: Direction) {
            currentDirection.value = val
        },

        duration: props.duration,
        name: props.name,
        
        pause: () => api.isManuallyPaused = true,
        resume: () => api.isManuallyPaused = false,

        slides: slides(),
        mode,
        timer,

        rotate: {
            to: ( index: number ) => {

                if(index === api.index ) {
                    return 
                }

                let $index = index - api.index
                let direction = api.direction

                if (
                    (
                        direction === "right" && index < api.index
                    ) 
                    || 
                    (
                        direction === "left" && index > api.index
                    ) 
                    || 
                    (
                        direction === "up" && index > api.index
                    ) 
                    || 
                    (
                        direction === "down" && index < api.index
                    )
                ) {
                    direction = reverseDirection( direction )
                }

                switchSlide( direction, $index )
            },

            direction: ( direction: Direction, count:number = props.shiftCount ) => {
                let fn = api.rotate[direction] ?? false
                if( fn ) {
                    fn( count )
                }
            },

            up: ( count:number = props.shiftCount ) => switchSlide( "up", -count ),
            down: ( count:number = props.shiftCount ) => switchSlide( "down", count ),
            left: ( count:number = props.shiftCount ) => switchSlide( "left", -count ),
            right: ( count:number = props.shiftCount ) => switchSlide( "right", count ),
        },
    } 
    
}

defineSlots<{
    /**
        Provides interface for slider.
        @binding {array} slides List of provided slides. If using the #slides slot, it will be an array of the html elements in the slot.
        @binding {boolean} isManuallyPaused Flag that is set when pause/resume is called.
        @binding {function{ pause Pauses slider rotation.
        @binding {function} resume Resumes slider rotation.
        @binding {object} rotate Contains set of functions that can be called to navigate to different slides.
        @binding {.up function( count:number )} rotate Rotates slider up.
        @binding {.down function( count:number )} rotate  Rotates slider down.
        @binding {.left function( count:number )} rotate Rotates slider left.
        @binding {.right function( count:number )} rotate Rotates slider right. 
        @binding {.to function( count:number )} rotate Navigates to specified slide.
        @binding {.direction function( direction: string, count:number )} rotate Rotate slider in direction.
    */
    default: {}
    /**
        Optional slot. If provided, each element inside it will be used as an 
        entry for the slides. You will also need to set the slides property to false.
        This allows you to use HTML for slides instead of data.
    */
    slides: {}
}>()

let api = reactiveComputed( createApi )

context.provide.api( api )

onUnmounted( api.timer.pause )

</script>
