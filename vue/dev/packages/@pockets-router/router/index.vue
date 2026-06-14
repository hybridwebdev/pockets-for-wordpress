<template>
    <div
        @click="clickHandler"
        :router-id="routerID"
    >   
        <slot :router='router' :route='router.currentRoute'/>
    </div>
</template>
<script lang="ts" setup>

import type { $routerProps } from "@pockets-router"

import { useProvide } from "./use-provide"
import { useCreateRouter } from "./use-create-router"
import { useHandlers } from "./use-handlers"
import { useSyncRouters } from './use-sync-routers'

let props = withDefaults( defineProps< $routerProps >(), {
    base: "/",
    history: "html5",
    routerID: "router",
    sync: "both",
} )

let { router } = useCreateRouter( { props } )

let { clickHandler } = useHandlers( { router } )

useProvide( { router, props } )
useSyncRouters( { router, props } )

</script>