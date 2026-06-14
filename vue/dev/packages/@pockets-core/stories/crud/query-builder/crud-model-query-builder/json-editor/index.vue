<template lang='pug'>
div( class='grid columns-1 gap-1')
    label(class='fw-8 fs-20 text-primary-lt') Edit Query
    div(class='position-relative')
        pockets-ux-json-editor( 
            v-bind='editor.editorProps.value' 
            v-model='editor.modelValue.value'
            @hasJSON='editor.hasJSON'
            :key='editor.editorKey.value'
        )
</template>
<script setup>

import { context } from "../context"
let editor = context.inject.editor()

</script>