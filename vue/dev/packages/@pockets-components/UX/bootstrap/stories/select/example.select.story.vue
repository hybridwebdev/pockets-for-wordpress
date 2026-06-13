---
tag: "pockets-ux-bootstrap-interface"
route: "pockets vue/components/ux/bootstrap/select/example"
---
<template>
  <pockets-story-demo-container 
    :state='initState'
  >

    <template #default='{ state }'>

      <pockets-story-demo
        :state="state"
        :html="HTML"
      >
      
        <template #demo>

          <render-html 
            :innerHTML='HTML'
            :state='state'
            class='grid columns-1 gap-2'
          />

          <label class='text-primary-lt'>Results</label>

          <pockets-ux-code-block :code='state.props.value'/>
          
          <div class='bg-grey-800 p-1'>
            <div :class='state.props.value'>
                <div v-for='i in 12' class='p-1 bg-grey-700'>{{ i }}</div>
            </div>
          </div>

        </template>

      </pockets-story-demo>

    </template>

  </pockets-story-demo-container>

</template>

<script setup lang="ts">

import HTML from "./example-select.html?raw";

let initState = {
  props:{
    value: "p-1 grid columns-6 col-12 gap-1 bg-black text-white text-center",
    breakpoint: "none"
  }
} 
</script>