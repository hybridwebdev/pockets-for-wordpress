<template>
    <component 
        :is="tag"
        v-model:[modelValueKey]="$modelValue"
        :value="$modelValue"
        @input="updateValue"
        @change="updateValue"
        :class="validationClass"
        :name="name"
    >
        <slot
            :form="form"
            :validation="validation"
        />
    </component>
</template>
<script setup lang="ts">

import { computed } from 'vue'

import { context } from '../context'
import { useValidation, pathToFormName } from './use-shared'

import type { $formInput } from "../types/index.ts"

import { $object } from "@pockets-core/utils"

let form = context.inject.form( false )

let props = withDefaults( defineProps< $formInput >(), {
    path: "",
    tag: "input",
    inputOptions: false,
    name: false
} )

let name = computed( () => props.name ? props.name : pathToFormName( props.path ) )

let $modelValue = computed( {
    get: () =>  $object.get( form.data, props.path ),
    set: value => $object.set( form.data, props.path, value )
} )

let modelValueKey = computed( () => "modelValue" )

let updateValue = ( event: Event ) => {

    const target = event.target as HTMLSelectElement;
    $modelValue.value = target.value

}

let { validation } = useValidation( props )

let validationClass = computed( () => {

    if( props.path == '' ) {
        return ""
    }
 
    let getClass = ( valid: boolean, options, fallback ) =>  {
        let key = valid ? "validClass" : "invalidClass"
        return options[key] && options[key] !=''
            ? options[key]
            : fallback[key]
    }

    return getClass(
        validation.isValid,
        props.inputOptions, 
        form.options.input 
    )

} )

defineSlots<{
    /**
        Provides an api for the form.
        @binding { reactive } form The forms current data.
        @binding { reactive } validation The forms validation messages.
    */
    default: {}
}>()

</script>