<template>
    <div class='d-flex align-items-stretch gap-1 pockets-ux-color-picker'>
        <color-input 
            v-bind="{ ...$attrs, ...props }" 
            v-model='modelValue' 
            class='flex-grow-1'
            v-tooltip='tooltip'
            :key="key"
        />
        <!-- 
            @slot Can be used to override content of clear button.
                @binding {function} clear Clears selection. 
        -->
        <slot name='clear-button' v-bind='api'>
            <button
                class='btn btn-danger text-white p-1 rounded-0' 
                v-tooltip='"Clear selection"' 
                @click="api.clear"
            >
                <i class='fa fa-times'/>
            </button>
        </slot>
    </div>
</template>
<script lang="ts" setup>
/**
    See https://github.com/gVguy/vue-color-input?tab=readme-ov-file#event-names
*/

import { ref } from 'vue'

import ColorInput from 'vue-color-input'

defineOptions( {
    inheritAttrs: false
} )

interface props {
    /**
        Sets tooltip text shown when picker is hovered.
    */
    tooltip?: string
    /**
        Color format. 
    */
    format?: "rgb" | "hsv" | "hsl" | "hex" | "hex8" | "name" 
    /**
        Controls position of picker when open, relative to input field.
    */
    position?: "top" | "top right" | "top left" | "top center" |
            "right top" | "right" | "right bottom" | "right center" |
            "bottom right" | "bottom" | "bottom left" | "bottom center" |
            "left top" | "left bottom" | "left" | "left center"

    /**
        Disables picker if true
    */
    disabled?: boolean
    /**
        Disables Alpha picker if true.
    */
    disableAlpha?: boolean
    /**
        Disables text inputs if true.
    */
    disableTextInputs?: boolean
    /**
        Transition name.
    */
    transition?: string
    /**
        Color value to bind to.
    */
    modelValue: string | null
}

let props = withDefaults(defineProps<props>(), {
    tooltip: "Edit color"
} )

let modelValue = defineModel( 'modelValue' )

/**
    Used to force picker to update.
*/
let key = ref(0)

/**
    Clears selection
*/
let clear = () => {
    modelValue.value = null
    key.value++
}

let api = {
    clear
}

</script>
<style scoped lang="scss">
.pockets-ux-color-picker {
    :deep(){
        .color-input {
            .box {
                width: 100%;
                height: 100%;
                border-radius: initial;
            }
        }

    }
}
</style>