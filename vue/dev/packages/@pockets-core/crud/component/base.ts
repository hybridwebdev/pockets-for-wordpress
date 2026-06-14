// @ts-nocheck
import type { crudConnection, crudConnectionApi } from "@pockets-core/crud/types"
import { reactive, PropType, computed } from 'vue'
import { $pockets } from "@pockets-core"
import { useTimeoutFn } from '@vueuse/core'

export let setup = (props: crudConnection) => {

    let load = async() => {

        connection.failed = false
        connection.showMessage = false

        if( props.clearOnLoad) {
            connection.results = null
        }

        try {
            let $init = props.cachingEnabled 
                ? $pockets.crud(props.model).initOnce( props.init, props.hash, props.contextURL )
                : $pockets.crud(props.model).init( props.init, props.hash, props.contextURL )
            
            let fn = $init[props.action]

            if(typeof fn !='function') {
                throw new Error("Must define a valid action")
            }
            
            connection.results = await $pockets.crud.raceCache( fn(props.input, props.output), () => {
                connection.loading = true
            } )

        } catch(e) {
            connection.failed = e
        } finally {
            connection.hasRun = true
            connection.loading = false
            start()
            connection.showMessage = true
        }
    }
    
    let connection:crudConnectionApi = reactive( {
        results: null,
        loading: false,
        failed: false,
        load,
        showMessage: false,
        hasRun: false
    } ) 

    const { isPending, start, stop } = useTimeoutFn( () => connection.showMessage = false, props.messageTime ?? 3000 )

    return connection

}