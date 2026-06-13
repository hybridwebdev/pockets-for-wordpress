<template>
<div 
    class="pockets-accordion-content"
    :open="state.open"
>
    <div class="pockets-accordion-content-inner">
        <component 
            :is="tag"
            v-bind="state"
        >
            <slot v-bind="state"/>
        </component>
    </div>
</div>
</template>
<script setup lang="ts">
import { setup } from "./setup"
import type { accordionOptions } from "../../"
 
type props = accordionOptions & {
}

let props = withDefaults( defineProps<props>(), {
    tag: "div",
} )
 
let state = setup( props, "contentOptions" )

</script>
<style lang="scss">
.pockets-accordion-content {
    display: grid !important;
    grid-template-rows: 0fr;
    transition: .5s all;
    &[open='true']{
        grid-template-rows: 1fr;
    }
    .pockets-accordion-content-inner {
        overflow: hidden;
    }
}
</style>