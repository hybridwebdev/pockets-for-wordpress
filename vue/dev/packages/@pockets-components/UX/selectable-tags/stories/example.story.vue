---
route: 'pockets vue/components/ux/selectable-tags/Example'
tag: 'pockets-ux-selectable-tags'
---
<template>
  <pockets-story-demo-container
    :state='initState'
  >
    <template #default='{ state }'>
      <div class="grid columns-1 gap-1">
        <pockets-story-demo
          :state="state"
          :html="HTML"
        >
        </pockets-story-demo>
        <pockets-ux-code-block :code='state.props'/>
      </div>
    </template>
  </pockets-story-demo-container>
</template>
<script setup lang="ts">
import HTML from "./example.html?raw"
let initState = () => ({
  props:{
    modelValue: [],
    search: "",
    options: [
      'apples', 
      'bananas', 
      'cucumbers',
      'dill pickles',
      'elephants',
      'fuzzy kitty cats',
      "doggies",
      'oranges'
    ],
    value: [
      'apples',
      'bananas'
    ]
  }
})
</script> 