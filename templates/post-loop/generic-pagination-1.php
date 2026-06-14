<?php
/**
    Template Name: Generic Pagination 1
    Template Type: post-loop/pagination
*/

$pagination = $this->read_resource([
    'pagination_links:<='
]);

// phpcs:disable PluginCheck.CodeAnalysis.Heredoc.NotAllowed -- fully sanitized
$renderLink = fn( $link, $class, $text ) => !$link ? "" : sprintf(
    <<<HTML
    <a href='%s' class='%s' style='color: inherit'>%s</a>
    HTML, 
    esc_url($link), 
    esc_attr($class), 
    esc_html($text)
);

if( !$pagination['next'] && !$pagination['prev']) {
    return;
}
?>
<div class='d-flex'>
    <?php
        // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- sanitized earlier
        echo $renderLink( $pagination['prev'], "me-auto", "Previous" ); 
        // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- sanitized earlier
        echo $renderLink( $pagination['next'], "ms-auto", "Next" ); 
    ?>
</div>