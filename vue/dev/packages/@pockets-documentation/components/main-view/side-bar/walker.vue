<template>

  <component 
    :is="component" 
    :open="isOpen" 
    @toggle="toggleOpen"
    :class="COMPONENT_NAME"
  >

    <summary v-if="!isTopLevel">
        <i class="nav-icon" />
      <span>
        {{ props.meta?.title ?? normalizeName(props.path ?? '') }}
      </span>
    </summary>
    
    <ul>

      <li v-for="child in $children" :key="child.fullPath">

        <pockets-router-link 
          v-if="!child.children" 
          :to="child?.meta?.link ?? child.fullPath"
          :class="{ 'active': child.fullPath === route.path }"
          v-scroll-into-view="{ enabled:child.fullPath === route.path, parent: '.pockets-dashboard-sidebar-body' }"
        >
            <i 
              class="nav-icon"
              :class="child.meta?.storyIcon ?? 'fa fa-circle'"
            />
          <span>
            {{ child.meta?.title ?? normalizeName(child.path) }}
          </span>
        </pockets-router-link>

        <pockets-documentation-nav-walker
          v-if="child.children" 
          v-bind="child" 
        />
      </li>
    </ul>
  </component>
</template>

<script setup lang="ts">
import { computed, ref } from "vue"
import { useRoute } from "vue-router"

/**
  Needed because the component is self-recursive. Also used for component class. 
*/
const COMPONENT_NAME = 'pockets-documentation-nav-walker'

defineOptions({ name: COMPONENT_NAME })

interface $props {
  children?: any
  path?: string
  fullPath?: string
  meta?: { title?: string; storyIcon?: string }
}

let props = defineProps<$props>()

let route = useRoute()
const triggered = ref(false)

const $children = computed( () => {

  const list = props.children ?? []

  return list
    // step 1: alphabetical
    .slice().sort((a, b) => {
      const aTitle = a.meta?.title ?? a.path
      const bTitle = b.meta?.title ?? b.path
      return aTitle.localeCompare(bTitle)
    })
    // step 2: push items with children to bottom
    .sort((a, b) => {
      const aHasChildren = Array.isArray(a.children) && a.children.length > 0
      const bHasChildren = Array.isArray(b.children) && b.children.length > 0

      if (aHasChildren && !bHasChildren) return 1
      if (!aHasChildren && bHasChildren) return -1
      return 0
    })

    .sort((a, b) => {
      const aPriority = Number.isFinite(a.meta?.priority) ? a.meta.priority : 0
      const bPriority = Number.isFinite(b.meta?.priority) ? b.meta.priority : 0
      return aPriority - bPriority
    })

})

const normalizeName = ( str: string ) =>  str.replace(/-/g, " ").replace(/^./, c => c.toUpperCase() )

const isOpen = computed(() => {
  if (triggered.value) return true
  return $children.value.some(child => route.path.startsWith(child.fullPath))
})

const isTopLevel = computed(() => !props.path)

const toggleOpen = (event: Event) => {
  triggered.value = (event as any).newState === 'open'
}

let component = computed(() => isTopLevel.value ? 'div' : 'details')

</script>

<style lang="scss">
.pockets-documentation-nav-walker {

  --spacing: 20px;
  --bs-link-hover-color-rgb: var(--bs-accent-lt-rgb) !important;
  --bs-link-color-rgb:  var(--bs-white-rgb);

  color: var(--bs-grey-md);
  font-weight: 800;
  line-height: 30px;

  .grid-layout {
    display: grid;
    grid-template-columns: var(--spacing) 1fr;
    align-items: baseline;
    justify-content: baseline;;
  }


  .nav-icon {
    font-size: 12px;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
  }


  details {
    
    padding-left: 0px;
    
    > summary {
      i {
        &::before {
          font-family: "Font Awesome 5 Free"; 
          content: "\f054";
          font-weight: 900; 
          display: inline-block;
        }
      }
    }

    &[open] {
      > summary {
        i {
          &::before {
            content: "\f078";
          }
        }
      }
    }

    summary {
      
      @extend .grid-layout;
      
      list-style: none;
      
      &::-webkit-details-marker,
      &::marker {
        display: none;
      }

    }

    ul {
      padding-left: var( --spacing )
    }

  }

  ul {

    list-style: none;
    padding: 0;
    margin: 0;

    a {
      
      @extend .grid-layout;

      text-decoration: none;
      &.active {
        color: var(--bs-confirm);
      }

    }

  }

}
</style>