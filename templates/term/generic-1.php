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
        echo esc_url($template['link']);
    ?>'
    >
    <?php 
        echo esc_html($template['name'] )
    ?>
    </a>
</div>