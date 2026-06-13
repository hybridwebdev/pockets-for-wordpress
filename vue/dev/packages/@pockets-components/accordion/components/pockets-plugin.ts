import { defineAsyncComponent } from "vue"

let container = defineAsyncComponent( () => import("./container.vue") )
let trigger = defineAsyncComponent( () => import("./children/trigger.vue") )
let item = defineAsyncComponent( () => import("./children/item.vue") )
let content = defineAsyncComponent( () => import("./children/content.vue") )

export let plugin:$pocketsPlugin = {
    createApp(app: any, $pockets: $pockets){ 
        app.component( 'pockets-accordion', container )
        app.component( 'pockets-accordion-item', item )
        app.component( 'pockets-accordion-content', content )
        app.component( 'pockets-accordion-trigger', trigger )
    },
}
