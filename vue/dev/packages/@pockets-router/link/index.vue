<template>
  <a
    :class="elClass"
    v-bind="$attrs"
    :href="link.href"
    @click="link.navigate"
    router-link='true'
  >
    <slot/>
  </a>
</template>
<script setup lang="ts">

import { RouterLink, useRouter, useLink, useRoute, type RouterLinkProps } from 'vue-router'
import { computed, reactive } from "vue"
import { getLinkClass } from "./get-link-class"

let route = useRoute()
let router = useRouter()

type $props = RouterLinkProps & {
  inactiveClass?: string
  useBaseLink?: boolean
}

let props = withDefaults( defineProps< $props >(), {
  useBaseLink: true
})

let $props = computed( () => {

  if( typeof props.to == 'string' ) {
  
    let base = router.options.linkBase ?? ""
    
    if( !props.useBaseLink ) {
      base = ''
    }

    return {
      ...props,
      to:`${base}${props.to}`.replace(/([^:]\/)\/+/g, '$1')
    }

  }

  return props

} )

let link = reactive( useLink( $props.value ) )

let isExactMatch = computed(() => {
  
  let resolved = router.resolve( $props.value.to )
  
  return (
    resolved.path === route.path 
    &&
    JSON.stringify( resolved.query ) === JSON.stringify( route.query )
  )

})

let elClass = computed(() => ({
  
  [getLinkClass(
    $props.value.activeClass,
    router.options.linkActiveClass,
    'active'
  )]: link.isActive,

  [getLinkClass(
    $props.value.inactiveClass,
    router.options.linkInactiveClass,
    ''
  )]: !isExactMatch.value,

  [getLinkClass(
    $props.value.exactActiveClass,
    router.options.linkExactActiveClass,
    'active-exact'
  )]: isExactMatch.value,

}))
 
</script>