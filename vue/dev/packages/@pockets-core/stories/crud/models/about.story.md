---
route: 'pockets plugin/crud/models/about'
title: 'About'
---

## About CRUD models

A Pockets CRUD model is a class that extends ```pockets\crud\model``` and defines how to perform ```create```, ```read```, ```update```, and ```delete``` operations on a specific resource. For example a ```post```, ```term``` or ```user```.

Each model has a ```model_name``` which is used to call the model and represents one resource type. For example:

```php
class MyModel extends \pockets\crud\model {
    public static string $model_name = 'my-post-model';
}
```

To call this model, you'd use ```\pockets::crud('my-post-model')```

### CRUD Operations

Every model exposes four methods that correspond to the 4 CRUD actions:

```php
class MyModel extends \pockets\crud\model {
    
    public function create( array $input, ?array $output ){}
    public function read( array $input ){}
    public function update( array $input, ?array $output ){}
    public function delete( array $input ){}

}
```

These methods:

- accept input and optional output fields

You can use whatever logic you wish in these methods and can return anything, such as data or even an instance of ```\Wp_Error```.

### Permissions

See [permissions](#/pockets-plugin/crud/models/permissions)

### Adapters

See [adapters](#/pockets-plugin/crud/models/adapters)

### Schemas

See [Schemas](#/pockets-plugin/crud/models/schemas)

### Model Registry

The ```pockets\crud\model``` class has a method that is used to register your crud model,
allowing it to be used. To register your CRUD model, fire the following command:

```php
class MyModel extends \pockets\crud\model {
}

MyModel::register()
```

