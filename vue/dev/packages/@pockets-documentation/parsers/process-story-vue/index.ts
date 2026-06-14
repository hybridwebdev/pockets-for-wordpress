import matter from 'gray-matter'
import type { Plugin } from 'vite'
import { generateComponentInfo } from './generate-component-info'
import { generateDirectiveInfo } from "./generate-directive-info"

const storyMap = new Map<string, any>()

export default () => [
  
  parseMatter(),

  extractComponentInfo(),
  extractDirectiveInfo(),
  
  injectStoryData(),

]

/**
  This should be run first. Looks at file and pulls front matter
  off it. Stores it so subsequent parsers can transform it.
*/
export function parseMatter(){
   
  return {

    name: 'pockets/documentation/vue/parseMatter',
    enforce: 'pre',
    async transform( source, id ) {
      
      if ( !id.endsWith('story.vue') ) {
        return
      }

      const { data } = matter( source )

      if ( !data ){
        return
      }

      /**
        Used for story demo headers like component info header and dev bar
      */
      data.header = {
        sourceFile: false,
        missingSourceFile: false
      }        

      if ( process.env.NODE_ENV === 'development' ) {
       
        data.header.storyPath = id

      }
               
      data.storyIcon ??= 'fa fa-code'

      storyMap.set( id, data )

    }
  
  }

}
 
export function extractDirectiveInfo(): Plugin {

  return {

    name: 'pockets/documentation/vue/extractDirectiveInfo',
    enforce: 'pre',

    async transform( source, id ) {
 
      let storyData = storyMap.get( id )

      if ( !storyData || !storyData.directive ){
        return
      }
      
      storyData.header.sourceFile = storyData.directive

      let res = await this.resolve( storyData.header.sourceFile, id )

      if( !res ) {
        console.error("Directive not found in story:", id ) 
        storyData.header.missingSourceFile = true
      }

      let resolvedPath = res?.id ?? false

      if( resolvedPath ) {

        /**
          Grab docgen docs and fudge it as componentInfo so that
          the UX that renders componentinfo can be re-used
          to render the directiveInfo
        */  
        storyData.componentInfo = await generateDirectiveInfo( resolvedPath )

        /**
          Force story to regen when resolved/source file changes. Saves
          having to do a server reset.
        */
        this.addWatchFile( resolvedPath )

      }
      
      if ( process.env.NODE_ENV === 'development' && resolvedPath ) {
      
        storyData.header.resolvedPath = resolvedPath

      }

    },
 
  }

}

export function extractComponentInfo(): Plugin {

  return {

    name: 'pockets/documentation/vue/extractComponentInfo',
    enforce: 'pre',

    async transform( source, id ) {

      let storyData = storyMap.get( id )

      if ( !storyData || !storyData.component ){
        return
      }

      storyData.header.sourceFile = storyData.component

      /**
        Piggybacks normal resolution using alias set in roote vite.config
        which basically resolves the same way you would when importing
        the same file.
        
      */

      let res = await this.resolve( storyData.header.sourceFile, id )

      if( !res ) {
        console.error("Component not found in story:", id ) 
        storyData.header.missingSourceFile = true
      }

      let resolvedPath = res?.id ?? false

      if( resolvedPath ) {

        storyData.componentInfo = await generateComponentInfo( resolvedPath )

        /**
          Force story to regen when resolved/source file changes. Saves
          having to do a server reset.
        */
        
        this.addWatchFile( resolvedPath )

      }

      if ( process.env.NODE_ENV === 'development' && resolvedPath ) {
      
        storyData.header.resolvedPath = resolvedPath 

      }

      storyMap.set( id, storyData )

    },
 
  }

}

export function injectStoryData(): Plugin {
  
  return {
    
    name: 'pockets/documentation/vue/injectStoryData',
    enforce: 'post',

    async transform( source, id ) {

      let storyData = storyMap.get( id )

      if ( !storyData ) {
        return
      }

      return {
        code: `${source}\nexport const __storyData = ${JSON.stringify(storyData)};` 
      }

    },
 
  }

}
