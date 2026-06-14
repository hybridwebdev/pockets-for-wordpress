import vConfirmClick from "./"

export let plugin:$pocketsPlugin = {
    createApp(app: any, $pockets: $pockets){
        app.directive('confirm-action', vConfirmClick)
    },
}
