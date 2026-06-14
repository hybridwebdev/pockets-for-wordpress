---
route: 'pockets plugin/crud/adding data/meta-data'
title: 'CUD Model Meta Data'
---
## CRUD Model Meta Data

Meta data in WordPress refers to additional information associated with an object. Each object (`wp_post`, `wp_user`, etc.) can have custom fields or meta data. This meta data allows developers to store and retrieve specific information related to an object. Pockets **CRUD** models utilize this system to safely add meta data through a whitelisting approach. New meta keys can be attached to CRUD models programatically, allowing developers to seamlessly extend or nodify the Meta DATA attached to a CRUD model. Only meta keys that are registered will be used during read/update operations. Any other keys wil be ignored. 

### Adding and Removing Meta Keys

To add new meta keys to an object, you use the `register_meta` function. This function registers a meta key to a particular object type, specifying the data type, sanitization callback, and authorization callback. **CRUD** models that utilize meta data each have their own unique `meta_object_type` key they use to get these registered meta keys. You can find this key in the relevant **CRUD** models `read/update` walker classes.

To add a new meta key, use the `register_meta()` function during your theme or plugin's initialization. This establishes the meta key's structure and behavior.

##### *Registering a Meta Key*:

```php
// Example of registering a meta key for posts
register_meta(
    'post',
    'custom_meta_key',
    [
        'type'         => 'string',
        'description'  => 'Custom Meta Key Description',
        'single'       => true,
        'show_in_rest' => true,
        // Add sanitization and authorization callbacks here
    ]
);
```

After registering the meta key, whenever meta data is updated or retrieved in a **CRUD** model, it will automatically be handled by your registered meta keys logic.

##### *Removing Meta Keys*

To unregister a meta key, removing it from the registered meta keys, use `unregister_meta_key()`.

```php
// Unregister a meta key (does not delete existing data)
unregister_meta_key('post', 'custom_meta_key');
```

Note: `unregister_meta_key()` only removes the meta key from registration. It does not delete the existing data associated with that key.

If you want to completely delete a meta key and its data, you can unregister the key and then use the relevant WP functionality to remove the residual data if desired.

### Sanitization and Authorization

When registering a meta key, you can define callbacks for sanitization and authorization. Sanitization ensures that the data is formatted correctly before saving it to the database, and authorization checks if the current user has the right capabilities to manipulate this meta key.

```php
function custom_sanitize_callback($value) {
    // Sanitize the value before saving it to the database
    return sanitize_text_field($value);
}

function custom_authorize_callback($object_id, $meta_key, $user_id) {
    // Check if the user has the necessary capabilities to update this meta key
    return current_user_can('edit_post', $object_id);
}

// Add the callbacks to the register_meta function
register_meta(
    'post',
    'custom_meta_key',
    [
        'type'              => 'string',
        'description'       => 'Custom Meta Key Description',
        'single'            => true,
        'show_in_rest'      => true,
        'sanitize_callback' => 'custom_sanitize_callback',
        'auth_callback'     => 'custom_authorize_callback',
    ]
);
```

### Generating SCHEMAS for registered meta keys

Pockets has a utility class to easily create dynamic SCHEMAS for registered meta keys. It takes 3 arguments, and returns a generated schema for the registered meta keys.

```php
\pockets\crud\schema\registered_meta_keys::build( 
    action: "read",
    meta_keys: get_registered_meta_keys('post'),
    meta_object_type: "post"
);
```

##### *Arguments*

* `action`
  CRUD action schema is for. Should be "read" or "update".
* `meta_keys`
  Array of keys returned from calling`get_registered_meta_keys()`
* `meta_object_type`
  Object type key used to register the meta keys.

Heres an example of what a READ resource walker looks like:

```php
class my_crud_model_read_resource extends \pockets\crud\resource_walker {
  
    #[ \pockets\crud\schema\attribute( __CLASS__.'::__get_meta_schema' ) ]
    function meta() {}

    static function __get_meta_schema(){
        return \pockets\crud\schema\registered_meta_keys::build( 
            meta_keys: get_registered_meta_keys('post'),
            action: "read", // can be "read" | "update"
            meta_object_type: "post",
        );
    }

}
```

##### *Attaching Schema data to registered meta key*

When registering a meta key with `register_meta()`, you can provide a `schema` argument for that meta key under the `description` entry. The `schema` argument has 2 entries, `read` and `update` and designates what operation the schema applies to.

For example:

```php
$meta_arguments = [
    'description' => [
        'schema' => [
            'read' => [
                /*
                    schema definition for read operation here.
                */
                'type' => 'null'
            ],
            'update' => [
                /*
                    schema definition for update operation here.
                */
                'type' => 'string'
            ]
        ]
    ],
];

register_meta('post', 'test-meta', $meta_arguments );
```

Using this functionality, you can make it easier for users to understand how to use your meta keys properly by providing information about the structure of data it requires.

### Additional information

For more information on meta keys see the following resources:

* [register_meta](https://developer.wordpress.org/reference/functions/register_meta/)
* [unregister_meta_key](https://developer.wordpress.org/reference/functions/unregister_meta_key/)
* [get_registered_meta_keys](https://developer.wordpress.org/reference/functions/get_registered_meta_keys/)
