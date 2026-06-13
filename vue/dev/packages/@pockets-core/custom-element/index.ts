//@ts-nocheck
import { $pockets } from "@pockets-core"
import { createApp, defineComponent } from "vue"
export let create = function( tag: string, installer?: $pocketsPluginInstaller ) {

    if( customElements.get( tag ) ) {
        return;
    }
    /**
    * Create registers a custom element with the tag you provide. 
    * This should be a kebab cased and valid HTML tag, such as foo-bar which becomes <foo-bar>.
    */
    let installerFn = installer ?? function(){}
    
    class elementBase extends HTMLElement {

        connectedCallback() {

            const App = defineComponent( {
                
                created() {
                    
                    document.body.dispatchEvent( new CustomEvent( "pockets-app-created", {
                        bubbles: true,
                        detail: $pockets,
                    } ) )

                },
                template: this.innerHTML 
            } )

            createApp(App)
                .use($pockets.plugins.load('createApp'), $pockets)
                .use(installerFn, $pockets)
                .mount( this )
            
        }

    }

    customElements.define( tag, elementBase)

}
    



    

