---
route: 'pockets plugin/crud/models/adapters'
title: 'Adapters'
---

# Adapters

Adapters connect CRUD operations to the actual resource logic used to read, update, and retrieve resources.

They act as an abstraction layer between a CRUD model and the underlying implementation.

A model does not directly perform read or update logic itself. Instead, it delegates those operations to adapter classes.

---

# Overview

A CRUD model defines adapter class references using string properties:

```php
public string $read_resource;
public string $update_resource;
public string $get_resource;
```

These properties map CRUD operations to concrete classes.

---

# Adapter Types

Three adapter types exist:

| Adapter | Purpose |
|---|---|
| `get_resource` | Retrieves and validates the underlying resource |
| `read_resource` | Reads fields from the resource |
| `update_resource` | Updates fields on the resource |

---

# Basic Example

```php
class MyModel extends \pockets\crud\model {

    public static string $model_name = 'my-model';

    public string $read_resource   = read_resource::class;
    public string $update_resource = update_resource::class;
    public string $get_resource    = get_resource::class;

}
```

---

# read_resource

The `read_resource` adapter is responsible for exposing readable fields.

It should extend:

```php
\pockets\crud\resource_walker
```

Example:

```php
class read_resource extends \pockets\crud\resource_walker {

    function title() : string {
        return $this->resource->post_title;
    }

    function slug() : string {
        return $this->resource->post_name;
    }

}
```

This adapter is used internally by:

```php
$model->read_resource( $fields );
```

And usually indirectly through:

```php
$model->read( $query );
```

---

# update_resource

The `update_resource` adapter handles update operations.

It should also extend:

```php
\pockets\crud\resource_walker
```

Example:

```php
class update_resource extends \pockets\crud\resource_walker {

    function title( string $title ) {
        wp_update_post([
            'ID' => $this->resource->ID,
            'post_title' => $title
        ]);
    }

}
```

This adapter is invoked through:

```php
$model->update_resource( $fields );
```

Or indirectly through:

```php
$model->update( $query, $read );
```

---

# get_resource

The `get_resource` adapter retrieves the underlying resource.

It should extend:

```php
\pockets\crud\get_resource
```

Example:

```php
class get_resource extends \pockets\crud\get_resource {

    function get( int $ID ) {
        return get_post( $ID );
    }

}
```

This adapter runs automatically during:

```php
Model::init( $resource );
```

---

# How Adapters Work

When a model is initialized:

```php
$post = PostModel::init( 15 );
```

The following happens internally:

```php
$instance->setResource( 15 );
```

Which invokes:

```php
$this->resource = $this->get_resource::init( 15 );
```

The resolved resource is then stored on:

```php
$this->resource
```

All adapters share access to this resource.

---

# Internal Adapter Methods

The adapters trait provides helper methods:

```php
final function read_resource(array $fields)
final function update_resource(array $fields)
```

These methods instantiate the configured adapter and execute it.

Example:

```php
$this->read_resource::init( $this->resource )->walk( $fields );
```

---

# Resource Walker

Both `read_resource` and `update_resource` typically extend:

```php
\pockets\crud\resource_walker
```

A resource walker maps array keys to method calls.

Example request:

```php
[
    'title' => true,
    'slug' => true
]
```

Internally becomes:

```php
$resource->title();
$resource->slug();
```

---

# Nested Resources

Adapters can invoke other CRUD models.

Example:

```php
function author( array $read ) {

    return \pockets::crud('wp-user')
        ::init( (int) $this->resource->post_author )
        ->read( $read );

}
```

This allows deeply nested CRUD structures.

---

# Schemas and Adapters

Adapters are introspected to generate schemas and documentation.

For example:

```php
#[\pockets\crud\schema\attribute([
    '$ref' => '/image/read_resource/'
])]
```

This allows adapters to become self-describing.

---

# Why Adapters Exist

Adapters separate responsibilities.

| Concern | Responsibility |
|---|---|
| Model | Public CRUD API |
| get_resource | Resource retrieval |
| read_resource | Reading fields |
| update_resource | Updating fields |

This creates:

- Cleaner architecture
- Reusable resource logic
- Dynamic introspection
- Automatic schema generation
- Better documentation
- Safer CRUD operations

---

# Full Example

```php
class post extends \pockets\crud\model {

    public static string $model_name = 'post';

    public string $read_resource   = read_resource::class;
    public string $update_resource = update_resource::class;
    public string $get_resource    = get_resource::class;

}
```

```php
class read_resource extends \pockets\crud\resource_walker {

    function title() : string {
        return $this->resource->post_title;
    }

}
```

```php
class update_resource extends \pockets\crud\resource_walker {

    function title( string $title ) {
        wp_update_post([
            'ID' => $this->resource->ID,
            'post_title' => $title
        ]);
    }

}
```

```php
class get_resource extends \pockets\crud\get_resource {

    function get( int $ID ) {
        return get_post( $ID );
    }

}
```

Usage:

```php
$post = \pockets::crud('post')::init( 15 );

$post->read([
    'title' => true
]);

$post->update([
    'title' => 'New Title'
], [
    'title' => true
]);
```