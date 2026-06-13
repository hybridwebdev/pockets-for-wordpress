<template>
    <div 
        class="d-flex gap-cq-lg-2 gap-cq-1 p-cq-lg-2 p-cq-1 flex-cq-lg-nowrap flex-cq-wrap aaaaaaa" 
        :key="api.hash"
    >
        <div class="flex-grow-1">
            <slot name="default" :state="state" :html="html">

                <pockets-story-demo 
                    v-model:state="state"
                    :html="html"
                />
            </slot>
        </div>

        <div 
            class="col-cq-lg-4 col-cq-xxl-3 col-cq-12 bg-grey-800 p-2 border border-5 border-grey-500 cq" 
            v-if="$slots.controls"
        >
            <div class="grid columns-1 gap-2">
                <slot name="controls" :state="state" :html="html" />
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">

import { ref, computed, watch } from 'vue'
import { useStorage } from '@vueuse/core'
import { context } from "../../context"
import { reactive } from 'vue';
import { nanoid } from 'nanoid'

import type { WritableComputedRef, ComputedRef } from 'vue'

interface $props {
    state?: any | Function
    html?: string
    localStorage?: string | boolean
    init?: Function
}

interface $api {
    
    store: typeof store
    hash: WritableComputedRef<string>
    isLocalStorage: ComputedRef<boolean>
    storageKey: string | null

    reset: () => void
    createEntry: () => {
        state: unknown
        name: string
        hash: string
    }

    /**
        Used in demo-state-ux to control if editor is open or not 
    */
    editorOpen: boolean
}

let props = withDefaults( defineProps< $props >(), {
    state: () => ({
        props: {}
    }),
    html: "",
    localStorage: false,
} )

let getDefaultState = () => JSON.parse( JSON.stringify(
    typeof props.state === 'function' ? props.state() : props.state
) )

let createEntry = ( name:string = 'Default' ) => ({
    state: getDefaultState(),
    name,
    hash: nanoid()
})

let store;
let storageKey;

if ( props.localStorage ) {
    
    storageKey = `pockets-documentation/${props.localStorage}`;

    store = useStorage(
        storageKey,
        {
            selectedIndex: 0,
            states: [
                createEntry()
            ]
        }
    )

} 

if ( !props.localStorage ) {

    store = ref( {
        selectedIndex: 0,
        states: [
            createEntry()
        ]
    } )

}
 
const state = computed( {
    get: () => store.value.states[ store.value.selectedIndex ].state,
    set: val => store.value.states[ store.value.selectedIndex ].state = val
} )

if ( props.init ) {
    props.init( state )
}

let api = reactive<$api>( { 
    store, 
    storageKey,
    createEntry, 
    hash: computed( {
        set: (v) => store.value.states[ store.value.selectedIndex ].hash = v,
        get: () => store.value.states[ store.value.selectedIndex ].hash 
    }), 
    reset: () => {
        state.value = getDefaultState()
        api.hash = nanoid()
    }, 
    isLocalStorage: computed( () => props.localStorage ? true : false ),
    editorOpen: false
} ) 

/**
    Ensure that selectedIndex is always valid
*/
watch( () => store.value.states, () => {
    
    let states = store.value.states

    if ( !states.length ) {
        states.push( createEntry() )
    }

    if (store.value.selectedIndex >= states.length) {
        store.value.selectedIndex = states.length - 1
    }

    if (store.value.selectedIndex < 0) {
        store.value.selectedIndex = 0
    }

}, { deep: true, immediate: true } )

watch( () => store.value.selectedIndex, (index) => {

    if ( !store.value.states[index] ) {

        store.value.states[index] = createEntry()

    }

    store.value.selectedIndex = index

} )

watch( () => store.value.states.length, () => store.value.states.map( ( entry, index) => {

    if ( index === store.value.selectedIndex ) {
        return;
    }

    entry.hash = nanoid()

} ) )

context.provide.demoState( api )

</script>