<template>
   
    <button 
        class="btn btn-grey-700 p-half px-1" 
        @click="setOpen( query.showSearch == 'true' ? null : 'true' )"
        v-tooltip="'Search documents'"
    >
        <i class="fa fa-search"/>
    </button>
    
    <pockets-modal 
        class="d-flex"
        :open="query.showSearch == 'true'"
        @update:open="setOpen"
        :click-outside="true"
        style="z-index: 99"
    >
        <content/>
    </pockets-modal>
    
</template>
<script setup>
import { useRouter } from 'vue-router';
import content from './content.vue'

let router  = useRouter()

let query = router.$api.useQuery()

let setOpen = (showSearch) => {
    query.value = {
        ...query.value,
        showSearch: showSearch == false ? null : showSearch
    }
}
</script>