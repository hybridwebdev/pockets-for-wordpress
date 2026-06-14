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
        echo esc_html($template['title']);
        // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- sanitized earlier
        echo $template['content'];
    ?>
</div>