---
route: 'pockets plugin/crud/models/permissions'
title: 'Permissions'
---

### Permission Checks

Typically, you'd do permission checks in each actions method. Using a trait is ideal as it allows you to re-use logic and seperate
the code into a seperate package to keep code clean and maintainable.

Each CRUD model action has a corresponding permission check that can be called inside the action to ensure that it has a valid resource, and that the user has permission to perform the action. If the permission check fails, it will not perform the action and instead can return an error. 
 
```php
trait permissions {

    function canCreate(){
        return current_user_can('administrator');
    }

    function canRead(){}
    function canUpdate(){}
    function canDelete(){}

}
```

And then attach it to your models main class:

```php
class MyModel extends \pockets\crud\model {
    
    use permissions;
    
    public function create( array $input, ?array $output ){
        
        if( !$this->canCreate() ) {
            return \pockets::error("Denied");
        }
        
        ...perform create action

    }

}
```