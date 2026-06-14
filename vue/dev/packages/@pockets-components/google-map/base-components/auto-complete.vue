<template lang="pug">
input( 
    ref='inputRef' 
    @keyup='changed'
)
</template>
<script lang='ts' setup>

import { ref, onMounted, onUnmounted, markRaw } from 'vue'
import { context } from "../"
import type { google } from '../types/google-maps.ts';

let $maps = context.inject.maps()

interface $props extends google.maps.places.AutocompleteOptions {
    /**
        Binds to value of place when selected.
    */
    modelValue: null | object
}

let props = withDefaults( defineProps< $props >(), {
    types: () => ( [ 'geocode' ] ),
} )

let inputRef = ref()

let place = ref< google.maps.places.Autocomplete >()

let emit = defineEmits( [ 
    /**
        Fired when user selects address, or when input field is empty. 
        If field is empty, will be set to null. If an address is selected,
        will be an object containing various information about the selected place.
    */
    'modelValue', 
] )

let modelValue = defineModel('modelValue')

let place_changed = () => {
    modelValue.value =  place.value?.getPlace() 
}

let listener;

onMounted( async () => {

    let { Autocomplete } = await $maps.value?.importLibrary( "places" ) as google.maps.PlacesLibrary
    
    place.value = markRaw( new Autocomplete(inputRef.value, props as any) )
    listener = $maps.value?.event.addListener( place.value, 'place_changed', place_changed )
    
} ) 

onUnmounted( () => {
    listener.remove()
} )

let changed = e => {
    let v = e.target.value
    if(!v || v && v=='') modelValue.value = null
}

</script>