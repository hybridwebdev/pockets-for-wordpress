<template>
    <div 
        class="grid columns-1 gap-cq-lg-2 gap-cq-1 component-info"
    >

        <div class="component-info-header border border-5 border-grey-500">
    
            <div class="grid columns-1 gap-0">
                <story-demo-header/>
            </div>
    
    
            <div class="grid columns-cq-md-5 columns-cq-sm-3 gap-0 border-5 border-top border-grey-500">
            
                <pockets-router-link
                    :to="{
                        path: route.path,
                        query: { ...route.query, 'tab': 'demo' },
                        hash: route.hash
                    }"
                    class="btn btn-grey-700 nav-tab"
                    :class="{ 'active': open =='demo' }"
                >
                    Demo
                </pockets-router-link>

                <pockets-router-link
                    :to="{
                        path: route.path,
                        query: { ...route.query, 'tab': 'directive-info' },
                        hash: route.hash
                    }"
                    v-if="story.directive"
                    class="btn btn-grey-700 nav-tab"
                    :class="{ 'active': open =='directive-info' }"
                >
                    Directive Info
                </pockets-router-link>

                <pockets-router-link
                    :to="{
                        path: route.path,
                        query: { ...route.query, 'tab': 'component-info' },
                        hash: route.hash
                    }"
                    v-if="story.tag"
                    class="btn btn-grey-700 nav-tab"
                    :class="{ 'active': open =='component-info' }"
                >
                    Component Info
                </pockets-router-link>
    
                <pockets-router-link
                    :to="{
                        path: route.path,
                        query: { ...route.query, 'tab': 'vue-code' },
                        hash: route.hash
                    }"
                    class="btn btn-grey-700 nav-tab"
                    :class="{ 'active': open =='vue-code' }"
                >
                    VUE Code
                </pockets-router-link>
    
                <pockets-router-link
                    :to="{
                        path: route.path,
                        query: { ...route.query, 'tab': 'php-code' },
                        hash: route.hash
                    }"
                    class="btn btn-grey-700 nav-tab"
                    :class="{ 'active': open =='php-code' }"
                >
                    PHP Code
                </pockets-router-link>
    
                <pockets-router-link
                    :to="{
                        path: route.path,
                        query: { ...route.query, 'tab': 'demo-code' },
                        hash: route.hash
                    }"
                    class="btn btn-grey-700 nav-tab"
                    :class="{ 'active': open =='demo-code' }"
                >
                    Demo Code
                </pockets-router-link>
            </div>
    
        </div>

        <div class="component-info-main">

            <div 
                class="grid columns-1 gap-2"
                v-if="renderDemo == 'v-if' ? open === 'demo' : true"
                v-show="renderDemo =='v-show' ? open === 'demo' : true"
            >
                
                <div class="alert alert-danger" v-if="error">{{ error }}</div>

                <slot name="demo" :error="error">
                    <render-html 
                        :innerHTML="html" 
                        :state="state" 
                        v-if="!error"
                    />
                </slot>
               
                <h1 
                    v-if="$slots.results" 
                    class="fs-20 text-primary-lt m-0"
                >
                    Results
                </h1>
                <slot name="results"/>
    
            </div>
    
            <div
                v-if="open == 'vue-code'" 
                class="grid columns-1 gap-2"
            >
                <h1
                    class="fs-20 text-primary-lt m-0"
                >
                    VUE Code
                </h1>
    
                <pockets-ux-code-block :code="vueExample" lang="html"/>
            </div>
            
            <div 
                v-if="open == 'php-code'" 
                class="grid columns-1 gap-2"
            >
                <h1
                    class="fs-20 text-primary-lt m-0"
                >
                    PHP Code
                </h1>
    
                <pockets-ux-code-block :code="phpExample" lang="html"/>
            </div>
    
            <div 
                v-if="open == 'demo-code'" 
                class="grid columns-1 gap-2"
            >
                
                <h1
                    class="fs-20 text-primary-lt m-0"
                    v-if="data"
                >
                    Properties
                </h1>
    
                <slot name="props" v-if="data">
                    <pockets-ux-code-block :code="dataExample" lang="javascript"/>
                </slot>
    
                <h1
                    class="fs-20 text-primary-lt m-0"
                >
                    Template
                </h1>
    
                <slot name="source">
                    <pockets-ux-code-block :code="html" lang="html"/>
                </slot>
    
            </div>

            <!-- 
                debugging
                <pockets-ux-code-block :code='story'></pockets-ux-code-block>     
            -->

            <div v-show="
                ( story.tag && open=='component-info' )
                ||
                ( story.directive && open=='directive-info' )
                "
            >
                <component-info/>
            </div>

        </div>

    </div>

</template>
<script setup lang="ts">
import { computed, onErrorCaptured, watch, ref } from 'vue'
import componentInfo from './component-info/index.vue'
import storyDemoHeader from './header/index.vue'

import { context } from "@pockets-documentation"
import { useRoute } from "vue-router"

let story = context.inject.story()

let route = useRoute()

let open = computed(() => route.query.tab ?? "demo" )

type props = {
    html?: String
    /**
        Changes keyword used for vue/php templates.
        Eg let {varKey} = 
    */
    varKey?: String,
    renderDemo?: "v-if" | "v-show"
}

let props = withDefaults( defineProps<props>(), {
    varKey: "props",
    html: "",
    renderDemo: "v-show"
})

let state = defineModel< false | {
    props: {
        [ key: string ] : unknown
    } 
} >( 'state', { default: () => null } )

let data = computed( () => state.value?.props ?? state.value ?? false )
let dataExample = computed( () => data.value ? data.value : "No Properties defined" )

function indentHtml(htmlString, indentSize = 4) {
    const indent = ' '.repeat(indentSize) 
    return htmlString.split('\n').map(line => indent + line ).join('\n') 
}

let phpExample = computed( () => {
    if( !data.value) {
        return indentHtml( props.html, 0 )
    }
    return  [
        `<?php`,
        `$data = json_decode( '${JSON.stringify(dataExample.value , null, 4 )}' );`,
        '\\pockets::inject_data( "my_global_state", $data );',
        `?>`,
        // '<pockets-app>',
        `<pockets-global-state #default="{ my_global_state:${props.varKey} }">`,
        indentHtml( props.html, 4 ),
        '</pockets-global-state>',
        // '</pockets-app>',
    ].join('\n')
} )

let vueExample = computed( () => {
    let v = [
        '<template>',
        indentHtml( props.html ),
        `</template>`,
     
    ]
    if(data.value) {
        v = v.concat([
            `<script setup>`,
            `let ${props.varKey} = ${JSON.stringify(dataExample.value, null, 4 ) }`,
            '</script'+">"
        ])
    }
    return  v.join('\n')
} )

const error = ref()

onErrorCaptured( err => {
    error.value = `${err}. See console for more information.`
    console.log( err)
    return false
} )

watch( () => [ props, state ], () => error.value = false, { deep: true } )

</script>
<style lang="scss" scoped>
.component-info {
    :deep(){
        .nav-tab {
            border: 0px !important; 
            outline: none !important;
            --bs-btn-active-bg: var(--bs-grey-800) !important;
            box-shadow: none !important;
        }
    }
}
</style>