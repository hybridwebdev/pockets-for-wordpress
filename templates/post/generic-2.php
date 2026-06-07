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
    <?php 
        // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
        echo $template['title'];
        // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
        echo $template['content'];
    ?>
</div>