
import type { UseSortableOptions } from '@vueuse/integrations/useSortable'

export type Api = apiProps & {
    
    event: unknown
    items: apiProps['modelValue']
    /**
        keyedItems is a computed property that adds a nanoid as key to every entry
        in the items list. This is a way to provide a unique key to v-for iterations.
    */
    keyedItems: apiProps['modelValue']
    
    add: ( index: number, data: apiProps['newItem'] ) => void
    addToEnd: ( index: number, data: apiProps['newItem'] ) => void
    remove: ( index: number ) => void
    clear: () => void

    canAdd: boolean
    canRemove: boolean
    isEmpty: boolean
    dragging: boolean
    canSort: boolean
}

/**
    Used by the loader
*/
export type loaderProps = {
    /**
        Layout of repeater
    */
    layout?: "tabbed" | "layout"
    
    /**
        Max number of items allowed      
    */
    maxItems?: number
    
    /**
        Minimum number of items
    */
    minItems?: number
     
    /**
        Default data that is used every time an add or clone operations occurs.
        If it's a function, it will be invoked each and every time a new item
        is added.   
    */
    newItem: unknown | Function
    
    /**
        Value to repeater items to.
    */
    modelValue: Array<unknown>
    
    /**
        Sortable options
    */
    sortableOptions?: UseSortableOptions
    
    /**
        If true, shows rotating arrow on item when open/closed
    */
    itemTriggerElementShowTabIcon?: boolean
    
    /**
        Element to render for item trigger
    */
    itemTriggerElement?: string
    
}

/**
    used by the repeater
*/
export type apiProps = loaderProps & {
   

    /**
        Applies to main container in base.
    */
    containerClass?: string
    
    /**
        Applies to container that holds items
    */
    itemsClass?: string

    /**
        Applies to each item in item list
    */
    itemClass?: string

    /**
        Applies to item inner container
    */
    itemInnerClass?: string
    
    /**
        applies to each items controls
    */
    itemControlsClass?: string


    /**
        Class applied to Trigger Element
    */
    itemTriggerClass?: string

} 
