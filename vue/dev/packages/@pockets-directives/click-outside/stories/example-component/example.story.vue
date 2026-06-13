---
route: 'pockets vue/directives/click-outside/example'
directiveName: "v-click-outside"
directive: "@pockets-directives/click-outside"
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
        outside: true
    }
}
</script>