
export type nodeSchema = {
    fields: Array< editField['ID'] | "textStyling" > 
    title: string
    /**
        name is the tiptap node name this schema applies to. 
        Eg paragraph, codeBlock etc
    */
    name: string 
}

export type editField = {
    ID: string
}

export type editorApi = {
    
    [key: string]: any
    
    nodeSchemas: Array<nodeSchema>
    selection: {
        
        rect: false | Omit<DOMRectReadOnly, "toJSON">
        
        node: false | {
            props: {
                [key: string] : any
            }
            nodeSchema: false | nodeSchema
        } 


        info: false | {
            focused: boolean
            empty: boolean
            isEmptyTextBlock: boolean
            isNodeSelection: boolean
        }

    }

}

declare module '@tiptap/core' {
    interface Editor {
        $editorApi 
    }
}
