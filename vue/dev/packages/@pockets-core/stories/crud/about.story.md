---
route: 'pockets plugin/crud/about'
title: 'About'
priority: -1000
---

# About Crud

CRUD is an acronym that stands for ```create```, ```read```, ```update```, and ```delete```. It is a set of actions used for managing and manipulating data in a database or other data source such as an API. In the context of Wordpress, this is used to manage various data objects like ```WP_POST```, ```WP_TERM```, ```WP_USER```, site options and all other aspects of Wordpress data.

### Actions

Each of these CRUD actions takes a set of one or more arguments and uses them to perform its task.
 
- **```create```**<br>
  Used to create a new resource.
- **```read```**<br>
  Used to read data from a resource.  
- **```update```**<br>
  Used to update data on a resource.  
- **```delete```**<br>
  Used to delete a resource.

### How to use

CRUD models can be called server side, client side or via a REST Request. A call is comprised of five parameters:

- ```$model```<br>
  The [model](#/pockets-plugin/crud/models/about) the call is for. 

- ```$init```<br>
  A single argument used to get the resource the action will be performed on. This is handled by the ```get_resource``` class that transforms the argument into a resource or an error.

- ```$action```<br>
  The ```create```/```read```/```update```/```delete``` action to perform on the resource.

- ```$input```<br>
  Used by all four actions. This is an optional argument for the ```delete``` action.

- ```$output```<br>
  An optional argument that is used by the ```create``` and ```update``` actions. Once the ```create```/```update``` action is performed, this will be passed to the ```read``` action and used for the return value of the operation.

##### Javascript

For client side CRUD calls, Pockets has a helper function that makes calls easier. The structure is:

```js
let response = await $pockets.crud( $model ).init( $init ).$action( $input, $output )
```
##### PHP
Pockets also has a server side helper function for CRUD calls:
```php
\pockets::crud( $model )::init( $init )->$action( $input, $output );
```
##### REST Request
When directly calling the endpoint, requests are handled as an array of requests, with each one returning its own result. This allows for multiple CRUD actions to be performed in one request. For authorization, you will need to send ```"X-WP-Nonce"``` with a valid nonce created with ```wp_create_nonce``` as part of the headers, otherwise all actions will be performed in the context of a visitor with no privileges.

<p class='alert alert-danger'>
There is no guarantee in what order requests will be handled. Do not rely on operations being run in a specific order.
</p>

```js
 
let site = "http://hybridwebdev.com/wp-json/pockets/crud"

let responses = await axios.post( site, [ {
    model: $model,
    init: $init,
    action: $action,
    input: $input,
    output: $output,
} ] )

console.log( responses )

```