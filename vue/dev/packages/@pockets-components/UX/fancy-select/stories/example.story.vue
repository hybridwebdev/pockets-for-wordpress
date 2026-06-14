---
tag: "pockets-fancy-select"
route: "pockets vue/components/ux/fancy-select/example"
component: "@pockets-components/UX/fancy-select/components/select.vue"
---
<template>
<pockets-story-demo-container
    :state="initState"
>
    <template #default="{ state }">
        <pockets-story-demo
            :html="HTML"
            :state="state"
        >
            <template #demo>
                <div class='grid-info-120'>
                    <span>Search Value</span>
                    <span>{{ state.props.search == '' ? "None" : state.props.search }}</span>
                </div>
                <div class='grid-info-120'> 
                    <span>Selected value</span>
                    <span>{{ state.props.modelValue =='' ? "None" : state.props.modelValue }} </span>
                </div>
                <render-html
                    :innerHTML="HTML"
                    :state="state"
                />
            </template>
        </pockets-story-demo>
    </template>
    <template #controls="{ state }">
        <label class="grid-info-120" role="button">
            Open Count
            <input 
                class="form-control" 
                v-model="state.props.openCount" 
                :min="2" 
                :max="8"
                type="number"
            >
        </label>
        <label class="grid-info-120" role="button">
            Search Class
            <input v-model="state.props.searchClass" class="form-control">
        </label>
        <label class="grid-info-120" role="button">
            Search Placeholder Text
            <input v-model="state.props.searchPlaceholder" class="form-control">
        </label>
        <label class="grid-info-120" role="button">
            Placeholder Class
            <input v-model="state.props.placeholderClass" class="form-control">
        </label>
        <label class="grid-info-120" role="button">
            Placeholder Text
            <input v-model="state.props.placeHolder" class="form-control">
        </label>
    </template>
</pockets-story-demo-container>
</template>
<script setup lang="ts">
import HTML from "./example.html?raw"

let initState = {
    props: {
        modelValue: "",
        search: "",
        openCount: 4,
        searchClass: "form-control rounded-0 text-black",
        searchPlaceholder: "Enter text to filter options...",
        placeholderClass: "p-1 form-control d-flex align-items-center",
        placeHolder: "Placeholder text is shown when no option is selected"
    }
} 

</script>