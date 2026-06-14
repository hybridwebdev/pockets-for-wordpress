//@ts-nocheck
import { computed } from "vue"
import { createWebHistory, createRouter, createWebHashHistory, createMemoryHistory   } from 'vue-router'
import type { $routerProps } from "@pockets-router"
import type { Router, RouteLocationResolved } from 'vue-router'

type routerModes = "html5" | "hash" | "memory"

type extendedRouter = Router & {

    $api:{
        
        /**
            Takes a string and returns an object containing the resolved route and a navigation helper.
        */
        useLink: (
            href: string,
            mode?: routerModes
        ) => {
            route: RouteLocationResolved
            navigate: () => void
            url: {
                path: string,
                query: string,
                hash: string,  
                toString: () => string
            } 
        }
 
        /**
        * Sets the query params on the current route.
        */
        setQuery: (
            query: Record<string, string | number | boolean | null | undefined>,
            method?: 'push' | 'replace'
        ) => void

        /**
        * Two-way computed ref for query params.
        */
        useQuery: (
            method?: 'push' | 'replace'
        ) => ComputedRef<Record<string, any>>

        /**
        * Parses an href into a route-like object or path string depending on mode.
        */
        urlToObject: (
            href: string,
            mode?: routerModes
        ) => string | {
            path: string
            query: Record<string, string>
            hash: string
            toString: () => string
        }

        /**
        * Replaces the current route with the parsed href.
        */
        syncSelf: (opts: { href: string }) => Promise<void>
        
    }

}

export let useCreateRouter = ( { props }: { props: $routerProps } ) => {
    
    let $routes = computed( () => props.routes.map( route => {
        
        if( !route.path.startsWith('/') ) {
            route.path = `/${route.path}`
        }
        
        return route

    } ) )
    
    let modes = {
        html5: () => createWebHistory( props.base ),
        hash: () => createWebHashHistory( props.base ),
        memory: () => createMemoryHistory ( props.base ),
    }

    let historyMode = props.history 
    
    if( ![ 'html5', 'hash', 'memory' ].includes( historyMode ) ) {
        historyMode = 'html5'
    }

    let router:extendedRouter = createRouter( {
        ...props,
        history: modes[ historyMode ](),
        historyMode,
        routes: $routes.value,
    } ) 
    
    router.$api = {}

    router.$api.setQuery = ( query, method: "push" | "replace" = 'push' ) => {

        let cleanedQuery = Object.fromEntries(
            Object.entries( query ).filter(([_, value]) => value != null && value !== "")
        );

        router[method]( { path: router.currentRoute.value.path, query:cleanedQuery } )
        
    }

    router.$api.useQuery = method => computed( {
        get: () => router.currentRoute.value.query ?? {},
        set: v => router.$api.setQuery( v, method )
    } )

    router.$api.urlToObject = ( href, mode = router.options.historyMode ) => {

        let o = {}

        let { pathname:path, hash, search } = new URL( href, window.location.origin ) 

        if ( mode === 'hash' ) {

            let hashPath = hash.replace( /^#/, '' ) || '/'

            if ( hashPath.includes( '#' ) ) {

                let [ firstPart, secondPart ] = hashPath.split( '#' ) 

                hashPath = secondPart.startsWith( '/' )
                    ? secondPart
                    : `${firstPart.replace( /\/$/, '' )}/${secondPart}`

            } 

            let [ path, search = '' ] = hashPath.split('?');

            o = {
                path,
                query: Object.fromEntries( new URLSearchParams( search ) ) ,
                hash: '',  
                toString: () => `${path}${search}`
            }

        }

        if (mode === 'html5') {

            o = {
                path,
                query: Object.fromEntries( new URLSearchParams( search ) ),
                hash,
                toString: () => `${path}${search}`
            }

        }

        return o

    }
    
    router.$api.useLink = ( href, mode = router.options.historyMode ) =>  {
        
        let url = router.$api.urlToObject( href, mode )

        let route = router.resolve( url )

        return {
            route,
            navigate: () => router.push( route ),
            url
        }

    }

    
    router.$api.syncSelf = ( { href } ) => {
        return router.replace( router.$api.urlToObject( href ) )
    }

    return { router }

}
