<?php 
    defined('ABSPATH') || exit; 
?>
<pockets-app class='position-fixed d-flex gap-half' style='z-index: 20; bottom: 5px; left: 5px; flex-direction:column'>
    <?php do_action('pockets/admin-bar/render/content') ?>
</pockets-app>