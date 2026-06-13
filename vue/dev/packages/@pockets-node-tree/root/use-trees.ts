import ObservableSlim from "@pockets-core/utils/observable-slim"
import { reactive } from "vue"
 
export let useTrees = templates => {

    let state = reactive( { templates } )

    return ObservableSlim.create( state, 1000 )
    
}
