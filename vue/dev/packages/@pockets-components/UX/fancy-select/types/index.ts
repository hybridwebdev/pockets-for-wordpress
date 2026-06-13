
export interface selectProps {

    /**
        Binds to value entered in search field.
    */
    search?: string
    /**
        Value to bind selected value(s) to.
    */
    modelValue: string | [] | number | object | boolean | null | undefined
    /**
        Class applied to wrapping container

    */
    containerClass?: string
    /**
        Position class to add to select when open
        
    */
    openPosition?: "open-up" | "open-down"
    /**
        Class applied to search box.
    */
    searchClass?: string
    /**
        Placeholder text for search box.
    */
    searchPlaceholder?: string
    /**
        Text used for placeholder.
    */
    placeHolder?: string
    /**
        Class applied to placeholder box.
    */
    placeholderClass?: string
    /**
        Class applied to select.
    */
    selectClass?: string
    /**
        How many options to show when select is open.
    */
    openCount?: number
}
