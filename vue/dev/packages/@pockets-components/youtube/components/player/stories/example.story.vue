---
 tag: "youtube"
 route: "pockets vue/components/youtube/Player/Example"
 component: "@pockets-components/youtube/components/player/index.vue"
 title: "Example"
---
<template>
  <pockets-story-demo-container 
    :state="initState" 
    :html="HTML"
    local-storage='youtube-player-demo'
  >
    <template #controls="{ state }">
      <youtube-option-panel :state="state.props" />
    </template>
  </pockets-story-demo-container>
</template>
<script setup>

import HTML from "./example.html?raw"
import { useStorage } from '@vueuse/core'
import { unref } from "vue"
 
let initState = {
  props: {
    videoId: "S7SLep244ss",
    width: "100%",
    height: "500px",
    volume: 10,
    playerVars: {
      start: 60,
      end: 90,
      rate: 1,
      controls: 0,
      mute: 0,
      loop: 1
    },
    showPlaceholder: true,
    showOverlay: true,
    placeholderTitle: "Test Pattern 1"
  }
}

</script>