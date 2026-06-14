<template>
    <slot/>
</template>
<script setup lang="ts">
/**
    This component takes some of the options that router uses. It allows you 
    to create context with different options without having to declare a new route.
    Useful if you want to override some options for a portion of your router. 
*/

import type { $routerProps } from "@pockets-router"

import { provide } from 'vue'

import { routerKey, useRouter} from 'vue-router'

let router = useRouter()

let props = defineProps< Omit<$routerProps, 'routes' | "history" | "base" | "sync"> >()

let options = {
    ...router.options,
    ...props
}

provide( routerKey, {
    ...router,
    options
} )

</script>