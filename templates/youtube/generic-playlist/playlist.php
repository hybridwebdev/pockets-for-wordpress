<div 
    class='grid gap-0 g-col-cq-lg-3 g-col-cq-12 columns-1'
    :class='{
        "grid-area-cq-1 ms-cq-auto": api.state.isFullscreen || !state.playlistOpen,
        "mb-auto": api.state.isFullscreen,
        "opacity-0": api.state.isFullscreen && !state.hovered,
        "grid-area-cq-lg-none grid-area-cq-xs-1 ms-cq-lg-0 ms-cq-auto": !api.state.isFullscreen && state.playlistOpen,
    }'
    style='grid-template-rows: auto 1fr; transition: .5s opacity' 
    :style='state.playlistOpen && { "z-index": 30 }, api.state.isFullscreen && { "max-height": "50vh" }'
>
    
    <div class='bg-grey-900 d-flex'>
         
        <button 
            class='grid-area-cq-1 btn btn-grey-800 ms-auto' 
            v-tooltip='"Toggle Playlist"' 
            style='z-index: 10'
            @click='state.playlistOpen = !state.playlistOpen'
            :style="{ 
                opacity: (state.hovered || state.playlistOpen ) ? 1 : 0, transition: '.5s opacity', 
            }"
        >
            <i 
                style='transition: transform 0.2s ease;'
                :style='state.playlistOpen && { "transform": "rotate(180deg)" }'
                class='fa fa-chevron-left'
            ></i>
        </button>

    </div>
    
    <div 
        style='overflow-y: scroll; scrollbar-width: none;' 
        class='border border-5 border-grey-800 bg-grey-900'
    >
        <span 
            v-for='(item, index) in props.items'
            @click='props.current = index;'
            class='p-1 d-flex gap-2 align-items-center'
            role='button'
            :class='{" bg-grey-700": props.current == index, "bg-grey-800":  props.current != index,}'
            v-scroll-into-view="{ enabled: props.current == index }"
        >
            <img  :src="'https://img.youtube.com/vi/' + item.videoId + '/hqdefault.jpg'" width='100px'>
            {{ item.placeholderTitle ?? item.videoId }}
        </span>
    
    </div>

</div>
