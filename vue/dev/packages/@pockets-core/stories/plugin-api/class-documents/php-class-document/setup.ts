// @ts-nocheck
import { chain } from "lodash"
import { computed, provide, reactive } from "vue"
import { useRoute, useRouter } from "vue-router"
import { useDebounceFn } from "@vueuse/core"
export let props = {

    /**
        Search is used to search across documents, filtering the results
    */
    search: {
        type: String,
        default: ""
    },

    filterProperties: {
        /**
            Can be used to apply external filter callback
        */
        type: Function,
        default: _  => (item: object ) : boolean => item
    },
 
    filterMethods: {
        /**
            Can be used to apply external filter callback
        */
        type: Function,
        default: _  => (items: object ) : object => items
    },

    showPropertyTypeOptions: {
        /**
            A function that acts as middleware, which can be used to override options  
        */
        type: [Function, Object],
        default: _  => (options: object ) : object => options
    },

    showMethodTypeOptions: {
        /**
            A function that acts as middleware, which can be used to override options  
        */
        type: [Function, Object],
        default: _  => (options: object ) : object => options
    },

    active: {
        default: _ => (options: object) : object => options,
    },

    documents: {
        type: Object
    },


} 

let optionMiddleware = (options, defaults) => {
    if( typeof options ==='function' ) {
        return { ...defaults, ...options(defaults) }
    }
    return { ...defaults, ...options }
}

let initOptions = (props) => {

    let propertyTypes = () => {

        let defaults = {
            isPrivate: true,
            isProtected: true,
            isStatic: true,
            /**
                If set to true, properties with an @class-document-advanced declaration will be excluded
            */
            applyExcludeTag: true
        }

        return optionMiddleware(props.showPropertyTypeOptions, defaults)
        
    }

    let methodTypes = () => {
                
        let defaults = {

            isFinal: true,
            isPrivate: true,
            isProtected: true,
            isStatic: true,
            /**
                If set to true, methods with an @class-document-advanced declaration will be excluded
            */
            applyExcludeTag: true

        }

        return optionMiddleware(props.showMethodTypeOptions, defaults)

    }

    return {
        methodTypes: methodTypes(),
        propertyTypes: propertyTypes(),
        showFilters: false
    }
    
}

export let setup = (props, ctx) => {

    let route = useRoute()
    let router = useRouter()

    let filters = {

        ByExcludeTag: (options) => {
            return ( entry ) => {
                if( options.applyExcludeTag === false ) return true;
                if( entry.tags.hasOwnProperty('class-document-advanced') ) return false;
                return true
            }
        },

        ByType: (options, key) => {
            return (entry) => {
                if( options[key] === false ) {
                    return entry[key] === false
                }
                return true
            }
        },

        properties(properties) {      

            let options = api.options.propertyTypes

            let result = chain(properties)
                .filter( filters.ByType(options, 'isStatic') )  
                .filter( filters.ByType(options, 'isProtected') )  
                .filter( filters.ByType(options, 'isPrivate') )  
                .filter( filters.ByExcludeTag(options) )
                .filter( props.filterProperties )
                .orderBy('name')
                .reduce((acc, e) => {
                    acc[e.name] = e
                    return acc
                }, {})
                .value()

            return Object.entries(result).length != 0 ? result : false

        },

        methods(methods) {
            
            let options = api.options.methodTypes

            let result = chain(methods)
                .filter( filters.ByType(options, 'isFinal') )  
                .filter( filters.ByType(options, 'isStatic') )  
                .filter( filters.ByType(options, 'isProtected') )  
                .filter( filters.ByType(options, 'isPrivate') )  
                .filter( filters.ByExcludeTag(options) )
                .filter( props.filterMethods )
                .orderBy('name')
                .reduce((acc, e) => {
                    acc[e.name] = e
                    return acc
                }, {})
                .value()

            return Object.entries(result).length != 0 ? result : false
            
        }

    }

    let document = computed( () => {

        let document = api.documents[api.active.documentName] ?? null;

        if( !document ) {
            return false;
        }

        return {
            ...document,
            properties: filters.properties(document.properties),
            methods: filters.methods(document.methods),
        }

    } )

    let documents = computed(() => {
        
        let search = api?.active?.search?.toLowerCase() ?? ""

        return Object.fromEntries(

            Object.entries(props.documents).filter( ({ 1: document } ) => {

                if( search=='' ) return true

                if(
                    document.title.toLowerCase().includes( search )
                    ||
                    document.group.toLowerCase().includes( search )
                    ||
                    document.info.name.toLowerCase().includes( search )
                ) return true

            } )

        )
    })
        
    let documentsByGroup = computed( () => {
        let groups = chain(api.documents)
            .orderBy( ['group', 'title'] , 'asc')
            .groupBy( 'group' )
            .value()
        if(Object.entries(groups).length == 0) return false
        return groups
    } )

    let jumpTo = (tab:"property|method", section: string) => {
        
        router.$api.setQuery( {
            ...route.query,
            tab,
            [tab] : section
        } )

    }

    let documentLink = ( tag: string ) => {
        // console.log( tag )
        /**
            Accept an argument like this:

            class\name\here|tab|section

            with tab and section being optional, but you must use both if you opt in.

            Will nav to the class\tab\section provided.
        */

        let arr = tag.split('|').map(e => e.trim())
        
        let nav = {
            documentName:  arr[0] ?? false,
            tab: arr[1] ?? 'class',
        }

        // console.log( nav, arr ) 
        if( nav.tab=='method') {
            nav.method = arr[2] ?? false
        }
        
        if( nav.tab=='property') {
            nav.property = arr[2] ?? false
        }
         
        if(!nav.documentName) {
            return
        }
        
        router.$api.setQuery( {
            ...route.query,
            ...nav
        } )

    }

    function deepDecode(str) {
        let prev;
        let result = str;
        do {
            prev = result;
            try {
            result = decodeURIComponent(result);
            } catch {
            break; // stop if it's not valid URI anymore
            }
        } while (result !== prev);
        return result;
    }

    let setSearch = useDebounceFn( search => router.$api.setQuery( { 
        ...route.query,
        search,
        documentName: null
    } ), 500 )

    let active = new Proxy( route.query, {

        get: ( _, key: string ) => {
            
            let { query } = route

            /**
                Because the documentName can contain stuff likes / \ and spaces,
                it gets urlencoded. This hack decodes it so it can be used without a bunch
                of extra logic.
            */
            if( key == 'documentName') {

                let v = deepDecode( query[key] )

                if( v =='undefined') {
                    return null
                }

                return v
                
            }

            if( key == 'property' )  {
                let $key = query[key] ?? false
                if( !$key || !api.document.properties[$key] ) {
                    return Object.keys(api.document.properties ?? {})[0] ?? null
                }
            }

            if( key == 'method' )  {
                let $key = query[key] ?? false
                if( !$key || !api.document.methods[$key] ) {
                    return Object.keys(api.document.methods ?? {})[0] ?? null
                }
            }

            if( key =='tab' ) {
                if( !query[key] ?? false ) {
                    return 'class'
                }
            }

            return query[key]

        },
        set(_, key: string, value){
            
            if( key == 'search' ) {
                setSearch( value )
                return true
            }
            
            router.$api.setQuery( { 
                ...route.query,
                [key]: value
            } )

            return true

        }

    } )
    
    let api = reactive( { 

        active,
        options: initOptions(props),
        documents,
        document,
        documentsByGroup,

        jumpTo,
        documentLink

    } )

    provide('document_api', api)

    return {
        api
    }

}
