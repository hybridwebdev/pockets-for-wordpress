<youtube-option-panel 
    :state='data.playerArgs'
    v-if="(() => { 
        if (!data.playerArgs) {
            data.playerArgs = {
                playerVars: {}
            }
        } 
        return true;
    })()"
>
</youtube-option-panel>