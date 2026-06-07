<?php 
/**
* Template Name: Generic Term 1
* Template Type: term
*/

$template = $this->read_resource([
    'name',
    'link'
]); 

?>
<div class='term-loop-item'>
    <a href='<?= $template['link']?>'><?= $template['name'] ?></a>
</div>