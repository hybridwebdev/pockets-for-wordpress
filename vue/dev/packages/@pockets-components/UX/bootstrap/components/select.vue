<template>
    <slot 
        name='default' 
        :computedModelValue='computedModelValue'
        :options='options'
        :breakpoints='bsOptions.breakpoints'
        :clear='clear'
        :set='set'
    >
        <div class='d-flex gap-1 pockets-bootstrap-class-selector'>
            <select
                v-bind='$attrs'
                v-model='computedModelValue'
                container-class='flex-fill'
                class='form-control rounded-0'
                place-holder='unset'
                :open-count='3'
                open-position='open-up'
            >
                <option 
                    :value='null'
                    class='p-1 text-danger fw-8'
                >
                    Unset
                </option>
                <option  
                    v-for='(option, key) in options'
                    :value='option'
                    class='p-1'
                >
                    {{ key }}
                </option>
            </select>
            <button 
                @click='clear' 
                v-if='showClearButton'
                class='fa fa-times btn btn-danger text-white rounded-0'
                v-tooltip='"Clear selection"'
            />
        </div>
    </slot>
</template>
<script setup lang='ts'>

import { context, bsOptions } from "../"

import { computed } from "vue"
import { useSingleSelection } from '@pockets-core/utils/class-selector'

import type { $selectProps } from "../types/index.ts"

defineOptions( {
    inheritAttrs: false
} )

let modelValue = defineModel< $selectProps['modelValue'] >( "modelValue", { default: "" } ) 

let breakpoint = defineModel< $selectProps['breakpoint'] >( 'breakpoint', { default: "none" } )

/**
    the binding value and breakpoint can
    be conditionally injected from the interface component.
*/
let state = context.inject.config({
    modelValue,
    breakpoint
} )

let props = withDefaults( defineProps< $selectProps >(), {
    optionKey: "cols",
    breakpoint: "",
    modelValue: "",
    prefix: "",
    suffix: "",
    responsive: false,
    showClearButton: false,
    optionsFilter: options => options,
    optionsReducer: ( $built: string ) => $built,
} )

let options = computed( () => {

    let options = bsOptions[props.optionKey] ?? []
    let breakpoint = ''
    let rawBreakpoint = null

    if( props.responsive === true && state.breakpoint.value != 'none' ) {
        breakpoint = `${state.breakpoint.value}-`
        rawBreakpoint = state.breakpoint.value
    }

    let $filtered = options.reduce( ( acc, option) => { 
        
        let prefix = props.prefix
        
        let suffix = props.suffix
 
        acc[ option ] = props.optionsReducer( `${prefix}${breakpoint}${option}${suffix}`, { 
            option, 
            breakpoint: rawBreakpoint,
            prefix, 
            suffix 
        } )

        return acc

    }, { } )

    $filtered = props.optionsFilter( $filtered )

    return Object.fromEntries(Object.entries( $filtered ).sort() )

} )

let computedModelValue = useSingleSelection( state.modelValue, options )

let clear = () => computedModelValue.value = null
let set = value => computedModelValue.value = value

defineSlots<{
    /**
        
        Provides an interface for bootstrap class selector.

        @binding {array} breakpoints List of registered breakpoints
        @binding {Ref} computedModelValue internal v-model used for binding local state that is then emitted back up to modelValue. 
        @binding {Ref} options Available classes based on breakpoint and current optionKey.
        @binding {Function} clear Clears selection
        @binding {Function} set Sets selection
    */
    default: {}
    
}>()

</script>
