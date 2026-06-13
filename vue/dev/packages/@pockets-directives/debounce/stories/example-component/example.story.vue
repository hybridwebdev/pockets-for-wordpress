---
route: 'pockets vue/directives/debouce/example'
directive: '@pockets-directives/debounce/index.ts'
directiveName: 'v-debouce'
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
    <template #controls='{ state }'>
        <label class='grid-info-cq-xs-120 grid gap-1'>
            <span>Delay</span>
            <input v-model='state.props.options.delay' class='form-control' type='number' step=100>
        </label>
    </template>
</pockets-story-demo-container>
</template>
<script setup lang="ts">

import HTML from "./component-example.html?raw";
let initialState = {
    props: {
        values: {
            select: "a",
            input: "hello world"
        },
        options:{

            delay: 600

        }
    }
}
</script>