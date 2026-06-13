<template lang="pug">
div( 
    v-if='connection.results' 
    class='d-flex gap-1' 
)
    div( 
        class='d-flex gap-1 flex-grow-1' 
    )
        button( 
            class='fa fa-chevron-left btn btn-accent-dk fw-8 flex-shrik-1'
            @click='query.init.paged = connection.results.pagination.prev'
            v-tooltip="'Previous Page'"
            :disabled='query.init.paged == 1'
        )
        select( 
            v-model='query.init.paged' 
            class='form-control p-1 flex-grow-1'
            v-tooltip="'Current Page'"
        )
            option( 
                v-for='i in connection.results.pagination.pages'
                :value='i'
            ) Page {{i}} of {{connection.results.pagination.pages}}

        button( 
            class='fa fa-chevron-right btn btn-accent-dk fw-8 flex-shrik-1'
            @click='query.init.paged = connection.results.pagination.next'
            v-tooltip="'Next Page'"
            :disabled='query.init.paged == connection.results.pagination.next'
        )

    div( class='grid gap-1 columns-2 flex-shrink-1' )

        button(
            class='btn btn-accent-dk rounded-0'
            @click='selectedIDS.selectAll'
            :disabled='!selectedIDS.selectAll'
        ) Select All
        button(
            class='btn btn-danger rounded-0 text-white'
            @click='selectedIDS.clearAll'
            :disabled='!selectedIDS.clearAll'
        ) Clear All

</template>
<script setup>

import { context } from "../context"
let { selectedIDS, connection, query } = context.inject.api()
defineOptions({
    inheritAttrs: false
})
</script>