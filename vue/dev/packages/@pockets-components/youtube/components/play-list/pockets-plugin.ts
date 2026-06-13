import { defineAsyncComponent } from "vue"

let playList = defineAsyncComponent( () => import("./index.vue") )

export let plugin:$pocketsPlugin = {
    createApp(app: any, $pockets: $pockets){
        app.component('youtube-playlist', playList )
    },
}
