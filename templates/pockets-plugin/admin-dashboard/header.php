<?php

defined('ABSPATH') || exit;

global $submenu;

$title = get_admin_page_title();
$render_menu_items = function( $item ){

    $current_page = isset($_GET['page']) ? sanitize_key($_GET['page']) : '';

    $item_slug = $item[2];

    if (
        strpos( $item_slug, 'edit.php' ) !== false 
        ||
        strpos( $item_slug, 'edit-tags.php' ) !== false 
    ) {
        $link = admin_url( $item_slug );
    } else {
        $link = menu_page_url($item_slug, false);
    }

    printf(
        "<option value='%s' %s>%s</option>",
        esc_attr($link),
        selected($current_page, $item_slug, false),
        esc_html($item[3])
    );
    
};

$logo = sprintf( "%s/assets/images/pockets-logo.webp", \pockets\base::init()->url )
?>
 
<div 
    class='pe-2 pt-2 gap-2 grid columns-1 pockets-bootstrap pockets-plugin-settings-header'
    style='--column-size: 220px 1fr'
>

    <div class='d-flex gap-1 flex-wrap bg-grey p-2 bg-grey-800'>
        
        <img 
            src='<?php echo esc_url( $logo ) ?>' 
            style='max-width:240px'
        >
       
        <select 
            oninput='window.location = this.value'
            class='form-control ms-auto col-auto'
        >
            <?php 
                array_map(
                    array: $submenu['pockets'],
                    callback: $render_menu_items
                );
            ?>
        </select>
    </div>
    <div class='p-2 bg-white pockets-plugin-settings-body'>