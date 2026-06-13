<template>
    <div 
        class="pockets-dashboard-main border-5 border-top border-bottom border-grey-500 bg-grey-700 text-white fancy-scroll cq" 
    >

        <render-404/>
        <pockets-router-view />

    </div>
</template>
<script setup>

import render404 from "../404/index.vue"

</script>
<style lang="scss" scoped>

.pockets-dashboard-main {

    --bs-link-color-rgb:  var(--bs-primary-lt-rgb);
    grid-row: 2;
    grid-column: 2;
    overflow-y: auto;   
    @media(max-width: 1040px) {
        grid-column: 1 / span 2;
        grid-row: 2;
        padding-left: 40px !important;
    }

}


</style>