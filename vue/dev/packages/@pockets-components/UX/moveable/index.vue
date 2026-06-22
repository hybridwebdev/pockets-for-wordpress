<template>
    <Moveable
        ref="moveable"
        @drag="drag"
        @resize="resize"
        :bounds="bounds"
        v-bind="props"
        :style="cssVars"
        class="moveable-control-box"
    />
</template>

<script setup lang="ts">

import Moveable from "vue3-moveable"

import { useWindowSize, useElementSize, useRafFn } from '@vueuse/core'

import { computed, watch, ref, nextTick } from 'vue'

import type { MoveableVueProps } from "./types/index.ts"
 
let moveable = ref()

let props = withDefaults(defineProps<MoveableVueProps>(), {
    snappable: true,
    origin: false
})


let { width, height } = useWindowSize({
    includeScrollbar: true
})


let targetSize = useElementSize(
    props.target,
    {},
    { 
        box: "border-box"
    }
)


let targetStyle = window.getComputedStyle(props.target)

let cssVars = computed( () =>
    `
    --target-height: ${targetSize.height.value}px;
    --target-width: ${targetSize.width.value}px;
    --target-zIndex: ${targetStyle.zIndex ?? 1}
    `
)


const bounds = computed(() => ({
    top: 0,
    left: 0,
    bottom: height.value,
    right: width.value,
    position: "client"
}))

let currentX = 0
let currentY = 0

let updatingRect = false

watch([width, height], () => {
    moveable.value?.updateRect()
})


let constrainToBounds = async () => {

    let rect = props.target.getBoundingClientRect()

    let resized = false

    let dx = 0
    let dy = 0

    if ( rect.width > width.value ) {

        props.target.style.width = `${width.value}px`

        resized = true

    }

    if ( rect.height > height.value ) {

        props.target.style.height = `${height.value}px`

        resized = true

    }


    if ( resized ) {

        await nextTick()

        moveable.value?.updateRect()

        rect = props.target.getBoundingClientRect()

    }


    // keep inside viewport

    if (rect.left < 0) {
        dx = -rect.left
    }


    if (rect.top < 0) {
        dy = -rect.top
    }


    if (rect.right > width.value) {
        dx = width.value - rect.right
    }


    if (rect.bottom > height.value) {
        dy = height.value - rect.bottom
    }


    if (dx || dy) {

        currentX += dx
        currentY += dy


        props.target.style.transform =
            `translate(${currentX}px, ${currentY}px)`


        moveable.value?.updateRect()
    
    }

}


useRafFn( constrainToBounds ) 


let drag = e => {

    currentX = e.beforeTranslate[0]
    currentY = e.beforeTranslate[1]

    e.target.style.transform = e.transform

}

let resize = e => {

    e.target.style.width = `${e.width}px`

    e.target.style.height = `${e.height}px`

    currentX = e.drag.beforeTranslate[0]
    currentY = e.drag.beforeTranslate[1]

    e.target.style.transform = e.drag.transform

}

</script>
<style lang="scss">
.moveable-control-box {

    --control-width: 5px;
    --control-height: 5px;
    --control-color: var(--bs-accent-lt);

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
                calc(0px - var(--control-width)),
                var(--target-height)
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
                calc(0px - var(--control-width)),
                calc(0px - var(--control-height))
            ) !important;
        }


        &[data-direction='ne'] {
            transform: translate(
                var(--target-width),
                calc(0px - var(--control-height))
            ) !important;
        }


        &[data-direction='n'],
        &[data-direction='s'] {

            height: var(--control-height);
            width: var(--target-width);
        }


        &[data-direction='n'] {
            transform: translate(
                0px,
                calc(0px - var(--control-height))
            ) !important;
        }


        &[data-direction='s'] {
            transform: translate(
                0px,
                var(--target-height)
            ) !important;
        }


        &[data-direction='w'],
        &[data-direction='e'] {

            height: var(--target-height);
            width: var(--control-width);
        }


        &[data-direction='w'] {
            transform: translate(
                calc(0px - var(--control-width)),
                0px
            ) !important;
        }


        &[data-direction='e'] {
            transform: translate(
                var(--target-width),
                0px
            ) !important;
        }
    }
}
</style>