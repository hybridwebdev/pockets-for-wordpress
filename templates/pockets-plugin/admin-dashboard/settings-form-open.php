 <form 
    method="post" 
    action="options.php" 
    class='grid gap-4 columns-1' 
>
<?php 

/**
    Outputs hidden fields with nonce etc.
*/
settings_fields( 'pockets' ); 

if ( count( get_settings_errors() ) !=0 ) {
    // phpcs:disable PluginCheck.CodeAnalysis.Heredoc.NotAllowed -- fully sanitized
    printf(
        <<<HTML
            <div class='grid columns-1 gap-1'>
            %s
            </div>
        HTML, 
        // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- sanitized in fn
        \pockets\admin\menu::print_settings_errors('pockets')
    );
}
