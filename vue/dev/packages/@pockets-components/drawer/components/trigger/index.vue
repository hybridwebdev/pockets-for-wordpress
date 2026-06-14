<template>
  <component 
    class="pockets-ux-drawer-trigger"
    :is="tag" 
    :open="drawer.open" 
    @click="drawer.open = !drawer.open"
    v-if="drawer"
  >
    <slot :drawer="drawer">
      <i 
        class="fa fa-chevron-right" 
      />
    </slot>
  </component>
</template>

<script setup lang="ts">

import { context } from "../../context"
import type { drawerAPI } from "../../types/"

let drawer = context.inject.drawerApi( false )

interface $props {
  /**
    Used as element for container. 
  */
  tag?: string
}

let props = withDefaults(defineProps<$props>(), {
  tag: "button"
})

defineSlots<drawerAPI>() 

</script>

<style lang="scss" scoped>
.pockets-ux-drawer-trigger {
  
  i {
    transition: .5s transform
  }

  &[open='true'] {
  
    i {
      transform: rotate( 180deg )
    }
  
  }

}
</style>