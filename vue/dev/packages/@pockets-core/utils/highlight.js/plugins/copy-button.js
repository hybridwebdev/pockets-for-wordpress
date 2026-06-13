import { useClipboard } from '@vueuse/core'

/**
 * Highlight.js copy button plugin.
 * 
 * This plugin adds a "Copy" button to code blocks after they are highlighted.
 * It uses the VueUse `useClipboard` composable to copy text.
 * 
 * Options:
 * - autohide (boolean): If true, the copy button only appears on hover.
 * - text (string): Default button label.
 * - copied (string): Label after successful copy.
 * - failed (string): Label after failed copy.
 * - duration (number): Time in ms before resetting button label.
 * - className (string): Additional classes for styling.
 * - targetName (string): Unique class for targeting the button.
 */
export class plugin {

  constructor( options = {} ) {

    this.options = {
      autohide: true,
      text: "Copy",
      copied: "Copied",
      failed: "Failed",
      duration: 1000,
      className: "btn btn-accent-dk position-absolute top-0 end-0",
      targetName: "hljs-copy-button",
      ...options
    }

  }

  'after:highlightElement'( { el } ) {

    const copyEnabled = el.getAttribute('hljs-copy-enabled') === 'true'

    if (!copyEnabled) {
      return
    }

    let { options } = this

    let { copy } = useClipboard( { source: "", legacy: true } )

    const pre = el.closest('pre')

    if ( !pre || pre.querySelector( `.${options.targetName}`) ) return

    pre.style.position = 'relative'

    const button = document.createElement('button')
    
    button.type = 'button'
    button.innerText = options.text
    button.className = `${options.className} ${options.targetName}`

    if ( options.autohide ) {
      // Start hidden
      button.style.opacity = '0'

      pre.addEventListener('mouseenter', () => {
        button.style.opacity = '1'
      })

      pre.addEventListener('mouseleave', () => {
        button.style.opacity = '0'
      })
      
    }

    pre.appendChild( button )

    button.addEventListener( 'click', () => {

      try {
        copy( el.innerText )
        button.innerText = options.copied
      } catch (err) {
        button.innerText = options.failed
      } finally {
        setTimeout(() => button.innerText = options.text, options.duration )
      }

    } )

  }

}
