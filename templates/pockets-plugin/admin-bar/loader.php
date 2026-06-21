<?php 
    defined('ABSPATH') || exit; 
?>
<pockets-app 
    class='position-fixed d-flex gap-1 p-half' 
    style='z-index: 20; bottom: 0px; left: 0px; flex-direction:column;'
>
    <?php do_action('pockets/admin-bar/render/content') ?>
</pockets-app>