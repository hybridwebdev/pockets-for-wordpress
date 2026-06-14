<template>
  <component
    class="pockets-ux-drawer" 
    :is="tag"   
    :open="drawer.open"     
  >  
     <slot v-bind="drawer"/>
  </component>
</template>

<script setup lang="ts">  
 
/*
  @component-description
  The main container for the drawerer. Holds state and provides an api
  to the panel/trigger components.  
*/
import { computed, reactive } from 'vue'  
import { context } from "../../context"
import type { drawerAPI } from "../../types/"  

const open = defineModel<boolean>( "open", { default: true } )

interface $props {
  /**  
    Used as element for container. aaaaa   
  */ 
  tag?: string
}

let props = withDefaults(defineProps<$props>(), {
  tag: "div"
})

let drawer = reactive( {

  open: computed({
    get: () => open.value,
    set: (value: boolean) => open.value = value
  } )
 
} )
   
context.provide.drawerApi( drawer )
 
defineSlots<drawerAPI>() 

</script>
 