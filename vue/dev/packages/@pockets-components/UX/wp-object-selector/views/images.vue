<template>
<div 
    class='grid columns-5 gap-1'
    v-if='connection.results'
>
    <button 
        v-for='result in connection.results.items' 
        class='d-flex position-relative thumbnail active btn btn-primary-md p-0 rounded-0'
        :class='{ selected: selectedIDS.selected.includes(result.ID) }'
        @click='selectedIDS.select(result.ID)'
        :disabled='!selectedIDS.select'
        :key="result.ID"
        type="button"
    >
        <img 
            :src='result.url' 
            class='img-fluid m-auto' 
            style='height:100px;object-fit:cover'
        >
        <i 
            class="fa fa-check position-absolute end-0 bottom-0 p-half bg-accent-dk text-white"
            v-if='selectedIDS.selected.includes(result.ID)'
        />
    </button>
</div>

</template>

<script setup>

import { context } from "../context"
let { selectedIDS, connection } = context.inject.api()
defineOptions({
    inheritAttrs: false
})
</script>
<style scoped lang='scss'>
    .thumbnail {
        border:5px solid transparent;
        &.selected {
            border-color: var(--bs-accent-dk)
        } 
    }
</style>