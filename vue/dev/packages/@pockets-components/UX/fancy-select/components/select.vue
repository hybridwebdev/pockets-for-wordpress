<template lang='pug'> 

div(
    ref='containerRef'
    class='fancy-select'
    :class='{ focused, [ containerClass ]: true, [ openPosition ]: true }'
)  

    div(
        v-show='!focused'
        @click='click'
        class='position-absolute top-0 start-0 bottom-0 end-0 d-flex'
    )
        div( 
            :class='placeholderClass'
            v-if='!modelValue && !focused'
        ) {{ placeHolder }}

    input(
        ref='searchRef'
        :class='searchClass'
        :placeholder="searchPlaceholder"
        v-model='searchValue'
    )
    
    select( 
        v-bind="$attrs"
        :size='focused ? openCount : 1'
        @change="change"
        v-model="modelValue"
        ref='selectRef'
        :class='selectClass'
    )      
        slot(
            :focused='focused'
            :api='api'
        )

</template>
<script setup lang='ts'>
import { nextTick, ref, reactive } from "vue"
import { useFocusWithin, useScroll  } from '@vueuse/core'
import { context } from "../"
import type { selectProps } from "../types/index.ts"

defineOptions( {
    inheritAttrs: false,
} )

let props = withDefaults( defineProps<selectProps>(), {
    searchClass: 'form-control rounded-0 text-black',
    searchPlaceholder: 'Enter search to filter results',
    placeHolder: "Select an option",
    placeholderClass: "p-1 form-control d-flex align-items-center",
    containerClass: "",
    openPosition: "open-down",
    openCount: 10,
    selectClass: ""
} )

defineSlots<{
    /**
        Provides api and state for component.
        @binding {boolean} focused Will be true when search or select field is focused.
        @binding {object} api Contains api for component.
        @binding {.search} api Current value of search field.
    */
    default: {}
}>()

let containerRef = ref()
let searchRef = ref()
let selectRef = ref()

const selectRefScroll = useScroll( selectRef )
let { focused } = useFocusWithin( containerRef )

let searchValue = defineModel<string>( 'search' )

let modelValue = defineModel< selectProps['modelValue'] >( 'modelValue', { required: true } )

let change = e => e.target.blur()

let click = () => {

    searchRef.value.focus()

    nextTick( () => {
        let { options } = selectRef.value
        let selected = options[ options.selectedIndex ]
        selectRefScroll.y.value = selected?.offsetTop ?? 0
    } )

}

let api = reactive( {
    search: searchValue
} )  

context.provide.api( api )

</script>
<style lang='scss' scoped>
    .fancy-select {
        position:relative;
        // z-index: 1;
        input {
            &::placeholder {
                color: var(--fancy-select-placeholder-color, #fff)
            }
        }
        &:not(.focused) {
            input {
                position: absolute;
                z-index:-1;
                opacity: 0;
            }
        }
        &.focused {
            z-index: 2;
            select {
                position: absolute;
                left: 0;
                right:0;
            }
            &.open-up {
                select {
                    bottom: 100%
                }
            }
            &.open-down {
                select {
                    top: 100%;
                }
            }
        }
    }
</style>