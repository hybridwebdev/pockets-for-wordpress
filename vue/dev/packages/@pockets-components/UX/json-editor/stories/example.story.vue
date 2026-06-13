---
tag: "pockets-ux-json-editor"
route: "pockets vue/components/ux/json-editor/example"
component: '@pockets-components/ux/json-editor/loader.vue'
---
<template>
<pockets-story-demo-container>
    <pockets-story-demo
        :html="HTML"
        :state="state"
    >
        <template #demo>
            <pockets-ux-json-editor
                v-model="state.modelValue"
            />
        </template>
    </pockets-story-demo>
</pockets-story-demo-container>
</template>
<script setup lang="ts">
import { reactive } from "vue"
import HTML from "./example.html?raw"
let state = reactive({
    modelValue: {
        hello: "world",
        object: {
            foo: "bar",
        },
        array: [
            "ONE", "TWO", "THREE"
        ]
    }
})
</script>