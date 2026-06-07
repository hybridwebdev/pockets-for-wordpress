<?php
/**
    Template Name: Neave TV
    Template Type: static-template
    Template controller: options-controller
*/

$list = [
    [ 'videoId' => 'S7SLep244ss', 'title' => 'Test Pattern' ],
]; 

$loadingImage = $data['loadingImage'] ?? "https://upload.wikimedia.org/wikipedia/commons/0/02/Television_static.gif";

if( is_array( $data['items'] ?? false ) && count( $data['items'] ) > 0 ) {
    $list = $data['items'];
}

$list = array_map(
    array: $list,
    callback: function( $entry ){
        if( !($entry['title'] ?? false) ) {
            $entry['title'] = $entry['videoId'];
        }
        return $entry;
    }
);

usort( $list, fn( $a, $b ) => strcmp( strtolower( $a['title'] ), strtolower( $b['title'] ) ) );

$current = array_rand( $list );

$mode = 'shuffle';

?>
<pockets-local-state
    
    :volume='25'
    :items='<?= json_encode( $list )?>'
    :current='<?= $current ?>'
    :clicked='false'
    mode='<?= $mode ?>'
    #default="{ state:config }"
    playerRef='null'
    :hovered=false
>
    <div 
        :ref='e => config.playerRef = e'
        v-hover-intent='{
            change: e => config.hovered = e,
            options: {
                interval: 1
            }
        }'
    >
        
        <youtube-playlist
            #default='api'
            :items='config.items'
            v-model:current='config.current'
            :mode='config.mode'
        > 
    
            <!-- Video -->
    
            <div class='position-relative'>
                <div 
                    @click='api.playList.next()' 
                    class='position-absolute' 
                    style='top: 0; right: 0;bottom:0; left: 0; z-index:10; '
                >
                </div>
                <youtube
                    class='col-12 background-video'
                    v-bind='api.active'
                    :player-vars='api.playerVars'
                    :volume='config.volume'
                    :show-placeholder='false'
                    v-if='config.clicked'
                    style='height: 100vh !important; overflow: hidden;'
                    :container-ref='config.playerRef'
                ></youtube>
            </div>
    
            <!-- Welcome -->
    
            <div 
                class='position-fixed p-4 bg-black d-flex' 
                style='top: 0; left: 0; bottom: 0; right: 0; z-index:100; '
                v-if='!config.clicked'
                @click='config.clicked = true'
                role='button'
            >
                <div class='m-auto text-white text-center grid columns-1 gap-2'>
                    <button class='btn btn-grey-800 fs-30 p-2 px-3 fa fa-play rounded-0 mx-auto'></button>
                </div>
            </div>
        
            <!-- Static Layer -->
    
            <div 
                class='position-fixed p-4 bg-black' 
                style='top: 0; left: 0; bottom: 0; right: 0; z-index:10; background-image: url(<?= $loadingImage ?>)'
                v-if='api.state.status!="playing" || !config.clicked'
            >
            </div>
    
            <!-- Video List -->
    
            <div
                class='position-fixed d-grid gap-0 bg-black text-white align-items-start border border-4 border-grey-800'
                style='bottom: 0; left: 0; z-index: 10;  grid-template-rows: auto 1fr; width: 320px; transition: .5s opacity'
                :style='config.hovered && { "opacity": "1" }, !config.hovered && { "opacity": "0" }'
            >
                <!-- <div class='p-1 border-bottom border-4 border-grey-800'>{{ api.active.title }}</div> -->
                <div 
                    style='overflow-y: scroll; max-height: 30svh; scrollbar-width: none; -ms-overflow-style: none;' 
                    class='grid columns-1 gap-0'
                >
                    <span 
                        v-for='(item, index) in config.items'
                        @click='config.current = index'
                        class='p-1 d-flex gap-1 align-items-center'
                        role='button'
                        v-scroll-into-view="{ enabled: config.current === index } "
                        :class='{"bg-grey-600": config.current == index, "bg-grey-700":  config.current == index,}'
                    >
                        <img width='60px' :src="`https://img.youtube.com/vi/${item.videoId}/hqdefault.jpg`">
                        {{ item.title }}
                    </span>
                
                </div>
            </div>
    
            <!-- Player Control -->
    
            <div
                class='position-fixed col-12 p-1 bg-grey-800 d-flex gap-2 align-items-center'
                style='bottom:0; right: 0; width: 320px; z-index: 10; transition: .5s opacity'
                :style='config.hovered && { "opacity": "1" }, !config.hovered && { "opacity": "0" }'
            >   
                
                <button
                    class='d-flex btn btn-grey-700 p-1 rounded-0 border-0'
                    @click='() => { 
                        if( api.state.status == "playing" ) {
                            api.action( "pause" )
                        }
                        if( api.state.status == "paused" ) {
                            api.action( "play" )
                        }
                    }'
                
                >
                    <i 
                        class='fa text-white fa-fw fs-18'
                        :class='{ 
                            "fa-play": api.state.status == "paused", 
                            "fa-pause":api.state.status != "paused",
                        }'
                    ></i>
                </button>
                <pockets-ux-range-slider 
                    style='--track-background: var(--bs-black); --thumb-background: var(--bs-grey-700); --track-height: 35px'
                    v-bind='{
                        "min": 0,
                        "max": 100,
                        "step": 1,
                        "mode": "single",
                    }'
                    v-model='config.volume'
                >
                </pockets-ux-range-slider>
                <button class='btn btn-grey-700' @click="() => api.state.fullscreen.toggle()">
                    <i class='fa fa-expand'></i>
                </button>
            </div>
    
        </youtube-playlist>
    </div>

</pockets-local-state>