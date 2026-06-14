---
route: 'pockets plugin/crud/models/reading-and-updating'
title: 'Reading and Updating'
---
## Reading and Updating a CRUD resource

The `resource_walker` class is responsible for handling the **read** and update operations of **CRUD** models. It takes a single argument of an array, and iterates each entry. It uses the **key** portion of the array entry, and calls a method with the same name on the class. If the **key** does not have a corresponding function, that **key** is ommitted from the returned result. Each function call gets the **value** of the array entry as its argument. Some methods arguments are optional, and in those cases the **value** can be omitted.

Here's an example of what a **walker** class looks like:

```php
class my_resource_walker extends \pockets\crud\resource_walker {
    function foo_1(string $arg){
        return "value is $arg";
    }
    function foo_2(string $arg){
        return [
            "key-1" => "value-1 is $arg",
            "key-2" => "value-2 is $arg",
        ];
    }
    function foo_3($arg = "this argument"){
        return "$arg is optional";
    }   
}
```

The walker takes the array given to it, and applies the following logic:

* The **walker** iterates through each entry in the array, processing them one by one.
* For each entry in the array, the **walker** executes the corresponding function using its **key** . If a **value** is provided, it is given to the method as an argument.
* The **walker** combines the results of each methods execution into a single response.

For example, a query like this:

```php
[
    "foo_1" => "some arg",
    "foo_2" => "some other arg",
    "invalid_key" => "i wont return anything",
    "foo_3", 
]
```

Would return a result of:

```php
[
    "foo_1" => "value is some arg",
    "foo_2" => [
        "key-1" => "value-1 is some other arg",
        "key-2" => "value-2 is some other arg",
    ];,
    "foo_3" => "this argument is optional", 
]
```

Notice that `invalid_key` is omitted from the result, as it does not have a corresponding function with the same name. Also note that `foo_3` applies the functions default argument, as no **value** was given for its entry.

The **walker** also has 2 ways to manipulate the shape of the returned results: **Aliasing** and **Flattening**.

### Aliasing

Aliasing allows you to provide custom names for data returned in a **CRUD** operation. They allow you to format the results according to your requirements, manipulating their structure as needed. Consider the following query:

```php
[
    "foo_1:aliased_key" => "my arg"
]
```

The original key `foo_1` is renamed to `aliased_key`, so when you retrieve data using `aliased_key` you get the return value as illustrated below:

```php
[
    "aliased_key" => "value is my arg"
]
```

# Flattening

Flattening is another way of manipulating the returned results of a **CRUD** operation. Nested fields within the response are "flattened" by taking their fields and bringing them up a level. This process may be used recursively for deeply nested fields. Consider the following query:

```php
[
    "foo_1" => "my value",
    "foo_2:<=" => "my argument"
]
```

The nested values of `foo_2` are "brought up" a level, providing the following result:

```php
[
    "foo_1" => "value is my value",
    "key-1" => "value-1 is my argument",
    "key-2" => "value-2 is my argument"
]
```

The result is a one-dimensional array where all keys and values are at the same level, making it simpler to work with and access data. This is useful when you want to process or display data without dealing with nested structures.
