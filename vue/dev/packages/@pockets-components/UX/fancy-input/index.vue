<template>
    <div class="d-flex gap-0 incrementer-input flex-grow-1">
        <button 
            type="button" 
            class="rounded-0 decrement btn" 
            @click="localValue--"
        >
            <i class="fa fa-minus"></i>
        </button>
        <input 
            type="number" 
            v-model="localValue" 
            class="input-text qty form-control rounded-0 p-1 px-2"
            :name="name"
            v-bind="inputAttrs"
            ref="inputRef"
        />
        <button 
            type="button"
            class="rounded-0 increment btn" 
            @click="localValue++"
        >
            <i class="fa fa-plus"></i>
        </button>
    </div>
</template>
<script setup lang="ts">
import { ref, watch } from 'vue'
import { useDebounceFn } from '@vueuse/core'

import { type $props } from "./types/index.ts"

let modelValue = defineModel<$props['value']>( 'value' )

/**
    Internal value used for debouncing
*/
const localValue = ref( modelValue.value )
const inputRef = ref< HTMLInputElement | null >( null )

let props = withDefaults( defineProps<$props>(), {
    debounce: 500,
    name: null,
    min: 1,
    max: false,
    inputAttrs: () => ({})
} )


watch( localValue, () => {

    if( localValue.value <= props.min ) {
        localValue.value = props.min
    }

    if( props.max < 0 ) {
        return;
    }
    
    if( props.max !==false ) {
        if( localValue.value >= props.max ) {
            localValue.value = props.max
        }
    }

})
watch( localValue, useDebounceFn( () => {

    modelValue.value = localValue.value

    let event = new Event('change', { bubbles: true, cancelable: true } )

    if( inputRef.value) {
    
        inputRef.value.dispatchEvent( event ) 

    }

}, props.debounce )  )
 
</script>
<style lang="scss" scoped>
.incrementer-input {

    --accent-color: var( --bs-grey-800  );
    --text: var( --bs-white ) ;
    --input-border-width: 0px 0 0px 0;
    --input-color: var( --text );
    --input-bg: var( --bs-gray-600 );

    --bs-btn-hover-bg: var(--accent-color);
    --bs-btn-active-bg: var(--accent-color);
    --bs-btn-hover-color:var( --text );
    --bs-btn-active-color:var( --text );

    button { 
        background-color: var( --accent-color );
        color: var( --text );
        transition: .5s opacity;
        &:hover {
            opacity: .9;
        }
        border: 0px
    }

    input, input:focus {
        border-color: var( --accent-color );
        border-width: var( --input-border-width );
        background: var( --input-bg );
        color: var(--input-color);
        
    }

}
</style>