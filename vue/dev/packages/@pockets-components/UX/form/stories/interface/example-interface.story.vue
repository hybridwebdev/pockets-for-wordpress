---
tag: 'pockets-form-container'
route: "pockets vue/components/ux/Form/Example Form Container"
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

          <pockets-ux-json-editor
              v-model:modelValue="state.props"
          />

        </template>

      </pockets-story-demo>

    </template>

  </pockets-story-demo-container>

</template>

<script setup lang="ts">

import HTML from "./example-interface.html?raw";

let initState = () => ({
  props:{
    endpoint: "default-form",
    formId: "test-form",
    formData: {
      name: "John Doe",
      email: "j@doe.com"
    },
    validationOptions: {
      validClass: "text-confirm",
      invalidClass: "text-danger",
    },
    inputOptions: {
      validClass: "border-confirm",
      invalidClass: "border-danger",
    },
    validation: [
    ]
  }
})
</script>