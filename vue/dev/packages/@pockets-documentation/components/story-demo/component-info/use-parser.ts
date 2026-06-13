 // @ts-nocheck
import { merge } from 'lodash'

export let parser = ( component, meta ) => {

    let $props = () => {

        let props = merge({}, 
            component.props ?? {},
            meta.props ?? {}
        )

        if( Object.keys( props ).length === 0 ) {
            return false
        }

        let propKeys = Object.keys( props )

        let $processed = Object.entries( props ).reduce( ( acc, [ name, prop ] ) => { 

            if( name.endsWith("Modifiers") ) {
                return acc;
            }

            let $default = () => {
                
                let { defaultValue = false, default:otherDefault = false } = prop
                
                let value;

                if( defaultValue.value ) {
                    value = defaultValue.value
                }

                if( otherDefault ) {
                    value = otherDefault
                }

                if( typeof value == 'function' || typeof value == 'boolean' || typeof value == 'number') {
                    return value.toString()
                }

                return value

            }

            let $types = () => {
                
                if( prop.type ) {
                    
                    if( prop.type.elements && prop.type.elements.length > 0 ) {
                        
                        let res = prop.type.elements.map( type => type.name ).join(" | ")
                        
                        if( prop.type.name.toLowerCase() == 'array' ) {
                            return `[<${res}>]`
                        }

                        return res

                    }

                    return [ prop.type.name ].join( " | " )

                }

            }

            acc[name] = {
                ...prop,
                default: $default(),
                types: $types(),
                isVmodel: propKeys.includes(`${name}Modifiers`) 
            }

            return acc

        }, {} )

        return Object.keys( $processed )
            .sort( ( a, b ) => a.localeCompare( b ) ) 
            .reduce( ( obj, key ) => ( {
                ...obj,
                [key]: $processed[key]
            } ), {} )

    }
    
    let $emits = () => {
        
        let { emits = [] } = component
        let { events = {} } = meta

        let emitted = emits.reduce( (acc, name) => {
            
            acc[name] = {
                name,
                description: ""
            }
            
            return acc

        }, {} )

        let $processed = { 
            ...emitted,
            ...events 
        }

        if( Object.keys( $processed ).length === 0 ) {
            return false
        }

        return $processed

    }
    
    let $slots = () => {

        let slots = [
            ...component?.slots ?? [],
            ...meta?.slots ?? []
        ]

        if(slots) {
        
            let $processed = slots.reduce( ( acc, slot ) => {

                let bindings = slot?.tags?.binding ?? []
                
                bindings = [ ...slot.bindings ?? [], ...bindings ]
                    .filter( e => e?.type ?? false )
                    .filter( e => e?.name ?? false )
                    .sort( (a, b) => a.name.localeCompare( b.name ) )
                bindings = bindings.length == 0 ? false : bindings

                acc[slot.name] = {
                    ...slot,
                    bindings
                }

                return acc

            }, {} )

                
            if( Object.keys( $processed ).length === 0 ) {
                return false
            }
            
            return $processed 

        }

    }

    let result = {
        description: meta.description,
        props: $props(),
        emits: $emits(),
        slots: $slots(),
    }

    return result

}
