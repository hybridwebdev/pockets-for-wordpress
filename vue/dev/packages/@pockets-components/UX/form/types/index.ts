
export interface validation {
    type: "error" | "success"
    message: string
    path: $formInput['path']
}

export interface form {
    
    /**
        Will be true if validation contains no errors
    */
    isValid: boolean
    formData: $formContainer['formData']
    validation: $formContainer['validation']
    
}

export interface $formContainer {
    
    /**
        Data for form
    */
    formData?: unknown
    /**
        List of validation results.
    */
    validation?: Array< validation >

    containerOptions?: {
    
        /**
            Class applied when form is valid
        */
        invalidClass?: string

        /**
            Class applied when form is invalid
        */
        validClass?: string

    }

    inputOptions?: {
    
        /**
            Class applied when field is valid
        */
        invalidClass?: string
        
        /**
            Class applied when field is invalid
        */
        validClass?: string

    }

    validationOptions?: {
    
        /**
            Class applied when form is valid
        */
        invalidClass?: string

        /**
            Class applied when form is invalid
        */
        validClass?: string

    }
    
    endpoint?: string

    formId?: string

}

export interface $formInput {

    /**
        Path to key in formdata to bind to
    */
    path?: string

    /**
        Element to render.
    */
    tag?: string
    
    /** 
        Options to apply to element.
    */
    inputOptions?: $formContainer['inputOptions'] | false

    /**
        If true, validation errors will be shown
    */
    showErrors?: boolean

    /**
        Name. 
    */
    name?: string | false
    
}


export interface $formValidation {

    /**
        Path to key in formdata to bind to
    */
    path?: string

    /**
        Element to render.
    */
    tag?: string
    
    /** 
        Options to apply to element.
    */
    validationOptions?: $formContainer['validationOptions'] | false

    /**
        If true, validation errors will be shown
    */
    showErrors?: boolean
    
    /**
        class to apply to element that wraps messages
    */
    wrapperClass?: string
    
    /**
        element type to apply to element that wraps messages
    */
    wrapperTag?: string
    
    /**
        elementt type to apply to each message
    */
    messageTag?: string
    
}

