<template>
<slot 
    :route='route' 
    :router='router' 
    :setQuery='router.$api.setQuery' 
    :query='query' 
/>
</template>
<script setup lang='ts'>
import { useRoute, useRouter } from "vue-router"

let router = useRouter()
let route = useRoute()

const query = new Proxy( route.query, {

  get: (_, key: string) => route.query[key],
  set(_, key: string, value){

    router.$api.setQuery( { 
        ...route.query,
        [key]: value
    } )

    return true

  }

} )

defineSlots<{
    /**
        Provides Api to state
        @binding {reactive} query all query param properties as a reactive.
        @binding {function} setQuery Call this with new params to update the query.
        @binding {reactive} route represents current route
        @binding {Object} router Router instance
    */
    default: {}
}>()

</script>