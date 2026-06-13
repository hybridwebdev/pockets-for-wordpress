import { defineAsyncComponent } from "vue"

let documentationAPP = defineAsyncComponent( () => import("./router/index.vue") )
let storyDemoContainer = defineAsyncComponent( () => import("./story-demo-container/index.vue") )
let storyDemo = defineAsyncComponent( () => import("./story-demo/index.vue") )
let storyIframe = defineAsyncComponent( () => import("./story-iframe/index.vue") )

let createApp = (app: any, $pockets: $pockets) => { 

    app.component( 'pockets-documentation', documentationAPP )

    app.component( 'pockets-story-demo-container', storyDemoContainer )
    app.component( 'pockets-story-demo', storyDemo )
    app.component( 'pockets-story-iframe', storyIframe )

}

export let plugin:$pocketsPlugin = {
    createApp
}

