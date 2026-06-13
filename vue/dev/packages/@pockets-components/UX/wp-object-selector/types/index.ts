import type { Layouts } from "../layouts/use-layouts"
import type { crudConnection } from "@pockets-core/crud/types"

export interface $loaderSlots {

    /**
        Overrides content shown in each items controls section. Shown after item slot content.
        @binding {object} api Instance of repeater API.
        @binding {number} index Index of entry in repeater.
        @binding {object} item Data of entry.
    */
    controls: {},
     /**
        Overrides default content.
        @binding {object} api Instance of repeater API.
        @binding {number} index Index of entry in repeater.
        @binding {object} item Data of entry.
    */
    default: {},
     /**
        Overrides content shown before items
        @binding {object} api Instance of repeater API.
        @binding {number} index Index of entry in repeater.
        @binding {object} item Data of entry.
    */
    before: {},
     /**
        Overrides content shown fter items
        @binding {object} api Instance of repeater API.
        @binding {number} index Index of entry in repeater.
        @binding {object} item Data of entry.
    */
    after: {},
   
    "hidden-input": {}

}

export interface $loaderProps {

    /**
        Flags whether selections can be claared.
    */
    clearable?: boolean
    
    /**
        Main binding for value that is changed.
    */
    selected?: number[] | string[] | number | null | boolean | string

    /**
        Enable multiple selections
    */
    multiple?: boolean

    /**
        Enable caching on connection.
    */
    cachingEnabled?: boolean

    /**
        CRUD query
    */
    query?: crudConnection

    /**
        External flag that can be used in render.
    */
    busy?: boolean

    /**
        If true, will render a hidden input using this name with the selected value.
        If multiple is true, it will render an input for each entry in selected.
    */
    name?: false | string

    /**
        Layout component used to render
    */
    layout?: Layouts

}