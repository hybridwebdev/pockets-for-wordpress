// @ts-nocheck
import type { crudConnection, crudConfig, crudCachedQueries, crudLoader } from "@pockets-core/crud/types"
import { createConnection } from '@pockets-core/connection/create-connection'
import { cacheMap } from "./cache-map"
import { AxiosRequestConfig } from 'axios'

export let useCrudLoader:useCrudLoader = ( $config: crudConfig ) : crudLoader => {
    
    let { loader, api } = createConnection()

    loader._cacheKeyFn = key => {

        /**
            Pull out the contextURL as it's only used in axios.
            Do not want this to be considered part of the caching mechanism.

            I'm not sure this is a good idea because of the side effects. Disabled
            but leaving this here for future me. 
        */
        // let normalized = key
        // // const normalized = Object.fromEntries(
        // //     Object.entries(key).filter(([ $key, value]) =>  $key !== "contextURL" )
        // // );

        return JSON.stringify( key )

    }

    loader._cacheMap = new cacheMap()

    let initCache = () => {

        if( !$config?.cache) {
            return
        }

        let cache:crudCachedQueries = $config?.cache ?? []

        cache.map( e => loader.prime( e.query, e.response ) )

        delete $config?.cache
        
    }

    initCache()

    api.interceptors.request.use( ( config: AxiosRequestConfig ) => {

        let headers = {
            ...config.headers,
        }
        
        if( $config.nonce ) {
            headers['X-WP-Nonce'] = $config.nonce
        }
        
        let contextURL = config.data.reduce( ( acc, e ) => {
            
            if( e.contextURL ) {
                return e.contextURL
            }
            
            return acc

        }, `${window.location.pathname}${window.location.search}` )

        headers['pockets-crud-context'] =  contextURL

        return {
            ...config,
            method: "post",
            url: $config.url,
            headers
        }

    } )

    return { 
        loader, 
        api 
    }

}

export let useCrudConnection = ( { loader, api } ) => {
    
    let fn = ( model: string ) => {

        let createInit = ( init:any, hash:number = 0, contextURL:string | boolean, deleteCache:boolean ) => {

            let actionGenerator = action => async( input, output ) => {
                 
                /**
                    Each time a query is run, the dataloader will automatically
                    cache it. 

                    deleteCache can be passed and if set to true the cache
                    for that request is automatically purged.

                    For any connections that fail, the requests cache is 
                    automatically purged so it can be retried
                */
                let query:crudConnection  = {
                    model, 
                    action,
                    init,
                    hash,
                    input,
                    output,
                    contextURL
                }

                try {
                    
                    let res = await loader.load( query )

                    if( deleteCache === true ) {
                        loader.clear( query )
                    }

                    return res

                } catch( e ) {

                    loader.clear( query )
                    throw e

                }  

            }

            return {
                create: actionGenerator( "create" ),
                read:   actionGenerator( "read" ),
                update: actionGenerator( "update" ),
                delete: actionGenerator( "delete" ),
            }

        }

        return {
            init: ( init:any, hash:number = 0, contextURL: string | boolean = false ) => createInit( init, hash, contextURL, true ),
            initOnce: ( init:any, hash:number = 0, contextURL:  string | boolean = false ) => createInit( init, hash, contextURL, false )
        }

    }

    fn.loader = loader
    fn.api = api 

    /**
        
        raceCache is a utility that wraps a promise and triggers a callback
        if the promise is *not* instantly resolved (i.e., not cached).
        
        This is useful for debouncing loading states:
        - When the promise resolves immediately (e.g., from a DataLoader cache), the callback is skipped.
        - When the promise takes time (e.g., waiting on an Axios request), the callback is called after a short delay.

        This prevents things like unnecessary loading indicators flashing during cache hits

    */
    
    fn.raceCache = ( $promised: Promise, cb: Function, delay: number = 0 ) : Promise => {

        Promise.race( [
            $promised,
            new Promise( resolve => setTimeout( resolve, delay, cb ) )
        ] ).then( result => {
            if ( result === cb ) {
                cb()
            }
        } )

        return $promised

    }

    return fn

}

