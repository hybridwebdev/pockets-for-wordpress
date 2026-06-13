<template>
    <div 
        class='pockets-selectable-tags d-flex flex-wrap gap-1'
        ref='$containerRef'
    >
        <div class='control-container d-flex gap-1 col-12'>
            <input 
                v-model='search' 
                class='form-control rounded-0'
                placeholder='Enter text to filter results'
                ref='$searchRef'
            >
            <button 
                class='fa fa-plus btn btn-grey-md text-white rounded-0'
            />
            <button 
                class='fa fa-times btn btn-danger text-white rounded-0'
                v-tooltip='"Clear results"'
                @click='api.clear'
            />
        </div>
        <div :class='tagListClass'>
            <button 
                :class='tagClass' 
                class='active' 
                v-for='option in filteredSelections'
                @click='api.remove( option )'
            >
                {{ option }}
            </button>
            <button 
                :class='tagClass' 
                v-for='option in filteredOptions'
                @click='api.add( option )'
            >
                {{ option }}
            </button>
            <div class='my-auto p-1' v-if='filteredOptions.length==0 && focused'>No more options</div>
        </div>
    </div>
</template>
<script setup lang='ts'>
import { computed, ref } from "vue"
import { useFocusWithin } from '@vueuse/core'

let $containerRef = ref()
let $searchRef = ref();

let { focused } = useFocusWithin( $containerRef )

interface props {
    options: [ string ]
    modelValue: [ string ]
    search?: string
    tagListClass?: string
}

let props = withDefaults( defineProps<props>(), {
    tagListClass: "grid columns-6 gap-1 col-12"
} )

let search = defineModel<props.search>( "search", { default: ""} )
let modelValue = defineModel<props.modelValue>( "value" )

let filteredSelections  = computed( () => modelValue.value.sort( filters.sort ) )

let filters = {
    bySearch: ( entry: string ) => {
        if ( search.value == '' ) {
            return true
        }
        return entry.includes( search.value )
    },
    removeSelected: ( entry: string ) => !modelValue.value.includes( entry ),
    hideWhenNotFocused: entry => focused.value,
    sort: ( a, b ) => a.localeCompare( b )
}

let filteredOptions = computed( () => {
    return props.options
        .filter( filters.bySearch ) 
        .filter( filters.removeSelected )
        //.filter( filters.hideWhenNotFocused )
        .sort( filters.sort )
}
)

let tagClass = "btn btn-grey-700 p-1 text-white"

let api = {
    reFocus: () => $searchRef.value.focus(),
    remove: ( option : string ) => {
        modelValue.value = modelValue.value.filter( entry => entry != option )
        api.reFocus()
    },
    add: ( option : string ) => {
        modelValue.value = modelValue.value.filter( entry => entry != option ).concat( option )
        api.reFocus()
    },
    clear: () => modelValue.value = []
}
</script>
<style scoped lang='scss'>

</style>