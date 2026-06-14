<template>
    
    <label class="text-primary-lt fw-8 py-1 fs-20">Basic</label>

    <div class='grid-info-160'>

        <label>Display</label>

        <pockets-ux-bootstrap-selector
            option-key='display-types'
            prefix='d-'
            :options-filter = 'options => {
                options["Grid Layout"] = "grid";
                return options;
            }'
            :responsive='true'
        />
        
    </div>

    <div class='grid-info-160'>

        <label>Container Size</label>

        <pockets-ux-bootstrap-selector
            option-key='container-max-width-options'
            prefix='container-'
        />
        
    </div>
    
    <div class='grid-info-160'>
        <label>Col Size</label>    
        <pockets-ux-bootstrap-selector
            option-key='column-options'
            prefix='col-'
            :responsive='true'
            :options-reducer="( $built, { option, breakpoint } ) => {
                if( option=='col' ) {
                    let $bp = '';
                    if( breakpoint ) {
                        $bp = `-${breakpoint}`
                    }
                    return `col${$bp}`
                }
                return $built
            }"
        ></pockets-ux-bootstrap-selector>
    </div>

    <div class='grid-info-160'>

        <label>Order</label>

        <pockets-ux-bootstrap-selector
            option-key='order-options'
            prefix='order-'
            :responsive='true'
        />
        
    </div>

    <label class="text-primary-lt fw-8 py-1 fs-20">Alignment</label>
    
    <div class='grid-info-160'>
        <label>Justify Content</label>
        <pockets-ux-bootstrap-selector
            option-key='flex-justify-options'
            prefix='justify-content-'
            :responsive='true'
        ></pockets-ux-bootstrap-selector>
    </div>
    
    <div class='grid-info-160'>
        <label>Align Items</label>
        <pockets-ux-bootstrap-selector
            option-key='flex-align-options'
            prefix='align-items-'
            :responsive='true'
        ></pockets-ux-bootstrap-selector>
    </div>
    
    <label class="text-primary-lt fw-8 py-1 fs-20">Grid</label>

    <div class='grid-info-160'>
        <label>Column Size</label>    
        <pockets-ux-bootstrap-selector
            option-key='grid-template-columns'
            prefix='g-col-'
            :responsive='true'
        ></pockets-ux-bootstrap-selector>
    </div>

    <div class='grid-info-160'>
        <label>Columns Count</label>    
        <pockets-ux-bootstrap-selector
            option-key='grid-template-columns'
            prefix='columns-'
            :responsive='true'
        ></pockets-ux-bootstrap-selector>
    </div>

    <div class='grid-info-160'>
        <label>Column Start</label>    
        <pockets-ux-bootstrap-selector
            option-key='grid-template-columns'
            prefix='g-start-'
            :responsive='true'
        ></pockets-ux-bootstrap-selector>
    </div>
    
    <div class='grid-info-160'>
        <label>Gap</label>
        <pockets-ux-bootstrap-selector
            option-key='gaps'
            prefix='gap-'
            :responsive='true'
        ></pockets-ux-bootstrap-selector>
    </div>

    <label class="text-primary-lt fw-8 py-1 fs-20">Flex</label>

    <div class='grid-info-160'>
        <label>Flex Wrap</label>
        <pockets-ux-bootstrap-selector
            option-key='flex-wrap-options'
            prefix='flex-'
            :responsive='true'
        ></pockets-ux-bootstrap-selector>
    </div>

    <div class='grid-info-160'>
        <label>Flex Direction</label>
        <pockets-ux-bootstrap-selector
            option-key='flex-direction-options'
            prefix='flex-'
            :responsive='true'
        ></pockets-ux-bootstrap-selector>
    </div>
    
</template>