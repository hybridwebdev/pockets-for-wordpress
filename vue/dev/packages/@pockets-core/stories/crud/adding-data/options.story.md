---
route: 'pockets plugin/crud/adding data/options'
title: 'CRUD Model Options'
---
## CRUD Model Options

Options in WordPress are additional data stored under the `wp_options` table. New options can be registered with defined logic for saving and retrieving it, as well as applying a default value when none is present in the database. Pockets utilizes this system to safely add options through a whitelisting approach. New options can be registered programatically, allowing developers to seamlessly extend or modify the options available. Only options that are registered will be used during **CRUD** model read/update operations. Any other options wil be ignored.

### Adding and Removing Option Keys

To add a new option, you use the `register_setting` function. This function registers an option, specifying the data type, sanitization callback, and authorization callback.

#### _Registering an option_:

```php
register_setting(
    'options',
    'custom_option_name',
    [
        'type'         => 'string',
        // Add sanitization and authorization callbacks here
        'auth_callback' => function(){},
        'sanitize_callback' => function(){},
        'default' => "some value"
    ]
);
```

After registering an option, whenever it is is updated or retrieved, it will automatically be handled by your registered settings logic.

#### _Removing an option_

To unregister an option, removing it from the registered options, use `unregister_setting()`.

```php
// Unregister an option (does not delete existing data)
unregister_setting('options', 'custom_option_name');
```

Note: `unregister_setting()` only removes the option from registration. It does not delete the existing data associated with that option. If you want to completely delete an option and its data, you can unregister the option and then use the relevant WP functionality to remove the residual data if desired.

### Sanitization and Authorization

When registering an option, you can define callbacks for sanitization and authorization. Sanitization ensures that the data is formatted correctly before saving it to the database, and authorization checks if the current user has the right capabilities to manipulate the option. The `auth_callback` is a custom paramater used by **Pockets**. It is only fired when called from the `wp-options` **CRUD** model. When called, an argument of `action` is passed, which is one of `read` or `update` based on the operation calling it.

```php
function custom_sanitize_callback($value) {
    // Sanitize the value before saving it to the database
    return sanitize_text_field($value);
}

function custom_authorize_callback( string $action ) {
    // Check if the user has the necessary capabilities to update this option.
    return current_user_can( 'manage_options' );
}

// Add the callbacks to the register_setting function
register_setting(
    'options',
    'custom_option_name',
    [
        'type'              => 'string',
        'sanitize_callback' => 'custom_sanitize_callback',
        'auth_callback'     => 'custom_authorize_callback',
    ]
);
```

### Generating SCHEMAS for registered options

Pockets includes the **CRUD** model `wp-options` which can be used to interact with registered options. This model automatically collects all settings registered via `registered_setting` and generates schemas for them. It will only generate a schema for settings that have an `option_group` set to `options`. 

#### _Attaching Schema data to registered options_

When registering an option with `register_setting()`, you can provide a `schema` argument for that option under the `description` entry. The `schema` argument has 2 entries, `read` and `update` and designates what operation the schema applies to.

For example:

```php
$option_arguments = [
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

register_setting('options', 'custom_option_name', $option_arguments );
```

Using this functionality, you can make it easier for users to understand how to use your option properly by providing information about the structure of data it requires.

### Additional information

For more information on options see the following resources:

*   [unregister\_setting](https://developer.wordpress.org/reference/functions/unregister_setting/)
*   [register\_setting](https://developer.wordpress.org/reference/functions/register_setting/)
*   [get\_registered\_settings](https://developer.wordpress.org/reference/functions/get_registered_settings/)