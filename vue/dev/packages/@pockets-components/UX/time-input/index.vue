<template lang="pug">
div( 
    class='pockets-ux-time-input grid gap-1' 
    ref='container'
    :style='{ "--bs-columns": bsColumns }'
)
    label( v-if='converter.render.includes("days")' )
        span() Days
        input( 
            v-model="time.d" 
            type="number" 
            min=0  
            class='form-control p-half'
        )
    label( v-if='converter.render.includes("hours")' )
        span() Hours
        input(
            v-model="time.h" 
            type="number" 
            min=0 
            class='form-control p-half'
        )
    label( v-if='converter.render.includes("minutes")' )
        span() Mins
        input(
            v-model="time.m" 
            type="number" 
            min=0  
            class='form-control p-half'
        )
    label( v-if='converter.render.includes("seconds")' )
        span() Secs
        input( 
            v-model="time.s" 
            type="number" 
            min=0 
            step='any' 
            class='form-control p-half'
        )
</template>

<script setup lang="ts">

import { computed } from 'vue'
import { useConverterMap } from "./use-converter-map"
import { useElementSize, templateRef } from '@vueuse/core'

let converterMap = useConverterMap()

const model = defineModel< number | null | string >()

interface $props {
    mode?: "dhms" | "hms"
}

let props = withDefaults( defineProps<$props>(), {
    mode: "hms"
})

let converter = computed( () => converterMap[props.mode] ?? converterMap['dhms'] )

let time = computed( () => new Proxy( converter.value.from( model.value ?? 0 ), {
    get(target, key) {
        return target[key as keyof typeof target]
    },
    set(target, key, value) {
        target[key as keyof typeof target] = value
        model.value = converter.value.to(target)
        return true
    }
} ) )

let containerRef = templateRef('container')

let { width } = useElementSize( containerRef )

let bsColumns = computed(() => {

    let { columns } = converter.value 

    if( width.value >= columns * 80 ) {
        return columns
    }

    return 1

} )

</script> 
<style lang="scss">

.pockets-ux-time-input {
 
    input {
        
        &:focus {
            outline: none;
        }
        
        &::-webkit-outer-spin-button,
        &::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }

    }

    label {
        display: grid;
        gap: 5px;
        grid-template-columns: 1fr;
    }

}

</style>