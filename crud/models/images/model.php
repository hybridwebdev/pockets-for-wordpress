<?php 
namespace pockets\crud\models\images;
class model extends \pockets\crud\models\posts\model {
    public static string $model_name = 'images';
    public string $read_resource = __NAMESPACE__.'\read';
    public string $get_resource = __NAMESPACE__.'\get';
}