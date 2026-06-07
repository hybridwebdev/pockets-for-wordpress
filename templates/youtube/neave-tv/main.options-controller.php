<div
    v-if="(() => { 
        if (!data.items) {
            data.items = []
        } 
        return true;
    })()"
    class='grid columns-1 gap-2'
>

    <label class='grid-info-120 gap-2'>
        <span>Loading Screen Image </span>
        <input v-model='data.loadingImage' class='form-control'>
    </label>

    <pockets-ux-repeater
        v-model='data.items'
        v-bind='{
                "layout": "tabbed",
                "newItem": {
                    "videoId": "",
                    "playerVars": {
                        "start": 0
                    }
                },
                "minItems": 0,
                "maxItems": 99999
        }'
    >

        <template #item-tab-text="{ item }">
            <div class='grid columns-1 gap-1'>
                <span>{{item.title}}</span>
                <span>{{ item.videoId }}</span>
            </div>
        </template>

        <template #item="{ item }">

            <label class='grid-info-120 gap-2'>
                <span>Title</span>
                <input v-model='item.title' class='form-control'>
            </label>

            <youtube-option-panel 
                :state='item'
            >
            </youtube-option-panel>
            
        </template>

    </pockets-ux-repeater>

</div>