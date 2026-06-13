import path from 'path'
import matter from 'gray-matter'
import type { Plugin } from 'vite'

/**
 * Vite plugin for processing story.md files.
 * Transforms story.md files into a uniform standard that mirrors the one generated
 * from process-story-component.
 */
 
export default () => [
  processStoryMarkdown()
]

export function processStoryMarkdown(): Plugin {

  return {

    name: 'pockets/documentation/md/processStoryMarkdown',
    
    async transform( source, id ) {

      if ( !id.endsWith( 'story.md' ) ) {
        return
      }

      const { data, content } = matter( source )

      if (process.env.NODE_ENV === 'development') {

        data.header = {
          storyPath: path.resolve( id ),
        }

      }

      data.storyIcon = data.storyIcon ?? "fa fa-book"
       
      return {
        code: `
          export const __storyData = ${JSON.stringify(data)};
          export default ${JSON.stringify(content)};
        `,
      }

    }

  }

}
