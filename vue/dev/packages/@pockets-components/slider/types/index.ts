
import type { Pausable } from "@vueuse/core"

export type Direction = "up" | "down" | "right" | "left" | "none"

/**
    Render slides
*/
export type renderSlidesProps = {

    /**
        Tag is used when slider is in data mode. Defaults to "div"
    */
    tag?: string
    
    /**
        Transition name. Gets passed through 
        computed as {name}-{direction} where direction 
        is the current direction the slider is rotating in. 
        For example my-transition-right
    */
    name?: string
    
    /**
        Offset is how many # off sliders current index.
        eg: api.index + offset
    */
    offset?: number
    
    wrapperClass?: string
    
}   

/**
    Slider container
*/
export type slideContainerProps = {
    
    /**
        determines the speed for in/out transitions. Should be in MS. Eg 1000 = 1000ms -> 1s
    */
    duration?: number

    /**
        Time at which slide changes. Should be in MS. Eg 1000 = 1000ms -> 1s
    */
    interval?: number
    
    /**
        Starting direction slider moves in
        Two way bound via v-model:direction
    */
    direction?: Direction
    
    /**
        Element for slider container
    */
    tag?: string
    
    /**
        How many slides slider progresses on each action
    */
    shiftCount?: number

    /**
        Only used in data mode
    */
    slides?: [] | false

    /**
        if true, when the slider container is 
        hovered, the timer function will not fire. 
    */
    pauseHovered?:  boolean
    
    /**
        if set to true, the switching of slides will be debounced
        based on the duration property. Useful to prevent users
        from spamming transitions.         
    */
    debounceRotation?: boolean

    /**
        If true, swipe motions will trigger rotations
    */
    swipeable?: boolean

    /**
        Global transition name. Can be overriden on slide render component
    */
    name?: renderSlidesProps['name']

    /**
        If false, slide will not automatically change using interval.
    */
    autoRotate?: boolean

    /**
        Two way bound via v-model:index
    */
    index?: number

}

/**
    Api created by slider container
*/
export type api = {

    /**
        Set when pause or resume are called
    */
    isManuallyPaused: boolean
    /**
        direction that slider rotates in
    */
    direction: Direction
    slides: Array<unknown> | false
    /**
        Current slide index
    */
    index: number
    timer: Pausable
    /**
        How oftehn slider timer is fired
    */
    interval: number
    /**
        Duration of animation.
        Used for debouncing switchSlide. It's also used to populate
        --rotate-duration on slider container which can be used in css 
        for transitions.
    */
    duration: slideContainerProps['duration']
    /**
        Determines how slides are populated.
        If slides is a boolean, then it will look for slides in <template #slots></template>
        otherwise it will use the slides prop. 
        mode is computed based off that and sets to data if slides is an array, otherwise it
        will be teplate.
    */
    mode: "template" | "data"
    pause: () => void
    resume: () => void
    name: slideContainerProps['name']
    
    rotate: {
        /**
            To looks at the current index and compares it to the given index argument.
            Based on the difference of the 2 and the current direction the slider is 
            set to rotate in, it will reverse direction for the transition.
            Eg if api.index is 3, the given index is 2 and the direction is right,
            then it will switch to left as it's going "backwards".
        */
        to: ( index:number ) => void
        up: ( count?: number ) => void
        down: ( count?: number ) => void
        left: ( count?: number ) => void
        right: ( count?: number ) => void
        direction: ( direction: Direction, count?:number ) => void
    }
    
}