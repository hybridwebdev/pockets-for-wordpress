
export let plugin:$pocketsPlugin = {
    async createApp(app: any, $pockets: $pockets){
        let { default: directive } = await import("./")
        app.directive('debounce', directive )
    },
}

