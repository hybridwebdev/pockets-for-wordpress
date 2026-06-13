import { context } from '../../context'
import { computed, reactive, onMounted, onUnmounted } from "vue"
import { reactiveComputed } from "@vueuse/core"

export let setup = ( props, optionName ) => {
    /**
        need to remove reference to props.ID as using ID for a prop was no bueno.
    */
    let ID = computed( () => props.accordionId ?? props.ID ?? groupID )

    /**
        Options are set at the root level and can be overriden at any level of 
        the accordion hiearchy. Any overrides are passed down to nested children.
    */

    let config = computed( () => {
        let $config = context.inject.config().value
        return {
            contentOptions: props.contentOptions ?? $config.contentOptions,
            itemOptions: props.itemOptions ?? $config.itemOptions,
            triggerOptions: props.triggerOptions ?? $config.triggerOptions,
        }
    } )
    
    context.provide.config( config )
    
    let options = computed( () => config.value[ optionName ] )

    let container = context.inject.container()
    let groupID = context.inject.groupID()
    context.provide.groupID( ID.value )

    let open = computed( () => container.open.includes( ID.value ) )

    let classes = computed( () => {
        let list: Array<string> = []
        list.push( options.value.class )
        if( open.value ) {
            list.push( options.value.open )
        }
        if( !open.value) {
            list.push( options.value.closed )
        }
        return list
    } )

    let onClick = () => {
        if( !props.trigger ) {
            return
        }
        container.trigger( ID.value ) 
    }
    
    let handler = () => container.openAllHandler( ID.value )

    onMounted( () => container.event.on( 'open-all', handler ) )
    onUnmounted( () => container.event.off( 'open-all', handler ) )

    return reactive( {
        class: classes,
        onClick,
        open
    } )

}