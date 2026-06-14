---
route: "pockets vue/directives/forms/form-submit-trigger"
directive: "@pockets-directives/forms/submit-handler"
directiveName: "v-pockets-form-handler"
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
        color: "blue",
    }
}
</script>