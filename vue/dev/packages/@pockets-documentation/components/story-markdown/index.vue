<template>
    <div class="grid columns-1 gap-2 pockets-documentation-story-markdown bg-grey-700 pb-4">
        
        <pockets-render-markdown 
            class="p-2 grid columns-1 gap-2"
            :content="story.content"
        />

    </div>
</template>
<script setup>

import { context } from "@pockets-documentation"
let story = context.inject.story()

defineOptions({
    inheritAttrs: false
})
</script>
<style lang="scss">
.pockets-documentation-story-markdown {
    
    --bs-code-color: var(--bs-primary-lt);
    --bs-link-color: var(--bs-primary-lt);
    --bs-link-hover-color: var(--bs-accent-lt);
    font-size: 18px;
    pre,
    p {
        margin: 0 !important;
    }
    
    pre {
        code {
            background: var(--bs-black)
        }
    }

    h1, h2, h3, h4, h5, h6 {
        color: var(--bs-primary-lt);
        margin: 0 !important;
    }
    ul {
        li {
            code {

                margin: 20px 0;
            }
        }
    }
 
}
</style>