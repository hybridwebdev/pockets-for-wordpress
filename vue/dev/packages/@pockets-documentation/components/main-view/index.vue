<template>
    <div class="pockets-dashboard">

        <devBar/>

        <side-bar/>

        <main-area/>

    </div>
</template>
<script setup>
import { computed, reactive } from "vue"

import { useRoute } from "vue-router"
import { context } from "@pockets-documentation"

import sideBar from "./side-bar/index.vue"
import devBar from "./dev-bar/index.vue"
import mainArea from "./main-area/index.vue"

let route = useRoute()

context.provide.story( computed( () => route.meta ) )

</script>
<style lang="scss" scoped>

.pockets-dashboard {

    display: grid;
    height: 100vh;                  
    grid-template-rows: auto 1fr;    
    grid-template-columns: auto 1fr; 

}

</style>