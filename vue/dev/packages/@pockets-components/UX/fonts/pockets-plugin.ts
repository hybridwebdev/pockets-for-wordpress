import { defineAsyncComponent } from "vue"
let family = defineAsyncComponent( () => import("./family") )
let weight = defineAsyncComponent( () => import("./weight") )
let style = defineAsyncComponent( () => import("./style") )
export let plugin:$pocketsPlugin = {
    createApp: (app: any, $pockets: $pockets) => {
        app.component('pockets-ux-font-family', family )
        app.component('pockets-ux-font-weight', weight )
        app.component('pockets-ux-font-style', style )
    },
}
 