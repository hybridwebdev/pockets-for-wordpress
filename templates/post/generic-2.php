<?php 
/**
* Template Name: Generic post 1
* Template Type: post
*/

$template = $this->read_resource([
    'title',
    'content'
]); 

?>
<div class='loop-item generic-2'>
    <?= $template['title'] ?>
    <?= $template['content'] ?>
</div>