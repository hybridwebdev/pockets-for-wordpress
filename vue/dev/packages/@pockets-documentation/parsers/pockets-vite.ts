import storyComponentParser from './process-story-vue'
import storyMarkdownParser from './process-story-markdown/'

import { defineConfig } from 'vite'

/**
    Adds plugins for marsing .story.md and .story.vue files
*/
export default defineConfig( {
    
    plugins: [
        ...storyComponentParser(),
        ...storyMarkdownParser()
    ]

} )