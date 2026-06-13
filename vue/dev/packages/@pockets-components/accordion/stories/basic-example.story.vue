---
route: "pockets vue/components/accordion/basic-example"
tag: "pockets-accordion"
component: "@pockets-components/accordion/components/container.vue"
---
<template>
<pockets-story-demo-container
    :state="$initState()"
    :html="HTML"
>
    <template #controls="{ state }">
        <controls :state="state" :tabs="['accordion-options']"/>        
    </template>
</pockets-story-demo-container>
</template>
<script setup lang="ts">
import controls from "./controls.vue"
import { initState } from "./init-state"
import HTML from "./basic-example.html?raw"
let $initState = () => {
    let state = initState()
    state.props.mode = 'multiple'
    return state
}
</script>
