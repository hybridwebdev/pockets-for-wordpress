<?php
    
    $render = \pockets\admin\render_helpers::init();

    $options = \pockets::crud('wp-user')::init( [ 'by' => 'current_user' ] )->read( [
        'meta:<=' => [
            'pockets-vue-app:<='
        ]
    ] );
    
    \pockets::inject_data('pockets_vue_app_settings', $options);
    
?>
<pockets-app>

    <pockets-global-state #default='{pockets_vue_app_settings: options }'>

        <div 
            class='grid gap-2 columns-1' 
        >

            <b
                class='text-primary-dk fs-20'
            >
                VUE settings
            </b>

            <p class='m-0'>
                These settings control how <b class='text-primary-dk'>VUE</b> is loaded. 
                
                When in <b class='text-primary-dk'>build</b> mode, it will use the built files. 
                
                When In <b class='text-primary-dk'>development</b> mode, files will be loaded from a webpack server using the url in the development server field. 
                
            </p>
            
            <div 
                class='grid gap-1' 
                style='grid-template-columns: var(--column-size)'
                v-tooltip='"Determines what mode VUE is loaded in."'
            >

                <b>
                    VUE mode
                </b>

                <div class='d-flex gap-1'>
                    
                    <label>
                        <input 
                            type='radio' 
                            value='host' 
                            <?php echo $render->checkedProp( $options['mode'] ?? "", "host" ) // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- sanitized in fn ?>
                            name='pockets-vue-app[mode]'
                            v-model='options.mode'
                        >
                        Development
                    </label>
                    
                    <label>
                        <input 
                            type='radio' 
                            value='build'
                            <?php echo $render->checkedProp( $options['mode'] ?? "", "build" ) // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- sanitized in fn ?>
                            name='pockets-vue-app[mode]'
                            v-model='options.mode'
                        >
                        Build
                    </label>

                </div>

            </div>
           
            <label 
                class='grid gap-1' 
                style='grid-template-columns: var(--column-size)'
                v-tooltip='"Should point to a webpack server."'
                v-show='options.mode=="host"'
            >
                <b>Development Server</b>
                <input 
                    class='form-control' 
                    type='text'
                    placeholder='Enter Host'
                    name='pockets-vue-app[host]'
                    <?php echo $render->valueProp( $options['host'] ?? "" ) // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- sanitized in fn ?>
                >
            </label>

             <p class='alert alert-danger fw-8' v-show='options.mode=="host"'>
                Development mode is an advanced feature.

                Do not set mode to host unless you have a development server running. Running in development mode 
                without a server running will prevent VUE from loading. This will cause any portions of the site
                using VUE to stop working.
            </p>

        </div>

    </pockets-global-state>

</pockets-app>