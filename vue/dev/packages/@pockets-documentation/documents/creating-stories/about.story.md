---
route: 'pockets vue/stories/about'
title: 'About'
priority: -1000
storyIcon: "fa fa-eraser"
---

# About Stories

Stories are a way to create documentation within your project. They provide a structured way to write guides, reference material, and component examples. It's what this entire documentation system is built with. 

Stories come in two types: `.vue` and `.md`.

- `.md` stories are written using Markdown and are best suited for written documentation such as guides and explanations.

- `.vue` stories are Vue components that allow you to render components or directives directly in the documentation, making it possible to create interactive examples and demonstrations.

### Creating a Story

To create a story, create a file somewhere in your Vue project folder. The file name can be anything, but it must end in `.story.vue` or `.story.md`.

For example: ```my-document.story.md``` or ```my-document.story.vue```

Stories can exist anywhere inside your Vue project. As long as the file ends in ```.story.vue``` or ```.story.md```, it will be discovered and included in the documentation system.

This allows documentation to live close to the components or features they describe, keeping documentation organized and easier to maintain.

### Front Matter

All stories use ```front-matter metadata``` at the top of the file to define information about the story. This metadata is written between `---` lines and is used to configure how the story appears in the documentation.

For example:

```md
---
route: 'pockets vue/stories/about'
title: 'About'
---
```

#### Available Properties:
---
```ts 
route: (string) required
```
This is the path you want your document to show up in. The sidebar for this documentation is built using this structure. 
For example, if you set route to ```my/document/about``` then it should show up in the sidebar under ```my/document/about```

---
```ts
title: (string) optional
```
If you set this, it will be used as the file entry in the sidebar. For example, if you set it to ```Foo``` instead of showing 
```my/document/about/``` it would show ```my/document/Foo```

---

```ts
storyIcon: (string) optional
```
If you set this, it will be used for the stories icon wherever it's rendered, such as in the sidebar

---

```ts
priority: (number) optional defaults to 1
```
By default, sorting in the sidebar is done by name, with ```.md``` files sorting above the ```.vue``` files. You can change
the order this item is shown in by setting a priority. Lower will sort to the top and higher to the bottom.

---

### For Componments

--- 

```ts
tag: (string)  optional
```
For ```.vue``` component stories, you can set this to the element your component uses. For example if you set this to ```my-component```, it
would show in the tag field as ```<my-component>```

---
```ts
component: (string)  optional
```
For ```.vue``` stories, you can set this to the element path of your component. This must be the full path and include extension.
For example, ```my/component/index.vue```.

If set, this will read the vue file and populate any information about it such as:

- component props
- available slots
- emitted events
- other component metadata

---

### For directives
---


```ts
directiveName: (string)  optional
```

If set, will show in the header. For example:

```ts
directiveName: v-my-directive
```

---
```ts
directive: (string)  optional
```
For ```.vue``` stories, you can set this to the element path of your directive. This must be the full path and include extension.
For example, ```my/directive/index.ts```.

If set, this will read the file and populate any information about it such as:

- directive description
- directive props

Note, for this system to be able to read documentation on directives, you must put the comments directly above the export default. For example:

```

let myDirective = {

}

/**
    @description My directive description
    @property {type} [name] My property description

*/
export default {
    ...myDirective
}
```

---

### story.md

Markdown stories are used for written documentation such as guides, explanations, or general documentation pages.

An Example: 

```md
---
title: "Example - Component"
route: "pockets vue/stories/component-story"

---
# Hello world
Lorem Ipsum
```

### story.vue

Vue stories are written using the ```.story.vue``` file extension and allow you to create interactive documentation using Vue components.

Because these stories are Vue components, you can:

- render live components
- demonstrate UI behavior
- create interactive examples
- bind props and state

Combine documentation with live demos!
 
##### Example:
```ts
---
title: "Example - Component"
route: "pockets vue/stories/component-story"
---
<template>
<pockets-story-demo-container
    :state="initialState"
>
    <template #default="{ state }">
        <pockets-story-demo
            :html="HTML"
            :state="state"
        >
        </pockets-story-demo>
    </template>
</pockets-story-demo-container>
</template>
<script setup lang="ts">

import HTML from "./component-example.html?raw";
let initialState = {
    foo: "bar"
}
</script>
```

### Adding Documents

When you've finished creating your documentation, don't forget to re-build your project so the documents will appear in the new build.

### Documenting your components

Writing documentation for your components is as simple as writing comments in it. 
Under the hood, components are parsed using [Vue docgen api](https://www.npmjs.com/package/vue-docgen-api). This library will automatically parse the comments you write in your components and transform them into documentation that is shown in the Pockets Documenation system. 

There are additional special properties that can be added to comments to trigger special handling: 

---
##### @component-description

Can be put anywhere in your ```<script>``` tag. This will set the description content under component info. 

For example:
```
/*
    @component-description
    This will show up in the description tab
*/
```
---