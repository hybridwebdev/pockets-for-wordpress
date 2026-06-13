<template lang="pug">
slot( v-bind='api' )
</template>
<script lang='ts' setup>

import { nextTick, reactive, watch } from 'vue'

/**
    
    Can be used with either:
    
    <pockets-temp-state
        :state='myData' 
        @update:state='someFunction'
    >   

    or 

    <pockets-temp-state
        v-model:state='myData' 
    >   

    This component is a renderless component
    that takes a state object via v-model:state or :state.
    It creates a copy of that object, and passes it down
    via slot to be used as "temporary" state that holds changes.
    
    You can then call: 
        - submit to apply the changes, which emits them via update:state. 
        - cancel to discard the changes and revert back to initial state. 
          Once this is done, it emits a "cancel" event.

    Un-submitted changes are also discarded when the component dismounts.

    When temp state changes are made, hasChanges is flagged to true. 

*/

const props = defineProps< {
    /**
        This is used internally to create the temporary state. When update is fired, it 
        will sync this state with the temporary state.
    */
    state:  Record<string, any> | Object
} >()

defineSlots<{
    /**
        Provides Api to state
        @binding {reactive} state Temporary state object.
        @binding {function} update Applies temporary state changes.
        @binding {function} cancel Discards temporary state changes.
        @binding {boolean} hasChanges Will be true if temporary state has changes.
    */
    default: {}
}>()

const emit = defineEmits( [ 
    /**
        Fired when update method is called.
    */
    'update:state', 
    /**
        Fired when cancel method is called. Reverts temporary state
        back to state provided through state property.
    */
    'cancel' 
] )

let getState = () => JSON.parse( JSON.stringify( props.state ) )

let syncState = () => {
    /*
        I don't think this is right
        Object.assign( api.state, getState() )
    */

    api.state = {...getState() }
    /**
        Fired on nextTick so it runs after watch handler fires
    */
    nextTick( () => api.hasChanges = false )
}

let api = reactive( {
    state: getState() ,
    update: () => {
        emit( 'update:state', { ...api.state } )
        api.hasChanges = false
    },
    cancel: () => {
        emit('cancel')
        syncState()
    },
    hasChanges: false
} )

watch( () => api.state, () => api.hasChanges = true, { deep: true } )

watch( () => props.state, syncState, { deep: true } )

</script>
