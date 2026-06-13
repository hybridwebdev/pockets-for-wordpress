<template>
  <slot/>
</template>
<script setup lang="ts">

/*
  @component-description
  This component is renderless. It mimics VUE's native watch function, providing a way to use
  watch functionality in templates.
*/

import { watch } from 'vue'
import type { WatchSource } from 'vue'

type $Props = {

  /** 
    Source should be a VUE reactive or a function that returns reactive properties.
  */
  source: WatchSource<unknown>

  /**
    Callback is fired when the watched source changes.  
    It will be passed 2 arguments; newValue and Oldvalue. 
    <br>
    Example: <code>callback: fn( newValue, oldValue ) => { ...stuff }</code>
  */
  callback: (value: unknown, oldValue: unknown) => void
  /**
    If true, will watch nested properties of source.  
  */
  deep?: boolean
  /**
    If true, will fire callback immediately when component is mounted.
  */
  immediate?: boolean
}

let props = withDefaults( defineProps< $Props > (), {
  deep: false,
  immediate: false
})

const watchSource = typeof props.source === 'function' ? props.source : () => props.source

watch(
  watchSource,
  (value, oldValue) => props.callback(value, oldValue),
  {
    deep: props.deep,
    immediate: props.immediate
  }
)

defineSlots<{
    /**
      Just a generic slot with no bindings.
    */
    default: {}
}>()

</script>
