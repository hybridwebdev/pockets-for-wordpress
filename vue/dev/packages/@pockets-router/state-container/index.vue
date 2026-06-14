<template>

<pockets-router
    :routes='$routes'
    v-if='!isInsideRouter'
>
    <render-slot v-slot="slotProps">
      <slot v-bind="slotProps" />
    </render-slot>
</pockets-router>

<render-slot 
    v-slot="slotProps" 
    v-if='isInsideRouter'
>
    <slot v-bind='slotProps' />
</render-slot>

</template>
<script setup lang="ts">

import renderSlot from "./render-slot.vue"
import { routerKey } from 'vue-router'
import { inject, computed } from 'vue'

let injectedRouter = inject( routerKey, null )

let isInsideRouter = computed( () => injectedRouter )

/**
    Sets up dummy route so that route can be resolved without errors
*/
let $routes = [
    {
        path: "/:catchAll(.*)",
        component: {
            template: "<!-- placeholder -->"
        }
    }
]

</script>