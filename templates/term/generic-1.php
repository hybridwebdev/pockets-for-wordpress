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
    <a href='<?php 
        // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
        echo $template['link'];
    ?>'
    >
    <?php 
        // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
        echo $template['name'] 
    ?>
    </a>
</div>