<template lang="pug">
div( 
  ref="inputRef" 
  class="pockets-ux-range-slider"
  :mode='mode'
)
</template>
<script setup lang="ts">

import { useElementVisibility } from '@vueuse/core'

import { onMounted, ref, watch, shallowRef, computed, onUnmounted } from "vue"
import type { Ref } from "vue"

import { useDebounceFn } from "@vueuse/core"

import rangeSlider from 'range-slider-input'
import 'range-slider-input/dist/style.css'

import type { Props, RangeSlider } from "./types/index.ts"

defineEmits<{
  /**
    Minimum range value
  */
  modelValue: any
  /**
    Maximum range value
  */
  maxValue: any
}>()

let props = withDefaults( defineProps< Props >(), {
  min: 0,
  max: 10,
  step: 1,
  mode: "single",
  debounceRate: 0,
  rangeSlideDisabled: true,
  thumbsDisabled: [ false, true ],
  displayFormatter: "show"
} )

let inputRef = ref< Element >()
let $slider = shallowRef< RangeSlider >()

let minValue:Ref<number> = defineModel( "modelValue" )
let maxValue:Ref<number | undefined> = defineModel( 'maxValue' )

let $values = computed<[number, number]>( () => [
    minValue.value,
    props.mode == "single" ? props.max : maxValue.value
] )
 
/**
  Fired when props change and when $slider is initially mounted.
  Syncs slider instance with component props.
*/
let syncWithProps = () => {
  
  Object.keys( $slider.value as RangeSlider )
    .filter( k => props[k] != undefined )
    .map( k => ($slider.value as RangeSlider)[k].call(null, props[k] ) )
  
  $slider.value?.value( $values.value )
  
}

watch( [ props, $slider ], () => {

  if( $slider.value ) {
  
    syncWithProps()
    
  }

}, { deep: true, immediate: true } )

let applyFormatter = ( values ) => {
  
  let { displayFormatter } = props

  if( displayFormatter == 'hide' ) {
    displayFormatter = () => ""
  }

  if( typeof displayFormatter == 'function' ) {

    let inputs = {
      lower: inputRef.value?.querySelector('.range-slider__thumb[data-lower]'),
      upper: inputRef.value?.querySelector('.range-slider__thumb[data-upper]'),
    }

    let formattedValues = {
      lower: values[0] ?? undefined,
      upper: values[1] ?? undefined
    }
    if( inputs.lower !== undefined ) {
      let value = displayFormatter( formattedValues.lower )
      inputs.lower.style.setProperty('--aria-displayvalue', `"${value}"` )
    }
  
    if( inputs.upper !== undefined ) {
      let value = displayFormatter( formattedValues.upper )
      inputs.upper.style.setProperty('--aria-displayvalue', `"${value}"` )
    }

  }

}

watch( () => $values, () =>{ 
  applyFormatter( $values.value )
}, { immediate: true, deep: true } )

/**
  Fired when slider value is changed via user interaction
*/
let onInput = useDebounceFn( ( values, userInteraction: boolean ) => {

  applyFormatter( values )

  if(!userInteraction) { 
    return 
  }

  minValue.value = values[0]
  
  if( props.mode == 'double' ) {
    maxValue.value = values[1]
  }

}, props.debounceRate )

onMounted( () => {

  $slider.value = rangeSlider( inputRef.value as Element, {
    onInput,
    value: $values.value,
  } )

} )

onUnmounted( () => $slider.value?.removeGlobalEventListeners() )

/**
  Range slider has an issue where if it's render off dom, it doesnt style correctly.
  This fixes it by firing the min method which re-fires its bounding box calculation.
  see https://github.com/n3r4zzurr0/range-slider-input/issues/8
*/
const targetIsVisible = useElementVisibility(inputRef)

watch(() => targetIsVisible.value, () => {
  if(targetIsVisible.value ) {
    $slider.value.min(props.min || 0 ) 
  }
}, { once: true } )

</script>
<style lang="scss" scoped>
.pockets-ux-range-slider {
  
  --track-height: 30px;
  
  --track-background: var( --bs-accent-dk );
  --range-background: transparent;

  --thumb-height: var( --track-height );
  --thumb-background: var( --bs-primary-dk );
  --thumb-color: var( --bs-white );
  --thumb-padding: 15px;
  --thumb-width: auto;

  /**
    Styling
  */
  height: var(--track-height);
  background: var(--track-background);
  border-radius: 0px;
  /**
    Hide upper range thumb when in sinle mode.
  */
  &[mode='single'] {
    :deep(){
      [data-upper] {
        opacity: 0;
        width: 0;
        z-index: -1;
        pointer-events: none;
      }
    }
  }
  :deep(){
    .range-slider__thumb {
      border-radius: 0px;
      display: flex;
      align-items: center;
      width: var(--thumb-width);
      height: var(--thumb-height);
      background: var(--thumb-background);
      color: var(--thumb-color);
      padding: var(--thumb-padding);
      &::before {
        content: var( --aria-displayvalue, attr( aria-valuenow ) );
      }
    }
    .range-slider__range {
      background: var(--range-background);
    }
  }
}
</style>