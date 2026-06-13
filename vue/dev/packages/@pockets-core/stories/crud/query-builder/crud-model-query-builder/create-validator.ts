//@ts-nocheck
import { createAjvValidator, createAjvInstance } from "./validator"
import ajvMergePatch from 'ajv-merge-patch'
import ajvFormats from "ajv-formats"
import {_, nil, KeywordCxt} from "ajv"
import url from "url"
import { get as $getter } from "lodash"

let generateCrudAliases = () => {

    let aliasMapper = {
        read: name => `^${name}(:<=|:[\\w].*)?$`,
        update: name => `^${name}$`,
    }

    let patternPropertiesGenerator = ( schema, parentSchema, it ) => {

        let {
            action = 'read',
            patternProperties = {},
        } = schema

        let decorator = aliasMapper[action] ?? aliasMapper['read']

        let applyPatternProperties = () => Object.entries( patternProperties ?? {} ).reduce( ( acc, { 0: k, 1: v } ) => {
            acc[ decorator(k) ] = v
            return acc;
        }, parentSchema.patternProperties ?? {} )
        
        Object.assign(it.schema, {
            patternProperties: applyPatternProperties(),
        } )

    }

    let itemsGenerator = ( schema, parentSchema, it ) => {

        let {
            action = 'read',
            items = null
        } = schema

        let decorator = aliasMapper[action] ?? aliasMapper['read']

        if( items ) {
            
            let { enum:$enum = [], ...restItems } = items

            Object.assign(it.schema, {
                items: {
                    ...restItems,
                    pattern: $enum.map( decorator ).join( '|' ),
                    errorMessage: error => `Invalid value: ${error.data}. must be one of: ${ $enum.join(", ") }`
                }
            } )

        }

    }

    return [
        {
            keyword: "crudFields",
            macro: (...args) => {
                patternPropertiesGenerator( ...args )
                itemsGenerator( ...args )
                return {}
            },
            metaSchema: {
                additionalProperties: false,
                properties: {
                    action: {
                        type: "string",
                        enum: ['read', 'update']
                    },
                    patternProperties: {
                        type: "object"
                    },
                    items: {
                        type: "object",
                        required: ['enum']
                    }
                }
            }
        },
    ]

}

export let keyWords = ajv => {
    
    let getSchema = (it, $ref) => {
        if(!$ref || $ref ==undefined) return null
        let id = it.baseId && it.baseId != '#'
            ? url.resolve(it.baseId, $ref)
            : $ref;
        return ajv.getSchema(id) ?? null
    }

    return [
        ...generateCrudAliases(),
        { 
            keyword: "$dynamicValidator",
            compile: schema => {
                
                let omit = (arr, index) => arr.filter( (e, i) => !index.includes(i) )

                let $path = schema.source.split('.')

                let validator = ( data, ctx) => { 

                    let $value = $getter( ctx, schema.source, null )

                    let whiteList = Object.keys( schema.map )
                    
                    let propName = $path[$path.length-1]

                    let $oneUp = $getter( ctx, omit($path, [$path.length-1] ) )
                    
                    if( !$oneUp.hasOwnProperty(propName) ) {
                        validator.errors = [ {
                            message: `must have required property '${propName}'`,
                            instancePath: `/${ omit($path, [0, $path.length-1]).join('/') }`
                        } ]
                        return false
                    }

                    if( !whiteList.includes($value) ){
                        validator.errors = [ {
                            instancePath: `/${ omit($path, [0]).join('/') }`,
                            message: `Must be one of: ${whiteList.map(e => `"${e}"`).join(", ") }`
                        } ]
                        return false
                    }
                    
                    let $ref = schema.map[ $value ]

                    let $schema = ajv.getSchema( $ref ) ?? null

                    if( !$schema ) {
                        validator.errors = [
                            {
                                message: `No schema was found for $ref: "${$ref}"`
                            }
                        ]
                        return false
                    }

                    let isValid = $schema(data)

                    /**
                        Prefixing all errors instancePaths with the instancePath of this schema.
                        Thos is required so that errors can be shown in the right spot. 
                    */
                    validator.errors = ( $schema.errors ?? [] )
                        .map( e => ( { ...e, instancePath: `${ctx.instancePath}${e.instancePath}`} ) )

                    return isValid

                }

                return validator

            },
            metaSchema: {
                type: 'object',
                properties: {
                    map: {
                        type: "object"
                    },
                    source: {
                        type: 'string'
                    }
                },
                required: ['source', 'map'],
                additionalProperties: false
            }
        },

        {
            keyword: "crudActionDisabled",
            validate: () => false,
            error: {
                message: (ctx) => `The ${ctx.schema} action is not available for this model.`
            },
            compile: (schema, parentSchema, it) => {
                it.schema = {
                    crudMethodDisabled: true
                }
                return _ => false
            },
            metaSchema: {
                type: "string",
                enum: [ 'create', 'read', 'update', 'delete'],
            }
        },
        {
            keyword: "range",
            type: "number",
            code(cxt: KeywordCxt) {
                const {schema, parentSchema, data} = cxt
                const [min, max] = schema
                const eq: Code = parentSchema.exclusiveRange ? _`=` : nil
                cxt.fail(_`${data} <${eq} ${min} || ${data} >${eq} ${max}`)
            },
            error: {
                message: ( { schema } ) =>  `Must be a number between ${schema[0]} and ${schema[1]}.`
            },
            metaSchema: {
                type: "array",
                items: [ { type: "number" }, { type: "number" } ],
                minItems: 2,
                additionalItems: false,
            },
        },
        {
            type: "array",
            keyword: "arrayOfType",
            compile: type => data  => {
                if( !Array.isArray( data ) ) return false
                return data.filter( e => type.includes( typeof e ) ).length == data.length
            },
            error: {
                message: ( { schema } ) => {
                    let message = values => `Must be an array of values with type of ${values}`
                    if( Array.isArray( schema ) ) {
                        return message( schema.map(e => `"${e}"`).join(", ") )
                    }
                    return message( `"${schema}"` )
                }
            },
            metaSchema: {
                type: [ "string", "array" ]
            }
        },
        {
            keyword: 'errorMessage',
            metaSchema: {
                
            }
        },
        { 
            keyword: "mustBe",
            validate: (schema: any, data: any) => schema === data,
            error: {
                message: ctx => `must be "${ctx.schema}"`
            } 
        },
        {
            keyword: "propertyKeys",
            type: 'object',
            compile( schema, parentSchema, it ){
                it.$enum = [].concat( 
                    getSchema(it, schema.$ref )?.schema?.enum ?? [],
                    schema.enum ?? [],
                )
                return data => {
                    let keys = Object.keys(data)
                    return keys.filter( e => it.$enum.includes( e ) ).length == keys.length
                }
            },
            error: {
                message: ctx => `Property key must be one of: ${ ctx.it.$enum.map(e => `"${e}"`).join(", ") }`
            },
            metaSchema: {
                additionalProperties: false,
                properties: {
                    enum: {
                        type: [ 'string', 'array' ]
                    },
                    $ref: {
                        type: "string"
                    },
                },
            }
        },
        { 
            keyword: "includes",
            type: ['array', 'string'],
            compile( schema, parentSchema, it ){
                it.$enum = [].concat( 
                    getSchema( it, schema.$ref )?.schema?.enum ?? [],
                    schema.enum ?? [],
                )
                let { separator = null } = schema
                return data => {
                    let getData = data => {
                        if( typeof data == 'string' ) {
                            if( !separator ) {
                                return [ data ]
                            }
                            if( separator ) {
                                return data.split(separator)
                            }
                        }
                        return data
                    }
                    data = getData( data )
                    return data.filter( e => it.$enum.includes( e ) ).length == data.length
                }
            },
            error: {
                message: ctx => `Must be a string or an array containing any of: ${ ctx.it.$enum.map(e => `"${e}"`).join(", ") }`
            },
            metaSchema: {
                additionalProperties: false,
                properties: {
                    enum: {
                        type: [ 'string', 'array' ]
                    },
                    $ref: {
                        type: "string"
                    },
                    separator: {
                        type: "string",
                    }
                },
            }
        },
    ]
}

export let createValidator = (props) => {

    let ajv = createAjvInstance( props )

    keyWords(ajv).map( keyword => ajv.addKeyword( keyword ) )

    ajvMergePatch(ajv)
    ajvFormats(ajv)
    return createAjvValidator( json => {

        let { 
            action, 
            model
        } = json ?? {}
        
        return ajv.getSchema( `/${model}/model/${action}/` ) ?? ajv.getSchema('/partials/crud/base-query/')

    } )

}