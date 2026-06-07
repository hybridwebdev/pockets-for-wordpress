<div
    class='bg-grey-800 d-flex flex-wrap gap-1 p-1 cq grid-area-1'
    style='grid-area: 1/1; align-self: end; z-index: 1'
    :style="{ 
        opacity: state.hovered ? 1 : 0, transition: '.5s opacity', 
    }"
>

    <div 
        class='grid col-12 gap-0 align-items-center' 
        style='grid-template-columns: auto 1fr'
    >   

        <button
            class='d-flex btn btn-grey-700 p-1 rounded-0 border-0'
            @click='() => { 
                if( api.state.status == "playing" ) {
                    api.action( "pause" )
                }
                if( api.state.status != "playing" ) {
                    api.action( "play" )
                }
            }'
        
        >
            <i 
                class='fa text-white fa-fw fs-18'
                :class='{ 
                    "fa-play": api.state.status != "playing", 
                    "fa-pause": api.state.status == "playing",
                }'
            ></i>
        </button>

        <div
            class='bg-black grid gap-0'
            style='grid-template-columns: auto 1fr'
        >
            <div 
                class='p-1'
                v-if='api.state.time.limits.end && api.state.ready'
                @click='state.timeMode = state.timeMode == "elapsed" ? "remaining" : "elapsed"'
                role='button'
            >
                <span>
                    {{ state.timeMode=='elapsed' ? "" : "-" }}{{ $pockets.formatters.time( state.timeMode=='elapsed' ? api.state.time.current : api.state.time.remaining ) }} 
                </span>
                / 
                {{ $pockets.formatters.time(api.state.time.limits.end ) }} 
            </div>
            <div 
                class='bg-black d-flex align-items-center pe-1'
                v-if='api.state.time.limits.end && api.state.ready'
            >
                <pockets-ux-range-slider 
                    style='--track-background: var(--bs-grey-700); --thumb-background: var(--bs-grey-800); --track-height: 30px; width: 100%'
                    mode="single"
                    :step="1"
                    :min='api.state.time.limits.start'
                    :max='api.state.time.limits.seekEnd'
                    :model-value='api.state.time.current'
                    @update:modelValue='value => api.action( "seekTo", value )'
                    :display-formatter='$pockets.formatters.time'
                    v-if='api.state.time.limits.end && api.state.ready'
                ></pockets-ux-range-slider>
            </div>
        </div>

    </div>
    

    <div class='d-flex col-12 gap-1 flex-wrap'>
    
        <!-- 
            Playlist controls 
        -->

        <div class='d-flex align-items-center gap-1 order-cq-md-1  order-cq-xs-3'>
            <button 
                class='btn btn-grey-700 p-1 me-auto' 
                v-tooltip="{ content: 'Previous video' }"
                @click='api.playList.previous()'
            >
                <i class='fa fa-chevron-left'></i>
            </button>
            <button 
                class='mx-auto p-1 btn btn-grey-700' 
                :class='{ "active": props.mode=="shuffle" }'
                v-tooltip='"Toggle Shuffle"'
                @click='() => {
                    if( props.mode == "shuffle") {
                        return props.mode = "normal";
                    }
                    if( props.mode == "normal") {
                        return props.mode = "shuffle";
                    }
                }'
            >
                <i 
                    class='fa fa-shuffle'
                >
                </i>
                {{ props.mode =="shuffle" ? "On" : "Off" }}
            </button>
            <button 
                class='btn btn-grey-700 p-1 ms-auto' 
                v-tooltip='"Next video"'
                @click='api.playList.next()'
            >
                <i class='fa fa-chevron-right'></i>
            </button>
        </div>
        
        <!-- 
            Volume controls 
        -->

        <div class='grid ms-cq-md-auto gap-1 columns-cq-sm-2 columns-1 col-cq-md-auto col-cq-12 order-cq-md-2  order-cq-xs-1'>

            <div class='d-flex'>
                
                <button 
                    class='btn btn-grey-700 p-half' 
                    @click='props.playerVars.mute = props.playerVars.mute == 1 ? 0 : 1' 
                    style='width: 40px'
                        v-tooltip='"Toggle Mute"'
                >
                    <i 
                        class="text-white"
                        :class='{ 
                            "fas fa-volume-up": props.playerVars.mute == 0, 
                            "fas fa-volume-mute":   props.playerVars.mute == 1 
                        }'
                    ></i>
                </button>
                <div class='bg-black px-1 d-flex align-items-center flex-grow-1'>
                    <pockets-ux-range-slider 
                        style='--track-background: var(--bs-grey-700); --thumb-background: var(--bs-grey-900); --track-height: 30px; min-width: 180px'
                        v-bind='{
                            "min": 0,
                            "max": 100,
                            "step": 1,
                            "mode": "single",
                        }'
                        v-model='props.volume'
                    ></pockets-ux-range-slider>
                </div>
            </div>

            <!-- 
                Rate controls
            -->
            <div class='d-flex'>

                <button 
                    class='btn btn-grey-700 p-half' 
                    style='width:40px'  
                    v-tooltip='"Reset Playback Rate"' 
                    @click='props.playerVars.rate = 1'
                >
                    <i 
                        class="text-white fa fa-clock"
                    ></i>
                </button>
                <div class='gap-1 align-items-center bg-black px-1 d-flex flex-grow-1'>
                    <pockets-ux-range-slider 
                        style='--track-background: var(--bs-grey-700); --thumb-background: var(--bs-grey-900); --track-height: 30px; min-width: 180px'
                        v-bind='{
                            "min": .1,
                            "max": 2,
                            "step": .1,
                            "mode": "single",
                        }'
                        v-model='props.playerVars.rate'
                    ></pockets-ux-range-slider>
                </div>

            </div>
            
        </div>    

        <div class='order-cq-md-3 order-cq-xs-4 ms-cq-md-0 ms-cq-xs-auto'>
            <button 
                class='btn btn-grey-700 ' 
                @click="() => api.state.fullscreen.toggle()"
            >
                <i class='fa fa-expand'></i>
            </button>
        </div>

    </div>
    
</div>