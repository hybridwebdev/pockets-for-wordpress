import { defineConfig, mergeConfig, loadConfigFromFile } from 'vite'
import fg from 'fast-glob'

/**
    Automatically generates vite config
*/
export default defineConfig( async() => {

    let base = {
    }
    
    const files = fg.sync( './**/pockets-vite.ts' , {

        absolute: true,
        ignore: ["**/node_modules/**"]

    } )

    const modules = await Promise.all(

        files.map( file => loadConfigFromFile( {}, file ) .then( e => e.config ?? {} ) )

    )

    return modules.reduce( ( acc, plugin ) => mergeConfig( acc, plugin ), base  )

} )