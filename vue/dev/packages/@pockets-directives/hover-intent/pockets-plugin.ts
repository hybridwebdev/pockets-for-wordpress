import hoverIntentDirective from "./index"
export let plugin:$pocketsPlugin = {
    createApp(app: any, $pockets: $pockets){ 
        app.directive('hover-intent', hoverIntentDirective)
    }
}