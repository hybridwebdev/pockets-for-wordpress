<template>
    <form 
        :class="validationClass"
        @submit.prevent="submitHandler"
        :loading="form.busy"
    >
        <slot
            :form="form"
            :validation="validation"
        />
    </form>
</template>
<script lang="ts" setup>

import { reactiveComputed } from '@vueuse/core'

import { context } from '../'
import type { $formContainer } from "../types/index.ts"
import { computed, ref, watch } from 'vue'
import { useSubmitHandler } from "./use-shared"

let props = withDefaults( defineProps< $formContainer >(), {

    formData: () => ( { } ),
    validation: () => ( [] ),

    containerOptions: () => ({
        validClass: "",
        invalidClass: ""
    }),
    
    inputOptions: () => ({
        validClass: "",
        invalidClass: ""
    }),
    
    validationOptions: () => ({
        validClass: "",
        invalidClass: ""
    }),
    
    endpoint: "default",
    formId: "default-form-id"

} )

let data = defineModel( 'formData' )
let validation = defineModel< $formContainer['validation'] >( 'validation', { 
    default: () => [] 
} )

let hasChanged = ref< boolean >( false )

watch( [ data ], () => hasChanged.value = true, { deep: true } )

let form = reactiveComputed( () => {
    
    let errors = ( validation.value ?? [] ).filter( message => message.type == 'error' )
    
    let isValid = errors.length == 0

    return {
        busy: false,
        endpoint: props.endpoint,
        hasChanged,
        isValid,
        errors,
        data,
        validation,
        formId: props.formId,
        options: {
            container: props.containerOptions,
            input: props.inputOptions,
            validation: props.validationOptions
        }
    }

} )

let { submitHandler } = useSubmitHandler( form ) 

context.provide.form( form )

let validationClass = computed( () => {
    return form.isValid 
        ? form.options.container.validClass ?? ""
        : form.options.container.invalidClass ?? ""
} )
 
defineSlots<{
    /**
        Provides an api for the form.
        @binding { reactive } form The form api.
        @binding { reactive } validation The forms validation messages.
    */
    default: {}
}>()

</script>