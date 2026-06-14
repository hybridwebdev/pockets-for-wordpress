<template lang='pug'>
div(

)
    div(
        class='bg-grey-800 m-0 p-2 py-0 fs-20 fw-8 d-flex align-items-center'
        
    ) 
        div(

        )   Class Documentation

        button( 
            class='ms-auto border-0 p-2 pe-0 bg-grey-800 text-white'
            @click="api.options.showFilters = !api.options.showFilters"
        )
            span(class='pe-1') Filters
            span(
                role='button'
                :class='{ "fa fa-chevron-up ms-auto": api.options.showFilters, "fa fa-chevron-down": !api.options.showFilters  }'
            ) 
    div(
        class='grid columns-2 align-items-start gap-2 pt-2'
        v-if='api.options.showFilters'
    )
        div(v-for='group in groups' class='grid gap-3 columns-1 p-2 bg-grey-800' )

            span( class='fw-8 fs-20') {{ group.title }}

            div(
                class='grid gap-2 columns-2 '
            )
                label(
                    v-for='k in group.keys' 
                    class='grid-info-80 fs-16'
                    role='button'
                )
                    | {{ k}}
                    input(
                        type='checkbox'
                        v-model="api.options[group.key][k]"
                        class='form-control-switch outline-none ms-auto border-0'
                    ) 
</template>
<script lang='ts' setup>
import { useApi } from "../use-api"
let api = useApi()

let groups = [
    {
        title: "Method Types",
        keys: Object.keys(api.options.methodTypes),
        key: 'methodTypes'
    },
    {
        title: "Property Types",
        keys: Object.keys(api.options.propertyTypes),
        key: 'propertyTypes'
    }
]
</script>
