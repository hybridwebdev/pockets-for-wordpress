// @ts-nocheck
import { defineAsyncComponent } from "vue"

import Vue3Toasity, { type ToastContainerOptions } from 'vue3-toastify'
import { toast } from "vue3-toastify"
import 'vue3-toastify/dist/index.css'
import "./style.scss"

let component = defineAsyncComponent( () => import("./index.vue") )

class errorWrapper extends Error {
  constructor( error ) {
    super(error.message)
  }
  toast( message:string = '' ){
    $pockets.toast.error( message!='' ? message : this.message )
  }
}

export let plugin:$pocketsPlugin = {

    createApp(app: any, $pockets: $pockets) {
        
        let $config:ToastContainerOptions = {

            autoClose: 3000,
            position: toast.POSITION.BOTTOM_CENTER,
            clearOnUrlChange: false,
            dangerouslyHTMLString: true,
            closeButton : false

        }

        $pockets.toast = toast 

        $pockets.toast.errorWrapper = errorWrapper

        app.use( 
            Vue3Toasity,
            $config
        )

        app.component('pockets-ux-toast', component)

    }

}