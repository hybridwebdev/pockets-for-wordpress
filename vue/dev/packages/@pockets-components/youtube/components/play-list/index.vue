<template>
  <slot 
    v-bind="playerApi"
    :active="active"
    :items="items"
    :playList="playList"
    :playerVars="playerVarsMerged"   
  />

</template>

<script setup lang="ts">

/*
  @component-description
  A renderless wrapper that provides playlist functionality for the youtube player component. Should be used with the youtube component. 
*/

import { computed, watch, ref } from "vue"
import { context, usePlayerApi } from "../../context"
import { rotateIndex } from "@pockets-core/utils/dot-prop/array"
import type { playerVars as playerProps } from "../../types/index.ts"

let playerApi = context.inject.playerApi( () => usePlayerApi( 'playlist' ) )
context.provide.playerApi(playerApi)

defineOptions({
    inheritAttrs: false
})

defineProps<{
  
  /**
    Current item in play list.  
  */
  current?: Number
  
  /**
    Mode for playlist. If shuffle, calling prev/next will select a random item to play.
  */
  mode?: "shuffle" | "normal"

  /**
    These are applied as a default fallback and wiill be merged with the current items playerVars, with the latter taking priority.
    View the <a href='#/pockets-vue/components/youtube/player/example?tab=component-info'>Player component</a> for information
    on playerVars
  */
  playerVars?: playerProps['playerVars'] 
  
  /** 
    This is the list of videos to use for the playlist.
    Should be an array of the same arguments the <a href='#/pockets-vue/components/youtube/player/example?tab=component-info'>Youtube player component</a> takes
  */
  items: Array<playerProps>

}>()

defineSlots<{
    /**
        Provides context that can be passed down to a youtube player or other UX. 
        @binding {computed< playerVars >} playerVars The combined playerVars of the components props and the active video.
        @binding {reactive< playerProps >} active The current active video in the playlist
        @binding {reactive<[ playerProps ]>} items An array of videos in the playlist. Corresponds to the items prop.
    */
    default: {}
}>()

let items = defineModel('items')
let current = defineModel("current", { default: 0})

let mode = defineModel('mode', { default: "normal" } )

let basePlayerVars = defineModel( 'playerVars', {
  default: { autoplay: 1, controls: 0, mute: 0, rate: 1 }
})

let active = computed( () => items.value?.[current.value] ?? {} )

let playerVarsMerged = ref( { ...basePlayerVars.value } )

watch( current, () => {
    playerApi.state.status = 'playlist-changing-current'
    playerVarsMerged.value = { ...basePlayerVars.value }
})

let updateMerged = () => {
    Object.assign( playerVarsMerged.value, basePlayerVars.value, active.value.playerVars ?? {} )
}

watch(
  [
    basePlayerVars,
    () => active.value.playerVars
  ],
  updateMerged,
  { immediate: true, deep: true }
)

let entryKeys = computed<number[]>(() => Object.keys(items.value ?? {}).map(Number) )

let playList = {
  
    previous: () => {
        
        if( mode.value == 'shuffle' ) {
            return playList.random()
        }

        current.value = rotateIndex( entryKeys.value as [], current.value, -1 ) 

    },
    
    next: () => {
        
        if( mode.value == 'shuffle' ) {
            return playList.random()
        }

        current.value = rotateIndex( entryKeys.value as [], current.value, 1 ) 

    },
    
    random: () => {
        
        const availableKeys = entryKeys.value.filter( e => e !== current.value )
        
        if ( availableKeys.length === 0 ) {
            return
        }

        current.value = availableKeys[ Math.floor( Math.random() * availableKeys.length ) ] 

    }

}
 
watch( () => playerApi.state.status, ( status ) => {
  
  if ( status.startsWith('error') || status === 'ended' ) {
    playList.next()
  }
  
  if (status === 'unstarted') {
    
    setTimeout(() => {
      if (playerApi.state.status === 'unstarted') {
        playList.next()
    }
    }, 10000)

  }

} )

</script>