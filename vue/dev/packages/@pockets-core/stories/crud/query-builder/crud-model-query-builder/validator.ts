// @ts-nocheck
import type Ajv from 'ajv'
import type { Options, Schema, ErrorObject } from 'ajv'
import AjvDist from 'ajv'
import type { JSONValue } from 'immutable-json-patch'
import { parsePath } from 'immutable-json-patch'
import type { JSONSchemaDefinitions, ValidationError, Validator } from 'vanilla-jsoneditor'
import { ValidationSeverity } from 'vanilla-jsoneditor'

export interface AjvInstanceOptions {
    schemas?: JSONSchemaDefinitions
    ajvOptions?: Options
}
 
export let createAjvValidator = ( getSchema: ( json: JSONValue ) => any ) : Validator => {

    return ( json: JSONValue ) : ValidationError[] => {
        let validate = getSchema( json )
        validate( json )
        return ( validate.errors || [] )
            .map( improveAjvError )
            .filter( e => ![ '$merge', 'anyOf', 'oneOf', 'if', '$patch' ].includes(e.keyword) )
            .filter( e => typeof e.message == 'string'  && e.message!='')
            .map( error => normalizeAjvError( json, error ) )
    }

}

export let createAjvInstance = ( options: AjvInstanceOptions ) : Ajv => {

    let { schemas, ajvOptions } = options

    let ajv = new AjvDist( ajvOptions )

    if ( schemas ) {
        Object.keys( schemas ).map( ref => {
            let schema: Schema = schemas[ ref ]
            try {
                ajv.addSchema( schema, ref ) 
            } catch( error ) {
                console.log( 'Error registering schema', { error, ref, schema } )
            }
        })
    }

    return ajv  

}

let normalizeAjvError = ( json: JSONValue, ajvError: ErrorObject ) : ValidationError => ( {
    path: parsePath(json, ajvError.instancePath),
    message: ajvError.message || 'Unknown error',
    severity: ValidationSeverity.warning
} )
 
let improveAjvError = ( error: ErrorObject, b ) : ErrorObject => {

    if(error.keyword=='false schema') {
        error.message = `Property is not allowed.`
    }
    
    if ( error.keyword === 'enum' ) {
        let enums:any = []
        if( Array.isArray( error.params.allowedValues ) ) {
            enums = error.params.allowedValues ?? []
        }
        if( Array.isArray( error.schema ) ) {
            enums = error.schema
        }
        if( enums ) {
            error.message = `Should be one of: ${enums.map( value => JSON.stringify( value ) ).join(', ')}`
        }
    }

    if( error.keyword === 'additionalProperties' ) {
        
        let { properties = {} } = error.parentSchema ?? {}
        let { patternProperties = {} } = error.parentSchema?.crudFields ?? {}

        let keys = [
            ...Object.keys(properties),
            ...Object.keys(patternProperties)
        ]
        keys.sort()
        
        error.message = `Invalid property: "${error.params.additionalProperty}". Must be one of: ${ keys.map(e => `"${e}"` ).join(", \r\n") }`
        
    }
    
    let errorMessage = error?.parentSchema?.errorMessage ?? false

    if( errorMessage ) {

        if( typeof errorMessage == 'function') {
            error.message = errorMessage(error)
        }

        if( typeof errorMessage == 'string') {
            error.message = errorMessage
        }

        if( typeof errorMessage == 'object' && errorMessage.hasOwnProperty(error.keyword) ) {
            let handler = errorMessage[error.keyword] 
            if( typeof handler == 'function') {
                error.message = handler(error)
            }
            if( typeof handler == 'string') {
                error.message = handler
            }
        }
        
    }

    return error

}