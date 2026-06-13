---
route: 'pockets vue/directives/confirm-action/example'
directive: '@pockets-directives/confirm-action/index.ts'
directiveName: 'v-confirm-action'
---
<template>
<pockets-story-demo-container
    :state="initialState"
    local-storage='v-confirm-action-directive'
>
    <template #default="{ state }">
        <pockets-story-demo
            :html="HTML"
            :state="state"
        >
        </pockets-story-demo>
    </template>
    <template #controls='{ state }'>
        <label class='grid-info-cq-xs-100 gap-1 grid'>
            <span>Default Class</span>
            <input v-model='state.props.directive.defaultClass' class='form-control'>
        </label>
        <label class='grid-info-cq-xs-100 gap-1 grid'>
            <span>Confirm Class</span>
            <input v-model='state.props.directive.confirmClass' class='form-control'>
        </label>
        <label class='grid-info-cq-xs-100 gap-1 grid'>
            <span>Confirm Text</span>
            <input v-model='state.props.directive.confirmText' class='form-control'>
        </label>
        <label class='grid-info-cq-xs-100 gap-1 grid'>
            <span>Delay</span>
            <input step=100 type='number' v-model='state.props.directive.delay' class='form-control'>
        </label>
        <label class='grid-info-cq-xs-100 gap-1 grid'>
            <span>Cancel Blur</span>
            <input type='checkbox' v-model='state.props.directive.cancelOnBlur' class='form-control-switch fs-30 ms-auto'>
        </label>
        <label class='grid-info-cq-xs-100 gap-1 grid'>
            <span>Cancel Leave</span>
            <input type='checkbox' v-model='state.props.directive.cancelOnMouseLeave' class='form-control-switch fs-30 ms-auto'>
        </label>
    </template>
</pockets-story-demo-container>
</template>
<script setup lang="ts">

import HTML from "./component-example.html?raw";
let initialState = {
    props: {
        directive: {
            defaultClass: "btn-confirm",
            confirmClass: "btn-danger",
            confirmText: "Are you sure?",
            delay: 2000,
            cancelOnBlur: true,
            cancelOnMouseLeave: false
        }
    }
}
</script>