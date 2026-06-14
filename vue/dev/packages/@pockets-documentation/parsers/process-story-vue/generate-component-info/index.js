let { parse } = require( 'vue-docgen-api')

let { componentDescription, defineModelHandler } = require('./script-handlers/index.js')

let parseConfig = {
  addScriptHandlers: [
    componentDescription,
    defineModelHandler
  ]
}

export let generateComponentInfo = async( filePath ) => {

    try {

      let doc = await parse( filePath, parseConfig )  

      return {
        
        ...doc,

        props: ( doc?.props ?? [] ).reduce( ( acc, e ) => {
            acc[e.name] = e
            return acc;
        }, {} ),
        events: ( doc?.events ?? [] ).reduce( ( acc, e ) => {
            acc[e.name] = e
            return acc;
        }, {} ),
        
      }
      
    } catch (err) {
      console.warn(`Failed to parse ${file}:`, err.message)
      return false
    }

}
 