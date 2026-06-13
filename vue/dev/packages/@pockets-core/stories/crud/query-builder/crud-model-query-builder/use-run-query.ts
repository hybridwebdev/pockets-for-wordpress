import { ref } from "vue"
import { $pockets } from "@pockets-core"
export let useRunQuery = ( state ) => {

    let result = ref(null)
    let loading = ref(false)

    let run = async () => {

        result.value = null
        loading.value = true 

        let {
            action,
            model,
            init,
            input,
            output
        } = state.value

        try {
            result.value = await $pockets.crud(model).init(init)[action](input, output)
        } catch(e: any) {
            result.value = e.message
        }

        loading.value = false 

    }

    return {
        result,
        run,
        loading
    }

}