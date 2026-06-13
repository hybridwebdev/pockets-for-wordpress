<template>
  <component
    :is="tag" 
    :open="drawer.open" 
    class="pockets-ux-drawer-panel"
    v-if="drawer"
    :direction="direction"
  >
    <slot :drawer="drawer"/>
  </component>
</template>

<script setup lang="ts">

import { context } from "../../context"

let drawer = context.inject.drawerApi( false )
import type { drawerAPI } from "../../types/"

interface $props {
  /**
    Determins direction panel expands/collapses.
    Vertical = grid-template-rows, horizontal = grid-template-columns
    You can control the dimensions of the expand/collapse by passing the following as style properties:
    --expand: {value} default - 1fr
    --collapse: {value} default - 0fr
  */
  direction?: "vertical" | "horizontal"
  /**
    Used as element for container. 
  */
  tag?: string
}

let props = withDefaults(defineProps<$props>(), {
  direction: "horizontal",
  tag: "div"
})

defineSlots<drawerAPI>() 

</script>
<style lang="scss" scoped>
.pockets-ux-drawer-panel {

  display: grid;      
  
  --expand: 1fr;
  --collapse: 0fr;

  transition: grid-template-columns .5s ease-in-out, grid-template-rows .5s ease-in-out;

  &[ direction='horizontal' ] {

    grid-template-columns: var(--expand);

    &[open='false']{
        grid-template-columns: var(--collapse);
    }

  }
  
  &[ direction='vertical' ] {

    grid-template-rows: var(--expand);

    &[open='false']{
        grid-template-rows: var(--collapse);
    }

  }

}

</style>