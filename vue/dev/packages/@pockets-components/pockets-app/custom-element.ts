//@ts-nocheck
import { $pockets } from "@pockets-core"
import { createApp } from "vue"

export let create = function (tag: string, installer?: $pocketsPluginInstaller) {

    if ( customElements.get( tag ) ) return;

    let installerFn = installer ?? function () { }

    class elementBase extends HTMLElement {

        connectedCallback() {
            
            let appID = this.getAttribute( 'app-id')  ?? false

            let app = createApp( {} )

            app.config.globalProperties.$pocketsAppID = appID 

            $pockets.plugins.load( 'createApp' ).call( null, app, $pockets )

            app.use( installerFn, $pockets )

            app.config.compilerOptions.isCustomElement = ( tag ) => {
                
                if( ['pockets-app-guard'].includes( tag ) ) { 
                    return true;
                }
                /**
                    This is so that inside app instances, this custom element
                    will be treaed as a component instead and use the component when
                    they are recursive
                */
            }

            let mounted = app.mount( this )

            if( this.getAttribute("replace") === "true" ) {
                this.replaceWith( mounted.$el )
            }

        }

    }

    customElements.define( tag, elementBase )

}


