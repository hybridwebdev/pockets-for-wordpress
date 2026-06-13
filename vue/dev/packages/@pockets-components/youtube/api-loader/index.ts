// @ts-nocheck
/**
  Creates a shared instance of Youtubes api that
  can be used on multiple component instances.
  This is in a seperate file so that the $YT ref is a single instance
*/
import { useScriptTag } from '@vueuse/core'
import { ref } from "vue"

export let $YT = ref( false ) 

/**
  Automatically sets $YT first time that script tag is loaded
  and YT.ready event fires.
*/ 
useScriptTag(
  'https://www.youtube.com/player_api',
  _ => YT.ready( _ => {
    if( $YT.value ) {
      return
    }
    $YT.value = YT
  } )
)
