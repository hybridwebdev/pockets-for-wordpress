let { parse } = require( 'vue-docgen-api')
 
const parseConfig = {
}

export let generateDirectiveInfo = async( filePath ) => {
  
  try {

    let doc = await parse( filePath, parseConfig )

    let props = ( propTags ) => {

      return propTags.reduce(( acc, prop ) => {

        let name = prop.name || "unknown"
        let defaultValue = undefined
        let cleanDescription = prop.description || ''
        let required = true

        // vue-docgen-api does NOT parse @property names,
        // so extract them from description if name missing
        if ( !prop.name ) {
 
          const optionalMatch = cleanDescription.match(
            /^\[([^=\]]+)(?:=([^\]]+))?\]\s*(?:-\s*)?(.*)$/
          )

          // Required:
          // delay - description
          const requiredMatch = cleanDescription.match(
            /^([^\s-]+)\s*(?:-\s*)?(.*)$/
          )

          if ( optionalMatch ) {

            name = optionalMatch[1].trim()

            if ( optionalMatch[2] !== undefined ) {
              defaultValue = optionalMatch[2].trim()
            }

            required = false
            cleanDescription = optionalMatch[3].trim()

          } else if ( requiredMatch ) {

            name = requiredMatch[1].trim()
            cleanDescription = requiredMatch[2].trim()
            required = true

          }

        } else {

          // @param path
          required = true

        }

        acc[name] = {
          type: prop.type,
          description: cleanDescription,
          default: defaultValue,
          required
        }

        return acc

      }, {} )

    }

    let description = () => {

      const descTags = doc.tags?.description || []

      return descTags.map( item => item.description ).join( ' ' ).trim()

    }

    return {
      description: description(),
      props: { 
        ...props( doc.tags?.property || [] ),
        ...props( doc.tags?.params || [] )
      }
    }

  } catch ( err ) {

    console.warn( `Failed to parse ${filePath}:`, err.message )
    return false

  }

}
 