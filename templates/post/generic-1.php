<?php 
/**
* Template Name: Generic post 1
* Template Type: post
*/

$template = $this->read_resource([
    'title'
]); 

?>
<div class='loop-item'>
    <?php 
        // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
        echo $template['title'] 
    ?>
</div>