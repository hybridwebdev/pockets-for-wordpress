---
tag: "pockets-wysiwyg"
route: "pockets vue/components/html-editor/example"
component: "@pockets-tip-tap/components/editor/index.vue"
---
<template>
<pockets-story-demo-container
    :state="initState"
    local-storage="pockets-wysiwyg-demo"
>
    <template #default="{ state }">
        <pockets-story-demo 
            :state="state" 
            :html="HTML"
            :key="state.props.updateDelay"
        >
            <template #results>
                <div v-html="state.props.modelValue"/>
            </template>
        </pockets-story-demo>
    </template>
    <template #controls="{ state}">
        <label class="grid-info-120" role="button">
            <span>Editable</span>
            <input 
                type="checkbox" 
                v-model="state.props.editorConfig.editable" 
                class="form-control-switch fs-30 ms-auto"
            >
        </label>
        <label class="grid-info-120" role="button">
            <span>Delay</span>
            <input type="number" v-model="state.props.updateDelay" class="form-control">
        </label>
    </template>
</pockets-story-demo-container>
</template>
<script setup lang="ts">
import HTML from "./example.html?raw"

let meta = { 
    tag: 'pockets-wysiwyg',
}

let initState = () => ({
    props: {
        editorConfig: {
            editable: true
        },
        updateDelay: 500,
        modelValue: `<p>I am editable content.</p><p>Click anywhere in here to see the editor.</p><p>You can also select elements or text to see additional options.</p>`,
    }
})
</script>