<template>

    <div class='grid-info-160'>
        <label>Color</label>
        <pockets-ux-bootstrap-selector
            option-key='colors'
            prefix='text-'
        />
    </div>

    <div class='grid-info-160'>
        <label>Alignment</label>
        <pockets-ux-bootstrap-selector
            option-key='text-aligntments'
            prefix='text-'
            :responsive='true'
        ></pockets-ux-bootstrap-selector>
    </div>
    <div class="border-grey-md border-2 border-top" />
    <div class='grid-info-160'>
        <label>Font Size</label>
        <pockets-ux-bootstrap-selector
            option-key='font-sizes'
            prefix='fs-'
            :responsive='true'
        ></pockets-ux-bootstrap-selector>
    </div>
    
    <div class='grid-info-160'>
        <label>Font Weight</label>
        <pockets-ux-bootstrap-selector
            option-key='font-weights'
            prefix='fw-'
        ></pockets-ux-bootstrap-selector>
    </div>

    <div class='grid-info-160'>
        <label>Font Family</label>
        <pockets-ux-bootstrap-selector
            option-key='font-families'
            prefix='ff-'
        ></pockets-ux-bootstrap-selector>
    </div>
    
    <div class='grid-info-160'>
        <label>Font Style</label>
        <pockets-ux-bootstrap-selector
            option-key='font-styles'
            prefix='font-style-'
        ></pockets-ux-bootstrap-selector>
    </div>
    <div class="border-grey-md border-2 border-top" />
    <div class='grid-info-160'>
        <label>Font Variant</label>
        <pockets-ux-bootstrap-selector
            option-key='font-variants'
            prefix='font-variant-'
        ></pockets-ux-bootstrap-selector>
    </div>
    <div class="border-grey-md border-2 border-top" />
    <div class='grid-info-160'>
        <label>Letter Spacing</label>
        <pockets-ux-bootstrap-selector
            option-key='letter-spacings'
            prefix='letter-spacing-'
        ></pockets-ux-bootstrap-selector>
    </div>
    
    <div class='grid-info-160'>
        <label>Line Height</label>
        <pockets-ux-bootstrap-selector
            option-key='line-heights'
            prefix='lh-'
        ></pockets-ux-bootstrap-selector>
    </div>

</template>