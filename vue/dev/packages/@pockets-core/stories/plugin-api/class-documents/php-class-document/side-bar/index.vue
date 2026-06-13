<template lang='pug'>
div( 
    class='position-sticky fw-6 p-1 grid columns-1 gap-1 bg-grey-800' 
    style='z-index:1; top:40px'
)
    class-selector()
    
    div(
        class='grid columns-1 gap-1 '
        v-if='api.document'
    )    
        button( 
            class='fs-20 btn btn-grey-700 rounded-0 p-1'
            @click='api.active.tab="class"'
            @focus='api.active.tab="class"'
            :class='{ "active": api.active.tab=="class"}'
        ) Class Info

        div( class='grid columns-1 gap-0')

            button( 
                :disabled='!api.document.properties'
                class='fs-20 btn btn-grey-700 rounded-0 p-1'
                :class='{ "active": api.active.tab=="property"}'
                @click='api.active.tab = "property"'
                @focus='api.active.tab = "property"'
            ) Properties

            div( 
                class='grid columns-1 gap-1 bg-grey-700 scrollable p-1'
                v-if='api.active.tab == "property"'
            )
                button( 
                    v-for='property in api.document.properties'
                    class='btn fw-8 p-1 btn-accent-dk rounded-0 text-break'
                    @click='api.jumpTo("property", property.name)'
                    @focus='api.jumpTo("property", property.name)'
                    :class='{ active: api.active.property == property.name}'
                ) {{ property.name }}

        div(
            class='grid columns-1 gap-0'
        )
            
            button(
                class='fs-20 btn btn-grey-700 rounded-0 p-1'
                :class='{ "active": api.active.tab=="method"}'
                @click='api.active.tab="method"'
                @focus='api.active.tab="method"'
                :disabled='!api.document.methods'
            ) Methods

            div( 
                class='grid columns-1 gap-1 scrollable p-1 bg-grey-700'
                v-if='api.active.tab=="method"'
            )
                button( 
                    class='btn fw-8 btn-accent-dk rounded-0 p-1 text-break'
                    v-for='method in api.document.methods'
                    @click='api.jumpTo("method", method.name)'
                    @focus='api.jumpTo("method", method.name)'
                    :class='{ active: api.active.method == method.name}'

                ) {{method.name}}
         
</template>
<script setup lang='ts'>
import classSelector from "./class-selector.vue";
import { useApi } from "../use-api"
let api = useApi()
</script>
<style scoped lang='scss'>
    .scrollable {
        max-height:40vh;
        overflow:auto
    }
</style>