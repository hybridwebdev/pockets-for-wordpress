---
title: "Example - Iframe"
route: "pockets vue/stories/iframe-component-story"
---
<template>
<pockets-story-demo-container :state="initialState">
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

import HTML from "./iframe-example.html?raw";

import innerHTML from "./component-example.html?raw";

let initialState = {
    props: {
        html: innerHTML
    }
}
</script>