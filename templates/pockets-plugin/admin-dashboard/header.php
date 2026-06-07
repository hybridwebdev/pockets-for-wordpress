<?php

global $submenu;

$title = get_admin_page_title();

$render_menu_items = function( $item ){
    //phpcs:ignore WordPress.Security.NonceVerification.Recommended
    $current_page = (int)$_GET['page'] ?? 1;
    $item_slug = $item[2];
    $link = menu_page_url($item_slug, false);
    if (
        strpos( $item_slug, 'edit.php' ) !== false 
        ||
        strpos( $item_slug, 'edit-tags.php' ) !== false 
    ) {
        $link = admin_url( $item_slug );
    } 

    printf(
        "<option value='%s' %s>%s</option>",
        // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
        $link,
        // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
        $current_page == $item_slug ? "selected" : "",
        // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
        $item[3]
    );
};
$logo = sprintf( "%s/assets/images/pockets-logo.webp", \pockets\base::init()->url )
?>
 
<div 
    class='pe-2 pt-2 gap-2 grid columns-1 pockets-bootstrap pockets-plugin-settings-header'
    style='--column-size: 220px 1fr'
>

    <div class='d-flex gap-1 flex-wrap bg-grey p-2 bg-grey-800'>
        
        <img src='<?php echo $logo // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped?>' style='max-width:240px'>
       
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