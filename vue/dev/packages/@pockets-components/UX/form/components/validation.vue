<template>
<component 
    :is="tag"
>
    <component 
        :is="wrapperTag"
        :class="[ wrapperClass, validationClass ]"
        v-if="showErrors && hasMessages"
    >
        <component 
            v-for="error in validation.errors"
            :is="messageTag"
            v-html="error.message"
        />
        
        <component 
            v-for="error in validation.success"
            :is="messageTag"
            v-html="error.message"
        />
    </component>

    <slot
        :form="form"
        :validation="validation"
    />

</component>
</template>
<script setup lang="ts">

import { computed } from 'vue'

import { useValidation } from './use-shared'
import { context } from '../context'

import type { $formValidation  } from "../types/index.ts"

let form = context.inject.form( false )

let props = withDefaults( defineProps< $formValidation >(), {
    path: "",
    tag: "div",
    validationOptions: false,
    wrapperClass: "",
    wrapperTag: "div",
    messageTag: "div",
    showErrors: true
} )

let { validation } = useValidation( props )

let hasMessages = computed( () => {
    return validation.errors.length > 0 || validation.success.length > 0
} )

let validationClass = computed( () => {
 
    let getClass = ( valid: boolean, options, fallback ) =>  {
        let key = valid ? "validClass" : "invalidClass"
        return options[key] && options[key] !=''
            ? options[key]
            : fallback[key]
    }

    return getClass(
        validation.isValid,
        props.validationOptions, 
        form.options.validation 
    )
    
} )

defineSlots<{
    /**
        Provides an api for validation wrapper.
        @binding { reactive } form The forms current data.
        @binding { reactive } validation The forms validation messages.
    */
    default: {}
}>()

</script>