<template>

    <input
        v-if="name && multiple"
        v-for="id in selectedIDS.selected"
        :key="id"
        :value="id"
        :name="`${name}[]`"
        type="hidden"
    />

    <input
        v-if="name && !multiple"
        :value="selected"
        type="hidden"
        :name="name"
    >

</template>
<script setup>

import { context } from "../context"
let { name, multiple, selectedIDS, selected } = context.inject.api()

defineOptions({
    inheritAttrs: false
})

</script>