// @ts-nocheck
import { reactive, computed } from "vue"

import type { TreeNodeApiProps, createdApi, TreeNodeProxied, TreeNodeApi } from "@pockets-node-tree"
import { editor } from "@pockets-node-tree"

import { $pockets } from "@pockets-core"
import { $object } from "@pockets-core/utils"

import { useAdd } from "./add"
import { useRemove } from "./remove"
import { useClone } from "./clone"
import { useReplace } from "./replace"
import { useMove } from "./move"

import { useSchema } from './schema'
import { useEditFields } from "./edit-fields"

import { useInitializer, useHydrater, useConvertNodeTo } from "./crud"

export let getNodeApi = ( node: TreeNodeProxied ) : TreeNodeApi => {
    
    let root = computed( () => node.__getParent( api.paths.source.path.length ) )

    let paths = computed( () => {

        let path =  node.__getPath
        
        let index =  parseInt( path.split('.').slice(-1)[0] )

        /**
            sources are stored under
            templates.{sourceKey} so removing the templates portion
        */
        let sourcePath = path.split('.').slice( 1 )

        return {
            path,
            index,
            source: {
                key: sourcePath[0],
                path: sourcePath,
                object: JSON.parse( sourcePath[0] ),
            },
        }
        
    } )

    let getParent = node => {

        /**
            Going up 2 because it'd be parent.nodes.this-node
        */
        let parent = node.__getParent(2)

        if(parent) {
            return getNodeApi( parent )
        }

        return false

    }
    
    let parent = computed( () => getParent( node ) )

    let hasNodes = computed( () => Array.isArray( api.node?.nodes ) )

    let getChild = (index: number) => {
        if(!api.node.nodes) return;
        return getNodeApi( api.node.nodes[index] as TreeNodeProxied )
    }

    let branch = computed( () => {
        
        let initial: Array<TreeNodeApi> = [];

        /**
            As the reducer is traversing from the source node upward,
            the resutl must be reversed so that they are in the correct order
            from top to bottom.
        */
        
        return api.paths.path.split('.nodes.').reduce( (acc, _, index) => {
            acc.push( getNodeApi( api.node.__getParent( index  * 2 ) ) )
            return acc;
        }, initial ).reverse() 

    } )

    let api:TreeNodeApi = reactive( {
        root,
        branch,
        paths,
        
        getNodeApi,
        getChild,

        node,
        hasNodes,
        parent,

        editor,
        editFields: computed( () => useEditFields( api ) ),
        schema:     computed( () => useSchema( api ) ),

        add:        computed( () => useAdd( api ) ),
        remove:     computed( () => useRemove( api ) ),
        clone:      computed( () => useClone( api ) ),
        replace:    computed( () => useReplace( api ) ),
        move:       computed( () => useMove( api ) ),

        initialize: computed( () => useInitializer( api ) ),
        hydrate:    computed( () => useHydrater( api ) ),
        convertTo: computed( () => useConvertNodeTo( api ) ),
        
        getByPath: ( path: string ) => {
            let $path = path.split('.').slice(1).join('.')
            return $object.get( root.value, $path )
        },
        setByPath: ( path: string, value ) => {
            let $path = path.split('.').slice(1).join('.')
            return $object.set( root.value, $path, value )
        },
       
        scrollIntoView: () => {
            $pockets.event.emit( `pockets-node-tree/node-facade/scrollIntoView`, api.paths.path )
        }

    } )

    return api

}
