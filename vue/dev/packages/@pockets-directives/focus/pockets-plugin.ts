import { $pockets } from "@pockets-core"
import directive from "./"

export let plugin:$pocketsPlugin = {

    createApp(app: $pocketsApp, $pockets: $pockets){

        app.directive( 'focus', directive ) 

    },
    
}