<template>
    <component :is="layout" v-bind="$attrs">
        <template v-for="(_, name) in $slots" v-slot:[name]="slotProps">
            <slot :name="name" v-bind="slotProps" />
        </template>
    </component>
    
</template>
<script setup lang='ts'>
/**
    This component serves as a wrapper that does some basic setup and then provides
    an api that views can consume for rendering controls, content etc.
*/

import { setup } from "./setup"
import { context } from "./context"
import type { $loaderProps, $loaderSlots } from "./types/index.ts"
import { useLayouts } from "./layouts/use-layouts"

let props = withDefaults( defineProps< $loaderProps >(), {
  
  clearable: false,
  selected: null,
  multiple: false,
  busy: false,
  cachingEnabled: true,
  name: false,
  layout: "default",

  query: () => ({
    model: "images",
    action: 'read',
    init: {
      post_type: "attachment",
      post_mime_type: 'image',
      post_status: 'inherit',
      posts_per_page: 20,
      paged: 1
    },
    input: {
      items: {
        url: {
          size: "thumnail"
        },
        ID: ""
      },
      pagination: ''
    }
  }),

} )

defineOptions( { 
    inheritAttrs: false
} )

let slots = defineSlots< $loaderSlots >()

let { layout } = useLayouts( props )

let selected = defineModel('selected')
let api = setup( props, { selected } )

context.provide.api( api )

</script>
