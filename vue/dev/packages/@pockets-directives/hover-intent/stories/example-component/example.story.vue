---
route: 'pockets vue/directives/hover-intent/example'
directive: "@pockets-directives/hover-intent"
directiveName: "v-hover-intent"
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
    <template #controls='{ state}'>
        <label class='grid-info-cq-xs-120'>
            <span>Interval</span>
            <input v-model='state.props.options.interval' class='form-control'>
        </label>
        <label class='grid-info-cq-xs-120'>
            <span>Timeout</span>
            <input v-model='state.props.options.timeout' class='form-control'>
        </label>
        <label class='grid-info-cq-xs-120'>
            <span>Sensitivity</span>
            <input v-model='state.props.options.sensitivity' class='form-control'>
        </label>
    </template>
</pockets-story-demo-container>
</template>
<script setup lang="ts">

import HTML from "./component-example.html?raw";
let initialState = {
    props: {
        over: false,
        options: {
            interval: 100,
            timeout: 100,
            sensitivity: 10
        }
    }
}
</script>