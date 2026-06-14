import { plugin as CopyButton } from './plugins/copy-button.js'
import hljs from 'highlight.js'

hljs.addPlugin( new CopyButton({} ) )

hljs.configure({
    ignoreUnescapedHTML: true,
})

export default hljs