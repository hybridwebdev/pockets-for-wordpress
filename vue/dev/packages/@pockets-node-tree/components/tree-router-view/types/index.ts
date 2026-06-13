export type routerInstanceProps = {

    /**
        If true, will do a CRUD read for the current route when initially loaded.
        If route was pre-cached, this will do nothing. 
    */
    autoCacheCurrentRoute?: boolean

    /**
        What fields to read. 
    */
    read?: {
        [key: string] : unknown
    }
    
}