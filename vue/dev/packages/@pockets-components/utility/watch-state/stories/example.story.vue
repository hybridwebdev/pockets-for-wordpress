---
route: "pockets vue/components/utilities/watch-state/example"
component: "@pockets-components/utility/watch-state/index.vue"
tag: "pockets-watch-state"
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
        count: 0
    }
};
</script>