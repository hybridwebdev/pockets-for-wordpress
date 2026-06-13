export let plugin: $pocketsPlugin = {
    createApp: async (app: any) => {
        const { default: directive } = await import("./")
        app.directive("click-outside", directive)
    }
}