<?php
namespace pockets\crud\models\_404;
 
class model extends \pockets\crud\model {
    
    use permissions;
    use validate_resource;
    
    public static string $model_name = '404';

    public string $get_resource      = __NAMESPACE__.'\get';
    public string $read_resource     = __NAMESPACE__.'\read';

    function create($input, $output = []){
        return \pockets::error('Denied');
    }

    function read($input, $output = []){
        return $this->read_resource($input);
    }

    function update($input, $output = [] ){
        return \pockets::error('Denied');
    }
    
    function delete($input){
        return \pockets::error('Denied');
    }

}