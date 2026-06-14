---
route: 'pockets vue/components/Google Map/Map Loader/Example' 
tag: 'google-map-loader'
---
<template>
<pockets-story-demo-container
    :state="initState"
>
    <template #default="{ state }">
        <api-wrapper>
          <pockets-story-demo
            :html="HTML"
            :state="state"
          />
        </api-wrapper>
    </template>
    <template #controls="{ state }">
      <api-wrapper mode="controls"/>
      <span>Markers</span>
      <google-map-option-panel-map-markers :options="state.props.mapMarkers"/>
      <span>Map Options</span>
      <google-map-option-panel-map-options :options="state.props"/>
    </template>
</pockets-story-demo-container>
</template>
<script setup lang="ts">
import HTML from "./example.html?raw"
import apiWrapper from "../shared/api-loader.vue"

let initState = () => ({
  "props": {
    "class": "col-12",
    "centerOn": "markers",
    loaderOptions: apiWrapper.loaderOptions,
    "mapOptions": {
      "zoom": 2,
      "center": {
        "lat": 0,
        "lng": 0
      },
      "draggable": true,
      "style": "height: 400px; width: 100%"
    },
    "mapMarkers": [
      {
        "title": "Hello world 1",
        "position": {
          "lat": 0,
          "lng": 0
        }
      },
      {
        "title": "Hello world 2",
        "position": {
          "lat": 20,
          "lng": 20
        }
      },
      {
        "title": "Hello world 3",
        "position": {
          "lat": 40,
          "lng": 40
        }
      },
      {
        "title": "Hello world 4",
        "position": {
          "lat": 40,
          "lng": 0
        }
      },
      {
        "title": "Hello world 5",
        "position": {
          "lat": 0,
          "lng": 40
        }
      }
    ]
  },
})
</script>