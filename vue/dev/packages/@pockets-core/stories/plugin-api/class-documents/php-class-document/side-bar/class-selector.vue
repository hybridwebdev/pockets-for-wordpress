<template lang='pug'>
pockets-fancy-select(
       v-model='api.active.documentName'
    v-model:search='api.active.search'
    class='rounded-0 form-control p-0 fw-8 bg-grey-700 text-white fancy-scroll border-end border-start border-bottom border-5 border-grey-600'
    search-class='p-2 rounded-0 form-control fw-8 bg-grey-700 border-5 border-end border-start border-top border-bottom-0 text-white border-grey-600'
    placeHolder='Select a document...'
    placeholderClass='p-2 form-control d-flex align-items-center text-white bg-grey-700 border-grey-600 border-5 rounded-0 fw-8'
    containerClass=''
    selectClass='p-2 '
    #default="{ focused }"

)
    option( class='p-4' :value="null" disabled hidden ) Select a document
    option( v-if='!api.documentsByGroup' disabled class='text-white fw-8') No results for your search.
    optgroup(
        v-for='(documents, title) in api.documentsByGroup'
        :label='title'
        class='text-primary-lt fw-8 p-0 fs-20 mb-1'
    )   
        option( 
            v-for='(document, k) in documents'
            :value='document.info.name'
            :label='focused ? `${document.title}` : `${title} - ${document.title}` '
            class='fw-4 text-white fs-16 p-1 ps-2' 
        ) 
</template>
<script lang='ts' setup>
import { useApi } from "../use-api"
import { computed } from "vue"


let api = useApi()
 
</script>
<style scoped lang="scss">
option {
    cursor: pointer;
    transition: .5s opacity;
    &:hover {
        opacity: .8;
    }
}
</style>