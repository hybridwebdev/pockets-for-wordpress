import { defineAsyncComponent } from "vue"

let component = defineAsyncComponent( () => import("./controls.vue") )

export let plugin:$pocketsPlugin = {
    createApp(app: any, $pockets: $pockets){
        app.component('pockets-slider-option-panel', component)
    },
}
