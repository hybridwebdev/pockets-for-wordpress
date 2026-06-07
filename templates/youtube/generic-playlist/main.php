<pockets-local-state 
    #default='{ state }' 
    :hovered='false' 
    timeMode='elapsed' 
    :containerRef='null'
    :playlistOpen="true"
>

    <youtube-playlist
        #default='api'
        :items='props.items'
        v-model:current='props.current'
        v-model:player-vars='props.playerVars'
        v-model:mode='props.mode'
    > 

        <div 
            class='col-12 cq' 
            :style="[
                (!api.state.isFullscreen && state.playlistOpen) && { '--player-height': 'clamp(450px, 45cqw, 70vh)' },
                (!api.state.isFullscreen && !state.playlistOpen) && { '--player-height': 'clamp(450px, 55cqw, 90vh)' },
                api.state.isFullscreen && { '--player-height': '100vh' },
            ]"
            :ref="e => state.containerRef = e"
            v-hover-intent="{
                change: e => state.hovered = e,
                options: {
                    interval: 1
                }
            }"
        >
            
            <div 
                class='grid gap-0' 
                :class='{ 
                    "columns-1": api.state.isFullscreen || !state.playlistOpen, 
                    "columns-12": !api.state.isFullscreen && state.playlistOpen
                }'
                style='
                    grid-template-rows: var(--player-height)
                '
            >

                <div 
                    class='g-col-cq-lg-9 g-col-cq-12 grid-area-cq-1 grid columns-1 gap-0'
                >
                    <youtube
                        class='grid-area-1 bg-black'
                        v-bind='api.active'
                        :player-vars='api.playerVars'
                        :volume='props.volume'
                        :show-placeholder='true'
                        :show-overlay='true'
                        style='z-index: 1'
                        player-style='width: 100%; height: var(--player-height); grid-area: 1/1; pointer-events: none'
                        :container-ref="state.containerRef"
                        @click.once='props.playerVars.autoplay = 1'
                        @click='e => {
                            if( !api.state.ready ){
                                return;
                            }
                            if(api.state.status == "playing"){ 
                                api.action("pause") 
                            } 
                            
                            if(api.state.status != "playing"){   
                                api.action("play")
                            }
                        }'
                        role='button'
                    ></youtube>
                    <?php 
                        // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
                        echo \pockets::load_template(['template' => 'youtube/generic-playlist/player-controls']) 
                    ?>
                </div>
                
                <?php 
                    // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped                
                    echo \pockets::load_template(['template' => 'youtube/generic-playlist/playlist']) 
                ?>
    
            </div>
        
        </div>

    </youtube-playlist>

</pockets-local-state>