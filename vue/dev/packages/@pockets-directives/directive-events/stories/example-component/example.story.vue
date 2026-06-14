---
route: "pockets vue/directives/directive-events/example"
directive: "@pockets-directives/directive-events"
directiveName: "v-directive-events"
---
<template>
<pockets-story-demo-container
    :state="initialState"
>
    <template #default="{ state }">
        <pockets-story-demo
            :html="HTML"
            :state="state"
        >
        </pockets-story-demo>
    </template>
</pockets-story-demo-container>
</template>
<script setup lang="ts">

import HTML from "./component-example.html?raw";
let initialState = {
    props: {
        key: 0,
        updated: 0
    }
}
</script>