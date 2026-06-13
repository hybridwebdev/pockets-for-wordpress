<template lang="pug">
slot(
    v-if='root'
    :root='root'
)
slot(
    name='loading'
    v-if='loading'
)
</template>
<script setup lang="ts">

import { trees } from "@pockets-node-tree"
import type { treeSource } from "@pockets-node-tree"

import { computed, watch, ref } from "vue"
import { $pockets } from "@pockets-core"

let props = defineProps( {
    source: {
        type: Object,
    } as treeSource,
    templateKey: {}
} )

let loading = ref( false )

let fetchTemplate = async () => {

    if( !props.source.crud_resource) {
        return
    }

    if( ! trees.templates[ props.templateKey ] ?? false ) {

        loading.value = true

        try {

            let res = await $pockets.crud( 'node-tree/root' ).init( props.source ).read( [ 'hydrate:<=' ] )

            trees.templates[ props.templateKey ] = res.root 

        } catch(e) {

            $pockets.toast.error( e.message )

        } finally {
            loading.value = false
        }

    }

}

watch( () => props.templateKey, fetchTemplate, { immediate: true } )

let root = computed( () => trees.templates[ props.templateKey ] ?? false ) 

</script>