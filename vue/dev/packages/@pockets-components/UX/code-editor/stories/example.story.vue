---
route: "pockets vue/components/ux/code-editor/example"
tag: "pockets-ux-code-editor"
component: "@pockets-components/UX/code-editor/index.vue"
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

import HTML from "./component-example.html?raw"

let initialState = {
    props: {
        modelValue: `<div>\n    Hello world\n</div>`
    }
}
</script>