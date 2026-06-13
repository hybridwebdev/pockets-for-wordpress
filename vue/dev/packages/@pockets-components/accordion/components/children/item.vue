<template>
<component 
    :is="tag"
    v-bind="state"
>
    <slot v-bind="state"/>
</component>
</template>
<script setup lang="ts">
import { setup } from "./setup"
import type { accordionOptions } from "../../"

type props = accordionOptions & {
}

let props = withDefaults( defineProps<props>(), {
    tag: "div",
} )
 
let state = setup( props, "itemOptions" )

</script>