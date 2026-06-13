<template>
<div
    class='pockets-ux-repeater'
    :class='containerClass'
>
    <before-items/>
    <div
        ref='sortableContainerRef'
        class='pockets-ux-repeater-items'
        :class='api.itemsClass'
        v-show='!api.isEmpty'
    >
        <item-list/>
    </div>
    <after-items/>
</div>
</template>
<script lang="ts" setup>
// @ts-nocheck
import afterItems from "../../components/after-items.vue"
import beforeItems from "../../components/before-items.vue"
import itemList from "./stacked-item-list.vue"

import { useApi } from "../setup/"
import type { apiProps } from "../../types/"

const props = withDefaults( defineProps< apiProps >(), {

    containerClass: "grid columns-1 gap-2 pockets-ux-repeater-stacked",
    itemsClass: "grid columns-1 gap-half",
    itemClass: "border-5 border-accent-lt border-end border-start border-bottom border-top",

    itemInnerClass: "grid columns-1 gap-1 border-bottom border-5 border-accent-lt pb-2",
    itemControlsClass: "",

    itemTriggerClass: "btn btn-accent-dk rounded-0 flex-grow-1 text-break flex-grow-1 text-start p-1 d-flex align-items-center pockets-ux-repeater-toggle-tab-button",

} )
 
let { sortableContainerRef, api } = useApi( props )

</script>
 