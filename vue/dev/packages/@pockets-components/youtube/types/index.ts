import type { Ref } from 'vue'

export type playerVars = {
    /**
        Video Id. This will be the string after ?v= in the youtube videos url. 
    */
    videoId: string
    /**
        Player height.
    */
    height?: string
    /**
        Player width.
    */
    width?: string
    /**
        Options for player. See <a href='https://developers.google.com/youtube/iframe_api_reference'>Iframe Documentation</a>
    */
    playerVars?: {
        end?: number
        start?: number
        mute?: boolean
        autoplay?: boolean
        loop?: boolean
        controls?: boolean
        rate?: number
        modestbranding?: boolean
        showinfo?: boolean 
        
    }
    /**
        Only shows if showOverlay is set. 
    */
    placeholderTitle?: string 
    /**
        If true, will show a placeholder image and optionally also an overlay if showOverlay is true
    */
    showPlaceholder?: boolean | number
    /**
        Sets Players initial volume.
    */
    volume?: boolean | number | string
    /**
        Applies to the style tag of the player iframe
    */
    playerStyle?: string
    /**
        If true, will show placeholderTitle and a play button. 
    */
    showOverlay?: boolean | number

    /**
        Controls what the component uses for its container ref.
        This affects things like the fullScreen controller.
        Defaults to container which will use the ref in the template.
        If set to parent, it will use the components parent element.
        You can also pass in a reference to an element.
    */
    containerRef?: 'container' | 'parent' | Ref<HTMLElement | null>
    
}