<template>
    <div class="grid columns-1 gap-1">
        <div class="grid columns-3 gap-1 text-center">
            
            <div class='grid columns-1 gap-1'>
                <label>Radius Top</label>    
                <pockets-ux-bootstrap-selector
                    option-key="border-corner-radiuses"
                    suffix="-top"
                ></pockets-ux-bootstrap-selector>
            </div>
            
            <div class='grid columns-1 gap-1'>
                <label>Top</label>    
                <pockets-ux-bootstrap-selector
                    :options-filter = 'options => {
                        options["On"] = "border-top";
                        return options;
                    }'
                ></pockets-ux-bootstrap-selector>
            </div>
            
            <div class='grid columns-1 gap-1'>
                <label>Radius Bottom</label>    
                <pockets-ux-bootstrap-selector
                    option-key="border-corner-radiuses"
                    suffix="-bottom"
                ></pockets-ux-bootstrap-selector>
            </div>


        </div>

        <div class="grid columns-3 gap-1 text-center align-items-center">

        <div class='grid columns-1 gap-1'>
                <label>Left</label>    
                <pockets-ux-bootstrap-selector
                    :options-filter = 'options => {
                        options["On"] = "border-start";
                        return options;
                    }'
                ></pockets-ux-bootstrap-selector>
            </div>
            
            <div>
            </div>

            <div class='grid columns-1 gap-1'>
                <label>Right</label>    
                <pockets-ux-bootstrap-selector
                    :options-filter = 'options => {
                        options["On"] = "border-end";
                        return options;
                    }'
                ></pockets-ux-bootstrap-selector>
            </div>
            
        </div>
    

        <div class="grid columns-3 gap-1 text-center">
            
            <div class='grid columns-1 gap-1'>
                <label>Radius Start</label>    
                <pockets-ux-bootstrap-selector
                    option-key="border-corner-radiuses"
                    suffix="-start"
                ></pockets-ux-bootstrap-selector>
            </div>
            
            <div class='grid columns-1 gap-1'>
                <label>Bottom</label>    
                <pockets-ux-bootstrap-selector
                    :options-filter = 'options => {
                        options["On"] = "border-bottom";
                        return options;
                    }'
                ></pockets-ux-bootstrap-selector>
            </div>
            
            <div class='grid columns-1 gap-1'>
                <label>Radius End</label>    
                <pockets-ux-bootstrap-selector
                    option-key="border-corner-radiuses"
                    suffix="-end"
                ></pockets-ux-bootstrap-selector>
            </div>


        </div>

        <div
            class="border-grey-md border-2 border-top"
        >
        </div>
        
        <div class="grid columns-3 gap-1">
        
            <div class='grid columns-1 gap-1'>
                <label>Color</label>    
                <pockets-ux-bootstrap-selector
                    option-key='colors'
                    prefix='border-'
                ></pockets-ux-bootstrap-selector>
            </div>
            <div class='grid columns-1 gap-1'>
                <label>Size</label>    
                <pockets-ux-bootstrap-selector
                    option-key='border-widths'
                    prefix='border-'
                ></pockets-ux-bootstrap-selector>
            </div>
            <div class='grid columns-1 gap-1'>
                <label>Radius</label>    
                <pockets-ux-bootstrap-selector
                    option-key='border-radiuses'
                ></pockets-ux-bootstrap-selector>
            </div>

        </div>
    </div>
</template>