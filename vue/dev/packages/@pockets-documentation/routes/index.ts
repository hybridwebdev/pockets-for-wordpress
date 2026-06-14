//@ts-nocheck
import mainView from "@pockets-documentation/components/main-view/index.vue"
import renderMarkdown from "@pockets-documentation/components/story-markdown/index.vue"

export let getRoutes = () => import.meta.glob(
  [ '/**/*.story.md', '/**/*.story.vue' ],
  { eager: true }
)

export let useRoutes = () => {

  let routes = getRoutes()

  let children = Object.entries( routes ).reduce( ( acc, [path, $module] ) => {
    acc[path] = $module
    return acc;
  }, { })

  children = buildNestedRoutes(children)

  return [
    {
      path: '/',
      fullPath: '/',
      component: mainView,
      children: children,
    },
    {
      path: '/:params*',
      fullPath: '/',
      component: mainView,
      meta: {
        is404: true
      }
    },
  ]
  
}

function buildNestedRoutes(requireFiles) {

  const paths = Object.keys(requireFiles)
  const root = [];

  for (const filePath of paths) {
    
    const mod = requireFiles[filePath];
    const storyData = mod?.__storyData;
    const route = storyData?.route;

    if (!route) {
      continue
    }

    const parts = route.replace(/^\/|\/$/g, '').split('/');
    const name = parts.join('-');
    let current = root;
    let accumulatedPath = '';

    for (let i = 0; i < parts.length; i++) {

      const part = parts[i].replaceAll(' ', "-").toLowerCase();
      
      if( !part.startsWith(":") ) {
        accumulatedPath += '/' + part;
      }

      let existing = current.find(r => r.path === part);

      if ( !existing ) {
        
        let component = {
          children: []
        }

        if( i === parts.length - 1 ) {

          let render = mod.default ?? null

          if( filePath.endsWith('.md') ) {

            component = {
              name,
              component: renderMarkdown,
              meta: {
                storyType: "md",
                ...storyData,
                content: mod.default ?? ""
              },
            }

          }

          if( filePath.endsWith('.vue') ) {
            
            component = {
              name,
              component: mod.default ?? {
                template: "<div>Could not find story file</div>"
              },
              meta: {
                storyType: "vue",
                ...storyData
              }
            }

          }

        }

        existing = {
          path: part,
          fullPath: accumulatedPath,
          ...component
        };

        current.push( existing )  

      }

      current = existing.children ?? [] 
    
    }
    
  }

  return root

}

 