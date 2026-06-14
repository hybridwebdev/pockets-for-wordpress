<?php
namespace pockets\crud\models\example_model;
 
class model extends \pockets\crud\model {
    
    use permissions;
    use validate_resource;
    
    public static string $model_name = 'example-model';

    public string $get_resource      = __NAMESPACE__.'\get';
    public string $update_resource   = __NAMESPACE__.'\update';
    public string $read_resource     = __NAMESPACE__.'\read';

    function create($input, $output = []){
        return \pockets::error('Denied');
    }

    function read($input, $output = []){
        return $this->read_resource($input);
    }

    function update($input, $output = [] ){
        return $this->update_resource($input);
    }
    
    function delete($input){
        return \pockets::error('Denied');
    }

}