
export type crudConnection = {

    /**
        Crud Model name
    */
    model: string

    /**
        Data to use to initialize Crud resource.
    */
    init: any

    /** 
        Action to apply to Crud resource.
    */
    action: "create" | "read" | "update" | "delete"

    /**
        Input args
    */
    input: any

    /**
        Output args
    */
    output: any

}

export type crudConnectionApi = {
    results: any,
    loading: boolean,
    failed: any,
    load: (props: crudConnection) => Promise<any>
    showMessage: boolean
    hasRun: boolean
}

export type crudCachedQueries = Array<{
    query: crudConnection,
    response: any
}>

export type crudConfig = {

    url: string
    nonce: string
    cache: crudCachedQueries

}

export type crudLoader = {
    api: any
    loader: any
}

export type useCrudLoader = ( config:crudConfig ) => crudLoader