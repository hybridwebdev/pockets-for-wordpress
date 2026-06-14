import { defineAsyncComponent } from "vue"

let container = defineAsyncComponent( () => import("./container.vue") )
let slide = defineAsyncComponent( () => import("./slide.vue") )

export let plugin:$pocketsPlugin = {
    createApp(app: any, $pockets: $pockets) {
        app.component('pockets-slider', container )
        app.component('pockets-slider-slide', slide )
    }
}
