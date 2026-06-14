//@ts-nocheck
import { provide, reactive } from 'vue'
import { START_LOCATION_NORMALIZED } from "./location"

import { routerKey, routerViewLocationKey, routeLocationKey, } from 'vue-router'

export let useProvide = ( { router } ) => {
  
  /**
    Mimic how vue router sets currentRoute
  */
  const reactiveRoute = {} as RouteLocationNormalizedLoaded
  
  for (const key in START_LOCATION_NORMALIZED) {
    Object.defineProperty(reactiveRoute, key, {
      get: () => router.currentRoute.value[key as keyof RouteLocationNormalized],
      enumerable: true,
    })
  }

  provide( routerKey, router )
  provide( routerViewLocationKey, router.currentRoute )
  provide( routeLocationKey, reactive( reactiveRoute ) )

}