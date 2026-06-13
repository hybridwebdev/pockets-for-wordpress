import { defineAsyncComponent } from "vue"

let container = defineAsyncComponent( () => import("./components/container.vue") )
let input = defineAsyncComponent( () => import("./components/input.vue") )
let validation = defineAsyncComponent( () => import("./components/validation.vue") )

export let plugin:$pocketsPlugin = {
    createApp(app: any, $pockets: $pockets) {
        app.component( 'pockets-form-container', container )
        app.component( 'pockets-form-input', input )
        app.component( 'pockets-form-validation', validation )
    }
}
