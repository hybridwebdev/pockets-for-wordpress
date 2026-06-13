<template>
<slot v-bind="connection"/>
</template>
<script lang='ts' setup>
import { setup } from "./base"
import type { crudConnection, crudConnectionApi } from "../types/index.ts"

interface $props extends crudConnection {

    /**
        Output args
    */
    output?: any

    /**
        If true, connection will automatically be run when component mounts.
    */
    autoLoad?: boolean

    /**
        How long to show connection result message for.
    */
    messageTime?: number

    /**
        If true, subsequent connection loads with the same query will use a cached version.
    */
    cachingEnabled?: boolean

    /**
        If true, results will be cleared every time connection is loaded.
    */
    clearOnLoad?: boolean

    contextURL?: boolean | string

    hash?: number

}

let props = withDefaults( defineProps< $props >(), {
    
    model: "posts",
    action: "read",
    
    init: () => ( {
        post_type: "post"
    } ),
    input: () => ({
        items: ['title']
    }),
    autoLoad: true,
    messageTime: 3000,
    cachingEnabled: false,
    clearOnLoad: false,
    contextURL: false,
    hash: 0

} )

let connection:crudConnectionApi = setup(props)

if( props.autoLoad === true ) {
    connection.load( props )
}

defineSlots<{
    /**
        Provides interface for Crud Connection 
        @binding {function} load Used to load connection.
        @binding {any} results Results of calling load.
        @binding {boolean} failed Will be true if load call fails. Resets each time load is called.
        @binding {boolean} loading When load is called, this will be true until connection resolves.
        @binding {boolean} showMessage When load is called, this will show when it is resolved for the duration set in the messageTime property.
        @binding {boolean} hasRun Initially set to false. Becomes true when first load call is resolved.
    */
    default: crudConnectionApi
}>()
</script>
