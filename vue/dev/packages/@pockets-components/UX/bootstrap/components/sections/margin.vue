<template>
    <div class='grid columns-3 gap-1 text-center'>
        <div></div>
        <div class='grid columns-1 gap-1'>
            <label>Top</label>
            <pockets-ux-bootstrap-selector
                option-key='margin'
                prefix='mt-'
                :responsive='true'
            ></pockets-ux-bootstrap-selector>
        
        </div>
    
        <div></div>
        
        <div class='grid columns-1 gap-1'>
            <label>Left</label>
            <pockets-ux-bootstrap-selector
                option-key='margin'
                prefix='ms-'
                :responsive='true'
            ></pockets-ux-bootstrap-selector>
        </div>
        
        <div class='grid columns-1 gap-1'>
            <label>All Directions</label>
            <pockets-ux-bootstrap-selector
                option-key='margin'
                prefix='m-'
                :responsive='true'
            ></pockets-ux-bootstrap-selector>
        </div>
    
        <div class='grid columns-1 gap-1'>
            <label>Right</label>
            <pockets-ux-bootstrap-selector
                option-key='margin'
                prefix='me-'
                :responsive='true'
            ></pockets-ux-bootstrap-selector>
        </div>
        
        <div class='grid columns-1 gap-1'>
            <label>Y axis <i class="fa-solid fa-arrows-up-down"></i></label>
            <pockets-ux-bootstrap-selector
                option-key='margin'
                prefix='my-'
                :responsive='true'
            ></pockets-ux-bootstrap-selector>
        </div>
    
        <div class='grid columns-1 gap-1'>
            <label>Bottom</label>
            <pockets-ux-bootstrap-selector
                option-key='margin'
                prefix='mb-'
                :responsive='true'
            ></pockets-ux-bootstrap-selector>
        </div>
    
        <div class='grid columns-1 gap-1'>
            <label>X axis <i class="fa-solid fa-arrows-left-right"></i></label>
            <pockets-ux-bootstrap-selector
                option-key='margin'
                prefix='mx-'
                :responsive='true'
            ></pockets-ux-bootstrap-selector>
        </div>
    
    </div>
</template>