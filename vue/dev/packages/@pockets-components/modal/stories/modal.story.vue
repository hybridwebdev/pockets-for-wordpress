---
tag: "pockets-modal"
component: "@pockets-components/modal/index.vue"
route: "pockets vue/components/modal/example"
---
<template>
  <pockets-story-demo-container
    :state="initState"
    :html="HTML"
  >
    <template #controls="{ state }">
      <label 
          class="grid-info-120" 
          v-tooltip="'Toggle whether clicking outside modal contents closes modal'"
          role="button"
      >
          <span>Click outside</span>
          <input 
            type="checkbox" 
            class="form-control-switch ms-auto"
            v-model='state.props.clickOutside'
          >
      </label>
    </template>
  </pockets-story-demo-container>
</template>
<script setup lang="ts">
import HTML from "./example.html?raw"
let initState = () => ({
  props:{
    open: false,
    teleport: "body",
    clickOutside: true
  }
})
</script>
