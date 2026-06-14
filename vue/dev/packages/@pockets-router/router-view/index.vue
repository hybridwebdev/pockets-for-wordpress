<script>
import { h } from 'vue'

import { RouterView, useRouter } from 'vue-router'

export default {

  setup() {
    
    let router = useRouter()

    return () => h( RouterView, {}, {
      default: ( { Component, route } ) => {
        if( !Component ) {
          return
        }
        return h( Component, { 
          //route, router 
        } )
      }
    } )

  },
  
}
</script>
