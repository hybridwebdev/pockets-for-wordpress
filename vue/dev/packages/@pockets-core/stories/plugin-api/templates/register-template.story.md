---
route: 'pockets plugin/templates/registering-selectable-template'
title: 'Selectable templates'
---

## Registering a selectable template

One feature of pockets is the ability to register dynamically selectable templates. 

To register a new template, create a file anywhere in your ```/templates/``` directory. This should be a directory [registered](#/pockets-plugin/templates/registering-folders) via the ```pockets/template-locations``` filter.

Add the following to the top of the file:

```php
<?php
/**
    Template Name: My Template Name
    Template Type: my-template-tag
*/
```

Now your template will show up as a selectable template.

Registered templates are an array containing:
- ```path``` - Path to the file
- ```name``` - Name of the template

### Adding additonal data

When Pockets loads templates, it filters them with the ```pockets/static-templates/register``` hook. You can use this hook to modify or add to the above data. The callback gets 2 arguments: 
- ```$data``` an array which contains the path and name.
- ```$file_contents``` a string that contains the full content of the template found. 

#### Example
```php
add_filter( 'pockets/static-templates/register', fn( $data,  $file_contents ) => array_merge( $data, [
    'additional_meta' => "some stuff"
] ), 10, 2);
```

### Get a list of templates:

Using PHP

```php
$templates = \pockets::$templates::get( type: [ "my-template-tag" ] );
array_map(
    array: $templates,
    callback: fn( $e) => print("<option value='{$e['path']}'>{$e['name']}</option>"),
);
```

Using Javascript

```js
$pockets.crud( 'wp' ).init( null ).read( [
    'static_templates:templates': "my-template-tag"
] ).then( res => console.log( res.templates ) )
```

Using VUE

```html
<pockets-crud-connection
    action='read'
    model='wp'
    :init='null'
    :input='{
        "static_templates:templates": "my-template-tag"
    }'
    :caching-enabled='true'
    #default='{ results, loading }'
>
    <select v-if='results'>
        <option v-for='template in results.templates' :value='template.path'>
            {{template.name}}
        </option>
    </select>
</pockets-crud-connection>
```
 