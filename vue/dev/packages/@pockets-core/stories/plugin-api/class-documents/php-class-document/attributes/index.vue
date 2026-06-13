<template lang='pug'>
component(   
    v-for='(attribute, k) in attributes' 
    :is='templates[k]' 
    :attribute="attribute"
) 
</template>
<script setup>
import { computed } from 'vue'
import { useApi } from "../use-api"

import crudReadField from "./crud-read-field.vue"
import crudSchema from "./crud-schema.vue"

let api = useApi()

let props = defineProps({
    documentSection: {
        type: [Object, Boolean],
    },
    item: {}
})

let templates = {
    crud_read_field: crudReadField,
    "pockets\\crud\\schema\\attribute" : crudSchema
}

let attributes = computed( () => {
    
    let { documentSection: section } = props
    
    if( typeof section.attributes !='object' ) return false;

    let tags = Object.fromEntries(
        Object.entries(section.attributes)
        .filter(({0: k, 1: v}) => {
            if(templates[k]) return true
            return false
        } )
    )

    if( Object.entries(tags).length == 0 ) return false;

    return tags

})

</script>