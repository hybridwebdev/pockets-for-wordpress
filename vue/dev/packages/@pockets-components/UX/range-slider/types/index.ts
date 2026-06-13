// @ts-nocheck
export type { RangeSliderConfig, RangeSlider } from "range-slider-input"

export interface Props extends Omit< RangeSliderConfig, "value" > {

    /**
        Used when in single or double mode. First or "lower" range value.
    */
    modelValue: number

    /**
        Only used when mode is set to double.
        Second or "upper" range value.
        use it via vModel:maxValue
    */
    maxValue?: number

    /**
        Defaults to single. When in double, a second thumb is rendered
        and you can use the input as a min/max range. 
    */
    mode?: "single" | "double"

    /**
        debounces update function.
    */
    debounceRate?: number
    
    /**
        If set, this will be called to format the display value for thumbs when their value changes.
        Usefol for displaying different text than what the value is set to. Eg formatting a value into a time format. 
    */
    displayFormatter?: "hide" | "show" | ( ( time: number ) => string )
    
}
