---
route: 'pockets vue/about'
title: 'About'
---

## Pockets VUE

Pockets VUE seamlessly integrates VUE with WordPress. With zero configuration required, Pockets VUE is ready to use out of the box. It is automatically loaded on the sites front end, as well as the WP Admin dashboard when the plugin is active.

### Configuration

Customizing the behavior of the Vue loader requires no code changes and can be done within the settings of the Pockets plugin in the WordPress admin.

### Asynchronous loading

Pockets VUE takes advantage of asynchronous loading of components and other functionality. This optimization significantly improves initial page load times and reduces the payload size sent to the client by ensuring things are only loaded when required.

### Included Components

Pockets VUE also includes a collection of ready to use components.

### Advanced Usage

For advanced usage and customization, Pockets VUE allows you to modify your app to meet specific requirements. You can add or modify components, enhancing the functionality of your VUE integration within WordPress. By extending the app, you can tailor it to suit your unique needs, providing a truly personalized user experience.

**Because of how wordpress handles updating plugins, any changes you make in the Pockets plugin directory will be lost whenever the plugin updates. It is not recommended to make changes directly.**

### Recommended method of modifying

If you wish to manually modify Pockets VUE, first you will need to [Install Node](https://nodejs.org/en/learn/getting-started/how-to-install-nodejs) if you do not already have it installed.

Instead of making changes in the Pockets directory, apply the following steps to create your own space where you can safely make modifications. 

- Copy the `/vue/dev/` directory to a new location. The results of the directory should look like this:
    ```
        - project // can be any name
            - dev
    ```
- Use the `pockets/vue-app/host-config` filter to modify where VUE is loaded from, and point it to your `project` folder. The filter expect a return of an array:
    ```php
    add_filter('pockets/vue-app/host-config', fn() => [
        "dir" => plugin_dir_path(), // relative file path to your my-location directory
        "url" => plugin_dir_url() // relative url path to your my-location directory
    ] );
    ```
    This should point to the your `project` directory.

Once that is done, you can start making changes in your `/project/dev/` directory. 

### Installation

Before you start developing, you will need to install dependencies.
Open your `/project/dev/` directory in a command line and run the following:

```
npm install
```

### Development Mode

To run in development, open your `/project/dev/` directory in a command line and run the following:

```
npm run serve
```

### Building

When you're finished making changes, open your `/project/dev/` directory in a command line and run the following:

```
npm run build
```

## Modifying pockets externally

If you do not wish to modify Pockets VUE directly, it is still available to other javascript libraries under `window.$pockets`. This exposes an api with various functionality and configuration options.
When the VUE app is loaded, it will fire the `pockets-ready` event on the documents body element. 
You can bind to this event with the following:

```js
document.body.addEventListener( "pockets-ready", event => console.log("Pockets App Ready", event.detail ) )
```

`event.detail` will point to the `$pockets` api. 

