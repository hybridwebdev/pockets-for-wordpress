export interface $selectProps {
    
    /**
        String of css classes. 
    */
    modelValue?: string
    
    /**
        Should be a valid bootstrap breakpoint. Eg: xs | md
    */
    breakpoint?: string
    
    /**
        Bootstrap class optionKey to bind to.
    */
    optionKey?: string

    /**
        Used to prefix generated class.
    */
    prefix?: string

    /**
        Used to suffix generated class.
    */
    suffix?: string
    
    /**
        If true, responsive breakpoint optionKey will be applied to generated class.
    */
    responsive?: boolean
    
    /**
        Used to filter final options object before handing it to options list.
    */
    optionsFilter?: ( options: object ) => object

    /**
        Called on every iteration of the entries in the options object.
    */
    optionsReducer?: ( 
        $built: string, 
        data: {
            prefix: $selectProps['prefix']
            suffix: $selectProps['suffix']
            breakpoint: $selectProps['breakpoint']
            option: string
        } 
    ) => string
    /**
        If true, shows clear button
    */
    showClearButton?: boolean
    
}

export interface $interfaceProps {
    
    /**
        String of css classes. 
    */
    modelValue?: string
    
    /**
        Should be a valid bootstrap breakpoint. Eg: xs | md
    */
    breakpoint?: string
    
}