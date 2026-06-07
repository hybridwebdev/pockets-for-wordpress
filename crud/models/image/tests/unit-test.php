<?php 
namespace pockets\crud\models\image\test;

use \pockets\tests\crud\test_model;

class image extends test_model {

    public function getModels(){
        return [
            \pockets::crud('image')::init( [ 'ID' => $this->factory->attachment->create() ] ),
        ];
    }

    function getMock($action){
        $url = \pockets\base::init()->url;
        if($action == 'read' || $action == 'update') {

            $data = [
                'write' => [
                    'title' => "An Image",
                ],
                'read' => [ 'title' ],
            ];
            return $data + [ 
                'write-assert' => $data['write'] 
            ] ;
        }
        return [
            'write' => [
                'title' => "An Image",
                'url' => "{$url}tests/assets/example.png",
            ],
            'read' => ['title'],
            'write-assert' => [
                'title' => "An Image"
            ],
        ];
    }
    
}