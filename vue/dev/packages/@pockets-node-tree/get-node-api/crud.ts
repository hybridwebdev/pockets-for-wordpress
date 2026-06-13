// @ts-nocheck
import { $pockets } from "@pockets-core"
import { TreeNodeApi, TreeNode, nodeHydrate, getTree, setTree } from "@pockets-node-tree"

export let useInitializer = ( api : TreeNodeApi ) => {

    let initializer = createFetcher( [ 'initialize:<=' ], api )

    let middleWare = ( result ) => {
         
        if( result ) {
            
            api.editor.active = result
            
            $pockets.toast.success( "Node refreshed." )

        }

        return result

    }

    let initialize:nodeHydrate = {

         /**
            Active is meant to be used within an editor context only. 
            eg editor.active.hydrate.active.
        */
        active: async _ => initializer( api.editor.active.paths.path ).then( middleWare ),
        activeWith: async ( node: TreeNode ) => initializer( api.editor.active.paths.path, node ).then( middleWare ),

    }    
 
    return initialize
    
}

let createFetcher = ( read: Array<string>, api: TreeNodeApi ) => {

    return async ( path: string, node?: TreeNode ) => {

        api.editor.busy = true
        
        try {
            
            if ( !node ) {
                node = api.getByPath( path )
            }
            
            let newNode: TreeNode = await $pockets.crud( 'node-tree/node' )
                .init( { ...node } )
                .read( read )
            
            api.setByPath( path, {...newNode } )
            return api.getNodeApi( api.getByPath(path) )
            
        } catch ( e ) {
            $pockets.toast.error( e.message )
            return Promise.reject( e )
        } finally {
            api.editor.busy = false
        }

    }

}

export let useHydrater = ( api : TreeNodeApi ) => {

    let hydrater = createFetcher( [ 'hydrate:<=' ], api )

    let middleWare = ( result ) => {
         
        if( result ) {
                
            api.editor.active = result
            
            $pockets.toast.success( "Node refreshed." )

        }

        return result

    }

    let hydrate:nodeHydrate = {
        
        /**
            Active is meant to be used within an editor context only. 
            eg editor.active.hydrate.active.

            You can pass in an optional node if you wish to re-hydrate the active node
            with the passed in node data. Useful if you want to replace a node without
            having to re-set editor.active first.
            
        */
        active: _ => hydrater( api.editor.active.paths.path ).then( middleWare ),
        activeWith: ( node: TreeNode ) => hydrater( api.editor.active.paths.path, node ).then( middleWare )

    }   

    return hydrate

}

export let useConvertNodeTo = api => {

    let hydrate = createFetcher( [ 'hydrate:<=' ], api )

    let $container = () => {
                
        let middleWare = ( result ) => {
            
            if( result ) {
                    
                api.editor.active = result
                
                $pockets.toast.success( "Node Converted to container." )

            }

            return result

        }

        let { node, paths } = api.editor.active
        
        let tree = getTree( node.props.source )

        if( !tree ) {
            return $pockets.toast.error( "Could not convert. No tree found." )
        }

        let $node = JSON.parse( JSON.stringify( node ) )

        Object.assign( $node, {
            el: "div",
            schema: "node-container",
            nodes: [ tree ]
        } )
        
        delete $node.props.source

        hydrate( paths.path, $node ).then( middleWare )
        
    }

    let $treeLoader = async ( args ) => {

        let promises = []

        let { path } = api.editor.active.paths

        let { node:root } = api.editor.active

        let { 
            metaKey = null, 
            title = null
        } = args

        promises.push( 
            $pockets.crud( 'node-tree/node' )
                .init(  {
                    schema: 'tree-root-loader'
                }  )
                .read( ["initialize:<="] ) 
        )

        promises.push(
            $pockets.crud('node-tree/root').init( {
                metaKey,
                crud_resource: false
            } ).create( { root, title }, [ 'hydrate:<=' ] )
        )

        api.editor.busy = true
        
        let [ newNode, $created ] = await Promise.all( promises )
        
        api.editor.busy = false

        setTree( $created.source, $created.root )
        
        newNode.props.source = $created.source

        api.setByPath( path, newNode )

        api.editor.active = api.getNodeApi( api.getByPath( path ) )

        $pockets.toast.success( "Template Created." )

    }
    
    if( !api.editor.active.parent ) {
        $treeLoader = false
    }
    
    return {
        treeLoader: $treeLoader,
        container: $container
    }

}