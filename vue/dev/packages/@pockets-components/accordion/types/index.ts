type $option = {
    open: string
    closed: string
    class: string
}

export type accordionOptions = {
    /**
        Should be a valid html element. Determines what element is used when rendering accordion element.
    */
    tag?: string
    /**
        @deprecated DO NOT USE. Use accordionID instead

        Should be a unique key. Used to link accordion elements together. For example trigger and content elements can be linked via an ID, so that clicking on the trigger will open the content element with the same ID. You can set the ID on an accordion-item element and it will automatically pass down to all child accordion elements.
    */
    ID?: string | number
    /**
        Should be a unique key. Used to link accordion elements together. For example trigger and content elements can be linked via an ID, so that clicking on the trigger will open the content element with the same ID. You can set the ID on an accordion-item element and it will automatically pass down to all child accordion elements.
    */
    accordionId?: string | number
    /**
        If set to true, clicking the accordion element will trigger opening its ID.
    */
    trigger?: boolean
    /**
        The minimum amount of accordion ID's that can should remain open.
        If higher than 0, clicked tabs will not close
        if ihe open item count is less than or equal this number
    */
    minOpen?: number

    /**
        Should be either single or multiple. If set to single, only one accordion ID can be open at a time.
    */
    mode?: "single" | "multiple"
    /**
        List of open accordion ID's. You can add ID's to this list to start with those sections open.
    */
    open?: Array< accordionOptions['ID'] >
    /**
        Controls options for accordion-item elements.
    */
    itemOptions?: $option
    /**
        Controls options for accordion-trigger elements.
    */
    triggerOptions?: $option
    /**
        Controls options for accordion-content elements
    */
    contentOptions?: $option

}