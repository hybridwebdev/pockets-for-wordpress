---
route: 'pockets plugin/crud/models/schemas'
title: 'Schemas'
---

# Schemas

Schemas describe the structure, arguments, and return expectations of CRUD resource methods.

Schemas are attached to methods using the `#[\pockets\crud\schema\attribute()]` attribute.

They are primarily used for:

- Documentation generation
- Validation
- Introspection
- API tooling

---

# Basic Schema

A schema can be declared inline as an array:

```php
#[\pockets\crud\schema\attribute([
    'type' => ['object', 'null'],
    'properties' => [
        'relative' => [
            'type' => 'boolean',
        ]
    ],
    'required' => [ 'relative' ],
])]
function link( ?array $args = [ 'relative' => true ] ) : string {
    $link = get_the_permalink( $this->resource->ID );

    if( $args['relative'] ?? false === true ) {
        return wp_make_link_relative( $link );
    }

    return $link;
}
```

This describes the accepted arguments for the `link()` method.

---

# Schema Attribute

Schemas are attached using:

```php
#[\pockets\crud\schema\attribute( ... )]
```

The attribute accepts:

- An array schema
- A callable
- A class method string
- A schema reference

---

# Inline Schemas

Inline schemas define structure directly inside the attribute.

Example:

```php
#[\pockets\crud\schema\attribute([
    'type' => ['object', 'null'],
    'properties' => [
        'filtered' => [
            'type' => 'boolean'
        ]
    ],
    'additionalProperties' => false,
    'required' => [ 'filtered' ],
])]
```

---

# Referencing Schemas

Schemas can reference another schema using `$ref`.

Example:

```php
#[\pockets\crud\schema\attribute([
    '$ref' => '/image/read_resource/'
])]
```

This imports the schema from another resource.

Used by:

```php
function image( array $read ) : \WP_Error | array
```

This allows schemas to stay reusable and centralized.

---

# Dynamic Schemas

Schemas may also be generated dynamically.

Example:

```php
#[\pockets\crud\schema\attribute(
    __CLASS__.'::__get_meta_schema'
)]
```

This calls:

```php
static function __get_meta_schema() {
    return \pockets\crud\schema\registered_meta_keys::build(
        meta_keys: get_registered_meta_keys('post'),
        action: 'read',
        meta_object_type: 'post',
    );
}
```

Dynamic schemas are useful when structure depends on runtime data.

Examples include:

- Registered meta keys
- Taxonomies
- ACF fields
- Plugin-defined structures

---

# Merging Schemas

Schemas can be merged using `$merge`.

Example:

```php
#[\pockets\crud\schema\attribute([
    '$merge' => [
        'source' => [
            '$ref' => '/terms/read_resource/',
        ],
        'with' => [
            'properties' => [
                'taxonomy' => [
                    'type' => 'string',
                    'includes' => [
                        '$ref' => '/wp/taxonomies/names/',
                    ]
                ],
            ],
            'required' => [ 'taxonomy' ],
        ],
    ]
])]
```

This extends an existing schema with additional properties.

Useful for:

- Resource composition
- Adding contextual arguments
- Extending shared schemas

---

# Callable Schemas

Schemas may also be generated using callables.

Example:

```php
#[\pockets\crud\schema\attribute(
    '\pockets\crud\models\acf\adapter::getSchema'
)]
```

The callable must return a valid schema array.

---

# Common Schema Properties

## type

Defines accepted types.

```php
'type' => 'string'
```

Or multiple:

```php
'type' => ['object', 'null']
```

---

## properties

Defines object fields.

```php
'properties' => [
    'format' => [
        'type' => 'string'
    ]
]
```

---

## required

Defines required properties.

```php
'required' => [ 'format' ]
```

---

## additionalProperties

Controls whether unknown fields are allowed.

```php
'additionalProperties' => false
```

---

## includes

Includes another schema definition.

```php
'includes' => [
    '$ref' => '/wp/taxonomies/names/'
]
```

---

# Resource References

References use resource paths:

```php
'/image/read_resource/'
'/terms/read_resource/'
'/wp-user/read_resource/'
```

These paths resolve to registered schemas within the CRUD system.

---

# Why Schemas Exist

Schemas allow resources to become self-describing.

This enables:

- Automatic documentation
- Realtime request validation information in the CRUD query builder
- Resource introspection

With schemas, resources become discoverable and machine-readable.

---

# Example

```php
#[\pockets\crud\schema\attribute([
    'type' => ['object', 'null'],
    'properties' => [
        'format' => [
            'type' => 'string',
        ]
    ],
    'required' => [ 'format' ],
])]
function date( ?array $args = [ 'format'=> 'd/j/y' ] ) : string {
    return get_the_date( $args['format'], $this->resource );
}
```

This method declares:

- The argument must be an object or null
- The object may contain a `format` field
- `format` must be a string
- `format` is required

Tools can inspect this schema without executing the method itself.