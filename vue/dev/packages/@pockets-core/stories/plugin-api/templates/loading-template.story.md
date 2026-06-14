---
route: 'pockets plugin/templates/loading-templates'
title: 'Loading a template'
---

## Loading a template

Pockets has a function that can be used to load templates located in ```/templates/``` folders [registered](#/pockets-plugin/templates/registering-folders) via the ```pockets/template-locations``` filter. 

Here's an example file structure: 

- your-plugin
    - templates
        - example-template.php

When loading a template, you can omit the ```/templates/``` portion as the function
will look for the file relative to that directory. 

The function takes a single argument of an array with the following structure:

```php
[
    /**
        Location of file without .php extension.
    */
    'template' => "example-template",
    /**
        You can add additional data here.
    */
    'some-arg' => "Hello world!",
]
```
Any additional entries in the array will be passed into the template. This data is accessible as ```$data```.

###### ```example-template.php```

```php
echo $data['some-arg'];
```

### Example usage

```php

$result = \pockets::load_template( [
    'template' => 'example-template',
    'some-arg' => 'Hello World!'
] );

echo $result;

```

This function will look for templates in registered locations in the order that they are registered. The first found template will be the one used. You can always change the priority you register your location with to change the order they are loaded in. 
