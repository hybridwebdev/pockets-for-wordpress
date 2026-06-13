<template>
    <div class='grid columns-3 gap-1 text-center'>
    
        <div></div>
        
        <div class='grid columns-1 gap-1'>
            <label>Top</label>
            <pockets-ux-bootstrap-selector
                option-key='padding'
                prefix='pt-'
                :responsive='true'
            ></pockets-ux-bootstrap-selector>
        
        </div>
    
        <div></div>
        
        <div class='grid columns-1 gap-1'>
            <label>Left</label>
            <pockets-ux-bootstrap-selector
                option-key='padding'
                prefix='ps-'
                :responsive='true'
            ></pockets-ux-bootstrap-selector>
        </div>
        
        <div class='grid columns-1 gap-1'>
            <label>All Directions</label>
            <pockets-ux-bootstrap-selector
                option-key='padding'
                prefix='p-'
                :responsive='true'
            ></pockets-ux-bootstrap-selector>
        </div>
    
        <div class='grid columns-1 gap-1'>
            <label>Right</label>
            <pockets-ux-bootstrap-selector
                option-key='padding'
                prefix='pe-'
                :responsive='true'
            ></pockets-ux-bootstrap-selector>
        </div>
        
        <div class='grid columns-1 gap-1'>
            <label>Y axis <i class="fa-solid fa-arrows-up-down"></i></label>
            <pockets-ux-bootstrap-selector
                option-key='padding'
                prefix='py-'
                :responsive='true'
            ></pockets-ux-bootstrap-selector>
        </div>
    
        <div class='grid columns-1 gap-1'>
            <label>Bottom</label>
            <pockets-ux-bootstrap-selector
                option-key='padding'
                prefix='pb-'
                :responsive='true'
            ></pockets-ux-bootstrap-selector>
        </div>
    
        <div class='grid columns-1 gap-1'>
            <label>X axis <i class="fa-solid fa-arrows-left-right"></i></label>
            <pockets-ux-bootstrap-selector
                option-key='padding'
                prefix='px-'
                :responsive='true'
            ></pockets-ux-bootstrap-selector>
        </div>
    
    </div>
     
</template>