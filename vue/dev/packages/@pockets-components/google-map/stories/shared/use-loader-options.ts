import { reactive } from "vue"
import { useStorage } from "@vueuse/core";

let $loaderOptions = useStorage('pockets-documentation/google-maps-demo', { 
    apiKey: ""
} )

/**
    Migrating to vite and story-demo-state changes broke the ability to use
    localStorage directly because of the ref. So this is better than changing 
    all of the google map stories.
*/
export let loaderOptions = reactive({

    get apiKey(){
        return $loaderOptions.value.apiKey
    },
    set apiKey(v){
        $loaderOptions.value.apiKey = v
    }
    
})

 
 
export let mapOptions = {
    style: 'height: 500px; width: 100%',
    zoom: 2,
    center: { lat: 0, lng: 0 },
    draggable: false
}