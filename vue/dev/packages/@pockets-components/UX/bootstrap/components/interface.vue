<template>
    <div 
        class='grid columns-1 gap-0 pockets-bootstrap-interface'
    >
        <div
            class="position-sticky top-0"
        >
            <div class='d-flex bg-grey-800 align-items-stretch gap-0'>
                <div class='flex-shrink-1 col-4'>
                    <pockets-ux-bootstrap-selector #default='api'>
                        <select v-model='breakpoint' class='form-control rounded-0 px-2 py-1 bg-grey-800 text-primary-lt border-0'>
                            <option v-for='option in api.breakpoints'>
                                {{ option }}
                            </option>
                        </select>
                    </pockets-ux-bootstrap-selector>
                </div>
                <input class='form-control rounded-0 px-1 p-half flex-grow-1' placeholder='enter classes...' v-model='modelValue'>
            </div>
            <div 
                class='d-flex flex-wrap gap-0 border-accent-lt border-bottom border-top border-0'
            >
                <button 
                    v-for='(option, key) in tabOptions' 
                    @click='selectedTab = key'
                    class='btn btn-grey-600 p-half text-capitalize rounded-0 fs-14 text-wrap flex-grow-1'
                    :class='{ active: selectedTab == key}'
                >
                {{ key }}
                </button>
            </div>
            
        </div>
        <div class='grid columns-1 gap-1 p-1 bg-grey-700'>
            <component :is='activeTab'/>
        </div>
        
    </div>
</template>
<script lang='ts' setup>

import { computed, ref } from "vue"

import { context } from "../"
import type { $interfaceProps } from "../types/index.ts"

import background from "./sections/background.vue"
import layout from "./sections/layout.vue"
import margin from "./sections/margin.vue"
import padding from "./sections/padding.vue"
import text from "./sections/typography.vue"
import border from "./sections/borders.vue"

let tabOptions = {
    background,
    layout,
    margin,
    padding,
    text,
    border
}

tabOptions = Object.fromEntries( Object.entries( tabOptions ).sort() )


let selectedTab = ref( Object.keys( tabOptions )[0] )

let activeTab = computed( () => tabOptions[selectedTab.value] )

let modelValue = defineModel< $interfaceProps.modelValue >( "modelValue", { default: "" } ) 

let breakpoint = defineModel< $interfaceProps.breakpoint >( 'breakpoint', { default: "none" } )

let props = withDefaults( defineProps< $interfaceProps >(), {
    breakpoint: "",
    modelValue: "",
} )
 
context.provide.config( {
    modelValue,
    breakpoint
} )

</script>
<style>
.pockets-bootstrap-interface {
    .grid-info-160 {
        --grid-info-size: 120px;
    }
    .grid-info-180 {
        --grid-info-size: 150px;
    }
}
</style>