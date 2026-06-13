<template>
<div 
    class="grid columns-1 gap-2 p-2"
    style="--bs-link-color: var(--bs-grey-md); --bs-link-hover-color: var(--bs-primary-lt );"
    v-if="route.meta.is404"
>
    <h1 class="col-12 text-accent-lt fw-8" id=""> 404 Content Not Found </h1>
    
    <div class="col-12 fs-18">
        <p class=""><strong>Well, this is awkward.</strong></p>
        <p class="">It looks like the page you’re looking for has wandered off, never existed, or just isn’t
            here anymore.
        </p>
        <p class=""><strong>Here are a few things you can try:</strong></p>
        <ul>
            <li>
                <p class="">Double-check the URL for any typos.</p>
            </li>
            <li>
                <p class=""><a class="" href="/">Head back to the homepage</a>.</p>
            </li>
        </ul>
    </div>
</div>
</template>
<script setup>

import { useRoute } from "vue-router"

let route = useRoute()

</script>