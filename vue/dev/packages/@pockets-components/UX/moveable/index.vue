<template>
    <Moveable 
        @drag="drag" 
        @resize="resize"
        :bounds="bounds" 
        v-bind="props"
        :style="cssVars"
        class="moveable-control-box"
        :key="key"
    />
</template>
<script setup lang="ts">

/*
    @component-description
    This component is a renderless thin wrapper around vue3-movable. It has no slots.
    For more information on use see <a href='https://github.com/daybrush/moveable/tree/master/packages/vue-moveable'>VUE 3 Movable</a>
*/

import Moveable from "vue3-moveable"
import { useWindowSize, useElementSize } from '@vueuse/core'
import { computed, watch, ref } from 'vue'
import type { MoveableVueProps } from "./types/index.ts"

let key = ref( Date.now() )

defineOptions( {
    name: "pockets-ux-movable"
} )

let props = withDefaults(defineProps<MoveableVueProps>(), {
    snappable: true,
    origin: false
})

let { width, height } = useWindowSize( { includeScrollbar: false } )

watch([width, height], () => key.value = Date.now() )

let targetSize = useElementSize( props.target, {}, { box: "border-box"} )

let targetStyle = window.getComputedStyle( props.target )

let cssVars = computed( () => `--target-height: ${targetSize.height.value}px; --target-width: ${targetSize.width.value}px; --target-zIndex: ${targetStyle.zIndex ?? 1}` )

const bounds = computed( () => ( { 
    "top": 0, 
    "left": 0, 
    "bottom": height.value, 
    "right": width.value, 
    "position": "client" 
} ) )

let drag = e => {
    e.target.style.transform = e.transform
}

let resize = e => {
    e.target.style.width = `${e.width}px`;
    e.target.style.height = `${e.height}px`;
    e.target.style.transform = e.drag.transform;
}

</script>
<style lang="scss">
.moveable-control-box {
    /**
        Controls
    */
    --control-width: 5px;
    --control-height: 5px;
    --control-color: var(--bs-accent-lt);
    /**
        Target is the moveable container. Should be the actual height/width of the element in px.
    */
    z-index: var(--target-zIndex) !important;
    .moveable-resizable {
        

        &[data-direction] {
            border-radius: 0px !important;
            margin: 0 !important;
            border: 0px !important;
            background: var(--control-color);
            z-index: inherit;
        }

        &[data-direction='se'],
        &[data-direction='sw'],
        &[data-direction='nw'],
        &[data-direction='ne'] {
            height: var(--control-height);
            width: var(--control-width);
        }

        &[data-direction='sw'] {
            transform: translate( 
                calc( 0px - var(--control-width)), 
                calc( 0px + var(--target-height) ) 
            ) !important;
        }

        &[data-direction='se'] {
            transform: translate( 
                var(--target-width), 
                var(--target-height)
            ) !important;
        }


        &[data-direction='nw'] {
            transform: translate( 
                calc( 0px - var(--control-width)), 
                calc( 0px - var(--control-height) ) 
            ) !important;
        }

        &[data-direction='ne'] {
            transform: translate( var(--target-width), calc( 0px - var(--control-height) ) ) !important;
        }

        &[data-direction='n'],
        &[data-direction='s'] {
            height: var(--control-height);
            width: var(--target-width);
        }
        &[data-direction='n'] {
            transform: translate( 0px, calc( 0px - var(--control-height)) ) !important;
        }

        &[data-direction='s'] {
            transform: translate( 0px, var(--target-height) ) !important;
        }
        
        &[data-direction='w'],
        &[data-direction='e'] {
            height: var( --target-height );
            width: var( --control-width );
        }
        
        &[data-direction='w'] {
            transform: translate( calc(0px - var( --control-width )), 0px ) !important;
        }

        &[data-direction='e'] {
            transform: translate( var( --target-width ), 0px ) !important;
        } 

    }
    
}

</style>