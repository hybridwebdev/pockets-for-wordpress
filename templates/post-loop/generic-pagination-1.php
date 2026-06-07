<?php
/**
    Template Name: Generic Pagination 1
    Template Type: post-loop/pagination
*/

$pagination = $this->read_resource([
    'pagination_links:<='
]);

// phpcs:disable PluginCheck.CodeAnalysis.Heredoc.NotAllowed
$renderLink = fn( $link, $class, $text ) => !$link ? "" : sprintf(
    <<<HTML
    <a href='%s' class='%s' style='color: inherit'>%s</a>
    HTML, 
    $link, 
    $class, 
    $text 
);
if( !$pagination['next'] && !$pagination['prev']) {
    return;
}
?>
<div class='d-flex'>
    <?php
        // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
        echo $renderLink( $pagination['prev'], "me-auto", "Previous" ); 
        // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
        echo $renderLink( $pagination['next'], "ms-auto", "Next" ); 
    ?>
</div>