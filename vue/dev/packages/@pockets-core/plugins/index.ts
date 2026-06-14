// @ts-nocheck
import { $pockets } from "@pockets-core"
 
export let plugins = {

    registered: [] as $pocketsPlugin[],

    /**
        Fired once when library loads
    */
    init() {

        /**
            Init should only ever fire once, but this prevents
            any scenarios where plugins would be duplicated
            if it's fired multiple times. 
        */
        plugins.registered = []
        
        let modules = import.meta.glob( [ 
            '/**/pockets-plugin.ts', 
        ], { eager: true } ) 
        
        Object.entries( modules ).map( plugins.resolve ).map( plugins.add )
        
        plugins.load( 'init' ).call( null, false, $pockets )

    },
    
    resolve: ( [ path, module ] : [ string, any ] ) => {

        const resolved = module ?? {}

        const plugin: $pocketsPlugin = resolved?.plugin ?? resolved ?? {}

        return {
            ...plugin,
            path,
        }

    }, 

    add: ( plugin: $pocketsPlugin ) => plugins.registered.push( plugin ),

    /**
        Applies registered plugins. Called via plugins.init and when
        the createApp hook is called.
    */
    load( hookName: keyof $pocketsPlugin ) {

        return async ( app: $pocketsApp, ...args: any[] ) => {

            if ( app ) {
                app.config.globalProperties.$pockets = $pockets 
            }

            plugins.registered.map( async ( loader: $pocketsPlugin ) => {

                if ( !( hookName in loader ) ) {
                    return
                }

                let fn = loader[hookName]

                if ( typeof fn === "function" ) {
                    fn( app, $pockets, ...args )
                }

            } )


        }

    }

}