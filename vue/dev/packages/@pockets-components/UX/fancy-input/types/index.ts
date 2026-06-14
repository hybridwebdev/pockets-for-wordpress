
export interface $props {
     
    /**
        delay before input emits updated value.
    */
    debounce?: number
    /**
        Name attr applied to input  
    */
    name?: string | null
    /**
        Additional attributes to pass to input. can be any valid html prop such as min/max etc
    */
    inputAttrs?: any
    /**
        Minimum value
    */
    min?: number,
    /**
        Maximum value
    */
    max?: number | boolean

    /**
        Value to bind to. Can be used with v-model:value
    */
    value?: number | string
     
}
