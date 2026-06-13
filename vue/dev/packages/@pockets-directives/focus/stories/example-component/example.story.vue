---
route: "pockets vue/directives/focus/Example"
directiveName: "v-focus"
directive: "@pockets-directives/focus/index.ts"
---
<template>
<pockets-story-demo-container
    :state="initialState"
>
    <template #default="{ state }">
        <pockets-story-demo
            :html="HTML"
            :state="state"
            render-demo='v-if'
        >
        </pockets-story-demo>
    </template>
</pockets-story-demo-container>
</template>
<script setup lang="ts">

import HTML from "./component-example.html?raw";
let initialState = {
    props: {
    }
}
</script>