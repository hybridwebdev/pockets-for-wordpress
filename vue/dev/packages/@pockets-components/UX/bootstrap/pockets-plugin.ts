import { defineAsyncComponent } from "vue"

let $select = defineAsyncComponent( () => import("./components/select.vue") )
let $interface = defineAsyncComponent( () => import("./components/interface.vue") )

export let plugin:$pocketsPlugin = {
    createApp(app: any, $pockets: $pockets) {
        app.component( 'pockets-ux-bootstrap-selector', $select )
        app.component( 'pockets-ux-bootstrap-interface', $interface )
    }
}
