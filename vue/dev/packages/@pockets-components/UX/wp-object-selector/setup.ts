// @ts-nocheck

import { computed, reactive, watch, toRefs, ref, toRef } from "vue"
import { setup as setupConnection } from "@pockets-core/crud/component/base"
import { setup as SelectedIDSModel } from "@pockets-core/utils/array-selector"
import type { $arraySelectorAPI }  from "@pockets-core/utils/array-selector"

export let setup = ( props, { selected } ) => {
    
    let query = reactive(props.query)

    let connection = setupConnection({
        ...query,
        cachingEnabled: props.cachingEnabled
    })

    watch(query, connection.load, { immediate: true })

    let options = computed(() => {
        if (!connection?.result?.items) return []
        return connection.results.items.map(e => e.ID)
    })

    let { clearable, multiple } = toRefs(props)
 
    let selectedIDS: $arraySelectorAPI = SelectedIDSModel( {
        clearable,
        multiple,
        selected,
        options
    } )

    let busy = toRef( props, "busy" ) 
    let name = toRef( props, 'name' )

    let api = {
        connection,
        selectedIDS,
        query,
        selected,
        busy,
        name,
        multiple,
        setSelected: (v) => selected.value = v,
        clear: () => selected.value = null
    }

    return api
    
}
