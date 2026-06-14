<template lang="pug">
Transition(
  v-bind='props'
  :name='TransitionName'
)
  render(
    :key='indexKey'
    v-bind='slide'
    :class='props.wrapperClass'
  )
    slot( 
      v-bind='slide' 
    )
</template>
<script setup lang='ts'>
import { computed, h, useSlots } from "vue";
import { rotateIndex } from "@pockets-core/utils/dot-prop/array"
import { context } from "../"
import type { renderSlidesProps }  from "../"
let $slots = useSlots()

let api = context.inject.api()

let props = withDefaults( defineProps< renderSlidesProps >(), {
    offset: 0,
    tag: "div",
    wrapperClass: "pockets-slider-slide"
} )

let TransitionName = computed( () => {
  let name = props.name ?? api.name
  return `${name}-${api.direction}`
} )

let slide = computed( () => api.slides[indexKey.value] )

let indexKey = computed( () =>  rotateIndex( api.slides as [], api.index, props.offset ) )

let render = ( $props, {slots}) => { 

  if( $slots.slide ) {
    /**
      Can't return all slots or Transition breaks. Template therefore must have 1 root node.
    */
    return $slots.slide( $props )[0] 
  }

  if( api.mode =='data') {
    return h( props.tag, {}, slots.default( $props ) ) 
  }

  if( api.mode =='template' ) {
    return h( props.tag, {}, slide.value )
  }

}
</script>
<style lang="scss" scoped>

.pockets-slider-slide {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

</style>