<template>
    <div 
        class="col-12 p-2 bg-grey-800 grid columns-1 gap-2 text-white search-container max-width-lg m-auto shadow-menu" 
        style="height: 80vh; "
    >
        <div class="d-flex align-items-stretch gap-10 border-4 border-bottom border-grey-md pb-2">
            <form v-pockets-form-handler="{ submit }" class="flex-grow-1">
                <div class="d-flex">
                    <input 
                        class="form-control p-1" 
                        placeholder="Enter search" 
                        ref="searchBar"
                        :value="query.search"
                        name="search"
                        autocomplete="off"
                    />
                    <button
                        class="btn btn-grey-700"
                    >
                        <i
                            class="fa fa-search"
                        />
                    </button>
                </div>
            </form>
            <button 
                class="btn btn-grey-700" 
                @click="close"
                v-tooltip="'Close search'"
            >
                <i class="fa fa-times"/>
            </button>
        </div>

        <div class="panel-container fs-20">

            <div v-if="!query.search || query.search.length==0">
                Enter a search to see results.
            </div>

            <div v-if="query.search && query.search.length!=0 && searchResults.length == 0" class="text-start">
                <p class="m-0">Sorry, no results for <span class="text-primary-lt fw-8">"{{ query.search }}"</span>.</p>
            </div>

            <div class="grid columns-1 gap-1">
                <div v-for="result in searchResults">
                    <div class="bg-grey-700 p-2">
                        <pockets-router-link 
                            :to="result.path" 
                            class="grid gap-1 align-items-center lh-40 text-decoration-none"  
                            style="grid-template-columns: 40px 1fr"
                        >
                            <i :class='result.meta.storyIcon'></i> 
                            <span class="lh-20 text-capitalize">{{ titleParser(result) }} </span>
                        </pockets-router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { onMounted, ref, computed } from 'vue';
import { useRouter } from 'vue-router'

let router = useRouter()
let query = router.$api.useQuery()
let searchBar = ref()

function titleParser( result ) {
    
    let path = result.path.substring(1).replaceAll('-', ' ').split('/').join(' / ')
    
    if( path == '' && ( result?.meta?.title ?? false ) ) {
        return result.meta.title
    }
    
    return path 
    
}

let searchResults = computed( () => {
    
    let results = router.getRoutes()

    let { search = '' } = query.value

    search = search.toLowerCase()
    
    if( search == '' ) {
        return []
    }

    let filters = {

        type: (route, { storyType = '' } ) => {
            let typesAllowed = [ 'md', 'vue' ]
            return typesAllowed.includes( storyType ) 
        },

        storyMD: (route, { storyType = '', content = null, title = null } ) => {
            
            if( storyType !='md' ) {
                return true
            }

            if( route.path.toLowerCase().includes( search ) ) {
                return true
            }

            if( content && content.length > 0 && content.toLowerCase().includes( search ) ) {
                return true
            }

            if( title && title.length > 0 && title.toLowerCase().includes( search ) ) {
                return true
            }
            
        },

        storyComp: ( route, { storyType = '', tag = '', component = '', title = false } ) => {

            if( storyType !='vue' ) {
                return true
            }

            if( route.path.toLowerCase().includes( search ) ) {
                return true
            }

            if ( tag.toLowerCase().includes( search ) ) {
                return true
            }

            if ( component.toLowerCase().includes( search ) ) {
                return true
            }

            if( title && title.length > 0 && title.toLowerCase().includes( search ) ) {
                return true
            }

        },

    }

    const activeFilters = [
        filters.type,
        filters.storyMD,
        filters.storyComp
    ]

    results = results
        .filter( route => activeFilters.every( fn => fn( route, route.meta ) ) )
        .slice(0, 50)
        .sort((a, b) => (b.meta.storyType === 'md') - (a.meta.storyType === 'md'))

    return results

})

let close = () => {
    query.value = {
        ...query.value,
        showSearch: null
    }
} 

let submit = (formData) => {
    query.value = {
        ...query.value,
        ...formData
    }
}

onMounted( () => {
    searchBar.value.focus()
} )

</script>
<style lang="scss" scoped>

.search-container {
    grid-template-rows: auto 1fr;
    --bs-link-color-rgb: var(--bs-primary-lt-rgb);
    --bs-link-hover-color-rgb: var(--bs-white-rgb);
}
.panel-container {
    overflow-y: scroll;
    overscroll-behavior: contain;
    &::-webkit-scrollbar {
        width: 0px;
    }
}

</style>