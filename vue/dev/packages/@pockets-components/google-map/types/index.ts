import type { google } from "./google-maps"
import type { LoaderOptions } from "@googlemaps/js-api-loader/"
export interface mapLoaderProps {
    
    /**
        Controls how map centering is handled. 
        If set to manual, you will need to enter an object with a lat/long under mapOptions.
        If set to markers, centering will be done on the mapMarkers provided.
    */
    centerOn?: "manual" | "markers" 
    /**
        See Map options for more information.
    */
    mapOptions?: google.maps.MapOptions
    /**
        See API loader for more information.
    */
    loaderOptions: LoaderOptions
    
    /**
        Should be an array of map markers. 
        Eg: 
        [{
            lat: 0,
            lng: 0,
        }]
    */
    mapMarkers?: [ google.maps.marker.AdvancedMarkerElementOptions ]
} 