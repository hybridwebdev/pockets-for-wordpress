---
route: 'pockets plugin/crud/models/get'
title: 'Getting a resource'
---

## Getting a CRUD resource

The `get_resource` class is responsible for translating a crud models `init` argument into a corresponding resource that the model uses for its various operations. It will look at the `typeof` the argument given and call a corresponding `request_using_{$type}` method on the class. For example if the type of the argument is an `array` it will call the `request_using_array` method of the class.

By default, arrays are handled by looking for a `by` parameter. If a `by` parameter is not provided in the argument, it will fall back to what is set on the `default_array_by` property of the class. For example:

```php
[
"by" => "ID"
...other request info here
]
```

This will map to a corresponding `array_by_{$by_argument}` method on the class. In this example it would call `array_by_ID`. The method called will be given the argument and is expected to return the resource using the data in the argument like this:

```php
function array_by_ID(){
    return $some_value; 
}
```

Or it can return an error:

```php
function array_by_ID(){
    return \pockets::error("error message");
}
```

Subsequent actions will validate the resource returned by this method, and run their logic based on if it's a valid resource or an error.
