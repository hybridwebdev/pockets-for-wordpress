<?php 

    $options = \pockets::crud('wp-options')::init()->read( [
        'pockets/updater:<='
    ] );

    $render = \pockets\admin\render_helpers::init();

?>

<pockets-app>
    
    <div 
        class='grid gap-2 columns-1' 
    >
    
        <b class='text-primary-dk fs-20'>
            Updater Settings
        </b>

        <p>
            These settings control how Pockets checks for updates. 
        </p>
        
        <label 
            class='grid gap-1' 
            style='grid-template-columns: var(--column-size)'
            v-tooltip='"Should point to update host site"'
        >
            <b>URL</b>
            <input 
                class='form-control' 
                type='text'
                placeholder='Enter Url'
                name='pockets-updater[url]'
                <?php echo $render->valueProp($options['url']) // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- sanitized in fn ?>
            >
        </label>

        <label 
            class='grid gap-1' 
            style='grid-template-columns: var(--column-size)'
            v-tooltip='"Key used to authenticate license"'
        >
            <b>License Key</b>
            <input 
                class='form-control' 
                type='password'
                placeholder='Enter Token'
                name='pockets-updater[token]'
                <?php echo $render->valueProp($options['token']) // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- sanitized in fn ?>
            >
        </label>
        
        
        <label 
            class='grid gap-1' 
            style='grid-template-columns: var(--column-size)'
            v-tooltip='"How often should a new update check be performed. Recommended frequency is at least 12 hours or more. "'
        >
            <b>Frequency (in seconds)</b>
            <input 
                class='form-control' 
                type='number'
                step='60'
                min=60
                placeholder='Enter expiration time'
                name='pockets-updater[expirationTime]'
                <?php echo $render->valueProp( $options['expirationTime'] ) // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- sanitized in fn ?>
            >
        </label>

    </div>
    
</pockets-app>
