---
route: 'pockets plugin/templates/registering-folders'
title: 'Registering a template folder'
---

## Registering a new template folder.

By default, pockets looks for templates in its own directory, as well as the active parent/child theme in that order. This behavior can be modified via the ```pockets/template-locations``` filter.

To add a new template location, use the following code:

```php
add_filter('pockets/template-locations', fn( array $locations ) => array_merge( $locations, [
    plugin_dir_path( __FILE__ ); 
] ), 10, 1 ); 
```

Now you can add files to your directory under ```/templates/``` and they can be [loaded](#/pockets-plugin/templates/loading-templates) with ```\pockets::load_template()```.

