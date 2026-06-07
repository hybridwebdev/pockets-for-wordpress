import{a as e,i as t,n,r,t as i}from"./rolldown-runtime.BXA48FBR.js";import{A as a,B as o,C as s,E as c,G as l,H as u,I as d,J as f,K as p,P as m,S as h,U as g,W as _,X as v,Y as y,_ as b,_t as x,b as S,c as C,dt as w,et as T,f as E,g as D,k as O,lt as k,nt as A,o as j,ot as M,p as N,q as P,rt as F,s as I,v as L,vt as R,w as z,xt as B,y as V,yt as H,z as U}from"./floating-vue.C0YPAX_q.js";import{F as W,b as ee,i as te,l as ne,t as re}from"../pockets.glJnhv2z.js";import{t as ie}from"./inject-strict.QDOm0acR.js";import{t as G}from"./_plugin-vue_export-helper.DQ2ZEX90.js";import{n as ae}from"./vanilla-jsoneditor.Cc3nTmEV.js";import{t as K}from"./context.880zSjeH.js";import{t as q}from"./lodash.CvCKdjmd.js";import{d as oe,u as se}from"./vue-router.CBgZkhbh.js";var ce=r({__storyData:()=>le,default:()=>ue}),le={route:`pockets vue/components/ux/bootstrap/about`,storyIcon:`fa fa-book`},ue=`\r
# Bootstrap UX\r
\r
Documentation coming soon`,de=r({__storyData:()=>fe,default:()=>pe}),fe={route:`pockets vue/components/ux/bootstrap/interface/about`,storyIcon:`fa fa-book`},pe="\r\n## Bootstrap Interface\r\n#### ```pockets-ux-bootstrap-selector```\r\n\r\n",me=`<pockets-ux-bootstrap-interface\r
    v-bind='props'\r
    v-model="props.value"\r
></pockets-ux-bootstrap-interface>`,he=b(`label`,{class:`text-primary-lt`},`Results`,-1),ge={class:`bg-accent-dk p-half`},_e={class:`p-1 bg-grey-700`},ve=c({__name:`example-interface.story`,setup(e){let t={props:{value:`p-1 grid columns-6 col-12 gap-1 bg-black text-white text-center`,breakpoint:`none`}};return(e,n)=>{let r=f(`render-html`),i=f(`pockets-ux-code-block`),a=f(`pockets-story-demo`),o=f(`pockets-story-demo-container`);return u(),L(o,{state:x(t)},{default:A(({state:e})=>[z(a,{state:e,html:x(me)},{demo:A(()=>[z(r,{innerHTML:x(me),state:e,class:`grid columns-1 gap-2`},null,8,[`innerHTML`,`state`]),he,z(i,{code:e.props.value},null,8,[`code`]),b(`div`,ge,[b(`div`,{class:R(e.props.value)},[(u(),S(E,null,p(12,e=>b(`div`,_e,B(e)+` - Test `,1)),64))],2)])]),_:2},1032,[`state`,`html`])]),_:1},8,[`state`])}}}),ye=r({__storyData:()=>xe,default:()=>be}),be=ve,xe={tag:`pockets-ux-bootstrap-interface`,route:`pockets vue/components/ux/bootstrap/interface/example`,header:{sourceFile:!1,missingSourceFile:!1},storyIcon:`fa fa-code`},Se=r({__storyData:()=>Ce,default:()=>we}),Ce={route:`pockets vue/components/ux/bootstrap/select/about`,storyIcon:`fa fa-book`},we="\r\n## Bootstrap Class Selector\r\n#### ```pockets-ux-bootstrap-selector```\r\n\r\n",Te=`<div class='grid-info-160'>\r
    <label>Background</label>\r
    <pockets-ux-bootstrap-selector\r
        v-bind='props'\r
        option-key='colors'\r
        prefix='bg-'\r
        v-model='props.value'\r
    ></pockets-ux-bootstrap-selector>\r
</div>\r
<div class='grid-info-160'>\r
    <label>Text</label>\r
    <pockets-ux-bootstrap-selector\r
        v-bind='props'\r
        option-key='colors'\r
        prefix='text-'\r
        v-model='props.value'\r
    ></pockets-ux-bootstrap-selector>\r
</div>`,Ee=b(`label`,{class:`text-primary-lt`},`Results`,-1),De={class:`bg-grey-800 p-1`},Oe={class:`p-1 bg-grey-700`},ke=c({__name:`example.select.story`,setup(e){let t={props:{value:`p-1 grid columns-6 col-12 gap-1 bg-black text-white text-center`,breakpoint:`none`}};return(e,n)=>{let r=f(`render-html`),i=f(`pockets-ux-code-block`),a=f(`pockets-story-demo`),o=f(`pockets-story-demo-container`);return u(),L(o,{state:x(t)},{default:A(({state:e})=>[z(a,{state:e,html:x(Te)},{demo:A(()=>[z(r,{innerHTML:x(Te),state:e,class:`grid columns-1 gap-2`},null,8,[`innerHTML`,`state`]),Ee,z(i,{code:e.props.value},null,8,[`code`]),b(`div`,De,[b(`div`,{class:R(e.props.value)},[(u(),S(E,null,p(12,e=>b(`div`,Oe,B(e),1)),64))],2)])]),_:2},1032,[`state`,`html`])]),_:1},8,[`state`])}}}),Ae=r({__storyData:()=>Me,default:()=>je}),je=ke,Me={tag:`pockets-ux-bootstrap-interface`,route:`pockets vue/components/ux/bootstrap/select/example`,header:{sourceFile:!1,missingSourceFile:!1},storyIcon:`fa fa-code`},Ne=r({__storyData:()=>Pe,default:()=>Fe}),Pe={route:`pockets vue/components/ux/code-block/about`,storyIcon:`fa fa-book`},Fe="\r\n## Code Block\r\n#### ```pockets-ux-code-block```\r\n\r\nA component to render blocks of code. ",Ie=` <pockets-ux-code-block \r
    v-bind="props"\r
>\r
</pockets-ux-code-block>`,Le=`let foo = foo \r
let bar = bar`,Re=c({__name:`example.story`,setup(e){let t=()=>({props:{code:Le,class:`p-1 bg-black`,lang:`js`,copyEnabled:!0}});return(e,n)=>{let r=f(`pockets-story-demo-container`);return u(),L(r,{state:x(t),html:x(Ie)},null,8,[`state`,`html`])}}}),ze=r({__storyData:()=>Ve,default:()=>Be}),Be=Re,Ve={tag:`pockets-ux-code-block`,route:`pockets vue/components/UX/code-block/example`,component:`@pockets-components/UX/code-block/index.vue`,header:{sourceFile:`@pockets-components/UX/code-block/index.vue`,missingSourceFile:!1},storyIcon:`fa fa-code`,componentInfo:{exportName:`default`,displayName:`code-block`,description:``,tags:{},props:{copyEnabled:{name:`copyEnabled`,description:`If true, copy button will show on editor.`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`true`}},code:{name:`code`,description:`Code`,required:!0,type:{name:`union`,elements:[{name:`string`},{name:`object`},{name:`tuple`,elements:[]},{name:`Number`}]}},lang:{name:`lang`,description:`Language to display codeblock in.`,required:!1,type:{name:`string`},defaultValue:{func:!1,value:`"javascript"`}}},events:{},sourceFiles:[`C:/Users/Justin/Documents/Workspace/xampp/apps/pockets/htdocs/wp-content/plugins/pockets/vue/dev/packages/@pockets-components/UX/code-block/index.vue`]}},He=`<pockets-ux-code-editor v-bind='props' v-model='props.modelValue'>\r
</pockets-ux-code-editor>`,Ue=c({__name:`example.story`,setup(e){let t={props:{modelValue:`<div>
    Hello world
</div>`}};return(e,n)=>{let r=f(`pockets-story-demo`),i=f(`pockets-story-demo-container`);return u(),L(i,{state:x(t)},{default:A(({state:e})=>[z(r,{html:x(He),state:e},null,8,[`html`,`state`])]),_:1},8,[`state`])}}}),We=r({__storyData:()=>Ke,default:()=>Ge}),Ge=Ue,Ke={route:`pockets vue/components/ux/code-editor/example`,tag:`pockets-ux-code-editor`,component:`@pockets-components/UX/code-editor/index.vue`,header:{sourceFile:`@pockets-components/UX/code-editor/index.vue`,missingSourceFile:!1},storyIcon:`fa fa-code`,componentInfo:{exportName:`default`,displayName:`code-editor`,description:``,tags:{},props:{width:{name:`width`,required:!1,type:{name:`string`},defaultValue:{func:!1,value:`'100%'`}},borderRadius:{name:`borderRadius`,required:!1,type:{name:`string`},defaultValue:{func:!1,value:`"0px"`}},lineNums:{name:`lineNums`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`false`}},wrap:{name:`wrap`,required:!1,type:{name:`boolean`}},theme:{name:`theme`,required:!1,type:{name:`string`},defaultValue:{func:!1,value:`"stackoverflow-dark"`}},tabSpaces:{name:`tabSpaces`,required:!1,type:{name:`number`},defaultValue:{func:!1,value:`4`}},displayLanguage:{name:`displayLanguage`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`false`}},header:{name:`header`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`false`}},maxWidth:{name:`maxWidth`,required:!1,type:{name:`string`},defaultValue:{func:!1,value:`"100%"`}},copyEnabled:{name:`copyEnabled`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`true`}}},events:{},sourceFiles:[`C:/Users/Justin/Documents/Workspace/xampp/apps/pockets/htdocs/wp-content/plugins/pockets/vue/dev/packages/@pockets-components/UX/code-editor/index.vue`]}},qe=r({__storyData:()=>Je,default:()=>Ye}),Je={route:`pockets vue/components/ux/color-picker/about`,storyIcon:`fa fa-book`},Ye="\r\n## Color Picker\r\n#### ```pockets-ux-color-picker```\r\n\r\nA basic color picker input. For more information, see [vue-color-input](https://github.com/gVguy/vue-color-input?tab=readme-ov-file#event-names).",Xe=`<div class="grid columns-2 gap-2">\r
    <span \r
        class=" p-2 bg-white"\r
        :style="{ color: props.modelValue ?? '#000' }"\r
    >\r
        HELLO WORLD\r
    </span>\r
    <pockets-ux-color-picker\r
        v-bind="props"\r
        v-model="props.modelValue"\r
    />\r
</div>`,Ze=c({__name:`example.story`,setup(e){let t=()=>({props:{modelValue:`#7b22f1`,tooltip:`Select a color`,format:`hex`,position:`bottom right`}});return(e,n)=>{let r=f(`pockets-story-demo-container`);return u(),L(r,{state:x(t),html:x(Xe)},null,8,[`state`,`html`])}}}),Qe=r({__storyData:()=>et,default:()=>$e}),$e=Ze,et={tag:`pockets-ux-color-picker`,route:`pockets vue/components/ux/color-picker/example`,component:`@pockets-components/ux/color-picker/index.vue`,header:{sourceFile:`@pockets-components/ux/color-picker/index.vue`,missingSourceFile:!1},storyIcon:`fa fa-code`,componentInfo:{exportName:`default`,displayName:`color-picker`,description:``,tags:{},props:{tooltip:{name:`tooltip`,description:`Sets tooltip text shown when picker is hovered.`,required:!1,type:{name:`string`},defaultValue:{func:!1,value:`"Edit color"`}},format:{name:`format`,description:`Color format.`,required:!1,type:{name:`union`,elements:[{name:`"rgb"`},{name:`"hsv"`},{name:`"hsl"`},{name:`"hex"`},{name:`"hex8"`},{name:`"name"`}]}},position:{name:`position`,description:`Controls position of picker when open, relative to input field.`,required:!1,type:{name:`union`,elements:[{name:`"top"`},{name:`"top right"`},{name:`"top left"`},{name:`"top center"`},{name:`"right top"`},{name:`"right"`},{name:`"right bottom"`},{name:`"right center"`},{name:`"bottom right"`},{name:`"bottom"`},{name:`"bottom left"`},{name:`"bottom center"`},{name:`"left top"`},{name:`"left bottom"`},{name:`"left"`},{name:`"left center"`}]}},disabled:{name:`disabled`,description:`Disables picker if true`,required:!1,type:{name:`boolean`}},disableAlpha:{name:`disableAlpha`,description:`Disables Alpha picker if true.`,required:!1,type:{name:`boolean`}},disableTextInputs:{name:`disableTextInputs`,description:`Disables text inputs if true.`,required:!1,type:{name:`boolean`}},transition:{name:`transition`,description:`Transition name.`,required:!1,type:{name:`string`}},modelValue:{name:`modelValue`,description:`Color value to bind to.`,required:!0,type:{name:`union`,elements:[{name:`string`},{name:`null`}]}}},events:{},slots:[{name:`clear-button`,scoped:!0,description:`Can be used to override content of clear button.`,bindings:[{title:`binding`,type:{name:`function`},name:`clear`,description:`Clears selection.`}]}],sourceFiles:[`C:/Users/Justin/Documents/Workspace/xampp/apps/pockets/htdocs/wp-content/plugins/pockets/vue/dev/packages/@pockets-components/ux/color-picker/index.vue`]}},tt=`<pockets-ux-copy source='Test 123' #default="{copy, copied }" v-bind='props'>\r
    <div class='grid gap-1'>\r
        <div class='grid-info-120'>\r
            <span class='bg-grey-800 p-2'>Text </span>\r
            <input v-model='props.source' class='form-control'>\r
        </div>\r
        <div class='grid-info-120'>\r
            <span class='bg-grey-800 p-2'>Copied </span>\r
            <span>{{copied}} </span>\r
        </div>\r
        <button \r
            class='btn btn-confirm me-auto px-8 p-1'\r
            @click="copy"\r
        >\r
            Click to Copy\r
        </button>\r
    </div>\r
</pockets-ux-copy>`,nt=c({__name:`example.story`,setup(e){let t={props:{source:`test 123`}};return(e,n)=>{let r=f(`pockets-story-demo-container`);return u(),L(r,{state:x(t),html:x(tt)},null,8,[`state`,`html`])}}}),rt=r({__storyData:()=>at,default:()=>it}),it=nt,at={tag:`pockets-ux-copy`,route:`pockets vue/components/UX/copy/example`,component:`@pockets-components/UX/copy/index.vue`,header:{sourceFile:`@pockets-components/UX/copy/index.vue`,missingSourceFile:!1},storyIcon:`fa fa-code`,componentInfo:{description:`\r
    A renderless component that utilizes <a href='https://vueuse.org/core/useclipboard/'>useClipboard</a> to provide an api for copying content\r
    to the clipboard.\r
`,exportName:`default`,displayName:`copy`,tags:{},props:{source:{name:`source`,description:`Content that is copied to clipboard when copy is fired.`,required:!0,type:{name:`string`}},success:{name:`success`,description:`Callable function that is invoked when copy method is called.
        By default, will show toast message.`,required:!1,type:{name:`Function`},defaultValue:{func:!1,value:`() => $pockets.toast.success("Copied to clipboard")`}}},events:{},slots:[{name:`default`,scoped:!0,bindings:[{name:`copied`,title:`binding`},{name:`copy`,title:`binding`}],description:`Provides api for clipboard`,tags:{binding:[{title:`binding`,type:{name:`function() `},name:`copy`,description:`When called, will copy source to clipboard.`},{title:`binding`,type:{name:` reactive<Boolean> default = false `},name:`copied`,description:`When content is copied to clipboard, this will temporarily change to true.`}]}}],sourceFiles:[`C:/Users/Justin/Documents/Workspace/xampp/apps/pockets/htdocs/wp-content/plugins/pockets/vue/dev/packages/@pockets-components/UX/copy/index.vue`]}},ot=r({__storyData:()=>st,default:()=>ct}),st={route:`pockets vue/components/ux/fancy-input/about`,storyIcon:`fa fa-book`},ct=`\r
## Fancy Input\r
#### \`pockets-fancy-input\`\r
\r
Fancy Input is an enhanced replacement for standard HTML input[number] elements.`,lt=`<pockets-fancy-input\r
    class="col-12 form-control rounded-0"\r
    v-bind='props'\r
    v-model:value='props.modelValue'\r
>\r
</pockets-fancy-input>`,ut={class:`grid-info-120`,role:`button`},dt=[`onUpdate:modelValue`],ft={class:`grid-info-120`,role:`button`},pt=[`onUpdate:modelValue`],mt={class:`grid-info-120`,role:`button`},ht=[`onUpdate:modelValue`],gt={class:`grid-info-120`,role:`button`},_t=[`onUpdate:modelValue`],vt=c({__name:`example.story`,setup(e){let t=()=>({props:{modelValue:1,debounce:500,min:0,max:999,name:`input-name`}});return(e,n)=>{let r=f(`render-html`),i=f(`pockets-story-demo`),a=f(`pockets-story-demo-container`);return u(),L(a,{state:x(t)},{default:A(({state:e})=>[z(i,{html:x(lt),state:e},{demo:A(()=>[b(`pre`,null,B(e.props),1),z(r,{innerHTML:x(lt),state:e},null,8,[`innerHTML`,`state`])]),_:2},1032,[`html`,`state`])]),controls:A(({state:e})=>[b(`label`,ut,[s(` Debounce `),F(b(`input`,{class:`form-control`,"onUpdate:modelValue":t=>e.props.debounce=t,min:0,type:`number`},null,8,dt),[[C,e.props.debounce]])]),b(`label`,ft,[s(` Min `),F(b(`input`,{class:`form-control`,"onUpdate:modelValue":t=>e.props.min=t,type:`number`},null,8,pt),[[C,e.props.min]])]),b(`label`,mt,[s(` Max `),F(b(`input`,{class:`form-control`,"onUpdate:modelValue":t=>e.props.max=t,min:0,type:`number`},null,8,ht),[[C,e.props.max]])]),b(`label`,gt,[s(` Name `),F(b(`input`,{class:`form-control`,"onUpdate:modelValue":t=>e.props.name=t,min:0,type:`text`},null,8,_t),[[C,e.props.name]])])]),_:1},8,[`state`])}}}),yt=r({__storyData:()=>xt,default:()=>bt}),bt=vt,xt={tag:`pockets-fancy-input`,route:`pockets vue/components/ux/fancy-input/example`,component:`@pockets-components/ux/fancy-input/index.vue`,header:{sourceFile:`@pockets-components/ux/fancy-input/index.vue`,missingSourceFile:!1},storyIcon:`fa fa-code`,componentInfo:{exportName:`default`,displayName:`fancy-input`,description:``,tags:{},props:{debounce:{name:`debounce`,description:`delay before input emits updated value.`,required:!1,type:{name:`number`},defaultValue:{func:!1,value:`500`}},name:{name:`name`,description:`Name attr applied to input`,required:!1,type:{name:`union`,elements:[{name:`string`},{name:`null`}]},defaultValue:{func:!1,value:`null`}},inputAttrs:{name:`inputAttrs`,description:`Additional attributes to pass to input. can be any valid html prop such as min/max etc`,required:!1,type:{name:`any`},defaultValue:{func:!1,value:`() => ({})`}},min:{name:`min`,description:`Minimum value`,required:!1,type:{name:`number`},defaultValue:{func:!1,value:`1`}},max:{name:`max`,description:`Maximum value`,required:!1,type:{name:`union`,elements:[{name:`number`},{name:`boolean`}]},defaultValue:{func:!1,value:`false`}},value:{name:`value`,description:`Value to bind to. Can be used with v-model:value`,required:!1,type:{name:`union`,elements:[{name:`number`},{name:`string`}]}}},events:{},sourceFiles:[`C:/Users/Justin/Documents/Workspace/xampp/apps/pockets/htdocs/wp-content/plugins/pockets/vue/dev/packages/@pockets-components/ux/fancy-input/index.vue`]}},St=r({__storyData:()=>Ct,default:()=>wt}),Ct={route:`pockets vue/components/ux/fancy-select/About`,title:`About`,storyIcon:`fa fa-book`},wt=`\r
## Fancy Select\r
#### \`pockets-fancy-select\`\r
\r
Fancy Select is an enhanced replacement for standard HTML select elements, offering search functionality, custom styling, multi-select capability, and option grouping. Can be used\r
with all standard select fields such as \`\`\`option\`\`\`, or with optional components with enhanced features.\r
\r
### Components\r
\r
#### \`pockets-fancy-select\`\r
- Main select field component\r
- Features:\r
  - Search functionality\r
  - Custom styling\r
  - Multi-select capability\r
  - Grouping of options\r
\r
#### \`pockets-fancy-select-option\`\r
- Optional component for \`pockets-fancy-select\`\r
- Features:\r
  - Automatic filtering via search based on value or contents\r
  - Seamless integration with \`pockets-fancy-select\`\r
`,Tt=`<pockets-fancy-select\r
    class="col-12 form-control rounded-0"\r
    v-bind='props'\r
    v-model='props.modelValue'\r
    v-model:search='props.search'\r
>\r
    <pockets-fancy-select-option value='one' class='p-1'>\r
        <span>Apples</span>\r
    </pockets-fancy-select-option>\r
    <pockets-fancy-select-option value='two' class='p-1'>\r
        <p>Bananas</p>\r
    </pockets-fancy-select-option>\r
    <pockets-fancy-select-option value='three' class='p-1'>\r
        Cucumbers\r
    </pockets-fancy-select-option>\r
    <pockets-fancy-select-option value='four' class='p-1'>\r
        Oranges\r
    </pockets-fancy-select-option>\r
</pockets-fancy-select>`,Et={class:`grid-info-120`},Dt=b(`span`,null,`Search Value`,-1),Ot={class:`grid-info-120`},kt=b(`span`,null,`Selected value`,-1),At={class:`grid-info-120`,role:`button`},jt=[`onUpdate:modelValue`],Mt={class:`grid-info-120`,role:`button`},Nt=[`onUpdate:modelValue`],Pt={class:`grid-info-120`,role:`button`},Ft=[`onUpdate:modelValue`],It={class:`grid-info-120`,role:`button`},Lt=[`onUpdate:modelValue`],Rt={class:`grid-info-120`,role:`button`},zt=[`onUpdate:modelValue`],Bt=c({__name:`example.story`,setup(e){let t={props:{modelValue:``,search:``,openCount:4,searchClass:`form-control rounded-0 text-black`,searchPlaceholder:`Enter text to filter options...`,placeholderClass:`p-1 form-control d-flex align-items-center`,placeHolder:`Placeholder text is shown when no option is selected`}};return(e,n)=>{let r=f(`render-html`),i=f(`pockets-story-demo`),a=f(`pockets-story-demo-container`);return u(),L(a,{state:x(t)},{default:A(({state:e})=>[z(i,{html:x(Tt),state:e},{demo:A(()=>[b(`div`,Et,[Dt,b(`span`,null,B(e.props.search==``?`None`:e.props.search),1)]),b(`div`,Ot,[kt,b(`span`,null,B(e.props.modelValue==``?`None`:e.props.modelValue),1)]),z(r,{innerHTML:x(Tt),state:e},null,8,[`innerHTML`,`state`])]),_:2},1032,[`html`,`state`])]),controls:A(({state:e})=>[b(`label`,At,[s(` Open Count `),F(b(`input`,{class:`form-control`,"onUpdate:modelValue":t=>e.props.openCount=t,min:2,max:8,type:`number`},null,8,jt),[[C,e.props.openCount]])]),b(`label`,Mt,[s(` Search Class `),F(b(`input`,{"onUpdate:modelValue":t=>e.props.searchClass=t,class:`form-control`},null,8,Nt),[[C,e.props.searchClass]])]),b(`label`,Pt,[s(` Search Placeholder Text `),F(b(`input`,{"onUpdate:modelValue":t=>e.props.searchPlaceholder=t,class:`form-control`},null,8,Ft),[[C,e.props.searchPlaceholder]])]),b(`label`,It,[s(` Placeholder Class `),F(b(`input`,{"onUpdate:modelValue":t=>e.props.placeholderClass=t,class:`form-control`},null,8,Lt),[[C,e.props.placeholderClass]])]),b(`label`,Rt,[s(` Placeholder Text `),F(b(`input`,{"onUpdate:modelValue":t=>e.props.placeHolder=t,class:`form-control`},null,8,zt),[[C,e.props.placeHolder]])])]),_:1},8,[`state`])}}}),Vt=r({__storyData:()=>Ut,default:()=>Ht}),Ht=Bt,Ut={tag:`pockets-fancy-select`,route:`pockets vue/components/ux/fancy-select/example`,component:`@pockets-components/ux/fancy-select/components/select.vue`,header:{sourceFile:`@pockets-components/ux/fancy-select/components/select.vue`,missingSourceFile:!1},storyIcon:`fa fa-code`,componentInfo:{exportName:`default`,displayName:`select`,description:``,tags:{},props:{search:{name:`search`,description:`Binds to value entered in search field.`,required:!1,type:{name:`string`}},modelValue:{name:`modelValue`,description:`Value to bind selected value(s) to.`,required:!0,type:{name:`union`,elements:[{name:`string`},{name:`tuple`,elements:[]},{name:`number`},{name:`object`},{name:`boolean`},{name:`null`},{name:`undefined`}]}},containerClass:{name:`containerClass`,description:`Class applied to wrapping container`,required:!1,type:{name:`string`},defaultValue:{func:!1,value:`""`}},openPosition:{name:`openPosition`,description:`Position class to add to select when open`,required:!1,type:{name:`union`,elements:[{name:`"open-up"`},{name:`"open-down"`}]},defaultValue:{func:!1,value:`"open-down"`}},searchClass:{name:`searchClass`,description:`Class applied to search box.`,required:!1,type:{name:`string`},defaultValue:{func:!1,value:`'form-control rounded-0 text-black'`}},searchPlaceholder:{name:`searchPlaceholder`,description:`Placeholder text for search box.`,required:!1,type:{name:`string`},defaultValue:{func:!1,value:`'Enter search to filter results'`}},placeHolder:{name:`placeHolder`,description:`Text used for placeholder.`,required:!1,type:{name:`string`},defaultValue:{func:!1,value:`"Select an option"`}},placeholderClass:{name:`placeholderClass`,description:`Class applied to placeholder box.`,required:!1,type:{name:`string`},defaultValue:{func:!1,value:`"p-1 form-control d-flex align-items-center"`}},selectClass:{name:`selectClass`,description:`Class applied to select.`,required:!1,type:{name:`string`},defaultValue:{func:!1,value:`""`}},openCount:{name:`openCount`,description:`How many options to show when select is open.`,required:!1,type:{name:`number`},defaultValue:{func:!1,value:`10`}}},events:{},slots:[{name:`default`,scoped:!0,bindings:[{name:`focused`,title:`binding`},{name:`api`,title:`binding`}],description:`Provides api and state for component.`,tags:{binding:[{title:`binding`,type:{name:`boolean`},name:`focused`,description:`Will be true when search or select field is focused.`},{title:`binding`,type:{name:`object`},name:`api`,description:`Contains api for component.`},{title:`binding`,type:{name:`.search`},name:`api`,description:`Current value of search field.`}]}}],sourceFiles:[`C:/Users/Justin/Documents/Workspace/xampp/apps/pockets/htdocs/wp-content/plugins/pockets/vue/dev/packages/@pockets-components/ux/fancy-select/components/select.vue`]}},Wt=r({__storyData:()=>Gt,default:()=>Kt}),Gt={group:`components`,title:`ux/Form/About Form Container`,storyIcon:`fa fa-book`},Kt="\r\n## Bootstrap Interface\r\n#### ```pockets-ux-bootstrap-selector```\r\n\r\n",qt=`<pockets-form-container \r
    v-bind='props'\r
    class='p-1 text-white grid columns-1 gap-1 loading-container overflow-hidden'\r
>   \r
    <pockets-form-validation\r
        path='form-container'\r
        tag='div'\r
        class='grid columns-1 gap-1'\r
    >\r
    </pockets-form-validation>\r
     \r
    <pockets-form-validation\r
        path='name'\r
        tag='div'\r
        class='grid-info-160 gap-1'\r
        wrapper-class='g-col-2'\r
    >\r
        <span>Name</span>\r
        <pockets-form-input \r
            class='form-control rounded-0 border border-5'\r
            path='name'\r
            placeholder='Name...'\r
        >\r
        </pockets-form-input>\r
    </pockets-form-validation>\r
\r
    <pockets-form-validation\r
        path='email'\r
        tag='div'\r
        class='grid-info-160 gap-1'\r
        wrapper-class='g-col-2'\r
    >\r
        <span>Email</span>\r
        <pockets-form-input \r
            class='form-control rounded-0 border border-5'\r
            path='email'\r
            placeholder='Email...'\r
        >\r
        </pockets-form-input>\r
    </pockets-form-validation>\r
\r
    <pockets-form-validation\r
        path='confirm.email'\r
        tag='div'\r
        class='grid-info-160 gap-1'\r
        wrapper-class='g-col-2'\r
    >\r
        <span>Confirm Email</span>\r
        <pockets-form-input \r
            class='form-control rounded-0 border border-5'\r
            path='confirm.email'\r
            placeholder='Email...'\r
        >\r
        </pockets-form-input>\r
    </pockets-form-validation>\r
     \r
    <pockets-form-input\r
        tag='button'\r
        type='submit'\r
        class='btn btn-confirm rounded-0 p-2'\r
    >\r
        Submit\r
    </pockets-form-input>\r
    \r
</pockets-form-container>`,Jt=b(`label`,{class:`text-primary-lt`},`Results`,-1),Yt=c({__name:`example-interface.story`,setup(e){let t=()=>({props:{endpoint:`default-form`,formId:`test-form`,formData:{name:`John Doe`,email:`j@doe.com`},validationOptions:{validClass:`text-confirm`,invalidClass:`text-danger`},inputOptions:{validClass:`border-confirm`,invalidClass:`border-danger`},validation:[]}});return(e,n)=>{let r=f(`render-html`),i=f(`pockets-ux-json-editor`),a=f(`pockets-story-demo`),o=f(`pockets-story-demo-container`);return u(),L(o,{state:x(t)},{default:A(({state:e})=>[z(a,{state:e,html:x(qt)},{demo:A(()=>[z(r,{innerHTML:x(qt),state:e,class:`grid columns-1 gap-2`},null,8,[`innerHTML`,`state`]),Jt,z(i,{modelValue:e.props,"onUpdate:modelValue":t=>e.props=t},null,8,[`modelValue`,`onUpdate:modelValue`])]),_:2},1032,[`state`,`html`])]),_:1},8,[`state`])}}}),Xt=r({__storyData:()=>Qt,default:()=>Zt}),Zt=Yt,Qt={tag:`pockets-form-container`,route:`pockets vue/components/ux/Form/Example Form Container`,header:{sourceFile:!1,missingSourceFile:!1},storyIcon:`fa fa-code`},$t=`<pockets-ux-json-editor\r
    v-model="props.modelValue"\r
/>`,en=c({__name:`example.story`,setup(e){let t=k({modelValue:{hello:`world`,object:{foo:`bar`},array:[`ONE`,`TWO`,`THREE`]}});return(e,n)=>{let r=f(`pockets-ux-json-editor`),i=f(`pockets-story-demo`),a=f(`pockets-story-demo-container`);return u(),L(a,null,{default:A(()=>[z(i,{html:x($t),state:x(t)},{demo:A(()=>[z(r,{modelValue:x(t).modelValue,"onUpdate:modelValue":n[0]||=e=>x(t).modelValue=e},null,8,[`modelValue`])]),_:1},8,[`html`,`state`])]),_:1})}}}),tn=r({__storyData:()=>rn,default:()=>nn}),nn=en,rn={tag:`pockets-ux-json-editor`,route:`pockets vue/components/ux/json-editor/example`,component:`@pockets-components/ux/json-editor/loader.vue`,header:{sourceFile:`@pockets-components/ux/json-editor/loader.vue`,missingSourceFile:!1},storyIcon:`fa fa-code`,componentInfo:{description:`\r
    An editor that allows you to edit JSON, with basic realtime validation and error highlighting.\r
`,exportName:`default`,displayName:`loader`,tags:{},props:{class:{name:`class`,description:`Class to apply to editor instance`,required:!1,type:{name:`string`},defaultValue:{func:!1,value:`"jse-theme-dark"`}},modelValue:{name:`modelValue`,required:!0,type:{name:`object`}},mode:{name:`mode`,description:`Only text mode is supported`,required:!1,type:{name:`"text"`},defaultValue:{func:!1,value:`'text'`}},navigationBar:{name:`navigationBar`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`true`}},askToFormat:{name:`askToFormat`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`false`}},content:{name:`content`,required:!1,type:{name:`{\r
    text?: string;\r
}`}},ajvOptions:{name:`ajvOptions`,required:!1,type:{name:`{\r
    useDefaults?: "empty";\r
    allowUnionTypes?: boolean;\r
    allowMatchingProperties?: boolean;\r
    allErrors: boolean;\r
    verbose: boolean;\r
    $data: boolean;\r
}`},defaultValue:{func:!1,value:`{\r
    useDefaults: 'empty',\r
    allowUnionTypes: true,\r
    allowMatchingProperties: true,\r
    allErrors: true,\r
    verbose: true,\r
    $data: true,\r
    strict: false\r
}`}},onChange:{name:`onChange`,required:!1,type:{name:`TSFunctionType`}},onRenderMenu:{name:`onRenderMenu`,required:!1,type:{name:`TSFunctionType`}},validator:{name:`validator`,required:!1,type:{name:`TSFunctionType`}}},events:{hasJSON:{name:`hasJSON`,description:`Fired when onChange event fires. Passes 
            current JSON which will be object, or false if not JSON.`}},sourceFiles:[`C:/Users/Justin/Documents/Workspace/xampp/apps/pockets/htdocs/wp-content/plugins/pockets/vue/dev/packages/@pockets-components/ux/json-editor/loader.vue`]}},an=r({__storyData:()=>on,default:()=>sn}),on={route:`pockets vue/components/ux/movable/about`,storyIcon:`fa fa-book`},sn="\r\n## Movable\r\n#### ```pockets-ux-movable```\r\n\r\nA renderless component that transforms a target element into a movable, resizable element.",cn=`<div \r
    :ref="e => props.container = e"\r
    class="movable-window bg-white"\r
>\r
    <div \r
        :ref="e => props.handle = e"\r
        class="col-12 bg-primary-dk p-1 handle"\r
        role='button'\r
    >Handle</div>\r
    <div class="p-1 text-black fw-8 fs-16">\r
        You can resize this element or drag the handle to move it.\r
    </div>\r
</div>\r
<pockets-ux-movable \r
    v-if="props.container && props.handle"\r
    :target='props.container' \r
    :dragTarget='props.handle' \r
    :draggable="true" \r
    :useResizeObserver='true'\r
    :useMutationObserver='true'\r
    :resizable='true'\r
>\r
</pockets-ux-movable>`,ln={class:`position-relative`},un={style:{height:`100px`}},dn=c({__name:`example.story`,setup(e){let t=()=>({props:{}});return(e,n)=>{let r=f(`render-html`),i=f(`pockets-story-demo`),a=f(`pockets-story-demo-container`);return u(),L(a,{state:x(t)},{default:A(({state:e})=>[b(`div`,ln,[z(i,{state:e,html:x(cn)},{demo:A(()=>[b(`div`,un,[z(r,{innerHTML:x(cn),state:e},null,8,[`innerHTML`,`state`])])]),_:2},1032,[`state`,`html`])])]),_:1},8,[`state`])}}}),fn=r({__storyData:()=>mn,default:()=>pn}),pn=dn,mn={tag:`pockets-ux-movable`,route:`pockets vue/components/ux/movable/example`,component:`@pockets-components/UX/moveable/index.vue`,header:{sourceFile:`@pockets-components/UX/moveable/index.vue`,missingSourceFile:!1},storyIcon:`fa fa-code`,componentInfo:{name:`pockets-ux-movable`,description:`\r
    This component is a renderless thin wrapper around vue3-movable. It has no slots.\r
    For more information on use see <a href='https://github.com/daybrush/moveable/tree/master/packages/vue-moveable'>VUE 3 Movable</a>\r
`,exportName:`default`,displayName:`moveable`,tags:{},props:{snappable:{name:`snappable`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`true`}},origin:{name:`origin`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`false`}},draggable:{name:`draggable`,required:!1,type:{name:`boolean`}},resizable:{name:`resizable`,required:!1,type:{name:`boolean`}},scalable:{name:`scalable`,required:!1,type:{name:`boolean`}},rotatable:{name:`rotatable`,required:!1,type:{name:`boolean`}},warpable:{name:`warpable`,required:!1,type:{name:`boolean`}},pinchable:{name:`pinchable`,required:!1,type:{name:`boolean`}},edgeDraggable:{name:`edgeDraggable`,required:!1,type:{name:`boolean`}},target:{name:`target`,required:!1,type:{name:`union`,elements:[{name:`HTMLElement`},{name:`SVGElement`},{name:`Array`,elements:[{name:`union`,elements:[{name:`HTMLElement`},{name:`SVGElement`}]}]},{name:`null`}]}},targets:{name:`targets`,required:!1,type:{name:`Array`,elements:[{name:`union`,elements:[{name:`HTMLElement`},{name:`SVGElement`}]}]}},snapThreshold:{name:`snapThreshold`,required:!1,type:{name:`number`}},snapGap:{name:`snapGap`,required:!1,type:{name:`boolean`}},snapDirections:{name:`snapDirections`,required:!1,type:{name:`boolean`}},snapRotationThreshold:{name:`snapRotationThreshold`,required:!1,type:{name:`number`}},scrollable:{name:`scrollable`,required:!1,type:{name:`boolean`}},scrollContainer:{name:`scrollContainer`,required:!1,type:{name:`union`,elements:[{name:`HTMLElement`},{name:`Window`},{name:`null`}]}},className:{name:`className`,required:!1,type:{name:`string`}},dragArea:{name:`dragArea`,required:!1,type:{name:`boolean`}},checkInput:{name:`checkInput`,required:!1,type:{name:`boolean`}},zoomable:{name:`zoomable`,required:!1,type:{name:`boolean`}},originDraggable:{name:`originDraggable`,required:!1,type:{name:`boolean`}}},events:{},sourceFiles:[`C:/Users/Justin/Documents/Workspace/xampp/apps/pockets/htdocs/wp-content/plugins/pockets/vue/dev/packages/@pockets-components/UX/moveable/index.vue`]}},hn=r({__storyData:()=>gn,default:()=>_n}),gn={group:`components`,title:`ux/Popper/Component - About`,storyIcon:`fa fa-book`},_n="\r\n## Popper\r\n#### ```pockets-popper```\r\n\r\nThe popper component is a user interface element that shows a small, floating container with content when a user interacts with a target element. It can be used to display tooltips, dropdowns, or other contextual information without cluttering the main interface. The popper appears adjacent to the target element and the positioning can be controlled.",vn=`<pockets-popper\r
    :triggers="['hover']"\r
    theme='generic-popper'\r
    :auto-hide='true'\r
    no-auto-focus\r
    placement='top-start'\r
>\r
    <div\r
        class='p-2 bg-black'\r
    >\r
        I am some content. Hover over me.\r
    </div>\r
    <template #popper>\r
        <div class="p-1 bg-black text-white">\r
            Hello world\r
        </div>\r
    </template>\r
</pockets-popper>`,yn=c({__name:`example.story`,setup(e){let t=()=>({props:{}});return(e,n)=>{let r=f(`pockets-story-demo`),i=f(`pockets-story-demo-container`);return u(),L(i,{state:x(t)},{default:A(({state:e})=>[z(r,{html:x(vn)},null,8,[`html`])]),_:1},8,[`state`])}}}),bn=r({__storyData:()=>Sn,default:()=>xn}),xn=yn,Sn={route:`pockets vue/components/ux/Popper/Component - Example`,tag:`pockets-popper`,header:{sourceFile:!1,missingSourceFile:!1},storyIcon:`fa fa-code`},Cn=r({__storyData:()=>wn,default:()=>Tn}),wn={group:`components`,title:`ux/Range Slider/About`,storyIcon:`fa fa-book`},Tn=`\r
## Range Slider\r
#### \`\`\`pockets-ux-range-slider\`\`\`\r
\r
This component is an interactive UI component that allows users to select a range of values by dragging one or more handles along a horizontal or vertical axis. It supports:\r
\r
- Single Handle: \r
    Selects a single value within a specified range.\r
- Multiple Handles: \r
    Selects a range of values by positioning two or more handles.`,En=`<pockets-ux-range-slider \r
    v-bind='props' \r
    v-model="props.modelValue"\r
/>`,Dn={class:`grid-info-120`},On=b(`span`,null,`Min`,-1),kn=[`onUpdate:modelValue`],An={class:`grid-info-120`},jn=b(`span`,null,`Max`,-1),Mn=[`onUpdate:modelValue`],Nn={class:`grid-info-120`},Pn=b(`span`,null,`Step`,-1),Fn=[`onUpdate:modelValue`],In={class:`grid-info-120`},Ln=b(`span`,null,`Debounce`,-1),Rn=[`onUpdate:modelValue`],zn=c({__name:`example.story`,setup(e){let t=()=>({props:{modelValue:0,min:0,max:20,step:1,mode:`single`,debounceRate:0}});return(e,n)=>{let r=f(`pockets-story-demo-container`);return u(),L(r,{state:x(t),html:x(En)},{controls:A(({state:e})=>[b(`label`,Dn,[On,F(b(`input`,{type:`number`,"onUpdate:modelValue":t=>e.props.min=t,class:`form-control`},null,8,kn),[[C,e.props.min]])]),b(`label`,An,[jn,F(b(`input`,{type:`number`,"onUpdate:modelValue":t=>e.props.max=t,class:`form-control`},null,8,Mn),[[C,e.props.max]])]),b(`label`,Nn,[Pn,F(b(`input`,{type:`number`,"onUpdate:modelValue":t=>e.props.step=t,class:`form-control`},null,8,Fn),[[C,e.props.step]])]),b(`label`,In,[Ln,F(b(`input`,{type:`number`,"onUpdate:modelValue":t=>e.props.debounceRate=t,class:`form-control`},null,8,Rn),[[C,e.props.debounceRate]])])]),_:1},8,[`state`,`html`])}}}),Bn=r({__storyData:()=>Hn,default:()=>Vn}),Vn=zn,Hn={route:`pockets vue/components/ux/Range Slider/Example`,tag:`pockets-ux-range-slider`,header:{sourceFile:!1,missingSourceFile:!1},storyIcon:`fa fa-code`},Un=r({__storyData:()=>Wn,default:()=>Gn}),Wn={route:`pockets vue/components/ux/repeater/about`,storyIcon:`fa fa-book`},Gn=`\r
## Repeater\r
#### \`\`\`pockets-ux-repeater\`\`\`\r
\r
This component is a Repeater Field that allows for dynamic and repeatable sets of sub-fields within a form or other UX. It enables the addition, deletion, and reordering of field groups, providing a flexible and intuitive way to manage complex data structures. \r
\r
\r
\r
\r
\r
\r
\r
\r
`,Kn=`<pockets-ux-repeater\r
    v-bind="props"\r
    @repeater:event="( event ) => $pockets.toast.info(\`Repeater event: \${event}\`)"\r
>\r
    <template #item="{ item }">\r
        <input v-model="item.test" class="form-control">\r
    </template>\r
</pockets-ux-repeater>\r
`,qn={class:`grid-info-120`},Jn=b(`span`,null,`Layout`,-1),Yn=[`onUpdate:modelValue`],Xn=[b(`option`,{value:`tabbed`},`Tabbed`,-1),b(`option`,{value:`stacked`},`Stacked`,-1)],Zn={class:`grid-info-120`},Qn=b(`span`,null,`Min Items`,-1),$n=[`onUpdate:modelValue`],er={class:`grid-info-120`},tr=b(`span`,null,`Max Items`,-1),nr=[`onUpdate:modelValue`],rr=c({__name:`example.story`,setup(e){let t=()=>({props:{layout:`tabbed`,newItem:{test:`foo`},modelValue:[],minItems:0,maxItems:10,itemInnerClass:`p-1 bg-grey-800 text-white`}});return(e,n)=>{let r=f(`pockets-story-demo-container`);return u(),L(r,{state:x(t),html:x(Kn)},{controls:A(({state:e})=>[b(`label`,qn,[Jn,F(b(`select`,{"onUpdate:modelValue":t=>e.props.layout=t,class:`form-control`},Xn,8,Yn),[[I,e.props.layout]])]),b(`label`,Zn,[Qn,F(b(`input`,{type:`number`,"onUpdate:modelValue":t=>e.props.minItems=t,class:`form-control`},null,8,$n),[[C,e.props.minItems]])]),b(`label`,er,[tr,F(b(`input`,{type:`number`,"onUpdate:modelValue":t=>e.props.maxItems=t,class:`form-control`},null,8,nr),[[C,e.props.maxItems]])])]),_:1},8,[`state`,`html`])}}}),ir=r({__storyData:()=>or,default:()=>ar}),ar=rr,or={tag:`pockets-ux-repeater`,route:`pockets vue/components/ux/repeater/example`,component:`@pockets-components/ux/repeater/loader/loader.vue`,header:{sourceFile:`@pockets-components/ux/repeater/loader/loader.vue`,missingSourceFile:!1},storyIcon:`fa fa-code`,componentInfo:{exportName:`default`,displayName:`loader`,description:``,tags:{},props:{layout:{name:`layout`,description:`Layout of repeater`,required:!1,type:{name:`union`,elements:[{name:`"tabbed"`},{name:`"layout"`}]},defaultValue:{func:!1,value:`"tabbed"`}},maxItems:{name:`maxItems`,description:`Max number of items allowed`,required:!1,type:{name:`number`},defaultValue:{func:!1,value:`-1`}},minItems:{name:`minItems`,description:`Minimum number of items`,required:!1,type:{name:`number`},defaultValue:{func:!1,value:`-1`}},newItem:{name:`newItem`,description:`Default data that is used every time an add or clone operations occurs.
        If it's a function, it will be invoked each and every time a new item
        is added.`,required:!0,type:{name:`union`,elements:[{name:`unknown`},{name:`Function`}]}},modelValue:{name:`modelValue`,description:`Value to repeater items to.`,required:!0,type:{name:`Array`,elements:[{name:`unknown`}]}},sortableOptions:{name:`sortableOptions`,description:`Sortable options`,required:!1,type:{name:`UseSortableOptions`},defaultValue:{func:!1,value:`{\r
    handle: '.pockets-ux-repeater-item-handle',\r
    ghostClass: 'pockets-ux-repeater-item-dragging',\r
    draggable: ".pockets-ux-repeater-item"\r
}`}},itemTriggerElementShowTabIcon:{name:`itemTriggerElementShowTabIcon`,description:`If true, shows rotating arrow on item when open/closed`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`true`}},itemTriggerElement:{name:`itemTriggerElement`,description:`Element to render for item trigger`,required:!1,type:{name:`string`},defaultValue:{func:!1,value:`"button"`}}},events:{"repeater:event":{name:`repeater:event`}},slots:[{name:`afterItems`,description:`Overrides content shown after repeater items.`,tags:{binding:[{title:`binding`,type:{name:`object`},name:`api`,description:`Instance of repeater API.`}]}},{name:`beforeItems`,description:`Overrides content shown before repeater items.`,tags:{binding:[{title:`binding`,type:{name:`object`},name:`api`,description:`Instance of repeater API.`}]}},{name:`item`,description:`Used to render entries in repeater.`,tags:{binding:[{title:`binding`,type:{name:`object`},name:`api`,description:`Instance of repeater API.`},{title:`binding`,type:{name:`number`},name:`index`,description:`Index of entry in repeater.`},{title:`binding`,type:{name:`object`},name:`item`,description:`Data of entry.`}]}},{name:`itemControls`,description:`Overrides content Shown in each items controls section. Shown after item slot content.`,tags:{binding:[{title:`binding`,type:{name:`object`},name:`api`,description:`Instance of repeater API.`},{title:`binding`,type:{name:`number`},name:`index`,description:`Index of entry in repeater.`},{title:`binding`,type:{name:`object`},name:`item`,description:`Data of entry.`}]}},{name:`itemTabText`,description:`Overrides content Shown in each items tab section.`,tags:{binding:[{title:`binding`,type:{name:`object`},name:`api`,description:`Instance of repeater API.`},{title:`binding`,type:{name:`number`},name:`index`,description:`Index of entry in repeater.`},{title:`binding`,type:{name:`object`},name:`item`,description:`Data of entry.`}]}}],sourceFiles:[`C:/Users/Justin/Documents/Workspace/xampp/apps/pockets/htdocs/wp-content/plugins/pockets/vue/dev/packages/@pockets-components/ux/repeater/loader/loader.vue`]}},sr=`<pockets-ux-selectable-tags\r
    v-bind='props'\r
    v-model:search="props.search"\r
    v-model:value='props.value'\r
>\r
</pockets-ux-selectable-tags>`,cr={class:`grid columns-1 gap-1`},lr=c({__name:`example.story`,setup(e){let t=()=>({props:{modelValue:[],search:``,options:[`apples`,`bananas`,`cucumbers`,`dill pickles`,`elephants`,`fuzzy kitty cats`,`doggies`,`oranges`],value:[`apples`,`bananas`]}});return(e,n)=>{let r=f(`pockets-story-demo`),i=f(`pockets-ux-code-block`),a=f(`pockets-story-demo-container`);return u(),L(a,{state:x(t)},{default:A(({state:e})=>[b(`div`,cr,[z(r,{state:e,html:x(sr)},null,8,[`state`,`html`]),z(i,{code:e.props},null,8,[`code`])])]),_:1},8,[`state`])}}}),ur=r({__storyData:()=>fr,default:()=>dr}),dr=lr,fr={route:`pockets vue/components/ux/selectable-tags/Example`,tag:`pockets-ux-selectable-tags`,header:{sourceFile:!1,missingSourceFile:!1},storyIcon:`fa fa-code`},pr=r({__storyData:()=>mr,default:()=>hr}),mr={route:`pockets vue/components/ux/state-containers/global/about`,storyIcon:`fa fa-book`},hr=`\r
## Global State\r
##### \`\`\`pockets-global-state\`\`\`\r
\r
Global state serves as shared data accessible across any components in any app instance. This shared state is particularly useful for synchronization among different parts of your application.\r
\r
#### Injecting Global State\r
\r
You can add data that is automatically added to the client and is stored under a global variable as \`$pockets.data.your_state_key\`.\r
\r
\`\`\`php\r
<?php \r
\\pockets::inject_data('my_global_state', [\r
    'videoid' =--> "S7SLep244ss"\r
]);\r
\`\`\`\r
\r
#### Using Global State in Vue Templates\r
\r
\`\`\`html\r
<pockets-app>\r
    <pockets-global-state #default="{ my_global_state }">\r
        <div>\r
            <span>Foo is: {{my_global_state.videoid}}</span>\r
            <input v-model="my_global_state.videoid">\r
        </div>\r
        <youtube :videoid="my_global_state.videoid"></youtube>\r
    </pockets-global-state>\r
</pockets-app>\r
\`\`\`\r
 \r
`,gr=`<div class="grid columns-1 gap-2">\r
\r
    <p class='m-0'>Instance one</p>\r
\r
    <pockets-global-state\r
        #default="{ globalStateDemo: state }"\r
    >\r
        <pockets-ux-code-block :code='state'/>\r
    </pockets-global-state>\r
\r
    <p>Instance Two</p>\r
\r
    <pockets-global-state\r
        #default="{ globalStateDemo: state }"\r
    >\r
        <pockets-ux-code-block :code='state'/>\r
        <label class='grid-info-120 bg-grey-800'>\r
            <span class='p-2'>Foo</span>\r
            <div class='p-1 bg-black'>\r
\r
                <input v-model="state.foo" class="form-control" placeholder='Enter text...'>\r
            </div>\r
        </label>\r
    </pockets-global-state>\r
\r
</div>\r
`,_r=b(`p`,null,` Global State `,-1),vr=c({__name:`global-state.story`,setup(e){return d(()=>{re.data.globalStateDemo={foo:`bar`}}),o(()=>{delete re.data.globalStateDemo}),(e,t)=>{let n=f(`pockets-ux-code-block`),r=f(`pockets-story-demo`),i=f(`pockets-story-demo-container`);return u(),L(i,null,{default:A(()=>[z(r,{html:x(gr)},{props:A(()=>[_r,z(n,{code:x(re).data.globalState},null,8,[`code`])]),_:1},8,[`html`])]),_:1})}}}),yr=r({__storyData:()=>xr,default:()=>br}),br=vr,xr={tag:`pockets-global-state`,route:`pockets vue/components/ux/state-containers/global/example`,component:`@pockets-components/UX/state-containers/components/subscribe-data.vue`,header:{sourceFile:`@pockets-components/UX/state-containers/components/subscribe-data.vue`,missingSourceFile:!1},storyIcon:`fa fa-code`,componentInfo:{exportName:`default`,displayName:`subscribe-data`,description:``,tags:{},props:{},events:{},slots:[{name:`default`,scoped:!0,bindings:[],description:`Any state on $pockets.data can be accessed inside this slot.`}],sourceFiles:[`C:/Users/Justin/Documents/Workspace/xampp/apps/pockets/htdocs/wp-content/plugins/pockets/vue/dev/packages/@pockets-components/UX/state-containers/components/subscribe-data.vue`]}},Sr=r({__storyData:()=>Cr,default:()=>wr}),Cr={route:`pockets vue/components/ux/state-containers/local/about`,storyIcon:`fa fa-book`},wr=`\r
## Local State\r
#### \`\`\`pockets-local-state\`\`\`\r
\r
Local state is confined to a specific template instance, providing encapsulated data management for individual templates. This is particularly useful when you want to maintain state locally within a template without affecting the global state. Any properties you add to the \`<pockets-local-state>\` container will automatically be bound to the state object.\r
\r
#### Using Local State in Vue Templates\r
\r
\`\`\`html\r
<pockets-app>\r
    <pockets-local-state videoid="S7SLep244ss" #default="{ state }">\r
        <div>\r
            <span>Video ID is: {{state.videoid}}</span>\r
            <input v-model="state.videoid">\r
        </div>\r
        <youtube :videoid="state.videoid"></youtube>\r
    </pockets-local-state>\r
</pockets-app>\r
\`\`\`\r
 `,Tr=`<pockets-local-state\r
    v-bind="props"\r
    #default="{ state:local }"\r
>\r
    <div class="grid gap-2 columns-1">\r
        <pockets-ux-code-block\r
            :code='local'\r
        />\r
        <input v-model="local.test" class="form-control" placeholder='Enter text...'>\r
    </div>\r
</pockets-local-state>`,Er=()=>({props:{test:`hello world`}}),Dr=r({__storyData:()=>Ar,default:()=>kr}),Or=b(`p`,null,` Local State changes do not emit up. In this instance the passed down state remains unchanged. `,-1),kr={__name:`local-state.story`,setup(e){return(e,t)=>{let n=f(`pockets-ux-code-block`),r=f(`pockets-story-demo`),i=f(`pockets-story-demo-container`);return u(),L(i,{state:x(Er)},{default:A(({state:e})=>[z(r,{html:x(Tr),state:e},{props:A(()=>[Or,z(n,{code:e.props},null,8,[`code`])]),_:2},1032,[`html`,`state`])]),_:1},8,[`state`])}}},Ar={route:`pockets vue/components/ux/state-containers/local/example`,tag:`pockets-local-state`,component:`@pockets-components/ux/state-containers/components/provide-state.vue`,header:{sourceFile:`@pockets-components/ux/state-containers/components/provide-state.vue`,missingSourceFile:!1},storyIcon:`fa fa-code`,componentInfo:{exportName:`default`,displayName:`provide-state`,description:``,tags:{},props:{},events:{},slots:[{name:`default`,scoped:!0,bindings:[{name:`state`,title:`binding`}],description:`Provides state to content in slot.`,tags:{binding:[{title:`binding`,type:{name:`reactive`},name:`state`,description:`This will be a reactive using all props added to the component. For example you could add a prop of foo='bar' and it would be accessible as state.foo.`}]}}],sourceFiles:[`C:/Users/Justin/Documents/Workspace/xampp/apps/pockets/htdocs/wp-content/plugins/pockets/vue/dev/packages/@pockets-components/ux/state-containers/components/provide-state.vue`]}},jr=r({__storyData:()=>Mr,default:()=>Nr}),Mr={route:`pockets vue/components/ux/state-containers/temporary/about`,storyIcon:`fa fa-book`},Nr="\r\n## Temporary State\r\n#### ```pockets-temp-state```\r\n\r\nTemporary state, works sort of like the local state container, except that it does one-way binding. It takes props you give it and creates state from it. \r\nIt provides an api with the temp ```state```, as well an ```update``` and ```cancel```.\r\n\r\nTo pass in data, you use the ```v-model:select``` property. \r\n\r\nWhen you fire the ```update``` method, local changes are emitted to update the state passed in. If you fire the ```cancel``` method, the temp state will revert back to the current state passed in.\r\n\r\nThe api also has a ```hasChanges<boolean>``` property that returns true when the temp state has been changed. This will reset to false when the ```update``` or ```cancel``` methods are called.\r\n\r\n#### Using Temp State in Vue Templates\r\n\r\n```html\r\n<pockets-app>\r\n    <pockets-temp-state \r\n        v-model:select=\"{videoid: 'S7SLep244ss'}\" \r\n        #default=\"{ state, update, cancel, hasChanges }\"\r\n    >\r\n        <div>\r\n            <span>Video ID is: {{state.videoid}}</span>\r\n            <input v-model=\"state.videoid\">\r\n        </div>\r\n        <youtube :videoid=\"state.videoid\"></youtube>\r\n        <button @click='update' :disabled='!hasChanges'>Update</button>\r\n        <button @click='cancel' :disabled='!hasChanges'>Cancel</button>\r\n    </pockets-temp-state>\r\n</pockets-app>\r\n```\r\n ",Pr=`<div class='grid columns-1 gap-2'>\r
    <p>\r
        This is the original state. It will only change when\r
        you click update. \r
    </p>\r
    <pockets-ux-code-block :code='props.state' />\r
    <pockets-temp-state\r
        v-model:state="props.state"\r
        #default="{ state:temp, update, cancel, hasChanges }"\r
    >\r
        <p>\r
            This is the temporary state. Changes made only affect\r
            the temporary state until you hit update. You can also click the \r
            cancel button to revert back to the data that's passed in.\r
        </p>\r
        <label class="grid gap-2 columns-1">\r
            <pockets-ux-code-block :code='temp' />\r
            <input v-model="temp.test" class="form-control" placeholder='Enter text...'>\r
        </label>\r
        <div class="grid columns-2 gap-2">\r
            <button \r
                @click="update"\r
                class="btn btn-confirm p-2"\r
                :disabled="!hasChanges"\r
            >Update</button>\r
            <button \r
                @click="cancel"\r
                class="btn btn-danger p-2 text-white"\r
                :disabled="!hasChanges"\r
            >Cancel</button>\r
        </div>\r
    </pockets-temp-state>\r
</div>`,Fr=r({__storyData:()=>Lr,default:()=>Ir}),Ir={__name:`temp-state.story`,setup(e){let t=()=>({props:{state:{test:`hello world`}}});return(e,n)=>{let r=f(`pockets-story-demo-container`);return u(),L(r,{state:x(t),html:x(Pr)},null,8,[`state`,`html`])}}},Lr={tag:`pockets-temp-state`,route:`pockets vue/components/ux/state-containers/temporary/example`,header:{sourceFile:!1,missingSourceFile:!1},storyIcon:`fa fa-code`},Rr=`<div>\r
    <pockets-ux-time-input v-model='props.time'/>\r
</div>`,zr=c({__name:`example.story`,setup(e){let t={props:{time:`68120`}};return(e,n)=>{let r=f(`pockets-story-demo`),i=f(`pockets-story-demo-container`);return u(),L(i,{state:x(t)},{default:A(({state:e})=>[z(r,{html:x(Rr),state:e},null,8,[`html`,`state`])]),_:1},8,[`state`])}}}),Br=r({__storyData:()=>Hr,default:()=>Vr}),Vr=zr,Hr={route:`pockets vue/components/ux/time-input/example-component`,header:{sourceFile:!1,missingSourceFile:!1},storyIcon:`fa fa-code`},Ur=r({__storyData:()=>Wr,default:()=>Gr}),Wr={group:`components`,title:`ux/WP Object Selector/About`,storyIcon:`fa fa-book`},Gr=`\r
## Wp Object Selector\r
#### \`wp-object-selector\`\r
\r
Wp Object Selector is a component that creates a UX for displaying/selecting various WP content, such as posts, terms and images. `,Kr=`<div class='grid gap-2'>\r
    <wp-object-selector\r
        v-model:selected='props.selected'\r
        class='bg-grey-800 mx-auto mw-md overflow-hidden col-12 p-2'\r
        style='min-width: 100px; min-height: 100px'\r
        name='post[image]'\r
    >\r
        <template #default='api'>\r
            <div\r
                class='grid columns-1 gap-2 bg-grey-600 p-4'\r
            >\r
                <pockets-crud-connection\r
                    v-bind='{\r
                        "model": "image",\r
                        "action": "read",\r
                        "init": api.selected,\r
                        "input": {\r
                            "url": {\r
                                "size": "large",\r
                                "fallback": props.placeholder\r
                            },\r
                        },\r
                    }'\r
                    :caching-enabled="true"\r
                    :clear-on-load="false"\r
                    :key='api.selected'\r
                    #default='{ results, loading }'\r
                >\r
                    <div\r
                        class='bg-grey-800 grid columns-1 gap-2 p-2 border border-5 border-primary-dk loading-container mx-auto'\r
                        :loading='loading'\r
                        role='button'\r
                    >\r
                        <img\r
                            v-if='results?.url'\r
                            :src='results.url' \r
                            class='img-fluid mx-auto mh-150px'\r
                        >\r
                        <div\r
                            v-else\r
                            class='text-white fs-24'\r
                        >\r
                            Select an image...\r
                        </div>\r
                        \r
                    </div>\r
                </pockets-crud-connection>\r
            </div>\r
        </template>\r
        <template #after='api'>\r
            <div class='d-flex justify-content-end'>\r
\r
                <button \r
                    type='button' \r
                    @click.prevent='() => api.setSelected(0)'\r
                    class='btn btn-outline-danger px-6 py-1'\r
                >Clear</button>\r
            </div>\r
        </template>\r
    </wp-object-selector>\r
</div>`,qr=c({__name:`example.story`,setup(e){let t=()=>({props:{placeholder:`https://placehold.co/600x400`,selected:!1}});return(e,n)=>{let r=f(`render-html`),i=f(`pockets-story-demo`),a=f(`pockets-story-demo-container`);return u(),L(a,{state:x(t),html:x(Kr)},{default:A(({state:e})=>[z(i,{html:x(Kr),state:e},{demo:A(()=>[z(r,{innerHTML:x(Kr),state:e},null,8,[`innerHTML`,`state`])]),_:2},1032,[`html`,`state`])]),_:1},8,[`state`,`html`])}}}),Jr=r({__storyData:()=>Xr,default:()=>Yr}),Yr=qr,Xr={tag:`wp-object-selector`,route:`pockets vue/components/ux/WP Object Selector/Example`,component:`@pockets-components/UX/wp-object-selector/index.vue`,header:{sourceFile:`@pockets-components/UX/wp-object-selector/index.vue`,missingSourceFile:!1},storyIcon:`fa fa-code`,componentInfo:{exportName:`default`,displayName:`wp-object-selector`,description:``,tags:{},props:{clearable:{name:`clearable`,description:`Flags whether selections can be claared.`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`false`}},selected:{name:`selected`,description:`Main binding for value that is changed.`,required:!1,type:{name:`union`,elements:[{name:`Array`,elements:[{name:`number`}]},{name:`Array`,elements:[{name:`string`}]},{name:`number`},{name:`null`},{name:`boolean`},{name:`string`}]},defaultValue:{func:!1,value:`null`}},multiple:{name:`multiple`,description:`Enable multiple selections`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`false`}},cachingEnabled:{name:`cachingEnabled`,description:`Enable caching on connection.`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`true`}},query:{name:`query`,description:`CRUD query`,required:!1,type:{name:`crudConnection`},defaultValue:{func:!1,value:`() => ({\r
  model: "images",\r
  action: 'read',\r
  init: {\r
    post_type: "attachment",\r
    post_mime_type: 'image',\r
    post_status: 'inherit',\r
    posts_per_page: 20,\r
    paged: 1\r
  },\r
  input: {\r
    items: {\r
      url: {\r
        size: "thumnail"\r
      },\r
      ID: ""\r
    },\r
    pagination: ''\r
  }\r
})`}},busy:{name:`busy`,description:`External flag that can be used in render.`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`false`}},name:{name:`name`,description:`If true, will render a hidden input using this name with the selected value.
        If multiple is true, it will render an input for each entry in selected.`,required:!1,type:{name:`union`,elements:[{name:`false`},{name:`string`}]},defaultValue:{func:!1,value:`false`}},layout:{name:`layout`,description:`Layout component used to render`,required:!1,type:{name:`Layouts`},defaultValue:{func:!1,value:`"default"`}}},events:{},slots:[{name:`name`,scoped:!0,bindings:[{name:`name`,title:`binding`}]},{name:`controls`,description:`Overrides content shown in each items controls section. Shown after item slot content.`,tags:{binding:[{title:`binding`,type:{name:`object`},name:`api`,description:`Instance of repeater API.`},{title:`binding`,type:{name:`number`},name:`index`,description:`Index of entry in repeater.`},{title:`binding`,type:{name:`object`},name:`item`,description:`Data of entry.`}]}},{name:`default`,description:`Overrides default content.`,tags:{binding:[{title:`binding`,type:{name:`object`},name:`api`,description:`Instance of repeater API.`},{title:`binding`,type:{name:`number`},name:`index`,description:`Index of entry in repeater.`},{title:`binding`,type:{name:`object`},name:`item`,description:`Data of entry.`}]}},{name:`before`,description:`Overrides content shown before items`,tags:{binding:[{title:`binding`,type:{name:`object`},name:`api`,description:`Instance of repeater API.`},{title:`binding`,type:{name:`number`},name:`index`,description:`Index of entry in repeater.`},{title:`binding`,type:{name:`object`},name:`item`,description:`Data of entry.`}]}},{name:`after`,description:`Overrides content shown fter items`,tags:{binding:[{title:`binding`,type:{name:`object`},name:`api`,description:`Instance of repeater API.`},{title:`binding`,type:{name:`number`},name:`index`,description:`Index of entry in repeater.`},{title:`binding`,type:{name:`object`},name:`item`,description:`Data of entry.`}]}}],sourceFiles:[`C:/Users/Justin/Documents/Workspace/xampp/apps/pockets/htdocs/wp-content/plugins/pockets/vue/dev/packages/@pockets-components/UX/wp-object-selector/index.vue`]}},Zr=r({__storyData:()=>Qr,default:()=>$r}),Qr={route:`pockets vue/components/accordion/about`,title:`About`,storyIcon:`fa fa-book`},$r="\r\n## Pockets Accordion\r\n### ```pockets-accordion```\r\n\r\nThis component consists of four main elements:\r\n\r\n1. **pockets-accordion**: The container for the entire accordion.\r\n2. **pockets-accordion-item**: Each individual section within the accordion.\r\n3. **pockets-accordion-trigger**: The button or header that triggers the expansion or collapse of the content.\r\n4. **pockets-accordion-content**: The content area that is shown or hidden.\r\n\r\nAll elements share the same set of properties, and configuration for `item/trigger/content` components can be applied to any of them. These configurations are automatically inherited by their children. For example you can apply options to the ```pockets-accordion``` and all \r\n```item/trigger/content``` elements will inherit those options. You could then apply different options on the ```item``` element and the ```trigger/content``` elements inside it would inherit those options.\r\n\r\n### Setting Accordion Options\r\n\r\nSetting Options is primarily done on the `pockets-accordion` component. The component\r\nstarts with default values for each option. You can override the default options on any child accordion components. Any overrides applied will flow downwards, applying to all nested children of the component containing overriden options.",ei={class:`grid-info-120`},ti=b(`span`,null,`Mode`,-1),ni={key:0,class:`grid-info-120`,role:`button`},ri=b(`span`,null,`Min open`,-1),ii={class:`grid columns-2 gap-2`},ai={class:`grid columns-1 gap-2`},oi={class:`grid-info-120`},si=[`onUpdate:modelValue`],ci={class:`grid columns-1 gap-2`},li={class:`grid-info-120`},ui=[`onUpdate:modelValue`],di={__name:`controls`,props:{state:{},tabs:{type:Array,default:()=>[`accordion-options`,`overide-options`]}},setup(e){let t=w([`accordion-options`]);return(n,r)=>{let i=f(`pockets-accordion-trigger`),a=f(`pockets-accordion-content`),o=f(`pockets-accordion`);return u(),S(E,null,[b(`label`,ei,[ti,b(`button`,{onClick:r[0]||=t=>e.state.props.mode=e.state.props.mode==`single`?`multiple`:`single`,class:`btn btn-accent-dk text-capitalize`},B(e.state.props.mode),1)]),e.state.props.mode==`single`?(u(),S(`label`,ni,[ri,F(b(`input`,{type:`checkbox`,"true-value":1,"false-value":0,"onUpdate:modelValue":r[1]||=t=>e.state.props.minOpen=t,class:`form-control-switch ms-auto fs-30`},null,512),[[j,e.state.props.minOpen]])])):V(``,!0),z(o,{"trigger-options":{class:`btn btn-grey-700 text-start rounded-0 p-1`,open:`active`},"content-options":{class:`grid columns-1 gap-2`,open:`p-2 bg-grey-800`},open:x(t),"min-open":1},{default:A(()=>[b(`div`,ii,[e.tabs.includes(`accordion-options`)?(u(),L(i,{key:0,ID:`accordion-options`},{default:A(()=>[s(` Edit Accordion Options `)]),_:1})):V(``,!0),e.tabs.includes(`overide-options`)?(u(),L(i,{key:1,ID:`overide-options`},{default:A(()=>[s(` Edit Override Options `)]),_:1})):V(``,!0)]),e.tabs.includes(`accordion-options`)?(u(),L(a,{key:0,ID:`accordion-options`,class:``},{default:A(()=>[(u(!0),S(E,null,p(e.state.props.accordion,(t,n)=>(u(),S(`div`,ai,[b(`span`,null,B(n),1),(u(!0),S(E,null,p(t,(t,r)=>(u(),S(`div`,null,[b(`label`,oi,[b(`span`,null,B(r),1),F(b(`input`,{"onUpdate:modelValue":t=>e.state.props.accordion[n][r]=t,class:`form-control`},null,8,si),[[C,e.state.props.accordion[n][r]]])])]))),256))]))),256))]),_:1})):V(``,!0),e.tabs.includes(`overide-options`)?(u(),L(a,{key:1,ID:`overide-options`},{default:A(()=>[(u(!0),S(E,null,p(e.state.props.options,(t,n)=>(u(),S(`div`,ci,[b(`span`,null,B(n),1),(u(!0),S(E,null,p(t,(t,r)=>(u(),S(`div`,null,[b(`label`,li,[b(`span`,null,B(r),1),F(b(`input`,{"onUpdate:modelValue":t=>e.state.props.options[n][r]=t,class:`form-control`},null,8,ui),[[C,e.state.props.options[n][r]]])])]))),256))]))),256))]),_:1})):V(``,!0)]),_:1},8,[`open`])],64)}}},fi=()=>({props:{mode:`single`,minOpen:0,accordion:{triggerOptions:{open:`active`,closed:``,class:`btn btn-accent-dk`},itemOptions:{open:``,closed:``,class:`bg-accent-dk border border-5 border-accent-md`},contentOptions:{open:``,closed:``,class:`p-2 bg-white text-black`}},options:{triggerOptions:{open:`active`,closed:``,class:`btn btn-primary-dk`},itemOptions:{open:``,closed:``,class:`bg-accent-dk border border-5 border-accent-md`},contentOptions:{open:``,closed:``,class:`p-2 bg-black`}}}}),pi=`<pockets-accordion \r
    v-bind="props.accordion"\r
    :mode="props.mode"\r
    :min-open="props.minOpen"\r
    class="grid columns-1 gap-0 text-start"\r
    #default="accordion"\r
>\r
    <pockets-accordion-item\r
        ID="Example A"\r
    >\r
        <pockets-accordion-trigger\r
            class="col-12 rounded-0 text-start"\r
        >\r
            Click Me\r
        </pockets-accordion-trigger>\r
        <pockets-accordion-content>\r
            Content\r
        </pockets-accordion-content>\r
    </pockets-accordion-item>\r
\r
    <pockets-accordion-item \r
        ID="Example B" \r
    >\r
        <pockets-accordion-trigger\r
            class="col-12 rounded-0 text-start"\r
        >\r
            Click Me\r
        </pockets-accordion-trigger>\r
        <pockets-accordion-content >\r
            I am content\r
        </pockets-accordion-content>\r
    </pockets-accordion-item>\r
\r
    <pockets-accordion-item\r
        ID="Example C"\r
    >\r
        <pockets-accordion-trigger\r
            class="col-12 rounded-0 text-start"\r
        >\r
            Click Me\r
        </pockets-accordion-trigger>\r
        <pockets-accordion-content \r
        >\r
            <pockets-accordion-item ID="nested.a" v-if="accordion.mode=='multiple'">\r
                <pockets-accordion-trigger\r
                    class="col-12 rounded-0 text-start"\r
                >\r
                    Click Me\r
                </pockets-accordion-trigger>\r
                <pockets-accordion-content>\r
                    I am nested\r
                </pockets-accordion-content>\r
            </pockets-accordion-item>\r
            <div v-else>\r
                Nesting is only supported in multiple mode. Switch modes to see the nested content.\r
                \r
            </div>\r
\r
        </pockets-accordion-content>\r
    </pockets-accordion-item>\r
    <div class="grid columns-2 gap-2 pt-2" v-if="accordion.mode =='multiple'">\r
        <button \r
            @click="accordion.openAll()"\r
            class="btn btn-outline-confirm p-2"\r
        >\r
            Open All\r
        </button>\r
        <button \r
            @click="accordion.closeAll()"\r
            class="btn btn-outline-danger p-2"\r
        >\r
            Close All\r
        </button>\r
    </div>\r
</pockets-accordion>`,mi=c({__name:`basic-example.story`,setup(e){let t=()=>{let e=fi();return e.props.mode=`multiple`,e};return(e,n)=>{let r=f(`pockets-story-demo-container`);return u(),L(r,{state:x(t)(),html:x(pi)},{controls:A(({state:e})=>[z(di,{state:e,tabs:[`accordion-options`]},null,8,[`state`])]),_:1},8,[`state`,`html`])}}}),hi=r({__storyData:()=>_i,default:()=>gi}),gi=mi,_i={route:`pockets vue/components/accordion/basic-example`,tag:`pockets-accordion`,component:`@pockets-components/accordion/components/container.vue`,header:{sourceFile:`@pockets-components/accordion/components/container.vue`,missingSourceFile:!1},storyIcon:`fa fa-code`,componentInfo:{exportName:`default`,displayName:`container`,description:``,tags:{},props:{tag:{name:`tag`,description:`Should be a valid html element. Determines what element is used when rendering accordion element.`,required:!1,type:{name:`string`},defaultValue:{func:!1,value:`'div'`}},ID:{name:`ID`,tags:{deprecated:[{description:`DO NOT USE. Use accordionID instead

        Should be a unique key. Used to link accordion elements together. For example trigger and content elements can be linked via an ID, so that clicking on the trigger will open the content element with the same ID. You can set the ID on an accordion-item element and it will automatically pass down to all child accordion elements.`,title:`deprecated`}]},required:!1,type:{name:`union`,elements:[{name:`string`},{name:`number`}]}},accordionId:{name:`accordionId`,description:`Should be a unique key. Used to link accordion elements together. For example trigger and content elements can be linked via an ID, so that clicking on the trigger will open the content element with the same ID. You can set the ID on an accordion-item element and it will automatically pass down to all child accordion elements.`,required:!1,type:{name:`union`,elements:[{name:`string`},{name:`number`}]}},trigger:{name:`trigger`,description:`If set to true, clicking the accordion element will trigger opening its ID.`,required:!1,type:{name:`boolean`}},minOpen:{name:`minOpen`,description:`The minimum amount of accordion ID's that can should remain open.
        If higher than 0, clicked tabs will not close
        if ihe open item count is less than or equal this number`,required:!1,type:{name:`number`},defaultValue:{func:!1,value:`0`}},mode:{name:`mode`,description:`Should be either single or multiple. If set to single, only one accordion ID can be open at a time.`,required:!1,type:{name:`union`,elements:[{name:`"single"`},{name:`"multiple"`}]},defaultValue:{func:!1,value:`"single"`}},open:{name:`open`,description:`List of open accordion ID's. You can add ID's to this list to start with those sections open.`,required:!1,type:{name:`Array`,elements:[{name:`TSIndexedAccessType`}]}},itemOptions:{name:`itemOptions`,description:`Controls options for accordion-item elements.`,required:!1,type:{name:`$option`},defaultValue:{func:!1,value:`{\r
    open: "item-open",\r
    closed: "item-closed",\r
    class: "accordion-item"\r
}`}},triggerOptions:{name:`triggerOptions`,description:`Controls options for accordion-trigger elements.`,required:!1,type:{name:`$option`},defaultValue:{func:!1,value:`{\r
    open: "trigger-open",\r
    closed: "trigger-closed",\r
    class: "accordion-trigger"\r
}`}},contentOptions:{name:`contentOptions`,description:`Controls options for accordion-content elements`,required:!1,type:{name:`$option`},defaultValue:{func:!1,value:`{\r
    open: "content-open",\r
    closed: "content-closed",\r
    class: "accordion-content"\r
}`}}},events:{},slots:[{name:`default`,scoped:!0,bindings:[],description:`Provides an api for the accordion.`,tags:{binding:[{title:`binding`,type:{name:`function`},name:`closeAll`,description:`Closes all ID's`},{title:`binding`,type:{name:`function`},name:`openAll`,description:`Opens all ID's`},{title:`binding`,type:{name:`function( ID: string | number )`},name:`trigger`,description:`Toggles ID`},{title:`binding`,type:{name:`array`},name:`open`,description:`List of open ID's`}]}}],sourceFiles:[`C:/Users/Justin/Documents/Workspace/xampp/apps/pockets/htdocs/wp-content/plugins/pockets/vue/dev/packages/@pockets-components/accordion/components/container.vue`]}},vi=`<pockets-accordion \r
    v-bind="props.accordion"\r
    :mode="props.mode"\r
    :min-open="props.minOpen"\r
    class="grid columns-1 gap-2 text-start"\r
>\r
    \r
    <span>Using options set on accordion</span>\r
\r
    <pockets-accordion-item\r
        ID="Example A"\r
    >\r
        <pockets-accordion-trigger\r
            class="col-12 rounded-0 text-start"\r
        >\r
            Click Me\r
        </pockets-accordion-trigger>\r
        <pockets-accordion-content>\r
            Content\r
        </pockets-accordion-content>\r
    </pockets-accordion-item>\r
    \r
    <span>Using options set on item</span>\r
\r
    <pockets-accordion-item \r
        ID="Example B" \r
        v-bind="props.options"\r
    >\r
        <pockets-accordion-trigger\r
            class="col-12 rounded-0 text-start"\r
        >\r
            Click Me\r
        </pockets-accordion-trigger>\r
        <pockets-accordion-content >\r
            I am content\r
        </pockets-accordion-content>\r
    </pockets-accordion-item>\r
\r
    <span>Using options set on trigger & content</span>\r
\r
    <pockets-accordion-item>\r
        <pockets-accordion-trigger\r
            :trigger-options="props.options.triggerOptions"\r
            class="col-12 rounded-0 text-start"\r
        >\r
            Click Me\r
        </pockets-accordion-trigger>\r
        <pockets-accordion-content \r
            :content-options="props.options.contentOptions"\r
        >\r
            I am content\r
        </pockets-accordion-content>\r
    </pockets-accordion-item>\r
\r
</pockets-accordion>`,yi=c({__name:`setting-options.story`,setup(e){return(e,t)=>{let n=f(`pockets-story-demo-container`);return u(),L(n,{state:x(fi)(),html:x(vi)},{controls:A(({state:e})=>[z(di,{state:e},null,8,[`state`])]),_:1},8,[`state`,`html`])}}}),bi=r({__storyData:()=>Si,default:()=>xi}),xi=yi,Si={tag:`pockets-accordion`,route:`pockets vue/components/accordion/Settings`,component:`@pockets-components/accordion/components/container.vue`,header:{sourceFile:`@pockets-components/accordion/components/container.vue`,missingSourceFile:!1},storyIcon:`fa fa-code`,componentInfo:{exportName:`default`,displayName:`container`,description:``,tags:{},props:{tag:{name:`tag`,description:`Should be a valid html element. Determines what element is used when rendering accordion element.`,required:!1,type:{name:`string`},defaultValue:{func:!1,value:`'div'`}},ID:{name:`ID`,tags:{deprecated:[{description:`DO NOT USE. Use accordionID instead

        Should be a unique key. Used to link accordion elements together. For example trigger and content elements can be linked via an ID, so that clicking on the trigger will open the content element with the same ID. You can set the ID on an accordion-item element and it will automatically pass down to all child accordion elements.`,title:`deprecated`}]},required:!1,type:{name:`union`,elements:[{name:`string`},{name:`number`}]}},accordionId:{name:`accordionId`,description:`Should be a unique key. Used to link accordion elements together. For example trigger and content elements can be linked via an ID, so that clicking on the trigger will open the content element with the same ID. You can set the ID on an accordion-item element and it will automatically pass down to all child accordion elements.`,required:!1,type:{name:`union`,elements:[{name:`string`},{name:`number`}]}},trigger:{name:`trigger`,description:`If set to true, clicking the accordion element will trigger opening its ID.`,required:!1,type:{name:`boolean`}},minOpen:{name:`minOpen`,description:`The minimum amount of accordion ID's that can should remain open.
        If higher than 0, clicked tabs will not close
        if ihe open item count is less than or equal this number`,required:!1,type:{name:`number`},defaultValue:{func:!1,value:`0`}},mode:{name:`mode`,description:`Should be either single or multiple. If set to single, only one accordion ID can be open at a time.`,required:!1,type:{name:`union`,elements:[{name:`"single"`},{name:`"multiple"`}]},defaultValue:{func:!1,value:`"single"`}},open:{name:`open`,description:`List of open accordion ID's. You can add ID's to this list to start with those sections open.`,required:!1,type:{name:`Array`,elements:[{name:`TSIndexedAccessType`}]}},itemOptions:{name:`itemOptions`,description:`Controls options for accordion-item elements.`,required:!1,type:{name:`$option`},defaultValue:{func:!1,value:`{\r
    open: "item-open",\r
    closed: "item-closed",\r
    class: "accordion-item"\r
}`}},triggerOptions:{name:`triggerOptions`,description:`Controls options for accordion-trigger elements.`,required:!1,type:{name:`$option`},defaultValue:{func:!1,value:`{\r
    open: "trigger-open",\r
    closed: "trigger-closed",\r
    class: "accordion-trigger"\r
}`}},contentOptions:{name:`contentOptions`,description:`Controls options for accordion-content elements`,required:!1,type:{name:`$option`},defaultValue:{func:!1,value:`{\r
    open: "content-open",\r
    closed: "content-closed",\r
    class: "accordion-content"\r
}`}}},events:{},slots:[{name:`default`,scoped:!0,bindings:[],description:`Provides an api for the accordion.`,tags:{binding:[{title:`binding`,type:{name:`function`},name:`closeAll`,description:`Closes all ID's`},{title:`binding`,type:{name:`function`},name:`openAll`,description:`Opens all ID's`},{title:`binding`,type:{name:`function( ID: string | number )`},name:`trigger`,description:`Toggles ID`},{title:`binding`,type:{name:`array`},name:`open`,description:`List of open ID's`}]}}],sourceFiles:[`C:/Users/Justin/Documents/Workspace/xampp/apps/pockets/htdocs/wp-content/plugins/pockets/vue/dev/packages/@pockets-components/accordion/components/container.vue`]}},Ci=`\r
<pockets-drawer class='gap-1 grid cq'>\r
\r
    <pockets-drawer-panel direction='vertical'>\r
        <div style='overflow: hidden; grid-template-columns: 1fr; display: grid'>\r
            <div class='p-4 bg-grey-800 text-white'>\r
                Hello world, I open veritcally\r
            </div>\r
        </div>\r
    </pockets-drawer-panel>\r
\r
    <pockets-drawer-panel style='--expand: 100cqw; --collapse: 0cqw'>\r
        <div style='overflow: hidden; grid-template-columns: var(--expand); display: grid'>\r
            <div class='p-4 bg-grey-800 text-white'>\r
                Hello world, I open horizontally\r
            </div>\r
        </div>\r
    </pockets-drawer-panel>\r
    \r
    <div class='d-flex justify-content-end'>\r
        <pockets-drawer-trigger #default='{ drawer }' class='btn btn-grey-900 p-2'>\r
            {{drawer.open ? "Close" : "Open" }} Drawer\r
        </pockets-drawer-trigger>\r
    </div>\r
\r
</pockets-drawer>\r
`,wi=c({__name:`container-component.story`,setup(e){let t={props:{}};return(e,n)=>{let r=f(`pockets-story-demo-container`);return u(),L(r,{state:x(t),html:x(Ci)},null,8,[`state`,`html`])}}}),Ti=r({__storyData:()=>Di,default:()=>Ei}),Ei=wi,Di={route:`pockets vue/components/drawer/container`,tag:`pockets-drawer`,component:`@pockets-components/drawer/components/container/index.vue`,header:{sourceFile:`@pockets-components/drawer/components/container/index.vue`,missingSourceFile:!1},storyIcon:`fa fa-code`,componentInfo:{description:`\r
  The main container for the drawerer. Holds state and provides an api\r
  to the panel/trigger components.  \r
`,exportName:`default`,displayName:`container`,tags:{},props:{tag:{name:`tag`,description:`Used as element for container. aaaaa`,required:!1,type:{name:`string`},defaultValue:{func:!1,value:`"div"`}}},events:{},slots:[{name:`default`,scoped:!0,bindings:[],description:`Provides an api for the drawer.`,tags:{binding:[{title:`binding`,type:{name:` reactive `},name:`drawer`,description:`A reactive object that contains state for the drawer`},{title:`binding`,type:{name:` .open boolean `},name:`drawer`,description:`whether the drawer is open  or not.`}]}}],sourceFiles:[`C:/Users/Justin/Documents/Workspace/xampp/apps/pockets/htdocs/wp-content/plugins/pockets/vue/dev/packages/@pockets-components/drawer/components/container/index.vue`]}},Oi=c({__name:`panel-component.story`,setup(e){let t={props:{}};return(e,n)=>{let r=f(`pockets-story-demo-container`);return u(),L(r,{state:x(t),html:x(Ci)},null,8,[`state`,`html`])}}}),ki=r({__storyData:()=>ji,default:()=>Ai}),Ai=Oi,ji={route:`pockets vue/components/drawer/panel`,tag:`pockets-drawer-panel`,component:`@pockets-components/drawer/components/panel/index.vue`,header:{sourceFile:`@pockets-components/drawer/components/panel/index.vue`,missingSourceFile:!1},storyIcon:`fa fa-code`,componentInfo:{exportName:`default`,displayName:`panel`,description:``,tags:{},props:{direction:{name:`direction`,description:`Determins direction panel expands/collapses.
    Vertical = grid-template-rows, horizontal = grid-template-columns
    You can control the dimensions of the expand/collapse by passing the following as style properties:
    --expand: {value} default - 1fr
    --collapse: {value} default - 0fr`,required:!1,type:{name:`union`,elements:[{name:`"vertical"`},{name:`"horizontal"`}]},defaultValue:{func:!1,value:`"horizontal"`}},tag:{name:`tag`,description:`Used as element for container.`,required:!1,type:{name:`string`},defaultValue:{func:!1,value:`"div"`}}},events:{},slots:[{name:`default`,scoped:!0,bindings:[{name:`drawer`,title:`binding`}],description:`Provides an api for the drawer.`,tags:{binding:[{title:`binding`,type:{name:` reactive `},name:`drawer`,description:`A reactive object that contains state for the drawer`},{title:`binding`,type:{name:` .open boolean `},name:`drawer`,description:`whether the drawer is open  or not.`}]}}],sourceFiles:[`C:/Users/Justin/Documents/Workspace/xampp/apps/pockets/htdocs/wp-content/plugins/pockets/vue/dev/packages/@pockets-components/drawer/components/panel/index.vue`]}},Mi=c({__name:`trigger-component.story`,setup(e){let t={props:{}};return(e,n)=>{let r=f(`pockets-story-demo-container`);return u(),L(r,{state:x(t),html:x(Ci)},null,8,[`state`,`html`])}}}),Ni=r({__storyData:()=>Fi,default:()=>Pi}),Pi=Mi,Fi={route:`pockets vue/components/drawer/trigger`,tag:`pockets-drawer-trigger`,component:`@pockets-components/drawer/components/trigger/index.vue`,header:{sourceFile:`@pockets-components/drawer/components/trigger/index.vue`,missingSourceFile:!1},storyIcon:`fa fa-code`,componentInfo:{exportName:`default`,displayName:`trigger`,description:``,tags:{},props:{tag:{name:`tag`,description:`Used as element for container.`,required:!1,type:{name:`string`},defaultValue:{func:!1,value:`"button"`}}},events:{},slots:[{name:`default`,scoped:!0,bindings:[{name:`drawer`,title:`binding`}],description:`Provides an api for the drawer.`,tags:{binding:[{title:`binding`,type:{name:` reactive `},name:`drawer`,description:`A reactive object that contains state for the drawer`},{title:`binding`,type:{name:` .open boolean `},name:`drawer`,description:`whether the drawer is open  or not.`}]}}],sourceFiles:[`C:/Users/Justin/Documents/Workspace/xampp/apps/pockets/htdocs/wp-content/plugins/pockets/vue/dev/packages/@pockets-components/drawer/components/trigger/index.vue`]}},Ii=r({__storyData:()=>Li,default:()=>Ri}),Li={route:`pockets vue/components/About`,storyIcon:`fa fa-book`},Ri=`\r
# About\r
\r
Ship production-ready interfaces faster with reusable UI components designed for WordPress projects. Pockets comes with a pleothora of ready to use VUE components for all sorts of things: Modals, Youtube Players, Google maps integration and much more.`,zi=r({__storyData:()=>Bi,default:()=>Vi}),Bi={route:`pockets vue/components/google-map/advanced-marker/about`,storyIcon:`fa fa-book`},Vi=`\r
## Advanced Map Marker\r
### \`\`\`google-map-advanced-marker\`\`\`\r
\r
This component is an instance of google maps advanced marker. It allows for enhanced customization and functionality compared to standard markers:\r
\r
- Use custom icons.\r
- Add interactive elements.\r
- Incorporate dynamic content.\r
`,Hi=`<google-map-api-loader\r
    v-bind='props.loaderOptions'\r
>\r
    <google-map-container\r
        v-bind='props.mapOptions'\r
    >\r
        <google-map-advanced-marker\r
            :position='{lat: 0, lng: 0}'\r
            title='Hello world'\r
        />\r
        <google-map-advanced-marker\r
            :position='{lat: 50, lng: 50}'\r
        >\r
            <div class='p-1 bg-black'>\r
                Custom Marker Html            \r
            </div>\r
        </google-map-advanced-marker>\r
    </google-map-container>\r
</google-map-api-loader>`,Ui=ee(`pockets-documentation/google-maps-demo`,{apiKey:``}),Wi=k({get apiKey(){return Ui.value.apiKey},set apiKey(e){Ui.value.apiKey=e}}),Gi={style:`height: 500px; width: 100%`,zoom:2,center:{lat:0,lng:0},draggable:!1},Ki={key:0},qi={key:0,class:`alert alert-danger grid columns-1 gap-1`},Ji=[b(`p`,null,`Enter your api key to see the demo.`,-1),b(`p`,null,`Note, this key will be saved to your devices storage temporarily.`,-1),b(`p`,null,`You will need to refresh the page once after entering your key.`,-1)],Yi={key:1},Xi={class:`grid-info-120`},J=c({loaderOptions:Wi,mapOptions:Gi,__name:`api-loader`,props:{mode:{default:`slot`}},setup(e){return(e,t)=>(u(),S(E,null,[e.mode==`slot`?(u(),S(`div`,Ki,[x(Wi).apiKey==``?(u(),S(`div`,qi,Ji)):V(``,!0),x(Wi).apiKey==``?V(``,!0):P(e.$slots,`default`,H(m({key:1},x(Wi))))])):V(``,!0),e.mode==`controls`?(u(),S(`div`,Yi,[b(`div`,Xi,[s(` Api Key `),F(b(`input`,{"onUpdate:modelValue":t[0]||=e=>x(Wi).apiKey=e,placeholder:`Enter your google maps API key`,class:`form-control`},null,512),[[C,x(Wi).apiKey]])])])):V(``,!0)],64))}}),Zi=c({__name:`example.story`,setup(e){let t=()=>({props:{loaderOptions:J.loaderOptions,mapOptions:J.mapOptions}});return(e,n)=>{let r=f(`pockets-story-demo`),i=f(`pockets-story-demo-container`);return u(),L(i,{state:x(t)},{default:A(({state:e})=>[z(J,null,{default:A(()=>[z(r,{html:x(Hi),state:e},null,8,[`html`,`state`])]),_:2},1024)]),controls:A(()=>[z(J,{mode:`controls`})]),_:1},8,[`state`])}}}),Qi=r({__storyData:()=>ea,default:()=>$i}),$i=Zi,ea={tag:`google-map-advanced-marker`,route:`pockets vue/components/google-map/advanced-marker/example`,component:`@pockets-components/google-map/base-components/advanced-marker.vue`,header:{sourceFile:`@pockets-components/google-map/base-components/advanced-marker.vue`,missingSourceFile:!1},storyIcon:`fa fa-code`,componentInfo:{exportName:`default`,displayName:`advanced-marker`,description:``,tags:{},props:{position:{name:`position`,description:`Sets position of marker on map.`,required:!0,type:{name:`{\r
    lat: number\r
    lng: number\r
}`}}},events:{},slots:[{name:`default`,scoped:!0,bindings:[{name:`marker`,title:`binding`}],description:`Can be used to override marker pin shown on map.`,tags:{binding:[{title:`binding`,type:{name:`object`},name:`Marker`,description:`Instance of google map marker`}]}}],sourceFiles:[`C:/Users/Justin/Documents/Workspace/xampp/apps/pockets/htdocs/wp-content/plugins/pockets/vue/dev/packages/@pockets-components/google-map/base-components/advanced-marker.vue`]}},ta=r({__storyData:()=>na,default:()=>ra}),na={group:`components`,title:`Google Maps/Api Loader/About`,storyIcon:`fa fa-book`},ra="\r\n## Api Loader\r\n### ```google-map-api-loader```\r\n\r\nThis component is used to load the google maps API. Once the API is loaded,\r\nits slot contents will be rendered. The google maps api is provided to all child\r\ncomponents using the ```google-map-api``` injection key. ",ia=`<google-map-api-loader\r
    v-bind='props.loaderOptions'\r
>\r
     <div class='bg-black text-white p-2'>\r
        Google Maps Components can be loaded here.\r
     </div>\r
</google-map-api-loader>`,aa=c({__name:`example.story`,setup(e){let t=()=>({props:{loaderOptions:J.loaderOptions}});return(e,n)=>{let r=f(`pockets-story-demo`),i=f(`pockets-story-demo-container`);return u(),L(i,{state:x(t)},{default:A(({state:e})=>[z(J,null,{default:A(()=>[z(r,{html:x(ia),state:e},null,8,[`html`,`state`])]),_:2},1024)]),controls:A(()=>[z(J,{mode:`controls`})]),_:1},8,[`state`])}}}),oa=r({__storyData:()=>ca,default:()=>sa}),sa=aa,ca={route:`pockets vue/components/Google Map/Api Loader/Example`,tag:`google-map-api-loader`,header:{sourceFile:!1,missingSourceFile:!1},storyIcon:`fa fa-code`},la=r({__storyData:()=>ua,default:()=>da}),ua={route:`pockets vue/components/google-map/auto-complete/about`,storyIcon:`fa fa-book`},da="\r\n## Auto Complete\r\n\r\n### ```google-map-auto-complete```\r\n\r\nThis component provides an interface to the Google Places API that offers location-based suggestions to users as they type into an input field. This enhances the user experience by reducing the amount of typing required and helping users find precise locations quickly.",fa=`<google-map-api-loader\r
    v-bind='props.loaderOptions'\r
>\r
    <div class='grid columns-1 gap-2'>\r
        <google-map-auto-complete\r
            class='form-control'\r
            v-model='props.modelValue'\r
        />\r
        <div>\r
            Address selected: {{ props?.modelValue?.formatted_address ?? "None selected"}}\r
        </div>\r
    </div>\r
</google-map-api-loader>\r
`,pa=c({__name:`example.story`,setup(e){let t=()=>({props:{loaderOptions:J.loaderOptions,modelValue:null}});return(e,n)=>{let r=f(`pockets-story-demo`),i=f(`pockets-story-demo-container`);return u(),L(i,{state:x(t)},{default:A(({state:e})=>[z(J,null,{default:A(()=>[z(r,{html:x(fa),state:e},null,8,[`html`,`state`])]),_:2},1024)]),controls:A(({state:e})=>[z(J,{mode:`controls`})]),_:1},8,[`state`])}}}),ma=r({__storyData:()=>ga,default:()=>ha}),ha=pa,ga={route:`pockets vue/components/google-map/auto-complete/example`,tag:`google-map-auto-complete`,header:{sourceFile:!1,missingSourceFile:!1},storyIcon:`fa fa-code`},_a=r({__storyData:()=>va,default:()=>ya}),va={group:`components`,title:`Google Maps/Map Container/About`,storyIcon:`fa fa-book`},ya="\r\n## Map Container\r\n### ```google-map-container```\r\n\r\nUsed to load an instance of google maps and render it on an element. Once the map instance is mounted, slot contents such as ```google-map-advanced-marker``` are rendered. \r\nChild components can inject this map instance via the ```google-map-api``` injection key. ",ba=`<google-map-api-loader\r
    v-bind='props.loaderOptions'\r
>\r
    <google-map-container\r
        v-bind='props.mapOptions'\r
    />\r
</google-map-api-loader>`,xa=c({__name:`example.story`,setup(e){let t=()=>({props:{loaderOptions:J.loaderOptions,mapOptions:J.mapOptions}});return(e,n)=>{let r=f(`pockets-story-demo`),i=f(`pockets-story-demo-container`);return u(),L(i,{state:x(t)},{default:A(({state:e})=>[z(J,null,{default:A(()=>[z(r,{html:x(ba),state:e},null,8,[`html`,`state`])]),_:2},1024)]),controls:A(()=>[z(J,{mode:`controls`})]),_:1},8,[`state`])}}}),Sa=r({__storyData:()=>wa,default:()=>Ca}),Ca=xa,wa={route:`pockets vue/components/Google Map/Map Container/Example`,tag:`google-map-container`,header:{sourceFile:!1,missingSourceFile:!1},storyIcon:`fa fa-code`},Ta=r({__storyData:()=>Ea,default:()=>Da}),Ea={group:`components`,title:`Google Maps/Map Loader/About`,storyIcon:`fa fa-book`},Da="\r\n## Map Loader\r\n### ```google-map-loader```\r\nThis component is a ready to use configurable map that supports the use of map markers, centering and other features. It automatically uses the [api loader](../api-loader/about.story.md) to load the google maps api. Then it uses the [map container](../map-container/about.story.md) to load a map instance on an element. \r\n\r\n",Oa=`<google-map-loader\r
    v-bind="props"\r
>\r
</google-map-loader>`,ka=b(`span`,null,`Markers`,-1),Aa=b(`span`,null,`Map Options`,-1),ja=c({__name:`example.story`,setup(e){let t=()=>({props:{class:`col-12`,centerOn:`markers`,loaderOptions:J.loaderOptions,mapOptions:{zoom:2,center:{lat:0,lng:0},draggable:!0,style:`height: 400px; width: 100%`},mapMarkers:[{title:`Hello world 1`,position:{lat:0,lng:0}},{title:`Hello world 2`,position:{lat:20,lng:20}},{title:`Hello world 3`,position:{lat:40,lng:40}},{title:`Hello world 4`,position:{lat:40,lng:0}},{title:`Hello world 5`,position:{lat:0,lng:40}}]}});return(e,n)=>{let r=f(`pockets-story-demo`),i=f(`google-map-option-panel-map-markers`),a=f(`google-map-option-panel-map-options`),o=f(`pockets-story-demo-container`);return u(),L(o,{state:x(t)},{default:A(({state:e})=>[z(J,null,{default:A(()=>[z(r,{html:x(Oa),state:e},null,8,[`html`,`state`])]),_:2},1024)]),controls:A(({state:e})=>[z(J,{mode:`controls`}),ka,z(i,{options:e.props.mapMarkers},null,8,[`options`]),Aa,z(a,{options:e.props},null,8,[`options`])]),_:1},8,[`state`])}}}),Ma=r({__storyData:()=>Pa,default:()=>Na}),Na=ja,Pa={route:`pockets vue/components/Google Map/Map Loader/Example`,tag:`google-map-loader`,header:{sourceFile:!1,missingSourceFile:!1},storyIcon:`fa fa-code`},Fa=r({__storyData:()=>Ia,default:()=>La}),Ia={route:`pockets vue/components/modal/about`,storyIcon:`fa fa-book`},La="## Modal\r\n#### ```pockets-modal```\r\n\r\nA modal",Ra=`<pockets-modal \r
    v-bind="props"\r
    class="d-flex"\r
    v-model:open="props.open"\r
>\r
    <div \r
        class="p-2 bg-primary-dk text-white fw-8 m-auto"\r
    >\r
        <button \r
            class="btn btn-accent-dk rounded-0 p-2 px-4 rounded-0"\r
            @click="props.open = false"\r
        >\r
            Close Modal\r
        </button>\r
    </div>\r
</pockets-modal>\r
\r
<button \r
    class="btn btn-accent-dk p-2 px-6 mx-auto rounded-0"\r
    @click="props.open = true"\r
>\r
    Open Modal\r
</button>\r
`,za={class:`grid-info-120`,role:`button`},Ba=b(`span`,null,`Click outside`,-1),Va=[`onUpdate:modelValue`],Ha=c({__name:`modal.story`,setup(e){let t=()=>({props:{open:!1,teleport:`body`,clickOutside:!0}});return(e,n)=>{let r=f(`pockets-story-demo-container`),i=y(`tooltip`);return u(),L(r,{state:x(t),html:x(Ra)},{controls:A(({state:e})=>[F((u(),S(`label`,za,[Ba,F(b(`input`,{type:`checkbox`,class:`form-control-switch ms-auto`,"onUpdate:modelValue":t=>e.props.clickOutside=t},null,8,Va),[[j,e.props.clickOutside]])])),[[i,`Toggle whether clicking outside modal contents closes modal`]])]),_:1},8,[`state`,`html`])}}}),Ua=r({__storyData:()=>Ga,default:()=>Wa}),Wa=Ha,Ga={tag:`pockets-modal`,component:`@pockets-components/modal/index.vue`,route:`pockets vue/components/modal/example`,header:{sourceFile:`@pockets-components/modal/index.vue`,missingSourceFile:!1},storyIcon:`fa fa-code`,componentInfo:{exportName:`default`,displayName:`modal`,description:``,tags:{},props:{teleport:{name:`teleport`,description:`Element to teleport modal to. If false, telport is disabled`,required:!1,type:{name:`union`,elements:[{name:`string`},{name:`boolean`}]},defaultValue:{func:!1,value:`"body"`}},open:{name:`open`,description:`If modal is open or not.`,required:!1,type:{name:`boolean`}},clickOutside:{name:`clickOutside`,description:`If set to true, clicking outside the modal closes it.`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`false`}},transitionName:{name:`transitionName`,description:`Transition name to apply`,required:!1,type:{name:`string`},defaultValue:{func:!1,value:`"animate-modal"`}},duration:{name:`duration`,description:`Transition duration in ms. Eg 1000 -> 1000ms -> 1s`,required:!1,type:{name:`union`,elements:[{name:`number`},{name:`string`}]},defaultValue:{func:!1,value:`500`}}},events:{},slots:[{name:`default`,scoped:!0,bindings:[],description:`Content of modal`}],sourceFiles:[`C:/Users/Justin/Documents/Workspace/xampp/apps/pockets/htdocs/wp-content/plugins/pockets/vue/dev/packages/@pockets-components/modal/index.vue`]}},Ka=r({__storyData:()=>qa,default:()=>Ja}),qa={route:`pockets vue/app-instances`,title:`Creating an app instance`,storyIcon:`fa fa-book`},Ja=`## Creating an APP\r
\r
In Pockets VUE, integration with VUE is done through the use of a custom element: \`<pockets-app>\`. This custom element acts as a container, automatically spawning Vue instances on the element. The content inside the \`<pockets-app>\` tag is parsed using Vue, enabling the utilization of components, state, and other Vue syntax like directives.\r
\r
To initiate a Vue app, simply enclose your content within the \`<pockets-app>\` tag. This signifies to Pockets VUE that the content should be processed and rendered as a Vue instance.\r
\r
\`\`\`html\r
<pockets-app>\r
    <!-- Your Vue app content goes here -->\r
</pockets-app>\r
\`\`\`\r
\r
#### Using Components and Vue Syntax\r
\r
Inside the \`<pockets-app>\` tag, you can utilize Vue components, state, and other Vue syntax. This allows for dynamic and interactive content on your site. Below are examples demonstrating the usage of components and directives within a Pockets VUE app:\r
\r
#### Using Components\r
\r
\`\`\`html\r
<pockets-app>\r
    <my-custom-component></my-custom-component>\r
</pockets-app>\r
\`\`\`\r
\r
#### Applying Vue Directives\r
\r
\`\`\`html\r
<pockets-app>\r
    <div v-if="isUserLoggedIn">\r
        Welcome, {{username}}!\r
    </div>\r
    <div v-else="">\r
        Please log in.\r
    </div>\r
</pockets-app>\r
\`\`\`\r
`,Ya=r({__storyData:()=>Xa,default:()=>Za}),Xa={route:`pockets vue/components/render-html/about`,storyIcon:`fa fa-book`},Za=`\r
## Render HTML\r
#### \`\`\`render-html\`\`\`\r
\r
Render HTML can be used to render content and data as a standard VUE template.\r
\r
`,Qa=`<render-html \r
    class='p-2 bg-black text-white' \r
    v-bind="props"\r
/>`,$a={class:`grid-info-120`},eo=b(`span`,null,`Test`,-1),to=[`onUpdate:modelValue`],no=c({__name:`render-html.story`,setup(e){let t={props:{innerHTML:`<div> {{ test }} </div>`,state:{test:`hello world`}}};return(e,n)=>{let r=f(`pockets-story-demo-container`);return u(),L(r,{state:x(t),html:x(Qa)},{controls:A(({state:e})=>[b(`label`,$a,[eo,F(b(`input`,{"onUpdate:modelValue":t=>e.props.state.test=t,class:`form-control`},null,8,to),[[C,e.props.state.test]])])]),_:1},8,[`state`,`html`])}}}),ro=r({__storyData:()=>ao,default:()=>io}),io=no,ao={route:`pockets vue/components/render html/Example`,tag:`render-html`,component:`@pockets-components/render-html/index.vue`,header:{sourceFile:`@pockets-components/render-html/index.vue`,missingSourceFile:!1},storyIcon:`fa fa-code`,componentInfo:{exportName:`default`,displayName:`render-html`,description:``,tags:{},props:{el:{name:`el`,description:`HTML Element to wrap compiled template in. 
        If set to false, it will not be wrapped.`,required:!1,type:{name:`union`,elements:[{name:`string`},{name:`boolean`}]},defaultValue:{func:!1,value:`"div"`}},innerHTML:{name:`innerHTML`,description:`Template content to use for rendering`,required:!1,type:{name:`string`},defaultValue:{func:!1,value:`""`}},state:{name:`state`,description:`Template data to use for rendering`,required:!1,type:{name:`union`,elements:[{name:`object`},{name:`null`}]},defaultValue:{func:!1,value:`null`}}},events:{},sourceFiles:[`C:/Users/Justin/Documents/Workspace/xampp/apps/pockets/htdocs/wp-content/plugins/pockets/vue/dev/packages/@pockets-components/render-html/index.vue`]}},oo=r({__storyData:()=>so,default:()=>co}),so={route:`pockets vue/components/render-markdown/about`,storyIcon:`fa fa-book`},co=`\r
# Render Markdown \r
This component is a reusable UI element that takes raw, unformatted Markdown text and converts it dynamically into standard, styled HTML elements for display.`,lo=`<div class='grid gap-2'>\r
    <h1 class='fs-30 text-primary-lt'>Edit</h1>\r
    <pockets-ux-code-editor v-bind='props' v-model='props.content'>\r
    </pockets-ux-code-editor>\r
    \r
    <h1 class='fs-30 text-primary-lt'>Results</h1>\r
    \r
    <pockets-render-markdown\r
        v-bind='props'\r
    >\r
    </pockets-render-markdown>\r
</div>`,uo=r({__storyData:()=>po,default:()=>fo}),fo={__name:`example.story`,setup(e){let t={props:{content:[`# a title`,`# another title`,`- List`,`- Item`].join(`
`)}};return(e,n)=>{let r=f(`pockets-story-demo-container`);return u(),L(r,{state:x(t),html:x(lo),"local-storage":`render-markdown-demo`},null,8,[`state`,`html`])}}},po={route:`pockets vue/components/render-markdown/example`,tag:`pockets-render-markdown`,component:`@pockets-components/render-markdown/index.vue`,header:{sourceFile:`@pockets-components/render-markdown/index.vue`,missingSourceFile:!1},storyIcon:`fa fa-code`,componentInfo:{exportName:`default`,displayName:`render-markdown`,description:``,tags:{},props:{content:{name:`content`,required:!0,type:{name:`string`}},copyEnabled:{name:`copyEnabled`,description:`Controls whether copy button is used on code blocks`,required:!1,type:{name:`"true"`},defaultValue:{func:!1,value:`'true'`}}},events:{},sourceFiles:[`C:/Users/Justin/Documents/Workspace/xampp/apps/pockets/htdocs/wp-content/plugins/pockets/vue/dev/packages/@pockets-components/render-markdown/index.vue`]}},mo=r({__storyData:()=>ho,default:()=>go}),ho={route:`pockets vue/components/slider/about`,storyIcon:`fa fa-book`},go="\r\n## Slider\r\n#### ```pockets-slider```\r\n\r\nThis component is comprised of 2 elements:\r\n- ```<pockets-slider>```\r\n    Main container. Sets up configuration for slider and passes it down to slides.\r\n- ```<pockets-slider-slide>```\r\n    Used for rendering the current slide. \r\n",_o=`<div class='col-12'>\r
    <pockets-slider \r
        v-bind="props" \r
        #default="api"\r
    >\r
        <div\r
            class="slide-container"\r
        >\r
            <pockets-slider-slide \r
                #default="slide" \r
                class="slide"\r
            >\r
                <img :src="slide.src"/>\r
            </pockets-slider-slide>\r
        </div>\r
        <div class='d-flex gap-1 justify-content-center p-2 pb-0'>\r
            <button \r
                class='btn btn-accent-dk fa fa-chevron-left rounded-0 p-1'\r
                @click='api.rotate.left()'\r
            ></button>\r
            <button \r
                v-for='(slide, i) in api.slides'\r
                @click='api.rotate.to(i)'\r
                :class='{active: i === api.index}'\r
                class='btn btn-accent-dk p-1 rounded-0'\r
            >\r
                {{ i + 1 }}\r
            </button>\r
            <button \r
                class='btn btn-accent-dk fa fa-chevron-right rounded-0 p-1'\r
                @click='api.rotate.right()'\r
            ></button>\r
        </div>\r
    </pockets-slider>\r
</div>`,vo={name:`slide`,direction:`right`,interval:2e3,duration:1e3,shiftCount:1,index:0,pauseHovered:!0,debounceRotation:!0,swipeable:!0,slides:[{title:`Hello world 1`,src:`https://picsum.photos/800/400?random=1`},{title:`Hello world 1`,src:`https://picsum.photos/800/400?random=2`},{title:`Hello world 1`,src:`https://picsum.photos/800/400?random=3`},{title:`Hello world 1`,src:`https://picsum.photos/800/400?random=4`}]},yo=()=>({props:vo}),bo=c({__name:`slider-data.story`,setup(e){return(e,t)=>{let n=f(`pockets-slider-option-panel`),r=f(`pockets-story-demo-container`);return u(),L(r,{state:x(yo),html:x(_o)},{controls:A(({state:e})=>[z(n,{options:e.props},null,8,[`options`])]),_:1},8,[`state`,`html`])}}}),xo=r({__storyData:()=>Co,default:()=>So}),So=bo,Co={tag:`pockets-slider`,route:`pockets vue/components/slider/data-example`,component:`@pockets-components/slider/components/container.vue`,header:{sourceFile:`@pockets-components/slider/components/container.vue`,missingSourceFile:!1},storyIcon:`fa fa-code`,componentInfo:{exportName:`default`,displayName:`container`,description:``,tags:{},props:{duration:{name:`duration`,description:`determines the speed for in/out transitions. Should be in MS. Eg 1000 = 1000ms -> 1s`,required:!1,type:{name:`number`},defaultValue:{func:!1,value:`500`}},interval:{name:`interval`,description:`Time at which slide changes. Should be in MS. Eg 1000 = 1000ms -> 1s`,required:!1,type:{name:`number`},defaultValue:{func:!1,value:`2000`}},direction:{name:`direction`,description:`Starting direction slider moves in
        Two way bound via v-model:direction`,required:!1,type:{name:`Direction`},defaultValue:{func:!1,value:`"right"`}},tag:{name:`tag`,description:`Element for slider container`,required:!1,type:{name:`string`},defaultValue:{func:!1,value:`'div'`}},shiftCount:{name:`shiftCount`,description:`How many slides slider progresses on each action`,required:!1,type:{name:`number`},defaultValue:{func:!1,value:`1`}},slides:{name:`slides`,description:`Only used in data mode`,required:!1,type:{name:`union`,elements:[{name:`tuple`,elements:[]},{name:`false`}]},defaultValue:{func:!1,value:`false`}},pauseHovered:{name:`pauseHovered`,description:`if true, when the slider container is 
        hovered, the timer function will not fire.`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`true`}},debounceRotation:{name:`debounceRotation`,description:`if set to true, the switching of slides will be debounced
        based on the duration property. Useful to prevent users
        from spamming transitions.`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`true`}},swipeable:{name:`swipeable`,description:`If true, swipe motions will trigger rotations`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`true`}},name:{name:`name`,description:`Global transition name. Can be overriden on slide render component`,required:!1,type:{name:`TSIndexedAccessType`},defaultValue:{func:!1,value:`"slide"`}},autoRotate:{name:`autoRotate`,description:`If false, slide will not automatically change using interval.`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`true`}},index:{name:`index`,description:`Two way bound via v-model:index`,required:!1,type:{name:`number`},defaultValue:{func:!1,value:`0`}}},events:{},slots:[{name:`default`,scoped:!0,bindings:[],description:`Provides interface for slider.`,tags:{binding:[{title:`binding`,type:{name:`array`},name:`slides`,description:`List of provided slides. If using the #slides slot, it will be an array of the html elements in the slot.`},{title:`binding`,type:{name:`boolean`},name:`isManuallyPaused`,description:`Flag that is set when pause/resume is called.`},{title:`binding`,type:{name:`mixed`},description:`{function{ pause Pauses slider rotation.`},{title:`binding`,type:{name:`function`},name:`resume`,description:`Resumes slider rotation.`},{title:`binding`,type:{name:`object`},name:`rotate`,description:`Contains set of functions that can be called to navigate to different slides.`},{title:`binding`,type:{name:`.up function( count:number )`},name:`rotate`,description:`Rotates slider up.`},{title:`binding`,type:{name:`.down function( count:number )`},name:`rotate`,description:`Rotates slider down.`},{title:`binding`,type:{name:`.left function( count:number )`},name:`rotate`,description:`Rotates slider left.`},{title:`binding`,type:{name:`.right function( count:number )`},name:`rotate`,description:`Rotates slider right.`},{title:`binding`,type:{name:`.to function( count:number )`},name:`rotate`,description:`Navigates to specified slide.`},{title:`binding`,type:{name:`.direction function( direction: string, count:number )`},name:`rotate`,description:`Rotate slider in direction.`}]}},{name:`slides`,description:`Optional slot. If provided, each element inside it will be used as an 
        entry for the slides. You will also need to set the slides property to false.
        This allows you to use HTML for slides instead of data.`}],sourceFiles:[`C:/Users/Justin/Documents/Workspace/xampp/apps/pockets/htdocs/wp-content/plugins/pockets/vue/dev/packages/@pockets-components/slider/components/container.vue`]}},wo=`<p class='mb-1'>\r
    If you use HTML slides, you must provide each slide a key or \r
    transitions will not work\r
</p>\r
<pockets-slider \r
    v-bind="props" \r
    :slides="false" \r
>   \r
    <template #slides>\r
        <img :src="props.slides[0].src" :key=0 class='col-12'>\r
        <img :src="props.slides[1].src" :key=1 class='col-12'>\r
        <img :src="props.slides[2].src" :key=2 class='col-12'>\r
    </template>\r
    <template #default="api">\r
        <div\r
            class="slide-container"\r
        >\r
            <pockets-slider-slide \r
                #default="slide" \r
                class="slide"\r
            />\r
        </div>\r
        <div class='d-flex gap-1 justify-content-center p-2 pb-0'>\r
            <button \r
                class='btn btn-accent-dk fa fa-chevron-left rounded-0 p-1'\r
                @click='api.rotate.left()'\r
            ></button>\r
            <button \r
                v-for='(slide, i) in api.slides'\r
                @click='api.rotate.to(i)'\r
                :class='{active: i === api.index}'\r
                class='btn btn-accent-dk p-1 rounded-0'\r
            >\r
                {{ i + 1 }}\r
            </button>\r
            <button \r
                class='btn btn-accent-dk fa fa-chevron-right rounded-0 p-1'\r
                @click='api.rotate.right()'\r
            ></button>\r
        </div>\r
    </template>\r
</pockets-slider>`,To=c({__name:`slider-html.story`,setup(e){return(e,t)=>{let n=f(`pockets-slider-option-panel`),r=f(`pockets-story-demo-container`);return u(),L(r,{state:x(yo),html:x(wo)},{controls:A(({state:e})=>[z(n,{options:e.props},null,8,[`options`])]),_:1},8,[`state`,`html`])}}}),Eo=r({__storyData:()=>Oo,default:()=>Do}),Do=To,Oo={tag:`pockets-slider`,route:`pockets vue/components/slider/html-example`,component:`@pockets-components/slider/components/container.vue`,header:{sourceFile:`@pockets-components/slider/components/container.vue`,missingSourceFile:!1},storyIcon:`fa fa-code`,componentInfo:{exportName:`default`,displayName:`container`,description:``,tags:{},props:{duration:{name:`duration`,description:`determines the speed for in/out transitions. Should be in MS. Eg 1000 = 1000ms -> 1s`,required:!1,type:{name:`number`},defaultValue:{func:!1,value:`500`}},interval:{name:`interval`,description:`Time at which slide changes. Should be in MS. Eg 1000 = 1000ms -> 1s`,required:!1,type:{name:`number`},defaultValue:{func:!1,value:`2000`}},direction:{name:`direction`,description:`Starting direction slider moves in
        Two way bound via v-model:direction`,required:!1,type:{name:`Direction`},defaultValue:{func:!1,value:`"right"`}},tag:{name:`tag`,description:`Element for slider container`,required:!1,type:{name:`string`},defaultValue:{func:!1,value:`'div'`}},shiftCount:{name:`shiftCount`,description:`How many slides slider progresses on each action`,required:!1,type:{name:`number`},defaultValue:{func:!1,value:`1`}},slides:{name:`slides`,description:`Only used in data mode`,required:!1,type:{name:`union`,elements:[{name:`tuple`,elements:[]},{name:`false`}]},defaultValue:{func:!1,value:`false`}},pauseHovered:{name:`pauseHovered`,description:`if true, when the slider container is 
        hovered, the timer function will not fire.`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`true`}},debounceRotation:{name:`debounceRotation`,description:`if set to true, the switching of slides will be debounced
        based on the duration property. Useful to prevent users
        from spamming transitions.`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`true`}},swipeable:{name:`swipeable`,description:`If true, swipe motions will trigger rotations`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`true`}},name:{name:`name`,description:`Global transition name. Can be overriden on slide render component`,required:!1,type:{name:`TSIndexedAccessType`},defaultValue:{func:!1,value:`"slide"`}},autoRotate:{name:`autoRotate`,description:`If false, slide will not automatically change using interval.`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`true`}},index:{name:`index`,description:`Two way bound via v-model:index`,required:!1,type:{name:`number`},defaultValue:{func:!1,value:`0`}}},events:{},slots:[{name:`default`,scoped:!0,bindings:[],description:`Provides interface for slider.`,tags:{binding:[{title:`binding`,type:{name:`array`},name:`slides`,description:`List of provided slides. If using the #slides slot, it will be an array of the html elements in the slot.`},{title:`binding`,type:{name:`boolean`},name:`isManuallyPaused`,description:`Flag that is set when pause/resume is called.`},{title:`binding`,type:{name:`mixed`},description:`{function{ pause Pauses slider rotation.`},{title:`binding`,type:{name:`function`},name:`resume`,description:`Resumes slider rotation.`},{title:`binding`,type:{name:`object`},name:`rotate`,description:`Contains set of functions that can be called to navigate to different slides.`},{title:`binding`,type:{name:`.up function( count:number )`},name:`rotate`,description:`Rotates slider up.`},{title:`binding`,type:{name:`.down function( count:number )`},name:`rotate`,description:`Rotates slider down.`},{title:`binding`,type:{name:`.left function( count:number )`},name:`rotate`,description:`Rotates slider left.`},{title:`binding`,type:{name:`.right function( count:number )`},name:`rotate`,description:`Rotates slider right.`},{title:`binding`,type:{name:`.to function( count:number )`},name:`rotate`,description:`Navigates to specified slide.`},{title:`binding`,type:{name:`.direction function( direction: string, count:number )`},name:`rotate`,description:`Rotate slider in direction.`}]}},{name:`slides`,description:`Optional slot. If provided, each element inside it will be used as an 
        entry for the slides. You will also need to set the slides property to false.
        This allows you to use HTML for slides instead of data.`}],sourceFiles:[`C:/Users/Justin/Documents/Workspace/xampp/apps/pockets/htdocs/wp-content/plugins/pockets/vue/dev/packages/@pockets-components/slider/components/container.vue`]}},ko=`<div class='col-12'>\r
    <pockets-slider \r
        v-bind="props" \r
        #default="api"\r
    >\r
        <div class='grid columns-2 gap-2'>\r
            <div\r
                class="slide-container"\r
            >\r
                <pockets-slider-slide \r
                    #default="slide" \r
                    class="slide"\r
                    :offset='4'\r
                >\r
                    <img :src="slide.src"/>\r
                </pockets-slider-slide>\r
            </div>\r
            <div\r
                class="slide-container"\r
            >\r
                <pockets-slider-slide \r
                    #default="slide" \r
                    class="slide"\r
                    :offset='3'\r
                >\r
                    <img :src="slide.src"/>\r
                </pockets-slider-slide>\r
            </div>\r
            <div\r
                class="slide-container"\r
            >\r
                <pockets-slider-slide \r
                    #default="slide" \r
                    class="slide"\r
                    :offset='2'\r
                >\r
                    <img :src="slide.src"/>\r
                </pockets-slider-slide>\r
            </div>\r
            <div\r
                class="slide-container"\r
            >\r
                <pockets-slider-slide \r
                    #default="slide" \r
                    class="slide"\r
                    :offset='1'\r
                >\r
                    <img :src="slide.src"/>\r
                </pockets-slider-slide>\r
            </div>\r
        </div>\r
        <div class='d-flex gap-1 justify-content-center p-2 pb-0'>\r
            <button \r
                class='btn btn-accent-dk fa fa-chevron-left rounded-0 p-1'\r
                @click='api.rotate.left()'\r
            ></button>\r
            <button \r
                v-for='(slide, i) in api.slides'\r
                @click='api.rotate.to(i)'\r
                :class='{active: i === api.index}'\r
                class='btn btn-accent-dk p-1 rounded-0'\r
            >\r
                {{ i + 1 }}\r
            </button>\r
            <button \r
                class='btn btn-accent-dk fa fa-chevron-right rounded-0 p-1'\r
                @click='api.rotate.right()'\r
            ></button>\r
        </div>\r
    </pockets-slider>\r
</div>`,Ao=c({__name:`slider-multiple.story`,setup(e){return(e,t)=>{let n=f(`pockets-slider-option-panel`),r=f(`pockets-story-demo-container`);return u(),L(r,{state:x(yo),html:x(ko)},{controls:A(({state:e})=>[z(n,{options:e.props},null,8,[`options`])]),_:1},8,[`state`,`html`])}}}),jo=r({__storyData:()=>No,default:()=>Mo}),Mo=Ao,No={tag:`pockets-slider`,route:`pockets vue/components/slider/multiple-slide-example`,component:`@pockets-components/slider/components/container.vue`,header:{sourceFile:`@pockets-components/slider/components/container.vue`,missingSourceFile:!1},storyIcon:`fa fa-code`,componentInfo:{exportName:`default`,displayName:`container`,description:``,tags:{},props:{duration:{name:`duration`,description:`determines the speed for in/out transitions. Should be in MS. Eg 1000 = 1000ms -> 1s`,required:!1,type:{name:`number`},defaultValue:{func:!1,value:`500`}},interval:{name:`interval`,description:`Time at which slide changes. Should be in MS. Eg 1000 = 1000ms -> 1s`,required:!1,type:{name:`number`},defaultValue:{func:!1,value:`2000`}},direction:{name:`direction`,description:`Starting direction slider moves in
        Two way bound via v-model:direction`,required:!1,type:{name:`Direction`},defaultValue:{func:!1,value:`"right"`}},tag:{name:`tag`,description:`Element for slider container`,required:!1,type:{name:`string`},defaultValue:{func:!1,value:`'div'`}},shiftCount:{name:`shiftCount`,description:`How many slides slider progresses on each action`,required:!1,type:{name:`number`},defaultValue:{func:!1,value:`1`}},slides:{name:`slides`,description:`Only used in data mode`,required:!1,type:{name:`union`,elements:[{name:`tuple`,elements:[]},{name:`false`}]},defaultValue:{func:!1,value:`false`}},pauseHovered:{name:`pauseHovered`,description:`if true, when the slider container is 
        hovered, the timer function will not fire.`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`true`}},debounceRotation:{name:`debounceRotation`,description:`if set to true, the switching of slides will be debounced
        based on the duration property. Useful to prevent users
        from spamming transitions.`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`true`}},swipeable:{name:`swipeable`,description:`If true, swipe motions will trigger rotations`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`true`}},name:{name:`name`,description:`Global transition name. Can be overriden on slide render component`,required:!1,type:{name:`TSIndexedAccessType`},defaultValue:{func:!1,value:`"slide"`}},autoRotate:{name:`autoRotate`,description:`If false, slide will not automatically change using interval.`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`true`}},index:{name:`index`,description:`Two way bound via v-model:index`,required:!1,type:{name:`number`},defaultValue:{func:!1,value:`0`}}},events:{},slots:[{name:`default`,scoped:!0,bindings:[],description:`Provides interface for slider.`,tags:{binding:[{title:`binding`,type:{name:`array`},name:`slides`,description:`List of provided slides. If using the #slides slot, it will be an array of the html elements in the slot.`},{title:`binding`,type:{name:`boolean`},name:`isManuallyPaused`,description:`Flag that is set when pause/resume is called.`},{title:`binding`,type:{name:`mixed`},description:`{function{ pause Pauses slider rotation.`},{title:`binding`,type:{name:`function`},name:`resume`,description:`Resumes slider rotation.`},{title:`binding`,type:{name:`object`},name:`rotate`,description:`Contains set of functions that can be called to navigate to different slides.`},{title:`binding`,type:{name:`.up function( count:number )`},name:`rotate`,description:`Rotates slider up.`},{title:`binding`,type:{name:`.down function( count:number )`},name:`rotate`,description:`Rotates slider down.`},{title:`binding`,type:{name:`.left function( count:number )`},name:`rotate`,description:`Rotates slider left.`},{title:`binding`,type:{name:`.right function( count:number )`},name:`rotate`,description:`Rotates slider right.`},{title:`binding`,type:{name:`.to function( count:number )`},name:`rotate`,description:`Navigates to specified slide.`},{title:`binding`,type:{name:`.direction function( direction: string, count:number )`},name:`rotate`,description:`Rotate slider in direction.`}]}},{name:`slides`,description:`Optional slot. If provided, each element inside it will be used as an 
        entry for the slides. You will also need to set the slides property to false.
        This allows you to use HTML for slides instead of data.`}],sourceFiles:[`C:/Users/Justin/Documents/Workspace/xampp/apps/pockets/htdocs/wp-content/plugins/pockets/vue/dev/packages/@pockets-components/slider/components/container.vue`]}},Po=`<div class='col-12'>\r
    <pockets-slider \r
        v-bind="props" \r
        #default="api"\r
    >\r
        <div\r
            class="slide-container"\r
        >\r
            <pockets-slider-slide #slide='slide'>\r
                <div class='slide' >\r
                    <img :src="slide.src"/>\r
                </div>\r
            </pockets-slider-slide>\r
        </div>\r
        <div class='d-flex gap-1 justify-content-center p-2 pb-0'>\r
            <button \r
                class='btn btn-accent-dk fa fa-chevron-left rounded-0 p-1'\r
                @click='api.rotate.left()'\r
            ></button>\r
            <button \r
                v-for='(slide, i) in api.slides'\r
                @click='api.rotate.to(i)'\r
                :class='{active: i === api.index}'\r
                class='btn btn-accent-dk p-1 rounded-0'\r
            >\r
                {{ i + 1 }}\r
            </button>\r
            <button \r
                class='btn btn-accent-dk fa fa-chevron-right rounded-0 p-1'\r
                @click='api.rotate.right()'\r
            ></button>\r
        </div>\r
    </pockets-slider>\r
</div>`,Fo=c({__name:`slider-slide-template.story`,setup(e){return(e,t)=>{let n=f(`pockets-slider-option-panel`),r=f(`pockets-story-demo-container`);return u(),L(r,{state:x(yo),html:x(Po)},{controls:A(({state:e})=>[z(n,{options:e.props},null,8,[`options`])]),_:1},8,[`state`,`html`])}}}),Io=r({__storyData:()=>Ro,default:()=>Lo}),Lo=Fo,Ro={tag:`pockets-slider`,route:`pockets vue/components/slider/slide-template`,component:`@pockets-components/slider/components/container.vue`,header:{sourceFile:`@pockets-components/slider/components/container.vue`,missingSourceFile:!1},storyIcon:`fa fa-code`,componentInfo:{exportName:`default`,displayName:`container`,description:``,tags:{},props:{duration:{name:`duration`,description:`determines the speed for in/out transitions. Should be in MS. Eg 1000 = 1000ms -> 1s`,required:!1,type:{name:`number`},defaultValue:{func:!1,value:`500`}},interval:{name:`interval`,description:`Time at which slide changes. Should be in MS. Eg 1000 = 1000ms -> 1s`,required:!1,type:{name:`number`},defaultValue:{func:!1,value:`2000`}},direction:{name:`direction`,description:`Starting direction slider moves in
        Two way bound via v-model:direction`,required:!1,type:{name:`Direction`},defaultValue:{func:!1,value:`"right"`}},tag:{name:`tag`,description:`Element for slider container`,required:!1,type:{name:`string`},defaultValue:{func:!1,value:`'div'`}},shiftCount:{name:`shiftCount`,description:`How many slides slider progresses on each action`,required:!1,type:{name:`number`},defaultValue:{func:!1,value:`1`}},slides:{name:`slides`,description:`Only used in data mode`,required:!1,type:{name:`union`,elements:[{name:`tuple`,elements:[]},{name:`false`}]},defaultValue:{func:!1,value:`false`}},pauseHovered:{name:`pauseHovered`,description:`if true, when the slider container is 
        hovered, the timer function will not fire.`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`true`}},debounceRotation:{name:`debounceRotation`,description:`if set to true, the switching of slides will be debounced
        based on the duration property. Useful to prevent users
        from spamming transitions.`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`true`}},swipeable:{name:`swipeable`,description:`If true, swipe motions will trigger rotations`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`true`}},name:{name:`name`,description:`Global transition name. Can be overriden on slide render component`,required:!1,type:{name:`TSIndexedAccessType`},defaultValue:{func:!1,value:`"slide"`}},autoRotate:{name:`autoRotate`,description:`If false, slide will not automatically change using interval.`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`true`}},index:{name:`index`,description:`Two way bound via v-model:index`,required:!1,type:{name:`number`},defaultValue:{func:!1,value:`0`}}},events:{},slots:[{name:`default`,scoped:!0,bindings:[],description:`Provides interface for slider.`,tags:{binding:[{title:`binding`,type:{name:`array`},name:`slides`,description:`List of provided slides. If using the #slides slot, it will be an array of the html elements in the slot.`},{title:`binding`,type:{name:`boolean`},name:`isManuallyPaused`,description:`Flag that is set when pause/resume is called.`},{title:`binding`,type:{name:`mixed`},description:`{function{ pause Pauses slider rotation.`},{title:`binding`,type:{name:`function`},name:`resume`,description:`Resumes slider rotation.`},{title:`binding`,type:{name:`object`},name:`rotate`,description:`Contains set of functions that can be called to navigate to different slides.`},{title:`binding`,type:{name:`.up function( count:number )`},name:`rotate`,description:`Rotates slider up.`},{title:`binding`,type:{name:`.down function( count:number )`},name:`rotate`,description:`Rotates slider down.`},{title:`binding`,type:{name:`.left function( count:number )`},name:`rotate`,description:`Rotates slider left.`},{title:`binding`,type:{name:`.right function( count:number )`},name:`rotate`,description:`Rotates slider right.`},{title:`binding`,type:{name:`.to function( count:number )`},name:`rotate`,description:`Navigates to specified slide.`},{title:`binding`,type:{name:`.direction function( direction: string, count:number )`},name:`rotate`,description:`Rotate slider in direction.`}]}},{name:`slides`,description:`Optional slot. If provided, each element inside it will be used as an 
        entry for the slides. You will also need to set the slides property to false.
        This allows you to use HTML for slides instead of data.`}],sourceFiles:[`C:/Users/Justin/Documents/Workspace/xampp/apps/pockets/htdocs/wp-content/plugins/pockets/vue/dev/packages/@pockets-components/slider/components/container.vue`]}},zo=r({__storyData:()=>Bo,default:()=>Vo}),Bo={route:`pockets vue/components/toast/About`,title:`About`,storyIcon:`fa fa-book`},Vo="\r\n## Toast notifications\r\n\r\nToast notifications are brief, auto-expiring messages that provide feedback or updates to users. The toast API can be used via the built-in ```pockets-ux-toast``` component, or through Pockets global api via ```$pockets.toast```.\r\n\r\nIt has three methods that display the provided message with different styles.\r\n\r\n- ```success( message: string )```\r\n- ```error( message: string )```\r\n- ```warn( message: string )```",Ho=`<pockets-ux-toast #default="toast">\r
    <div class="grid columns-3 gap-2">\r
        <button \r
            @click="toast.success('Success!')"\r
            class="btn btn-confirm p-2 fw-8 rounded-0"\r
        >\r
            Success\r
        </button>\r
        <button \r
            @click="toast.error('Error!')"\r
            class="btn btn-danger text-white p-2 fw-8 rounded-0"\r
        >\r
            Error\r
        </button>\r
        <button \r
            @click="toast.warn('Warning!')"\r
            class="btn btn-warning p-2 fw-8 rounded-0"\r
        >\r
            Warning\r
        </button>\r
    </div>\r
</pockets-ux-toast>`,Uo=c({__name:`component-example.story`,setup(e){return(e,t)=>{let n=f(`pockets-story-demo`),r=f(`pockets-story-demo-container`);return u(),L(r,null,{default:A(()=>[z(n,{html:x(Ho)},null,8,[`html`])]),_:1})}}}),Wo=r({__storyData:()=>Ko,default:()=>Go}),Go=Uo,Ko={tag:`pockets-ux-toast`,route:`pockets vue/components/Toast/Component Example`,component:`@pockets-components/toast/index.vue`,title:`Component Example`,header:{sourceFile:`@pockets-components/toast/index.vue`,missingSourceFile:!1},storyIcon:`fa fa-code`,componentInfo:{exportName:`default`,displayName:`toast`,description:``,tags:{},props:{},events:{},slots:[{name:`default`,scoped:!0,bindings:[],description:`Provides toast api.`,tags:{binding:[{title:`binding`,type:{name:`function( message: string )`},name:`success`,description:`Shows success message.`},{title:`binding`,type:{name:`function( message: string )`},name:`warn`,description:`Shows success message.`},{title:`binding`,type:{name:`function( message: string )`},name:`error`,description:`Shows success message.`}]}}],sourceFiles:[`C:/Users/Justin/Documents/Workspace/xampp/apps/pockets/htdocs/wp-content/plugins/pockets/vue/dev/packages/@pockets-components/toast/index.vue`]}},qo=`<div class="grid columns-3 gap-2">\r
    <button \r
        @click="$pockets.toast.success('Success!')"\r
        class="btn btn-confirm p-2 fw-8 rounded-0"\r
    >\r
        Success\r
    </button>\r
    <button \r
        @click="$pockets.toast.error('Error!')"\r
        class="btn btn-danger text-white p-2 fw-8 rounded-0"\r
    >\r
        Error\r
    </button>\r
    <button \r
        @click="$pockets.toast.warn('Warning!')"\r
        class="btn btn-warning p-2 fw-8 rounded-0"\r
    >\r
        Warning\r
    </button>\r
</div>`,Jo=c({__name:`global.example.story`,setup(e){return(e,t)=>{let n=f(`pockets-story-demo`),r=f(`pockets-story-demo-container`);return u(),L(r,null,{default:A(()=>[z(n,{html:x(qo)},null,8,[`html`])]),_:1})}}}),Yo=r({__storyData:()=>Zo,default:()=>Xo}),Xo=Jo,Zo={title:`Global Instance Example`,route:`pockets vue/components/toast/global example`,header:{sourceFile:!1,missingSourceFile:!1},storyIcon:`fa fa-code`},Qo=`\r
<div class='grid columns-1 gap-2'>\r
\r
    <button @click='props.count++' class='btn btn-grey-900 p-1 px-4 me-auto'> \r
        Click to increase count\r
    </button>\r
\r
    <pockets-watch-state \r
        :callback='(newCount, oldCount) => $pockets.toast(\`New Count is: \${newCount}, Old Count was: \${oldCount}\`)' \r
        :source='props.count'\r
    />\r
\r
    <pockets-ux-code-block :code='props' language='js'/>\r
\r
</div>\r
`,$o=c({__name:`example.story`,setup(e){let t={props:{count:0}};return(e,n)=>{let r=f(`pockets-story-demo`),i=f(`pockets-story-demo-container`);return u(),L(i,{state:x(t)},{default:A(({state:e})=>[z(r,{html:x(Qo),state:e},null,8,[`html`,`state`])]),_:1},8,[`state`])}}}),es=r({__storyData:()=>ns,default:()=>ts}),ts=$o,ns={route:`pockets vue/components/utilities/watch-state/example`,component:`@pockets-components/utility/watch-state/index.vue`,tag:`pockets-watch-state`,header:{sourceFile:`@pockets-components/utility/watch-state/index.vue`,missingSourceFile:!1},storyIcon:`fa fa-code`,componentInfo:{description:`\r
  This component is renderless. It mimics VUE's native watch function, providing a way to use\r
  watch functionality in templates.\r
`,exportName:`default`,displayName:`watch-state`,tags:{},props:{source:{name:`source`,description:`Source should be a VUE reactive or a function that returns reactive properties.`,required:!0,type:{name:`WatchSource`,elements:[{name:`unknown`}]}},callback:{name:`callback`,description:`Callback is fired when the watched source changes.  
    It will be passed 2 arguments; newValue and Oldvalue. 
    <br>
    Example: <code>callback: fn( newValue, oldValue ) => { ...stuff }</code>`,required:!0,type:{name:`TSFunctionType`}},deep:{name:`deep`,description:`If true, will watch nested properties of source.`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`false`}},immediate:{name:`immediate`,description:`If true, will fire callback immediately when component is mounted.`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`false`}}},events:{},slots:[{name:`default`,description:`Just a generic slot with no bindings.`}],sourceFiles:[`C:/Users/Justin/Documents/Workspace/xampp/apps/pockets/htdocs/wp-content/plugins/pockets/vue/dev/packages/@pockets-components/utility/watch-state/index.vue`]}},rs=r({__storyData:()=>is,default:()=>as}),is={route:`pockets vue/components/wp-error/about`,storyIcon:`fa fa-book`},as=`\r
# WP Error\r
\r
A component to render WP error objects.`,os=`<pockets-wp-error\r
    :errors='props.errors'\r
>\r
</pockets-wp-error>\r
`,ss=r({__storyData:()=>ls,default:()=>cs}),cs={__name:`example.story`,setup(e){let t={props:{errors:{message:[`I am an error message!`,`Here's another error!`]}}};return(e,n)=>{let r=f(`pockets-story-demo`),i=f(`pockets-story-demo-container`);return u(),L(i,{state:x(t)},{default:A(({state:e})=>[z(r,{state:e,html:x(os)},null,8,[`state`,`html`])]),_:1},8,[`state`])}}},ls={route:`pockets vue/components/wp-error/example`,component:`@pockets-components/wp-error/index.vue`,tag:`pockets-wp-error`,header:{sourceFile:`@pockets-components/wp-error/index.vue`,missingSourceFile:!1},storyIcon:`fa fa-code`,componentInfo:{exportName:`default`,displayName:`wp-error`,description:``,tags:{},props:{errors:{name:`errors`,required:!1,type:{name:`{\r
  message: string[]\r
}`},defaultValue:{func:!1,value:`() => ( { message: [] } )`}}},events:{},slots:[{name:`default`,scoped:!0,bindings:[{name:`errors`,title:`binding`}],description:`Can be used to override error rendering. Only renders if there's at least one 
        message in errors.`,tags:{binding:[{title:`binding`,type:{name:`{ message: string[] }`},name:`errors`,description:`the errors prop passed in.`}]}}],sourceFiles:[`C:/Users/Justin/Documents/Workspace/xampp/apps/pockets/htdocs/wp-content/plugins/pockets/vue/dev/packages/@pockets-components/wp-error/index.vue`]}},us={props:{current:0,volume:20,mode:`normal`,playerVars:{autoplay:0,mute:0,rate:1},items:[{videoId:`S7SLep244ss`,placeholderTitle:`Test pattern 1`,playerVars:{start:100,end:200}},{videoId:`IIqtuupvdWg`,placeholderTitle:`Test pattern 2`,playerVars:{start:0,end:0}},{videoId:`k3eVY1fgGXA`,placeholderTitle:`Test pattern 3`,playerVars:{start:0,end:0}},{videoId:`VJDVvYC0-aU`,placeholderTitle:`Test pattern 4`,playerVars:{start:0,end:0}},{videoId:`_E9bWG7wl3g`,placeholderTitle:`Code`,playerVars:{start:0,end:0}},{videoId:`9G24gM1Czoo`,placeholderTitle:`Plasma`,playerVars:{start:0,end:0}},{videoId:`IWVJq-4zW24`,placeholderTitle:`Space`,playerVars:{start:0,end:0}}]}},ds={class:`grid gap-2 columns-1 align-items-start`},fs={class:`grid gap-1 bg-grey-800 p-1`},ps=b(`label`,{class:`text-primary-lt fs-20 fw-8`},`Videos`,-1),ms={class:`grid columns-1 gap-1`},hs=c({__name:`example.story`,setup(e){let t=e=>{e.value.props.playerVars.autoplay=0,T(()=>e.value.props.items.length,()=>{e.value.props.current>=e.value.props.items.length-1&&(e.value.props.current=e.value.props.items.length-1)},{deep:!0,immediate:!0})},n=te(async()=>(await re.crud(`wp`).init(null).read({"load_template:render":{template:`youtube/generic-playlist/main`}})).render,`<div class='p-2 bg-black loading-container' loading=true>Loading demo. Please wait...</div>`);return(e,r)=>{let i=f(`pockets-story-demo`),a=f(`youtube-option-panel`),o=f(`pockets-ux-repeater`),s=f(`pockets-story-demo-container`);return u(),L(s,{state:x(us),init:x(t),"local-storage":`youtube-playlist-demo`},{default:A(({state:e})=>[b(`div`,ds,[z(i,{html:x(n),state:e},null,8,[`html`,`state`]),b(`div`,fs,[ps,z(o,m({modelValue:e.props.items,"onUpdate:modelValue":t=>e.props.items=t},{layout:`tabbed`,newItem:{videoId:``,playerVars:{start:0}},minItems:1,maxItems:99999}),{"item-tab-text":A(({item:e})=>[b(`div`,ms,[b(`span`,null,B(e.placeholderTitle??e.videoId),1)])]),item:A(({item:e})=>[z(a,{state:e},null,8,[`state`])]),_:2},1040,[`modelValue`,`onUpdate:modelValue`])])])]),_:1},8,[`state`,`init`])}}}),gs=r({__storyData:()=>vs,default:()=>_s}),_s=hs,vs={route:`pockets vue/components/youtube/playlist/example`,component:`@pockets-components/youtube/components/play-list/index.vue`,tag:`youtube-playlist`,header:{sourceFile:`@pockets-components/youtube/components/play-list/index.vue`,missingSourceFile:!1},storyIcon:`fa fa-code`,componentInfo:{description:`\r
  A renderless wrapper that provides playlist functionality for the youtube player component. Should be used with the youtube component. \r
`,exportName:`default`,displayName:`play-list`,tags:{},props:{current:{name:`current`,description:`Current item in play list.`,required:!1,type:{name:`Number`}},mode:{name:`mode`,description:`Mode for playlist. If shuffle, calling prev/next will select a random item to play.`,required:!1,type:{name:`union`,elements:[{name:`"shuffle"`},{name:`"normal"`}]}},playerVars:{name:`playerVars`,description:`These are applied as a default fallback and wiill be merged with the current items playerVars, with the latter taking priority.
    View the <a href='#/pockets-vue/components/youtube/player/example?tab=component-info'>Player component</a> for information
    on playerVars`,required:!1,type:{name:`TSIndexedAccessType`}},items:{name:`items`,description:`This is the list of videos to use for the playlist.
    Should be an array of the same arguments the <a href='#/pockets-vue/components/youtube/player/example?tab=component-info'>Youtube player component</a> takes`,required:!0,type:{name:`Array`,elements:[{name:`playerProps`}]}}},events:{},slots:[{name:`default`,scoped:!0,bindings:[{name:`active`,title:`binding`},{name:`items`,title:`binding`},{name:`playList`,title:`binding`},{name:`playerVars`,title:`binding`}],description:`Provides context that can be passed down to a youtube player or other UX.`,tags:{binding:[{title:`binding`,type:{name:`computed< playerVars >`},name:`playerVars`,description:`The combined playerVars of the components props and the active video.`},{title:`binding`,type:{name:`reactive< playerProps >`},name:`active`,description:`The current active video in the playlist`},{title:`binding`,type:{name:`reactive<[ playerProps ]>`},name:`items`,description:`An array of videos in the playlist. Corresponds to the items prop.`}]}}],sourceFiles:[`C:/Users/Justin/Documents/Workspace/xampp/apps/pockets/htdocs/wp-content/plugins/pockets/vue/dev/packages/@pockets-components/youtube/components/play-list/index.vue`]}},ys=r({__storyData:()=>bs,default:()=>xs}),bs={route:`pockets vue/components/youtube/Player/About`,storyIcon:`fa fa-book`},xs="\r\n## Youtube\r\n#### ```youtube```\r\n\r\nThis component allows the embedding of youtube videos.",Ss=`<youtube \r
    v-bind="props"\r
/>`,Cs=r({__storyData:()=>Ts,default:()=>ws}),ws={__name:`example.story`,setup(e){let t={props:{videoId:`S7SLep244ss`,width:`100%`,height:`500px`,volume:10,playerVars:{start:60,end:90,rate:1,controls:0,mute:0,loop:1},showPlaceholder:!0,showOverlay:!0,placeholderTitle:`Test Pattern 1`}};return(e,n)=>{let r=f(`youtube-option-panel`),i=f(`pockets-story-demo-container`);return u(),L(i,{state:x(t),html:x(Ss),"local-storage":`youtube-player-demo`},{controls:A(({state:e})=>[z(r,{state:e.props},null,8,[`state`])]),_:1},8,[`state`,`html`])}}},Ts={tag:`youtube`,route:`pockets vue/components/youtube/Player/Example`,component:`@pockets-components/youtube/components/player/index.vue`,title:`Example`,header:{sourceFile:`@pockets-components/youtube/components/player/index.vue`,missingSourceFile:!1},storyIcon:`fa fa-code`,componentInfo:{exportName:`default`,displayName:`player`,description:``,tags:{},props:{videoId:{name:`videoId`,description:`Video Id. This will be the string after ?v= in the youtube videos url.`,required:!0,type:{name:`string`}},height:{name:`height`,description:`Player height.`,required:!1,type:{name:`string`}},width:{name:`width`,description:`Player width.`,required:!1,type:{name:`string`}},playerVars:{name:`playerVars`,description:`Options for player. See <a href='https://developers.google.com/youtube/iframe_api_reference'>Iframe Documentation</a>`,required:!1,type:{name:`{\r
    end?: number;\r
    start?: number;\r
    mute?: boolean;\r
    autoplay?: boolean;\r
    loop?: boolean;\r
    controls?: boolean;\r
    rate?: number;\r
    modestbranding?: boolean;\r
    showinfo?: boolean;\r
}`}},placeholderTitle:{name:`placeholderTitle`,description:`Only shows if showOverlay is set.`,required:!1,type:{name:`string`}},showPlaceholder:{name:`showPlaceholder`,description:`If true, will show a placeholder image and optionally also an overlay if showOverlay is true`,required:!1,type:{name:`union`,elements:[{name:`boolean`},{name:`number`}]}},volume:{name:`volume`,description:`Sets Players initial volume.`,required:!1,type:{name:`union`,elements:[{name:`boolean`},{name:`number`},{name:`string`}]}},playerStyle:{name:`playerStyle`,description:`Applies to the style tag of the player iframe`,required:!1,type:{name:`string`}},showOverlay:{name:`showOverlay`,description:`If true, will show placeholderTitle and a play button.`,required:!1,type:{name:`union`,elements:[{name:`boolean`},{name:`number`}]}},containerRef:{name:`containerRef`,description:`Controls what the component uses for its container ref.
        This affects things like the fullScreen controller.
        Defaults to container which will use the ref in the template.
        If set to parent, it will use the components parent element.
        You can also pass in a reference to an element.`,required:!1,type:{name:`union`,elements:[{name:`"container"`},{name:`"parent"`},{name:`Ref`,elements:[{name:`union`,elements:[{name:`HTMLElement`},{name:`null`}]}]}]}}},events:{},slots:[{name:`default`,scoped:!0,bindings:[],description:`Additional content within player container. Useful for using the player as a background video
        with content.`,tags:{binding:[{title:`binding`,type:{name:`function( action: string< "play", "pause", "seekTo" >, ...args )`},name:`action`,description:`Takes a string which is a player action. play / pause / seekTo. Additional arguments can be passed in and will be given to the coresponding action`},{title:`binding`,type:{name:`reactive<{ ready: < string | null > = null, status: < string > = "unstarted" }>`},name:`state`,description:`Contains players state. Status is the current state of the player. Eg: buffering, playing. Can also be an error code. Ready is set when the player instance is initially ready via the players onReady hook. Will be set to null when player is reinitialized or destroyed.`},{title:`binding`,type:{name:` tiny emitter `},name:`event`,description:`An event bus used for performing player actions.`}]}}],sourceFiles:[`C:/Users/Justin/Documents/Workspace/xampp/apps/pockets/htdocs/wp-content/plugins/pockets/vue/dev/packages/@pockets-components/youtube/components/player/index.vue`]}},Es=r({__storyData:()=>Ds,default:()=>Os}),Ds={route:`pockets plugin/crud/component/about`,storyIcon:`fa fa-book`},Os="## Crud Connection\r\n### ```pockets-crud-connection```\r\n\r\nThis component is a transparent wrapper that can be used to make Crud Requests. ",ks=`<pockets-crud-connection\r
    #default="connection"\r
    v-bind='props'\r
>\r
    <div \r
        class="grid columns-1 gap-2 loading-container fw-8" \r
        :loading="connection.loading"\r
        style="overflow: hidden"\r
    >\r
        <button \r
            @click="connection.load"\r
            class="btn btn-accent-dk p-2"\r
        >\r
            Click To Fetch Data\r
        </button>\r
        <span v-if='connection.hasRun && !connection.loading'>\r
            Status\r
        </span>\r
        <span \r
            v-if="connection.failed"\r
            class="alert alert-danger m-0"\r
        >\r
            {{ connection.failed }}\r
        </span>\r
        <div \r
            v-if="connection.results"\r
            class="grid columns-1 gap-2"\r
        >\r
            <span class="alert alert-confirm m-0">Success</span>\r
            <span>Results</span>\r
            <pockets-ux-code-block\r
                :code='connection.results'\r
            ></pockets-ux-code-block>\r
        </div>\r
    </div>\r
</pockets-crud-connection>`,As=r({__storyData:()=>Ms,default:()=>js}),js={__name:`crud.story`,setup(e){let t={props:{clearOnLoad:!0,autoLoad:!1,action:`read`,model:`posts`,init:{post_type:[`any`]},input:{"items:<=":[`title`]}}};return(e,n)=>{let r=f(`pockets-story-demo-container`);return u(),L(r,{state:x(t),html:x(ks)},null,8,[`state`,`html`])}}},Ms={tag:`pockets-crud-connection`,route:`pockets plugin/crud/component/example`,component:`@pockets-core/crud/component/index.vue`,header:{sourceFile:`@pockets-core/crud/component/index.vue`,missingSourceFile:!1},storyIcon:`fa fa-code`,componentInfo:{exportName:`default`,displayName:`component`,description:``,tags:{},props:{input:{name:`input`,description:`Input args`,required:!0,type:{name:`any`},defaultValue:{func:!1,value:`() => ({\r
    items: ['title']\r
})`}},action:{name:`action`,description:`Action to apply to Crud resource.`,required:!0,type:{name:`union`,elements:[{name:`"create"`},{name:`"read"`},{name:`"update"`},{name:`"delete"`}]},defaultValue:{func:!1,value:`"read"`}},init:{name:`init`,description:`Data to use to initialize Crud resource.`,required:!0,type:{name:`any`},defaultValue:{func:!1,value:`() => ( {\r
    post_type: "post"\r
} )`}},model:{name:`model`,description:`Crud Model name`,required:!0,type:{name:`string`},defaultValue:{func:!1,value:`"posts"`}},output:{name:`output`,description:`Output args`,required:!1,type:{name:`any`}},autoLoad:{name:`autoLoad`,description:`If true, connection will automatically be run when component mounts.`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`true`}},messageTime:{name:`messageTime`,description:`How long to show connection result message for.`,required:!1,type:{name:`number`},defaultValue:{func:!1,value:`3000`}},cachingEnabled:{name:`cachingEnabled`,description:`If true, subsequent connection loads with the same query will use a cached version.`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`false`}},clearOnLoad:{name:`clearOnLoad`,description:`If true, results will be cleared every time connection is loaded.`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`false`}},contextURL:{name:`contextURL`,required:!1,type:{name:`union`,elements:[{name:`boolean`},{name:`string`}]},defaultValue:{func:!1,value:`false`}},hash:{name:`hash`,required:!1,type:{name:`number`},defaultValue:{func:!1,value:`0`}}},events:{},slots:[{name:`default`,scoped:!0,bindings:[],description:`Provides interface for Crud Connection`,tags:{binding:[{title:`binding`,type:{name:`function`},name:`load`,description:`Used to load connection.`},{title:`binding`,type:{name:`any`},name:`results`,description:`Results of calling load.`},{title:`binding`,type:{name:`boolean`},name:`failed`,description:`Will be true if load call fails. Resets each time load is called.`},{title:`binding`,type:{name:`boolean`},name:`loading`,description:`When load is called, this will be true until connection resolves.`},{title:`binding`,type:{name:`boolean`},name:`showMessage`,description:`When load is called, this will show when it is resolved for the duration set in the messageTime property.`},{title:`binding`,type:{name:`boolean`},name:`hasRun`,description:`Initially set to false. Becomes true when first load call is resolved.`}]}}],sourceFiles:[`C:/Users/Justin/Documents/Workspace/xampp/apps/pockets/htdocs/wp-content/plugins/pockets/vue/dev/packages/@pockets-core/crud/component/index.vue`]}},Ns=r({__storyData:()=>Ps,default:()=>Fs}),Ps={group:`pockets-vue`,title:`Adding a Plugin`,storyIcon:`fa fa-book`},Fs='\r\n## Adding a plugin\r\n\r\nTo add a plugin, create a file called ```pockets-plugin.ts``` anywhere in your project folder.\r\nWhen Pockets runs, it will search for all files with this name, and run them during 2 different\r\nhooks.\r\n\r\n- ```createApp``` \r\n    Called every time a VUE app instance is created. You can do things like install 3rd party plugins, or register new components.\r\n- ```init```\r\n    Called once when ```$pockets.init``` is called. This happens once when\r\n    the ```$pockets``` library is first loaded. Pockets does not have an APP instance during this hook, so do not use the app argument. This hook is useful for modifying or creating global data or one time\r\n    setup routines.\r\n\r\n###### Example ```pockets-plugin.ts``` file\r\n\r\n```ts\r\nimport { defineAsyncComponent } from "vue"\r\n\r\nlet component = defineAsyncComponent( () => import("./my-component.vue") )\r\n\r\nexport let plugin:$pocketsPlugin = {\r\n    createApp(app: any, $pockets: $pockets){ \r\n        app.component( \'my-new-component\', component )\r\n    },\r\n    init: (app: any, $pockets: $pockets) => { \r\n    }\r\n}\r\n```',Is=r({__storyData:()=>Ls,default:()=>Rs}),Ls={route:`pockets plugin/about`,title:`About`,storyIcon:`fa fa-book`},Rs=`\r
## About\r
 \r
Pockets is a framework for organizing application logic and data into structured, reusable components. It provides conventions and utilities for defining models, handling data operations, and structuring code in a consistent way.\r
\r
The goal of Pockets is to simplify how data-driven features are built and maintained by introducing clear patterns for interacting with models, queries, and related logic. This approach helps keep application code modular, predictable, and easier to navigate as projects grow.`,zs=r({__storyData:()=>Bs,default:()=>Vs}),Bs={route:`pockets plugin/crud/about`,title:`About`,priority:-1e3,storyIcon:`fa fa-book`},Vs='\r\n# About Crud\r\n\r\nCRUD is an acronym that stands for ```create```, ```read```, ```update```, and ```delete```. It is a set of actions used for managing and manipulating data in a database or other data source such as an API. In the context of Wordpress, this is used to manage various data objects like ```WP_POST```, ```WP_TERM```, ```WP_USER```, site options and all other aspects of Wordpress data.\r\n\r\n### Actions\r\n\r\nEach of these CRUD actions takes a set of one or more arguments and uses them to perform its task.\r\n \r\n- **```create```**<br>\r\n  Used to create a new resource.\r\n- **```read```**<br>\r\n  Used to read data from a resource.  \r\n- **```update```**<br>\r\n  Used to update data on a resource.  \r\n- **```delete```**<br>\r\n  Used to delete a resource.\r\n\r\n### How to use\r\n\r\nCRUD models can be called server side, client side or via a REST Request. A call is comprised of five parameters:\r\n\r\n- ```$model```<br>\r\n  The [model](#/pockets-plugin/crud/models/about) the call is for. \r\n\r\n- ```$init```<br>\r\n  A single argument used to get the resource the action will be performed on. This is handled by the ```get_resource``` class that transforms the argument into a resource or an error.\r\n\r\n- ```$action```<br>\r\n  The ```create```/```read```/```update```/```delete``` action to perform on the resource.\r\n\r\n- ```$input```<br>\r\n  Used by all four actions. This is an optional argument for the ```delete``` action.\r\n\r\n- ```$output```<br>\r\n  An optional argument that is used by the ```create``` and ```update``` actions. Once the ```create```/```update``` action is performed, this will be passed to the ```read``` action and used for the return value of the operation.\r\n\r\n##### Javascript\r\n\r\nFor client side CRUD calls, Pockets has a helper function that makes calls easier. The structure is:\r\n\r\n```js\r\nlet response = await $pockets.crud( $model ).init( $init ).$action( $input, $output )\r\n```\r\n##### PHP\r\nPockets also has a server side helper function for CRUD calls:\r\n```php\r\n\\pockets::crud( $model )::init( $init )->$action( $input, $output );\r\n```\r\n##### REST Request\r\nWhen directly calling the endpoint, requests are handled as an array of requests, with each one returning its own result. This allows for multiple CRUD actions to be performed in one request. For authorization, you will need to send ```"X-WP-Nonce"``` with a valid nonce created with ```wp_create_nonce``` as part of the headers, otherwise all actions will be performed in the context of a visitor with no privileges.\r\n\r\n<p class=\'alert alert-danger\'>\r\nThere is no guarantee in what order requests will be handled. Do not rely on operations being run in a specific order.\r\n</p>\r\n\r\n```js\r\n \r\nlet site = "http://hybridwebdev.com/wp-json/pockets/crud"\r\n\r\nlet responses = await axios.post( site, [ {\r\n    model: $model,\r\n    init: $init,\r\n    action: $action,\r\n    input: $input,\r\n    output: $output,\r\n} ] )\r\n\r\nconsole.log( responses )\r\n\r\n```',Hs=r({__storyData:()=>Us,default:()=>Ws}),Us={route:`pockets plugin/crud/adding data/meta-data`,title:`CUD Model Meta Data`,storyIcon:`fa fa-book`},Ws=`## CRUD Model Meta Data\r
\r
Meta data in WordPress refers to additional information associated with an object. Each object (\`wp_post\`, \`wp_user\`, etc.) can have custom fields or meta data. This meta data allows developers to store and retrieve specific information related to an object. Pockets **CRUD** models utilize this system to safely add meta data through a whitelisting approach. New meta keys can be attached to CRUD models programatically, allowing developers to seamlessly extend or nodify the Meta DATA attached to a CRUD model. Only meta keys that are registered will be used during read/update operations. Any other keys wil be ignored. \r
\r
### Adding and Removing Meta Keys\r
\r
To add new meta keys to an object, you use the \`register_meta\` function. This function registers a meta key to a particular object type, specifying the data type, sanitization callback, and authorization callback. **CRUD** models that utilize meta data each have their own unique \`meta_object_type\` key they use to get these registered meta keys. You can find this key in the relevant **CRUD** models \`read/update\` walker classes.\r
\r
To add a new meta key, use the \`register_meta()\` function during your theme or plugin's initialization. This establishes the meta key's structure and behavior.\r
\r
##### *Registering a Meta Key*:\r
\r
\`\`\`php\r
// Example of registering a meta key for posts\r
register_meta(\r
    'post',\r
    'custom_meta_key',\r
    [\r
        'type'         => 'string',\r
        'description'  => 'Custom Meta Key Description',\r
        'single'       => true,\r
        'show_in_rest' => true,\r
        // Add sanitization and authorization callbacks here\r
    ]\r
);\r
\`\`\`\r
\r
After registering the meta key, whenever meta data is updated or retrieved in a **CRUD** model, it will automatically be handled by your registered meta keys logic.\r
\r
##### *Removing Meta Keys*\r
\r
To unregister a meta key, removing it from the registered meta keys, use \`unregister_meta_key()\`.\r
\r
\`\`\`php\r
// Unregister a meta key (does not delete existing data)\r
unregister_meta_key('post', 'custom_meta_key');\r
\`\`\`\r
\r
Note: \`unregister_meta_key()\` only removes the meta key from registration. It does not delete the existing data associated with that key.\r
\r
If you want to completely delete a meta key and its data, you can unregister the key and then use the relevant WP functionality to remove the residual data if desired.\r
\r
### Sanitization and Authorization\r
\r
When registering a meta key, you can define callbacks for sanitization and authorization. Sanitization ensures that the data is formatted correctly before saving it to the database, and authorization checks if the current user has the right capabilities to manipulate this meta key.\r
\r
\`\`\`php\r
function custom_sanitize_callback($value) {\r
    // Sanitize the value before saving it to the database\r
    return sanitize_text_field($value);\r
}\r
\r
function custom_authorize_callback($object_id, $meta_key, $user_id) {\r
    // Check if the user has the necessary capabilities to update this meta key\r
    return current_user_can('edit_post', $object_id);\r
}\r
\r
// Add the callbacks to the register_meta function\r
register_meta(\r
    'post',\r
    'custom_meta_key',\r
    [\r
        'type'              => 'string',\r
        'description'       => 'Custom Meta Key Description',\r
        'single'            => true,\r
        'show_in_rest'      => true,\r
        'sanitize_callback' => 'custom_sanitize_callback',\r
        'auth_callback'     => 'custom_authorize_callback',\r
    ]\r
);\r
\`\`\`\r
\r
### Generating SCHEMAS for registered meta keys\r
\r
Pockets has a utility class to easily create dynamic SCHEMAS for registered meta keys. It takes 3 arguments, and returns a generated schema for the registered meta keys.\r
\r
\`\`\`php\r
\\pockets\\crud\\schema\\registered_meta_keys::build( \r
    action: "read",\r
    meta_keys: get_registered_meta_keys('post'),\r
    meta_object_type: "post"\r
);\r
\`\`\`\r
\r
##### *Arguments*\r
\r
* \`action\`\r
  CRUD action schema is for. Should be "read" or "update".\r
* \`meta_keys\`\r
  Array of keys returned from calling\`get_registered_meta_keys()\`\r
* \`meta_object_type\`\r
  Object type key used to register the meta keys.\r
\r
Heres an example of what a READ resource walker looks like:\r
\r
\`\`\`php\r
class my_crud_model_read_resource extends \\pockets\\crud\\resource_walker {\r
  \r
    #[ \\pockets\\crud\\schema\\attribute( __CLASS__.'::__get_meta_schema' ) ]\r
    function meta() {}\r
\r
    static function __get_meta_schema(){\r
        return \\pockets\\crud\\schema\\registered_meta_keys::build( \r
            meta_keys: get_registered_meta_keys('post'),\r
            action: "read", // can be "read" | "update"\r
            meta_object_type: "post",\r
        );\r
    }\r
\r
}\r
\`\`\`\r
\r
##### *Attaching Schema data to registered meta key*\r
\r
When registering a meta key with \`register_meta()\`, you can provide a \`schema\` argument for that meta key under the \`description\` entry. The \`schema\` argument has 2 entries, \`read\` and \`update\` and designates what operation the schema applies to.\r
\r
For example:\r
\r
\`\`\`php\r
$meta_arguments = [\r
    'description' => [\r
        'schema' => [\r
            'read' => [\r
                /*\r
                    schema definition for read operation here.\r
                */\r
                'type' => 'null'\r
            ],\r
            'update' => [\r
                /*\r
                    schema definition for update operation here.\r
                */\r
                'type' => 'string'\r
            ]\r
        ]\r
    ],\r
];\r
\r
register_meta('post', 'test-meta', $meta_arguments );\r
\`\`\`\r
\r
Using this functionality, you can make it easier for users to understand how to use your meta keys properly by providing information about the structure of data it requires.\r
\r
### Additional information\r
\r
For more information on meta keys see the following resources:\r
\r
* [register_meta](https://developer.wordpress.org/reference/functions/register_meta/)\r
* [unregister_meta_key](https://developer.wordpress.org/reference/functions/unregister_meta_key/)\r
* [get_registered_meta_keys](https://developer.wordpress.org/reference/functions/get_registered_meta_keys/)\r
`,Gs=r({__storyData:()=>Ks,default:()=>qs}),Ks={route:`pockets plugin/crud/adding data/options`,title:`CRUD Model Options`,storyIcon:`fa fa-book`},qs=`## CRUD Model Options\r
\r
Options in WordPress are additional data stored under the \`wp_options\` table. New options can be registered with defined logic for saving and retrieving it, as well as applying a default value when none is present in the database. Pockets utilizes this system to safely add options through a whitelisting approach. New options can be registered programatically, allowing developers to seamlessly extend or modify the options available. Only options that are registered will be used during **CRUD** model read/update operations. Any other options wil be ignored.\r
\r
### Adding and Removing Option Keys\r
\r
To add a new option, you use the \`register_setting\` function. This function registers an option, specifying the data type, sanitization callback, and authorization callback.\r
\r
#### _Registering an option_:\r
\r
\`\`\`php\r
register_setting(\r
    'options',\r
    'custom_option_name',\r
    [\r
        'type'         => 'string',\r
        // Add sanitization and authorization callbacks here\r
        'auth_callback' => function(){},\r
        'sanitize_callback' => function(){},\r
        'default' => "some value"\r
    ]\r
);\r
\`\`\`\r
\r
After registering an option, whenever it is is updated or retrieved, it will automatically be handled by your registered settings logic.\r
\r
#### _Removing an option_\r
\r
To unregister an option, removing it from the registered options, use \`unregister_setting()\`.\r
\r
\`\`\`php\r
// Unregister an option (does not delete existing data)\r
unregister_setting('options', 'custom_option_name');\r
\`\`\`\r
\r
Note: \`unregister_setting()\` only removes the option from registration. It does not delete the existing data associated with that option. If you want to completely delete an option and its data, you can unregister the option and then use the relevant WP functionality to remove the residual data if desired.\r
\r
### Sanitization and Authorization\r
\r
When registering an option, you can define callbacks for sanitization and authorization. Sanitization ensures that the data is formatted correctly before saving it to the database, and authorization checks if the current user has the right capabilities to manipulate the option. The \`auth_callback\` is a custom paramater used by **Pockets**. It is only fired when called from the \`wp-options\` **CRUD** model. When called, an argument of \`action\` is passed, which is one of \`read\` or \`update\` based on the operation calling it.\r
\r
\`\`\`php\r
function custom_sanitize_callback($value) {\r
    // Sanitize the value before saving it to the database\r
    return sanitize_text_field($value);\r
}\r
\r
function custom_authorize_callback( string $action ) {\r
    // Check if the user has the necessary capabilities to update this option.\r
    return current_user_can( 'manage_options' );\r
}\r
\r
// Add the callbacks to the register_setting function\r
register_setting(\r
    'options',\r
    'custom_option_name',\r
    [\r
        'type'              => 'string',\r
        'sanitize_callback' => 'custom_sanitize_callback',\r
        'auth_callback'     => 'custom_authorize_callback',\r
    ]\r
);\r
\`\`\`\r
\r
### Generating SCHEMAS for registered options\r
\r
Pockets includes the **CRUD** model \`wp-options\` which can be used to interact with registered options. This model automatically collects all settings registered via \`registered_setting\` and generates schemas for them. It will only generate a schema for settings that have an \`option_group\` set to \`options\`.\xA0\r
\r
#### _Attaching Schema data to registered options_\r
\r
When registering an option with \`register_setting()\`, you can provide a \`schema\` argument for that option under the \`description\` entry. The \`schema\` argument has 2 entries, \`read\` and \`update\` and designates what operation the schema applies to.\r
\r
For example:\r
\r
\`\`\`php\r
$option_arguments = [\r
    'description' => [\r
        'schema' => [\r
            'read' => [\r
                /*\r
                    schema definition for read operation here.\r
                */\r
                'type' => 'null'\r
            ],\r
            'update' => [\r
                /*\r
                    schema definition for update operation here.\r
                */\r
                'type' => 'string'\r
            ]\r
        ]\r
    ],\r
];\r
\r
register_setting('options', 'custom_option_name', $option_arguments );\r
\`\`\`\r
\r
Using this functionality, you can make it easier for users to understand how to use your option properly by providing information about the structure of data it requires.\r
\r
### Additional information\r
\r
For more information on options see the following resources:\r
\r
*   [unregister\\_setting](https://developer.wordpress.org/reference/functions/unregister_setting/)\r
*   [register\\_setting](https://developer.wordpress.org/reference/functions/register_setting/)\r
*   [get\\_registered\\_settings](https://developer.wordpress.org/reference/functions/get_registered_settings/)`,Js=r({__storyData:()=>Ys,default:()=>Xs}),Ys={route:`pockets plugin/crud/models/about`,title:`About`,storyIcon:`fa fa-book`},Xs="\r\n## About CRUD models\r\n\r\nA Pockets CRUD model is a class that extends ```pockets\\crud\\model``` and defines how to perform ```create```, ```read```, ```update```, and ```delete``` operations on a specific resource. For example a ```post```, ```term``` or ```user```.\r\n\r\nEach model has a ```model_name``` which is used to call the model and represents one resource type. For example:\r\n\r\n```php\r\nclass MyModel extends \\pockets\\crud\\model {\r\n    public static string $model_name = 'my-post-model';\r\n}\r\n```\r\n\r\nTo call this model, you'd use ```\\pockets::crud('my-post-model')```\r\n\r\n### CRUD Operations\r\n\r\nEvery model exposes four methods that correspond to the 4 CRUD actions:\r\n\r\n```php\r\nclass MyModel extends \\pockets\\crud\\model {\r\n    \r\n    public function create( array $input, ?array $output ){}\r\n    public function read( array $input ){}\r\n    public function update( array $input, ?array $output ){}\r\n    public function delete( array $input ){}\r\n\r\n}\r\n```\r\n\r\nThese methods:\r\n\r\n- accept input and optional output fields\r\n\r\nYou can use whatever logic you wish in these methods and can return anything, such as data or even an instance of ```\\Wp_Error```.\r\n\r\n### Permissions\r\n\r\nSee [permissions](#/pockets-plugin/crud/models/permissions)\r\n\r\n### Adapters\r\n\r\nSee [adapters](#/pockets-plugin/crud/models/adapters)\r\n\r\n### Schemas\r\n\r\nSee [Schemas](#/pockets-plugin/crud/models/schemas)\r\n\r\n### Model Registry\r\n\r\nThe ```pockets\\crud\\model``` class has a method that is used to register your crud model,\r\nallowing it to be used. To register your CRUD model, fire the following command:\r\n\r\n```php\r\nclass MyModel extends \\pockets\\crud\\model {\r\n}\r\n\r\nMyModel::register()\r\n```\r\n\r\n",Zs=r({__storyData:()=>Qs,default:()=>$s}),Qs={route:`pockets plugin/crud/models/adapters`,title:`Adapters`,storyIcon:`fa fa-book`},$s=`\r
# Adapters\r
\r
Adapters connect CRUD operations to the actual resource logic used to read, update, and retrieve resources.\r
\r
They act as an abstraction layer between a CRUD model and the underlying implementation.\r
\r
A model does not directly perform read or update logic itself. Instead, it delegates those operations to adapter classes.\r
\r
---\r
\r
# Overview\r
\r
A CRUD model defines adapter class references using string properties:\r
\r
\`\`\`php\r
public string $read_resource;\r
public string $update_resource;\r
public string $get_resource;\r
\`\`\`\r
\r
These properties map CRUD operations to concrete classes.\r
\r
---\r
\r
# Adapter Types\r
\r
Three adapter types exist:\r
\r
| Adapter | Purpose |\r
|---|---|\r
| \`get_resource\` | Retrieves and validates the underlying resource |\r
| \`read_resource\` | Reads fields from the resource |\r
| \`update_resource\` | Updates fields on the resource |\r
\r
---\r
\r
# Basic Example\r
\r
\`\`\`php\r
class MyModel extends \\pockets\\crud\\model {\r
\r
    public static string $model_name = 'my-model';\r
\r
    public string $read_resource   = read_resource::class;\r
    public string $update_resource = update_resource::class;\r
    public string $get_resource    = get_resource::class;\r
\r
}\r
\`\`\`\r
\r
---\r
\r
# read_resource\r
\r
The \`read_resource\` adapter is responsible for exposing readable fields.\r
\r
It should extend:\r
\r
\`\`\`php\r
\\pockets\\crud\\resource_walker\r
\`\`\`\r
\r
Example:\r
\r
\`\`\`php\r
class read_resource extends \\pockets\\crud\\resource_walker {\r
\r
    function title() : string {\r
        return $this->resource->post_title;\r
    }\r
\r
    function slug() : string {\r
        return $this->resource->post_name;\r
    }\r
\r
}\r
\`\`\`\r
\r
This adapter is used internally by:\r
\r
\`\`\`php\r
$model->read_resource( $fields );\r
\`\`\`\r
\r
And usually indirectly through:\r
\r
\`\`\`php\r
$model->read( $query );\r
\`\`\`\r
\r
---\r
\r
# update_resource\r
\r
The \`update_resource\` adapter handles update operations.\r
\r
It should also extend:\r
\r
\`\`\`php\r
\\pockets\\crud\\resource_walker\r
\`\`\`\r
\r
Example:\r
\r
\`\`\`php\r
class update_resource extends \\pockets\\crud\\resource_walker {\r
\r
    function title( string $title ) {\r
        wp_update_post([\r
            'ID' => $this->resource->ID,\r
            'post_title' => $title\r
        ]);\r
    }\r
\r
}\r
\`\`\`\r
\r
This adapter is invoked through:\r
\r
\`\`\`php\r
$model->update_resource( $fields );\r
\`\`\`\r
\r
Or indirectly through:\r
\r
\`\`\`php\r
$model->update( $query, $read );\r
\`\`\`\r
\r
---\r
\r
# get_resource\r
\r
The \`get_resource\` adapter retrieves the underlying resource.\r
\r
It should extend:\r
\r
\`\`\`php\r
\\pockets\\crud\\get_resource\r
\`\`\`\r
\r
Example:\r
\r
\`\`\`php\r
class get_resource extends \\pockets\\crud\\get_resource {\r
\r
    function get( int $ID ) {\r
        return get_post( $ID );\r
    }\r
\r
}\r
\`\`\`\r
\r
This adapter runs automatically during:\r
\r
\`\`\`php\r
Model::init( $resource );\r
\`\`\`\r
\r
---\r
\r
# How Adapters Work\r
\r
When a model is initialized:\r
\r
\`\`\`php\r
$post = PostModel::init( 15 );\r
\`\`\`\r
\r
The following happens internally:\r
\r
\`\`\`php\r
$instance->setResource( 15 );\r
\`\`\`\r
\r
Which invokes:\r
\r
\`\`\`php\r
$this->resource = $this->get_resource::init( 15 );\r
\`\`\`\r
\r
The resolved resource is then stored on:\r
\r
\`\`\`php\r
$this->resource\r
\`\`\`\r
\r
All adapters share access to this resource.\r
\r
---\r
\r
# Internal Adapter Methods\r
\r
The adapters trait provides helper methods:\r
\r
\`\`\`php\r
final function read_resource(array $fields)\r
final function update_resource(array $fields)\r
\`\`\`\r
\r
These methods instantiate the configured adapter and execute it.\r
\r
Example:\r
\r
\`\`\`php\r
$this->read_resource::init( $this->resource )->walk( $fields );\r
\`\`\`\r
\r
---\r
\r
# Resource Walker\r
\r
Both \`read_resource\` and \`update_resource\` typically extend:\r
\r
\`\`\`php\r
\\pockets\\crud\\resource_walker\r
\`\`\`\r
\r
A resource walker maps array keys to method calls.\r
\r
Example request:\r
\r
\`\`\`php\r
[\r
    'title' => true,\r
    'slug' => true\r
]\r
\`\`\`\r
\r
Internally becomes:\r
\r
\`\`\`php\r
$resource->title();\r
$resource->slug();\r
\`\`\`\r
\r
---\r
\r
# Nested Resources\r
\r
Adapters can invoke other CRUD models.\r
\r
Example:\r
\r
\`\`\`php\r
function author( array $read ) {\r
\r
    return \\pockets::crud('wp-user')\r
        ::init( (int) $this->resource->post_author )\r
        ->read( $read );\r
\r
}\r
\`\`\`\r
\r
This allows deeply nested CRUD structures.\r
\r
---\r
\r
# Schemas and Adapters\r
\r
Adapters are introspected to generate schemas and documentation.\r
\r
For example:\r
\r
\`\`\`php\r
#[\\pockets\\crud\\schema\\attribute([\r
    '$ref' => '/image/read_resource/'\r
])]\r
\`\`\`\r
\r
This allows adapters to become self-describing.\r
\r
---\r
\r
# Why Adapters Exist\r
\r
Adapters separate responsibilities.\r
\r
| Concern | Responsibility |\r
|---|---|\r
| Model | Public CRUD API |\r
| get_resource | Resource retrieval |\r
| read_resource | Reading fields |\r
| update_resource | Updating fields |\r
\r
This creates:\r
\r
- Cleaner architecture\r
- Reusable resource logic\r
- Dynamic introspection\r
- Automatic schema generation\r
- Better documentation\r
- Safer CRUD operations\r
\r
---\r
\r
# Full Example\r
\r
\`\`\`php\r
class post extends \\pockets\\crud\\model {\r
\r
    public static string $model_name = 'post';\r
\r
    public string $read_resource   = read_resource::class;\r
    public string $update_resource = update_resource::class;\r
    public string $get_resource    = get_resource::class;\r
\r
}\r
\`\`\`\r
\r
\`\`\`php\r
class read_resource extends \\pockets\\crud\\resource_walker {\r
\r
    function title() : string {\r
        return $this->resource->post_title;\r
    }\r
\r
}\r
\`\`\`\r
\r
\`\`\`php\r
class update_resource extends \\pockets\\crud\\resource_walker {\r
\r
    function title( string $title ) {\r
        wp_update_post([\r
            'ID' => $this->resource->ID,\r
            'post_title' => $title\r
        ]);\r
    }\r
\r
}\r
\`\`\`\r
\r
\`\`\`php\r
class get_resource extends \\pockets\\crud\\get_resource {\r
\r
    function get( int $ID ) {\r
        return get_post( $ID );\r
    }\r
\r
}\r
\`\`\`\r
\r
Usage:\r
\r
\`\`\`php\r
$post = \\pockets::crud('post')::init( 15 );\r
\r
$post->read([\r
    'title' => true\r
]);\r
\r
$post->update([\r
    'title' => 'New Title'\r
], [\r
    'title' => true\r
]);\r
\`\`\``,ec=r({__storyData:()=>tc,default:()=>nc}),tc={route:`pockets plugin/crud/models/get`,title:`Getting a resource`,storyIcon:`fa fa-book`},nc='\r\n## Getting a CRUD resource\r\n\r\nThe `get_resource` class is responsible for translating a crud models `init` argument into a corresponding resource that the model uses for its various operations. It will look at the `typeof` the argument given and call a corresponding `request_using_{$type}` method on the class. For example if the type of the argument is an `array` it will call the `request_using_array` method of the class.\r\n\r\nBy default, arrays are handled by looking for a `by` parameter. If a `by` parameter is not provided in the argument, it will fall back to what is set on the `default_array_by` property of the class. For example:\r\n\r\n```php\r\n[\r\n"by" => "ID"\r\n...other request info here\r\n]\r\n```\r\n\r\nThis will map to a corresponding `array_by_{$by_argument}` method on the class. In this example it would call `array_by_ID`. The method called will be given the argument and is expected to return the resource using the data in the argument like this:\r\n\r\n```php\r\nfunction array_by_ID(){\r\n    return $some_value; \r\n}\r\n```\r\n\r\nOr it can return an error:\r\n\r\n```php\r\nfunction array_by_ID(){\r\n    return \\pockets::error("error message");\r\n}\r\n```\r\n\r\nSubsequent actions will validate the resource returned by this method, and run their logic based on if it\'s a valid resource or an error.\r\n',rc=r({__storyData:()=>ic,default:()=>ac}),ic={route:`pockets plugin/crud/models/permissions`,title:`Permissions`,storyIcon:`fa fa-book`},ac=`\r
### Permission Checks\r
\r
Typically, you'd do permission checks in each actions method. Using a trait is ideal as it allows you to re-use logic and seperate\r
the code into a seperate package to keep code clean and maintainable.\r
\r
Each CRUD model action has a corresponding permission check that can be called inside the action to ensure that it has a valid resource, and that the user has permission to perform the action. If the permission check fails, it will not perform the action and instead can return an error. \r
 \r
\`\`\`php\r
trait permissions {\r
\r
    function canCreate(){\r
        return current_user_can('administrator');\r
    }\r
\r
    function canRead(){}\r
    function canUpdate(){}\r
    function canDelete(){}\r
\r
}\r
\`\`\`\r
\r
And then attach it to your models main class:\r
\r
\`\`\`php\r
class MyModel extends \\pockets\\crud\\model {\r
    \r
    use permissions;\r
    \r
    public function create( array $input, ?array $output ){\r
        \r
        if( !$this->canCreate() ) {\r
            return \\pockets::error("Denied");\r
        }\r
        \r
        ...perform create action\r
\r
    }\r
\r
}\r
\`\`\``,oc=r({__storyData:()=>sc,default:()=>cc}),sc={route:`pockets plugin/crud/models/reading-and-updating`,title:`Reading and Updating`,storyIcon:`fa fa-book`},cc=`## Reading and Updating a CRUD resource\r
\r
The \`resource_walker\` class is responsible for handling the **read** and update operations of **CRUD** models. It takes a single argument of an array, and iterates each entry. It uses the **key** portion of the array entry, and calls a method with the same name on the class. If the **key** does not have a corresponding function, that **key** is ommitted from the returned result. Each function call gets the **value** of the array entry as its argument. Some methods arguments are optional, and in those cases the **value** can be omitted.\r
\r
Here's an example of what a **walker** class looks like:\r
\r
\`\`\`php\r
class my_resource_walker extends \\pockets\\crud\\resource_walker {\r
    function foo_1(string $arg){\r
        return "value is $arg";\r
    }\r
    function foo_2(string $arg){\r
        return [\r
            "key-1" => "value-1 is $arg",\r
            "key-2" => "value-2 is $arg",\r
        ];\r
    }\r
    function foo_3($arg = "this argument"){\r
        return "$arg is optional";\r
    }   \r
}\r
\`\`\`\r
\r
The walker takes the array given to it, and applies the following logic:\r
\r
* The **walker** iterates through each entry in the array, processing them one by one.\r
* For each entry in the array, the **walker** executes the corresponding function using its **key** . If a **value** is provided, it is given to the method as an argument.\r
* The **walker** combines the results of each methods execution into a single response.\r
\r
For example, a query like this:\r
\r
\`\`\`php\r
[\r
    "foo_1" => "some arg",\r
    "foo_2" => "some other arg",\r
    "invalid_key" => "i wont return anything",\r
    "foo_3", \r
]\r
\`\`\`\r
\r
Would return a result of:\r
\r
\`\`\`php\r
[\r
    "foo_1" => "value is some arg",\r
    "foo_2" => [\r
        "key-1" => "value-1 is some other arg",\r
        "key-2" => "value-2 is some other arg",\r
    ];,\r
    "foo_3" => "this argument is optional", \r
]\r
\`\`\`\r
\r
Notice that \`invalid_key\` is omitted from the result, as it does not have a corresponding function with the same name. Also note that \`foo_3\` applies the functions default argument, as no **value** was given for its entry.\r
\r
The **walker** also has 2 ways to manipulate the shape of the returned results: **Aliasing** and **Flattening**.\r
\r
### Aliasing\r
\r
Aliasing allows you to provide custom names for data returned in a **CRUD** operation. They allow you to format the results according to your requirements, manipulating their structure as needed. Consider the following query:\r
\r
\`\`\`php\r
[\r
    "foo_1:aliased_key" => "my arg"\r
]\r
\`\`\`\r
\r
The original key \`foo_1\` is renamed to \`aliased_key\`, so when you retrieve data using \`aliased_key\` you get the return value as illustrated below:\r
\r
\`\`\`php\r
[\r
    "aliased_key" => "value is my arg"\r
]\r
\`\`\`\r
\r
# Flattening\r
\r
Flattening is another way of manipulating the returned results of a **CRUD** operation. Nested fields within the response are "flattened" by taking their fields and bringing them up a level. This process may be used recursively for deeply nested fields. Consider the following query:\r
\r
\`\`\`php\r
[\r
    "foo_1" => "my value",\r
    "foo_2:<=" => "my argument"\r
]\r
\`\`\`\r
\r
The nested values of \`foo_2\` are "brought up" a level, providing the following result:\r
\r
\`\`\`php\r
[\r
    "foo_1" => "value is my value",\r
    "key-1" => "value-1 is my argument",\r
    "key-2" => "value-2 is my argument"\r
]\r
\`\`\`\r
\r
The result is a one-dimensional array where all keys and values are at the same level, making it simpler to work with and access data. This is useful when you want to process or display data without dealing with nested structures.\r
`,lc=r({__storyData:()=>uc,default:()=>dc}),uc={route:`pockets plugin/crud/models/schemas`,title:`Schemas`,storyIcon:`fa fa-book`},dc=`\r
# Schemas\r
\r
Schemas describe the structure, arguments, and return expectations of CRUD resource methods.\r
\r
Schemas are attached to methods using the \`#[\\pockets\\crud\\schema\\attribute()]\` attribute.\r
\r
They are primarily used for:\r
\r
- Documentation generation\r
- Validation\r
- Introspection\r
- API tooling\r
\r
---\r
\r
# Basic Schema\r
\r
A schema can be declared inline as an array:\r
\r
\`\`\`php\r
#[\\pockets\\crud\\schema\\attribute([\r
    'type' => ['object', 'null'],\r
    'properties' => [\r
        'relative' => [\r
            'type' => 'boolean',\r
        ]\r
    ],\r
    'required' => [ 'relative' ],\r
])]\r
function link( ?array $args = [ 'relative' => true ] ) : string {\r
    $link = get_the_permalink( $this->resource->ID );\r
\r
    if( $args['relative'] ?? false === true ) {\r
        return wp_make_link_relative( $link );\r
    }\r
\r
    return $link;\r
}\r
\`\`\`\r
\r
This describes the accepted arguments for the \`link()\` method.\r
\r
---\r
\r
# Schema Attribute\r
\r
Schemas are attached using:\r
\r
\`\`\`php\r
#[\\pockets\\crud\\schema\\attribute( ... )]\r
\`\`\`\r
\r
The attribute accepts:\r
\r
- An array schema\r
- A callable\r
- A class method string\r
- A schema reference\r
\r
---\r
\r
# Inline Schemas\r
\r
Inline schemas define structure directly inside the attribute.\r
\r
Example:\r
\r
\`\`\`php\r
#[\\pockets\\crud\\schema\\attribute([\r
    'type' => ['object', 'null'],\r
    'properties' => [\r
        'filtered' => [\r
            'type' => 'boolean'\r
        ]\r
    ],\r
    'additionalProperties' => false,\r
    'required' => [ 'filtered' ],\r
])]\r
\`\`\`\r
\r
---\r
\r
# Referencing Schemas\r
\r
Schemas can reference another schema using \`$ref\`.\r
\r
Example:\r
\r
\`\`\`php\r
#[\\pockets\\crud\\schema\\attribute([\r
    '$ref' => '/image/read_resource/'\r
])]\r
\`\`\`\r
\r
This imports the schema from another resource.\r
\r
Used by:\r
\r
\`\`\`php\r
function image( array $read ) : \\WP_Error | array\r
\`\`\`\r
\r
This allows schemas to stay reusable and centralized.\r
\r
---\r
\r
# Dynamic Schemas\r
\r
Schemas may also be generated dynamically.\r
\r
Example:\r
\r
\`\`\`php\r
#[\\pockets\\crud\\schema\\attribute(\r
    __CLASS__.'::__get_meta_schema'\r
)]\r
\`\`\`\r
\r
This calls:\r
\r
\`\`\`php\r
static function __get_meta_schema() {\r
    return \\pockets\\crud\\schema\\registered_meta_keys::build(\r
        meta_keys: get_registered_meta_keys('post'),\r
        action: 'read',\r
        meta_object_type: 'post',\r
    );\r
}\r
\`\`\`\r
\r
Dynamic schemas are useful when structure depends on runtime data.\r
\r
Examples include:\r
\r
- Registered meta keys\r
- Taxonomies\r
- ACF fields\r
- Plugin-defined structures\r
\r
---\r
\r
# Merging Schemas\r
\r
Schemas can be merged using \`$merge\`.\r
\r
Example:\r
\r
\`\`\`php\r
#[\\pockets\\crud\\schema\\attribute([\r
    '$merge' => [\r
        'source' => [\r
            '$ref' => '/terms/read_resource/',\r
        ],\r
        'with' => [\r
            'properties' => [\r
                'taxonomy' => [\r
                    'type' => 'string',\r
                    'includes' => [\r
                        '$ref' => '/wp/taxonomies/names/',\r
                    ]\r
                ],\r
            ],\r
            'required' => [ 'taxonomy' ],\r
        ],\r
    ]\r
])]\r
\`\`\`\r
\r
This extends an existing schema with additional properties.\r
\r
Useful for:\r
\r
- Resource composition\r
- Adding contextual arguments\r
- Extending shared schemas\r
\r
---\r
\r
# Callable Schemas\r
\r
Schemas may also be generated using callables.\r
\r
Example:\r
\r
\`\`\`php\r
#[\\pockets\\crud\\schema\\attribute(\r
    '\\pockets\\crud\\models\\acf\\adapter::getSchema'\r
)]\r
\`\`\`\r
\r
The callable must return a valid schema array.\r
\r
---\r
\r
# Common Schema Properties\r
\r
## type\r
\r
Defines accepted types.\r
\r
\`\`\`php\r
'type' => 'string'\r
\`\`\`\r
\r
Or multiple:\r
\r
\`\`\`php\r
'type' => ['object', 'null']\r
\`\`\`\r
\r
---\r
\r
## properties\r
\r
Defines object fields.\r
\r
\`\`\`php\r
'properties' => [\r
    'format' => [\r
        'type' => 'string'\r
    ]\r
]\r
\`\`\`\r
\r
---\r
\r
## required\r
\r
Defines required properties.\r
\r
\`\`\`php\r
'required' => [ 'format' ]\r
\`\`\`\r
\r
---\r
\r
## additionalProperties\r
\r
Controls whether unknown fields are allowed.\r
\r
\`\`\`php\r
'additionalProperties' => false\r
\`\`\`\r
\r
---\r
\r
## includes\r
\r
Includes another schema definition.\r
\r
\`\`\`php\r
'includes' => [\r
    '$ref' => '/wp/taxonomies/names/'\r
]\r
\`\`\`\r
\r
---\r
\r
# Resource References\r
\r
References use resource paths:\r
\r
\`\`\`php\r
'/image/read_resource/'\r
'/terms/read_resource/'\r
'/wp-user/read_resource/'\r
\`\`\`\r
\r
These paths resolve to registered schemas within the CRUD system.\r
\r
---\r
\r
# Why Schemas Exist\r
\r
Schemas allow resources to become self-describing.\r
\r
This enables:\r
\r
- Automatic documentation\r
- Realtime request validation information in the CRUD query builder\r
- Resource introspection\r
\r
With schemas, resources become discoverable and machine-readable.\r
\r
---\r
\r
# Example\r
\r
\`\`\`php\r
#[\\pockets\\crud\\schema\\attribute([\r
    'type' => ['object', 'null'],\r
    'properties' => [\r
        'format' => [\r
            'type' => 'string',\r
        ]\r
    ],\r
    'required' => [ 'format' ],\r
])]\r
function date( ?array $args = [ 'format'=> 'd/j/y' ] ) : string {\r
    return get_the_date( $args['format'], $this->resource );\r
}\r
\`\`\`\r
\r
This method declares:\r
\r
- The argument must be an object or null\r
- The object may contain a \`format\` field\r
- \`format\` must be a string\r
- \`format\` is required\r
\r
Tools can inspect this schema without executing the method itself.`,fc=Symbol(`pockets-crud-editor`),pc=Symbol(`pockets-crud-editor-query`),mc={inject:{editor:()=>ie(fc),query:()=>ie(pc)},provide:{editor:(...e)=>_(fc,...e),query:(...e)=>_(pc,...e)}},hc={class:`grid columns-1 gap-1`},gc=b(`label`,{class:`fw-8 fs-20 text-primary-lt`},`Query result`,-1),_c=[`loading`],vc={__name:`index`,setup(e){let{loading:t,result:n}=mc.inject.query(),r=D(()=>t.value?`Running query...`:n.value?JSON.stringify(n.value,null,2):`No query has been run.`);return(e,n)=>{let i=f(`pockets-ux-code-block`);return u(),S(`div`,hc,[gc,b(`div`,{class:`loading-container`,loading:x(t),style:{"--overlay":`none`}},[(u(),L(i,{class:`fs-20`,code:x(r),key:x(r)},null,8,[`code`]))],8,_c)])}}},yc={class:`grid columns-1 gap-1`},bc={class:`fw-8 fs-20 text-uppercase text-primary-lt`},xc=[`innerHTML`],Sc=G({__name:`index`,props:{type:{}},setup(e){let t=e,{modelValue:n,modelValueAsJson:r}=mc.inject.editor(),i=()=>[`import axios from "axios"`,``,`axios.post( "/wp-json/pockets/crud", [ ${r.value} ] ).then( e => console.log( e.data ) )`].join(`\r
`),a=()=>{let{action:e,input:t,output:i,init:a,model:o}=n.value,s=t?`$query['input']`:``,c=i?`, $query['output']`:``,l=a?`$query['init']`:``;return[`$query = json_decode('${r.value}', true );`,``,`$result = \\pockets::crud( $query['model'] )::init( ${l} )->${e}( ${s}${c} );`,`var_dump( "<pre>", $result, "</pre>" );`].join(`\r
`)},o=()=>{let{action:e,input:t,output:i,init:a,model:o}=n.value,s=t?`query.input`:``,c=i?`, query.output`:``,l=a?`query.init`:null;return[`let query = ${r.value}`,``,`$pockets.crud( query.model ).init( ${l} ).${e}( ${s}${c} ).then( data => console.log( data ) )`].join(`\r
`)},s=D(()=>({rest:`<p>Server side, pockets handles requests as an array, allowing for multiple requests to be sent at once. So in this case, you must pass the query in an array.</p><p class='alert alert-danger fw-8'>Remember that you must pass you must pass 'X-WP-Nonce' with a valid nonce as part of the headers to run as an authorized user.</p>`,php:`<p>Run server side.</p>`,pockets:`<p>Directly returns the queries result, or a server error if one occurs.</p>`})[t.type]),c=D(()=>({rest:i,php:a,pockets:o})[t.type]());return(t,n)=>{let i=f(`pockets-ux-code-block`);return u(),S(`div`,yc,[b(`label`,bc,B(e.type),1),x(s)?(u(),S(`div`,{key:0,class:`fw-6 fs-16 gap-1 columns-1 grid`,innerHTML:x(s)},null,8,xc)):V(``,!0),x(r)?(u(),L(i,{key:1,class:`fs-20`,code:x(c)},null,8,[`code`])):V(``,!0)])}}},[[`__scopeId`,`data-v-88ef329a`]]),Cc={class:`grid columns-1 gap-1`},wc=b(`label`,{class:`fw-8 fs-20 text-primary-lt`},`Edit Query`,-1),Tc={class:`position-relative`},Ec={__name:`index`,setup(e){let t=mc.inject.editor();return(e,n)=>{let r=f(`pockets-ux-json-editor`);return u(),S(`div`,Cc,[wc,b(`div`,Tc,[(u(),L(r,m(x(t).editorProps.value,{modelValue:x(t).modelValue.value,"onUpdate:modelValue":n[0]||=e=>x(t).modelValue.value=e,onHasJSON:x(t).hasJSON,key:x(t).editorKey.value}),null,16,[`modelValue`,`onHasJSON`]))])])}}},Dc=i((e=>{Object.defineProperty(e,`__esModule`,{value:!0}),e.regexpCode=e.getEsmExportName=e.getProperty=e.safeStringify=e.stringify=e.strConcat=e.addCodeArg=e.str=e._=e.nil=e._Code=e.Name=e.IDENTIFIER=e._CodeOrName=void 0;var t=class{};e._CodeOrName=t,e.IDENTIFIER=/^[a-z$_][a-z$_0-9]*$/i;var n=class extends t{constructor(t){if(super(),!e.IDENTIFIER.test(t))throw Error(`CodeGen: name must be a valid identifier`);this.str=t}toString(){return this.str}emptyStr(){return!1}get names(){return{[this.str]:1}}};e.Name=n;var r=class extends t{constructor(e){super(),this._items=typeof e==`string`?[e]:e}toString(){return this.str}emptyStr(){if(this._items.length>1)return!1;let e=this._items[0];return e===``||e===`""`}get str(){return this._str??=this._items.reduce((e,t)=>`${e}${t}`,``)}get names(){return this._names??=this._items.reduce((e,t)=>(t instanceof n&&(e[t.str]=(e[t.str]||0)+1),e),{})}};e._Code=r,e.nil=new r(``);function i(e,...t){let n=[e[0]],i=0;for(;i<t.length;)s(n,t[i]),n.push(e[++i]);return new r(n)}e._=i;var a=new r(`+`);function o(e,...t){let n=[p(e[0])],i=0;for(;i<t.length;)n.push(a),s(n,t[i]),n.push(a,p(e[++i]));return c(n),new r(n)}e.str=o;function s(e,t){t instanceof r?e.push(...t._items):t instanceof n?e.push(t):e.push(d(t))}e.addCodeArg=s;function c(e){let t=1;for(;t<e.length-1;){if(e[t]===a){let n=l(e[t-1],e[t+1]);if(n!==void 0){e.splice(t-1,3,n);continue}e[t++]=`+`}t++}}function l(e,t){if(t===`""`)return e;if(e===`""`)return t;if(typeof e==`string`)return t instanceof n||e[e.length-1]!==`"`?void 0:typeof t==`string`?t[0]===`"`?e.slice(0,-1)+t.slice(1):void 0:`${e.slice(0,-1)}${t}"`;if(typeof t==`string`&&t[0]===`"`&&!(e instanceof n))return`"${e}${t.slice(1)}`}function u(e,t){return t.emptyStr()?e:e.emptyStr()?t:o`${e}${t}`}e.strConcat=u;function d(e){return typeof e==`number`||typeof e==`boolean`||e===null?e:p(Array.isArray(e)?e.join(`,`):e)}function f(e){return new r(p(e))}e.stringify=f;function p(e){return JSON.stringify(e).replace(/\u2028/g,`\\u2028`).replace(/\u2029/g,`\\u2029`)}e.safeStringify=p;function m(t){return typeof t==`string`&&e.IDENTIFIER.test(t)?new r(`.${t}`):i`[${t}]`}e.getProperty=m;function h(t){if(typeof t==`string`&&e.IDENTIFIER.test(t))return new r(`${t}`);throw Error(`CodeGen: invalid export name: ${t}, use explicit $id name mapping`)}e.getEsmExportName=h;function g(e){return new r(e.toString())}e.regexpCode=g})),Oc=i((e=>{Object.defineProperty(e,`__esModule`,{value:!0}),e.ValueScope=e.ValueScopeName=e.Scope=e.varKinds=e.UsedValueState=void 0;var t=Dc(),n=class extends Error{constructor(e){super(`CodeGen: "code" for ${e} not defined`),this.value=e.value}},r;(function(e){e[e.Started=0]=`Started`,e[e.Completed=1]=`Completed`})(r||(e.UsedValueState=r={})),e.varKinds={const:new t.Name(`const`),let:new t.Name(`let`),var:new t.Name(`var`)};var i=class{constructor({prefixes:e,parent:t}={}){this._names={},this._prefixes=e,this._parent=t}toName(e){return e instanceof t.Name?e:this.name(e)}name(e){return new t.Name(this._newName(e))}_newName(e){let t=this._names[e]||this._nameGroup(e);return`${e}${t.index++}`}_nameGroup(e){if((this._parent?._prefixes)?.has(e)||this._prefixes&&!this._prefixes.has(e))throw Error(`CodeGen: prefix "${e}" is not allowed in this scope`);return this._names[e]={prefix:e,index:0}}};e.Scope=i;var a=class extends t.Name{constructor(e,t){super(t),this.prefix=e}setValue(e,{property:n,itemIndex:r}){this.value=e,this.scopePath=(0,t._)`.${new t.Name(n)}[${r}]`}};e.ValueScopeName=a;var o=(0,t._)`\n`;e.ValueScope=class extends i{constructor(e){super(e),this._values={},this._scope=e.scope,this.opts={...e,_n:e.lines?o:t.nil}}get(){return this._scope}name(e){return new a(e,this._newName(e))}value(e,t){if(t.ref===void 0)throw Error(`CodeGen: ref must be passed in value`);let n=this.toName(e),{prefix:r}=n,i=t.key??t.ref,a=this._values[r];if(a){let e=a.get(i);if(e)return e}else a=this._values[r]=new Map;a.set(i,n);let o=this._scope[r]||(this._scope[r]=[]),s=o.length;return o[s]=t.ref,n.setValue(t,{property:r,itemIndex:s}),n}getValue(e,t){let n=this._values[e];if(n)return n.get(t)}scopeRefs(e,n=this._values){return this._reduceValues(n,n=>{if(n.scopePath===void 0)throw Error(`CodeGen: name "${n}" has no value`);return(0,t._)`${e}${n.scopePath}`})}scopeCode(e=this._values,t,n){return this._reduceValues(e,e=>{if(e.value===void 0)throw Error(`CodeGen: name "${e}" has no value`);return e.value.code},t,n)}_reduceValues(i,a,o={},s){let c=t.nil;for(let l in i){let u=i[l];if(!u)continue;let d=o[l]=o[l]||new Map;u.forEach(i=>{if(d.has(i))return;d.set(i,r.Started);let o=a(i);if(o){let n=this.opts.es5?e.varKinds.var:e.varKinds.const;c=(0,t._)`${c}${n} ${i} = ${o};${this.opts._n}`}else if(o=s?.(i))c=(0,t._)`${c}${o}${this.opts._n}`;else throw new n(i);d.set(i,r.Completed)})}return c}}})),Y=i((e=>{Object.defineProperty(e,`__esModule`,{value:!0}),e.or=e.and=e.not=e.CodeGen=e.operators=e.varKinds=e.ValueScopeName=e.ValueScope=e.Scope=e.Name=e.regexpCode=e.stringify=e.getProperty=e.nil=e.strConcat=e.str=e._=void 0;var t=Dc(),n=Oc(),r=Dc();Object.defineProperty(e,`_`,{enumerable:!0,get:function(){return r._}}),Object.defineProperty(e,`str`,{enumerable:!0,get:function(){return r.str}}),Object.defineProperty(e,`strConcat`,{enumerable:!0,get:function(){return r.strConcat}}),Object.defineProperty(e,`nil`,{enumerable:!0,get:function(){return r.nil}}),Object.defineProperty(e,`getProperty`,{enumerable:!0,get:function(){return r.getProperty}}),Object.defineProperty(e,`stringify`,{enumerable:!0,get:function(){return r.stringify}}),Object.defineProperty(e,`regexpCode`,{enumerable:!0,get:function(){return r.regexpCode}}),Object.defineProperty(e,`Name`,{enumerable:!0,get:function(){return r.Name}});var i=Oc();Object.defineProperty(e,`Scope`,{enumerable:!0,get:function(){return i.Scope}}),Object.defineProperty(e,`ValueScope`,{enumerable:!0,get:function(){return i.ValueScope}}),Object.defineProperty(e,`ValueScopeName`,{enumerable:!0,get:function(){return i.ValueScopeName}}),Object.defineProperty(e,`varKinds`,{enumerable:!0,get:function(){return i.varKinds}}),e.operators={GT:new t._Code(`>`),GTE:new t._Code(`>=`),LT:new t._Code(`<`),LTE:new t._Code(`<=`),EQ:new t._Code(`===`),NEQ:new t._Code(`!==`),NOT:new t._Code(`!`),OR:new t._Code(`||`),AND:new t._Code(`&&`),ADD:new t._Code(`+`)};var a=class{optimizeNodes(){return this}optimizeNames(e,t){return this}},o=class extends a{constructor(e,t,n){super(),this.varKind=e,this.name=t,this.rhs=n}render({es5:e,_n:t}){let r=e?n.varKinds.var:this.varKind,i=this.rhs===void 0?``:` = ${this.rhs}`;return`${r} ${this.name}${i};`+t}optimizeNames(e,t){if(e[this.name.str])return this.rhs&&=k(this.rhs,e,t),this}get names(){return this.rhs instanceof t._CodeOrName?this.rhs.names:{}}},s=class extends a{constructor(e,t,n){super(),this.lhs=e,this.rhs=t,this.sideEffects=n}render({_n:e}){return`${this.lhs} = ${this.rhs};`+e}optimizeNames(e,n){if(!(this.lhs instanceof t.Name&&!e[this.lhs.str]&&!this.sideEffects))return this.rhs=k(this.rhs,e,n),this}get names(){return O(this.lhs instanceof t.Name?{}:{...this.lhs.names},this.rhs)}},c=class extends s{constructor(e,t,n,r){super(e,n,r),this.op=t}render({_n:e}){return`${this.lhs} ${this.op}= ${this.rhs};`+e}},l=class extends a{constructor(e){super(),this.label=e,this.names={}}render({_n:e}){return`${this.label}:`+e}},u=class extends a{constructor(e){super(),this.label=e,this.names={}}render({_n:e}){return`break${this.label?` ${this.label}`:``};`+e}},d=class extends a{constructor(e){super(),this.error=e}render({_n:e}){return`throw ${this.error};`+e}get names(){return this.error.names}},f=class extends a{constructor(e){super(),this.code=e}render({_n:e}){return`${this.code};`+e}optimizeNodes(){return`${this.code}`?this:void 0}optimizeNames(e,t){return this.code=k(this.code,e,t),this}get names(){return this.code instanceof t._CodeOrName?this.code.names:{}}},p=class extends a{constructor(e=[]){super(),this.nodes=e}render(e){return this.nodes.reduce((t,n)=>t+n.render(e),``)}optimizeNodes(){let{nodes:e}=this,t=e.length;for(;t--;){let n=e[t].optimizeNodes();Array.isArray(n)?e.splice(t,1,...n):n?e[t]=n:e.splice(t,1)}return e.length>0?this:void 0}optimizeNames(e,t){let{nodes:n}=this,r=n.length;for(;r--;){let i=n[r];i.optimizeNames(e,t)||(A(e,i.names),n.splice(r,1))}return n.length>0?this:void 0}get names(){return this.nodes.reduce((e,t)=>D(e,t.names),{})}},m=class extends p{render(e){return`{`+e._n+super.render(e)+`}`+e._n}},h=class extends p{},g=class extends m{};g.kind=`else`;var _=class e extends m{constructor(e,t){super(t),this.condition=e}render(e){let t=`if(${this.condition})`+super.render(e);return this.else&&(t+=`else `+this.else.render(e)),t}optimizeNodes(){super.optimizeNodes();let t=this.condition;if(t===!0)return this.nodes;let n=this.else;if(n){let e=n.optimizeNodes();n=this.else=Array.isArray(e)?new g(e):e}if(n)return t===!1?n instanceof e?n:n.nodes:this.nodes.length?this:new e(j(t),n instanceof e?[n]:n.nodes);if(!(t===!1||!this.nodes.length))return this}optimizeNames(e,t){if(this.else=this.else?.optimizeNames(e,t),super.optimizeNames(e,t)||this.else)return this.condition=k(this.condition,e,t),this}get names(){let e=super.names;return O(e,this.condition),this.else&&D(e,this.else.names),e}};_.kind=`if`;var v=class extends m{};v.kind=`for`;var y=class extends v{constructor(e){super(),this.iteration=e}render(e){return`for(${this.iteration})`+super.render(e)}optimizeNames(e,t){if(super.optimizeNames(e,t))return this.iteration=k(this.iteration,e,t),this}get names(){return D(super.names,this.iteration.names)}},b=class extends v{constructor(e,t,n,r){super(),this.varKind=e,this.name=t,this.from=n,this.to=r}render(e){let t=e.es5?n.varKinds.var:this.varKind,{name:r,from:i,to:a}=this;return`for(${t} ${r}=${i}; ${r}<${a}; ${r}++)`+super.render(e)}get names(){return O(O(super.names,this.from),this.to)}},x=class extends v{constructor(e,t,n,r){super(),this.loop=e,this.varKind=t,this.name=n,this.iterable=r}render(e){return`for(${this.varKind} ${this.name} ${this.loop} ${this.iterable})`+super.render(e)}optimizeNames(e,t){if(super.optimizeNames(e,t))return this.iterable=k(this.iterable,e,t),this}get names(){return D(super.names,this.iterable.names)}},S=class extends m{constructor(e,t,n){super(),this.name=e,this.args=t,this.async=n}render(e){return`${this.async?`async `:``}function ${this.name}(${this.args})`+super.render(e)}};S.kind=`func`;var C=class extends p{render(e){return`return `+super.render(e)}};C.kind=`return`;var w=class extends m{render(e){let t=`try`+super.render(e);return this.catch&&(t+=this.catch.render(e)),this.finally&&(t+=this.finally.render(e)),t}optimizeNodes(){var e,t;return super.optimizeNodes(),(e=this.catch)==null||e.optimizeNodes(),(t=this.finally)==null||t.optimizeNodes(),this}optimizeNames(e,t){var n,r;return super.optimizeNames(e,t),(n=this.catch)==null||n.optimizeNames(e,t),(r=this.finally)==null||r.optimizeNames(e,t),this}get names(){let e=super.names;return this.catch&&D(e,this.catch.names),this.finally&&D(e,this.finally.names),e}},T=class extends m{constructor(e){super(),this.error=e}render(e){return`catch(${this.error})`+super.render(e)}};T.kind=`catch`;var E=class extends m{render(e){return`finally`+super.render(e)}};E.kind=`finally`,e.CodeGen=class{constructor(e,t={}){this._values={},this._blockStarts=[],this._constants={},this.opts={...t,_n:t.lines?`
`:``},this._extScope=e,this._scope=new n.Scope({parent:e}),this._nodes=[new h]}toString(){return this._root.render(this.opts)}name(e){return this._scope.name(e)}scopeName(e){return this._extScope.name(e)}scopeValue(e,t){let n=this._extScope.value(e,t);return(this._values[n.prefix]||(this._values[n.prefix]=new Set)).add(n),n}getScopeValue(e,t){return this._extScope.getValue(e,t)}scopeRefs(e){return this._extScope.scopeRefs(e,this._values)}scopeCode(){return this._extScope.scopeCode(this._values)}_def(e,t,n,r){let i=this._scope.toName(t);return n!==void 0&&r&&(this._constants[i.str]=n),this._leafNode(new o(e,i,n)),i}const(e,t,r){return this._def(n.varKinds.const,e,t,r)}let(e,t,r){return this._def(n.varKinds.let,e,t,r)}var(e,t,r){return this._def(n.varKinds.var,e,t,r)}assign(e,t,n){return this._leafNode(new s(e,t,n))}add(t,n){return this._leafNode(new c(t,e.operators.ADD,n))}code(e){return typeof e==`function`?e():e!==t.nil&&this._leafNode(new f(e)),this}object(...e){let n=[`{`];for(let[r,i]of e)n.length>1&&n.push(`,`),n.push(r),(r!==i||this.opts.es5)&&(n.push(`:`),(0,t.addCodeArg)(n,i));return n.push(`}`),new t._Code(n)}if(e,t,n){if(this._blockNode(new _(e)),t&&n)this.code(t).else().code(n).endIf();else if(t)this.code(t).endIf();else if(n)throw Error(`CodeGen: "else" body without "then" body`);return this}elseIf(e){return this._elseNode(new _(e))}else(){return this._elseNode(new g)}endIf(){return this._endBlockNode(_,g)}_for(e,t){return this._blockNode(e),t&&this.code(t).endFor(),this}for(e,t){return this._for(new y(e),t)}forRange(e,t,r,i,a=this.opts.es5?n.varKinds.var:n.varKinds.let){let o=this._scope.toName(e);return this._for(new b(a,o,t,r),()=>i(o))}forOf(e,r,i,a=n.varKinds.const){let o=this._scope.toName(e);if(this.opts.es5){let e=r instanceof t.Name?r:this.var(`_arr`,r);return this.forRange(`_i`,0,(0,t._)`${e}.length`,n=>{this.var(o,(0,t._)`${e}[${n}]`),i(o)})}return this._for(new x(`of`,a,o,r),()=>i(o))}forIn(e,r,i,a=this.opts.es5?n.varKinds.var:n.varKinds.const){if(this.opts.ownProperties)return this.forOf(e,(0,t._)`Object.keys(${r})`,i);let o=this._scope.toName(e);return this._for(new x(`in`,a,o,r),()=>i(o))}endFor(){return this._endBlockNode(v)}label(e){return this._leafNode(new l(e))}break(e){return this._leafNode(new u(e))}return(e){let t=new C;if(this._blockNode(t),this.code(e),t.nodes.length!==1)throw Error(`CodeGen: "return" should have one node`);return this._endBlockNode(C)}try(e,t,n){if(!t&&!n)throw Error(`CodeGen: "try" without "catch" and "finally"`);let r=new w;if(this._blockNode(r),this.code(e),t){let e=this.name(`e`);this._currNode=r.catch=new T(e),t(e)}return n&&(this._currNode=r.finally=new E,this.code(n)),this._endBlockNode(T,E)}throw(e){return this._leafNode(new d(e))}block(e,t){return this._blockStarts.push(this._nodes.length),e&&this.code(e).endBlock(t),this}endBlock(e){let t=this._blockStarts.pop();if(t===void 0)throw Error(`CodeGen: not in self-balancing block`);let n=this._nodes.length-t;if(n<0||e!==void 0&&n!==e)throw Error(`CodeGen: wrong number of nodes: ${n} vs ${e} expected`);return this._nodes.length=t,this}func(e,n=t.nil,r,i){return this._blockNode(new S(e,n,r)),i&&this.code(i).endFunc(),this}endFunc(){return this._endBlockNode(S)}optimize(e=1){for(;e-- >0;)this._root.optimizeNodes(),this._root.optimizeNames(this._root.names,this._constants)}_leafNode(e){return this._currNode.nodes.push(e),this}_blockNode(e){this._currNode.nodes.push(e),this._nodes.push(e)}_endBlockNode(e,t){let n=this._currNode;if(n instanceof e||t&&n instanceof t)return this._nodes.pop(),this;throw Error(`CodeGen: not in block "${t?`${e.kind}/${t.kind}`:e.kind}"`)}_elseNode(e){let t=this._currNode;if(!(t instanceof _))throw Error(`CodeGen: "else" without "if"`);return this._currNode=t.else=e,this}get _root(){return this._nodes[0]}get _currNode(){let e=this._nodes;return e[e.length-1]}set _currNode(e){let t=this._nodes;t[t.length-1]=e}};function D(e,t){for(let n in t)e[n]=(e[n]||0)+(t[n]||0);return e}function O(e,n){return n instanceof t._CodeOrName?D(e,n.names):e}function k(e,n,r){if(e instanceof t.Name)return i(e);if(!a(e))return e;return new t._Code(e._items.reduce((e,n)=>(n instanceof t.Name&&(n=i(n)),n instanceof t._Code?e.push(...n._items):e.push(n),e),[]));function i(e){let t=r[e.str];return t===void 0||n[e.str]!==1?e:(delete n[e.str],t)}function a(e){return e instanceof t._Code&&e._items.some(e=>e instanceof t.Name&&n[e.str]===1&&r[e.str]!==void 0)}}function A(e,t){for(let n in t)e[n]=(e[n]||0)-(t[n]||0)}function j(e){return typeof e==`boolean`||typeof e==`number`||e===null?!e:(0,t._)`!${L(e)}`}e.not=j;var M=I(e.operators.AND);function N(...e){return e.reduce(M)}e.and=N;var P=I(e.operators.OR);function F(...e){return e.reduce(P)}e.or=F;function I(e){return(n,r)=>n===t.nil?r:r===t.nil?n:(0,t._)`${L(n)} ${e} ${L(r)}`}function L(e){return e instanceof t.Name?e:(0,t._)`(${e})`}})),X=i((e=>{Object.defineProperty(e,`__esModule`,{value:!0}),e.checkStrictMode=e.getErrorPath=e.Type=e.useFunc=e.setEvaluated=e.evaluatedPropsToName=e.mergeEvaluated=e.eachItem=e.unescapeJsonPointer=e.escapeJsonPointer=e.escapeFragment=e.unescapeFragment=e.schemaRefOrVal=e.schemaHasRulesButRef=e.schemaHasRules=e.checkUnknownRules=e.alwaysValidSchema=e.toHash=void 0;var t=Y(),n=Dc();function r(e){let t={};for(let n of e)t[n]=!0;return t}e.toHash=r;function i(e,t){return typeof t==`boolean`?t:Object.keys(t).length===0?!0:(a(e,t),!o(t,e.self.RULES.all))}e.alwaysValidSchema=i;function a(e,t=e.schema){let{opts:n,self:r}=e;if(!n.strictSchema||typeof t==`boolean`)return;let i=r.RULES.keywords;for(let n in t)i[n]||x(e,`unknown keyword: "${n}"`)}e.checkUnknownRules=a;function o(e,t){if(typeof e==`boolean`)return!e;for(let n in e)if(t[n])return!0;return!1}e.schemaHasRules=o;function s(e,t){if(typeof e==`boolean`)return!e;for(let n in e)if(n!==`$ref`&&t.all[n])return!0;return!1}e.schemaHasRulesButRef=s;function c({topSchemaRef:e,schemaPath:n},r,i,a){if(!a){if(typeof r==`number`||typeof r==`boolean`)return r;if(typeof r==`string`)return(0,t._)`${r}`}return(0,t._)`${e}${n}${(0,t.getProperty)(i)}`}e.schemaRefOrVal=c;function l(e){return f(decodeURIComponent(e))}e.unescapeFragment=l;function u(e){return encodeURIComponent(d(e))}e.escapeFragment=u;function d(e){return typeof e==`number`?`${e}`:e.replace(/~/g,`~0`).replace(/\//g,`~1`)}e.escapeJsonPointer=d;function f(e){return e.replace(/~1/g,`/`).replace(/~0/g,`~`)}e.unescapeJsonPointer=f;function p(e,t){if(Array.isArray(e))for(let n of e)t(n);else t(e)}e.eachItem=p;function m({mergeNames:e,mergeToName:n,mergeValues:r,resultToName:i}){return(a,o,s,c)=>{let l=s===void 0?o:s instanceof t.Name?(o instanceof t.Name?e(a,o,s):n(a,o,s),s):o instanceof t.Name?(n(a,s,o),o):r(o,s);return c===t.Name&&!(l instanceof t.Name)?i(a,l):l}}e.mergeEvaluated={props:m({mergeNames:(e,n,r)=>e.if((0,t._)`${r} !== true && ${n} !== undefined`,()=>{e.if((0,t._)`${n} === true`,()=>e.assign(r,!0),()=>e.assign(r,(0,t._)`${r} || {}`).code((0,t._)`Object.assign(${r}, ${n})`))}),mergeToName:(e,n,r)=>e.if((0,t._)`${r} !== true`,()=>{n===!0?e.assign(r,!0):(e.assign(r,(0,t._)`${r} || {}`),g(e,r,n))}),mergeValues:(e,t)=>e===!0?!0:{...e,...t},resultToName:h}),items:m({mergeNames:(e,n,r)=>e.if((0,t._)`${r} !== true && ${n} !== undefined`,()=>e.assign(r,(0,t._)`${n} === true ? true : ${r} > ${n} ? ${r} : ${n}`)),mergeToName:(e,n,r)=>e.if((0,t._)`${r} !== true`,()=>e.assign(r,n===!0?!0:(0,t._)`${r} > ${n} ? ${r} : ${n}`)),mergeValues:(e,t)=>e===!0?!0:Math.max(e,t),resultToName:(e,t)=>e.var(`items`,t)})};function h(e,n){if(n===!0)return e.var(`props`,!0);let r=e.var(`props`,(0,t._)`{}`);return n!==void 0&&g(e,r,n),r}e.evaluatedPropsToName=h;function g(e,n,r){Object.keys(r).forEach(r=>e.assign((0,t._)`${n}${(0,t.getProperty)(r)}`,!0))}e.setEvaluated=g;var _={};function v(e,t){return e.scopeValue(`func`,{ref:t,code:_[t.code]||(_[t.code]=new n._Code(t.code))})}e.useFunc=v;var y;(function(e){e[e.Num=0]=`Num`,e[e.Str=1]=`Str`})(y||(e.Type=y={}));function b(e,n,r){if(e instanceof t.Name){let i=n===y.Num;return r?i?(0,t._)`"[" + ${e} + "]"`:(0,t._)`"['" + ${e} + "']"`:i?(0,t._)`"/" + ${e}`:(0,t._)`"/" + ${e}.replace(/~/g, "~0").replace(/\\//g, "~1")`}return r?(0,t.getProperty)(e).toString():`/`+d(e)}e.getErrorPath=b;function x(e,t,n=e.opts.strictSchema){if(n){if(t=`strict mode: ${t}`,n===!0)throw Error(t);e.self.logger.warn(t)}}e.checkStrictMode=x})),Z=i((e=>{Object.defineProperty(e,`__esModule`,{value:!0});var t=Y();e.default={data:new t.Name(`data`),valCxt:new t.Name(`valCxt`),instancePath:new t.Name(`instancePath`),parentData:new t.Name(`parentData`),parentDataProperty:new t.Name(`parentDataProperty`),rootData:new t.Name(`rootData`),dynamicAnchors:new t.Name(`dynamicAnchors`),vErrors:new t.Name(`vErrors`),errors:new t.Name(`errors`),this:new t.Name(`this`),self:new t.Name(`self`),scope:new t.Name(`scope`),json:new t.Name(`json`),jsonPos:new t.Name(`jsonPos`),jsonLen:new t.Name(`jsonLen`),jsonPart:new t.Name(`jsonPart`)}})),kc=i((e=>{Object.defineProperty(e,`__esModule`,{value:!0}),e.extendErrors=e.resetErrorsCount=e.reportExtraError=e.reportError=e.keyword$DataError=e.keywordError=void 0;var t=Y(),n=X(),r=Z();e.keywordError={message:({keyword:e})=>(0,t.str)`must pass "${e}" keyword validation`},e.keyword$DataError={message:({keyword:e,schemaType:n})=>n?(0,t.str)`"${e}" keyword must be ${n} ($data)`:(0,t.str)`"${e}" keyword is invalid ($data)`};function i(n,r=e.keywordError,i,a){let{it:o}=n,{gen:s,compositeRule:u,allErrors:f}=o,p=d(n,r,i);a??(u||f)?c(s,p):l(o,(0,t._)`[${p}]`)}e.reportError=i;function a(t,n=e.keywordError,i){let{it:a}=t,{gen:o,compositeRule:s,allErrors:u}=a;c(o,d(t,n,i)),s||u||l(a,r.default.vErrors)}e.reportExtraError=a;function o(e,n){e.assign(r.default.errors,n),e.if((0,t._)`${r.default.vErrors} !== null`,()=>e.if(n,()=>e.assign((0,t._)`${r.default.vErrors}.length`,n),()=>e.assign(r.default.vErrors,null)))}e.resetErrorsCount=o;function s({gen:e,keyword:n,schemaValue:i,data:a,errsCount:o,it:s}){if(o===void 0)throw Error(`ajv implementation error`);let c=e.name(`err`);e.forRange(`i`,o,r.default.errors,o=>{e.const(c,(0,t._)`${r.default.vErrors}[${o}]`),e.if((0,t._)`${c}.instancePath === undefined`,()=>e.assign((0,t._)`${c}.instancePath`,(0,t.strConcat)(r.default.instancePath,s.errorPath))),e.assign((0,t._)`${c}.schemaPath`,(0,t.str)`${s.errSchemaPath}/${n}`),s.opts.verbose&&(e.assign((0,t._)`${c}.schema`,i),e.assign((0,t._)`${c}.data`,a))})}e.extendErrors=s;function c(e,n){let i=e.const(`err`,n);e.if((0,t._)`${r.default.vErrors} === null`,()=>e.assign(r.default.vErrors,(0,t._)`[${i}]`),(0,t._)`${r.default.vErrors}.push(${i})`),e.code((0,t._)`${r.default.errors}++`)}function l(e,n){let{gen:r,validateName:i,schemaEnv:a}=e;a.$async?r.throw((0,t._)`new ${e.ValidationError}(${n})`):(r.assign((0,t._)`${i}.errors`,n),r.return(!1))}var u={keyword:new t.Name(`keyword`),schemaPath:new t.Name(`schemaPath`),params:new t.Name(`params`),propertyName:new t.Name(`propertyName`),message:new t.Name(`message`),schema:new t.Name(`schema`),parentSchema:new t.Name(`parentSchema`)};function d(e,n,r){let{createErrors:i}=e.it;return i===!1?(0,t._)`{}`:f(e,n,r)}function f(e,t,n={}){let{gen:r,it:i}=e,a=[p(i,n),m(e,n)];return h(e,t,a),r.object(...a)}function p({errorPath:e},{instancePath:i}){let a=i?(0,t.str)`${e}${(0,n.getErrorPath)(i,n.Type.Str)}`:e;return[r.default.instancePath,(0,t.strConcat)(r.default.instancePath,a)]}function m({keyword:e,it:{errSchemaPath:r}},{schemaPath:i,parentSchema:a}){let o=a?r:(0,t.str)`${r}/${e}`;return i&&(o=(0,t.str)`${o}${(0,n.getErrorPath)(i,n.Type.Str)}`),[u.schemaPath,o]}function h(e,{params:n,message:i},a){let{keyword:o,data:s,schemaValue:c,it:l}=e,{opts:d,propertyName:f,topSchemaRef:p,schemaPath:m}=l;a.push([u.keyword,o],[u.params,typeof n==`function`?n(e):n||(0,t._)`{}`]),d.messages&&a.push([u.message,typeof i==`function`?i(e):i]),d.verbose&&a.push([u.schema,c],[u.parentSchema,(0,t._)`${p}${m}`],[r.default.data,s]),f&&a.push([u.propertyName,f])}})),Ac=i((e=>{Object.defineProperty(e,`__esModule`,{value:!0}),e.boolOrEmptySchema=e.topBoolOrEmptySchema=void 0;var t=kc(),n=Y(),r=Z(),i={message:`boolean schema is false`};function a(e){let{gen:t,schema:i,validateName:a}=e;i===!1?s(e,!1):typeof i==`object`&&i.$async===!0?t.return(r.default.data):(t.assign((0,n._)`${a}.errors`,null),t.return(!0))}e.topBoolOrEmptySchema=a;function o(e,t){let{gen:n,schema:r}=e;r===!1?(n.var(t,!1),s(e)):n.var(t,!0)}e.boolOrEmptySchema=o;function s(e,n){let{gen:r,data:a}=e,o={gen:r,keyword:`false schema`,data:a,schema:!1,schemaCode:!1,schemaValue:!1,params:{},it:e};(0,t.reportError)(o,i,void 0,n)}})),jc=i((e=>{Object.defineProperty(e,`__esModule`,{value:!0}),e.getRules=e.isJSONType=void 0;var t=new Set([`string`,`number`,`integer`,`boolean`,`null`,`object`,`array`]);function n(e){return typeof e==`string`&&t.has(e)}e.isJSONType=n;function r(){let e={number:{type:`number`,rules:[]},string:{type:`string`,rules:[]},array:{type:`array`,rules:[]},object:{type:`object`,rules:[]}};return{types:{...e,integer:!0,boolean:!0,null:!0},rules:[{rules:[]},e.number,e.string,e.array,e.object],post:{rules:[]},all:{},keywords:{}}}e.getRules=r})),Mc=i((e=>{Object.defineProperty(e,`__esModule`,{value:!0}),e.shouldUseRule=e.shouldUseGroup=e.schemaHasRulesForType=void 0;function t({schema:e,self:t},r){let i=t.RULES.types[r];return i&&i!==!0&&n(e,i)}e.schemaHasRulesForType=t;function n(e,t){return t.rules.some(t=>r(e,t))}e.shouldUseGroup=n;function r(e,t){return e[t.keyword]!==void 0||t.definition.implements?.some(t=>e[t]!==void 0)}e.shouldUseRule=r})),Nc=i((e=>{Object.defineProperty(e,`__esModule`,{value:!0}),e.reportTypeError=e.checkDataTypes=e.checkDataType=e.coerceAndCheckDataType=e.getJSONTypes=e.getSchemaTypes=e.DataType=void 0;var t=jc(),n=Mc(),r=kc(),i=Y(),a=X(),o;(function(e){e[e.Correct=0]=`Correct`,e[e.Wrong=1]=`Wrong`})(o||(e.DataType=o={}));function s(e){let t=c(e.type);if(t.includes(`null`)){if(e.nullable===!1)throw Error(`type: null contradicts nullable: false`)}else{if(!t.length&&e.nullable!==void 0)throw Error(`"nullable" cannot be used without "type"`);e.nullable===!0&&t.push(`null`)}return t}e.getSchemaTypes=s;function c(e){let n=Array.isArray(e)?e:e?[e]:[];if(n.every(t.isJSONType))return n;throw Error(`type must be JSONType or JSONType[]: `+n.join(`,`))}e.getJSONTypes=c;function l(e,t){let{gen:r,data:i,opts:a}=e,s=d(t,a.coerceTypes),c=t.length>0&&!(s.length===0&&t.length===1&&(0,n.schemaHasRulesForType)(e,t[0]));if(c){let n=h(t,i,a.strictNumbers,o.Wrong);r.if(n,()=>{s.length?f(e,t,s):_(e)})}return c}e.coerceAndCheckDataType=l;var u=new Set([`string`,`number`,`integer`,`boolean`,`null`]);function d(e,t){return t?e.filter(e=>u.has(e)||t===`array`&&e===`array`):[]}function f(e,t,n){let{gen:r,data:a,opts:o}=e,s=r.let(`dataType`,(0,i._)`typeof ${a}`),c=r.let(`coerced`,(0,i._)`undefined`);o.coerceTypes===`array`&&r.if((0,i._)`${s} == 'object' && Array.isArray(${a}) && ${a}.length == 1`,()=>r.assign(a,(0,i._)`${a}[0]`).assign(s,(0,i._)`typeof ${a}`).if(h(t,a,o.strictNumbers),()=>r.assign(c,a))),r.if((0,i._)`${c} !== undefined`);for(let e of n)(u.has(e)||e===`array`&&o.coerceTypes===`array`)&&l(e);r.else(),_(e),r.endIf(),r.if((0,i._)`${c} !== undefined`,()=>{r.assign(a,c),p(e,c)});function l(e){switch(e){case`string`:r.elseIf((0,i._)`${s} == "number" || ${s} == "boolean"`).assign(c,(0,i._)`"" + ${a}`).elseIf((0,i._)`${a} === null`).assign(c,(0,i._)`""`);return;case`number`:r.elseIf((0,i._)`${s} == "boolean" || ${a} === null
              || (${s} == "string" && ${a} && ${a} == +${a})`).assign(c,(0,i._)`+${a}`);return;case`integer`:r.elseIf((0,i._)`${s} === "boolean" || ${a} === null
              || (${s} === "string" && ${a} && ${a} == +${a} && !(${a} % 1))`).assign(c,(0,i._)`+${a}`);return;case`boolean`:r.elseIf((0,i._)`${a} === "false" || ${a} === 0 || ${a} === null`).assign(c,!1).elseIf((0,i._)`${a} === "true" || ${a} === 1`).assign(c,!0);return;case`null`:r.elseIf((0,i._)`${a} === "" || ${a} === 0 || ${a} === false`),r.assign(c,null);return;case`array`:r.elseIf((0,i._)`${s} === "string" || ${s} === "number"
              || ${s} === "boolean" || ${a} === null`).assign(c,(0,i._)`[${a}]`)}}}function p({gen:e,parentData:t,parentDataProperty:n},r){e.if((0,i._)`${t} !== undefined`,()=>e.assign((0,i._)`${t}[${n}]`,r))}function m(e,t,n,r=o.Correct){let a=r===o.Correct?i.operators.EQ:i.operators.NEQ,s;switch(e){case`null`:return(0,i._)`${t} ${a} null`;case`array`:s=(0,i._)`Array.isArray(${t})`;break;case`object`:s=(0,i._)`${t} && typeof ${t} == "object" && !Array.isArray(${t})`;break;case`integer`:s=c((0,i._)`!(${t} % 1) && !isNaN(${t})`);break;case`number`:s=c();break;default:return(0,i._)`typeof ${t} ${a} ${e}`}return r===o.Correct?s:(0,i.not)(s);function c(e=i.nil){return(0,i.and)((0,i._)`typeof ${t} == "number"`,e,n?(0,i._)`isFinite(${t})`:i.nil)}}e.checkDataType=m;function h(e,t,n,r){if(e.length===1)return m(e[0],t,n,r);let o,s=(0,a.toHash)(e);if(s.array&&s.object){let e=(0,i._)`typeof ${t} != "object"`;o=s.null?e:(0,i._)`!${t} || ${e}`,delete s.null,delete s.array,delete s.object}else o=i.nil;s.number&&delete s.integer;for(let e in s)o=(0,i.and)(o,m(e,t,n,r));return o}e.checkDataTypes=h;var g={message:({schema:e})=>`must be ${e}`,params:({schema:e,schemaValue:t})=>typeof e==`string`?(0,i._)`{type: ${e}}`:(0,i._)`{type: ${t}}`};function _(e){let t=v(e);(0,r.reportError)(t,g)}e.reportTypeError=_;function v(e){let{gen:t,data:n,schema:r}=e,i=(0,a.schemaRefOrVal)(e,r,`type`);return{gen:t,keyword:`type`,data:n,schema:r.type,schemaCode:i,schemaValue:i,parentSchema:r,params:{},it:e}}})),Pc=i((e=>{Object.defineProperty(e,`__esModule`,{value:!0}),e.assignDefaults=void 0;var t=Y(),n=X();function r(e,t){let{properties:n,items:r}=e.schema;if(t===`object`&&n)for(let t in n)i(e,t,n[t].default);else t===`array`&&Array.isArray(r)&&r.forEach((t,n)=>i(e,n,t.default))}e.assignDefaults=r;function i(e,r,i){let{gen:a,compositeRule:o,data:s,opts:c}=e;if(i===void 0)return;let l=(0,t._)`${s}${(0,t.getProperty)(r)}`;if(o){(0,n.checkStrictMode)(e,`default is ignored for: ${l}`);return}let u=(0,t._)`${l} === undefined`;c.useDefaults===`empty`&&(u=(0,t._)`${u} || ${l} === null || ${l} === ""`),a.if(u,(0,t._)`${l} = ${(0,t.stringify)(i)}`)}})),Q=i((e=>{Object.defineProperty(e,`__esModule`,{value:!0}),e.validateUnion=e.validateArray=e.usePattern=e.callValidateCode=e.schemaProperties=e.allSchemaProperties=e.noPropertyInData=e.propertyInData=e.isOwnProperty=e.hasPropFunc=e.reportMissingProp=e.checkMissingProp=e.checkReportMissingProp=void 0;var t=Y(),n=X(),r=Z(),i=X();function a(e,n){let{gen:r,data:i,it:a}=e;r.if(d(r,i,n,a.opts.ownProperties),()=>{e.setParams({missingProperty:(0,t._)`${n}`},!0),e.error()})}e.checkReportMissingProp=a;function o({gen:e,data:n,it:{opts:r}},i,a){return(0,t.or)(...i.map(i=>(0,t.and)(d(e,n,i,r.ownProperties),(0,t._)`${a} = ${i}`)))}e.checkMissingProp=o;function s(e,t){e.setParams({missingProperty:t},!0),e.error()}e.reportMissingProp=s;function c(e){return e.scopeValue(`func`,{ref:Object.prototype.hasOwnProperty,code:(0,t._)`Object.prototype.hasOwnProperty`})}e.hasPropFunc=c;function l(e,n,r){return(0,t._)`${c(e)}.call(${n}, ${r})`}e.isOwnProperty=l;function u(e,n,r,i){let a=(0,t._)`${n}${(0,t.getProperty)(r)} !== undefined`;return i?(0,t._)`${a} && ${l(e,n,r)}`:a}e.propertyInData=u;function d(e,n,r,i){let a=(0,t._)`${n}${(0,t.getProperty)(r)} === undefined`;return i?(0,t.or)(a,(0,t.not)(l(e,n,r))):a}e.noPropertyInData=d;function f(e){return e?Object.keys(e).filter(e=>e!==`__proto__`):[]}e.allSchemaProperties=f;function p(e,t){return f(t).filter(r=>!(0,n.alwaysValidSchema)(e,t[r]))}e.schemaProperties=p;function m({schemaCode:e,data:n,it:{gen:i,topSchemaRef:a,schemaPath:o,errorPath:s},it:c},l,u,d){let f=d?(0,t._)`${e}, ${n}, ${a}${o}`:n,p=[[r.default.instancePath,(0,t.strConcat)(r.default.instancePath,s)],[r.default.parentData,c.parentData],[r.default.parentDataProperty,c.parentDataProperty],[r.default.rootData,r.default.rootData]];c.opts.dynamicRef&&p.push([r.default.dynamicAnchors,r.default.dynamicAnchors]);let m=(0,t._)`${f}, ${i.object(...p)}`;return u===t.nil?(0,t._)`${l}(${m})`:(0,t._)`${l}.call(${u}, ${m})`}e.callValidateCode=m;var h=(0,t._)`new RegExp`;function g({gen:e,it:{opts:n}},r){let a=n.unicodeRegExp?`u`:``,{regExp:o}=n.code,s=o(r,a);return e.scopeValue(`pattern`,{key:s.toString(),ref:s,code:(0,t._)`${o.code===`new RegExp`?h:(0,i.useFunc)(e,o)}(${r}, ${a})`})}e.usePattern=g;function _(e){let{gen:r,data:i,keyword:a,it:o}=e,s=r.name(`valid`);if(o.allErrors){let e=r.let(`valid`,!0);return c(()=>r.assign(e,!1)),e}return r.var(s,!0),c(()=>r.break()),s;function c(o){let c=r.const(`len`,(0,t._)`${i}.length`);r.forRange(`i`,0,c,i=>{e.subschema({keyword:a,dataProp:i,dataPropType:n.Type.Num},s),r.if((0,t.not)(s),o)})}}e.validateArray=_;function v(e){let{gen:r,schema:i,keyword:a,it:o}=e;if(!Array.isArray(i))throw Error(`ajv implementation error`);if(i.some(e=>(0,n.alwaysValidSchema)(o,e))&&!o.opts.unevaluated)return;let s=r.let(`valid`,!1),c=r.name(`_valid`);r.block(()=>i.forEach((n,i)=>{let o=e.subschema({keyword:a,schemaProp:i,compositeRule:!0},c);r.assign(s,(0,t._)`${s} || ${c}`),e.mergeValidEvaluated(o,c)||r.if((0,t.not)(s))})),e.result(s,()=>e.reset(),()=>e.error(!0))}e.validateUnion=v})),Fc=i((e=>{Object.defineProperty(e,`__esModule`,{value:!0}),e.validateKeywordUsage=e.validSchemaType=e.funcKeywordCode=e.macroKeywordCode=void 0;var t=Y(),n=Z(),r=Q(),i=kc();function a(e,n){let{gen:r,keyword:i,schema:a,parentSchema:o,it:s}=e,c=n.macro.call(s.self,a,o,s),l=u(r,i,c);s.opts.validateSchema!==!1&&s.self.validateSchema(c,!0);let d=r.name(`valid`);e.subschema({schema:c,schemaPath:t.nil,errSchemaPath:`${s.errSchemaPath}/${i}`,topSchemaRef:l,compositeRule:!0},d),e.pass(d,()=>e.error(!0))}e.macroKeywordCode=a;function o(e,i){let{gen:a,keyword:o,schema:d,parentSchema:f,$data:p,it:m}=e;l(m,i);let h=u(a,o,!p&&i.compile?i.compile.call(m.self,d,f,m):i.validate),g=a.let(`valid`);e.block$data(g,_),e.ok(i.valid??g);function _(){if(i.errors===!1)b(),i.modifying&&s(e),x(()=>e.error());else{let t=i.async?v():y();i.modifying&&s(e),x(()=>c(e,t))}}function v(){let e=a.let(`ruleErrs`,null);return a.try(()=>b((0,t._)`await `),n=>a.assign(g,!1).if((0,t._)`${n} instanceof ${m.ValidationError}`,()=>a.assign(e,(0,t._)`${n}.errors`),()=>a.throw(n))),e}function y(){let e=(0,t._)`${h}.errors`;return a.assign(e,null),b(t.nil),e}function b(o=i.async?(0,t._)`await `:t.nil){let s=m.opts.passContext?n.default.this:n.default.self,c=!(`compile`in i&&!p||i.schema===!1);a.assign(g,(0,t._)`${o}${(0,r.callValidateCode)(e,h,s,c)}`,i.modifying)}function x(e){a.if((0,t.not)(i.valid??g),e)}}e.funcKeywordCode=o;function s(e){let{gen:n,data:r,it:i}=e;n.if(i.parentData,()=>n.assign(r,(0,t._)`${i.parentData}[${i.parentDataProperty}]`))}function c(e,r){let{gen:a}=e;a.if((0,t._)`Array.isArray(${r})`,()=>{a.assign(n.default.vErrors,(0,t._)`${n.default.vErrors} === null ? ${r} : ${n.default.vErrors}.concat(${r})`).assign(n.default.errors,(0,t._)`${n.default.vErrors}.length`),(0,i.extendErrors)(e)},()=>e.error())}function l({schemaEnv:e},t){if(t.async&&!e.$async)throw Error(`async keyword in sync schema`)}function u(e,n,r){if(r===void 0)throw Error(`keyword "${n}" failed to compile`);return e.scopeValue(`keyword`,typeof r==`function`?{ref:r}:{ref:r,code:(0,t.stringify)(r)})}function d(e,t,n=!1){return!t.length||t.some(t=>t===`array`?Array.isArray(e):t===`object`?e&&typeof e==`object`&&!Array.isArray(e):typeof e==t||n&&e===void 0)}e.validSchemaType=d;function f({schema:e,opts:t,self:n,errSchemaPath:r},i,a){if(Array.isArray(i.keyword)?!i.keyword.includes(a):i.keyword!==a)throw Error(`ajv implementation error`);let o=i.dependencies;if(o?.some(t=>!Object.prototype.hasOwnProperty.call(e,t)))throw Error(`parent schema must have dependencies of ${a}: ${o.join(`,`)}`);if(i.validateSchema&&!i.validateSchema(e[a])){let e=`keyword "${a}" value is invalid at path "${r}": `+n.errorsText(i.validateSchema.errors);if(t.validateSchema===`log`)n.logger.error(e);else throw Error(e)}}e.validateKeywordUsage=f})),Ic=i((e=>{Object.defineProperty(e,`__esModule`,{value:!0}),e.extendSubschemaMode=e.extendSubschemaData=e.getSubschema=void 0;var t=Y(),n=X();function r(e,{keyword:r,schemaProp:i,schema:a,schemaPath:o,errSchemaPath:s,topSchemaRef:c}){if(r!==void 0&&a!==void 0)throw Error(`both "keyword" and "schema" passed, only one allowed`);if(r!==void 0){let a=e.schema[r];return i===void 0?{schema:a,schemaPath:(0,t._)`${e.schemaPath}${(0,t.getProperty)(r)}`,errSchemaPath:`${e.errSchemaPath}/${r}`}:{schema:a[i],schemaPath:(0,t._)`${e.schemaPath}${(0,t.getProperty)(r)}${(0,t.getProperty)(i)}`,errSchemaPath:`${e.errSchemaPath}/${r}/${(0,n.escapeFragment)(i)}`}}if(a!==void 0){if(o===void 0||s===void 0||c===void 0)throw Error(`"schemaPath", "errSchemaPath" and "topSchemaRef" are required with "schema"`);return{schema:a,schemaPath:o,topSchemaRef:c,errSchemaPath:s}}throw Error(`either "keyword" or "schema" must be passed`)}e.getSubschema=r;function i(e,r,{dataProp:i,dataPropType:a,data:o,dataTypes:s,propertyName:c}){if(o!==void 0&&i!==void 0)throw Error(`both "data" and "dataProp" passed, only one allowed`);let{gen:l}=r;if(i!==void 0){let{errorPath:o,dataPathArr:s,opts:c}=r;u(l.let(`data`,(0,t._)`${r.data}${(0,t.getProperty)(i)}`,!0)),e.errorPath=(0,t.str)`${o}${(0,n.getErrorPath)(i,a,c.jsPropertySyntax)}`,e.parentDataProperty=(0,t._)`${i}`,e.dataPathArr=[...s,e.parentDataProperty]}o!==void 0&&(u(o instanceof t.Name?o:l.let(`data`,o,!0)),c!==void 0&&(e.propertyName=c)),s&&(e.dataTypes=s);function u(t){e.data=t,e.dataLevel=r.dataLevel+1,e.dataTypes=[],r.definedProperties=new Set,e.parentData=r.data,e.dataNames=[...r.dataNames,t]}}e.extendSubschemaData=i;function a(e,{jtdDiscriminator:t,jtdMetadata:n,compositeRule:r,createErrors:i,allErrors:a}){r!==void 0&&(e.compositeRule=r),i!==void 0&&(e.createErrors=i),a!==void 0&&(e.allErrors=a),e.jtdDiscriminator=t,e.jtdMetadata=n}e.extendSubschemaMode=a})),Lc=i(((e,t)=>{t.exports=function e(t,n){if(t===n)return!0;if(t&&n&&typeof t==`object`&&typeof n==`object`){if(t.constructor!==n.constructor)return!1;var r,i,a;if(Array.isArray(t)){if(r=t.length,r!=n.length)return!1;for(i=r;i--!==0;)if(!e(t[i],n[i]))return!1;return!0}if(t.constructor===RegExp)return t.source===n.source&&t.flags===n.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===n.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===n.toString();if(a=Object.keys(t),r=a.length,r!==Object.keys(n).length)return!1;for(i=r;i--!==0;)if(!Object.prototype.hasOwnProperty.call(n,a[i]))return!1;for(i=r;i--!==0;){var o=a[i];if(!e(t[o],n[o]))return!1}return!0}return t!==t&&n!==n}})),Rc=i(((e,t)=>{var n=t.exports=function(e,t,n){typeof t==`function`&&(n=t,t={}),n=t.cb||n;var i=typeof n==`function`?n:n.pre||function(){},a=n.post||function(){};r(t,i,a,e,``,e)};n.keywords={additionalItems:!0,items:!0,contains:!0,additionalProperties:!0,propertyNames:!0,not:!0,if:!0,then:!0,else:!0},n.arrayKeywords={items:!0,allOf:!0,anyOf:!0,oneOf:!0},n.propsKeywords={$defs:!0,definitions:!0,properties:!0,patternProperties:!0,dependencies:!0},n.skipKeywords={default:!0,enum:!0,const:!0,required:!0,maximum:!0,minimum:!0,exclusiveMaximum:!0,exclusiveMinimum:!0,multipleOf:!0,maxLength:!0,minLength:!0,pattern:!0,format:!0,maxItems:!0,minItems:!0,uniqueItems:!0,maxProperties:!0,minProperties:!0};function r(e,t,a,o,s,c,l,u,d,f){if(o&&typeof o==`object`&&!Array.isArray(o)){for(var p in t(o,s,c,l,u,d,f),o){var m=o[p];if(Array.isArray(m)){if(p in n.arrayKeywords)for(var h=0;h<m.length;h++)r(e,t,a,m[h],s+`/`+p+`/`+h,c,s,p,o,h)}else if(p in n.propsKeywords){if(m&&typeof m==`object`)for(var g in m)r(e,t,a,m[g],s+`/`+p+`/`+i(g),c,s,p,o,g)}else (p in n.keywords||e.allKeys&&!(p in n.skipKeywords))&&r(e,t,a,m,s+`/`+p,c,s,p,o)}a(o,s,c,l,u,d,f)}}function i(e){return e.replace(/~/g,`~0`).replace(/\//g,`~1`)}})),zc=i((e=>{Object.defineProperty(e,`__esModule`,{value:!0}),e.getSchemaRefs=e.resolveUrl=e.normalizeId=e._getFullPath=e.getFullPath=e.inlineRef=void 0;var t=X(),n=Lc(),r=Rc(),i=new Set([`type`,`format`,`pattern`,`maxLength`,`minLength`,`maxProperties`,`minProperties`,`maxItems`,`minItems`,`maximum`,`minimum`,`uniqueItems`,`multipleOf`,`required`,`enum`,`const`]);function a(e,t=!0){return typeof e==`boolean`?!0:t===!0?!s(e):t?c(e)<=t:!1}e.inlineRef=a;var o=new Set([`$ref`,`$recursiveRef`,`$recursiveAnchor`,`$dynamicRef`,`$dynamicAnchor`]);function s(e){for(let t in e){if(o.has(t))return!0;let n=e[t];if(Array.isArray(n)&&n.some(s)||typeof n==`object`&&s(n))return!0}return!1}function c(e){let n=0;for(let r in e)if(r===`$ref`||(n++,!i.has(r)&&(typeof e[r]==`object`&&(0,t.eachItem)(e[r],e=>n+=c(e)),n===1/0)))return 1/0;return n}function l(e,t=``,n){return n!==!1&&(t=f(t)),u(e,e.parse(t))}e.getFullPath=l;function u(e,t){return e.serialize(t).split(`#`)[0]+`#`}e._getFullPath=u;var d=/#\/?$/;function f(e){return e?e.replace(d,``):``}e.normalizeId=f;function p(e,t,n){return n=f(n),e.resolve(t,n)}e.resolveUrl=p;var m=/^[a-z_][-a-z0-9._]*$/i;function h(e,t){if(typeof e==`boolean`)return{};let{schemaId:i,uriResolver:a}=this.opts,o=f(e[i]||t),s={"":o},c=l(a,o,!1),u={},d=new Set;return r(e,{allKeys:!0},(e,t,n,r)=>{if(r===void 0)return;let a=c+t,o=s[r];typeof e[i]==`string`&&(o=l.call(this,e[i])),g.call(this,e.$anchor),g.call(this,e.$dynamicAnchor),s[t]=o;function l(t){let n=this.opts.uriResolver.resolve;if(t=f(o?n(o,t):t),d.has(t))throw h(t);d.add(t);let r=this.refs[t];return typeof r==`string`&&(r=this.refs[r]),typeof r==`object`?p(e,r.schema,t):t!==f(a)&&(t[0]===`#`?(p(e,u[t],t),u[t]=e):this.refs[t]=a),t}function g(e){if(typeof e==`string`){if(!m.test(e))throw Error(`invalid anchor "${e}"`);l.call(this,`#${e}`)}}}),u;function p(e,t,r){if(t!==void 0&&!n(e,t))throw h(r)}function h(e){return Error(`reference "${e}" resolves to more than one schema`)}}e.getSchemaRefs=h})),Bc=i((e=>{Object.defineProperty(e,`__esModule`,{value:!0}),e.getData=e.KeywordCxt=e.validateFunctionCode=void 0;var t=Ac(),n=Nc(),r=Mc(),i=Nc(),a=Pc(),o=Fc(),s=Ic(),c=Y(),l=Z(),u=zc(),d=X(),f=kc();function p(e){if(S(e)&&(w(e),x(e))){_(e);return}m(e,()=>(0,t.topBoolOrEmptySchema)(e))}e.validateFunctionCode=p;function m({gen:e,validateName:t,schema:n,schemaEnv:r,opts:i},a){i.code.es5?e.func(t,(0,c._)`${l.default.data}, ${l.default.valCxt}`,r.$async,()=>{e.code((0,c._)`"use strict"; ${y(n,i)}`),g(e,i),e.code(a)}):e.func(t,(0,c._)`${l.default.data}, ${h(i)}`,r.$async,()=>e.code(y(n,i)).code(a))}function h(e){return(0,c._)`{${l.default.instancePath}="", ${l.default.parentData}, ${l.default.parentDataProperty}, ${l.default.rootData}=${l.default.data}${e.dynamicRef?(0,c._)`, ${l.default.dynamicAnchors}={}`:c.nil}}={}`}function g(e,t){e.if(l.default.valCxt,()=>{e.var(l.default.instancePath,(0,c._)`${l.default.valCxt}.${l.default.instancePath}`),e.var(l.default.parentData,(0,c._)`${l.default.valCxt}.${l.default.parentData}`),e.var(l.default.parentDataProperty,(0,c._)`${l.default.valCxt}.${l.default.parentDataProperty}`),e.var(l.default.rootData,(0,c._)`${l.default.valCxt}.${l.default.rootData}`),t.dynamicRef&&e.var(l.default.dynamicAnchors,(0,c._)`${l.default.valCxt}.${l.default.dynamicAnchors}`)},()=>{e.var(l.default.instancePath,(0,c._)`""`),e.var(l.default.parentData,(0,c._)`undefined`),e.var(l.default.parentDataProperty,(0,c._)`undefined`),e.var(l.default.rootData,l.default.data),t.dynamicRef&&e.var(l.default.dynamicAnchors,(0,c._)`{}`)})}function _(e){let{schema:t,opts:n,gen:r}=e;m(e,()=>{n.$comment&&t.$comment&&A(e),D(e),r.let(l.default.vErrors,null),r.let(l.default.errors,0),n.unevaluated&&v(e),T(e),j(e)})}function v(e){let{gen:t,validateName:n}=e;e.evaluated=t.const(`evaluated`,(0,c._)`${n}.evaluated`),t.if((0,c._)`${e.evaluated}.dynamicProps`,()=>t.assign((0,c._)`${e.evaluated}.props`,(0,c._)`undefined`)),t.if((0,c._)`${e.evaluated}.dynamicItems`,()=>t.assign((0,c._)`${e.evaluated}.items`,(0,c._)`undefined`))}function y(e,t){let n=typeof e==`object`&&e[t.schemaId];return n&&(t.code.source||t.code.process)?(0,c._)`/*# sourceURL=${n} */`:c.nil}function b(e,n){if(S(e)&&(w(e),x(e))){C(e,n);return}(0,t.boolOrEmptySchema)(e,n)}function x({schema:e,self:t}){if(typeof e==`boolean`)return!e;for(let n in e)if(t.RULES.all[n])return!0;return!1}function S(e){return typeof e.schema!=`boolean`}function C(e,t){let{schema:n,gen:r,opts:i}=e;i.$comment&&n.$comment&&A(e),O(e),k(e);let a=r.const(`_errs`,l.default.errors);T(e,a),r.var(t,(0,c._)`${a} === ${l.default.errors}`)}function w(e){(0,d.checkUnknownRules)(e),E(e)}function T(e,t){if(e.opts.jtd)return N(e,[],!1,t);let r=(0,n.getSchemaTypes)(e.schema);N(e,r,!(0,n.coerceAndCheckDataType)(e,r),t)}function E(e){let{schema:t,errSchemaPath:n,opts:r,self:i}=e;t.$ref&&r.ignoreKeywordsWithRef&&(0,d.schemaHasRulesButRef)(t,i.RULES)&&i.logger.warn(`$ref: keywords ignored in schema at path "${n}"`)}function D(e){let{schema:t,opts:n}=e;t.default!==void 0&&n.useDefaults&&n.strictSchema&&(0,d.checkStrictMode)(e,`default is ignored in the schema root`)}function O(e){let t=e.schema[e.opts.schemaId];t&&(e.baseId=(0,u.resolveUrl)(e.opts.uriResolver,e.baseId,t))}function k(e){if(e.schema.$async&&!e.schemaEnv.$async)throw Error(`async schema in sync schema`)}function A({gen:e,schemaEnv:t,schema:n,errSchemaPath:r,opts:i}){let a=n.$comment;if(i.$comment===!0)e.code((0,c._)`${l.default.self}.logger.log(${a})`);else if(typeof i.$comment==`function`){let n=(0,c.str)`${r}/$comment`,i=e.scopeValue(`root`,{ref:t.root});e.code((0,c._)`${l.default.self}.opts.$comment(${a}, ${n}, ${i}.schema)`)}}function j(e){let{gen:t,schemaEnv:n,validateName:r,ValidationError:i,opts:a}=e;n.$async?t.if((0,c._)`${l.default.errors} === 0`,()=>t.return(l.default.data),()=>t.throw((0,c._)`new ${i}(${l.default.vErrors})`)):(t.assign((0,c._)`${r}.errors`,l.default.vErrors),a.unevaluated&&M(e),t.return((0,c._)`${l.default.errors} === 0`))}function M({gen:e,evaluated:t,props:n,items:r}){n instanceof c.Name&&e.assign((0,c._)`${t}.props`,n),r instanceof c.Name&&e.assign((0,c._)`${t}.items`,r)}function N(e,t,n,a){let{gen:o,schema:s,data:u,allErrors:f,opts:p,self:m}=e,{RULES:h}=m;if(s.$ref&&(p.ignoreKeywordsWithRef||!(0,d.schemaHasRulesButRef)(s,h))){o.block(()=>W(e,`$ref`,h.all.$ref.definition));return}p.jtd||F(e,t),o.block(()=>{for(let e of h.rules)g(e);g(h.post)});function g(d){(0,r.shouldUseGroup)(s,d)&&(d.type?(o.if((0,i.checkDataType)(d.type,u,p.strictNumbers)),P(e,d),t.length===1&&t[0]===d.type&&n&&(o.else(),(0,i.reportTypeError)(e)),o.endIf()):P(e,d),f||o.if((0,c._)`${l.default.errors} === ${a||0}`))}}function P(e,t){let{gen:n,schema:i,opts:{useDefaults:o}}=e;o&&(0,a.assignDefaults)(e,t.type),n.block(()=>{for(let n of t.rules)(0,r.shouldUseRule)(i,n)&&W(e,n.keyword,n.definition,t.type)})}function F(e,t){e.schemaEnv.meta||!e.opts.strictTypes||(I(e,t),e.opts.allowUnionTypes||L(e,t),R(e,e.dataTypes))}function I(e,t){if(t.length){if(!e.dataTypes.length){e.dataTypes=t;return}t.forEach(t=>{B(e.dataTypes,t)||H(e,`type "${t}" not allowed by context "${e.dataTypes.join(`,`)}"`)}),V(e,t)}}function L(e,t){t.length>1&&!(t.length===2&&t.includes(`null`))&&H(e,`use allowUnionTypes to allow union type keyword`)}function R(e,t){let n=e.self.RULES.all;for(let i in n){let a=n[i];if(typeof a==`object`&&(0,r.shouldUseRule)(e.schema,a)){let{type:n}=a.definition;n.length&&!n.some(e=>z(t,e))&&H(e,`missing type "${n.join(`,`)}" for keyword "${i}"`)}}}function z(e,t){return e.includes(t)||t===`number`&&e.includes(`integer`)}function B(e,t){return e.includes(t)||t===`integer`&&e.includes(`number`)}function V(e,t){let n=[];for(let r of e.dataTypes)B(t,r)?n.push(r):t.includes(`integer`)&&r===`number`&&n.push(`integer`);e.dataTypes=n}function H(e,t){let n=e.schemaEnv.baseId+e.errSchemaPath;t+=` at "${n}" (strictTypes)`,(0,d.checkStrictMode)(e,t,e.opts.strictTypes)}var U=class{constructor(e,t,n){if((0,o.validateKeywordUsage)(e,t,n),this.gen=e.gen,this.allErrors=e.allErrors,this.keyword=n,this.data=e.data,this.schema=e.schema[n],this.$data=t.$data&&e.opts.$data&&this.schema&&this.schema.$data,this.schemaValue=(0,d.schemaRefOrVal)(e,this.schema,n,this.$data),this.schemaType=t.schemaType,this.parentSchema=e.schema,this.params={},this.it=e,this.def=t,this.$data)this.schemaCode=e.gen.const(`vSchema`,ne(this.$data,e));else if(this.schemaCode=this.schemaValue,!(0,o.validSchemaType)(this.schema,t.schemaType,t.allowUndefined))throw Error(`${n} value must be ${JSON.stringify(t.schemaType)}`);(`code`in t?t.trackErrors:t.errors!==!1)&&(this.errsCount=e.gen.const(`_errs`,l.default.errors))}result(e,t,n){this.failResult((0,c.not)(e),t,n)}failResult(e,t,n){this.gen.if(e),n?n():this.error(),t?(this.gen.else(),t(),this.allErrors&&this.gen.endIf()):this.allErrors?this.gen.endIf():this.gen.else()}pass(e,t){this.failResult((0,c.not)(e),void 0,t)}fail(e){if(e===void 0){this.error(),this.allErrors||this.gen.if(!1);return}this.gen.if(e),this.error(),this.allErrors?this.gen.endIf():this.gen.else()}fail$data(e){if(!this.$data)return this.fail(e);let{schemaCode:t}=this;this.fail((0,c._)`${t} !== undefined && (${(0,c.or)(this.invalid$data(),e)})`)}error(e,t,n){if(t){this.setParams(t),this._error(e,n),this.setParams({});return}this._error(e,n)}_error(e,t){(e?f.reportExtraError:f.reportError)(this,this.def.error,t)}$dataError(){(0,f.reportError)(this,this.def.$dataError||f.keyword$DataError)}reset(){if(this.errsCount===void 0)throw Error(`add "trackErrors" to keyword definition`);(0,f.resetErrorsCount)(this.gen,this.errsCount)}ok(e){this.allErrors||this.gen.if(e)}setParams(e,t){t?Object.assign(this.params,e):this.params=e}block$data(e,t,n=c.nil){this.gen.block(()=>{this.check$data(e,n),t()})}check$data(e=c.nil,t=c.nil){if(!this.$data)return;let{gen:n,schemaCode:r,schemaType:i,def:a}=this;n.if((0,c.or)((0,c._)`${r} === undefined`,t)),e!==c.nil&&n.assign(e,!0),(i.length||a.validateSchema)&&(n.elseIf(this.invalid$data()),this.$dataError(),e!==c.nil&&n.assign(e,!1)),n.else()}invalid$data(){let{gen:e,schemaCode:t,schemaType:n,def:r,it:a}=this;return(0,c.or)(o(),s());function o(){if(n.length){if(!(t instanceof c.Name))throw Error(`ajv implementation error`);let e=Array.isArray(n)?n:[n];return(0,c._)`${(0,i.checkDataTypes)(e,t,a.opts.strictNumbers,i.DataType.Wrong)}`}return c.nil}function s(){if(r.validateSchema){let n=e.scopeValue(`validate$data`,{ref:r.validateSchema});return(0,c._)`!${n}(${t})`}return c.nil}}subschema(e,t){let n=(0,s.getSubschema)(this.it,e);(0,s.extendSubschemaData)(n,this.it,e),(0,s.extendSubschemaMode)(n,e);let r={...this.it,...n,items:void 0,props:void 0};return b(r,t),r}mergeEvaluated(e,t){let{it:n,gen:r}=this;n.opts.unevaluated&&(n.props!==!0&&e.props!==void 0&&(n.props=d.mergeEvaluated.props(r,e.props,n.props,t)),n.items!==!0&&e.items!==void 0&&(n.items=d.mergeEvaluated.items(r,e.items,n.items,t)))}mergeValidEvaluated(e,t){let{it:n,gen:r}=this;if(n.opts.unevaluated&&(n.props!==!0||n.items!==!0))return r.if(t,()=>this.mergeEvaluated(e,c.Name)),!0}};e.KeywordCxt=U;function W(e,t,n,r){let i=new U(e,n,t);`code`in n?n.code(i,r):i.$data&&n.validate?(0,o.funcKeywordCode)(i,n):`macro`in n?(0,o.macroKeywordCode)(i,n):(n.compile||n.validate)&&(0,o.funcKeywordCode)(i,n)}var ee=/^\/(?:[^~]|~0|~1)*$/,te=/^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;function ne(e,{dataLevel:t,dataNames:n,dataPathArr:r}){let i,a;if(e===``)return l.default.rootData;if(e[0]===`/`){if(!ee.test(e))throw Error(`Invalid JSON-pointer: ${e}`);i=e,a=l.default.rootData}else{let o=te.exec(e);if(!o)throw Error(`Invalid JSON-pointer: ${e}`);let s=+o[1];if(i=o[2],i===`#`){if(s>=t)throw Error(u(`property/index`,s));return r[t-s]}if(s>t)throw Error(u(`data`,s));if(a=n[t-s],!i)return a}let o=a,s=i.split(`/`);for(let e of s)e&&(a=(0,c._)`${a}${(0,c.getProperty)((0,d.unescapeJsonPointer)(e))}`,o=(0,c._)`${o} && ${a}`);return o;function u(e,n){return`Cannot access ${e} ${n} levels up, current level is ${t}`}}e.getData=ne})),Vc=i((e=>{Object.defineProperty(e,`__esModule`,{value:!0}),e.default=class extends Error{constructor(e){super(`validation failed`),this.errors=e,this.ajv=this.validation=!0}}})),Hc=i((e=>{Object.defineProperty(e,`__esModule`,{value:!0});var t=zc();e.default=class extends Error{constructor(e,n,r,i){super(i||`can't resolve reference ${r} from id ${n}`),this.missingRef=(0,t.resolveUrl)(e,n,r),this.missingSchema=(0,t.normalizeId)((0,t.getFullPath)(e,this.missingRef))}}})),Uc=i((e=>{Object.defineProperty(e,`__esModule`,{value:!0}),e.resolveSchema=e.getCompilingSchema=e.resolveRef=e.compileSchema=e.SchemaEnv=void 0;var t=Y(),n=Vc(),r=Z(),i=zc(),a=X(),o=Bc(),s=class{constructor(e){this.refs={},this.dynamicAnchors={};let t;typeof e.schema==`object`&&(t=e.schema),this.schema=e.schema,this.schemaId=e.schemaId,this.root=e.root||this,this.baseId=e.baseId??(0,i.normalizeId)(t?.[e.schemaId||`$id`]),this.schemaPath=e.schemaPath,this.localRefs=e.localRefs,this.meta=e.meta,this.$async=t?.$async,this.refs={}}};e.SchemaEnv=s;function c(e){let a=d.call(this,e);if(a)return a;let s=(0,i.getFullPath)(this.opts.uriResolver,e.root.baseId),{es5:c,lines:l}=this.opts.code,{ownProperties:u}=this.opts,f=new t.CodeGen(this.scope,{es5:c,lines:l,ownProperties:u}),p;e.$async&&(p=f.scopeValue(`Error`,{ref:n.default,code:(0,t._)`require("ajv/dist/runtime/validation_error").default`}));let m=f.scopeName(`validate`);e.validateName=m;let h={gen:f,allErrors:this.opts.allErrors,data:r.default.data,parentData:r.default.parentData,parentDataProperty:r.default.parentDataProperty,dataNames:[r.default.data],dataPathArr:[t.nil],dataLevel:0,dataTypes:[],definedProperties:new Set,topSchemaRef:f.scopeValue(`schema`,this.opts.code.source===!0?{ref:e.schema,code:(0,t.stringify)(e.schema)}:{ref:e.schema}),validateName:m,ValidationError:p,schema:e.schema,schemaEnv:e,rootId:s,baseId:e.baseId||s,schemaPath:t.nil,errSchemaPath:e.schemaPath||(this.opts.jtd?``:`#`),errorPath:(0,t._)`""`,opts:this.opts,self:this},g;try{this._compilations.add(e),(0,o.validateFunctionCode)(h),f.optimize(this.opts.code.optimize);let n=f.toString();g=`${f.scopeRefs(r.default.scope)}return ${n}`,this.opts.code.process&&(g=this.opts.code.process(g,e));let i=Function(`${r.default.self}`,`${r.default.scope}`,g)(this,this.scope.get());if(this.scope.value(m,{ref:i}),i.errors=null,i.schema=e.schema,i.schemaEnv=e,e.$async&&(i.$async=!0),this.opts.code.source===!0&&(i.source={validateName:m,validateCode:n,scopeValues:f._values}),this.opts.unevaluated){let{props:e,items:n}=h;i.evaluated={props:e instanceof t.Name?void 0:e,items:n instanceof t.Name?void 0:n,dynamicProps:e instanceof t.Name,dynamicItems:n instanceof t.Name},i.source&&(i.source.evaluated=(0,t.stringify)(i.evaluated))}return e.validate=i,e}catch(t){throw delete e.validate,delete e.validateName,g&&this.logger.error(`Error compiling schema, function code:`,g),t}finally{this._compilations.delete(e)}}e.compileSchema=c;function l(e,t,n){n=(0,i.resolveUrl)(this.opts.uriResolver,t,n);let r=e.refs[n];if(r)return r;let a=p.call(this,e,n);if(a===void 0){let r=e.localRefs?.[n],{schemaId:i}=this.opts;r&&(a=new s({schema:r,schemaId:i,root:e,baseId:t}))}if(a!==void 0)return e.refs[n]=u.call(this,a)}e.resolveRef=l;function u(e){return(0,i.inlineRef)(e.schema,this.opts.inlineRefs)?e.schema:e.validate?e:c.call(this,e)}function d(e){for(let t of this._compilations)if(f(t,e))return t}e.getCompilingSchema=d;function f(e,t){return e.schema===t.schema&&e.root===t.root&&e.baseId===t.baseId}function p(e,t){let n;for(;typeof(n=this.refs[t])==`string`;)t=n;return n||this.schemas[t]||m.call(this,e,t)}function m(e,t){let n=this.opts.uriResolver.parse(t),r=(0,i._getFullPath)(this.opts.uriResolver,n),a=(0,i.getFullPath)(this.opts.uriResolver,e.baseId,void 0);if(Object.keys(e.schema).length>0&&r===a)return g.call(this,n,e);let o=(0,i.normalizeId)(r),l=this.refs[o]||this.schemas[o];if(typeof l==`string`){let t=m.call(this,e,l);return typeof t?.schema==`object`?g.call(this,n,t):void 0}if(typeof l?.schema==`object`){if(l.validate||c.call(this,l),o===(0,i.normalizeId)(t)){let{schema:t}=l,{schemaId:n}=this.opts,r=t[n];return r&&(a=(0,i.resolveUrl)(this.opts.uriResolver,a,r)),new s({schema:t,schemaId:n,root:e,baseId:a})}return g.call(this,n,l)}}e.resolveSchema=m;var h=new Set([`properties`,`patternProperties`,`enum`,`dependencies`,`definitions`]);function g(e,{baseId:t,schema:n,root:r}){if(e.fragment?.[0]!==`/`)return;for(let r of e.fragment.slice(1).split(`/`)){if(typeof n==`boolean`)return;let e=n[(0,a.unescapeFragment)(r)];if(e===void 0)return;n=e;let o=typeof n==`object`&&n[this.opts.schemaId];!h.has(r)&&o&&(t=(0,i.resolveUrl)(this.opts.uriResolver,t,o))}let o;if(typeof n!=`boolean`&&n.$ref&&!(0,a.schemaHasRulesButRef)(n,this.RULES)){let e=(0,i.resolveUrl)(this.opts.uriResolver,t,n.$ref);o=m.call(this,r,e)}let{schemaId:c}=this.opts;if(o||=new s({schema:n,schemaId:c,root:r,baseId:t}),o.schema!==o.root.schema)return o}})),Wc=r({$id:()=>Gc,additionalProperties:()=>!1,default:()=>Xc,description:()=>Kc,properties:()=>Yc,required:()=>Jc,type:()=>qc}),Gc,Kc,qc,Jc,Yc,Xc,Zc=n((()=>{Gc=`https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#`,Kc=`Meta-schema for $data reference (JSON AnySchema extension proposal)`,qc=`object`,Jc=[`$data`],Yc={$data:{type:`string`,anyOf:[{format:`relative-json-pointer`},{format:`json-pointer`}]}},Xc={$id:Gc,description:Kc,type:qc,required:Jc,properties:Yc,additionalProperties:!1}})),Qc=i(((e,t)=>{var n=RegExp.prototype.test.bind(/^[\da-f]{8}-[\da-f]{4}-[\da-f]{4}-[\da-f]{4}-[\da-f]{12}$/iu),r=RegExp.prototype.test.bind(/^(?:(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)$/u),i=RegExp.prototype.test.bind(/^[\da-f]{2}$/iu),a=RegExp.prototype.test.bind(/^[\da-z\-._~]$/iu),o=RegExp.prototype.test.bind(/^[\da-z\-._~!$&'()*+,;=:@/]$/iu);function s(e){let t=``,n=0,r=0;for(r=0;r<e.length;r++)if(n=e[r].charCodeAt(0),n!==48){if(!(n>=48&&n<=57||n>=65&&n<=70||n>=97&&n<=102))return``;t+=e[r];break}for(r+=1;r<e.length;r++){if(n=e[r].charCodeAt(0),!(n>=48&&n<=57||n>=65&&n<=70||n>=97&&n<=102))return``;t+=e[r]}return t}var c=RegExp.prototype.test.bind(/[^!"$&'()*+,\-.;=_`a-z{}~]/u);function l(e){return e.length=0,!0}function u(e,t,n){if(e.length){let r=s(e);if(r!==``)t.push(r);else return n.error=!0,!1;e.length=0}return!0}function d(e){let t=0,n={error:!1,address:``,zone:``},r=[],i=[],a=!1,o=!1,c=u;for(let s=0;s<e.length;s++){let u=e[s];if(!(u===`[`||u===`]`))if(u===`:`){if(a===!0&&(o=!0),!c(i,r,n))break;if(++t>7){n.error=!0;break}s>0&&e[s-1]===`:`&&(a=!0),r.push(`:`);continue}else if(u===`%`){if(!c(i,r,n))break;c=l}else{i.push(u);continue}}return i.length&&(c===l?n.zone=i.join(``):o?r.push(i.join(``)):r.push(s(i))),n.address=r.join(``),n}function f(e){if(p(e,`:`)<2)return{host:e,isIPV6:!1};let t=d(e);if(t.error)return{host:e,isIPV6:!1};{let e=t.address,n=t.address;return t.zone&&(e+=`%`+t.zone,n+=`%25`+t.zone),{host:e,isIPV6:!0,escapedHost:n}}}function p(e,t){let n=0;for(let r=0;r<e.length;r++)e[r]===t&&n++;return n}function m(e){let t=e,n=[],r=-1,i=0;for(;i=t.length;){if(i===1){if(t===`.`)break;if(t===`/`){n.push(`/`);break}else{n.push(t);break}}else if(i===2){if(t[0]===`.`){if(t[1]===`.`)break;if(t[1]===`/`){t=t.slice(2);continue}}else if(t[0]===`/`&&(t[1]===`.`||t[1]===`/`)){n.push(`/`);break}}else if(i===3&&t===`/..`){n.length!==0&&n.pop(),n.push(`/`);break}if(t[0]===`.`){if(t[1]===`.`){if(t[2]===`/`){t=t.slice(3);continue}}else if(t[1]===`/`){t=t.slice(2);continue}}else if(t[0]===`/`&&t[1]===`.`){if(t[2]===`/`){t=t.slice(2);continue}else if(t[2]===`.`&&t[3]===`/`){t=t.slice(3),n.length!==0&&n.pop();continue}}if((r=t.indexOf(`/`,1))===-1){n.push(t);break}else n.push(t.slice(0,r)),t=t.slice(r)}return n.join(``)}var h={"@":`%40`,"/":`%2F`,"?":`%3F`,"#":`%23`,":":`%3A`},g=/[@/?#:]/g,_=/[@/?#]/g;function v(e,t){let n=t?_:g;return n.lastIndex=0,e.replace(n,e=>h[e])}function y(e,t=!1){if(e.indexOf(`%`)===-1)return e;let n=``;for(let r=0;r<e.length;r++){if(e[r]===`%`&&r+2<e.length){let o=e.slice(r+1,r+3);if(i(o)){let e=o.toUpperCase(),i=String.fromCharCode(parseInt(e,16));t&&a(i)?n+=i:n+=`%`+e,r+=2;continue}}n+=e[r]}return n}function b(e){let t=``;for(let n=0;n<e.length;n++){if(e[n]===`%`&&n+2<e.length){let r=e.slice(n+1,n+3);if(i(r)){let e=r.toUpperCase(),i=String.fromCharCode(parseInt(e,16));i!==`.`&&a(i)?t+=i:t+=`%`+e,n+=2;continue}}o(e[n])?t+=e[n]:t+=escape(e[n])}return t}function x(e){let t=``;for(let n=0;n<e.length;n++){if(e[n]===`%`&&n+2<e.length){let r=e.slice(n+1,n+3);if(i(r)){t+=`%`+r.toUpperCase(),n+=2;continue}}t+=escape(e[n])}return t}function S(e){let t=[];if(e.userinfo!==void 0&&(t.push(e.userinfo),t.push(`@`)),e.host!==void 0){let n=unescape(e.host);if(!r(n)){let e=f(n);n=e.isIPV6===!0?`[${e.escapedHost}]`:v(n,!1)}t.push(n)}return(typeof e.port==`number`||typeof e.port==`string`)&&(t.push(`:`),t.push(String(e.port))),t.length?t.join(``):void 0}t.exports={nonSimpleDomain:c,recomposeAuthority:S,reescapeHostDelimiters:v,normalizePercentEncoding:y,normalizePathEncoding:b,escapePreservingEscapes:x,removeDotSegments:m,isIPv4:r,isUUID:n,normalizeIPv6:f,stringArrayToHexStripped:s}})),$c=i(((e,t)=>{var{isUUID:n}=Qc(),r=/([\da-z][\d\-a-z]{0,31}):((?:[\w!$'()*+,\-.:;=@]|%[\da-f]{2})+)/iu,i=[`http`,`https`,`ws`,`wss`,`urn`,`urn:uuid`];function a(e){return i.indexOf(e)!==-1}function o(e){return e.secure===!0?!0:e.secure===!1?!1:e.scheme?e.scheme.length===3&&(e.scheme[0]===`w`||e.scheme[0]===`W`)&&(e.scheme[1]===`s`||e.scheme[1]===`S`)&&(e.scheme[2]===`s`||e.scheme[2]===`S`):!1}function s(e){return e.host||(e.error=e.error||`HTTP URIs must have a host.`),e}function c(e){let t=String(e.scheme).toLowerCase()===`https`;return(e.port===(t?443:80)||e.port===``)&&(e.port=void 0),e.path||=`/`,e}function l(e){return e.secure=o(e),e.resourceName=(e.path||`/`)+(e.query?`?`+e.query:``),e.path=void 0,e.query=void 0,e}function u(e){if((e.port===(o(e)?443:80)||e.port===``)&&(e.port=void 0),typeof e.secure==`boolean`&&(e.scheme=e.secure?`wss`:`ws`,e.secure=void 0),e.resourceName){let[t,n]=e.resourceName.split(`?`);e.path=t&&t!==`/`?t:void 0,e.query=n,e.resourceName=void 0}return e.fragment=void 0,e}function d(e,t){if(!e.path)return e.error=`URN can not be parsed`,e;let n=e.path.match(r);if(n){let r=t.scheme||e.scheme||`urn`;e.nid=n[1].toLowerCase(),e.nss=n[2];let i=y(`${r}:${t.nid||e.nid}`);e.path=void 0,i&&(e=i.parse(e,t))}else e.error=e.error||`URN can not be parsed.`;return e}function f(e,t){if(e.nid===void 0)throw Error(`URN without nid cannot be serialized`);let n=t.scheme||e.scheme||`urn`,r=e.nid.toLowerCase(),i=y(`${n}:${t.nid||r}`);i&&(e=i.serialize(e,t));let a=e,o=e.nss;return a.path=`${r||t.nid}:${o}`,t.skipEscape=!0,a}function p(e,t){let r=e;return r.uuid=r.nss,r.nss=void 0,!t.tolerant&&(!r.uuid||!n(r.uuid))&&(r.error=r.error||`UUID is not valid.`),r}function m(e){let t=e;return t.nss=(e.uuid||``).toLowerCase(),t}var h={scheme:`http`,domainHost:!0,parse:s,serialize:c},g={scheme:`https`,domainHost:h.domainHost,parse:s,serialize:c},_={scheme:`ws`,domainHost:!0,parse:l,serialize:u},v={http:h,https:g,ws:_,wss:{scheme:`wss`,domainHost:_.domainHost,parse:_.parse,serialize:_.serialize},urn:{scheme:`urn`,parse:d,serialize:f,skipNormalize:!0},"urn:uuid":{scheme:`urn:uuid`,parse:p,serialize:m,skipNormalize:!0}};Object.setPrototypeOf(v,null);function y(e){return e&&(v[e]||v[e.toLowerCase()])||void 0}t.exports={wsIsSecure:o,SCHEMES:v,isValidSchemeName:a,getSchemeHandler:y}})),el=i(((e,t)=>{var{normalizeIPv6:n,removeDotSegments:r,recomposeAuthority:i,normalizePercentEncoding:a,normalizePathEncoding:o,escapePreservingEscapes:s,reescapeHostDelimiters:c,isIPv4:l,nonSimpleDomain:u}=Qc(),{SCHEMES:d,getSchemeHandler:f}=$c();function p(e,t){return typeof e==`string`?e=S(e,t):typeof e==`object`&&(e=x(_(e,t),t)),e}function m(e,t,n){let r=n?Object.assign({scheme:`null`},n):{scheme:`null`},i=h(x(e,r),x(t,r),r,!0);return r.skipEscape=!0,_(i,r)}function h(e,t,n,i){let a={};return i||(e=x(_(e,n),n),t=x(_(t,n),n)),n||={},!n.tolerant&&t.scheme?(a.scheme=t.scheme,a.userinfo=t.userinfo,a.host=t.host,a.port=t.port,a.path=r(t.path||``),a.query=t.query):(t.userinfo!==void 0||t.host!==void 0||t.port!==void 0?(a.userinfo=t.userinfo,a.host=t.host,a.port=t.port,a.path=r(t.path||``),a.query=t.query):(t.path?(t.path[0]===`/`?a.path=r(t.path):((e.userinfo!==void 0||e.host!==void 0||e.port!==void 0)&&!e.path?a.path=`/`+t.path:e.path?a.path=e.path.slice(0,e.path.lastIndexOf(`/`)+1)+t.path:a.path=t.path,a.path=r(a.path)),a.query=t.query):(a.path=e.path,t.query===void 0?a.query=e.query:a.query=t.query),a.userinfo=e.userinfo,a.host=e.host,a.port=e.port),a.scheme=e.scheme),a.fragment=t.fragment,a}function g(e,t,n){let r=w(e,n),i=w(t,n);return r!==void 0&&i!==void 0&&r.toLowerCase()===i.toLowerCase()}function _(e,t){let n={host:e.host,scheme:e.scheme,userinfo:e.userinfo,port:e.port,path:e.path,query:e.query,nid:e.nid,nss:e.nss,uuid:e.uuid,fragment:e.fragment,reference:e.reference,resourceName:e.resourceName,secure:e.secure,error:``},o=Object.assign({},t),c=[],l=f(o.scheme||n.scheme);l&&l.serialize&&l.serialize(n,o),n.path!==void 0&&(o.skipEscape?n.path=a(n.path):(n.path=s(n.path),n.scheme!==void 0&&(n.path=n.path.split(`%3A`).join(`:`)))),o.reference!==`suffix`&&n.scheme&&c.push(n.scheme,`:`);let u=i(n);if(u!==void 0&&(o.reference!==`suffix`&&c.push(`//`),c.push(u),n.path&&n.path[0]!==`/`&&c.push(`/`)),n.path!==void 0){let e=n.path;!o.absolutePath&&(!l||!l.absolutePath)&&(e=r(e)),u===void 0&&e[0]===`/`&&e[1]===`/`&&(e=`/%2F`+e.slice(2)),c.push(e)}return n.query!==void 0&&c.push(`?`,n.query),n.fragment!==void 0&&c.push(`#`,n.fragment),c.join(``)}var v=/^(?:([^#/:?]+):)?(?:\/\/((?:([^#/?@]*)@)?(\[[^#/?\]]+\]|[^#/:?]*)(?::(\d*))?))?([^#?]*)(?:\?([^#]*))?(?:#((?:.|[\n\r])*))?/u;function y(e,t){if(t[2]!==void 0&&e.path&&e.path[0]!==`/`)return`URI path must start with "/" when authority is present.`;if(typeof e.port==`number`&&(e.port<0||e.port>65535))return`URI port is malformed.`}function b(e,t){let r=Object.assign({},t),i={scheme:void 0,userinfo:void 0,host:``,port:void 0,path:``,query:void 0,fragment:void 0},a=!1,s=!1;r.reference===`suffix`&&(e=r.scheme?r.scheme+`:`+e:`//`+e);let d=e.match(v);if(d){i.scheme=d[1],i.userinfo=d[3],i.host=d[4],i.port=parseInt(d[5],10),i.path=d[6]||``,i.query=d[7],i.fragment=d[8],isNaN(i.port)&&(i.port=d[5]);let t=y(i,d);if(t!==void 0&&(i.error=i.error||t,a=!0),i.host)if(l(i.host)===!1){let e=n(i.host);i.host=e.host.toLowerCase(),s=e.isIPV6}else s=!0;i.scheme===void 0&&i.userinfo===void 0&&i.host===void 0&&i.port===void 0&&i.query===void 0&&!i.path?i.reference=`same-document`:i.scheme===void 0?i.reference=`relative`:i.fragment===void 0?i.reference=`absolute`:i.reference=`uri`,r.reference&&r.reference!==`suffix`&&r.reference!==i.reference&&(i.error=i.error||`URI is not a `+r.reference+` reference.`);let p=f(r.scheme||i.scheme);if(!r.unicodeSupport&&(!p||!p.unicodeSupport)&&i.host&&(r.domainHost||p&&p.domainHost)&&s===!1&&u(i.host))try{i.host=URL.domainToASCII(i.host.toLowerCase())}catch(e){i.error=i.error||`Host's domain name can not be converted to ASCII: `+e}if((!p||p&&!p.skipNormalize)&&(e.indexOf(`%`)!==-1&&(i.scheme!==void 0&&(i.scheme=unescape(i.scheme)),i.host!==void 0&&(i.host=c(unescape(i.host),s))),i.path&&=o(i.path),i.fragment))try{i.fragment=encodeURI(decodeURIComponent(i.fragment))}catch{i.error=i.error||`URI malformed`}p&&p.parse&&p.parse(i,r)}else i.error=i.error||`URI can not be parsed.`;return{parsed:i,malformedAuthorityOrPort:a}}function x(e,t){return b(e,t).parsed}function S(e,t){return C(e,t).normalized}function C(e,t){let{parsed:n,malformedAuthorityOrPort:r}=b(e,t);return{normalized:r?e:_(n,t),malformedAuthorityOrPort:r}}function w(e,t){if(typeof e==`string`){let{normalized:n,malformedAuthorityOrPort:r}=C(e,t);return r?void 0:n}if(typeof e==`object`)return _(e,t)}var T={SCHEMES:d,normalize:p,resolve:m,resolveComponent:h,equal:g,serialize:_,parse:x};t.exports=T,t.exports.default=T,t.exports.fastUri=T})),tl=i((e=>{Object.defineProperty(e,`__esModule`,{value:!0});var t=el();t.code=`require("ajv/dist/runtime/uri").default`,e.default=t})),nl=i((e=>{Object.defineProperty(e,`__esModule`,{value:!0}),e.CodeGen=e.Name=e.nil=e.stringify=e.str=e._=e.KeywordCxt=void 0;var n=Bc();Object.defineProperty(e,`KeywordCxt`,{enumerable:!0,get:function(){return n.KeywordCxt}});var r=Y();Object.defineProperty(e,`_`,{enumerable:!0,get:function(){return r._}}),Object.defineProperty(e,`str`,{enumerable:!0,get:function(){return r.str}}),Object.defineProperty(e,`stringify`,{enumerable:!0,get:function(){return r.stringify}}),Object.defineProperty(e,`nil`,{enumerable:!0,get:function(){return r.nil}}),Object.defineProperty(e,`Name`,{enumerable:!0,get:function(){return r.Name}}),Object.defineProperty(e,`CodeGen`,{enumerable:!0,get:function(){return r.CodeGen}});var i=Vc(),a=Hc(),o=jc(),s=Uc(),c=Y(),l=zc(),u=Nc(),d=X(),f=(Zc(),t(Wc).default),p=tl(),m=(e,t)=>new RegExp(e,t);m.code=`new RegExp`;var h=[`removeAdditional`,`useDefaults`,`coerceTypes`],g=new Set([`validate`,`serialize`,`parse`,`wrapper`,`root`,`schema`,`keyword`,`pattern`,`formats`,`validate$data`,`func`,`obj`,`Error`]),_={errorDataPath:``,format:"`validateFormats: false` can be used instead.",nullable:`"nullable" keyword is supported by default.`,jsonPointers:`Deprecated jsPropertySyntax can be used instead.`,extendRefs:`Deprecated ignoreKeywordsWithRef can be used instead.`,missingRefs:`Pass empty schema with $id that should be ignored to ajv.addSchema.`,processCode:"Use option `code: {process: (code, schemaEnv: object) => string}`",sourceCode:"Use option `code: {source: true}`",strictDefaults:"It is default now, see option `strict`.",strictKeywords:"It is default now, see option `strict`.",uniqueItems:`"uniqueItems" keyword is always validated.`,unknownFormats:"Disable strict mode or pass `true` to `ajv.addFormat` (or `formats` option).",cache:`Map is used as cache, schema object as key.`,serialize:`Map is used as cache, schema object as key.`,ajvErrors:`It is default now.`},v={ignoreKeywordsWithRef:``,jsPropertySyntax:``,unicode:`"minLength"/"maxLength" account for unicode characters by default.`},y=200;function b(e){let t=e.strict,n=e.code?.optimize,r=n===!0||n===void 0?1:n||0,i=e.code?.regExp??m,a=e.uriResolver??p.default;return{strictSchema:e.strictSchema??t??!0,strictNumbers:e.strictNumbers??t??!0,strictTypes:e.strictTypes??t??`log`,strictTuples:e.strictTuples??t??`log`,strictRequired:e.strictRequired??t??!1,code:e.code?{...e.code,optimize:r,regExp:i}:{optimize:r,regExp:i},loopRequired:e.loopRequired??y,loopEnum:e.loopEnum??y,meta:e.meta??!0,messages:e.messages??!0,inlineRefs:e.inlineRefs??!0,schemaId:e.schemaId??`$id`,addUsedSchema:e.addUsedSchema??!0,validateSchema:e.validateSchema??!0,validateFormats:e.validateFormats??!0,unicodeRegExp:e.unicodeRegExp??!0,int32range:e.int32range??!0,uriResolver:a}}var x=class{constructor(e={}){this.schemas={},this.refs={},this.formats=Object.create(null),this._compilations=new Set,this._loading={},this._cache=new Map,e=this.opts={...e,...b(e)};let{es5:t,lines:n}=this.opts.code;this.scope=new c.ValueScope({scope:{},prefixes:g,es5:t,lines:n}),this.logger=k(e.logger);let r=e.validateFormats;e.validateFormats=!1,this.RULES=(0,o.getRules)(),S.call(this,_,e,`NOT SUPPORTED`),S.call(this,v,e,`DEPRECATED`,`warn`),this._metaOpts=D.call(this),e.formats&&T.call(this),this._addVocabularies(),this._addDefaultMetaSchema(),e.keywords&&E.call(this,e.keywords),typeof e.meta==`object`&&this.addMetaSchema(e.meta),w.call(this),e.validateFormats=r}_addVocabularies(){this.addKeyword(`$async`)}_addDefaultMetaSchema(){let{$data:e,meta:t,schemaId:n}=this.opts,r=f;n===`id`&&(r={...f},r.id=r.$id,delete r.$id),t&&e&&this.addMetaSchema(r,r[n],!1)}defaultMeta(){let{meta:e,schemaId:t}=this.opts;return this.opts.defaultMeta=typeof e==`object`?e[t]||e:void 0}validate(e,t){let n;if(typeof e==`string`){if(n=this.getSchema(e),!n)throw Error(`no schema with key or ref "${e}"`)}else n=this.compile(e);let r=n(t);return`$async`in n||(this.errors=n.errors),r}compile(e,t){let n=this._addSchema(e,t);return n.validate||this._compileSchemaEnv(n)}compileAsync(e,t){if(typeof this.opts.loadSchema!=`function`)throw Error(`options.loadSchema should be a function`);let{loadSchema:n}=this.opts;return r.call(this,e,t);async function r(e,t){await i.call(this,e.$schema);let n=this._addSchema(e,t);return n.validate||o.call(this,n)}async function i(e){e&&!this.getSchema(e)&&await r.call(this,{$ref:e},!0)}async function o(e){try{return this._compileSchemaEnv(e)}catch(t){if(!(t instanceof a.default))throw t;return s.call(this,t),await c.call(this,t.missingSchema),o.call(this,e)}}function s({missingSchema:e,missingRef:t}){if(this.refs[e])throw Error(`AnySchema ${e} is loaded but ${t} cannot be resolved`)}async function c(e){let n=await l.call(this,e);this.refs[e]||await i.call(this,n.$schema),this.refs[e]||this.addSchema(n,e,t)}async function l(e){let t=this._loading[e];if(t)return t;try{return await(this._loading[e]=n(e))}finally{delete this._loading[e]}}}addSchema(e,t,n,r=this.opts.validateSchema){if(Array.isArray(e)){for(let t of e)this.addSchema(t,void 0,n,r);return this}let i;if(typeof e==`object`){let{schemaId:t}=this.opts;if(i=e[t],i!==void 0&&typeof i!=`string`)throw Error(`schema ${t} must be string`)}return t=(0,l.normalizeId)(t||i),this._checkUnique(t),this.schemas[t]=this._addSchema(e,n,t,r,!0),this}addMetaSchema(e,t,n=this.opts.validateSchema){return this.addSchema(e,t,!0,n),this}validateSchema(e,t){if(typeof e==`boolean`)return!0;let n;if(n=e.$schema,n!==void 0&&typeof n!=`string`)throw Error(`$schema must be a string`);if(n=n||this.opts.defaultMeta||this.defaultMeta(),!n)return this.logger.warn(`meta-schema not available`),this.errors=null,!0;let r=this.validate(n,e);if(!r&&t){let e=`schema is invalid: `+this.errorsText();if(this.opts.validateSchema===`log`)this.logger.error(e);else throw Error(e)}return r}getSchema(e){let t;for(;typeof(t=C.call(this,e))==`string`;)e=t;if(t===void 0){let{schemaId:n}=this.opts,r=new s.SchemaEnv({schema:{},schemaId:n});if(t=s.resolveSchema.call(this,r,e),!t)return;this.refs[e]=t}return t.validate||this._compileSchemaEnv(t)}removeSchema(e){if(e instanceof RegExp)return this._removeAllSchemas(this.schemas,e),this._removeAllSchemas(this.refs,e),this;switch(typeof e){case`undefined`:return this._removeAllSchemas(this.schemas),this._removeAllSchemas(this.refs),this._cache.clear(),this;case`string`:{let t=C.call(this,e);return typeof t==`object`&&this._cache.delete(t.schema),delete this.schemas[e],delete this.refs[e],this}case`object`:{let t=e;this._cache.delete(t);let n=e[this.opts.schemaId];return n&&(n=(0,l.normalizeId)(n),delete this.schemas[n],delete this.refs[n]),this}default:throw Error(`ajv.removeSchema: invalid parameter`)}}addVocabulary(e){for(let t of e)this.addKeyword(t);return this}addKeyword(e,t){let n;if(typeof e==`string`)n=e,typeof t==`object`&&(this.logger.warn(`these parameters are deprecated, see docs for addKeyword`),t.keyword=n);else if(typeof e==`object`&&t===void 0){if(t=e,n=t.keyword,Array.isArray(n)&&!n.length)throw Error(`addKeywords: keyword must be string or non-empty array`)}else throw Error(`invalid addKeywords parameters`);if(j.call(this,n,t),!t)return(0,d.eachItem)(n,e=>M.call(this,e)),this;P.call(this,t);let r={...t,type:(0,u.getJSONTypes)(t.type),schemaType:(0,u.getJSONTypes)(t.schemaType)};return(0,d.eachItem)(n,r.type.length===0?e=>M.call(this,e,r):e=>r.type.forEach(t=>M.call(this,e,r,t))),this}getKeyword(e){let t=this.RULES.all[e];return typeof t==`object`?t.definition:!!t}removeKeyword(e){let{RULES:t}=this;delete t.keywords[e],delete t.all[e];for(let n of t.rules){let t=n.rules.findIndex(t=>t.keyword===e);t>=0&&n.rules.splice(t,1)}return this}addFormat(e,t){return typeof t==`string`&&(t=new RegExp(t)),this.formats[e]=t,this}errorsText(e=this.errors,{separator:t=`, `,dataVar:n=`data`}={}){return!e||e.length===0?`No errors`:e.map(e=>`${n}${e.instancePath} ${e.message}`).reduce((e,n)=>e+t+n)}$dataMetaSchema(e,t){let n=this.RULES.all;e=JSON.parse(JSON.stringify(e));for(let r of t){let t=r.split(`/`).slice(1),i=e;for(let e of t)i=i[e];for(let e in n){let t=n[e];if(typeof t!=`object`)continue;let{$data:r}=t.definition,a=i[e];r&&a&&(i[e]=I(a))}}return e}_removeAllSchemas(e,t){for(let n in e){let r=e[n];(!t||t.test(n))&&(typeof r==`string`?delete e[n]:r&&!r.meta&&(this._cache.delete(r.schema),delete e[n]))}}_addSchema(e,t,n,r=this.opts.validateSchema,i=this.opts.addUsedSchema){let a,{schemaId:o}=this.opts;if(typeof e==`object`)a=e[o];else if(this.opts.jtd)throw Error(`schema must be object`);else if(typeof e!=`boolean`)throw Error(`schema must be object or boolean`);let c=this._cache.get(e);if(c!==void 0)return c;n=(0,l.normalizeId)(a||n);let u=l.getSchemaRefs.call(this,e,n);return c=new s.SchemaEnv({schema:e,schemaId:o,meta:t,baseId:n,localRefs:u}),this._cache.set(c.schema,c),i&&!n.startsWith(`#`)&&(n&&this._checkUnique(n),this.refs[n]=c),r&&this.validateSchema(e,!0),c}_checkUnique(e){if(this.schemas[e]||this.refs[e])throw Error(`schema with key or id "${e}" already exists`)}_compileSchemaEnv(e){if(e.meta?this._compileMetaSchema(e):s.compileSchema.call(this,e),!e.validate)throw Error(`ajv implementation error`);return e.validate}_compileMetaSchema(e){let t=this.opts;this.opts=this._metaOpts;try{s.compileSchema.call(this,e)}finally{this.opts=t}}};x.ValidationError=i.default,x.MissingRefError=a.default,e.default=x;function S(e,t,n,r=`error`){for(let i in e){let a=i;a in t&&this.logger[r](`${n}: option ${i}. ${e[a]}`)}}function C(e){return e=(0,l.normalizeId)(e),this.schemas[e]||this.refs[e]}function w(){let e=this.opts.schemas;if(e)if(Array.isArray(e))this.addSchema(e);else for(let t in e)this.addSchema(e[t],t)}function T(){for(let e in this.opts.formats){let t=this.opts.formats[e];t&&this.addFormat(e,t)}}function E(e){if(Array.isArray(e)){this.addVocabulary(e);return}this.logger.warn(`keywords option as map is deprecated, pass array`);for(let t in e){let n=e[t];n.keyword||=t,this.addKeyword(n)}}function D(){let e={...this.opts};for(let t of h)delete e[t];return e}var O={log(){},warn(){},error(){}};function k(e){if(e===!1)return O;if(e===void 0)return console;if(e.log&&e.warn&&e.error)return e;throw Error(`logger must implement log, warn and error methods`)}var A=/^[a-z_$][a-z0-9_$:-]*$/i;function j(e,t){let{RULES:n}=this;if((0,d.eachItem)(e,e=>{if(n.keywords[e])throw Error(`Keyword ${e} is already defined`);if(!A.test(e))throw Error(`Keyword ${e} has invalid name`)}),t&&t.$data&&!(`code`in t||`validate`in t))throw Error(`$data keyword must have "code" or "validate" function`)}function M(e,t,n){var r;let i=t?.post;if(n&&i)throw Error(`keyword with "post" flag cannot have "type"`);let{RULES:a}=this,o=i?a.post:a.rules.find(({type:e})=>e===n);if(o||(o={type:n,rules:[]},a.rules.push(o)),a.keywords[e]=!0,!t)return;let s={keyword:e,definition:{...t,type:(0,u.getJSONTypes)(t.type),schemaType:(0,u.getJSONTypes)(t.schemaType)}};t.before?N.call(this,o,s,t.before):o.rules.push(s),a.all[e]=s,(r=t.implements)==null||r.forEach(e=>this.addKeyword(e))}function N(e,t,n){let r=e.rules.findIndex(e=>e.keyword===n);r>=0?e.rules.splice(r,0,t):(e.rules.push(t),this.logger.warn(`rule ${n} is not defined`))}function P(e){let{metaSchema:t}=e;t!==void 0&&(e.$data&&this.opts.$data&&(t=I(t)),e.validateSchema=this.compile(t,!0))}var F={$ref:`https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#`};function I(e){return{anyOf:[e,F]}}})),rl=i((e=>{Object.defineProperty(e,`__esModule`,{value:!0}),e.default={keyword:`id`,code(){throw Error(`NOT SUPPORTED: keyword "id", use "$id" for schema ID`)}}})),il=i((e=>{Object.defineProperty(e,`__esModule`,{value:!0}),e.callRef=e.getValidate=void 0;var t=Hc(),n=Q(),r=Y(),i=Z(),a=Uc(),o=X(),s={keyword:`$ref`,schemaType:`string`,code(e){let{gen:n,schema:i,it:o}=e,{baseId:s,schemaEnv:u,validateName:d,opts:f,self:p}=o,{root:m}=u;if((i===`#`||i===`#/`)&&s===m.baseId)return g();let h=a.resolveRef.call(p,m,s,i);if(h===void 0)throw new t.default(o.opts.uriResolver,s,i);if(h instanceof a.SchemaEnv)return _(h);return v(h);function g(){if(u===m)return l(e,d,u,u.$async);let t=n.scopeValue(`root`,{ref:m});return l(e,(0,r._)`${t}.validate`,m,m.$async)}function _(t){l(e,c(e,t),t,t.$async)}function v(t){let a=n.scopeValue(`schema`,f.code.source===!0?{ref:t,code:(0,r.stringify)(t)}:{ref:t}),o=n.name(`valid`),s=e.subschema({schema:t,dataTypes:[],schemaPath:r.nil,topSchemaRef:a,errSchemaPath:i},o);e.mergeEvaluated(s),e.ok(o)}}};function c(e,t){let{gen:n}=e;return t.validate?n.scopeValue(`validate`,{ref:t.validate}):(0,r._)`${n.scopeValue(`wrapper`,{ref:t})}.validate`}e.getValidate=c;function l(e,t,a,s){let{gen:c,it:l}=e,{allErrors:u,schemaEnv:d,opts:f}=l,p=f.passContext?i.default.this:r.nil;s?m():h();function m(){if(!d.$async)throw Error(`async schema referenced by sync schema`);let i=c.let(`valid`);c.try(()=>{c.code((0,r._)`await ${(0,n.callValidateCode)(e,t,p)}`),_(t),u||c.assign(i,!0)},e=>{c.if((0,r._)`!(${e} instanceof ${l.ValidationError})`,()=>c.throw(e)),g(e),u||c.assign(i,!1)}),e.ok(i)}function h(){e.result((0,n.callValidateCode)(e,t,p),()=>_(t),()=>g(t))}function g(e){let t=(0,r._)`${e}.errors`;c.assign(i.default.vErrors,(0,r._)`${i.default.vErrors} === null ? ${t} : ${i.default.vErrors}.concat(${t})`),c.assign(i.default.errors,(0,r._)`${i.default.vErrors}.length`)}function _(e){if(!l.opts.unevaluated)return;let t=a?.validate?.evaluated;if(l.props!==!0)if(t&&!t.dynamicProps)t.props!==void 0&&(l.props=o.mergeEvaluated.props(c,t.props,l.props));else{let t=c.var(`props`,(0,r._)`${e}.evaluated.props`);l.props=o.mergeEvaluated.props(c,t,l.props,r.Name)}if(l.items!==!0)if(t&&!t.dynamicItems)t.items!==void 0&&(l.items=o.mergeEvaluated.items(c,t.items,l.items));else{let t=c.var(`items`,(0,r._)`${e}.evaluated.items`);l.items=o.mergeEvaluated.items(c,t,l.items,r.Name)}}}e.callRef=l,e.default=s})),al=i((e=>{Object.defineProperty(e,`__esModule`,{value:!0});var t=rl(),n=il();e.default=[`$schema`,`$id`,`$defs`,`$vocabulary`,{keyword:`$comment`},`definitions`,t.default,n.default]})),ol=i((e=>{Object.defineProperty(e,`__esModule`,{value:!0});var t=Y(),n=t.operators,r={maximum:{okStr:`<=`,ok:n.LTE,fail:n.GT},minimum:{okStr:`>=`,ok:n.GTE,fail:n.LT},exclusiveMaximum:{okStr:`<`,ok:n.LT,fail:n.GTE},exclusiveMinimum:{okStr:`>`,ok:n.GT,fail:n.LTE}};e.default={keyword:Object.keys(r),type:`number`,schemaType:`number`,$data:!0,error:{message:({keyword:e,schemaCode:n})=>(0,t.str)`must be ${r[e].okStr} ${n}`,params:({keyword:e,schemaCode:n})=>(0,t._)`{comparison: ${r[e].okStr}, limit: ${n}}`},code(e){let{keyword:n,data:i,schemaCode:a}=e;e.fail$data((0,t._)`${i} ${r[n].fail} ${a} || isNaN(${i})`)}}})),sl=i((e=>{Object.defineProperty(e,`__esModule`,{value:!0});var t=Y();e.default={keyword:`multipleOf`,type:`number`,schemaType:`number`,$data:!0,error:{message:({schemaCode:e})=>(0,t.str)`must be multiple of ${e}`,params:({schemaCode:e})=>(0,t._)`{multipleOf: ${e}}`},code(e){let{gen:n,data:r,schemaCode:i,it:a}=e,o=a.opts.multipleOfPrecision,s=n.let(`res`),c=o?(0,t._)`Math.abs(Math.round(${s}) - ${s}) > 1e-${o}`:(0,t._)`${s} !== parseInt(${s})`;e.fail$data((0,t._)`(${i} === 0 || (${s} = ${r}/${i}, ${c}))`)}}})),cl=i((e=>{Object.defineProperty(e,`__esModule`,{value:!0});function t(e){let t=e.length,n=0,r=0,i;for(;r<t;)n++,i=e.charCodeAt(r++),i>=55296&&i<=56319&&r<t&&(i=e.charCodeAt(r),(i&64512)==56320&&r++);return n}e.default=t,t.code=`require("ajv/dist/runtime/ucs2length").default`})),ll=i((e=>{Object.defineProperty(e,`__esModule`,{value:!0});var t=Y(),n=X(),r=cl();e.default={keyword:[`maxLength`,`minLength`],type:`string`,schemaType:`number`,$data:!0,error:{message({keyword:e,schemaCode:n}){let r=e===`maxLength`?`more`:`fewer`;return(0,t.str)`must NOT have ${r} than ${n} characters`},params:({schemaCode:e})=>(0,t._)`{limit: ${e}}`},code(e){let{keyword:i,data:a,schemaCode:o,it:s}=e,c=i===`maxLength`?t.operators.GT:t.operators.LT,l=s.opts.unicode===!1?(0,t._)`${a}.length`:(0,t._)`${(0,n.useFunc)(e.gen,r.default)}(${a})`;e.fail$data((0,t._)`${l} ${c} ${o}`)}}})),ul=i((e=>{Object.defineProperty(e,`__esModule`,{value:!0});var t=Q(),n=X(),r=Y();e.default={keyword:`pattern`,type:`string`,schemaType:`string`,$data:!0,error:{message:({schemaCode:e})=>(0,r.str)`must match pattern "${e}"`,params:({schemaCode:e})=>(0,r._)`{pattern: ${e}}`},code(e){let{gen:i,data:a,$data:o,schema:s,schemaCode:c,it:l}=e,u=l.opts.unicodeRegExp?`u`:``;if(o){let{regExp:t}=l.opts.code,o=t.code===`new RegExp`?(0,r._)`new RegExp`:(0,n.useFunc)(i,t),s=i.let(`valid`);i.try(()=>i.assign(s,(0,r._)`${o}(${c}, ${u}).test(${a})`),()=>i.assign(s,!1)),e.fail$data((0,r._)`!${s}`)}else{let n=(0,t.usePattern)(e,s);e.fail$data((0,r._)`!${n}.test(${a})`)}}}})),dl=i((e=>{Object.defineProperty(e,`__esModule`,{value:!0});var t=Y();e.default={keyword:[`maxProperties`,`minProperties`],type:`object`,schemaType:`number`,$data:!0,error:{message({keyword:e,schemaCode:n}){let r=e===`maxProperties`?`more`:`fewer`;return(0,t.str)`must NOT have ${r} than ${n} properties`},params:({schemaCode:e})=>(0,t._)`{limit: ${e}}`},code(e){let{keyword:n,data:r,schemaCode:i}=e,a=n===`maxProperties`?t.operators.GT:t.operators.LT;e.fail$data((0,t._)`Object.keys(${r}).length ${a} ${i}`)}}})),fl=i((e=>{Object.defineProperty(e,`__esModule`,{value:!0});var t=Q(),n=Y(),r=X();e.default={keyword:`required`,type:`object`,schemaType:`array`,$data:!0,error:{message:({params:{missingProperty:e}})=>(0,n.str)`must have required property '${e}'`,params:({params:{missingProperty:e}})=>(0,n._)`{missingProperty: ${e}}`},code(e){let{gen:i,schema:a,schemaCode:o,data:s,$data:c,it:l}=e,{opts:u}=l;if(!c&&a.length===0)return;let d=a.length>=u.loopRequired;if(l.allErrors?f():p(),u.strictRequired){let t=e.parentSchema.properties,{definedProperties:n}=e.it;for(let e of a)if(t?.[e]===void 0&&!n.has(e)){let t=`required property "${e}" is not defined at "${l.schemaEnv.baseId+l.errSchemaPath}" (strictRequired)`;(0,r.checkStrictMode)(l,t,l.opts.strictRequired)}}function f(){if(d||c)e.block$data(n.nil,m);else for(let n of a)(0,t.checkReportMissingProp)(e,n)}function p(){let n=i.let(`missing`);if(d||c){let t=i.let(`valid`,!0);e.block$data(t,()=>h(n,t)),e.ok(t)}else i.if((0,t.checkMissingProp)(e,a,n)),(0,t.reportMissingProp)(e,n),i.else()}function m(){i.forOf(`prop`,o,n=>{e.setParams({missingProperty:n}),i.if((0,t.noPropertyInData)(i,s,n,u.ownProperties),()=>e.error())})}function h(r,a){e.setParams({missingProperty:r}),i.forOf(r,o,()=>{i.assign(a,(0,t.propertyInData)(i,s,r,u.ownProperties)),i.if((0,n.not)(a),()=>{e.error(),i.break()})},n.nil)}}}})),pl=i((e=>{Object.defineProperty(e,`__esModule`,{value:!0});var t=Y();e.default={keyword:[`maxItems`,`minItems`],type:`array`,schemaType:`number`,$data:!0,error:{message({keyword:e,schemaCode:n}){let r=e===`maxItems`?`more`:`fewer`;return(0,t.str)`must NOT have ${r} than ${n} items`},params:({schemaCode:e})=>(0,t._)`{limit: ${e}}`},code(e){let{keyword:n,data:r,schemaCode:i}=e,a=n===`maxItems`?t.operators.GT:t.operators.LT;e.fail$data((0,t._)`${r}.length ${a} ${i}`)}}})),ml=i((e=>{Object.defineProperty(e,`__esModule`,{value:!0});var t=Lc();t.code=`require("ajv/dist/runtime/equal").default`,e.default=t})),hl=i((e=>{Object.defineProperty(e,`__esModule`,{value:!0});var t=Nc(),n=Y(),r=X(),i=ml();e.default={keyword:`uniqueItems`,type:`array`,schemaType:`boolean`,$data:!0,error:{message:({params:{i:e,j:t}})=>(0,n.str)`must NOT have duplicate items (items ## ${t} and ${e} are identical)`,params:({params:{i:e,j:t}})=>(0,n._)`{i: ${e}, j: ${t}}`},code(e){let{gen:a,data:o,$data:s,schema:c,parentSchema:l,schemaCode:u,it:d}=e;if(!s&&!c)return;let f=a.let(`valid`),p=l.items?(0,t.getSchemaTypes)(l.items):[];e.block$data(f,m,(0,n._)`${u} === false`),e.ok(f);function m(){let t=a.let(`i`,(0,n._)`${o}.length`),r=a.let(`j`);e.setParams({i:t,j:r}),a.assign(f,!0),a.if((0,n._)`${t} > 1`,()=>(h()?g:_)(t,r))}function h(){return p.length>0&&!p.some(e=>e===`object`||e===`array`)}function g(r,i){let s=a.name(`item`),c=(0,t.checkDataTypes)(p,s,d.opts.strictNumbers,t.DataType.Wrong),l=a.const(`indices`,(0,n._)`{}`);a.for((0,n._)`;${r}--;`,()=>{a.let(s,(0,n._)`${o}[${r}]`),a.if(c,(0,n._)`continue`),p.length>1&&a.if((0,n._)`typeof ${s} == "string"`,(0,n._)`${s} += "_"`),a.if((0,n._)`typeof ${l}[${s}] == "number"`,()=>{a.assign(i,(0,n._)`${l}[${s}]`),e.error(),a.assign(f,!1).break()}).code((0,n._)`${l}[${s}] = ${r}`)})}function _(t,s){let c=(0,r.useFunc)(a,i.default),l=a.name(`outer`);a.label(l).for((0,n._)`;${t}--;`,()=>a.for((0,n._)`${s} = ${t}; ${s}--;`,()=>a.if((0,n._)`${c}(${o}[${t}], ${o}[${s}])`,()=>{e.error(),a.assign(f,!1).break(l)})))}}}})),gl=i((e=>{Object.defineProperty(e,`__esModule`,{value:!0});var t=Y(),n=X(),r=ml();e.default={keyword:`const`,$data:!0,error:{message:`must be equal to constant`,params:({schemaCode:e})=>(0,t._)`{allowedValue: ${e}}`},code(e){let{gen:i,data:a,$data:o,schemaCode:s,schema:c}=e;o||c&&typeof c==`object`?e.fail$data((0,t._)`!${(0,n.useFunc)(i,r.default)}(${a}, ${s})`):e.fail((0,t._)`${c} !== ${a}`)}}})),_l=i((e=>{Object.defineProperty(e,`__esModule`,{value:!0});var t=Y(),n=X(),r=ml();e.default={keyword:`enum`,schemaType:`array`,$data:!0,error:{message:`must be equal to one of the allowed values`,params:({schemaCode:e})=>(0,t._)`{allowedValues: ${e}}`},code(e){let{gen:i,data:a,$data:o,schema:s,schemaCode:c,it:l}=e;if(!o&&s.length===0)throw Error(`enum must have non-empty array`);let u=s.length>=l.opts.loopEnum,d,f=()=>d??=(0,n.useFunc)(i,r.default),p;if(u||o)p=i.let(`valid`),e.block$data(p,m);else{if(!Array.isArray(s))throw Error(`ajv implementation error`);let e=i.const(`vSchema`,c);p=(0,t.or)(...s.map((t,n)=>h(e,n)))}e.pass(p);function m(){i.assign(p,!1),i.forOf(`v`,c,e=>i.if((0,t._)`${f()}(${a}, ${e})`,()=>i.assign(p,!0).break()))}function h(e,n){let r=s[n];return typeof r==`object`&&r?(0,t._)`${f()}(${a}, ${e}[${n}])`:(0,t._)`${a} === ${r}`}}}})),vl=i((e=>{Object.defineProperty(e,`__esModule`,{value:!0});var t=ol(),n=sl(),r=ll(),i=ul(),a=dl(),o=fl(),s=pl(),c=hl(),l=gl(),u=_l();e.default=[t.default,n.default,r.default,i.default,a.default,o.default,s.default,c.default,{keyword:`type`,schemaType:[`string`,`array`]},{keyword:`nullable`,schemaType:`boolean`},l.default,u.default]})),yl=i((e=>{Object.defineProperty(e,`__esModule`,{value:!0}),e.validateAdditionalItems=void 0;var t=Y(),n=X(),r={keyword:`additionalItems`,type:`array`,schemaType:[`boolean`,`object`],before:`uniqueItems`,error:{message:({params:{len:e}})=>(0,t.str)`must NOT have more than ${e} items`,params:({params:{len:e}})=>(0,t._)`{limit: ${e}}`},code(e){let{parentSchema:t,it:r}=e,{items:a}=t;if(!Array.isArray(a)){(0,n.checkStrictMode)(r,`"additionalItems" is ignored when "items" is not an array of schemas`);return}i(e,a)}};function i(e,r){let{gen:i,schema:a,data:o,keyword:s,it:c}=e;c.items=!0;let l=i.const(`len`,(0,t._)`${o}.length`);if(a===!1)e.setParams({len:r.length}),e.pass((0,t._)`${l} <= ${r.length}`);else if(typeof a==`object`&&!(0,n.alwaysValidSchema)(c,a)){let n=i.var(`valid`,(0,t._)`${l} <= ${r.length}`);i.if((0,t.not)(n),()=>u(n)),e.ok(n)}function u(a){i.forRange(`i`,r.length,l,r=>{e.subschema({keyword:s,dataProp:r,dataPropType:n.Type.Num},a),c.allErrors||i.if((0,t.not)(a),()=>i.break())})}}e.validateAdditionalItems=i,e.default=r})),bl=i((e=>{Object.defineProperty(e,`__esModule`,{value:!0}),e.validateTuple=void 0;var t=Y(),n=X(),r=Q(),i={keyword:`items`,type:`array`,schemaType:[`object`,`array`,`boolean`],before:`uniqueItems`,code(e){let{schema:t,it:i}=e;if(Array.isArray(t))return a(e,`additionalItems`,t);i.items=!0,!(0,n.alwaysValidSchema)(i,t)&&e.ok((0,r.validateArray)(e))}};function a(e,r,i=e.schema){let{gen:a,parentSchema:o,data:s,keyword:c,it:l}=e;f(o),l.opts.unevaluated&&i.length&&l.items!==!0&&(l.items=n.mergeEvaluated.items(a,i.length,l.items));let u=a.name(`valid`),d=a.const(`len`,(0,t._)`${s}.length`);i.forEach((r,i)=>{(0,n.alwaysValidSchema)(l,r)||(a.if((0,t._)`${d} > ${i}`,()=>e.subschema({keyword:c,schemaProp:i,dataProp:i},u)),e.ok(u))});function f(e){let{opts:t,errSchemaPath:a}=l,o=i.length,s=o===e.minItems&&(o===e.maxItems||e[r]===!1);if(t.strictTuples&&!s){let e=`"${c}" is ${o}-tuple, but minItems or maxItems/${r} are not specified or different at path "${a}"`;(0,n.checkStrictMode)(l,e,t.strictTuples)}}}e.validateTuple=a,e.default=i})),xl=i((e=>{Object.defineProperty(e,`__esModule`,{value:!0});var t=bl();e.default={keyword:`prefixItems`,type:`array`,schemaType:[`array`],before:`uniqueItems`,code:e=>(0,t.validateTuple)(e,`items`)}})),Sl=i((e=>{Object.defineProperty(e,`__esModule`,{value:!0});var t=Y(),n=X(),r=Q(),i=yl();e.default={keyword:`items`,type:`array`,schemaType:[`object`,`boolean`],before:`uniqueItems`,error:{message:({params:{len:e}})=>(0,t.str)`must NOT have more than ${e} items`,params:({params:{len:e}})=>(0,t._)`{limit: ${e}}`},code(e){let{schema:t,parentSchema:a,it:o}=e,{prefixItems:s}=a;o.items=!0,!(0,n.alwaysValidSchema)(o,t)&&(s?(0,i.validateAdditionalItems)(e,s):e.ok((0,r.validateArray)(e)))}}})),Cl=i((e=>{Object.defineProperty(e,`__esModule`,{value:!0});var t=Y(),n=X();e.default={keyword:`contains`,type:`array`,schemaType:[`object`,`boolean`],before:`uniqueItems`,trackErrors:!0,error:{message:({params:{min:e,max:n}})=>n===void 0?(0,t.str)`must contain at least ${e} valid item(s)`:(0,t.str)`must contain at least ${e} and no more than ${n} valid item(s)`,params:({params:{min:e,max:n}})=>n===void 0?(0,t._)`{minContains: ${e}}`:(0,t._)`{minContains: ${e}, maxContains: ${n}}`},code(e){let{gen:r,schema:i,parentSchema:a,data:o,it:s}=e,c,l,{minContains:u,maxContains:d}=a;s.opts.next?(c=u===void 0?1:u,l=d):c=1;let f=r.const(`len`,(0,t._)`${o}.length`);if(e.setParams({min:c,max:l}),l===void 0&&c===0){(0,n.checkStrictMode)(s,`"minContains" == 0 without "maxContains": "contains" keyword ignored`);return}if(l!==void 0&&c>l){(0,n.checkStrictMode)(s,`"minContains" > "maxContains" is always invalid`),e.fail();return}if((0,n.alwaysValidSchema)(s,i)){let n=(0,t._)`${f} >= ${c}`;l!==void 0&&(n=(0,t._)`${n} && ${f} <= ${l}`),e.pass(n);return}s.items=!0;let p=r.name(`valid`);l===void 0&&c===1?h(p,()=>r.if(p,()=>r.break())):c===0?(r.let(p,!0),l!==void 0&&r.if((0,t._)`${o}.length > 0`,m)):(r.let(p,!1),m()),e.result(p,()=>e.reset());function m(){let e=r.name(`_valid`),t=r.let(`count`,0);h(e,()=>r.if(e,()=>g(t)))}function h(t,i){r.forRange(`i`,0,f,r=>{e.subschema({keyword:`contains`,dataProp:r,dataPropType:n.Type.Num,compositeRule:!0},t),i()})}function g(e){r.code((0,t._)`${e}++`),l===void 0?r.if((0,t._)`${e} >= ${c}`,()=>r.assign(p,!0).break()):(r.if((0,t._)`${e} > ${l}`,()=>r.assign(p,!1).break()),c===1?r.assign(p,!0):r.if((0,t._)`${e} >= ${c}`,()=>r.assign(p,!0)))}}}})),wl=i((e=>{Object.defineProperty(e,`__esModule`,{value:!0}),e.validateSchemaDeps=e.validatePropertyDeps=e.error=void 0;var t=Y(),n=X(),r=Q();e.error={message:({params:{property:e,depsCount:n,deps:r}})=>{let i=n===1?`property`:`properties`;return(0,t.str)`must have ${i} ${r} when property ${e} is present`},params:({params:{property:e,depsCount:n,deps:r,missingProperty:i}})=>(0,t._)`{property: ${e},
    missingProperty: ${i},
    depsCount: ${n},
    deps: ${r}}`};var i={keyword:`dependencies`,type:`object`,schemaType:`object`,error:e.error,code(e){let[t,n]=a(e);o(e,t),s(e,n)}};function a({schema:e}){let t={},n={};for(let r in e){if(r===`__proto__`)continue;let i=Array.isArray(e[r])?t:n;i[r]=e[r]}return[t,n]}function o(e,n=e.schema){let{gen:i,data:a,it:o}=e;if(Object.keys(n).length===0)return;let s=i.let(`missing`);for(let c in n){let l=n[c];if(l.length===0)continue;let u=(0,r.propertyInData)(i,a,c,o.opts.ownProperties);e.setParams({property:c,depsCount:l.length,deps:l.join(`, `)}),o.allErrors?i.if(u,()=>{for(let t of l)(0,r.checkReportMissingProp)(e,t)}):(i.if((0,t._)`${u} && (${(0,r.checkMissingProp)(e,l,s)})`),(0,r.reportMissingProp)(e,s),i.else())}}e.validatePropertyDeps=o;function s(e,t=e.schema){let{gen:i,data:a,keyword:o,it:s}=e,c=i.name(`valid`);for(let l in t)(0,n.alwaysValidSchema)(s,t[l])||(i.if((0,r.propertyInData)(i,a,l,s.opts.ownProperties),()=>{let t=e.subschema({keyword:o,schemaProp:l},c);e.mergeValidEvaluated(t,c)},()=>i.var(c,!0)),e.ok(c))}e.validateSchemaDeps=s,e.default=i})),Tl=i((e=>{Object.defineProperty(e,`__esModule`,{value:!0});var t=Y(),n=X();e.default={keyword:`propertyNames`,type:`object`,schemaType:[`object`,`boolean`],error:{message:`property name must be valid`,params:({params:e})=>(0,t._)`{propertyName: ${e.propertyName}}`},code(e){let{gen:r,schema:i,data:a,it:o}=e;if((0,n.alwaysValidSchema)(o,i))return;let s=r.name(`valid`);r.forIn(`key`,a,n=>{e.setParams({propertyName:n}),e.subschema({keyword:`propertyNames`,data:n,dataTypes:[`string`],propertyName:n,compositeRule:!0},s),r.if((0,t.not)(s),()=>{e.error(!0),o.allErrors||r.break()})}),e.ok(s)}}})),El=i((e=>{Object.defineProperty(e,`__esModule`,{value:!0});var t=Q(),n=Y(),r=Z(),i=X();e.default={keyword:`additionalProperties`,type:[`object`],schemaType:[`boolean`,`object`],allowUndefined:!0,trackErrors:!0,error:{message:`must NOT have additional properties`,params:({params:e})=>(0,n._)`{additionalProperty: ${e.additionalProperty}}`},code(e){let{gen:a,schema:o,parentSchema:s,data:c,errsCount:l,it:u}=e;if(!l)throw Error(`ajv implementation error`);let{allErrors:d,opts:f}=u;if(u.props=!0,f.removeAdditional!==`all`&&(0,i.alwaysValidSchema)(u,o))return;let p=(0,t.allSchemaProperties)(s.properties),m=(0,t.allSchemaProperties)(s.patternProperties);h(),e.ok((0,n._)`${l} === ${r.default.errors}`);function h(){a.forIn(`key`,c,e=>{!p.length&&!m.length?v(e):a.if(g(e),()=>v(e))})}function g(r){let o;if(p.length>8){let e=(0,i.schemaRefOrVal)(u,s.properties,`properties`);o=(0,t.isOwnProperty)(a,e,r)}else o=p.length?(0,n.or)(...p.map(e=>(0,n._)`${r} === ${e}`)):n.nil;return m.length&&(o=(0,n.or)(o,...m.map(i=>(0,n._)`${(0,t.usePattern)(e,i)}.test(${r})`))),(0,n.not)(o)}function _(e){a.code((0,n._)`delete ${c}[${e}]`)}function v(t){if(f.removeAdditional===`all`||f.removeAdditional&&o===!1){_(t);return}if(o===!1){e.setParams({additionalProperty:t}),e.error(),d||a.break();return}if(typeof o==`object`&&!(0,i.alwaysValidSchema)(u,o)){let r=a.name(`valid`);f.removeAdditional===`failing`?(y(t,r,!1),a.if((0,n.not)(r),()=>{e.reset(),_(t)})):(y(t,r),d||a.if((0,n.not)(r),()=>a.break()))}}function y(t,n,r){let a={keyword:`additionalProperties`,dataProp:t,dataPropType:i.Type.Str};r===!1&&Object.assign(a,{compositeRule:!0,createErrors:!1,allErrors:!1}),e.subschema(a,n)}}}})),Dl=i((e=>{Object.defineProperty(e,`__esModule`,{value:!0});var t=Bc(),n=Q(),r=X(),i=El();e.default={keyword:`properties`,type:`object`,schemaType:`object`,code(e){let{gen:a,schema:o,parentSchema:s,data:c,it:l}=e;l.opts.removeAdditional===`all`&&s.additionalProperties===void 0&&i.default.code(new t.KeywordCxt(l,i.default,`additionalProperties`));let u=(0,n.allSchemaProperties)(o);for(let e of u)l.definedProperties.add(e);l.opts.unevaluated&&u.length&&l.props!==!0&&(l.props=r.mergeEvaluated.props(a,(0,r.toHash)(u),l.props));let d=u.filter(e=>!(0,r.alwaysValidSchema)(l,o[e]));if(d.length===0)return;let f=a.name(`valid`);for(let t of d)p(t)?m(t):(a.if((0,n.propertyInData)(a,c,t,l.opts.ownProperties)),m(t),l.allErrors||a.else().var(f,!0),a.endIf()),e.it.definedProperties.add(t),e.ok(f);function p(e){return l.opts.useDefaults&&!l.compositeRule&&o[e].default!==void 0}function m(t){e.subschema({keyword:`properties`,schemaProp:t,dataProp:t},f)}}}})),Ol=i((e=>{Object.defineProperty(e,`__esModule`,{value:!0});var t=Q(),n=Y(),r=X(),i=X();e.default={keyword:`patternProperties`,type:`object`,schemaType:`object`,code(e){let{gen:a,schema:o,data:s,parentSchema:c,it:l}=e,{opts:u}=l,d=(0,t.allSchemaProperties)(o),f=d.filter(e=>(0,r.alwaysValidSchema)(l,o[e]));if(d.length===0||f.length===d.length&&(!l.opts.unevaluated||l.props===!0))return;let p=u.strictSchema&&!u.allowMatchingProperties&&c.properties,m=a.name(`valid`);l.props!==!0&&!(l.props instanceof n.Name)&&(l.props=(0,i.evaluatedPropsToName)(a,l.props));let{props:h}=l;g();function g(){for(let e of d)p&&_(e),l.allErrors?v(e):(a.var(m,!0),v(e),a.if(m))}function _(e){for(let t in p)new RegExp(e).test(t)&&(0,r.checkStrictMode)(l,`property ${t} matches pattern ${e} (use allowMatchingProperties)`)}function v(r){a.forIn(`key`,s,o=>{a.if((0,n._)`${(0,t.usePattern)(e,r)}.test(${o})`,()=>{let t=f.includes(r);t||e.subschema({keyword:`patternProperties`,schemaProp:r,dataProp:o,dataPropType:i.Type.Str},m),l.opts.unevaluated&&h!==!0?a.assign((0,n._)`${h}[${o}]`,!0):!t&&!l.allErrors&&a.if((0,n.not)(m),()=>a.break())})})}}}})),kl=i((e=>{Object.defineProperty(e,`__esModule`,{value:!0});var t=X();e.default={keyword:`not`,schemaType:[`object`,`boolean`],trackErrors:!0,code(e){let{gen:n,schema:r,it:i}=e;if((0,t.alwaysValidSchema)(i,r)){e.fail();return}let a=n.name(`valid`);e.subschema({keyword:`not`,compositeRule:!0,createErrors:!1,allErrors:!1},a),e.failResult(a,()=>e.reset(),()=>e.error())},error:{message:`must NOT be valid`}}})),Al=i((e=>{Object.defineProperty(e,`__esModule`,{value:!0}),e.default={keyword:`anyOf`,schemaType:`array`,trackErrors:!0,code:Q().validateUnion,error:{message:`must match a schema in anyOf`}}})),jl=i((e=>{Object.defineProperty(e,`__esModule`,{value:!0});var t=Y(),n=X();e.default={keyword:`oneOf`,schemaType:`array`,trackErrors:!0,error:{message:`must match exactly one schema in oneOf`,params:({params:e})=>(0,t._)`{passingSchemas: ${e.passing}}`},code(e){let{gen:r,schema:i,parentSchema:a,it:o}=e;if(!Array.isArray(i))throw Error(`ajv implementation error`);if(o.opts.discriminator&&a.discriminator)return;let s=i,c=r.let(`valid`,!1),l=r.let(`passing`,null),u=r.name(`_valid`);e.setParams({passing:l}),r.block(d),e.result(c,()=>e.reset(),()=>e.error(!0));function d(){s.forEach((i,a)=>{let s;(0,n.alwaysValidSchema)(o,i)?r.var(u,!0):s=e.subschema({keyword:`oneOf`,schemaProp:a,compositeRule:!0},u),a>0&&r.if((0,t._)`${u} && ${c}`).assign(c,!1).assign(l,(0,t._)`[${l}, ${a}]`).else(),r.if(u,()=>{r.assign(c,!0),r.assign(l,a),s&&e.mergeEvaluated(s,t.Name)})})}}}})),Ml=i((e=>{Object.defineProperty(e,`__esModule`,{value:!0});var t=X();e.default={keyword:`allOf`,schemaType:`array`,code(e){let{gen:n,schema:r,it:i}=e;if(!Array.isArray(r))throw Error(`ajv implementation error`);let a=n.name(`valid`);r.forEach((n,r)=>{if((0,t.alwaysValidSchema)(i,n))return;let o=e.subschema({keyword:`allOf`,schemaProp:r},a);e.ok(a),e.mergeEvaluated(o)})}}})),Nl=i((e=>{Object.defineProperty(e,`__esModule`,{value:!0});var t=Y(),n=X(),r={keyword:`if`,schemaType:[`object`,`boolean`],trackErrors:!0,error:{message:({params:e})=>(0,t.str)`must match "${e.ifClause}" schema`,params:({params:e})=>(0,t._)`{failingKeyword: ${e.ifClause}}`},code(e){let{gen:r,parentSchema:a,it:o}=e;a.then===void 0&&a.else===void 0&&(0,n.checkStrictMode)(o,`"if" without "then" and "else" is ignored`);let s=i(o,`then`),c=i(o,`else`);if(!s&&!c)return;let l=r.let(`valid`,!0),u=r.name(`_valid`);if(d(),e.reset(),s&&c){let t=r.let(`ifClause`);e.setParams({ifClause:t}),r.if(u,f(`then`,t),f(`else`,t))}else s?r.if(u,f(`then`)):r.if((0,t.not)(u),f(`else`));e.pass(l,()=>e.error(!0));function d(){let t=e.subschema({keyword:`if`,compositeRule:!0,createErrors:!1,allErrors:!1},u);e.mergeEvaluated(t)}function f(n,i){return()=>{let a=e.subschema({keyword:n},u);r.assign(l,u),e.mergeValidEvaluated(a,l),i?r.assign(i,(0,t._)`${n}`):e.setParams({ifClause:n})}}}};function i(e,t){let r=e.schema[t];return r!==void 0&&!(0,n.alwaysValidSchema)(e,r)}e.default=r})),Pl=i((e=>{Object.defineProperty(e,`__esModule`,{value:!0});var t=X();e.default={keyword:[`then`,`else`],schemaType:[`object`,`boolean`],code({keyword:e,parentSchema:n,it:r}){n.if===void 0&&(0,t.checkStrictMode)(r,`"${e}" without "if" is ignored`)}}})),Fl=i((e=>{Object.defineProperty(e,`__esModule`,{value:!0});var t=yl(),n=xl(),r=bl(),i=Sl(),a=Cl(),o=wl(),s=Tl(),c=El(),l=Dl(),u=Ol(),d=kl(),f=Al(),p=jl(),m=Ml(),h=Nl(),g=Pl();function _(e=!1){let _=[d.default,f.default,p.default,m.default,h.default,g.default,s.default,c.default,o.default,l.default,u.default];return e?_.push(n.default,i.default):_.push(t.default,r.default),_.push(a.default),_}e.default=_})),Il=i((e=>{Object.defineProperty(e,`__esModule`,{value:!0});var t=Y();e.default={keyword:`format`,type:[`number`,`string`],schemaType:`string`,$data:!0,error:{message:({schemaCode:e})=>(0,t.str)`must match format "${e}"`,params:({schemaCode:e})=>(0,t._)`{format: ${e}}`},code(e,n){let{gen:r,data:i,$data:a,schema:o,schemaCode:s,it:c}=e,{opts:l,errSchemaPath:u,schemaEnv:d,self:f}=c;if(!l.validateFormats)return;a?p():m();function p(){let a=r.scopeValue(`formats`,{ref:f.formats,code:l.code.formats}),o=r.const(`fDef`,(0,t._)`${a}[${s}]`),c=r.let(`fType`),u=r.let(`format`);r.if((0,t._)`typeof ${o} == "object" && !(${o} instanceof RegExp)`,()=>r.assign(c,(0,t._)`${o}.type || "string"`).assign(u,(0,t._)`${o}.validate`),()=>r.assign(c,(0,t._)`"string"`).assign(u,o)),e.fail$data((0,t.or)(p(),m()));function p(){return l.strictSchema===!1?t.nil:(0,t._)`${s} && !${u}`}function m(){let e=d.$async?(0,t._)`(${o}.async ? await ${u}(${i}) : ${u}(${i}))`:(0,t._)`${u}(${i})`,r=(0,t._)`(typeof ${u} == "function" ? ${e} : ${u}.test(${i}))`;return(0,t._)`${u} && ${u} !== true && ${c} === ${n} && !${r}`}}function m(){let a=f.formats[o];if(!a){m();return}if(a===!0)return;let[s,c,p]=h(a);s===n&&e.pass(g());function m(){if(l.strictSchema===!1){f.logger.warn(e());return}throw Error(e());function e(){return`unknown format "${o}" ignored in schema at path "${u}"`}}function h(e){let n=e instanceof RegExp?(0,t.regexpCode)(e):l.code.formats?(0,t._)`${l.code.formats}${(0,t.getProperty)(o)}`:void 0,i=r.scopeValue(`formats`,{key:o,ref:e,code:n});return typeof e==`object`&&!(e instanceof RegExp)?[e.type||`string`,e.validate,(0,t._)`${i}.validate`]:[`string`,e,i]}function g(){if(typeof a==`object`&&!(a instanceof RegExp)&&a.async){if(!d.$async)throw Error(`async format in sync schema`);return(0,t._)`await ${p}(${i})`}return typeof c==`function`?(0,t._)`${p}(${i})`:(0,t._)`${p}.test(${i})`}}}}})),Ll=i((e=>{Object.defineProperty(e,`__esModule`,{value:!0}),e.default=[Il().default]})),Rl=i((e=>{Object.defineProperty(e,`__esModule`,{value:!0}),e.contentVocabulary=e.metadataVocabulary=void 0,e.metadataVocabulary=[`title`,`description`,`default`,`deprecated`,`readOnly`,`writeOnly`,`examples`],e.contentVocabulary=[`contentMediaType`,`contentEncoding`,`contentSchema`]})),zl=i((e=>{Object.defineProperty(e,`__esModule`,{value:!0});var t=al(),n=vl(),r=Fl(),i=Ll(),a=Rl();e.default=[t.default,n.default,(0,r.default)(),i.default,a.metadataVocabulary,a.contentVocabulary]})),Bl=i((e=>{Object.defineProperty(e,`__esModule`,{value:!0}),e.DiscrError=void 0;var t;(function(e){e.Tag=`tag`,e.Mapping=`mapping`})(t||(e.DiscrError=t={}))})),Vl=i((e=>{Object.defineProperty(e,`__esModule`,{value:!0});var t=Y(),n=Bl(),r=Uc(),i=Hc(),a=X();e.default={keyword:`discriminator`,type:`object`,schemaType:`object`,error:{message:({params:{discrError:e,tagName:t}})=>e===n.DiscrError.Tag?`tag "${t}" must be string`:`value of tag "${t}" must be in oneOf`,params:({params:{discrError:e,tag:n,tagName:r}})=>(0,t._)`{error: ${e}, tag: ${r}, tagValue: ${n}}`},code(e){let{gen:o,data:s,schema:c,parentSchema:l,it:u}=e,{oneOf:d}=l;if(!u.opts.discriminator)throw Error(`discriminator: requires discriminator option`);let f=c.propertyName;if(typeof f!=`string`)throw Error(`discriminator: requires propertyName`);if(c.mapping)throw Error(`discriminator: mapping is not supported`);if(!d)throw Error(`discriminator: requires oneOf keyword`);let p=o.let(`valid`,!1),m=o.const(`tag`,(0,t._)`${s}${(0,t.getProperty)(f)}`);o.if((0,t._)`typeof ${m} == "string"`,()=>h(),()=>e.error(!1,{discrError:n.DiscrError.Tag,tag:m,tagName:f})),e.ok(p);function h(){let r=_();o.if(!1);for(let e in r)o.elseIf((0,t._)`${m} === ${e}`),o.assign(p,g(r[e]));o.else(),e.error(!1,{discrError:n.DiscrError.Mapping,tag:m,tagName:f}),o.endIf()}function g(n){let r=o.name(`valid`),i=e.subschema({keyword:`oneOf`,schemaProp:n},r);return e.mergeEvaluated(i,t.Name),r}function _(){let e={},t=o(l),n=!0;for(let e=0;e<d.length;e++){let c=d[e];if(c?.$ref&&!(0,a.schemaHasRulesButRef)(c,u.self.RULES)){let e=c.$ref;if(c=r.resolveRef.call(u.self,u.schemaEnv.root,u.baseId,e),c instanceof r.SchemaEnv&&(c=c.schema),c===void 0)throw new i.default(u.opts.uriResolver,u.baseId,e)}let l=c?.properties?.[f];if(typeof l!=`object`)throw Error(`discriminator: oneOf subschemas (or referenced schemas) must have "properties/${f}"`);n&&=t||o(c),s(l,e)}if(!n)throw Error(`discriminator: "${f}" must be required`);return e;function o({required:e}){return Array.isArray(e)&&e.includes(f)}function s(e,t){if(e.const)c(e.const,t);else if(e.enum)for(let n of e.enum)c(n,t);else throw Error(`discriminator: "properties/${f}" must have "const" or "enum"`)}function c(t,n){if(typeof t!=`string`||t in e)throw Error(`discriminator: "${f}" values must be unique strings`);e[t]=n}}}}})),Hl=r({$id:()=>Wl,$schema:()=>Ul,default:()=>Yl,definitions:()=>Kl,properties:()=>Jl,title:()=>Gl,type:()=>ql}),Ul,Wl,Gl,Kl,ql,Jl,Yl,Xl=n((()=>{Ul=`http://json-schema.org/draft-07/schema#`,Wl=`http://json-schema.org/draft-07/schema#`,Gl=`Core schema meta-schema`,Kl={schemaArray:{type:`array`,minItems:1,items:{$ref:`#`}},nonNegativeInteger:{type:`integer`,minimum:0},nonNegativeIntegerDefault0:{allOf:[{$ref:`#/definitions/nonNegativeInteger`},{default:0}]},simpleTypes:{enum:[`array`,`boolean`,`integer`,`null`,`number`,`object`,`string`]},stringArray:{type:`array`,items:{type:`string`},uniqueItems:!0,default:[]}},ql=[`object`,`boolean`],Jl={$id:{type:`string`,format:`uri-reference`},$schema:{type:`string`,format:`uri`},$ref:{type:`string`,format:`uri-reference`},$comment:{type:`string`},title:{type:`string`},description:{type:`string`},default:!0,readOnly:{type:`boolean`,default:!1},examples:{type:`array`,items:!0},multipleOf:{type:`number`,exclusiveMinimum:0},maximum:{type:`number`},exclusiveMaximum:{type:`number`},minimum:{type:`number`},exclusiveMinimum:{type:`number`},maxLength:{$ref:`#/definitions/nonNegativeInteger`},minLength:{$ref:`#/definitions/nonNegativeIntegerDefault0`},pattern:{type:`string`,format:`regex`},additionalItems:{$ref:`#`},items:{anyOf:[{$ref:`#`},{$ref:`#/definitions/schemaArray`}],default:!0},maxItems:{$ref:`#/definitions/nonNegativeInteger`},minItems:{$ref:`#/definitions/nonNegativeIntegerDefault0`},uniqueItems:{type:`boolean`,default:!1},contains:{$ref:`#`},maxProperties:{$ref:`#/definitions/nonNegativeInteger`},minProperties:{$ref:`#/definitions/nonNegativeIntegerDefault0`},required:{$ref:`#/definitions/stringArray`},additionalProperties:{$ref:`#`},definitions:{type:`object`,additionalProperties:{$ref:`#`},default:{}},properties:{type:`object`,additionalProperties:{$ref:`#`},default:{}},patternProperties:{type:`object`,additionalProperties:{$ref:`#`},propertyNames:{format:`regex`},default:{}},dependencies:{type:`object`,additionalProperties:{anyOf:[{$ref:`#`},{$ref:`#/definitions/stringArray`}]}},propertyNames:{$ref:`#`},const:!0,enum:{type:`array`,items:!0,minItems:1,uniqueItems:!0},type:{anyOf:[{$ref:`#/definitions/simpleTypes`},{type:`array`,items:{$ref:`#/definitions/simpleTypes`},minItems:1,uniqueItems:!0}]},format:{type:`string`},contentMediaType:{type:`string`},contentEncoding:{type:`string`},if:{$ref:`#`},then:{$ref:`#`},else:{$ref:`#`},allOf:{$ref:`#/definitions/schemaArray`},anyOf:{$ref:`#/definitions/schemaArray`},oneOf:{$ref:`#/definitions/schemaArray`},not:{$ref:`#`}},Yl={$schema:Ul,$id:Wl,title:Gl,definitions:Kl,type:ql,properties:Jl,default:!0}})),Zl=i(((e,n)=>{Object.defineProperty(e,`__esModule`,{value:!0}),e.MissingRefError=e.ValidationError=e.CodeGen=e.Name=e.nil=e.stringify=e.str=e._=e.KeywordCxt=e.Ajv=void 0;var r=nl(),i=zl(),a=Vl(),o=(Xl(),t(Hl).default),s=[`/properties`],c=`http://json-schema.org/draft-07/schema`,l=class extends r.default{_addVocabularies(){super._addVocabularies(),i.default.forEach(e=>this.addVocabulary(e)),this.opts.discriminator&&this.addKeyword(a.default)}_addDefaultMetaSchema(){if(super._addDefaultMetaSchema(),!this.opts.meta)return;let e=this.opts.$data?this.$dataMetaSchema(o,s):o;this.addMetaSchema(e,c,!1),this.refs[`http://json-schema.org/schema`]=c}defaultMeta(){return this.opts.defaultMeta=super.defaultMeta()||(this.getSchema(c)?c:void 0)}};e.Ajv=l,n.exports=e=l,n.exports.Ajv=l,Object.defineProperty(e,`__esModule`,{value:!0}),e.default=l;var u=Bc();Object.defineProperty(e,`KeywordCxt`,{enumerable:!0,get:function(){return u.KeywordCxt}});var d=Y();Object.defineProperty(e,`_`,{enumerable:!0,get:function(){return d._}}),Object.defineProperty(e,`str`,{enumerable:!0,get:function(){return d.str}}),Object.defineProperty(e,`stringify`,{enumerable:!0,get:function(){return d.stringify}}),Object.defineProperty(e,`nil`,{enumerable:!0,get:function(){return d.nil}}),Object.defineProperty(e,`Name`,{enumerable:!0,get:function(){return d.Name}}),Object.defineProperty(e,`CodeGen`,{enumerable:!0,get:function(){return d.CodeGen}});var f=Vc();Object.defineProperty(e,`ValidationError`,{enumerable:!0,get:function(){return f.default}});var p=Hc();Object.defineProperty(e,`MissingRefError`,{enumerable:!0,get:function(){return p.default}})}));function Ql(e){"@babel/helpers - typeof";return Ql=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},Ql(e)}function $l(e){return Array.isArray(e)}function eu(e){return e!==null&&Ql(e)===`object`&&e.constructor===Object}function tu(e){return e.slice(0,e.length-1)}function nu(e){return e[e.length-1]}function ru(e,t){for(var n=e,r=0;r<t.length;)n=eu(n)?n[t[r]]:$l(n)?n[parseInt(t[r])]:void 0,r++;return n}function iu(e){var t=e.split(`/`);return t.shift(),t.map(function(e){return e.replace(/~1/g,`/`).replace(/~0/g,`~`)})}function au(e,t){if(nu(t)!==`-`)return t;var n=tu(t),r=ru(e,n);return n.concat(r.length)}function ou(e,t){return au(e,iu(t))}var su=e(Zl()),cu=e=>t=>{let n=e(t);return n(t),(n.errors||[]).map(du).filter(e=>![`$merge`,`anyOf`,`oneOf`,`if`,`$patch`].includes(e.keyword)).filter(e=>typeof e.message==`string`&&e.message!=``).map(e=>uu(t,e))},lu=e=>{let{schemas:t,ajvOptions:n}=e,r=new su.default(n);return t&&Object.keys(t).map(e=>{let n=t[e];try{r.addSchema(n,e)}catch(t){console.log(`Error registering schema`,{error:t,ref:e,schema:n})}}),r},uu=(e,t)=>({path:ou(e,t.instancePath),message:t.message||`Unknown error`,severity:ae.warning}),du=(e,t)=>{if(e.keyword==`false schema`&&(e.message=`Property is not allowed.`),e.keyword===`enum`){let t=[];Array.isArray(e.params.allowedValues)&&(t=e.params.allowedValues??[]),Array.isArray(e.schema)&&(t=e.schema),t&&(e.message=`Should be one of: ${t.map(e=>JSON.stringify(e)).join(`, `)}`)}if(e.keyword===`additionalProperties`){let{properties:t={}}=e.parentSchema??{},{patternProperties:n={}}=e.parentSchema?.crudFields??{},r=[...Object.keys(t),...Object.keys(n)];r.sort(),e.message=`Invalid property: "${e.params.additionalProperty}". Must be one of: ${r.map(e=>`"${e}"`).join(`, \r
`)}`}let n=e?.parentSchema?.errorMessage??!1;if(n&&(typeof n==`function`&&(e.message=n(e)),typeof n==`string`&&(e.message=n),typeof n==`object`&&n.hasOwnProperty(e.keyword))){let t=n[e.keyword];typeof t==`function`&&(e.message=t(e)),typeof t==`string`&&(e.message=t)}return e},fu=i(((e,t)=>{(function(n){var r=typeof e==`object`&&e&&!e.nodeType&&e,i=typeof t==`object`&&t&&!t.nodeType&&t,a=typeof global==`object`&&global;(a.global===a||a.window===a||a.self===a)&&(n=a);var o,s=2147483647,c=36,l=1,u=26,d=38,f=700,p=72,m=128,h=`-`,g=/^xn--/,_=/[^\x20-\x7E]/,v=/[\x2E\u3002\uFF0E\uFF61]/g,y={overflow:`Overflow: input needs wider integers to process`,"not-basic":`Illegal input >= 0x80 (not a basic code point)`,"invalid-input":`Invalid input`},b=c-l,x=Math.floor,S=String.fromCharCode,C;function w(e){throw RangeError(y[e])}function T(e,t){for(var n=e.length,r=[];n--;)r[n]=t(e[n]);return r}function E(e,t){var n=e.split(`@`),r=``;n.length>1&&(r=n[0]+`@`,e=n[1]),e=e.replace(v,`.`);var i=T(e.split(`.`),t).join(`.`);return r+i}function D(e){for(var t=[],n=0,r=e.length,i,a;n<r;)i=e.charCodeAt(n++),i>=55296&&i<=56319&&n<r?(a=e.charCodeAt(n++),(a&64512)==56320?t.push(((i&1023)<<10)+(a&1023)+65536):(t.push(i),n--)):t.push(i);return t}function O(e){return T(e,function(e){var t=``;return e>65535&&(e-=65536,t+=S(e>>>10&1023|55296),e=56320|e&1023),t+=S(e),t}).join(``)}function k(e){return e-48<10?e-22:e-65<26?e-65:e-97<26?e-97:c}function A(e,t){return e+22+75*(e<26)-((t!=0)<<5)}function j(e,t,n){var r=0;for(e=n?x(e/f):e>>1,e+=x(e/t);e>b*u>>1;r+=c)e=x(e/b);return x(r+(b+1)*e/(e+d))}function M(e){var t=[],n=e.length,r,i=0,a=m,o=p,d=e.lastIndexOf(h),f,g,_,v,y,b,S,C;for(d<0&&(d=0),f=0;f<d;++f)e.charCodeAt(f)>=128&&w(`not-basic`),t.push(e.charCodeAt(f));for(g=d>0?d+1:0;g<n;){for(_=i,v=1,y=c;g>=n&&w(`invalid-input`),b=k(e.charCodeAt(g++)),(b>=c||b>x((s-i)/v))&&w(`overflow`),i+=b*v,S=y<=o?l:y>=o+u?u:y-o,!(b<S);y+=c)C=c-S,v>x(s/C)&&w(`overflow`),v*=C;r=t.length+1,o=j(i-_,r,_==0),x(i/r)>s-a&&w(`overflow`),a+=x(i/r),i%=r,t.splice(i++,0,a)}return O(t)}function N(e){var t,n,r,i,a,o,d,f,g,_,v,y=[],b,C,T,E;for(e=D(e),b=e.length,t=m,n=0,a=p,o=0;o<b;++o)v=e[o],v<128&&y.push(S(v));for(r=i=y.length,i&&y.push(h);r<b;){for(d=s,o=0;o<b;++o)v=e[o],v>=t&&v<d&&(d=v);for(C=r+1,d-t>x((s-n)/C)&&w(`overflow`),n+=(d-t)*C,t=d,o=0;o<b;++o)if(v=e[o],v<t&&++n>s&&w(`overflow`),v==t){for(f=n,g=c;_=g<=a?l:g>=a+u?u:g-a,!(f<_);g+=c)E=f-_,T=c-_,y.push(S(A(_+E%T,0))),f=x(E/T);y.push(S(A(f,0))),a=j(n,C,r==i),n=0,++r}++n,++t}return y.join(``)}function P(e){return E(e,function(e){return g.test(e)?M(e.slice(4).toLowerCase()):e})}function F(e){return E(e,function(e){return _.test(e)?`xn--`+N(e):e})}if(o={version:`1.4.1`,ucs2:{decode:D,encode:O},decode:M,encode:N,toASCII:F,toUnicode:P},typeof define==`function`&&typeof define.amd==`object`&&define.amd)define(`punycode`,function(){return o});else if(r&&i)if(t.exports==r)i.exports=o;else for(C in o)o.hasOwnProperty(C)&&(r[C]=o[C]);else n.punycode=o})(e)})),pu=i(((e,t)=>{t.exports=TypeError})),mu=i(((e,t)=>{t.exports={}})),hu=i(((e,t)=>{var n=typeof Map==`function`&&Map.prototype,r=Object.getOwnPropertyDescriptor&&n?Object.getOwnPropertyDescriptor(Map.prototype,`size`):null,i=n&&r&&typeof r.get==`function`?r.get:null,a=n&&Map.prototype.forEach,o=typeof Set==`function`&&Set.prototype,s=Object.getOwnPropertyDescriptor&&o?Object.getOwnPropertyDescriptor(Set.prototype,`size`):null,c=o&&s&&typeof s.get==`function`?s.get:null,l=o&&Set.prototype.forEach,u=typeof WeakMap==`function`&&WeakMap.prototype?WeakMap.prototype.has:null,d=typeof WeakSet==`function`&&WeakSet.prototype?WeakSet.prototype.has:null,f=typeof WeakRef==`function`&&WeakRef.prototype?WeakRef.prototype.deref:null,p=Boolean.prototype.valueOf,m=Object.prototype.toString,h=Function.prototype.toString,g=String.prototype.match,_=String.prototype.slice,v=String.prototype.replace,y=String.prototype.toUpperCase,b=String.prototype.toLowerCase,x=RegExp.prototype.test,S=Array.prototype.concat,C=Array.prototype.join,w=Array.prototype.slice,T=Math.floor,E=typeof BigInt==`function`?BigInt.prototype.valueOf:null,D=Object.getOwnPropertySymbols,O=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?Symbol.prototype.toString:null,k=typeof Symbol==`function`&&typeof Symbol.iterator==`object`,A=typeof Symbol==`function`&&Symbol.toStringTag?Symbol.toStringTag:null,j=Object.prototype.propertyIsEnumerable,M=(typeof Reflect==`function`?Reflect.getPrototypeOf:Object.getPrototypeOf)||([].__proto__===Array.prototype?function(e){return e.__proto__}:null);function N(e,t){if(e===1/0||e===-1/0||e!==e||e&&e>-1e3&&e<1e3||x.call(/e/,t))return t;var n=/[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;if(typeof e==`number`){var r=e<0?-T(-e):T(e);if(r!==e){var i=String(r),a=_.call(t,i.length+1);return v.call(i,n,`$&_`)+`.`+v.call(v.call(a,/([0-9]{3})/g,`$&_`),/_$/,``)}}return v.call(t,n,`$&_`)}var P=mu(),F=P.custom,I=ie(F)?F:null,L={__proto__:null,double:`"`,single:`'`},R={__proto__:null,double:/(["\\])/g,single:/(['\\])/g};t.exports=function e(t,n,r,o){var s=n||{};if(K(s,`quoteStyle`)&&!K(L,s.quoteStyle))throw TypeError(`option "quoteStyle" must be "single" or "double"`);if(K(s,`maxStringLength`)&&(typeof s.maxStringLength==`number`?s.maxStringLength<0&&s.maxStringLength!==1/0:s.maxStringLength!==null))throw TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');var u=K(s,`customInspect`)?s.customInspect:!0;if(typeof u!=`boolean`&&u!==`symbol`)throw TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");if(K(s,`indent`)&&s.indent!==null&&s.indent!==`	`&&!(parseInt(s.indent,10)===s.indent&&s.indent>0))throw TypeError('option "indent" must be "\\t", an integer > 0, or `null`');if(K(s,`numericSeparator`)&&typeof s.numericSeparator!=`boolean`)throw TypeError('option "numericSeparator", if provided, must be `true` or `false`');var d=s.numericSeparator;if(t===void 0)return`undefined`;if(t===null)return`null`;if(typeof t==`boolean`)return t?`true`:`false`;if(typeof t==`string`)return me(t,s);if(typeof t==`number`){if(t===0)return 1/0/t>0?`0`:`-0`;var f=String(t);return d?N(t,f):f}if(typeof t==`bigint`){var m=String(t)+`n`;return d?N(t,m):m}var h=s.depth===void 0?5:s.depth;if(r===void 0&&(r=0),r>=h&&h>0&&typeof t==`object`)return H(t)?`[Array]`:`[Object]`;var g=be(s,r);if(o===void 0)o=[];else if(se(o,t)>=0)return`[Circular]`;function y(t,n,i){if(n&&(o=w.call(o),o.push(n)),i){var a={depth:s.depth};return K(s,`quoteStyle`)&&(a.quoteStyle=s.quoteStyle),e(t,a,r+1,o)}return e(t,s,r+1,o)}if(typeof t==`function`&&!W(t)){var x=oe(t),T=Se(t,y);return`[Function`+(x?`: `+x:` (anonymous)`)+`]`+(T.length>0?` { `+C.call(T,`, `)+` }`:``)}if(ie(t)){var D=k?v.call(String(t),/^(Symbol\(.*\))_[^)]*$/,`$1`):O.call(t);return typeof t==`object`&&!k?ge(D):D}if(pe(t)){for(var F=`<`+b.call(String(t.nodeName)),R=t.attributes||[],V=0;V<R.length;V++)F+=` `+R[V].name+`=`+z(B(R[V].value),`double`,s);return F+=`>`,t.childNodes&&t.childNodes.length&&(F+=`...`),F+=`</`+b.call(String(t.nodeName))+`>`,F}if(H(t)){if(t.length===0)return`[]`;var ae=Se(t,y);return g&&!ye(ae)?`[`+xe(ae,g)+`]`:`[ `+C.call(ae,`, `)+` ]`}if(ee(t)){var he=Se(t,y);return!(`cause`in Error.prototype)&&`cause`in t&&!j.call(t,`cause`)?`{ [`+String(t)+`] `+C.call(S.call(`[cause]: `+y(t.cause),he),`, `)+` }`:he.length===0?`[`+String(t)+`]`:`{ [`+String(t)+`] `+C.call(he,`, `)+` }`}if(typeof t==`object`&&u){if(I&&typeof t[I]==`function`&&P)return P(t,{depth:h-r});if(u!==`symbol`&&typeof t.inspect==`function`)return t.inspect()}if(ce(t)){var Ce=[];return a&&a.call(t,function(e,n){Ce.push(y(n,t,!0)+` => `+y(e,t))}),ve(`Map`,i.call(t),Ce,g)}if(de(t)){var we=[];return l&&l.call(t,function(e){we.push(y(e,t))}),ve(`Set`,c.call(t),we,g)}if(le(t))return _e(`WeakMap`);if(fe(t))return _e(`WeakSet`);if(ue(t))return _e(`WeakRef`);if(ne(t))return ge(y(Number(t)));if(G(t))return ge(y(E.call(t)));if(re(t))return ge(p.call(t));if(te(t))return ge(y(String(t)));if(typeof window<`u`&&t===window)return`{ [object Window] }`;if(typeof globalThis<`u`&&t===globalThis||typeof global<`u`&&t===global)return`{ [object globalThis] }`;if(!U(t)&&!W(t)){var Te=Se(t,y),Ee=M?M(t)===Object.prototype:t instanceof Object||t.constructor===Object,De=t instanceof Object?``:`null prototype`,Oe=!Ee&&A&&Object(t)===t&&A in t?_.call(q(t),8,-1):De?`Object`:``,ke=(Ee||typeof t.constructor!=`function`?``:t.constructor.name?t.constructor.name+` `:``)+(Oe||De?`[`+C.call(S.call([],Oe||[],De||[]),`: `)+`] `:``);return Te.length===0?ke+`{}`:g?ke+`{`+xe(Te,g)+`}`:ke+`{ `+C.call(Te,`, `)+` }`}return String(t)};function z(e,t,n){var r=L[n.quoteStyle||t];return r+e+r}function B(e){return v.call(String(e),/"/g,`&quot;`)}function V(e){return!A||!(typeof e==`object`&&(A in e||e[A]!==void 0))}function H(e){return q(e)===`[object Array]`&&V(e)}function U(e){return q(e)===`[object Date]`&&V(e)}function W(e){return q(e)===`[object RegExp]`&&V(e)}function ee(e){return q(e)===`[object Error]`&&V(e)}function te(e){return q(e)===`[object String]`&&V(e)}function ne(e){return q(e)===`[object Number]`&&V(e)}function re(e){return q(e)===`[object Boolean]`&&V(e)}function ie(e){if(k)return e&&typeof e==`object`&&e instanceof Symbol;if(typeof e==`symbol`)return!0;if(!e||typeof e!=`object`||!O)return!1;try{return O.call(e),!0}catch{}return!1}function G(e){if(!e||typeof e!=`object`||!E)return!1;try{return E.call(e),!0}catch{}return!1}var ae=Object.prototype.hasOwnProperty||function(e){return e in this};function K(e,t){return ae.call(e,t)}function q(e){return m.call(e)}function oe(e){if(e.name)return e.name;var t=g.call(h.call(e),/^function\s*([\w$]+)/);return t?t[1]:null}function se(e,t){if(e.indexOf)return e.indexOf(t);for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1}function ce(e){if(!i||!e||typeof e!=`object`)return!1;try{i.call(e);try{c.call(e)}catch{return!0}return e instanceof Map}catch{}return!1}function le(e){if(!u||!e||typeof e!=`object`)return!1;try{u.call(e,u);try{d.call(e,d)}catch{return!0}return e instanceof WeakMap}catch{}return!1}function ue(e){if(!f||!e||typeof e!=`object`)return!1;try{return f.call(e),!0}catch{}return!1}function de(e){if(!c||!e||typeof e!=`object`)return!1;try{c.call(e);try{i.call(e)}catch{return!0}return e instanceof Set}catch{}return!1}function fe(e){if(!d||!e||typeof e!=`object`)return!1;try{d.call(e,d);try{u.call(e,u)}catch{return!0}return e instanceof WeakSet}catch{}return!1}function pe(e){return!e||typeof e!=`object`?!1:typeof HTMLElement<`u`&&e instanceof HTMLElement?!0:typeof e.nodeName==`string`&&typeof e.getAttribute==`function`}function me(e,t){if(e.length>t.maxStringLength){var n=e.length-t.maxStringLength,r=`... `+n+` more character`+(n>1?`s`:``);return me(_.call(e,0,t.maxStringLength),t)+r}var i=R[t.quoteStyle||`single`];return i.lastIndex=0,z(v.call(v.call(e,i,`\\$1`),/[\x00-\x1f]/g,he),`single`,t)}function he(e){var t=e.charCodeAt(0),n={8:`b`,9:`t`,10:`n`,12:`f`,13:`r`}[t];return n?`\\`+n:`\\x`+(t<16?`0`:``)+y.call(t.toString(16))}function ge(e){return`Object(`+e+`)`}function _e(e){return e+` { ? }`}function ve(e,t,n,r){var i=r?xe(n,r):C.call(n,`, `);return e+` (`+t+`) {`+i+`}`}function ye(e){for(var t=0;t<e.length;t++)if(se(e[t],`
`)>=0)return!1;return!0}function be(e,t){var n;if(e.indent===`	`)n=`	`;else if(typeof e.indent==`number`&&e.indent>0)n=C.call(Array(e.indent+1),` `);else return null;return{base:n,prev:C.call(Array(t+1),n)}}function xe(e,t){if(e.length===0)return``;var n=`
`+t.prev+t.base;return n+C.call(e,`,`+n)+`
`+t.prev}function Se(e,t){var n=H(e),r=[];if(n){r.length=e.length;for(var i=0;i<e.length;i++)r[i]=K(e,i)?t(e[i],e):``}var a=typeof D==`function`?D(e):[],o;if(k){o={};for(var s=0;s<a.length;s++)o[`$`+a[s]]=a[s]}for(var c in e)K(e,c)&&(n&&String(Number(c))===c&&c<e.length||k&&o[`$`+c]instanceof Symbol||(x.call(/[^\w$]/,c)?r.push(t(c,e)+`: `+t(e[c],e)):r.push(c+`: `+t(e[c],e))));if(typeof D==`function`)for(var l=0;l<a.length;l++)j.call(e,a[l])&&r.push(`[`+t(a[l])+`]: `+t(e[a[l]],e));return r}})),gu=i(((e,t)=>{var n=hu(),r=pu(),i=function(e,t,n){for(var r=e,i;(i=r.next)!=null;r=i)if(i.key===t)return r.next=i.next,n||(i.next=e.next,e.next=i),i},a=function(e,t){if(e){var n=i(e,t);return n&&n.value}},o=function(e,t,n){var r=i(e,t);r?r.value=n:e.next={key:t,next:e.next,value:n}},s=function(e,t){return e?!!i(e,t):!1},c=function(e,t){if(e)return i(e,t,!0)};t.exports=function(){var e,t={assert:function(e){if(!t.has(e))throw new r(`Side channel does not contain `+n(e))},delete:function(t){var n=c(e,t);return n&&e&&!e.next&&(e=void 0),!!n},get:function(t){return a(e,t)},has:function(t){return s(e,t)},set:function(t,n){e||={next:void 0},o(e,t,n)}};return t}})),_u=i(((e,t)=>{t.exports=Object})),vu=i(((e,t)=>{t.exports=Error})),yu=i(((e,t)=>{t.exports=EvalError})),bu=i(((e,t)=>{t.exports=RangeError})),xu=i(((e,t)=>{t.exports=ReferenceError})),Su=i(((e,t)=>{t.exports=SyntaxError})),Cu=i(((e,t)=>{t.exports=URIError})),wu=i(((e,t)=>{t.exports=Math.abs})),Tu=i(((e,t)=>{t.exports=Math.floor})),Eu=i(((e,t)=>{t.exports=Math.max})),Du=i(((e,t)=>{t.exports=Math.min})),Ou=i(((e,t)=>{t.exports=Math.pow})),ku=i(((e,t)=>{t.exports=Math.round})),Au=i(((e,t)=>{t.exports=Number.isNaN||function(e){return e!==e}})),ju=i(((e,t)=>{var n=Au();t.exports=function(e){return n(e)||e===0?e:e<0?-1:1}})),Mu=i(((e,t)=>{t.exports=Object.getOwnPropertyDescriptor})),Nu=i(((e,t)=>{var n=Mu();if(n)try{n([],`length`)}catch{n=null}t.exports=n})),Pu=i(((e,t)=>{var n=Object.defineProperty||!1;if(n)try{n({},`a`,{value:1})}catch{n=!1}t.exports=n})),Fu=i(((e,t)=>{t.exports=function(){if(typeof Symbol!=`function`||typeof Object.getOwnPropertySymbols!=`function`)return!1;if(typeof Symbol.iterator==`symbol`)return!0;var e={},t=Symbol(`test`),n=Object(t);if(typeof t==`string`||Object.prototype.toString.call(t)!==`[object Symbol]`||Object.prototype.toString.call(n)!==`[object Symbol]`)return!1;var r=42;for(var i in e[t]=r,e)return!1;if(typeof Object.keys==`function`&&Object.keys(e).length!==0||typeof Object.getOwnPropertyNames==`function`&&Object.getOwnPropertyNames(e).length!==0)return!1;var a=Object.getOwnPropertySymbols(e);if(a.length!==1||a[0]!==t||!Object.prototype.propertyIsEnumerable.call(e,t))return!1;if(typeof Object.getOwnPropertyDescriptor==`function`){var o=Object.getOwnPropertyDescriptor(e,t);if(o.value!==r||o.enumerable!==!0)return!1}return!0}})),Iu=i(((e,t)=>{var n=typeof Symbol<`u`&&Symbol,r=Fu();t.exports=function(){return typeof n!=`function`||typeof Symbol!=`function`||typeof n(`foo`)!=`symbol`||typeof Symbol(`bar`)!=`symbol`?!1:r()}})),Lu=i(((e,t)=>{t.exports=typeof Reflect<`u`&&Reflect.getPrototypeOf||null})),Ru=i(((e,t)=>{t.exports=_u().getPrototypeOf||null})),zu=i(((e,t)=>{var n=`Function.prototype.bind called on incompatible `,r=Object.prototype.toString,i=Math.max,a=`[object Function]`,o=function(e,t){for(var n=[],r=0;r<e.length;r+=1)n[r]=e[r];for(var i=0;i<t.length;i+=1)n[i+e.length]=t[i];return n},s=function(e,t){for(var n=[],r=t||0,i=0;r<e.length;r+=1,i+=1)n[i]=e[r];return n},c=function(e,t){for(var n=``,r=0;r<e.length;r+=1)n+=e[r],r+1<e.length&&(n+=t);return n};t.exports=function(e){var t=this;if(typeof t!=`function`||r.apply(t)!==a)throw TypeError(n+t);for(var l=s(arguments,1),u,d=function(){if(this instanceof u){var n=t.apply(this,o(l,arguments));return Object(n)===n?n:this}return t.apply(e,o(l,arguments))},f=i(0,t.length-l.length),p=[],m=0;m<f;m++)p[m]=`$`+m;if(u=Function(`binder`,`return function (`+c(p,`,`)+`){ return binder.apply(this,arguments); }`)(d),t.prototype){var h=function(){};h.prototype=t.prototype,u.prototype=new h,h.prototype=null}return u}})),Bu=i(((e,t)=>{var n=zu();t.exports=Function.prototype.bind||n})),Vu=i(((e,t)=>{t.exports=Function.prototype.call})),Hu=i(((e,t)=>{t.exports=Function.prototype.apply})),Uu=i(((e,t)=>{t.exports=typeof Reflect<`u`&&Reflect&&Reflect.apply})),Wu=i(((e,t)=>{var n=Bu(),r=Hu(),i=Vu();t.exports=Uu()||n.call(i,r)})),Gu=i(((e,t)=>{var n=Bu(),r=pu(),i=Vu(),a=Wu();t.exports=function(e){if(e.length<1||typeof e[0]!=`function`)throw new r(`a function is required`);return a(n,i,e)}})),Ku=i(((e,t)=>{var n=Gu(),r=Nu(),i;try{i=[].__proto__===Array.prototype}catch(e){if(!e||typeof e!=`object`||!(`code`in e)||e.code!==`ERR_PROTO_ACCESS`)throw e}var a=!!i&&r&&r(Object.prototype,`__proto__`),o=Object,s=o.getPrototypeOf;t.exports=a&&typeof a.get==`function`?n([a.get]):typeof s==`function`?function(e){return s(e==null?e:o(e))}:!1})),qu=i(((e,t)=>{var n=Lu(),r=Ru(),i=Ku();t.exports=n?function(e){return n(e)}:r?function(e){if(!e||typeof e!=`object`&&typeof e!=`function`)throw TypeError(`getProto: not an object`);return r(e)}:i?function(e){return i(e)}:null})),Ju=i(((e,t)=>{var n=Function.prototype.call,r=Object.prototype.hasOwnProperty;t.exports=Bu().call(n,r)})),Yu=i(((e,t)=>{var n,r=_u(),i=vu(),a=yu(),o=bu(),s=xu(),c=Su(),l=pu(),u=Cu(),d=wu(),f=Tu(),p=Eu(),m=Du(),h=Ou(),g=ku(),_=ju(),v=Function,y=function(e){try{return v(`"use strict"; return (`+e+`).constructor;`)()}catch{}},b=Nu(),x=Pu(),S=function(){throw new l},C=b?function(){try{return arguments.callee,S}catch{try{return b(arguments,`callee`).get}catch{return S}}}():S,w=Iu()(),T=qu(),E=Ru(),D=Lu(),O=Hu(),k=Vu(),A={},j=typeof Uint8Array>`u`||!T?n:T(Uint8Array),M={__proto__:null,"%AggregateError%":typeof AggregateError>`u`?n:AggregateError,"%Array%":Array,"%ArrayBuffer%":typeof ArrayBuffer>`u`?n:ArrayBuffer,"%ArrayIteratorPrototype%":w&&T?T([][Symbol.iterator]()):n,"%AsyncFromSyncIteratorPrototype%":n,"%AsyncFunction%":A,"%AsyncGenerator%":A,"%AsyncGeneratorFunction%":A,"%AsyncIteratorPrototype%":A,"%Atomics%":typeof Atomics>`u`?n:Atomics,"%BigInt%":typeof BigInt>`u`?n:BigInt,"%BigInt64Array%":typeof BigInt64Array>`u`?n:BigInt64Array,"%BigUint64Array%":typeof BigUint64Array>`u`?n:BigUint64Array,"%Boolean%":Boolean,"%DataView%":typeof DataView>`u`?n:DataView,"%Date%":Date,"%decodeURI%":decodeURI,"%decodeURIComponent%":decodeURIComponent,"%encodeURI%":encodeURI,"%encodeURIComponent%":encodeURIComponent,"%Error%":i,"%eval%":eval,"%EvalError%":a,"%Float16Array%":typeof Float16Array>`u`?n:Float16Array,"%Float32Array%":typeof Float32Array>`u`?n:Float32Array,"%Float64Array%":typeof Float64Array>`u`?n:Float64Array,"%FinalizationRegistry%":typeof FinalizationRegistry>`u`?n:FinalizationRegistry,"%Function%":v,"%GeneratorFunction%":A,"%Int8Array%":typeof Int8Array>`u`?n:Int8Array,"%Int16Array%":typeof Int16Array>`u`?n:Int16Array,"%Int32Array%":typeof Int32Array>`u`?n:Int32Array,"%isFinite%":isFinite,"%isNaN%":isNaN,"%IteratorPrototype%":w&&T?T(T([][Symbol.iterator]())):n,"%JSON%":typeof JSON==`object`?JSON:n,"%Map%":typeof Map>`u`?n:Map,"%MapIteratorPrototype%":typeof Map>`u`||!w||!T?n:T(new Map()[Symbol.iterator]()),"%Math%":Math,"%Number%":Number,"%Object%":r,"%Object.getOwnPropertyDescriptor%":b,"%parseFloat%":parseFloat,"%parseInt%":parseInt,"%Promise%":typeof Promise>`u`?n:Promise,"%Proxy%":typeof Proxy>`u`?n:Proxy,"%RangeError%":o,"%ReferenceError%":s,"%Reflect%":typeof Reflect>`u`?n:Reflect,"%RegExp%":RegExp,"%Set%":typeof Set>`u`?n:Set,"%SetIteratorPrototype%":typeof Set>`u`||!w||!T?n:T(new Set()[Symbol.iterator]()),"%SharedArrayBuffer%":typeof SharedArrayBuffer>`u`?n:SharedArrayBuffer,"%String%":String,"%StringIteratorPrototype%":w&&T?T(``[Symbol.iterator]()):n,"%Symbol%":w?Symbol:n,"%SyntaxError%":c,"%ThrowTypeError%":C,"%TypedArray%":j,"%TypeError%":l,"%Uint8Array%":typeof Uint8Array>`u`?n:Uint8Array,"%Uint8ClampedArray%":typeof Uint8ClampedArray>`u`?n:Uint8ClampedArray,"%Uint16Array%":typeof Uint16Array>`u`?n:Uint16Array,"%Uint32Array%":typeof Uint32Array>`u`?n:Uint32Array,"%URIError%":u,"%WeakMap%":typeof WeakMap>`u`?n:WeakMap,"%WeakRef%":typeof WeakRef>`u`?n:WeakRef,"%WeakSet%":typeof WeakSet>`u`?n:WeakSet,"%Function.prototype.call%":k,"%Function.prototype.apply%":O,"%Object.defineProperty%":x,"%Object.getPrototypeOf%":E,"%Math.abs%":d,"%Math.floor%":f,"%Math.max%":p,"%Math.min%":m,"%Math.pow%":h,"%Math.round%":g,"%Math.sign%":_,"%Reflect.getPrototypeOf%":D};if(T)try{null.error}catch(e){M[`%Error.prototype%`]=T(T(e))}var N=function e(t){var n;if(t===`%AsyncFunction%`)n=y(`async function () {}`);else if(t===`%GeneratorFunction%`)n=y(`function* () {}`);else if(t===`%AsyncGeneratorFunction%`)n=y(`async function* () {}`);else if(t===`%AsyncGenerator%`){var r=e(`%AsyncGeneratorFunction%`);r&&(n=r.prototype)}else if(t===`%AsyncIteratorPrototype%`){var i=e(`%AsyncGenerator%`);i&&T&&(n=T(i.prototype))}return M[t]=n,n},P={__proto__:null,"%ArrayBufferPrototype%":[`ArrayBuffer`,`prototype`],"%ArrayPrototype%":[`Array`,`prototype`],"%ArrayProto_entries%":[`Array`,`prototype`,`entries`],"%ArrayProto_forEach%":[`Array`,`prototype`,`forEach`],"%ArrayProto_keys%":[`Array`,`prototype`,`keys`],"%ArrayProto_values%":[`Array`,`prototype`,`values`],"%AsyncFunctionPrototype%":[`AsyncFunction`,`prototype`],"%AsyncGenerator%":[`AsyncGeneratorFunction`,`prototype`],"%AsyncGeneratorPrototype%":[`AsyncGeneratorFunction`,`prototype`,`prototype`],"%BooleanPrototype%":[`Boolean`,`prototype`],"%DataViewPrototype%":[`DataView`,`prototype`],"%DatePrototype%":[`Date`,`prototype`],"%ErrorPrototype%":[`Error`,`prototype`],"%EvalErrorPrototype%":[`EvalError`,`prototype`],"%Float32ArrayPrototype%":[`Float32Array`,`prototype`],"%Float64ArrayPrototype%":[`Float64Array`,`prototype`],"%FunctionPrototype%":[`Function`,`prototype`],"%Generator%":[`GeneratorFunction`,`prototype`],"%GeneratorPrototype%":[`GeneratorFunction`,`prototype`,`prototype`],"%Int8ArrayPrototype%":[`Int8Array`,`prototype`],"%Int16ArrayPrototype%":[`Int16Array`,`prototype`],"%Int32ArrayPrototype%":[`Int32Array`,`prototype`],"%JSONParse%":[`JSON`,`parse`],"%JSONStringify%":[`JSON`,`stringify`],"%MapPrototype%":[`Map`,`prototype`],"%NumberPrototype%":[`Number`,`prototype`],"%ObjectPrototype%":[`Object`,`prototype`],"%ObjProto_toString%":[`Object`,`prototype`,`toString`],"%ObjProto_valueOf%":[`Object`,`prototype`,`valueOf`],"%PromisePrototype%":[`Promise`,`prototype`],"%PromiseProto_then%":[`Promise`,`prototype`,`then`],"%Promise_all%":[`Promise`,`all`],"%Promise_reject%":[`Promise`,`reject`],"%Promise_resolve%":[`Promise`,`resolve`],"%RangeErrorPrototype%":[`RangeError`,`prototype`],"%ReferenceErrorPrototype%":[`ReferenceError`,`prototype`],"%RegExpPrototype%":[`RegExp`,`prototype`],"%SetPrototype%":[`Set`,`prototype`],"%SharedArrayBufferPrototype%":[`SharedArrayBuffer`,`prototype`],"%StringPrototype%":[`String`,`prototype`],"%SymbolPrototype%":[`Symbol`,`prototype`],"%SyntaxErrorPrototype%":[`SyntaxError`,`prototype`],"%TypedArrayPrototype%":[`TypedArray`,`prototype`],"%TypeErrorPrototype%":[`TypeError`,`prototype`],"%Uint8ArrayPrototype%":[`Uint8Array`,`prototype`],"%Uint8ClampedArrayPrototype%":[`Uint8ClampedArray`,`prototype`],"%Uint16ArrayPrototype%":[`Uint16Array`,`prototype`],"%Uint32ArrayPrototype%":[`Uint32Array`,`prototype`],"%URIErrorPrototype%":[`URIError`,`prototype`],"%WeakMapPrototype%":[`WeakMap`,`prototype`],"%WeakSetPrototype%":[`WeakSet`,`prototype`]},F=Bu(),I=Ju(),L=F.call(k,Array.prototype.concat),R=F.call(O,Array.prototype.splice),z=F.call(k,String.prototype.replace),B=F.call(k,String.prototype.slice),V=F.call(k,RegExp.prototype.exec),H=/[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,U=/\\(\\)?/g,W=function(e){var t=B(e,0,1),n=B(e,-1);if(t===`%`&&n!==`%`)throw new c("invalid intrinsic syntax, expected closing `%`");if(n===`%`&&t!==`%`)throw new c("invalid intrinsic syntax, expected opening `%`");var r=[];return z(e,H,function(e,t,n,i){r[r.length]=n?z(i,U,`$1`):t||e}),r},ee=function(e,t){var n=e,r;if(I(P,n)&&(r=P[n],n=`%`+r[0]+`%`),I(M,n)){var i=M[n];if(i===A&&(i=N(n)),i===void 0&&!t)throw new l(`intrinsic `+e+` exists, but is not available. Please file an issue!`);return{alias:r,name:n,value:i}}throw new c(`intrinsic `+e+` does not exist!`)};t.exports=function(e,t){if(typeof e!=`string`||e.length===0)throw new l(`intrinsic name must be a non-empty string`);if(arguments.length>1&&typeof t!=`boolean`)throw new l(`"allowMissing" argument must be a boolean`);if(V(/^%?[^%]*%?$/,e)===null)throw new c("`%` may not be present anywhere but at the beginning and end of the intrinsic name");var n=W(e),r=n.length>0?n[0]:``,i=ee(`%`+r+`%`,t),a=i.name,o=i.value,s=!1,u=i.alias;u&&(r=u[0],R(n,L([0,1],u)));for(var d=1,f=!0;d<n.length;d+=1){var p=n[d],m=B(p,0,1),h=B(p,-1);if((m===`"`||m===`'`||m==="`"||h===`"`||h===`'`||h==="`")&&m!==h)throw new c(`property names with quotes must have matching quotes`);if((p===`constructor`||!f)&&(s=!0),r+=`.`+p,a=`%`+r+`%`,I(M,a))o=M[a];else if(o!=null){if(!(p in o)){if(!t)throw new l(`base intrinsic for `+e+` exists, but the property is not available.`);return}if(b&&d+1>=n.length){var g=b(o,p);f=!!g,o=f&&`get`in g&&!(`originalValue`in g.get)?g.get:o[p]}else f=I(o,p),o=o[p];f&&!s&&(M[a]=o)}}return o}})),Xu=i(((e,t)=>{var n=Yu(),r=Gu(),i=r([n(`%String.prototype.indexOf%`)]);t.exports=function(e,t){var a=n(e,!!t);return typeof a==`function`&&i(e,`.prototype.`)>-1?r([a]):a}})),Zu=i(((e,t)=>{var n=Yu(),r=Xu(),i=hu(),a=pu(),o=n(`%Map%`,!0),s=r(`Map.prototype.get`,!0),c=r(`Map.prototype.set`,!0),l=r(`Map.prototype.has`,!0),u=r(`Map.prototype.delete`,!0),d=r(`Map.prototype.size`,!0);t.exports=!!o&&function(){var e,t={assert:function(e){if(!t.has(e))throw new a(`Side channel does not contain `+i(e))},delete:function(t){if(e){var n=u(e,t);return d(e)===0&&(e=void 0),n}return!1},get:function(t){if(e)return s(e,t)},has:function(t){return e?l(e,t):!1},set:function(t,n){e||=new o,c(e,t,n)}};return t}})),Qu=i(((e,t)=>{var n=Yu(),r=Xu(),i=hu(),a=Zu(),o=pu(),s=n(`%WeakMap%`,!0),c=r(`WeakMap.prototype.get`,!0),l=r(`WeakMap.prototype.set`,!0),u=r(`WeakMap.prototype.has`,!0),d=r(`WeakMap.prototype.delete`,!0);t.exports=s?function(){var e,t,n={assert:function(e){if(!n.has(e))throw new o(`Side channel does not contain `+i(e))},delete:function(n){if(s&&n&&(typeof n==`object`||typeof n==`function`)){if(e)return d(e,n)}else if(a&&t)return t.delete(n);return!1},get:function(n){return s&&n&&(typeof n==`object`||typeof n==`function`)&&e?c(e,n):t&&t.get(n)},has:function(n){return s&&n&&(typeof n==`object`||typeof n==`function`)&&e?u(e,n):!!t&&t.has(n)},set:function(n,r){s&&n&&(typeof n==`object`||typeof n==`function`)?(e||=new s,l(e,n,r)):a&&(t||=a(),t.set(n,r))}};return n}:a})),$u=i(((e,t)=>{var n=pu(),r=hu(),i=gu(),a=Zu(),o=Qu()||a||i;t.exports=function(){var e,t={assert:function(e){if(!t.has(e))throw new n(`Side channel does not contain `+r(e))},delete:function(t){return!!e&&e.delete(t)},get:function(t){return e&&e.get(t)},has:function(t){return!!e&&e.has(t)},set:function(t,n){e||=o(),e.set(t,n)}};return t}})),ed=i(((e,t)=>{var n=String.prototype.replace,r=/%20/g,i={RFC1738:`RFC1738`,RFC3986:`RFC3986`};t.exports={default:i.RFC3986,formatters:{RFC1738:function(e){return n.call(e,r,`+`)},RFC3986:function(e){return String(e)}},RFC1738:i.RFC1738,RFC3986:i.RFC3986}})),td=i(((e,t)=>{var n=ed(),r=$u(),i=Object.prototype.hasOwnProperty,a=Array.isArray,o=r(),s=function(e,t){return o.set(e,t),e},c=function(e){return o.has(e)},l=function(e){return o.get(e)},u=function(e,t){o.set(e,t)},d=function(){for(var e=[],t=0;t<256;++t)e[e.length]=`%`+((t<16?`0`:``)+t.toString(16)).toUpperCase();return e}(),f=function(e){for(;e.length>1;){var t=e.pop(),n=t.obj[t.prop];if(a(n)){for(var r=[],i=0;i<n.length;++i)n[i]!==void 0&&(r[r.length]=n[i]);t.obj[t.prop]=r}}},p=function(e,t){for(var n=t&&t.plainObjects?{__proto__:null}:{},r=0;r<e.length;++r)e[r]!==void 0&&(n[r]=e[r]);return n},m=function e(t,n,r){if(!n)return t;if(typeof n!=`object`&&typeof n!=`function`){if(a(t)){var o=t.length;if(r&&typeof r.arrayLimit==`number`&&o>r.arrayLimit)return s(p(t.concat(n),r),o);t[o]=n}else if(t&&typeof t==`object`)if(c(t)){var d=l(t)+1;t[d]=n,u(t,d)}else if(r&&r.strictMerge)return[t,n];else (r&&(r.plainObjects||r.allowPrototypes)||!i.call(Object.prototype,n))&&(t[n]=!0);else return[t,n];return t}if(!t||typeof t!=`object`){if(c(n)){for(var f=Object.keys(n),m=r&&r.plainObjects?{__proto__:null,0:t}:{0:t},h=0;h<f.length;h++){var g=parseInt(f[h],10);m[g+1]=n[f[h]]}return s(m,l(n)+1)}var _=[t].concat(n);return r&&typeof r.arrayLimit==`number`&&_.length>r.arrayLimit?s(p(_,r),_.length-1):_}var v=t;return a(t)&&!a(n)&&(v=p(t,r)),a(t)&&a(n)?(n.forEach(function(n,a){if(i.call(t,a)){var o=t[a];o&&typeof o==`object`&&n&&typeof n==`object`?t[a]=e(o,n,r):t[t.length]=n}else t[a]=n}),t):Object.keys(n).reduce(function(t,a){var o=n[a];if(i.call(t,a)?t[a]=e(t[a],o,r):t[a]=o,c(n)&&!c(t)&&s(t,l(n)),c(t)){var d=parseInt(a,10);String(d)===a&&d>=0&&d>l(t)&&u(t,d)}return t},v)},h=function(e,t){return Object.keys(t).reduce(function(e,n){return e[n]=t[n],e},e)},g=function(e,t,n){var r=e.replace(/\+/g,` `);if(n===`iso-8859-1`)return r.replace(/%[0-9a-f]{2}/gi,unescape);try{return decodeURIComponent(r)}catch{return r}},_=1024;t.exports={arrayToObject:p,assign:h,combine:function(e,t,n,r){if(c(e)){var i=l(e)+1;return e[i]=t,u(e,i),e}var a=[].concat(e,t);return a.length>n?s(p(a,{plainObjects:r}),a.length-1):a},compact:function(e){for(var t=[{obj:{o:e},prop:`o`}],n=[],r=0;r<t.length;++r)for(var i=t[r],a=i.obj[i.prop],o=Object.keys(a),s=0;s<o.length;++s){var c=o[s],l=a[c];typeof l==`object`&&l&&n.indexOf(l)===-1&&(t[t.length]={obj:a,prop:c},n[n.length]=l)}return f(t),e},decode:g,encode:function(e,t,r,i,a){if(e.length===0)return e;var o=e;if(typeof e==`symbol`?o=Symbol.prototype.toString.call(e):typeof e!=`string`&&(o=String(e)),r===`iso-8859-1`)return escape(o).replace(/%u[0-9a-f]{4}/gi,function(e){return`%26%23`+parseInt(e.slice(2),16)+`%3B`});for(var s=``,c=0;c<o.length;c+=_){for(var l=o.length>=_?o.slice(c,c+_):o,u=[],f=0;f<l.length;++f){var p=l.charCodeAt(f);if(p===45||p===46||p===95||p===126||p>=48&&p<=57||p>=65&&p<=90||p>=97&&p<=122||a===n.RFC1738&&(p===40||p===41)){u[u.length]=l.charAt(f);continue}if(p<128){u[u.length]=d[p];continue}if(p<2048){u[u.length]=d[192|p>>6]+d[128|p&63];continue}if(p<55296||p>=57344){u[u.length]=d[224|p>>12]+d[128|p>>6&63]+d[128|p&63];continue}f+=1,p=65536+((p&1023)<<10|l.charCodeAt(f)&1023),u[u.length]=d[240|p>>18]+d[128|p>>12&63]+d[128|p>>6&63]+d[128|p&63]}s+=u.join(``)}return s},isBuffer:function(e){return!e||typeof e!=`object`?!1:!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))},isOverflow:c,isRegExp:function(e){return Object.prototype.toString.call(e)===`[object RegExp]`},markOverflow:s,maybeMap:function(e,t){if(a(e)){for(var n=[],r=0;r<e.length;r+=1)n[n.length]=t(e[r]);return n}return t(e)},merge:m}})),nd=i(((e,t)=>{var n=$u(),r=td(),i=ed(),a=Object.prototype.hasOwnProperty,o={brackets:function(e){return e+`[]`},comma:`comma`,indices:function(e,t){return e+`[`+t+`]`},repeat:function(e){return e}},s=Array.isArray,c=Array.prototype.push,l=function(e,t){c.apply(e,s(t)?t:[t])},u=Date.prototype.toISOString,d=i.default,f={addQueryPrefix:!1,allowDots:!1,allowEmptyArrays:!1,arrayFormat:`indices`,charset:`utf-8`,charsetSentinel:!1,commaRoundTrip:!1,delimiter:`&`,encode:!0,encodeDotInKeys:!1,encoder:r.encode,encodeValuesOnly:!1,filter:void 0,format:d,formatter:i.formatters[d],indices:!1,serializeDate:function(e){return u.call(e)},skipNulls:!1,strictNullHandling:!1},p=function(e){return typeof e==`string`||typeof e==`number`||typeof e==`boolean`||typeof e==`symbol`||typeof e==`bigint`},m={},h=function e(t,i,a,o,c,u,d,h,g,_,v,y,b,x,S,C,w,T){for(var E=t,D=T,O=0,k=!1;(D=D.get(m))!==void 0&&!k;){var A=D.get(t);if(O+=1,A!==void 0){if(A===O)throw RangeError(`Cyclic object value`);k=!0}D.get(m)===void 0&&(O=0)}if(typeof _==`function`?E=_(i,E):E instanceof Date?E=b(E):a===`comma`&&s(E)&&(E=r.maybeMap(E,function(e){return e instanceof Date?b(e):e})),E===null){if(u)return g&&!C?g(i,f.encoder,w,`key`,x):i;E=``}if(p(E)||r.isBuffer(E))return g?[S(C?i:g(i,f.encoder,w,`key`,x))+`=`+S(g(E,f.encoder,w,`value`,x))]:[S(i)+`=`+S(String(E))];var j=[];if(E===void 0)return j;var M;if(a===`comma`&&s(E))C&&g&&(E=r.maybeMap(E,g)),M=[{value:E.length>0?E.join(`,`)||null:void 0}];else if(s(_))M=_;else{var N=Object.keys(E);M=v?N.sort(v):N}var P=h?String(i).replace(/\./g,`%2E`):String(i),F=o&&s(E)&&E.length===1?P+`[]`:P;if(c&&s(E)&&E.length===0)return F+`[]`;for(var I=0;I<M.length;++I){var L=M[I],R=typeof L==`object`&&L&&L.value!==void 0?L.value:E[L];if(!(d&&R===null)){var z=y&&h?String(L).replace(/\./g,`%2E`):String(L),B=s(E)?typeof a==`function`?a(F,z):F:F+(y?`.`+z:`[`+z+`]`);T.set(t,O);var V=n();V.set(m,T),l(j,e(R,B,a,o,c,u,d,h,a===`comma`&&C&&s(E)?null:g,_,v,y,b,x,S,C,w,V))}}return j},g=function(e){if(!e)return f;if(e.allowEmptyArrays!==void 0&&typeof e.allowEmptyArrays!=`boolean`)throw TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");if(e.encodeDotInKeys!==void 0&&typeof e.encodeDotInKeys!=`boolean`)throw TypeError("`encodeDotInKeys` option can only be `true` or `false`, when provided");if(e.encoder!==null&&e.encoder!==void 0&&typeof e.encoder!=`function`)throw TypeError(`Encoder has to be a function.`);var t=e.charset||f.charset;if(e.charset!==void 0&&e.charset!==`utf-8`&&e.charset!==`iso-8859-1`)throw TypeError(`The charset option must be either utf-8, iso-8859-1, or undefined`);var n=i.default;if(e.format!==void 0){if(!a.call(i.formatters,e.format))throw TypeError(`Unknown format option provided.`);n=e.format}var r=i.formatters[n],c=f.filter;(typeof e.filter==`function`||s(e.filter))&&(c=e.filter);var l=e.arrayFormat in o?e.arrayFormat:`indices`in e?e.indices?`indices`:`repeat`:f.arrayFormat;if(`commaRoundTrip`in e&&typeof e.commaRoundTrip!=`boolean`)throw TypeError("`commaRoundTrip` must be a boolean, or absent");var u=e.allowDots===void 0?e.encodeDotInKeys===!0?!0:f.allowDots:!!e.allowDots;return{addQueryPrefix:typeof e.addQueryPrefix==`boolean`?e.addQueryPrefix:f.addQueryPrefix,allowDots:u,allowEmptyArrays:typeof e.allowEmptyArrays==`boolean`?!!e.allowEmptyArrays:f.allowEmptyArrays,arrayFormat:l,charset:t,charsetSentinel:typeof e.charsetSentinel==`boolean`?e.charsetSentinel:f.charsetSentinel,commaRoundTrip:!!e.commaRoundTrip,delimiter:e.delimiter===void 0?f.delimiter:e.delimiter,encode:typeof e.encode==`boolean`?e.encode:f.encode,encodeDotInKeys:typeof e.encodeDotInKeys==`boolean`?e.encodeDotInKeys:f.encodeDotInKeys,encoder:typeof e.encoder==`function`?e.encoder:f.encoder,encodeValuesOnly:typeof e.encodeValuesOnly==`boolean`?e.encodeValuesOnly:f.encodeValuesOnly,filter:c,format:n,formatter:r,serializeDate:typeof e.serializeDate==`function`?e.serializeDate:f.serializeDate,skipNulls:typeof e.skipNulls==`boolean`?e.skipNulls:f.skipNulls,sort:typeof e.sort==`function`?e.sort:null,strictNullHandling:typeof e.strictNullHandling==`boolean`?e.strictNullHandling:f.strictNullHandling}};t.exports=function(e,t){var r=e,i=g(t),a,c;typeof i.filter==`function`?(c=i.filter,r=c(``,r)):s(i.filter)&&(c=i.filter,a=c);var u=[];if(typeof r!=`object`||!r)return``;var d=o[i.arrayFormat],f=d===`comma`&&i.commaRoundTrip;a||=Object.keys(r),i.sort&&a.sort(i.sort);for(var p=n(),m=0;m<a.length;++m){var _=a[m],v=r[_];i.skipNulls&&v===null||l(u,h(v,_,d,f,i.allowEmptyArrays,i.strictNullHandling,i.skipNulls,i.encodeDotInKeys,i.encode?i.encoder:null,i.filter,i.sort,i.allowDots,i.serializeDate,i.format,i.formatter,i.encodeValuesOnly,i.charset,p))}var y=u.join(i.delimiter),b=i.addQueryPrefix===!0?`?`:``;return i.charsetSentinel&&(i.charset===`iso-8859-1`?b+=`utf8=%26%2310003%3B&`:b+=`utf8=%E2%9C%93&`),y.length>0?b+y:``}})),rd=i(((e,t)=>{var n=td(),r=Object.prototype.hasOwnProperty,i=Array.isArray,a={allowDots:!1,allowEmptyArrays:!1,allowPrototypes:!1,allowSparse:!1,arrayLimit:20,charset:`utf-8`,charsetSentinel:!1,comma:!1,decodeDotInKeys:!1,decoder:n.decode,delimiter:`&`,depth:5,duplicates:`combine`,ignoreQueryPrefix:!1,interpretNumericEntities:!1,parameterLimit:1e3,parseArrays:!0,plainObjects:!1,strictDepth:!1,strictMerge:!0,strictNullHandling:!1,throwOnLimitExceeded:!1},o=function(e){return e.replace(/&#(\d+);/g,function(e,t){return String.fromCharCode(parseInt(t,10))})},s=function(e,t,n){if(e&&typeof e==`string`&&t.comma&&e.indexOf(`,`)>-1)return e.split(`,`);if(t.throwOnLimitExceeded&&n>=t.arrayLimit)throw RangeError(`Array limit exceeded. Only `+t.arrayLimit+` element`+(t.arrayLimit===1?``:`s`)+` allowed in an array.`);return e},c=`utf8=%26%2310003%3B`,l=`utf8=%E2%9C%93`,u=function(e,t){var u={__proto__:null},d=t.ignoreQueryPrefix?e.replace(/^\?/,``):e;d=d.replace(/%5B/gi,`[`).replace(/%5D/gi,`]`);var f=t.parameterLimit===1/0?void 0:t.parameterLimit,p=d.split(t.delimiter,t.throwOnLimitExceeded&&f!==void 0?f+1:f);if(t.throwOnLimitExceeded&&f!==void 0&&p.length>f)throw RangeError(`Parameter limit exceeded. Only `+f+` parameter`+(f===1?``:`s`)+` allowed.`);var m=-1,h,g=t.charset;if(t.charsetSentinel)for(h=0;h<p.length;++h)p[h].indexOf(`utf8=`)===0&&(p[h]===l?g=`utf-8`:p[h]===c&&(g=`iso-8859-1`),m=h,h=p.length);for(h=0;h<p.length;++h)if(h!==m){var _=p[h],v=_.indexOf(`]=`),y=v===-1?_.indexOf(`=`):v+1,b,x;if(y===-1?(b=t.decoder(_,a.decoder,g,`key`),x=t.strictNullHandling?null:``):(b=t.decoder(_.slice(0,y),a.decoder,g,`key`),b!==null&&(x=n.maybeMap(s(_.slice(y+1),t,i(u[b])?u[b].length:0),function(e){return t.decoder(e,a.decoder,g,`value`)}))),x&&t.interpretNumericEntities&&g===`iso-8859-1`&&(x=o(String(x))),_.indexOf(`[]=`)>-1&&(x=i(x)?[x]:x),t.comma&&i(x)&&x.length>t.arrayLimit){if(t.throwOnLimitExceeded)throw RangeError(`Array limit exceeded. Only `+t.arrayLimit+` element`+(t.arrayLimit===1?``:`s`)+` allowed in an array.`);x=n.combine([],x,t.arrayLimit,t.plainObjects)}if(b!==null){var S=r.call(u,b);S&&(t.duplicates===`combine`||_.indexOf(`[]=`)>-1)?u[b]=n.combine(u[b],x,t.arrayLimit,t.plainObjects):(!S||t.duplicates===`last`)&&(u[b]=x)}}return u},d=function(e,t,r,i){var a=0;if(e.length>0&&e[e.length-1]===`[]`){var o=e.slice(0,-1).join(``);a=Array.isArray(t)&&t[o]?t[o].length:0}for(var c=i?t:s(t,r,a),l=e.length-1;l>=0;--l){var u,d=e[l];if(d===`[]`&&r.parseArrays)u=n.isOverflow(c)?c:r.allowEmptyArrays&&(c===``||r.strictNullHandling&&c===null)?[]:n.combine([],c,r.arrayLimit,r.plainObjects);else{u=r.plainObjects?{__proto__:null}:{};var f=d.charAt(0)===`[`&&d.charAt(d.length-1)===`]`?d.slice(1,-1):d,p=r.decodeDotInKeys?f.replace(/%2E/g,`.`):f,m=parseInt(p,10),h=!isNaN(m)&&d!==p&&String(m)===p&&m>=0&&r.parseArrays;if(!r.parseArrays&&p===``)u={0:c};else if(h&&m<r.arrayLimit)u=[],u[m]=c;else if(h&&r.throwOnLimitExceeded)throw RangeError(`Array limit exceeded. Only `+r.arrayLimit+` element`+(r.arrayLimit===1?``:`s`)+` allowed in an array.`);else h?(u[m]=c,n.markOverflow(u,m)):p!==`__proto__`&&(u[p]=c)}c=u}return c},f=function(e,t){var n=t.allowDots?e.replace(/\.([^.[]+)/g,`[$1]`):e;if(t.depth<=0)return!t.plainObjects&&r.call(Object.prototype,n)&&!t.allowPrototypes?void 0:[n];var i=/(\[[^[\]]*])/,a=/(\[[^[\]]*])/g,o=i.exec(n),s=o?n.slice(0,o.index):n,c=[];if(s){if(!t.plainObjects&&r.call(Object.prototype,s)&&!t.allowPrototypes)return;c[c.length]=s}for(var l=0;(o=a.exec(n))!==null&&l<t.depth;){l+=1;var u=o[1].slice(1,-1);if(!t.plainObjects&&r.call(Object.prototype,u)&&!t.allowPrototypes)return;c[c.length]=o[1]}if(o){if(t.strictDepth===!0)throw RangeError(`Input depth exceeded depth option of `+t.depth+` and strictDepth is true`);c[c.length]=`[`+n.slice(o.index)+`]`}return c},p=function(e,t,n,r){if(e){var i=f(e,n);if(i)return d(i,t,n,r)}},m=function(e){if(!e)return a;if(e.allowEmptyArrays!==void 0&&typeof e.allowEmptyArrays!=`boolean`)throw TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");if(e.decodeDotInKeys!==void 0&&typeof e.decodeDotInKeys!=`boolean`)throw TypeError("`decodeDotInKeys` option can only be `true` or `false`, when provided");if(e.decoder!==null&&e.decoder!==void 0&&typeof e.decoder!=`function`)throw TypeError(`Decoder has to be a function.`);if(e.charset!==void 0&&e.charset!==`utf-8`&&e.charset!==`iso-8859-1`)throw TypeError(`The charset option must be either utf-8, iso-8859-1, or undefined`);if(e.throwOnLimitExceeded!==void 0&&typeof e.throwOnLimitExceeded!=`boolean`)throw TypeError("`throwOnLimitExceeded` option must be a boolean");var t=e.charset===void 0?a.charset:e.charset,r=e.duplicates===void 0?a.duplicates:e.duplicates;if(r!==`combine`&&r!==`first`&&r!==`last`)throw TypeError(`The duplicates option must be either combine, first, or last`);return{allowDots:e.allowDots===void 0?e.decodeDotInKeys===!0?!0:a.allowDots:!!e.allowDots,allowEmptyArrays:typeof e.allowEmptyArrays==`boolean`?!!e.allowEmptyArrays:a.allowEmptyArrays,allowPrototypes:typeof e.allowPrototypes==`boolean`?e.allowPrototypes:a.allowPrototypes,allowSparse:typeof e.allowSparse==`boolean`?e.allowSparse:a.allowSparse,arrayLimit:typeof e.arrayLimit==`number`?e.arrayLimit:a.arrayLimit,charset:t,charsetSentinel:typeof e.charsetSentinel==`boolean`?e.charsetSentinel:a.charsetSentinel,comma:typeof e.comma==`boolean`?e.comma:a.comma,decodeDotInKeys:typeof e.decodeDotInKeys==`boolean`?e.decodeDotInKeys:a.decodeDotInKeys,decoder:typeof e.decoder==`function`?e.decoder:a.decoder,delimiter:typeof e.delimiter==`string`||n.isRegExp(e.delimiter)?e.delimiter:a.delimiter,depth:typeof e.depth==`number`||e.depth===!1?+e.depth:a.depth,duplicates:r,ignoreQueryPrefix:e.ignoreQueryPrefix===!0,interpretNumericEntities:typeof e.interpretNumericEntities==`boolean`?e.interpretNumericEntities:a.interpretNumericEntities,parameterLimit:typeof e.parameterLimit==`number`?e.parameterLimit:a.parameterLimit,parseArrays:e.parseArrays!==!1,plainObjects:typeof e.plainObjects==`boolean`?e.plainObjects:a.plainObjects,strictDepth:typeof e.strictDepth==`boolean`?!!e.strictDepth:a.strictDepth,strictMerge:typeof e.strictMerge==`boolean`?!!e.strictMerge:a.strictMerge,strictNullHandling:typeof e.strictNullHandling==`boolean`?e.strictNullHandling:a.strictNullHandling,throwOnLimitExceeded:typeof e.throwOnLimitExceeded==`boolean`?e.throwOnLimitExceeded:!1}};t.exports=function(e,t){var r=m(t);if(e===``||e==null)return r.plainObjects?{__proto__:null}:{};for(var i=typeof e==`string`?u(e,r):e,a=r.plainObjects?{__proto__:null}:{},o=Object.keys(i),s=0;s<o.length;++s){var c=o[s],l=p(c,i[c],r,typeof e==`string`);a=n.merge(a,l,r)}return r.allowSparse===!0?a:n.compact(a)}})),id=i(((e,t)=>{var n=nd(),r=rd();t.exports={formats:ed(),parse:r,stringify:n}})),ad=i((e=>{var t=fu();function n(){this.protocol=null,this.slashes=null,this.auth=null,this.host=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.query=null,this.pathname=null,this.path=null,this.href=null}var r=/^([a-z0-9.+-]+:)/i,i=/:[0-9]*$/,a=/^(\/\/?(?!\/)[^?\s]*)(\?[^\s]*)?$/,o=[`'`,`{`,`}`,`|`,`\\`,`^`,"`",`<`,`>`,`"`,"`",` `,`\r`,`
`,`	`],s=[`%`,`/`,`?`,`;`,`#`].concat(o),c=[`/`,`?`,`#`],l=255,u=/^[+a-z0-9A-Z_-]{0,63}$/,d=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,f={javascript:!0,"javascript:":!0},p={javascript:!0,"javascript:":!0},m={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0},h=id();function g(e,t,r){if(e&&typeof e==`object`&&e instanceof n)return e;var i=new n;return i.parse(e,t,r),i}n.prototype.parse=function(e,n,i){if(typeof e!=`string`)throw TypeError(`Parameter 'url' must be a string, not `+typeof e);var g=e.indexOf(`?`),_=g!==-1&&g<e.indexOf(`#`)?`?`:`#`,v=e.split(_);v[0]=v[0].replace(/\\/g,`/`),e=v.join(_);var y=e;if(y=y.trim(),!i&&e.split(`#`).length===1){var b=a.exec(y);if(b)return this.path=y,this.href=y,this.pathname=b[1],b[2]?(this.search=b[2],n?this.query=h.parse(this.search.substr(1)):this.query=this.search.substr(1)):n&&(this.search=``,this.query={}),this}var x=r.exec(y);if(x){x=x[0];var S=x.toLowerCase();this.protocol=S,y=y.substr(x.length)}if(i||x||y.match(/^\/\/[^@/]+@[^@/]+/)){var C=y.substr(0,2)===`//`;C&&!(x&&p[x])&&(y=y.substr(2),this.slashes=!0)}if(!p[x]&&(C||x&&!m[x])){for(var w=-1,T=0;T<c.length;T++){var E=y.indexOf(c[T]);E!==-1&&(w===-1||E<w)&&(w=E)}var D,O=w===-1?y.lastIndexOf(`@`):y.lastIndexOf(`@`,w);O!==-1&&(D=y.slice(0,O),y=y.slice(O+1),this.auth=decodeURIComponent(D)),w=-1;for(var T=0;T<s.length;T++){var E=y.indexOf(s[T]);E!==-1&&(w===-1||E<w)&&(w=E)}w===-1&&(w=y.length),this.host=y.slice(0,w),y=y.slice(w),this.parseHost(),this.hostname=this.hostname||``;var k=this.hostname[0]===`[`&&this.hostname[this.hostname.length-1]===`]`;if(!k)for(var A=this.hostname.split(/\./),T=0,j=A.length;T<j;T++){var M=A[T];if(M&&!M.match(u)){for(var N=``,P=0,F=M.length;P<F;P++)M.charCodeAt(P)>127?N+=`x`:N+=M[P];if(!N.match(u)){var I=A.slice(0,T),L=A.slice(T+1),R=M.match(d);R&&(I.push(R[1]),L.unshift(R[2])),L.length&&(y=`/`+L.join(`.`)+y),this.hostname=I.join(`.`);break}}}this.hostname.length>l?this.hostname=``:this.hostname=this.hostname.toLowerCase(),k||(this.hostname=t.toASCII(this.hostname));var z=this.port?`:`+this.port:``,B=this.hostname||``;this.host=B+z,this.href+=this.host,k&&(this.hostname=this.hostname.substr(1,this.hostname.length-2),y[0]!==`/`&&(y=`/`+y))}if(!f[S])for(var T=0,j=o.length;T<j;T++){var V=o[T];if(y.indexOf(V)!==-1){var H=encodeURIComponent(V);H===V&&(H=escape(V)),y=y.split(V).join(H)}}var U=y.indexOf(`#`);U!==-1&&(this.hash=y.substr(U),y=y.slice(0,U));var W=y.indexOf(`?`);if(W===-1?n&&(this.search=``,this.query={}):(this.search=y.substr(W),this.query=y.substr(W+1),n&&(this.query=h.parse(this.query)),y=y.slice(0,W)),y&&(this.pathname=y),m[S]&&this.hostname&&!this.pathname&&(this.pathname=`/`),this.pathname||this.search){var z=this.pathname||``,ee=this.search||``;this.path=z+ee}return this.href=this.format(),this};function _(e){return typeof e==`string`&&(e=g(e)),e instanceof n?e.format():n.prototype.format.call(e)}n.prototype.format=function(){var e=this.auth||``;e&&(e=encodeURIComponent(e),e=e.replace(/%3A/i,`:`),e+=`@`);var t=this.protocol||``,n=this.pathname||``,r=this.hash||``,i=!1,a=``;this.host?i=e+this.host:this.hostname&&(i=e+(this.hostname.indexOf(`:`)===-1?this.hostname:`[`+this.hostname+`]`),this.port&&(i+=`:`+this.port)),this.query&&typeof this.query==`object`&&Object.keys(this.query).length&&(a=h.stringify(this.query,{arrayFormat:`repeat`,addQueryPrefix:!1}));var o=this.search||a&&`?`+a||``;return t&&t.substr(-1)!==`:`&&(t+=`:`),this.slashes||(!t||m[t])&&i!==!1?(i=`//`+(i||``),n&&n.charAt(0)!==`/`&&(n=`/`+n)):i||=``,r&&r.charAt(0)!==`#`&&(r=`#`+r),o&&o.charAt(0)!==`?`&&(o=`?`+o),n=n.replace(/[?#]/g,function(e){return encodeURIComponent(e)}),o=o.replace(`#`,`%23`),t+i+n+o+r};function v(e,t){return g(e,!1,!0).resolve(t)}n.prototype.resolve=function(e){return this.resolveObject(g(e,!1,!0)).format()};function y(e,t){return e?g(e,!1,!0).resolveObject(t):t}n.prototype.resolveObject=function(e){if(typeof e==`string`){var t=new n;t.parse(e,!1,!0),e=t}for(var r=new n,i=Object.keys(this),a=0;a<i.length;a++){var o=i[a];r[o]=this[o]}if(r.hash=e.hash,e.href===``)return r.href=r.format(),r;if(e.slashes&&!e.protocol){for(var s=Object.keys(e),c=0;c<s.length;c++){var l=s[c];l!==`protocol`&&(r[l]=e[l])}return m[r.protocol]&&r.hostname&&!r.pathname&&(r.pathname=`/`,r.path=r.pathname),r.href=r.format(),r}if(e.protocol&&e.protocol!==r.protocol){if(!m[e.protocol]){for(var u=Object.keys(e),d=0;d<u.length;d++){var f=u[d];r[f]=e[f]}return r.href=r.format(),r}if(r.protocol=e.protocol,!e.host&&!p[e.protocol]){for(var h=(e.pathname||``).split(`/`);h.length&&!(e.host=h.shift()););e.host||=``,e.hostname||=``,h[0]!==``&&h.unshift(``),h.length<2&&h.unshift(``),r.pathname=h.join(`/`)}else r.pathname=e.pathname;return r.search=e.search,r.query=e.query,r.host=e.host||``,r.auth=e.auth,r.hostname=e.hostname||e.host,r.port=e.port,(r.pathname||r.search)&&(r.path=(r.pathname||``)+(r.search||``)),r.slashes=r.slashes||e.slashes,r.href=r.format(),r}var g=r.pathname&&r.pathname.charAt(0)===`/`,_=e.host||e.pathname&&e.pathname.charAt(0)===`/`,v=_||g||r.host&&e.pathname,y=v,b=r.pathname&&r.pathname.split(`/`)||[],h=e.pathname&&e.pathname.split(`/`)||[],x=r.protocol&&!m[r.protocol];if(x&&(r.hostname=``,r.port=null,r.host&&(b[0]===``?b[0]=r.host:b.unshift(r.host)),r.host=``,e.protocol&&(e.hostname=null,e.port=null,e.host&&(h[0]===``?h[0]=e.host:h.unshift(e.host)),e.host=null),v&&=h[0]===``||b[0]===``),_)r.host=e.host||e.host===``?e.host:r.host,r.hostname=e.hostname||e.hostname===``?e.hostname:r.hostname,r.search=e.search,r.query=e.query,b=h;else if(h.length)b||=[],b.pop(),b=b.concat(h),r.search=e.search,r.query=e.query;else if(e.search!=null){if(x){r.host=b.shift(),r.hostname=r.host;var S=r.host&&r.host.indexOf(`@`)>0?r.host.split(`@`):!1;S&&(r.auth=S.shift(),r.hostname=S.shift(),r.host=r.hostname)}return r.search=e.search,r.query=e.query,(r.pathname!==null||r.search!==null)&&(r.path=(r.pathname?r.pathname:``)+(r.search?r.search:``)),r.href=r.format(),r}if(!b.length)return r.pathname=null,r.search?r.path=`/`+r.search:r.path=null,r.href=r.format(),r;for(var C=b.slice(-1)[0],w=(r.host||e.host||b.length>1)&&(C===`.`||C===`..`)||C===``,T=0,E=b.length;E>=0;E--)C=b[E],C===`.`?b.splice(E,1):C===`..`?(b.splice(E,1),T++):T&&(b.splice(E,1),T--);if(!v&&!y)for(;T--;)b.unshift(`..`);v&&b[0]!==``&&(!b[0]||b[0].charAt(0)!==`/`)&&b.unshift(``),w&&b.join(`/`).substr(-1)!==`/`&&b.push(``);var D=b[0]===``||b[0]&&b[0].charAt(0)===`/`;if(x){r.hostname=D?``:b.length?b.shift():``,r.host=r.hostname;var S=r.host&&r.host.indexOf(`@`)>0?r.host.split(`@`):!1;S&&(r.auth=S.shift(),r.hostname=S.shift(),r.host=r.hostname)}return v||=r.host&&b.length,v&&!D&&b.unshift(``),b.length>0?r.pathname=b.join(`/`):(r.pathname=null,r.path=null),(r.pathname!==null||r.search!==null)&&(r.path=(r.pathname?r.pathname:``)+(r.search?r.search:``)),r.auth=e.auth||r.auth,r.slashes=r.slashes||e.slashes,r.href=r.format(),r},n.prototype.parseHost=function(){var e=this.host,t=i.exec(e);t&&(t=t[0],t!==`:`&&(this.port=t.substr(1)),e=e.substr(0,e.length-t.length)),e&&(this.hostname=e)},e.parse=g,e.resolve=v,e.resolveObject=y,e.format=_,e.Url=n})),od=i(((e,t)=>{var n=ad();t.exports=function(e,t,r,i){e.addKeyword({keyword:t,macro:function(t,i,a){var o=t.source,s=t.with;return o.$ref&&(o=JSON.parse(JSON.stringify(c(o.$ref)))),s.$ref&&(s=c(s.$ref)),r.call(null,o,s,!0),o;function c(t){var r=a.baseId&&a.baseId!=`#`?n.resolve(a.baseId,t):t,i=e.getSchema(r);if(i)return i.schema;throw new e.constructor.MissingRefError(a.baseId,t)}},metaSchema:{type:`object`,required:[`source`,`with`],additionalProperties:!1,properties:{source:{anyOf:[{type:`object`,required:[`$ref`],additionalProperties:!1,properties:{$ref:{type:`string`,format:`uri`}}},{$ref:`http://json-schema.org/draft-07/schema#`}]},with:i}}})}})),sd=i(((e,t)=>{t.exports.serialize=function(e){return e&&typeof e.toJSON==`function`?e.toJSON():e}})),cd=i(((e,t)=>{var n=sd().serialize;t.exports=function e(t,r){if(r=n(r),typeof r!=`object`||!r||Array.isArray(r))return r;t=n(t),(typeof t!=`object`||!t||Array.isArray(t))&&(t={});for(var i=Object.keys(r),a=0;a<i.length;a++){var o=i[a];if(o===`__proto__`||o===`constructor`||o===`prototype`)return t;r[o]===null?t.hasOwnProperty(o)&&delete t[o]:t[o]=e(t[o],r[o])}return t}})),ld=i(((e,t)=>{var n=Lc(),r=sd().serialize;function i(e,t){if(e.length!==t.length)return!1;for(var r=0;r<e.length;r++)if(!n(t[r],e[r]))return!1;return!0}t.exports=function e(t,n){if(t=r(t),n=r(n),t===null||n===null||typeof t!=`object`||typeof n!=`object`||Array.isArray(t)!==Array.isArray(n))return n;if(Array.isArray(t))return i(t,n)?void 0:n;var a={},o=Object.keys(t),s=Object.keys(n),c,l,u={};for(l=0;l<s.length;l++)c=s[l],o.indexOf(c)===-1&&(u[c]=!0,a[c]=r(n[c]));var d={};for(l=0;l<o.length;l++)if(c=o[l],s.indexOf(c)===-1)d[c]=!0,a[c]=null;else if(t[c]!==null&&typeof t[c]==`object`){var f=e(t[c],n[c]);f!==void 0&&(a[c]=f)}else t[c]!==n[c]&&(a[c]=r(n[c]));return Object.keys(a).length>0?a:void 0}})),ud=i(((e,t)=>{t.exports=function e(t,n){if(t===null||n===null||typeof t!=`object`||typeof n!=`object`||Array.isArray(t)!==Array.isArray(n))return n;var r=JSON.parse(JSON.stringify(t));return Object.keys(n).forEach(function(i){t[i]===void 0?r[i]=n[i]:r[i]=e(t[i],n[i])}),r}})),dd=i(((e,t)=>{t.exports.apply=cd(),t.exports.generate=ld(),t.exports.merge=ud()})),fd=i(((e,t)=>{var n=od(),r=dd();t.exports=function(e){n(e,`$merge`,r.apply,{type:`object`})}})),pd=i((e=>{var t=e&&e.__extends||(function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},e(t,n)};return function(t,n){e(t,n);function r(){this.constructor=t}t.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}})();Object.defineProperty(e,`__esModule`,{value:!0});var n=Object.prototype.hasOwnProperty;function r(e,t){return n.call(e,t)}e.hasOwnProperty=r;function i(e){if(Array.isArray(e)){for(var t=Array(e.length),n=0;n<t.length;n++)t[n]=``+n;return t}if(Object.keys)return Object.keys(e);var t=[];for(var i in e)r(e,i)&&t.push(i);return t}e._objectKeys=i;function a(e){switch(typeof e){case`object`:return JSON.parse(JSON.stringify(e));case`undefined`:return null;default:return e}}e._deepClone=a;function o(e){for(var t=0,n=e.length,r;t<n;){if(r=e.charCodeAt(t),r>=48&&r<=57){t++;continue}return!1}return!0}e.isInteger=o;function s(e){return e.indexOf(`/`)===-1&&e.indexOf(`~`)===-1?e:e.replace(/~/g,`~0`).replace(/\//g,`~1`)}e.escapePathComponent=s;function c(e){return e.replace(/~1/g,`/`).replace(/~0/g,`~`)}e.unescapePathComponent=c;function l(e,t){var n;for(var i in e)if(r(e,i)){if(e[i]===t)return s(i)+`/`;if(typeof e[i]==`object`&&(n=l(e[i],t),n!=``))return s(i)+`/`+n}return``}e._getPathRecursive=l;function u(e,t){if(e===t)return`/`;var n=l(e,t);if(n===``)throw Error(`Object not found in root`);return`/`+n}e.getPath=u;function d(e){if(e===void 0)return!0;if(e){if(Array.isArray(e)){for(var t=0,n=e.length;t<n;t++)if(d(e[t]))return!0}else if(typeof e==`object`){for(var r=i(e),a=r.length,t=0;t<a;t++)if(d(e[r[t]]))return!0}}return!1}e.hasUndefined=d;function f(e,t){var n=[e];for(var r in t){var i=typeof t[r]==`object`?JSON.stringify(t[r],null,2):t[r];i!==void 0&&n.push(r+`: `+i)}return n.join(`
`)}e.PatchError=function(e){t(n,e);function n(t,n,r,i,a){var o=this.constructor,s=e.call(this,f(t,{name:n,index:r,operation:i,tree:a}))||this;return s.name=n,s.index=r,s.operation=i,s.tree=a,Object.setPrototypeOf(s,o.prototype),s.message=f(t,{name:n,index:r,operation:i,tree:a}),s}return n}(Error)})),md=i(((e,t)=>{var n=Array.isArray,r=Object.keys,i=Object.prototype.hasOwnProperty;t.exports=function e(t,a){if(t===a)return!0;if(t&&a&&typeof t==`object`&&typeof a==`object`){var o=n(t),s=n(a),c,l,u;if(o&&s){if(l=t.length,l!=a.length)return!1;for(c=l;c--!==0;)if(!e(t[c],a[c]))return!1;return!0}if(o!=s)return!1;var d=t instanceof Date,f=a instanceof Date;if(d!=f)return!1;if(d&&f)return t.getTime()==a.getTime();var p=t instanceof RegExp,m=a instanceof RegExp;if(p!=m)return!1;if(p&&m)return t.toString()==a.toString();var h=r(t);if(l=h.length,l!==r(a).length)return!1;for(c=l;c--!==0;)if(!i.call(a,h[c]))return!1;for(c=l;c--!==0;)if(u=h[c],!e(t[u],a[u]))return!1;return!0}return t!==t&&a!==a}})),hd=i((e=>{Object.defineProperty(e,`__esModule`,{value:!0});var t=md(),n=pd();e.JsonPatchError=n.PatchError,e.deepClone=n._deepClone;var r={add:function(e,t,n){return e[t]=this.value,{newDocument:n}},remove:function(e,t,n){var r=e[t];return delete e[t],{newDocument:n,removed:r}},replace:function(e,t,n){var r=e[t];return e[t]=this.value,{newDocument:n,removed:r}},move:function(e,t,r){var i=a(r,this.path);i&&=n._deepClone(i);var s=o(r,{op:`remove`,path:this.from}).removed;return o(r,{op:`add`,path:this.path,value:s}),{newDocument:r,removed:i}},copy:function(e,t,r){var i=a(r,this.from);return o(r,{op:`add`,path:this.path,value:n._deepClone(i)}),{newDocument:r}},test:function(e,n,r){return{newDocument:r,test:t(e[n],this.value)}},_get:function(e,t,n){return this.value=e[t],{newDocument:n}}},i={add:function(e,t,r){return n.isInteger(t)?e.splice(t,0,this.value):e[t]=this.value,{newDocument:r,index:t}},remove:function(e,t,n){return{newDocument:n,removed:e.splice(t,1)[0]}},replace:function(e,t,n){var r=e[t];return e[t]=this.value,{newDocument:n,removed:r}},move:r.move,copy:r.copy,test:r.test,_get:r._get};function a(e,t){if(t==``)return e;var n={op:`_get`,path:t};return o(e,n),n.value}e.getValueByPointer=a;function o(o,s,c,u,d,f){if(c===void 0&&(c=!1),u===void 0&&(u=!0),d===void 0&&(d=!0),f===void 0&&(f=0),c&&(typeof c==`function`?c(s,0,o,s.path):l(s,0)),s.path===``){var p={newDocument:o};if(s.op===`add`)return p.newDocument=s.value,p;if(s.op===`replace`)return p.newDocument=s.value,p.removed=o,p;if(s.op===`move`||s.op===`copy`)return p.newDocument=a(o,s.from),s.op===`move`&&(p.removed=o),p;if(s.op===`test`){if(p.test=t(o,s.value),p.test===!1)throw new e.JsonPatchError(`Test operation failed`,`TEST_OPERATION_FAILED`,f,s,o);return p.newDocument=o,p}else if(s.op===`remove`)return p.removed=o,p.newDocument=null,p;else if(s.op===`_get`)return s.value=o,p;else if(c)throw new e.JsonPatchError("Operation `op` property is not one of operations defined in RFC-6902",`OPERATION_OP_INVALID`,f,s,o);else return p}else{u||(o=n._deepClone(o));var m=(s.path||``).split(`/`),h=o,g=1,_=m.length,v=void 0,y=void 0,b=void 0;for(b=typeof c==`function`?c:l;;){if(y=m[g],d&&y==`__proto__`)throw TypeError("JSON-Patch: modifying `__proto__` prop is banned for security reasons, if this was on purpose, please set `banPrototypeModifications` flag false and pass it to this function. More info in fast-json-patch README");if(c&&v===void 0&&(h[y]===void 0?v=m.slice(0,g).join(`/`):g==_-1&&(v=s.path),v!==void 0&&b(s,0,o,v)),g++,Array.isArray(h)){if(y===`-`)y=h.length;else if(c&&!n.isInteger(y))throw new e.JsonPatchError(`Expected an unsigned base-10 integer value, making the new referenced value the array element with the zero-based index`,`OPERATION_PATH_ILLEGAL_ARRAY_INDEX`,f,s,o);else n.isInteger(y)&&(y=~~y);if(g>=_){if(c&&s.op===`add`&&y>h.length)throw new e.JsonPatchError(`The specified index MUST NOT be greater than the number of elements in the array`,`OPERATION_VALUE_OUT_OF_BOUNDS`,f,s,o);var p=i[s.op].call(s,h,y,o);if(p.test===!1)throw new e.JsonPatchError(`Test operation failed`,`TEST_OPERATION_FAILED`,f,s,o);return p}}else if(y&&y.indexOf(`~`)!=-1&&(y=n.unescapePathComponent(y)),g>=_){var p=r[s.op].call(s,h,y,o);if(p.test===!1)throw new e.JsonPatchError(`Test operation failed`,`TEST_OPERATION_FAILED`,f,s,o);return p}h=h[y]}}}e.applyOperation=o;function s(t,r,i,a,s){if(a===void 0&&(a=!0),s===void 0&&(s=!0),i&&!Array.isArray(r))throw new e.JsonPatchError(`Patch sequence must be an array`,`SEQUENCE_NOT_AN_ARRAY`);a||(t=n._deepClone(t));for(var c=Array(r.length),l=0,u=r.length;l<u;l++)c[l]=o(t,r[l],i,!0,s,l),t=c[l].newDocument;return c.newDocument=t,c}e.applyPatch=s;function c(t,n,r){var i=o(t,n);if(i.test===!1)throw new e.JsonPatchError(`Test operation failed`,`TEST_OPERATION_FAILED`,r,n,t);return i.newDocument}e.applyReducer=c;function l(t,i,a,o){if(typeof t!=`object`||!t||Array.isArray(t))throw new e.JsonPatchError(`Operation is not an object`,`OPERATION_NOT_AN_OBJECT`,i,t,a);if(!r[t.op])throw new e.JsonPatchError("Operation `op` property is not one of operations defined in RFC-6902",`OPERATION_OP_INVALID`,i,t,a);if(typeof t.path!=`string`)throw new e.JsonPatchError("Operation `path` property is not a string",`OPERATION_PATH_INVALID`,i,t,a);if(t.path.indexOf(`/`)!==0&&t.path.length>0)throw new e.JsonPatchError('Operation `path` property must start with "/"',`OPERATION_PATH_INVALID`,i,t,a);if((t.op===`move`||t.op===`copy`)&&typeof t.from!=`string`)throw new e.JsonPatchError("Operation `from` property is not present (applicable in `move` and `copy` operations)",`OPERATION_FROM_REQUIRED`,i,t,a);if((t.op===`add`||t.op===`replace`||t.op===`test`)&&t.value===void 0)throw new e.JsonPatchError("Operation `value` property is not present (applicable in `add`, `replace` and `test` operations)",`OPERATION_VALUE_REQUIRED`,i,t,a);if((t.op===`add`||t.op===`replace`||t.op===`test`)&&n.hasUndefined(t.value))throw new e.JsonPatchError("Operation `value` property is not present (applicable in `add`, `replace` and `test` operations)",`OPERATION_VALUE_CANNOT_CONTAIN_UNDEFINED`,i,t,a);if(a){if(t.op==`add`){var s=t.path.split(`/`).length,c=o.split(`/`).length;if(s!==c+1&&s!==c)throw new e.JsonPatchError("Cannot perform an `add` operation at the desired path",`OPERATION_PATH_CANNOT_ADD`,i,t,a)}else if(t.op===`replace`||t.op===`remove`||t.op===`_get`){if(t.path!==o)throw new e.JsonPatchError(`Cannot perform the operation at a path that does not exist`,`OPERATION_PATH_UNRESOLVABLE`,i,t,a)}else if(t.op===`move`||t.op===`copy`){var l=u([{op:`_get`,path:t.from,value:void 0}],a);if(l&&l.name===`OPERATION_PATH_UNRESOLVABLE`)throw new e.JsonPatchError(`Cannot perform the operation from a path that does not exist`,`OPERATION_FROM_UNRESOLVABLE`,i,t,a)}}}e.validator=l;function u(t,r,i){try{if(!Array.isArray(t))throw new e.JsonPatchError(`Patch sequence must be an array`,`SEQUENCE_NOT_AN_ARRAY`);if(r)s(n._deepClone(r),n._deepClone(t),i||!0);else{i||=l;for(var a=0;a<t.length;a++)i(t[a],a,r,void 0)}}catch(t){if(t instanceof e.JsonPatchError)return t;throw t}}e.validate=u,e.default={JsonPatchError:e.JsonPatchError,deepClone:e.deepClone,getValueByPointer:a,applyOperation:o,applyPatch:s,applyReducer:c,validator:l,validate:u}})),gd=i((e=>{var t=e&&e.__assign||function(){return t=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n],t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},t.apply(this,arguments)};Object.defineProperty(e,`__esModule`,{value:!0});var n=pd(),r=hd(),i=hd();e.applyOperation=i.applyOperation,e.applyPatch=i.applyPatch,e.applyReducer=i.applyReducer,e.getValueByPointer=i.getValueByPointer,e.validate=i.validate,e.validator=i.validator;var a=pd();e.JsonPatchError=a.PatchError,e.deepClone=a._deepClone,e.escapePathComponent=a.escapePathComponent,e.unescapePathComponent=a.unescapePathComponent;var o=new WeakMap,s=function(){function e(e){this.observers=new Map,this.obj=e}return e}(),c=function(){function e(e,t){this.callback=e,this.observer=t}return e}();function l(e){return o.get(e)}function u(e,t){return e.observers.get(t)}function d(e,t){e.observers.delete(t.callback)}function f(e,t){t.unobserve()}e.unobserve=f;function p(e,t){var r=[],i,a=l(e);if(!a)a=new s(e),o.set(e,a);else{var f=u(a,t);i=f&&f.observer}if(i)return i;if(i={},a.value=n._deepClone(e),t){i.callback=t,i.next=null;var p=function(){m(i)},h=function(){clearTimeout(i.next),i.next=setTimeout(p)};typeof window<`u`&&(window.addEventListener(`mouseup`,h),window.addEventListener(`keyup`,h),window.addEventListener(`mousedown`,h),window.addEventListener(`keydown`,h),window.addEventListener(`change`,h))}return i.patches=r,i.object=e,i.unobserve=function(){m(i),clearTimeout(i.next),d(a,i),typeof window<`u`&&(window.removeEventListener(`mouseup`,h),window.removeEventListener(`keyup`,h),window.removeEventListener(`mousedown`,h),window.removeEventListener(`keydown`,h),window.removeEventListener(`change`,h))},a.observers.set(t,new c(t,i)),i}e.observe=p;function m(e,t){t===void 0&&(t=!1);var n=o.get(e.object);h(n.value,e.object,e.patches,``,t),e.patches.length&&r.applyPatch(n.value,e.patches);var i=e.patches;return i.length>0&&(e.patches=[],e.callback&&e.callback(i)),i}e.generate=m;function h(e,t,r,i,a){if(t!==e){typeof t.toJSON==`function`&&(t=t.toJSON());for(var o=n._objectKeys(t),s=n._objectKeys(e),c=!1,l=s.length-1;l>=0;l--){var u=s[l],d=e[u];if(n.hasOwnProperty(t,u)&&!(t[u]===void 0&&d!==void 0&&Array.isArray(t)===!1)){var f=t[u];typeof d==`object`&&d&&typeof f==`object`&&f?h(d,f,r,i+`/`+n.escapePathComponent(u),a):d!==f&&(a&&r.push({op:`test`,path:i+`/`+n.escapePathComponent(u),value:n._deepClone(d)}),r.push({op:`replace`,path:i+`/`+n.escapePathComponent(u),value:n._deepClone(f)}))}else Array.isArray(e)===Array.isArray(t)?(a&&r.push({op:`test`,path:i+`/`+n.escapePathComponent(u),value:n._deepClone(d)}),r.push({op:`remove`,path:i+`/`+n.escapePathComponent(u)}),c=!0):(a&&r.push({op:`test`,path:i,value:e}),r.push({op:`replace`,path:i,value:t}))}if(!(!c&&o.length==s.length))for(var l=0;l<o.length;l++){var u=o[l];!n.hasOwnProperty(e,u)&&t[u]!==void 0&&r.push({op:`add`,path:i+`/`+n.escapePathComponent(u),value:n._deepClone(t[u])})}}}function g(e,t,n){n===void 0&&(n=!1);var r=[];return h(e,t,r,``,n),r}e.compare=g;var _=hd(),v=pd();e.default=t({},_,{unobserve:f,observe:p,generate:m,compare:g,JsonPatchError:v.PatchError,deepClone:n._deepClone,escapePathComponent:n.escapePathComponent,unescapePathComponent:v.unescapePathComponent})})),_d=i(((e,t)=>{var n=od(),r=gd();t.exports=function(e){n(e,`$patch`,r.applyPatch,{type:`array`,items:{type:`object`,required:[`op`,`path`],properties:{op:{type:`string`},path:{type:`string`,format:`json-pointer`}},anyOf:[{properties:{op:{enum:[`add`,`replace`,`test`]}},required:[`value`]},{properties:{op:{enum:[`remove`]}}},{properties:{op:{enum:[`move`,`copy`]},from:{type:`string`,format:`json-pointer`}},required:[`from`]}]}})}})),vd=i(((e,t)=>{var n=fd(),r=_d();t.exports=function(e){n(e),r(e)}})),yd=i((e=>{Object.defineProperty(e,`__esModule`,{value:!0}),e.formatNames=e.fastFormats=e.fullFormats=void 0;function t(e,t){return{validate:e,compare:t}}e.fullFormats={date:t(a,o),time:t(c,l),"date-time":t(d,f),duration:/^P(?!$)((\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+S)?)?|(\d+W)?)$/,uri:h,"uri-reference":/^(?:[a-z][a-z0-9+\-.]*:)?(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'"()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?(?:\?(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i,"uri-template":/^(?:(?:[^\x00-\x20"'<>%\\^`{|}]|%[0-9a-f]{2})|\{[+#./;?&=,!@|]?(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?(?:,(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?)*\})*$/i,url:/^(?:https?|ftp):\/\/(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u{00a1}-\u{ffff}]+-)*[a-z0-9\u{00a1}-\u{ffff}]+)(?:\.(?:[a-z0-9\u{00a1}-\u{ffff}]+-)*[a-z0-9\u{00a1}-\u{ffff}]+)*(?:\.(?:[a-z\u{00a1}-\u{ffff}]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?$/iu,email:/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i,hostname:/^(?=.{1,253}\.?$)[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[-0-9a-z]{0,61}[0-9a-z])?)*\.?$/i,ipv4:/^(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)$/,ipv6:/^((([0-9a-f]{1,4}:){7}([0-9a-f]{1,4}|:))|(([0-9a-f]{1,4}:){6}(:[0-9a-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9a-f]{1,4}:){5}(((:[0-9a-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9a-f]{1,4}:){4}(((:[0-9a-f]{1,4}){1,3})|((:[0-9a-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){3}(((:[0-9a-f]{1,4}){1,4})|((:[0-9a-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){2}(((:[0-9a-f]{1,4}){1,5})|((:[0-9a-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){1}(((:[0-9a-f]{1,4}){1,6})|((:[0-9a-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9a-f]{1,4}){1,7})|((:[0-9a-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))$/i,regex:w,uuid:/^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i,"json-pointer":/^(?:\/(?:[^~/]|~0|~1)*)*$/,"json-pointer-uri-fragment":/^#(?:\/(?:[a-z0-9_\-.!$&'()*+,;:=@]|%[0-9a-f]{2}|~0|~1)*)*$/i,"relative-json-pointer":/^(?:0|[1-9][0-9]*)(?:#|(?:\/(?:[^~/]|~0|~1)*)*)$/,byte:_,int32:{type:`number`,validate:b},int64:{type:`number`,validate:x},float:{type:`number`,validate:S},double:{type:`number`,validate:S},password:!0,binary:!0},e.fastFormats={...e.fullFormats,date:t(/^\d\d\d\d-[0-1]\d-[0-3]\d$/,o),time:t(/^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)?$/i,l),"date-time":t(/^\d\d\d\d-[0-1]\d-[0-3]\d[t\s](?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i,f),uri:/^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/)?[^\s]*$/i,"uri-reference":/^(?:(?:[a-z][a-z0-9+\-.]*:)?\/?\/)?(?:[^\\\s#][^\s#]*)?(?:#[^\\\s]*)?$/i,email:/^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)*$/i},e.formatNames=Object.keys(e.fullFormats);function n(e){return e%4==0&&(e%100!=0||e%400==0)}var r=/^(\d\d\d\d)-(\d\d)-(\d\d)$/,i=[0,31,28,31,30,31,30,31,31,30,31,30,31];function a(e){let t=r.exec(e);if(!t)return!1;let a=+t[1],o=+t[2],s=+t[3];return o>=1&&o<=12&&s>=1&&s<=(o===2&&n(a)?29:i[o])}function o(e,t){if(e&&t)return e>t?1:e<t?-1:0}var s=/^(\d\d):(\d\d):(\d\d)(\.\d+)?(z|[+-]\d\d(?::?\d\d)?)?$/i;function c(e,t){let n=s.exec(e);if(!n)return!1;let r=+n[1],i=+n[2],a=+n[3],o=n[5];return(r<=23&&i<=59&&a<=59||r===23&&i===59&&a===60)&&(!t||o!==``)}function l(e,t){if(!(e&&t))return;let n=s.exec(e),r=s.exec(t);if(n&&r)return e=n[1]+n[2]+n[3]+(n[4]||``),t=r[1]+r[2]+r[3]+(r[4]||``),e>t?1:e<t?-1:0}var u=/t|\s/i;function d(e){let t=e.split(u);return t.length===2&&a(t[0])&&c(t[1],!0)}function f(e,t){if(!(e&&t))return;let[n,r]=e.split(u),[i,a]=t.split(u),s=o(n,i);if(s!==void 0)return s||l(r,a)}var p=/\/|:/,m=/^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)(?:\?(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i;function h(e){return p.test(e)&&m.test(e)}var g=/^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/gm;function _(e){return g.lastIndex=0,g.test(e)}var v=-(2**31),y=2**31-1;function b(e){return Number.isInteger(e)&&e<=y&&e>=v}function x(e){return Number.isInteger(e)}function S(){return!0}var C=/[^\\]\\Z/;function w(e){if(C.test(e))return!1;try{return new RegExp(e),!0}catch{return!1}}})),bd=i((e=>{Object.defineProperty(e,`__esModule`,{value:!0}),e.formatLimitDefinition=void 0;var t=Zl(),n=Y(),r=n.operators,i={formatMaximum:{okStr:`<=`,ok:r.LTE,fail:r.GT},formatMinimum:{okStr:`>=`,ok:r.GTE,fail:r.LT},formatExclusiveMaximum:{okStr:`<`,ok:r.LT,fail:r.GTE},formatExclusiveMinimum:{okStr:`>`,ok:r.GT,fail:r.LTE}};e.formatLimitDefinition={keyword:Object.keys(i),type:`string`,schemaType:`string`,$data:!0,error:{message:({keyword:e,schemaCode:t})=>n.str`should be ${i[e].okStr} ${t}`,params:({keyword:e,schemaCode:t})=>n._`{comparison: ${i[e].okStr}, limit: ${t}}`},code(e){let{gen:r,data:a,schemaCode:o,keyword:s,it:c}=e,{opts:l,self:u}=c;if(!l.validateFormats)return;let d=new t.KeywordCxt(c,u.RULES.all.format.definition,`format`);d.$data?f():p();function f(){let t=r.scopeValue(`formats`,{ref:u.formats,code:l.code.formats}),i=r.const(`fmt`,n._`${t}[${d.schemaCode}]`);e.fail$data(n.or(n._`typeof ${i} != "object"`,n._`${i} instanceof RegExp`,n._`typeof ${i}.compare != "function"`,m(i)))}function p(){let t=d.schema,i=u.formats[t];if(!i||i===!0)return;if(typeof i!=`object`||i instanceof RegExp||typeof i.compare!=`function`)throw Error(`"${s}": format "${t}" does not define "compare" function`);let a=r.scopeValue(`formats`,{key:t,ref:i,code:l.code.formats?n._`${l.code.formats}${n.getProperty(t)}`:void 0});e.fail$data(m(a))}function m(e){return n._`${e}.compare(${a}, ${o}) ${i[s].fail} 0`}},dependencies:[`format`]},e.default=t=>(t.addKeyword(e.formatLimitDefinition),t)})),xd=i(((e,t)=>{Object.defineProperty(e,`__esModule`,{value:!0});var n=yd(),r=bd(),i=Y(),a=new i.Name(`fullFormats`),o=new i.Name(`fastFormats`),s=(e,t={keywords:!0})=>{if(Array.isArray(t))return c(e,t,n.fullFormats,a),e;let[i,s]=t.mode===`fast`?[n.fastFormats,o]:[n.fullFormats,a];return c(e,t.formats||n.formatNames,i,s),t.keywords&&r.default(e),e};s.get=(e,t=`full`)=>{let r=(t===`fast`?n.fastFormats:n.fullFormats)[e];if(!r)throw Error(`Unknown format "${e}"`);return r};function c(e,t,n,r){var a;(a=e.opts.code).formats??(a.formats=i._`require("ajv-formats/dist/formats").${r}`);for(let r of t)e.addFormat(r,n[r])}t.exports=e=s,Object.defineProperty(e,`__esModule`,{value:!0}),e.default=s})),Sd=e(vd()),Cd=e(xd()),wd=e(ad()),Td=q(),Ed=()=>{let e={read:e=>`^${e}(:<=|:[\\w].*)?$`,update:e=>`^${e}$`},t=(t,n,r)=>{let{action:i=`read`,patternProperties:a={}}=t,o=e[i]??e.read;Object.assign(r.schema,{patternProperties:Object.entries(a??{}).reduce((e,{0:t,1:n})=>(e[o(t)]=n,e),n.patternProperties??{})})},n=(t,n,r)=>{let{action:i=`read`,items:a=null}=t,o=e[i]??e.read;if(a){let{enum:e=[],...t}=a;Object.assign(r.schema,{items:{...t,pattern:e.map(o).join(`|`),errorMessage:t=>`Invalid value: ${t.data}. must be one of: ${e.join(`, `)}`}})}};return[{keyword:`crudFields`,macro:(...e)=>(t(...e),n(...e),{}),metaSchema:{additionalProperties:!1,properties:{action:{type:`string`,enum:[`read`,`update`]},patternProperties:{type:`object`},items:{type:`object`,required:[`enum`]}}}}]},Dd=e=>{let t=(t,n)=>{if(!n||n==null)return null;let r=t.baseId&&t.baseId!=`#`?wd.resolve(t.baseId,n):n;return e.getSchema(r)??null};return[...Ed(),{keyword:`$dynamicValidator`,compile:t=>{let n=(e,t)=>e.filter((e,n)=>!t.includes(n)),r=t.source.split(`.`),i=(a,o)=>{let s=(0,Td.get)(o,t.source,null),c=Object.keys(t.map),l=r[r.length-1];if(!(0,Td.get)(o,n(r,[r.length-1])).hasOwnProperty(l))return i.errors=[{message:`must have required property '${l}'`,instancePath:`/${n(r,[0,r.length-1]).join(`/`)}`}],!1;if(!c.includes(s))return i.errors=[{instancePath:`/${n(r,[0]).join(`/`)}`,message:`Must be one of: ${c.map(e=>`"${e}"`).join(`, `)}`}],!1;let u=t.map[s],d=e.getSchema(u)??null;if(!d)return i.errors=[{message:`No schema was found for $ref: "${u}"`}],!1;let f=d(a);return i.errors=(d.errors??[]).map(e=>({...e,instancePath:`${o.instancePath}${e.instancePath}`})),f};return i},metaSchema:{type:`object`,properties:{map:{type:`object`},source:{type:`string`}},required:[`source`,`map`],additionalProperties:!1}},{keyword:`crudActionDisabled`,validate:()=>!1,error:{message:e=>`The ${e.schema} action is not available for this model.`},compile:(e,t,n)=>(n.schema={crudMethodDisabled:!0},e=>!1),metaSchema:{type:`string`,enum:[`create`,`read`,`update`,`delete`]}},{keyword:`range`,type:`number`,code(e){let{schema:t,parentSchema:n,data:r}=e,[i,a]=t,o=n.exclusiveRange?su._`=`:su.nil;e.fail(su._`${r} <${o} ${i} || ${r} >${o} ${a}`)},error:{message:({schema:e})=>`Must be a number between ${e[0]} and ${e[1]}.`},metaSchema:{type:`array`,items:[{type:`number`},{type:`number`}],minItems:2,additionalItems:!1}},{type:`array`,keyword:`arrayOfType`,compile:e=>t=>Array.isArray(t)?t.filter(t=>e.includes(typeof t)).length==t.length:!1,error:{message:({schema:e})=>(e=>`Must be an array of values with type of ${e}`)(Array.isArray(e)?e.map(e=>`"${e}"`).join(`, `):`"${e}"`)},metaSchema:{type:[`string`,`array`]}},{keyword:`errorMessage`,metaSchema:{}},{keyword:`mustBe`,validate:(e,t)=>e===t,error:{message:e=>`must be "${e.schema}"`}},{keyword:`propertyKeys`,type:`object`,compile(e,n,r){return r.$enum=[].concat(t(r,e.$ref)?.schema?.enum??[],e.enum??[]),e=>{let t=Object.keys(e);return t.filter(e=>r.$enum.includes(e)).length==t.length}},error:{message:e=>`Property key must be one of: ${e.it.$enum.map(e=>`"${e}"`).join(`, `)}`},metaSchema:{additionalProperties:!1,properties:{enum:{type:[`string`,`array`]},$ref:{type:`string`}}}},{keyword:`includes`,type:[`array`,`string`],compile(e,n,r){r.$enum=[].concat(t(r,e.$ref)?.schema?.enum??[],e.enum??[]);let{separator:i=null}=e;return e=>(e=(e=>{if(typeof e==`string`){if(!i)return[e];if(i)return e.split(i)}return e})(e),e.filter(e=>r.$enum.includes(e)).length==e.length)},error:{message:e=>`Must be a string or an array containing any of: ${e.it.$enum.map(e=>`"${e}"`).join(`, `)}`},metaSchema:{additionalProperties:!1,properties:{enum:{type:[`string`,`array`]},$ref:{type:`string`},separator:{type:`string`}}}}]},Od=e=>{let t=lu(e);return Dd(t).map(e=>t.addKeyword(e)),(0,Sd.default)(t),(0,Cd.default)(t),cu(e=>{let{action:n,model:r}=e??{};return t.getSchema(`/${r}/model/${n}/`)??t.getSchema(`/partials/crud/base-query/`)})},{copy:kd}=ne({legacy:!0}),Ad=e=>{let t=w(Date.now()),n=Od(e),r=()=>({action:`read`,model:``}),i=ee(`pockets-crud-query`,r()),a=D(()=>JSON.stringify(i.value,null,4)),o=w(!0);return{editorProps:D(()=>({validator:n,onRenderMenu:e=>e.filter(e=>!([`separator`,`space`].includes(e.type)||[`table`,`tree`,`text`].includes(e.text??``)||[`jse-transform`,`jse-sort`,`jse-contextmenu`,`jse-search`,`jse-space`].includes(e.className??``))).concat([{title:`Reset Query to initial settings`,onClick:()=>{i.value=r(),t.value=Date.now()},text:`Reset`},{title:`Copy to clipboard.`,onClick:()=>{kd(a.value),re.toast.success(`Copied`)},text:`Copy`}])})),modelValue:i,modelValueAsJson:a,hasJSON(e){o.value=e!==!1},isValid:o,editorKey:t}},jd=e=>{let t=w(null),n=w(!1);return{result:t,run:async()=>{t.value=null,n.value=!0;let{action:r,model:i,init:a,input:o,output:s}=e.value;try{t.value=await re.crud(i).init(a)[r](o,s)}catch(e){t.value=e.message}n.value=!1},loading:n}},Md=e=>(l(`data-v-a0788e6c`),e=e(),g(),e),Nd={class:`crud-model-query-builder`},Pd={class:`grid-info-md gap-2 align-items-start`},Fd={class:`bg-grey-800 side-bar`},Id={class:`grid columns-1 gap-1 p-2`},Ld=Md(()=>b(`label`,{class:`fw-8 fs-20`},`Query`,-1)),Rd=[`disabled`],zd=[`disabled`],Bd=Md(()=>b(`label`,{class:`fw-8 fs-20`},`Code`,-1)),Vd=[`disabled`],Hd=[`disabled`],Ud=[`disabled`],Wd={class:`position-relative`},Gd=G(c({__name:`index`,props:{schemas:{default:{}},ajvOptions:{default:{allowUnionTypes:!0,allowMatchingProperties:!0,allErrors:!0,verbose:!0,$data:!0,strict:!1}}},setup(e){let t=Ad(e,{}),{editorProps:n,modelValueAsJson:r,modelValue:i,isValid:a}=t,o=jd(i);mc.provide.editor(t),mc.provide.query(o);let s=w(`edit`),c=D(()=>{let e={edit:{is:Ec},run:{is:vc},php:{is:Sc,props:{type:`php`}},rest:{is:Sc,props:{type:`rest`}},pockets:{is:Sc,props:{type:`pockets`}}};return e[s.value]??e.edit});return(e,t)=>(u(),S(`div`,Nd,[b(`div`,Pd,[b(`div`,Fd,[b(`div`,Id,[Ld,b(`button`,{class:R([`btn btn-grey-700 p-1 rounded-0`,{active:x(s)==`edit`}]),onClick:t[0]||=e=>M(s)?s.value=`edit`:s=`edit`},`Edit Query`,2),b(`button`,{class:R([`btn btn-grey-700 p-1 rounded-0`,{active:x(s)==`run`}]),onClick:t[1]||=e=>M(s)?s.value=`run`:s=`run`,disabled:!x(a)},`View result`,10,Rd),b(`button`,{class:`btn btn-confirm text-white p-1 rounded-0`,onClick:t[2]||=e=>[x(o).run(),M(s)?s.value=`run`:s=`run`],disabled:!x(a)},`Run Query`,8,zd),Bd,b(`button`,{class:R([`btn btn-grey-700 p-1 rounded-0`,{active:x(s)==`php`}]),onClick:t[3]||=e=>M(s)?s.value=`php`:s=`php`,disabled:!x(a)},`PHP`,10,Vd),b(`button`,{class:R([`btn btn-grey-700 p-1 rounded-0`,{active:x(s)==`pockets`}]),onClick:t[4]||=e=>M(s)?s.value=`pockets`:s=`pockets`,disabled:!x(a)},`Pockets`,10,Hd),b(`button`,{class:R([`btn btn-grey-700 p-1 rounded-0`,{active:x(s)==`rest`}]),onClick:t[5]||=e=>M(s)?s.value=`rest`:s=`rest`,disabled:!x(a)},`Rest`,10,Ud)])]),b(`div`,Wd,[(u(),L(N,null,[(u(),L(v(x(c).is),m(x(c).props,{key:x(s)}),null,16))],1024))])])]))}}),[[`__scopeId`,`data-v-a0788e6c`]]),Kd=r({__storyData:()=>Zd,default:()=>Xd}),qd={class:`p-2`},Jd=[`loading`],Yd={key:0,class:`alert alert-danger m-0`},Xd={__name:`query-builder.story`,setup(e){let t={model:`crud-models`,action:`read`,input:{schemas:null},init:null};return(e,n)=>{let r=f(`pockets-crud-connection`);return u(),S(`div`,qd,[z(r,m(x(t),{cachingEnabled:!0}),{default:A(e=>[b(`div`,{class:`grid columns-1 gap-2 loading-container fw-8`,loading:e.loading,style:{overflow:`hidden`,"min-height":`100px`}},[e.failed?(u(),S(`span`,Yd,B(e.failed),1)):V(``,!0),e.results?(u(),L(Gd,H(m({key:1},e.results)),null,16)):V(``,!0)],8,Jd)]),_:1},16)])}}},Zd={route:`pockets plugin/crud/Query Builder`,storyIcon:`fa fa-wrench`,priority:-1e3,header:{sourceFile:!1,missingSourceFile:!1}},Qd=r({__storyData:()=>$d,default:()=>ef}),$d={route:`pockets plugin/installation`,title:`Installation`,storyIcon:`fa fa-book`},ef=`\r
## Installation\r
\r
Installing Pockets works just like any other plugin installation. Once added\r
to your wordpress site, activate Pockets in your plugins section. Pockets\r
will immediately start working, with no extra configuration required. \r
`,tf=r({__storyData:()=>nf,default:()=>rf}),nf={route:`pockets plugin/layouts/about`,storyIcon:`fa fa-book`},rf=`\r
## Layouts - About\r
\r
This is a list of different code blocks that can be used for creating layouts, such as post loops and page layouts.`,af=`<div\r
    class='grid columns-4 gap-1 fs-20'\r
>\r
    <div \r
        v-for='item in props.items'\r
        class='grid-card-4 bg-black p-1'\r
    >\r
        <picture class='d-flex bg-grey-800 p-2'>\r
            <img :src='item.img.src' class='m-auto img-fluid'>\r
        </picture>\r
        <h1 class='bg-accent-dk p-2 fs-28 mb-auto'>\r
            {{item.title}}\r
        </h1>\r
        <div class='grid-card-4'>\r
            <div v-html='item.content' class='bg-primary-dk p-2 mb-auto'></div>\r
            <button class='btn btn-grey-700 mt-auto'>{{item.button.text}}</button>\r
        </div>\r
    </div> \r
</div>`,of=()=>({props:{items:[{img:{src:`https://placehold.co/300x300/666/000`},button:{text:`A button`},title:`Hello world`,content:`Lorem Ipsum`},{img:{src:`https://placehold.co/100x100/666/fff`},button:{text:`A button that you should definitely click because it does something really cool`},title:`Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world `,content:`Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum `},{img:{src:`https://placehold.co/400x400/666/fff`},button:{text:`A button that you should definitely click because it does something really cool`},title:`Hello world Hello world Hello world Hello world Hello world Hello world`,content:`Lorem Ipsum`},{img:{src:`https://placehold.co/600x900/666/fff`},button:{text:`A button that you should definitely click because it does something really cool`},title:`Hello world`,content:`Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum`}]}}),sf=c({__name:`card-layout.story`,setup(e){return(e,t)=>{let n=f(`pockets-story-demo-container`);return u(),L(n,{state:x(of),html:x(af)},null,8,[`state`,`html`])}}}),cf=r({__storyData:()=>uf,default:()=>lf}),lf=sf,uf={route:`pockets plugin/layouts/card-layout`,header:{sourceFile:!1,missingSourceFile:!1},storyIcon:`fa fa-code`},df=`<div class='text-white grid columns-1 gap-2 bg-primary-dk p-0 py-2' style='max-width: 100%'>\r
\r
    <div class='container-xxl grid columns-1 columns-md-2 gap-0 flex-wrap'> \r
        <div class='bg-grey-800 p-2 col'>\r
            Side A\r
        </div>\r
        <div class='bg-grey-700 p-2 col'>\r
            Side B\r
        </div>\r
    </div>\r
\r
    <div class='container-xxl flex-wrap d-flex gap-0'> \r
        <div class='bg-grey-800 p-2 col-md-fill-start col-12'>\r
            Fluid Side\r
        </div>\r
        <div class='bg-grey-700 p-2 col-xs-12 col-md-6'>\r
            Set Side\r
        </div>\r
    </div>\r
    \r
    <div class='container-xxl flex-wrap d-flex gap-0'> \r
        <div class='bg-grey-800 p-2 col-xs-12 col-md-6'>\r
            Set Side\r
        </div>\r
        <div class='bg-grey-700 p-2 col-md-fill-end col-xs-12'>\r
            Fluid Side\r
        </div>\r
    </div>\r
\r
    <div class='container-xxl flex-wrap d-flex gap-0'> \r
        <div class='bg-grey-700 p-2 col-xs-12 col-md-fill-end col-xxl-fill-start order-xxl-0 order-xs-2'>\r
            Fluid Side\r
        </div>\r
        <div class='bg-grey-800 p-2 col-xs-12 col-md-6'>\r
            Set Side\r
        </div>\r
    </div>\r
\r
</div>\r
`,ff=c({__name:`layout.story`,setup(e){return(e,t)=>{let n=f(`pockets-story-iframe`),r=f(`pockets-story-demo`),i=f(`pockets-story-demo-container`);return u(),L(i,null,{default:A(()=>[z(r,{html:x(df)},{demo:A(()=>[z(n,{html:x(df)},null,8,[`html`])]),_:1},8,[`html`])]),_:1})}}}),pf=r({__storyData:()=>hf,default:()=>mf}),mf=ff,hf={_route:`pockets plugin/layouts/col-fill-layout`,header:{sourceFile:!1,missingSourceFile:!1},storyIcon:`fa fa-code`},gf=`<div class='text-white grid columns-1 gap-2 bg-primary-dk p-0 py-2'>\r
\r
    <div class='container-xxl grid columns-1 columns-md-2 gap-0 flex-wrap'> \r
        <div class='bg-grey-800 p-2 col'>\r
            Side A\r
        </div>\r
        <div class='bg-grey-700 p-2 col'>\r
            Side B\r
        </div>\r
    </div>\r
    <div class='d-flex py-2 container-xxl flex-wrap justify-content-center'>\r
        <div class='mw-xxl-xxl-half col-12'>\r
            <div class='p-2 bg-grey-800'>\r
                Side A\r
            </div>\r
        </div>\r
        <div class='mw-xxl-xxl-half col-12'>\r
            <div class='p-2 bg-grey-700'>\r
                Side B\r
            </div>\r
        </div>\r
    </div>\r
\r
</div>`,_f=()=>({props:{items:[{img:{src:`https://place-hold.it/300x300/666/000`},button:{text:`A button`},title:`Hello world`,content:`Lorem Ipsum`},{img:{src:`https://place-hold.it/100x100/666/fff`},button:{text:`A button that you should definitely click because it does something really cool`},title:`Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world `,content:`Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum `},{img:{src:`https://place-hold.it/400x400/666/fff`},button:{text:`A button that you should definitely click because it does something really cool`},title:`Hello world`,content:`Lorem Ipsum`},{img:{src:`https://place-hold.it/600x900/666/fff`},button:{text:`A button that you should definitely click because it does something really cool`},title:`Hello world`,content:`Lorem Ipsum`}]}}),vf=c({__name:`layout.story`,setup(e){return(e,t)=>{let n=f(`pockets-story-demo`),r=f(`pockets-story-demo-container`);return u(),L(r,{state:x(_f)},{default:A(()=>[z(n,{html:x(gf)},null,8,[`html`])]),_:1},8,[`state`])}}}),yf=r({__storyData:()=>xf,default:()=>bf}),bf=vf,xf={_route:`pockets plugin/layouts/col-full-split`,header:{sourceFile:!1,missingSourceFile:!1},storyIcon:`fa fa-code`},Sf=`<div class='p-1 bg-black'>\r
    <div \r
        v-for='item in props.items'\r
        class='grid-staggered-layout-lg grid columns-1 columns-lg-2 gap-0'\r
    >\r
        <picture class='d-flex bg-grey-700 p-2' style='order: var(--odd, 0);'>\r
            <img :src='item.img.src' class='m-auto img-fluid'>\r
        </picture>\r
        <div class='p-2 bg-grey-800 gap-2 grid columns-1' style='order: var(--even, 1);  align-items:center'>\r
            <div class='grid gap-2 columns-1 my-auto'>\r
                <h1 class='text-primary-lt fs-28 m-0'>\r
                    {{item.title}}\r
                </h1>\r
                <div v-html='item.content' class='bg-grey-600 p-2'></div>\r
                <button class='btn btn-grey-700 ms-auto p-1'>{{item.button.text}}</button>\r
            </div>\r
        </div>\r
    </div> \r
</div>`,Cf=()=>({props:{items:[{img:{src:`https://placehold.co/300x300/666/000`},button:{text:`A button`},title:`Hello world`,content:`Lorem Ipsum`},{img:{src:`https://placehold.co/300x300/666/000`},button:{text:`A button`},title:`Hello world`,content:`Lorem Ipsum`},{img:{src:`https://placehold.co/300x300/666/000`},button:{text:`A button`},title:`Hello world`,content:`Lorem Ipsum`},{img:{src:`https://placehold.co/300x300/666/000`},button:{text:`A button`},title:`Hello world`,content:`Lorem Ipsum`}]}}),wf=c({__name:`card-layout.story`,setup(e){return(e,t)=>{let n=f(`pockets-story-demo-container`);return u(),L(n,{state:x(Cf),html:x(Sf)},null,8,[`state`,`html`])}}}),Tf=r({__storyData:()=>Df,default:()=>Ef}),Ef=wf,Df={route:`pockets plugin/layouts/staggered-layout`,header:{sourceFile:!1,missingSourceFile:!1},storyIcon:`fa fa-code`},Of=r({__storyData:()=>kf,default:()=>Af}),kf={route:`pockets plugin/class-documentation/about`,title:`About`,storyIcon:`fa fa-book`},Af=`\r
## Pockets Class Documentation - About\r
\r
The Pockets Class Documentation system automatically generates documentation for all PHP classes loaded in the environment, including classes from Pockets, WordPress core, plugins, and themes. It uses PHP reflection and PHPDoc comments to display detailed information about each class, such as its methods, properties, parameters, return types, visibility, and any inline documentation written by developers. This allows developers to explore the structure and functionality of classes without needing to open or search through the source files directly.\r
\r
By presenting this information in a searchable browser interface, the tool makes it much easier to understand how different parts of the system work together. Developers can quickly inspect class methods, review comments explaining how functions behave, and discover available properties or inherited functionality. In large WordPress environments where code is spread across many plugins and files, the Pockets Class Documentation viewer provides a convenient way to navigate and understand the codebase from a single location.`,jf={search:{type:String,default:``},filterProperties:{type:Function,default:e=>e=>e},filterMethods:{type:Function,default:e=>e=>e},showPropertyTypeOptions:{type:[Function,Object],default:e=>e=>e},showMethodTypeOptions:{type:[Function,Object],default:e=>e=>e},active:{default:e=>e=>e},documents:{type:Object}},Mf=(e,t)=>typeof e==`function`?{...t,...e(t)}:{...t,...e},Nf=e=>({methodTypes:Mf(e.showMethodTypeOptions,{isFinal:!0,isPrivate:!0,isProtected:!0,isStatic:!0,applyExcludeTag:!0}),propertyTypes:Mf(e.showPropertyTypeOptions,{isPrivate:!0,isProtected:!0,isStatic:!0,applyExcludeTag:!0}),showFilters:!1}),Pf=(e,t)=>{let n=se(),r=oe(),i={ByExcludeTag:e=>t=>e.applyExcludeTag===!1?!0:!t.tags.hasOwnProperty(`class-document-advanced`),ByType:(e,t)=>n=>e[t]===!1?n[t]===!1:!0,properties(t){let n=f.options.propertyTypes,r=(0,Td.chain)(t).filter(i.ByType(n,`isStatic`)).filter(i.ByType(n,`isProtected`)).filter(i.ByType(n,`isPrivate`)).filter(i.ByExcludeTag(n)).filter(e.filterProperties).orderBy(`name`).reduce((e,t)=>(e[t.name]=t,e),{}).value();return Object.entries(r).length==0?!1:r},methods(t){let n=f.options.methodTypes,r=(0,Td.chain)(t).filter(i.ByType(n,`isFinal`)).filter(i.ByType(n,`isStatic`)).filter(i.ByType(n,`isProtected`)).filter(i.ByType(n,`isPrivate`)).filter(i.ByExcludeTag(n)).filter(e.filterMethods).orderBy(`name`).reduce((e,t)=>(e[t.name]=t,e),{}).value();return Object.entries(r).length==0?!1:r}},a=D(()=>{let e=f.documents[f.active.documentName]??null;return e?{...e,properties:i.properties(e.properties),methods:i.methods(e.methods)}:!1}),o=D(()=>{let t=f?.active?.search?.toLowerCase()??``;return Object.fromEntries(Object.entries(e.documents).filter(({1:e})=>{if(t==``||e.title.toLowerCase().includes(t)||e.group.toLowerCase().includes(t)||e.info.name.toLowerCase().includes(t))return!0}))}),s=D(()=>{let e=(0,Td.chain)(f.documents).orderBy([`group`,`title`],`asc`).groupBy(`group`).value();return Object.entries(e).length==0?!1:e}),c=(e,t)=>{r.$api.setQuery({...n.query,tab:e,[e]:t})},l=e=>{let t=e.split(`|`).map(e=>e.trim()),i={documentName:t[0]??!1,tab:t[1]??`class`};i.tab==`method`&&(i.method=t[2]??!1),i.tab==`property`&&(i.property=t[2]??!1),i.documentName&&r.$api.setQuery({...n.query,...i})};function u(e){let t,n=e;do{t=n;try{n=decodeURIComponent(n)}catch{break}}while(n!==t);return n}let d=W(e=>r.$api.setQuery({...n.query,search:e,documentName:null}),500),f=k({active:new Proxy(n.query,{get:(e,t)=>{let{query:r}=n;if(t==`documentName`){let e=u(r[t]);return e==`undefined`?null:e}if(t==`property`){let e=r[t]??!1;if(!e||!f.document.properties[e])return Object.keys(f.document.properties??{})[0]??null}if(t==`method`){let e=r[t]??!1;if(!e||!f.document.methods[e])return Object.keys(f.document.methods??{})[0]??null}return t==`tab`&&!r[t]?`class`:r[t]},set(e,t,i){return t==`search`?(d(i),!0):(r.$api.setQuery({...n.query,[t]:i}),!0)}}),options:Nf(e),documents:o,document:a,documentsByGroup:s,jumpTo:c,documentLink:l});return _(`document_api`,f),{api:f}},$=()=>a(`document_api`),Ff={class:`bg-grey-800 m-0 p-2 py-0 fs-20 fw-8 d-flex align-items-center`},If=b(`div`,null,` Class Documentation`,-1),Lf=b(`span`,{class:`pe-1`},`Filters`,-1),Rf={key:0,class:`grid columns-2 align-items-start gap-2 pt-2`},zf={class:`grid gap-3 columns-1 p-2 bg-grey-800`},Bf={class:`fw-8 fs-20`},Vf={class:`grid gap-2 columns-2`},Hf={class:`grid-info-80 fs-16`,role:`button`},Uf=[`onUpdate:modelValue`],Wf=c({__name:`index`,setup(e){let t=$(),n=[{title:`Method Types`,keys:Object.keys(t.options.methodTypes),key:`methodTypes`},{title:`Property Types`,keys:Object.keys(t.options.propertyTypes),key:`propertyTypes`}];return(e,r)=>(u(),S(`div`,null,[b(`div`,Ff,[If,b(`button`,{class:`ms-auto border-0 p-2 pe-0 bg-grey-800 text-white`,onClick:r[0]||=e=>x(t).options.showFilters=!x(t).options.showFilters},[Lf,b(`span`,{role:`button`,class:R({"fa fa-chevron-up ms-auto":x(t).options.showFilters,"fa fa-chevron-down":!x(t).options.showFilters})},null,2)])]),x(t).options.showFilters?(u(),S(`div`,Rf,[(u(!0),S(E,null,p(x(n),e=>(u(),S(`div`,zf,[b(`span`,Bf,B(e.title),1),b(`div`,Vf,[(u(!0),S(E,null,p(e.keys,n=>(u(),S(`label`,Hf,[s(B(n),1),F(b(`input`,{class:`form-control-switch outline-none ms-auto border-0`,type:`checkbox`,"onUpdate:modelValue":r=>x(t).options[e.key][n]=r},null,8,Uf),[[j,x(t).options[e.key][n]]])]))),256))])]))),256))])):V(``,!0)]))}}),Gf=[`code-value`],Kf={__name:`crud-read-field`,props:{attribute:{},item:{}},setup(e){let t=$(),n=e,r={model:t.document.properties.model_name.value,input:JSON.stringify(n.attribute.input).replaceAll(`{`,`[`).replaceAll(`}`,`]`).split(`:`).join(`=>`),init:`[]`},i=`\pockets::crud("${r.model}")::init(${r.init})->read(["${n.item.name}" => ${r.input}])`;return(e,t)=>(u(),S(`pre`,{"code-value":x(i),lang:`php`},B(x(n).attribute.value)+` `+B(x(i)),9,Gf))}},qf={class:`grid-info-sm`},Jf=b(`span`,{class:`fw-8 py-1 text-primary-lt`},`Schema`,-1),Yf=c({__name:`crud-schema`,props:{attribute:{},item:{}},setup(e){return(t,n)=>{let r=f(`pockets-ux-code-block`);return u(),S(`div`,qf,[Jf,z(r,{code:e.attribute},null,8,[`code`])])}}}),Xf={__name:`index`,props:{documentSection:{type:[Object,Boolean]},item:{}},setup(e){$();let t=e,n={crud_read_field:Kf,"pockets\\crud\\schema\\attribute":Yf},r=D(()=>{let{documentSection:e}=t;if(typeof e.attributes!=`object`)return!1;let r=Object.fromEntries(Object.entries(e.attributes).filter(({0:e,1:t})=>!!n[e]));return Object.entries(r).length==0?!1:r});return(e,t)=>(u(!0),S(E,null,p(x(r),(e,t)=>(u(),L(v(x(n)[t]),{attribute:e},null,8,[`attribute`]))),256))}},Zf={key:0,class:`grid-info-sm`},Qf=b(`span`,{class:`py-1 fw-8 text-primary-lt`},`Description`,-1),$f=c({__name:`index`,props:{documentSection:{type:[Object,Boolean]}},setup(e){return(t,n)=>{let r=f(`pockets-ux-code-block`);return e.documentSection.comment.formatted?(u(),S(`div`,Zf,[Qf,(u(),L(r,{key:e.documentSection.comment.formatted,code:e.documentSection.comment.formatted,lang:`ts`,"copy-enabled":!1},null,8,[`code`]))])):V(``,!0)}}}),ep={class:`fw-4 d-flex align-items-center`},tp={class:`text-decoration-none me-1`},np=c({__name:`index`,props:{tag:{type:String},buttonClass:{type:String,default:`btn btn-link fw-8 p-0 border-0`}},setup(e){let t=$(),n=e,r=D(()=>n.tag.split(`|`).map(e=>e.trim()).join(` | `));return(n,i)=>(u(),S(`div`,ep,[b(`span`,tp,[P(n.$slots,`content`,{},()=>[s(`This item refers to another class. See information for: `)])]),b(`button`,{class:R(e.buttonClass),onClick:i[0]||=n=>x(t).documentLink(e.tag)},[P(n.$slots,`button`,{},()=>[s(B(x(r)),1)])],2)]))}}),rp={key:0,class:`grid-info-sm`},ip=b(`span`,{class:`fw-8 py-1 text-primary-lt`},`Additional information`,-1),ap={class:`grid gap-2 columns-1`},op={class:`bg-grey-600 p-2`},sp=c({__name:`index`,props:{documentSection:{type:Object}},setup(e){let t=$(),n=e,r={"class-document-html":e=>O({template:e.tag,components:r}),"class-document-link":(e,{slots:n})=>e.link?O(`a`,{role:`button`,class:`class-document-link`,onClick:()=>t.documentLink(e.link)},n.default()):O(np,e,n),"class-document-link-property-value":e=>O(np,{tag:e.section.value}),"class-document-link-method-return":e=>O(np,{tag:e.section.return})},i=D(()=>{let{documentSection:e}=n;if(typeof e.tags!=`object`)return!1;let t=Object.fromEntries(Object.entries(e.tags).filter(({0:e,1:t})=>!!r[e]));return Object.entries(t).length==0?!1:t});return(t,n)=>x(i)?(u(),S(`div`,rp,[ip,b(`div`,ap,[(u(!0),S(E,null,p(x(i),(t,n)=>(u(),S(`div`,op,[(u(),L(v(x(r)[n]),{tag:t,section:e.documentSection},null,8,[`tag`,`section`]))]))),256))])])):V(``,!0)}}),cp={class:`grid columns-1 gap-2 text-break`},lp={key:0,class:`p-2 bg-grey-lt`},up=[b(`span`,{class:`p-2 bg-white fw-8 d-block`},`This class has no methods`,-1)],dp={key:1,class:`gap-2 grid`},fp={class:`grid-info-sm`},pp=b(`span`,{class:`fw-8 py-1 text-primary-lt`},`Function`,-1),mp={class:`fs-20 fw-8 p-2 bg-grey-800 grid gap-1 columns-1`},hp={class:`text-white fw-8`},gp={key:0,class:`fs-16 text-primary-lt`},_p={key:0,class:`fs-16 text-primary-dk`},vp={key:0,class:`grid-info-sm`},yp=b(`span`,{class:`fw-8 text-primary-lt py-1`},`Arguments`,-1),bp={class:`grid columns-1 gap-1`},xp={class:`grid columns-1 gap-1`},Sp={class:`text-primary-lt fw-8 fs-20`},Cp={class:`d-flex align-items-center fw-8`},wp={class:`pe-1 text-primary-dk`},Tp={key:0,class:`text-primary-dk`},Ep={key:0,class:`grid-info-sm align-items-center`},Dp=b(`span`,{class:`fw-8`},`Default `,-1),Op={class:`fw-8 p-2 text-white bg-grey-700`},kp={class:`m-0`},Ap={key:1,class:`grid-info-sm`},jp=b(`span`,{class:`fw-8 text-primary-lt`},`Return`,-1),Mp=c({__name:`index`,setup(e){let t=$(),n=D(()=>t.document.methods[t.active.method]??!1);return(e,t)=>{let r=f(`pockets-ux-code-block`);return u(),S(`div`,cp,[x(n)?V(``,!0):(u(),S(`div`,lp,up)),x(n)?(u(),S(`div`,dp,[b(`div`,fp,[pp,b(`div`,mp,[b(`div`,hp,[s(B(x(n).name)+` ( `,1),x(n).args?(u(),S(`span`,gp,B(x(n).argNames.join(`, `)),1)):V(``,!0),s(` )`)]),x(n).properties?(u(),S(`span`,_p,B(x(n).properties),1)):V(``,!0)])]),z($f,{documentSection:x(n)},null,8,[`documentSection`]),z(Xf,{documentSection:x(n)},null,8,[`documentSection`]),x(n).args?(u(),S(`div`,vp,[yp,b(`div`,bp,[(u(!0),S(E,null,p(x(n).args,e=>(u(),S(`div`,{class:`grid gap-2 bg-grey-800 p-2 text-white`,key:e.name},[b(`div`,xp,[b(`span`,Sp,`$`+B(e.name),1),b(`div`,Cp,[b(`span`,wp,B(e.optional?`Optional `:`Required `),1),e.type?(u(),S(`span`,Tp,`(`+B(e.type)+`)`,1)):V(``,!0)])]),z(Xf,{item:e},null,8,[`item`]),e.optional?(u(),S(`div`,Ep,[Dp,b(`code`,Op,[b(`pre`,kp,B(e.default===null?`Null`:e.default),1)])])):V(``,!0)]))),128))])])):V(``,!0),x(n).return?(u(),S(`div`,Ap,[jp,z(r,{code:x(n).return},null,8,[`code`])])):V(``,!0),z(sp,{documentSection:x(n)},null,8,[`documentSection`])])):V(``,!0)])}}}),Np={class:`grid gap-2 fw-6 columns-1`},Pp={class:`grid-info-sm align-items-center`},Fp=b(`span`,{class:`py-1 fw-8 text-primary-lt`},`Class Name`,-1),Ip={class:`p-2 bg-grey-800 fw-8 fs-20 text-white`},Lp={key:0,class:`text-primary-md ps-2`},Rp=c({__name:`index`,setup(e){let t=$();return(e,n)=>(u(),S(`div`,Np,[b(`div`,Pp,[Fp,b(`code`,Ip,[s(B(x(t).document.info.name),1),x(t).document.info.properties?(u(),S(`span`,Lp,B(x(t).document.info.properties),1)):V(``,!0)])]),z($f,{documentSection:x(t).document.info},null,8,[`documentSection`]),z(Xf,{documentSection:x(t).document.info},null,8,[`documentSection`]),z(sp,{documentSection:x(t).document.info},null,8,[`documentSection`])]))}}),zp={class:`grid columns-1 gap-2 text-break`},Bp={key:0,class:`p-2 bg-grey-800 fw-8`},Vp={key:1,class:`grid gap-2`},Hp={class:`grid-info-sm`},Up=b(`span`,{class:`text-primary-lt py-1`},`Property`,-1),Wp={class:`grid gap-1 bg-grey-800 p-2 columns-1`},Gp={class:`text-primary-lt fw-8 fs-20`},Kp={key:0,class:`d-flex align-items-center text-black fw-8`},qp={key:0,class:`pe-1 text-primary-dk`},Jp={key:1,class:`text-primary-dk`},Yp={class:`grid-info-sm`},Xp=b(`span`,{class:`text-primary-lt py-1`},` Value`,-1),Zp=c({__name:`index`,setup(e){let t=$(),n=D(()=>t.document.properties[t.active.property]??!1);return(e,t)=>{let r=f(`pockets-ux-code-block`);return u(),S(`div`,zp,[x(n)?V(``,!0):(u(),S(`div`,Bp,` This class has no properties `)),x(n)?(u(),S(`div`,Vp,[b(`div`,Hp,[Up,b(`div`,Wp,[b(`span`,Gp,`$`+B(x(n).name),1),x(n).type||x(n).properties?(u(),S(`div`,Kp,[x(n).type?(u(),S(`span`,qp,`(`+B(x(n).type)+`) `,1)):V(``,!0),x(n).properties?(u(),S(`span`,Jp,B(x(n).properties),1)):V(``,!0)])):V(``,!0)])]),z($f,{documentSection:x(n)},null,8,[`documentSection`]),z(Xf,{documentSection:x(n)},null,8,[`documentSection`]),z(sp,{documentSection:x(n)},null,8,[`documentSection`]),b(`div`,Yp,[Xp,z(r,{code:x(n).value===null?`Null`:x(n).value},null,8,[`code`])])])):V(``,!0)])}}}),Qp=(e=>(l(`data-v-96328c98`),e=e(),g(),e))(()=>b(`option`,{class:`p-4`,value:null,disabled:``,hidden:``},`Select a document`,-1)),$p={key:0,class:`text-white fw-8`,disabled:``},em=[`label`],tm=[`value`,`label`],nm=G(c({__name:`class-selector`,setup(e){let t=$();return(e,n)=>{let r=f(`pockets-fancy-select`);return u(),L(r,{class:`rounded-0 form-control p-0 fw-8 bg-grey-700 text-white fancy-scroll border-end border-start border-bottom border-5 border-grey-600`,modelValue:x(t).active.documentName,"onUpdate:modelValue":n[0]||=e=>x(t).active.documentName=e,search:x(t).active.search,"onUpdate:search":n[1]||=e=>x(t).active.search=e,"search-class":`p-2 rounded-0 form-control fw-8 bg-grey-700 border-5 border-end border-start border-top border-bottom-0 text-white border-grey-600`,placeHolder:`Select a document...`,placeholderClass:`p-2 form-control d-flex align-items-center text-white bg-grey-700 border-grey-600 border-5 rounded-0 fw-8`,containerClass:``,selectClass:`p-2 `},{default:A(({focused:e})=>[Qp,x(t).documentsByGroup?V(``,!0):(u(),S(`option`,$p,`No results for your search.`)),(u(!0),S(E,null,p(x(t).documentsByGroup,(t,n)=>(u(),S(`optgroup`,{class:`text-primary-lt fw-8 p-0 fs-20 mb-1`,label:n},[(u(!0),S(E,null,p(t,(t,r)=>(u(),S(`option`,{class:`fw-4 text-white fs-16 p-1 ps-2`,value:t.info.name,label:e?`${t.title}`:`${n} - ${t.title}`},null,8,tm))),256))],8,em))),256))]),_:1},8,[`modelValue`,`search`])}}}),[[`__scopeId`,`data-v-96328c98`]]),rm={class:`position-sticky fw-6 p-1 grid columns-1 gap-1 bg-grey-800`,style:{"z-index":`1`,top:`40px`}},im={key:0,class:`grid columns-1 gap-1`},am={class:`grid columns-1 gap-0`},om=[`disabled`],sm={key:0,class:`grid columns-1 gap-1 bg-grey-700 scrollable p-1`},cm=[`onClick`,`onFocus`],lm={class:`grid columns-1 gap-0`},um=[`disabled`],dm={key:0,class:`grid columns-1 gap-1 scrollable p-1 bg-grey-700`},fm=[`onClick`,`onFocus`],pm={props:jf,setup:Pf,components:{methodInfo:Mp,classInfo:Rp,propertyInfo:Zp,sideBar:G(c({__name:`index`,setup(e){let t=$();return(e,n)=>(u(),S(`div`,rm,[z(nm),x(t).document?(u(),S(`div`,im,[b(`button`,{class:R([`fs-20 btn btn-grey-700 rounded-0 p-1`,{active:x(t).active.tab==`class`}]),onClick:n[0]||=e=>x(t).active.tab=`class`,onFocus:n[1]||=e=>x(t).active.tab=`class`},`Class Info`,34),b(`div`,am,[b(`button`,{class:R([`fs-20 btn btn-grey-700 rounded-0 p-1`,{active:x(t).active.tab==`property`}]),disabled:!x(t).document.properties,onClick:n[2]||=e=>x(t).active.tab=`property`,onFocus:n[3]||=e=>x(t).active.tab=`property`},`Properties`,42,om),x(t).active.tab==`property`?(u(),S(`div`,sm,[(u(!0),S(E,null,p(x(t).document.properties,e=>(u(),S(`button`,{class:R([`btn fw-8 p-1 btn-accent-dk rounded-0 text-break`,{active:x(t).active.property==e.name}]),onClick:n=>x(t).jumpTo(`property`,e.name),onFocus:n=>x(t).jumpTo(`property`,e.name)},B(e.name),43,cm))),256))])):V(``,!0)]),b(`div`,lm,[b(`button`,{class:R([`fs-20 btn btn-grey-700 rounded-0 p-1`,{active:x(t).active.tab==`method`}]),onClick:n[4]||=e=>x(t).active.tab=`method`,onFocus:n[5]||=e=>x(t).active.tab=`method`,disabled:!x(t).document.methods},`Methods`,42,um),x(t).active.tab==`method`?(u(),S(`div`,dm,[(u(!0),S(E,null,p(x(t).document.methods,e=>(u(),S(`button`,{class:R([`btn fw-8 btn-accent-dk rounded-0 p-1 text-break`,{active:x(t).active.method==e.name}]),onClick:n=>x(t).jumpTo(`method`,e.name),onFocus:n=>x(t).jumpTo(`method`,e.name)},B(e.name),43,fm))),256))])):V(``,!0)])])):V(``,!0)]))}}),[[`__scopeId`,`data-v-11596cf0`]]),renderOptions:Wf}},mm=e=>(l(`data-v-4501910f`),e=e(),g(),e),hm={class:`pockets-class-document grid columns-1 gap-2`},gm={class:`grid-info-md gap-2 align-items-start`},_m={key:0,class:`bg-grey-800 p-2`},vm=[mm(()=>b(`div`,{class:`fw-8`},`Select a document to get started.`,-1))],ym={key:1,class:`information-panel`};function bm(e,t,n,r,i,a){let o=f(`render-options`),s=f(`side-bar`),c=f(`method-info`),l=f(`property-info`),d=f(`class-info`);return u(),S(`div`,hm,[z(o),b(`div`,gm,[z(s),e.api.document?V(``,!0):(u(),S(`div`,_m,vm)),e.api.document?(u(),S(`div`,ym,[e.api.active.tab==`method`?(u(),L(c,{key:0})):V(``,!0),e.api.active.tab==`property`?(u(),L(l,{key:1})):V(``,!0),e.api.active.tab==`class`?(u(),L(d,{key:2})):V(``,!0)])):V(``,!0)])])}var xm=G(pm,[[`render`,bm],[`__scopeId`,`data-v-4501910f`]]),Sm=r({__storyData:()=>Em,default:()=>Tm}),Cm=[`loading`],wm={key:0,class:`alert alert-danger m-0`},Tm={__name:`class-documents.story`,setup(e){let t={model:`wp`,action:`read`,init:null,input:{"class_documentation:documents":null}};return(e,n)=>{let r=f(`pockets-crud-connection`),i=f(`pockets-story-demo-container`);return u(),L(i,null,{default:A(()=>[z(r,m(x(t),{cachingEnabled:!0}),{default:A(e=>[b(`div`,{class:`grid columns-1 gap-2 loading-container fw-8`,loading:e.loading,style:{"min-height":`100px`}},[e.failed?(u(),S(`span`,wm,B(e.failed),1)):V(``,!0),e.results?(u(),L(xm,H(m({key:1},e.results)),null,16)):V(``,!0)],8,Cm)]),_:1},16)]),_:1})}}},Em={route:`pockets plugin/class documentation/api`,storyIcon:`fa fa-wrench`,title:`Interface`,header:{sourceFile:!1,missingSourceFile:!1}},Dm=r({__storyData:()=>Om,default:()=>km}),Om={route:`pockets plugin/templates/about`,title:`About`,storyIcon:`fa fa-book`},km=`\r
## About Templates\r
Pockets employs a custom template system for loading templates for content. Things like post/term loops or basic content. You can pass data in to a template when loading it, and you can register multiple paths where the system should look for templates. This allows you to organize templates in different folders or override defaults easily.\r
`,Am=r({__storyData:()=>jm,default:()=>Mm}),jm={route:`pockets plugin/templates/registering-folders`,title:`Registering a template folder`,storyIcon:`fa fa-book`},Mm="\r\n## Registering a new template folder.\r\n\r\nBy default, pockets looks for templates in its own directory, as well as the active parent/child theme in that order. This behavior can be modified via the ```pockets/template-locations``` filter.\r\n\r\nTo add a new template location, use the following code:\r\n\r\n```php\r\nadd_filter('pockets/template-locations', fn( array $locations ) => array_merge( $locations, [\r\n    plugin_dir_path( __FILE__ ); \r\n] ), 10, 1 ); \r\n```\r\n\r\nNow you can add files to your directory under ```/templates/``` and they can be [loaded](#/pockets-plugin/templates/loading-templates) with ```\\pockets::load_template()```.\r\n\r\n",Nm=r({__storyData:()=>Pm,default:()=>Fm}),Pm={route:`pockets plugin/templates/loading-templates`,title:`Loading a template`,storyIcon:`fa fa-book`},Fm=`\r
## Loading a template\r
\r
Pockets has a function that can be used to load templates located in \`\`\`/templates/\`\`\` folders [registered](#/pockets-plugin/templates/registering-folders) via the \`\`\`pockets/template-locations\`\`\` filter. \r
\r
Here's an example file structure: \r
\r
- your-plugin\r
    - templates\r
        - example-template.php\r
\r
When loading a template, you can omit the \`\`\`/templates/\`\`\` portion as the function\r
will look for the file relative to that directory. \r
\r
The function takes a single argument of an array with the following structure:\r
\r
\`\`\`php\r
[\r
    /**\r
        Location of file without .php extension.\r
    */\r
    'template' => "example-template",\r
    /**\r
        You can add additional data here.\r
    */\r
    'some-arg' => "Hello world!",\r
]\r
\`\`\`\r
Any additional entries in the array will be passed into the template. This data is accessible as \`\`\`$data\`\`\`.\r
\r
###### \`\`\`example-template.php\`\`\`\r
\r
\`\`\`php\r
echo $data['some-arg'];\r
\`\`\`\r
\r
### Example usage\r
\r
\`\`\`php\r
\r
$result = \\pockets::load_template( [\r
    'template' => 'example-template',\r
    'some-arg' => 'Hello World!'\r
] );\r
\r
echo $result;\r
\r
\`\`\`\r
\r
This function will look for templates in registered locations in the order that they are registered. The first found template will be the one used. You can always change the priority you register your location with to change the order they are loaded in. \r
`,Im=r({__storyData:()=>Lm,default:()=>Rm}),Lm={route:`pockets plugin/templates/registering-selectable-template`,title:`Selectable templates`,storyIcon:`fa fa-book`},Rm=`\r
## Registering a selectable template\r
\r
One feature of pockets is the ability to register dynamically selectable templates. \r
\r
To register a new template, create a file anywhere in your \`\`\`/templates/\`\`\` directory. This should be a directory [registered](#/pockets-plugin/templates/registering-folders) via the \`\`\`pockets/template-locations\`\`\` filter.\r
\r
Add the following to the top of the file:\r
\r
\`\`\`php\r
<?php\r
/**\r
    Template Name: My Template Name\r
    Template Type: my-template-tag\r
*/\r
\`\`\`\r
\r
Now your template will show up as a selectable template.\r
\r
Registered templates are an array containing:\r
- \`\`\`path\`\`\` - Path to the file\r
- \`\`\`name\`\`\` - Name of the template\r
\r
### Adding additonal data\r
\r
When Pockets loads templates, it filters them with the \`\`\`pockets/static-templates/register\`\`\` hook. You can use this hook to modify or add to the above data. The callback gets 2 arguments: \r
- \`\`\`$data\`\`\` an array which contains the path and name.\r
- \`\`\`$file_contents\`\`\` a string that contains the full content of the template found. \r
\r
#### Example\r
\`\`\`php\r
add_filter( 'pockets/static-templates/register', fn( $data,  $file_contents ) => array_merge( $data, [\r
    'additional_meta' => "some stuff"\r
] ), 10, 2);\r
\`\`\`\r
\r
### Get a list of templates:\r
\r
Using PHP\r
\r
\`\`\`php\r
$templates = \\pockets::$templates::get( type: [ "my-template-tag" ] );\r
array_map(\r
    array: $templates,\r
    callback: fn( $e) => print("<option value='{$e['path']}'>{$e['name']}</option>"),\r
);\r
\`\`\`\r
\r
Using Javascript\r
\r
\`\`\`js\r
$pockets.crud( 'wp' ).init( null ).read( [\r
    'static_templates:templates': "my-template-tag"\r
] ).then( res => console.log( res.templates ) )\r
\`\`\`\r
\r
Using VUE\r
\r
\`\`\`html\r
<pockets-crud-connection\r
    action='read'\r
    model='wp'\r
    :init='null'\r
    :input='{\r
        "static_templates:templates": "my-template-tag"\r
    }'\r
    :caching-enabled='true'\r
    #default='{ results, loading }'\r
>\r
    <select v-if='results'>\r
        <option v-for='template in results.templates' :value='template.path'>\r
            {{template.name}}\r
        </option>\r
    </select>\r
</pockets-crud-connection>\r
\`\`\`\r
 `,zm=r({__storyData:()=>Bm,default:()=>Vm}),Bm={route:`pockets vue/about`,title:`About`,storyIcon:`fa fa-book`},Vm=`\r
## Pockets VUE\r
\r
Pockets VUE seamlessly integrates VUE with WordPress. With zero configuration required, Pockets VUE is ready to use out of the box. It is automatically loaded on the sites front end, as well as the WP Admin dashboard when the plugin is active.\r
\r
### Configuration\r
\r
Customizing the behavior of the Vue loader requires no code changes and can be done within the settings of the Pockets plugin in the WordPress admin.\r
\r
### Asynchronous loading\r
\r
Pockets VUE takes advantage of asynchronous loading of components and other functionality. This optimization significantly improves initial page load times and reduces the payload size sent to the client by ensuring things are only loaded when required.\r
\r
### Included Components\r
\r
Pockets VUE also includes a collection of ready to use components.\r
\r
### Advanced Usage\r
\r
For advanced usage and customization, Pockets VUE allows you to modify your app to meet specific requirements. You can add or modify components, enhancing the functionality of your VUE integration within WordPress. By extending the app, you can tailor it to suit your unique needs, providing a truly personalized user experience.\r
\r
**Because of how wordpress handles updating plugins, any changes you make in the Pockets plugin directory will be lost whenever the plugin updates. It is not recommended to make changes directly.**\r
\r
### Recommended method of modifying\r
\r
If you wish to manually modify Pockets VUE, first you will need to [Install Node](https://nodejs.org/en/learn/getting-started/how-to-install-nodejs) if you do not already have it installed.\r
\r
Instead of making changes in the Pockets directory, apply the following steps to create your own space where you can safely make modifications. \r
\r
- Copy the \`/vue/dev/\` directory to a new location. The results of the directory should look like this:\r
    \`\`\`\r
        - project // can be any name\r
            - dev\r
    \`\`\`\r
- Use the \`pockets/vue-app/host-config\` filter to modify where VUE is loaded from, and point it to your \`project\` folder. The filter expect a return of an array:\r
    \`\`\`php\r
    add_filter('pockets/vue-app/host-config', fn() => [\r
        "dir" => plugin_dir_path(), // relative file path to your my-location directory\r
        "url" => plugin_dir_url() // relative url path to your my-location directory\r
    ] );\r
    \`\`\`\r
    This should point to the your \`project\` directory.\r
\r
Once that is done, you can start making changes in your \`/project/dev/\` directory. \r
\r
### Installation\r
\r
Before you start developing, you will need to install dependencies.\r
Open your \`/project/dev/\` directory in a command line and run the following:\r
\r
\`\`\`\r
npm install\r
\`\`\`\r
\r
### Development Mode\r
\r
To run in development, open your \`/project/dev/\` directory in a command line and run the following:\r
\r
\`\`\`\r
npm run serve\r
\`\`\`\r
\r
### Building\r
\r
When you're finished making changes, open your \`/project/dev/\` directory in a command line and run the following:\r
\r
\`\`\`\r
npm run build\r
\`\`\`\r
\r
## Modifying pockets externally\r
\r
If you do not wish to modify Pockets VUE directly, it is still available to other javascript libraries under \`window.$pockets\`. This exposes an api with various functionality and configuration options.\r
When the VUE app is loaded, it will fire the \`pockets-ready\` event on the documents body element. \r
You can bind to this event with the following:\r
\r
\`\`\`js\r
document.body.addEventListener( "pockets-ready", event => console.log("Pockets App Ready", event.detail ) )\r
\`\`\`\r
\r
\`event.detail\` will point to the \`$pockets\` api. \r
\r
`,Hm=r({__storyData:()=>Km,default:()=>Gm}),Um=[`loading`],Wm={key:0,class:`alert alert-danger m-0`},Gm={__name:`dashboard.story`,setup(e){return(e,t)=>{let n=f(`render-html`),r=f(`pockets-crud-connection`),i=f(`pockets-route-state`);return u(),L(i,null,{default:A(({route:e})=>[(u(),L(r,m({init:null,model:`wp`,action:`read`,input:{load_template:{template:`wp-admin-dashboard/router`,query:e.query,params:e.params}}},{key:e.fullPath}),{default:A(e=>[b(`div`,{class:`grid columns-1 gap-2 loading-container loading-container-fixed`,loading:e.loading,style:{height:`100%`}},[e.failed?(u(),S(`span`,Wm,B(e.failed),1)):V(``,!0),e.results?(u(),L(n,{key:1,class:`grid columns-1 gap-2`,innerHTML:e.results.load_template},null,8,[`innerHTML`])):V(``,!0)],8,Um)]),_:2},1040))]),_:1})}}},Km={route:`/wp-admin:path(.*)`,title:`WP Admin`,link:`/wp-admin/`,priority:999,header:{sourceFile:!1,missingSourceFile:!1},storyIcon:`fa fa-code`},qm=r({__storyData:()=>Jm,default:()=>Ym}),Jm={route:`pockets vue/directives/click-outside/about`,storyIcon:`fa fa-book`},Ym=`\r
# v-click-outside\r
\r
This directive enables detection of clicking outside the bound element using VueUse’s [implementation](https://vueuse.org/core/onClickOutside/?utm_source=chatgpt.com).\r
`,Xm=`<div \r
    class='text-white bg-grey-800' \r
    v-click-outside='() => props.outside = true'\r
>\r
    <div @click='props.outside=false' class='p-1 grid gap-2'>\r
        <div class='grid-info-160 bg-grey-500'>\r
            <span class='bg-grey-700 p-1'>\r
                Clicked outside\r
            </span>\r
            {{props.outside}}\r
        </div>\r
        Click inside or outside of this element to see change.\r
    </div>\r
</div>`,Zm=c({__name:`example.story`,setup(e){let t={props:{outside:!0}};return(e,n)=>{let r=f(`pockets-story-demo`),i=f(`pockets-story-demo-container`);return u(),L(i,{state:x(t)},{default:A(({state:e})=>[z(r,{html:x(Xm),state:e},null,8,[`html`,`state`])]),_:1},8,[`state`])}}}),Qm=r({__storyData:()=>eh,default:()=>$m}),$m=Zm,eh={route:`pockets vue/directives/click-outside/example`,directiveName:`v-click-outside`,directive:`@pockets-directives/click-outside`,header:{sourceFile:`@pockets-directives/click-outside`,missingSourceFile:!1},storyIcon:`fa fa-code`,componentInfo:{description:`A directive that detects clicks outside of the target element. Uses VueUse's onClickOutside directive. For more information see <a href='https://vueuse.org/core/onClickOutside/'>onClickOutside</a>`,props:{capture:{type:{name:`boolean`},description:`If true, captures click event`,default:`false`,required:!1}}}},th=r({__storyData:()=>nh,default:()=>rh}),nh={route:`pockets vue/directives/confirm-action/about`,storyIcon:`fa fa-book`},rh=`# \`v-confirm-action\`\r
\r
A Vue directive for requiring a second click to confirm an action within a timeout window.\r
\r
1. First click enters confirmation mode\r
2. Second click within the delay confirms the action\r
3. If the delay expires:\r
   - \`cancel()\` is called\r
   - the directive resets automatically\r
4. If the element loses focus or the mouse leaves:\r
   - confirmation is cancelled\r
   - original state is restored\r
`,ih=`<div class='p-2 bg-grey-800'>\r
    <button \r
        v-confirm-action='{\r
            ...props.directive,\r
            confirm: () => $pockets.toast.success("action confirmed"),\r
            cancel:  () => $pockets.toast.error("action cancelled"),\r
            start: () => $pockets.toast.info("start fired"),\r
            reset: () => $pockets.toast.info("reset fired")\r
        }'\r
        class='btn px-6 py-1'\r
    >\r
        Click me\r
    </button>\r
</div>`,ah={class:`grid-info-cq-xs-100 gap-1 grid`},oh=b(`span`,null,`Default Class`,-1),sh=[`onUpdate:modelValue`],ch={class:`grid-info-cq-xs-100 gap-1 grid`},lh=b(`span`,null,`Confirm Class`,-1),uh=[`onUpdate:modelValue`],dh={class:`grid-info-cq-xs-100 gap-1 grid`},fh=b(`span`,null,`Confirm Text`,-1),ph=[`onUpdate:modelValue`],mh={class:`grid-info-cq-xs-100 gap-1 grid`},hh=b(`span`,null,`Delay`,-1),gh=[`onUpdate:modelValue`],_h={class:`grid-info-cq-xs-100 gap-1 grid`},vh=b(`span`,null,`Cancel Blur`,-1),yh=[`onUpdate:modelValue`],bh={class:`grid-info-cq-xs-100 gap-1 grid`},xh=b(`span`,null,`Cancel Leave`,-1),Sh=[`onUpdate:modelValue`],Ch=c({__name:`example.story`,setup(e){let t={props:{directive:{defaultClass:`btn-confirm`,confirmClass:`btn-danger`,confirmText:`Are you sure?`,delay:2e3,cancelOnBlur:!0,cancelOnMouseLeave:!1}}};return(e,n)=>{let r=f(`pockets-story-demo`),i=f(`pockets-story-demo-container`);return u(),L(i,{state:x(t),"local-storage":`v-confirm-action-directive`},{default:A(({state:e})=>[z(r,{html:x(ih),state:e},null,8,[`html`,`state`])]),controls:A(({state:e})=>[b(`label`,ah,[oh,F(b(`input`,{"onUpdate:modelValue":t=>e.props.directive.defaultClass=t,class:`form-control`},null,8,sh),[[C,e.props.directive.defaultClass]])]),b(`label`,ch,[lh,F(b(`input`,{"onUpdate:modelValue":t=>e.props.directive.confirmClass=t,class:`form-control`},null,8,uh),[[C,e.props.directive.confirmClass]])]),b(`label`,dh,[fh,F(b(`input`,{"onUpdate:modelValue":t=>e.props.directive.confirmText=t,class:`form-control`},null,8,ph),[[C,e.props.directive.confirmText]])]),b(`label`,mh,[hh,F(b(`input`,{step:`100`,type:`number`,"onUpdate:modelValue":t=>e.props.directive.delay=t,class:`form-control`},null,8,gh),[[C,e.props.directive.delay]])]),b(`label`,_h,[vh,F(b(`input`,{type:`checkbox`,"onUpdate:modelValue":t=>e.props.directive.cancelOnBlur=t,class:`form-control-switch fs-30 ms-auto`},null,8,yh),[[j,e.props.directive.cancelOnBlur]])]),b(`label`,bh,[xh,F(b(`input`,{type:`checkbox`,"onUpdate:modelValue":t=>e.props.directive.cancelOnMouseLeave=t,class:`form-control-switch fs-30 ms-auto`},null,8,Sh),[[j,e.props.directive.cancelOnMouseLeave]])])]),_:1},8,[`state`])}}}),wh=r({__storyData:()=>Eh,default:()=>Th}),Th=Ch,Eh={route:`pockets vue/directives/confirm-action/example`,directive:`@pockets-directives/confirm-action/index.ts`,directiveName:`v-confirm-action`,header:{sourceFile:`@pockets-directives/confirm-action/index.ts`,missingSourceFile:!1},storyIcon:`fa fa-code`,componentInfo:{description:`A directive that requires a second confirmation interaction within a timeframe.`,props:{delay:{type:{name:`number`},description:`Time window in milliseconds allowed for the second confirmation click.`,default:`2000`,required:!1},confirm:{type:{name:`() => void`},description:`Called when the second interaction confirms the action.`,default:`() => {}`,required:!1},cancel:{type:{name:`() => void`},description:`Called when the confirmation state is cancelled or times out.`,default:`() => {}`,required:!1},start:{type:{name:`() => void`},description:`Called when the first interaction starts the confirmation state.`,default:`() => {}`,required:!1},reset:{type:{name:`() => void`},description:`Called whenever the directive resets back to its default state.`,default:`() => {}`,required:!1},confirmClass:{type:{name:`union`,elements:[{name:`string`},{name:`false`}]},description:`CSS classes applied while waiting for confirmation.`,default:`false`,required:!1},defaultClass:{type:{name:`union`,elements:[{name:`string`},{name:`false`}]},description:`CSS classes applied during the default idle state.`,default:`false`,required:!1},confirmText:{type:{name:`union`,elements:[{name:`string`},{name:`false`}]},description:`Temporary text shown while waiting for confirmation. Set to false to preserve the existing element content.`,default:`false`,required:!1},cancelOnBlur:{type:{name:`boolean`},description:`Automatically cancels the confirmation state when the element loses focus.`,default:`true`,required:!1},cancelOnMouseLeave:{type:{name:`boolean`},description:`Automatically cancels the confirmation state when the mouse leaves the element.`,default:`true`,required:!1}}}},Dh=r({__storyData:()=>Oh,default:()=>kh}),Oh={route:`pockets vue/directives/debouce/about`,storyIcon:`fa fa-book`},kh=`\r
# v-debounce\r
\r
A directive that attaches debounced event listeners to DOM elements. Each event can be individually configured with a callback and will be wrapped in a debounce function to limit execution frequency.\r
\r
---\r
\r
## Supported Events\r
\r
- input\r
- change\r
- select\r
- update\r
\r
---\r
\r
## Behavior\r
\r
### beforeMount\r
\r
- Reads \`delay\` (default 500ms)\r
- Iterates supported events\r
- If callback exists:\r
  - Wraps it with debounceFn\r
  - Attaches via addEventListener\r
  - Stores handler on binding\r
\r
Each event gets its own debounced handler.\r
\r
---\r
\r
### unmounted\r
\r
- Iterates supported events\r
- Removes event listeners\r
- Uses stored binding references\r
\r
Prevents memory leaks.\r
\r
---\r
\r
## Notes\r
\r
- Each event has its own debounce instance\r
- Delay is shared per directive instance\r
- Only configured events are attached`,Ah=`<div class='p-4 text-white bg-grey-800 grid gap-2'>\r
    \r
    <label class='grid-info-120 gap-0'>\r
\r
        <span>Test Input</span>\r
        \r
        <input \r
            class='form-control p-1'\r
            :value='props.values.input'\r
            v-debounce='{\r
                ...props.options,\r
                input: e => {\r
                    props.values.input = e.target.value\r
                    $pockets.toast("input fired")\r
                },\r
            }'\r
        >\r
        \r
    </label>\r
    \r
    <label class='grid-info-120 gap-0'>\r
        \r
        <span>Test Select</span>\r
    \r
        <select \r
            class='form-select p-1'\r
            :value='props.values.select'\r
            v-debounce='{\r
                ...props.options,\r
                change: e => {\r
                    props.values.select = e.target.value\r
                    $pockets.toast("change fired")\r
                },\r
            }'\r
        >\r
            <option v-for='option in ["a", "b", "c"]'>\r
                {{option}}\r
            </option>\r
        </select>\r
\r
    </label>\r
\r
</div>`,jh={class:`grid-info-cq-xs-120 grid gap-1`},Mh=b(`span`,null,`Delay`,-1),Nh=[`onUpdate:modelValue`],Ph=c({__name:`example.story`,setup(e){let t={props:{values:{select:`a`,input:`hello world`},options:{delay:600}}};return(e,n)=>{let r=f(`pockets-story-demo`),i=f(`pockets-story-demo-container`);return u(),L(i,{state:x(t)},{default:A(({state:e})=>[z(r,{html:x(Ah),state:e},null,8,[`html`,`state`])]),controls:A(({state:e})=>[b(`label`,jh,[Mh,F(b(`input`,{"onUpdate:modelValue":t=>e.props.options.delay=t,class:`form-control`,type:`number`,step:`100`},null,8,Nh),[[C,e.props.options.delay]])])]),_:1},8,[`state`])}}}),Fh=r({__storyData:()=>Lh,default:()=>Ih}),Ih=Ph,Lh={route:`pockets vue/directives/debouce/example`,directive:`@pockets-directives/debounce/index.ts`,directiveName:`v-debouce`,header:{sourceFile:`@pockets-directives/debounce/index.ts`,missingSourceFile:!1},storyIcon:`fa fa-code`,componentInfo:{description:`Debounces DOM event callbacks on an element using VueUse's <a href='https://vueuse.org/shared/useDebounceFn/'>useDebounceFn</a>.
    Supports multiple event handlers defined as keys on the binding value.`,props:{delay:{type:{name:` number `},description:`Delay in milliseconds before the callback is executed after the last event trigger.`,default:`500`,required:!1},input:{type:{name:` Function `},description:`Callback fired on input event (debounced).`,required:!1},change:{type:{name:` Function `},description:`Callback fired on change event (debounced).`,required:!1},select:{type:{name:` Function `},description:`Callback fired on select event (debounced).`,required:!1},update:{type:{name:` Function `},description:`Callback fired on update event (debounced).`,required:!1}}}},Rh=`<div class='p-4 text-white bg-grey-800 grid gap-2'>\r
    <div \r
        :key='props.key'\r
        v-directive-events="{\r
            ...props,\r
            mounted: () => $pockets.toast.info('Element was mounted'),\r
            updated: () => $pockets.toast.info('Element was updated'),\r
        }"\r
    >\r
        Watch for the toast events at the bottom of the screen\r
    </div>\r
    <div class='grid columns-2 gap-1 col-12'>\r
        \r
        <button @click='props.updated++' class='btn btn-confirm p-2'>\r
            Click to trigger update\r
        </button>\r
        <button @click='props.key++' class='btn btn-warning p-2'>\r
            Click to trigger remount\r
        </button>\r
    </div>\r
</div>`,zh=c({__name:`example.story`,setup(e){let t={props:{key:0,updated:0}};return(e,n)=>{let r=f(`pockets-story-demo`),i=f(`pockets-story-demo-container`);return u(),L(i,{state:x(t)},{default:A(({state:e})=>[z(r,{html:x(Rh),state:e},null,8,[`html`,`state`])]),_:1},8,[`state`])}}}),Bh=r({__storyData:()=>Hh,default:()=>Vh}),Vh=zh,Hh={route:`pockets vue/directives/directive-events/example`,directive:`@pockets-directives/directive-events`,directiveName:`v-directive-events`,header:{sourceFile:`@pockets-directives/directive-events`,missingSourceFile:!1},storyIcon:`fa fa-code`,componentInfo:{description:`Vue directive that forwards directive lifecycle hooks to callback functions provided.`,props:{beforeMount:{type:{name:`(el: HTMLElement) => void`},description:`Called before the element is mounted into the DOM.`,required:!1},mounted:{type:{name:`(el: HTMLElement) => void`},description:`Called after the element has been mounted into the DOM.`,required:!1},beforeUpdate:{type:{name:`(el: HTMLElement) => void`},description:`Called before the containing component updates.`,required:!1},updated:{type:{name:`(el: HTMLElement) => void`},description:`Called after the containing component updates.`,required:!1},beforeUnmount:{type:{name:`(el: HTMLElement) => void`},description:`Called before the element is unmounted from the DOM.`,required:!1},unmounted:{type:{name:`(el: HTMLElement) => void`},description:`Called after the element has been unmounted from the DOM.`,required:!1}}}},Uh=`<div class='p-4 text-white bg-grey-800 grid gap-2'>\r
    \r
    Notice that the input field is automatically focused!\r
    \r
    <input v-focus class='form-control' placeholder='I am automatically focused...'>\r
\r
</div>`,Wh=c({__name:`example.story`,setup(e){let t={props:{}};return(e,n)=>{let r=f(`pockets-story-demo`),i=f(`pockets-story-demo-container`);return u(),L(i,{state:x(t)},{default:A(({state:e})=>[z(r,{html:x(Uh),state:e,"render-demo":`v-if`},null,8,[`html`,`state`])]),_:1},8,[`state`])}}}),Gh=r({__storyData:()=>qh,default:()=>Kh}),Kh=Wh,qh={route:`pockets vue/directives/focus/Example`,directiveName:`v-focus`,directive:`@pockets-directives/focus/index.ts`,header:{sourceFile:`@pockets-directives/focus/index.ts`,missingSourceFile:!1},storyIcon:`fa fa-code`,componentInfo:{description:`A simple directiv that focuses an element when it's mounted. Useful for things like inouts`,props:{}}},Jh=r({__storyData:()=>Yh,default:()=>Xh}),Yh={route:`pockets vue/directives/forms/about`,storyIcon:`fa fa-book`},Xh=`\r
# Pockets Form Directives\r
\r
These are a pair of Vue directives designed to simplify form handling and enable reactive, event-driven form submissions without relying on manual DOM plumbing or heavy state management.\r
\r
## v-pockets-form-handler \r
\r
This directive attaches a submit listener to a form and replaces the default browser \r
submission behavior with a custom callback. It serializes form data into a plain object and passes it to a user-defined handler, making it ideal for AJAX-driven forms.\r
\r
## v-pockets-form-submit\r
\r
This directive automatically triggers a form submission when specific input-related events occur on an element. It is designed for reactive forms where changes should immediately submit or revalidate the form without requiring a submit button.\r
\r
When a configured event fires on the bound element, the directive finds the closest parent \`\`\`<form>\`\`\` and dispatches a native submit event.\r
 `,Zh=`<form \r
    class='p-4 text-white bg-grey-800 grid gap-2' \r
    v-pockets-form-handler='{ \r
        submit: data => {\r
            $pockets.toast.info( \`\${JSON.stringify(data)}\`)\r
        }\r
    }'>\r
    \r
    <label class='grid-info-cq-md-160 grid gap-1'>\r
        <span>  \r
            Enter Name\r
        </span>\r
        <input name='name' class='form-control' :value='props.name'>\r
    </label>\r
\r
    <label class='grid-info-cq-md-160 grid gap-1'>\r
        <span>  \r
            Favorite Food\r
        </span>\r
        <input name='favorite-food' class='form-control' :value='props.food'>\r
    </label>\r
\r
    <label class='grid-info-cq-md-160 grid gap-1'>\r
        <span>  \r
            Favorite Color\r
        </span>\r
        <select name='favorite-color' class='form-control' :value='props.color'>\r
            <option v-for='option in ["blue", "red", "green"]'>\r
                {{option}}\r
            </option>\r
        </select>\r
    </label>\r
\r
    <label class='grid-info-cq-md-160 grid gap-1'>\r
        \r
        <span>  \r
            Do you like Coding?\r
        </span>\r
\r
        <input \r
            class='form-control-switch fs-36 ms-auto'  \r
            type='checkbox' \r
            v-model='props.likesCoding'\r
        >\r
\r
        <input :value='props.likesCoding ? "yes" : "no"' name='likes-coding' hidden>\r
\r
    </label>\r
\r
    <div class='d-flex'>\r
\r
        <button type='submit' class='btn btn-confirm px-4 ms-auto'>\r
            Submit Form\r
        </button>\r
\r
    </div>\r
\r
</form>`,Qh=c({__name:`example.story`,setup(e){let t={props:{name:`John Doe`,food:`apples`,color:`blue`,likesCoding:!0}};return(e,n)=>{let r=f(`pockets-story-demo`),i=f(`pockets-story-demo-container`);return u(),L(i,{state:x(t)},{default:A(({state:e})=>[z(r,{html:x(Zh),state:e},null,8,[`html`,`state`])]),_:1},8,[`state`])}}}),$h=r({__storyData:()=>tg,default:()=>eg}),eg=Qh,tg={route:`pockets vue/directives/forms/form-handler`,directive:`@pockets-directives/forms/form-handler`,directiveName:`v-pockets-form-handler`,header:{sourceFile:`@pockets-directives/forms/form-handler`,missingSourceFile:!1},storyIcon:`fa fa-code`,componentInfo:{description:`A simple directive that fires a provided callback when a form is submitted. Great for things like AJAX forms.`,props:{submit:{type:{name:`function(<object>formData)`},description:`This is called when the form is submitted. Receives form data as a serialized object.`,required:!0}}}},ng=`<form \r
    class='p-4 text-white bg-grey-800 grid gap-2' \r
    v-pockets-form-handler='{ \r
        submit: data => {\r
            $pockets.toast.info( \`\${JSON.stringify(data)}\`)\r
        }\r
    }'>\r
\r
    <label class='grid-info-cq-md-160 grid gap-1'>\r
        <span>  \r
            Favorite Color\r
        </span>\r
        <select \r
            name='favorite-color' \r
            class='form-control' \r
            :value='props.color' \r
            v-pockets-form-submit="{\r
                events: ['change']\r
            }"\r
        >\r
            <option v-for='option in ["blue", "red", "green"]'>\r
                {{option}}\r
            </option>\r
        </select>\r
    </label>\r
\r
    <div class='d-flex gap-1 flex-wrap'>\r
        <div class='col-12'> \r
            Change the select to automatically submit the form\r
        </div>\r
        <button type='submit' class='btn btn-confirm px-4 ms-auto' disabled>\r
            Submit Form\r
        </button>\r
\r
    </div>\r
\r
</form>`,rg=c({__name:`example.story`,setup(e){let t={props:{color:`blue`}};return(e,n)=>{let r=f(`pockets-story-demo`),i=f(`pockets-story-demo-container`);return u(),L(i,{state:x(t)},{default:A(({state:e})=>[z(r,{html:x(ng),state:e},null,8,[`html`,`state`])]),_:1},8,[`state`])}}}),ig=r({__storyData:()=>og,default:()=>ag}),ag=rg,og={route:`pockets vue/directives/forms/form-submit-trigger`,directive:`@pockets-directives/forms/submit-handler`,directiveName:`v-pockets-form-handler`,header:{sourceFile:`@pockets-directives/forms/submit-handler`,missingSourceFile:!1},storyIcon:`fa fa-code`,componentInfo:{description:`A Vue directive that automatically triggers a form submit event when the bound element emits one of the configured input events. By default, it listens to "change", "update", and "input" events and dispatches a bubbling, cancelable submit event on the closest parent form. Useful for auto-submitting forms when inputs change without requiring manual submit buttons or watchers.`,props:{events:{type:{name:` <[]string> "change"|"update"|"input"`},description:`Array of DOM events that will trigger the form submit.`,default:`<"change","update","input">`,required:!1}}}},sg=r({__storyData:()=>cg,default:()=>lg}),cg={route:`pockets vue/directives/hover-intent/about`,storyIcon:`fa fa-book`},lg=`\r
# v-hover-intent\r
\r
A Vue 3 directive that improves hover behavior by detecting *intent* using mouse movement analysis. Instead of firing immediately on \`mouseover\`, it waits until the user’s cursor movement indicates deliberate interaction.\r
 \r
---\r
\r
## Behavior Summary\r
\r
- Mouse movement is tracked before triggering hover\r
- Only triggers \`onEnter\` when movement stabilizes\r
- Delays \`onLeave\` to prevent flicker\r
- Optionally supports keyboard focus\r
- Returns a runtime API for manual control (reset, options, remove)\r
\r
---\r
\r
## Notes\r
\r
- Best used for menus, tooltips, and complex hover UIs\r
- Prevents accidental hover activation\r
- Improves UX in dense interactive layouts`,ug=`<div \r
    class='p-4 text-white bg-grey-800 grid gap-2' \r
\r
    v-hover-intent='{\r
        options: props.options,\r
        change: e => {\r
            props.over = e\r
        }\r
    }'\r
    \r
>\r
\r
    The mouse is {{ props.over ? "over" : "not over"}} this element.\r
</div>\r
`,dg={class:`grid-info-cq-xs-120`},fg=b(`span`,null,`Interval`,-1),pg=[`onUpdate:modelValue`],mg={class:`grid-info-cq-xs-120`},hg=b(`span`,null,`Timeout`,-1),gg=[`onUpdate:modelValue`],_g={class:`grid-info-cq-xs-120`},vg=b(`span`,null,`Sensitivity`,-1),yg=[`onUpdate:modelValue`],bg=c({__name:`example.story`,setup(e){let t={props:{over:!1,options:{interval:100,timeout:100,sensitivity:10}}};return(e,n)=>{let r=f(`pockets-story-demo`),i=f(`pockets-story-demo-container`);return u(),L(i,{state:x(t)},{default:A(({state:e})=>[z(r,{html:x(ug),state:e},null,8,[`html`,`state`])]),controls:A(({state:e})=>[b(`label`,dg,[fg,F(b(`input`,{"onUpdate:modelValue":t=>e.props.options.interval=t,class:`form-control`},null,8,pg),[[C,e.props.options.interval]])]),b(`label`,mg,[hg,F(b(`input`,{"onUpdate:modelValue":t=>e.props.options.timeout=t,class:`form-control`},null,8,gg),[[C,e.props.options.timeout]])]),b(`label`,_g,[vg,F(b(`input`,{"onUpdate:modelValue":t=>e.props.options.sensitivity=t,class:`form-control`},null,8,yg),[[C,e.props.options.sensitivity]])])]),_:1},8,[`state`])}}}),xg=r({__storyData:()=>Cg,default:()=>Sg}),Sg=bg,Cg={route:`pockets vue/directives/hover-intent/example`,directive:`@pockets-directives/hover-intent`,directiveName:`v-hover-intent`,header:{sourceFile:`@pockets-directives/hover-intent`,missingSourceFile:!1},storyIcon:`fa fa-code`,componentInfo:{description:`Vue directive wrapper for hoverintent. Fires hover callbacks only when intentional mouse movement is detected.`,props:{change:{type:{name:`function`},description:`Callback fired when hover state changes. Receives a boolean: - true = hover enter. - false = hover leave`,required:!0},options:{type:{name:`object`},description:`Configuration object passed directly to hoverintent.`,required:!1},"options.sensitivity":{type:{name:`number`},description:`Mouse movement threshold before hover is considered intentional. Lower values trigger faster, higher values require steadier movement.`,default:`10`,required:!1},"options.interval":{type:{name:`number`},description:`Polling interval in milliseconds used to compare mouse movement.`,default:`100`,required:!1},"options.timeout":{type:{name:`number`},description:`Delay in milliseconds before firing hover leave.`,default:`0`,required:!1},"options.handleFocus":{type:{name:`boolean`},description:`Enables focus and blur handling for keyboard accessibility.`,default:`false`,required:!1},".capture{modifier}":{type:{name:`modifier`},description:`Stops event propagation on mouseover when enabled. Used like a normal vue directive modifier. Eg: v-hover-intent.capture="{...options}"`,required:!1}}}},wg=r({__storyData:()=>Tg,default:()=>Eg}),Tg={route:`pockets vue/directives/masonry/about`,storyIcon:`fa fa-book`},Eg=`\r
# v-pockets-masonry\r
\r
This directive integrates Masonry layout behavior into elements using the [masonry Layout](https://www.npmjs.com/package/masonry-layout?client_id=1805037142.1778371202&session_id=1778371202) library.\r
\r
It automatically initializes, updates, and cleans up a Masonry instance per element.\r
\r
- Initializes layout on mount\r
- Recalculates layout on update\r
- Destroys instance on unmount\r
 \r
---\r
\r
## Lifecycle Behavior\r
\r
### mounted\r
\r
- Merges default options with user-provided binding value\r
- Creates a new Masonry instance\r
\r
---\r
\r
### updated\r
\r
- Calls \`.layout()\` on existing instance\r
- Recalculates item positions after DOM updates\r
\r
---\r
\r
### unmounted\r
\r
- Calls \`.destroy()\`\r
- Cleans up event listeners and internal references\r
\r
---\r
\r
## Behavior Summary\r
\r
- Automatically initializes Masonry on mount\r
- Re-runs layout on every Vue update\r
- Fully destroys instance on unmount\r
- Supports full Masonry configuration passthrough\r
- Stores instance directly on DOM element\r
 `,Dg=`<div v-pockets-masonry="props.masonryOptions">\r
    <div \r
    v-for="(item, index) in props.items" \r
    :key="item.id || index"\r
    class="grid-item col-md-3 col-lg-2 col-xs-6 col-sm-4 p-half d-flex" \r
    :style="{ height: \`\${item.height}px\` }"\r
    >\r
    <img \r
        class="pockets-node-tree-node-facade-node img-fluid col-12 p-1" \r
        :src="item.imageSrc || \`https://placeholdit.com/100x\${item.height}\`" \r
        :style="{ \r
        objectFit: 'cover', \r
        backgroundColor: \`hsl(\${item.color}, 150%, 60%)\` \r
        }"\r
        :alt="item.alt || 'Grid item image'"\r
    >\r
    </div>\r
</div>\r
 `,Og=c({__name:`example.story`,setup(e){let t=()=>({props:{items:Array.from({length:20},(e,t)=>{let n=Math.floor(Math.random()*38+8)*10;return{id:t,height:n,color:Math.floor(Math.random()*361),imageSrc:`https://placeholdit.com/100x${n}`}}),masonryOptions:{percentPosition:!0}}});return(e,n)=>{let r=f(`pockets-story-demo`),i=f(`pockets-story-demo-container`);return u(),L(i,{state:x(t)},{default:A(({state:e})=>[z(r,{html:x(Dg),state:e,"render-demo":`v-if`},null,8,[`html`,`state`])]),_:1},8,[`state`])}}}),kg=r({__storyData:()=>jg,default:()=>Ag}),Ag=Og,jg={route:`pockets vue/directives/masonry/example`,directive:`@pockets-directives/masonry`,directiveName:`v-pockets-masonry`,header:{sourceFile:`@pockets-directives/masonry`,missingSourceFile:!1},storyIcon:`fa fa-code`,componentInfo:{description:`A directive that creates a masonry grid on the target element. Utililizes the <a href='https://www.npmjs.com/package/masonry-layout?client_id=1805037142.1778371202&session_id=1778371202'>Masonry Layout</a> library.
    For all options, visit <a href='https://masonry.desandro.com/options#gutter'>Masonry Options</a>.`,props:{stamp:{type:{name:`string<css selector>`},description:`Specifies which elements are stamped within the layout. Masonry will layout items below stamped elements. The stamp option stamps elements only when the Masonry instance is first initialized. You can stamp additional elements afterwards with the stamp method.`,default:`.stamp`,required:!1},itemSelector:{type:{name:`string<css selector>`},description:`Target class for items in the masonry grid`,default:`.grid-item`,required:!1},columnWidth:{type:{name:`number`},description:`Size of columns`,required:!1},gutter:{type:{name:`string`},description:`gap between items`,required:!1},fitWidth:{type:{name:`boolean`},description:`Sets the width of the container to fit the available number of columns, based the size of container's parent element. When enabled, you can center the container with CSS.`,default:`true`,required:!1},percentPosition:{type:{name:`boolean`},description:`Sets item positions in percent values, rather than pixel values. percentPosition: true works well with percent-width items, as items will not transition their position on resize.`,required:!1},horizontalOrder:{type:{name:`boolean`},description:`Lays out items to (mostly) maintain horizontal left-to-right order.`,required:!1}}}},Mg=r({__storyData:()=>Ng,default:()=>Pg}),Ng={route:`pockets vue/directives/scroll-into-view/about`,storyIcon:`fa fa-book`},Pg=`\r
# v-scroll-into-view\r
\r
A Vue 3 directive that automatically scrolls an element into view within a scrollable parent container when mounted or updated.\r
\r
It supports flexible parent targeting, smooth scrolling, and alignment control.\r
\r
---\r
\r
## Directive Overview\r
\r
This directive:\r
\r
- Finds a scrollable parent container\r
- Calculates element position relative to that parent\r
- Scrolls the parent so the element is visible\r
- Supports alignment modes: \`start\`, \`center\`, \`end\`\r
- Can be enabled/disabled dynamically\r
 \r
---\r
\r
## Purpose\r
\r
This directive ensures that an element is automatically scrolled into view inside its parent container when:\r
\r
- It is mounted\r
- It becomes active/selected via reactive update\r
\r
---\r
 \r
## How It Works\r
\r
### Parent Resolution\r
\r
The directive resolves the scroll container in this order:\r
\r
1. \`HTMLElement\` reference\r
2. CSS selector string (\`.class\`, \`#id\`, etc.)\r
3. \`closest()\` match (for class selectors)\r
4. \`document.querySelector()\`\r
5. Fallback: \`el.parentElement\`\r
\r
---\r
\r
### Scroll Calculation\r
\r
It computes:\r
\r
- Element position inside parent\r
- Adjusts based on scroll offset\r
- Applies alignment rules (\`start\`, \`center\`, \`end\`)\r
- Calls \`parent.scrollTo()\`\r
\r
---\r
\r
### Mount Behavior\r
\r
- Waits for \`mountedDelay\` (default 100ms)\r
- Checks \`enabled\`\r
- Scrolls element into view inside parent\r
\r
---\r
\r
### Update Behavior\r
\r
- Compares previous vs current \`enabled\` state\r
- Only triggers scroll when toggled ON\r
`,Fg=`<div class='p-0 text-white bg-grey-800 grid gap-2 border border-5 border-grey-800'>\r
    <div class='fancy-scroll grid columns-1 gap-0 scroll-container' \r
        style='overflow-y: auto; max-height: 200px'\r
    >\r
        <button \r
            v-for='(item, i) in props.list' \r
            v-scroll-into-view='{ enabled: i == props.active, ...props.options }'\r
            class='btn p-1'\r
            :class='{ "btn-grey-800" : i== props.active, "btn-grey-700": i!=props.active}'\r
            @click='props.active = i'\r
        >\r
            {{item}}\r
        </button>\r
    </div>\r
</div>\r
\r
<div class='grid columns-2 p-1 bg-grey-800 gap-1'>\r
    <button \r
        v-for='i in [1, 6, 12, 18 ]' \r
        class='btn btn-grey-700'\r
        @click='props.active = i'\r
    >\r
        Jump to Item {{i}}\r
    </button>\r
</div>`,Ig={class:`grid-info-cq-xs-80 gap-1 grid`},Lg=b(`span`,null,`Block`,-1),Rg=[`onUpdate:modelValue`],zg={class:`grid-info-cq-xs-80 gap-1 grid`},Bg=b(`span`,null,`Behavior`,-1),Vg=[`onUpdate:modelValue`],Hg={class:`grid-info-cq-xs-80 gap-1 grid`},Ug=b(`span`,null,`Active`,-1),Wg=[`onUpdate:modelValue`],Gg=[`value`],Kg=c({__name:`example.story`,setup(e){let t=Array.from({length:20},(e,t)=>`Item ${t}`),n={props:{options:{parent:`.scroll-container`,block:`start`,behavior:`smooth`},active:8,list:t}};return(e,r)=>{let i=f(`pockets-story-demo`),a=f(`pockets-story-demo-container`);return u(),L(a,{state:x(n)},{default:A(({state:e})=>[z(i,{html:x(Fg),state:e,renderDemo:`v-if`},null,8,[`html`,`state`])]),controls:A(({state:e})=>[b(`label`,Ig,[Lg,F(b(`select`,{"onUpdate:modelValue":t=>e.props.options.block=t,class:`form-select`},[(u(),S(E,null,p([`start`,`center`,`end`],e=>b(`option`,null,B(e),1)),64))],8,Rg),[[I,e.props.options.block]])]),b(`label`,zg,[Bg,F(b(`select`,{"onUpdate:modelValue":t=>e.props.options.behavior=t,class:`form-select`},[(u(),S(E,null,p([`auto`,`smooth`],e=>b(`option`,null,B(e),1)),64))],8,Vg),[[I,e.props.options.behavior]])]),b(`label`,Hg,[Ug,F(b(`select`,{"onUpdate:modelValue":t=>e.props.active=t,class:`form-select`},[(u(!0),S(E,null,p(x(t),(e,t)=>(u(),S(`option`,{value:t},B(e),9,Gg))),256))],8,Wg),[[I,e.props.active]])])]),_:1},8,[`state`])}}}),qg=r({__storyData:()=>Yg,default:()=>Jg}),Jg=Kg,Yg={route:`pockets vue/directives/scroll-into-view/example`,directive:`@pockets-directives/scroll-into-view`,directiveName:`v-scroll-into-view`,header:{sourceFile:`@pockets-directives/scroll-into-view`,missingSourceFile:!1},storyIcon:`fa fa-code`,componentInfo:{description:`Scrolls an element into view relative to its parent container.`,props:{enabled:{type:{name:`boolean`},description:`If true, the element will be scrolled into view.`,default:`true`,required:!1},parent:{type:{name:`string<css selector> | HTMLElement | null`},description:`Scroll container to use. Defaults to immediate parent element.`,required:!1},behavior:{type:{name:`'auto'|'smooth'`},description:`Scroll animation behavior.`,default:`'smooth'`,required:!1},block:{type:{name:`'start'|'center'|'end'`},description:`Alignment position within the parent container.`,default:`'start'`,required:!1},mountedDelay:{type:{name:`number`},description:`Delay in milliseconds before initial mounted scroll occurs.`,default:`100`,required:!1}}}},Xg=r({__storyData:()=>Zg,default:()=>Qg}),Zg={route:`pockets vue/stories/about`,title:`About`,priority:-1e3,storyIcon:`fa fa-eraser`},Qg=`\r
# About Stories\r
\r
Stories are a way to create documentation within your project. They provide a structured way to write guides, reference material, and component examples. It's what this entire documentation system is built with. \r
\r
Stories come in two types: \`.vue\` and \`.md\`.\r
\r
- \`.md\` stories are written using Markdown and are best suited for written documentation such as guides and explanations.\r
\r
- \`.vue\` stories are Vue components that allow you to render components or directives directly in the documentation, making it possible to create interactive examples and demonstrations.\r
\r
### Creating a Story\r
\r
To create a story, create a file somewhere in your Vue project folder. The file name can be anything, but it must end in \`.story.vue\` or \`.story.md\`.\r
\r
For example: \`\`\`my-document.story.md\`\`\` or \`\`\`my-document.story.vue\`\`\`\r
\r
Stories can exist anywhere inside your Vue project. As long as the file ends in \`\`\`.story.vue\`\`\` or \`\`\`.story.md\`\`\`, it will be discovered and included in the documentation system.\r
\r
This allows documentation to live close to the components or features they describe, keeping documentation organized and easier to maintain.\r
\r
### Front Matter\r
\r
All stories use \`\`\`front-matter metadata\`\`\` at the top of the file to define information about the story. This metadata is written between \`---\` lines and is used to configure how the story appears in the documentation.\r
\r
For example:\r
\r
\`\`\`md\r
---\r
route: 'pockets vue/stories/about'\r
title: 'About'\r
---\r
\`\`\`\r
\r
#### Available Properties:\r
---\r
\`\`\`ts \r
route: (string) required\r
\`\`\`\r
This is the path you want your document to show up in. The sidebar for this documentation is built using this structure. \r
For example, if you set route to \`\`\`my/document/about\`\`\` then it should show up in the sidebar under \`\`\`my/document/about\`\`\`\r
\r
---\r
\`\`\`ts\r
title: (string) optional\r
\`\`\`\r
If you set this, it will be used as the file entry in the sidebar. For example, if you set it to \`\`\`Foo\`\`\` instead of showing \r
\`\`\`my/document/about/\`\`\` it would show \`\`\`my/document/Foo\`\`\`\r
\r
---\r
\r
\`\`\`ts\r
storyIcon: (string) optional\r
\`\`\`\r
If you set this, it will be used for the stories icon wherever it's rendered, such as in the sidebar\r
\r
---\r
\r
\`\`\`ts\r
priority: (number) optional defaults to 1\r
\`\`\`\r
By default, sorting in the sidebar is done by name, with \`\`\`.md\`\`\` files sorting above the \`\`\`.vue\`\`\` files. You can change\r
the order this item is shown in by setting a priority. Lower will sort to the top and higher to the bottom.\r
\r
---\r
\r
### For Componments\r
\r
--- \r
\r
\`\`\`ts\r
tag: (string)  optional\r
\`\`\`\r
For \`\`\`.vue\`\`\` component stories, you can set this to the element your component uses. For example if you set this to \`\`\`my-component\`\`\`, it\r
would show in the tag field as \`\`\`<my-component>\`\`\`\r
\r
---\r
\`\`\`ts\r
component: (string)  optional\r
\`\`\`\r
For \`\`\`.vue\`\`\` stories, you can set this to the element path of your component. This must be the full path and include extension.\r
For example, \`\`\`my/component/index.vue\`\`\`.\r
\r
If set, this will read the vue file and populate any information about it such as:\r
\r
- component props\r
- available slots\r
- emitted events\r
- other component metadata\r
\r
---\r
\r
### For directives\r
---\r
\r
\r
\`\`\`ts\r
directiveName: (string)  optional\r
\`\`\`\r
\r
If set, will show in the header. For example:\r
\r
\`\`\`ts\r
directiveName: v-my-directive\r
\`\`\`\r
\r
---\r
\`\`\`ts\r
directive: (string)  optional\r
\`\`\`\r
For \`\`\`.vue\`\`\` stories, you can set this to the element path of your directive. This must be the full path and include extension.\r
For example, \`\`\`my/directive/index.ts\`\`\`.\r
\r
If set, this will read the file and populate any information about it such as:\r
\r
- directive description\r
- directive props\r
\r
Note, for this system to be able to read documentation on directives, you must put the comments directly above the export default. For example:\r
\r
\`\`\`\r
\r
let myDirective = {\r
\r
}\r
\r
/**\r
    @description My directive description\r
    @property {type} [name] My property description\r
\r
*/\r
export default {\r
    ...myDirective\r
}\r
\`\`\`\r
\r
---\r
\r
### story.md\r
\r
Markdown stories are used for written documentation such as guides, explanations, or general documentation pages.\r
\r
An Example: \r
\r
\`\`\`md\r
---\r
title: "Example - Component"\r
route: "pockets vue/stories/component-story"\r
\r
---\r
# Hello world\r
Lorem Ipsum\r
\`\`\`\r
\r
### story.vue\r
\r
Vue stories are written using the \`\`\`.story.vue\`\`\` file extension and allow you to create interactive documentation using Vue components.\r
\r
Because these stories are Vue components, you can:\r
\r
- render live components\r
- demonstrate UI behavior\r
- create interactive examples\r
- bind props and state\r
\r
Combine documentation with live demos!\r
 \r
##### Example:\r
\`\`\`ts\r
---\r
title: "Example - Component"\r
route: "pockets vue/stories/component-story"\r
---\r
<template>\r
<pockets-story-demo-container\r
    :state="initialState"\r
>\r
    <template #default="{ state }">\r
        <pockets-story-demo\r
            :html="HTML"\r
            :state="state"\r
        >\r
        </pockets-story-demo>\r
    </template>\r
</pockets-story-demo-container>\r
</template>\r
<script setup lang="ts">\r
\r
import HTML from "./component-example.html?raw";\r
let initialState = {\r
    foo: "bar"\r
}\r
<\/script>\r
\`\`\`\r
\r
### Adding Documents\r
\r
When you've finished creating your documentation, don't forget to re-build your project so the documents will appear in the new build.\r
\r
### Documenting your components\r
\r
Writing documentation for your components is as simple as writing comments in it. \r
Under the hood, components are parsed using [Vue docgen api](https://www.npmjs.com/package/vue-docgen-api). This library will automatically parse the comments you write in your components and transform them into documentation that is shown in the Pockets Documenation system. \r
\r
There are additional special properties that can be added to comments to trigger special handling: \r
\r
---\r
##### @component-description\r
\r
Can be put anywhere in your \`\`\`<script>\`\`\` tag. This will set the description content under component info. \r
\r
For example:\r
\`\`\`\r
/*\r
    @component-description\r
    This will show up in the description tab\r
*/\r
\`\`\`\r
---`,$g=`<div class='p-4 text-white bg-grey-800 grid gap-2'>\r
    <div class='grid-info-120'><span>Value of foo</span> {{props.foo}}</div>\r
    You can use this folder as a starting point for your VUE story.\r
</div>`,e_=c({__name:`example.story`,setup(e){let t={props:{foo:`bar`}};return(e,n)=>{let r=f(`pockets-story-demo`),i=f(`pockets-story-demo-container`);return u(),L(i,{state:x(t)},{default:A(({state:e})=>[z(r,{html:x($g),state:e},null,8,[`html`,`state`])]),_:1},8,[`state`])}}}),t_=r({__storyData:()=>r_,default:()=>n_}),n_=e_,r_={title:`Example - Component`,route:`pockets vue/stories/component-story`,header:{sourceFile:!1,missingSourceFile:!1},storyIcon:`fa fa-code`},i_=`<pockets-story-iframe\r
    :html="props.html"\r
>\r
</pockets-story-iframe>`,a_=`<div class='p-4 text-white bg-grey-800'>\r
    This is an example component story rendered in an iframe.\r
    You can use this folder as a starting point for your VUE story.\r
</div>`,o_=c({__name:`example-iframe.story`,setup(e){let t={props:{html:a_}};return(e,n)=>{let r=f(`pockets-story-demo`),i=f(`pockets-story-demo-container`);return u(),L(i,{state:x(t)},{default:A(({state:e})=>[z(r,{html:x(i_),state:e},null,8,[`html`,`state`])]),_:1},8,[`state`])}}}),s_=r({__storyData:()=>l_,default:()=>c_}),c_=o_,l_={title:`Example - Iframe`,route:`pockets vue/stories/iframe-component-story`,header:{sourceFile:!1,missingSourceFile:!1},storyIcon:`fa fa-code`},u_=r({__storyData:()=>d_,default:()=>f_}),d_={route:`pockets vue/stories/example-story-markdown`,title:`Example - Markdown`,storyIcon:`fa fa-book`},f_=`\r
# Example Story\r
\r
You can use this file as a starting point for your MD story.`,p_={key:0,class:`grid gap-1`},m_=b(`span`,{class:`text-primary-lt`},`Results`,-1),h_=b(`span`,{class:`text-primary-lt`},`HTML`,-1),g_=b(`span`,{class:`text-primary-lt`},`Data`,-1),__={class:`grid columns-2 gap-2`},v_=[`onClick`,`disabled`],y_=[`onClick`,`disabled`],b_=c({__name:`sandbox.story`,setup(e){let t={props:{state:{foo:`bar`},innerHTML:`Edit this content {{foo}}`}};return(e,n)=>{let r=f(`render-html`),i=f(`pockets-ux-code-editor`),a=f(`pockets-ux-json-editor`),o=f(`pockets-temp-state`),s=f(`pockets-story-demo`),c=f(`pockets-story-demo-container`);return u(),L(c,{state:x(t),"local-storage":`pockets-vue-sandbox`},{default:A(({state:e})=>[z(s,{state:e.props.state,"onUpdate:state":t=>e.props.state=t,html:e.props.innerHTML},{demo:A(({error:t})=>[t?V(``,!0):(u(),S(`div`,p_,[m_,z(r,{innerHTML:e.props.innerHTML,state:e.props.state},null,8,[`innerHTML`,`state`])])),z(o,{state:e.props,"onUpdate:state":t=>e.props=t},{default:A(({state:e,update:t,cancel:n,hasChanges:r})=>[h_,z(i,{modelValue:e.innerHTML,"onUpdate:modelValue":t=>e.innerHTML=t},null,8,[`modelValue`,`onUpdate:modelValue`]),g_,z(a,{modelValue:e.state,"onUpdate:modelValue":t=>e.state=t},null,8,[`modelValue`,`onUpdate:modelValue`]),b(`div`,__,[b(`button`,{onClick:t,class:`btn btn-confirm p-2`,disabled:!r},`Update`,8,v_),b(`button`,{onClick:n,class:`btn btn-danger p-2 text-white`,disabled:!r},`Cancel`,8,y_)])]),_:2},1032,[`state`,`onUpdate:state`])]),_:2},1032,[`state`,`onUpdate:state`,`html`])]),_:1},8,[`state`])}}}),x_=r({__storyData:()=>C_,default:()=>S_}),S_=b_,C_={route:`pockets vue/sandbox`,title:`Sandbox`,header:{sourceFile:!1,missingSourceFile:!1},storyIcon:`fa fa-code`},w_=r({__storyData:()=>T_,default:()=>E_}),T_={route:`/`,title:`Welcome`,storyIcon:`fa fa-book`},E_=`\r
## Welcome to Pockets documentation system\r
\r
This is the main spot for all the info on Pockets. You can find detailed references, guides, interactive examples, and a bunch of tools and utilities to aide in your development.\r
\r
The sidebar on the left is your map: expand the sections to jump into whatever you need. There's a search box up top if you want to skip straight to something specific.\r
\r
That's it. Dive in and grab what you're looking for.`,D_=r({__storyData:()=>O_,default:()=>k_}),O_={route:`pockets-nodes/router/about`,storyIcon:`fa fa-book`},k_=`\r
## Pockets Nodes - Tree Router View \r
\r
This component is a simple wrapper that loads and renders data for the current route. \r
When a route changes, it loads the coresponding data for that route. It will render the new document tree and also update the document title. \r
\r
It also does basic pre-fetching when a user hovers over a link. This only applies to URLS for the current site. \r
`,A_=r({__storyData:()=>M_,default:()=>j_}),j_={__name:`example.story`,setup(e){let t={};return(e,n)=>{let r=f(`pockets-story-demo-container`);return u(),L(r,{state:x(t),html:x(`<div>
    This Component has no demo.
</div>`)},null,8,[`state`,`html`])}}},M_={route:`pockets-nodes/router/example`,component:`@pockets-node-tree/components/tree-router-view/index.vue`,tag:`pockets-node-tree-router-view`,header:{sourceFile:`@pockets-node-tree/components/tree-router-view/index.vue`,missingSourceFile:!1},storyIcon:`fa fa-code`,componentInfo:{exportName:`default`,displayName:`tree-router-view`,description:``,tags:{},props:{autoCacheCurrentRoute:{name:`autoCacheCurrentRoute`,description:`If true, will do a CRUD read for the current route when initially loaded.
        If route was pre-cached, this will do nothing.`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`true`}},read:{name:`read`,description:`What fields to read.`,required:!1,type:{name:`{\r
    [key: string]: unknown;\r
}`},defaultValue:{func:!1,value:`() => ({\r
    document_title: "",\r
    document_tree: ""\r
})`}}},events:{},slots:[{name:`default`,description:`Before this component mounts, it will render the slot contents. Once mounted, this will be replaced
        by the result of the route query.`}],sourceFiles:[`C:/Users/Justin/Documents/Workspace/xampp/apps/pockets/htdocs/wp-content/plugins/pockets/vue/dev/packages/@pockets-node-tree/components/tree-router-view/index.vue`]}},N_=r({__storyData:()=>P_,default:()=>F_}),P_={route:`pockets-nodes/about`,storyIcon:`fa fa-book`},F_=`\r
## Pockets Nodes\r
Pockets Nodes is a system for creating and managing structured HTML content through a visual editor. It provides a way to build, edit, and organize page structures directly within an interface that represents the underlying markup.\r
\r
The goal is to make working with structured content more transparent and manageable by exposing the hierarchy and relationships between elements. Instead of relying on abstract blocks or rigid templates, content can be assembled and modified in a way that closely reflects the final HTML structure, making it easier to understand, maintain, and extend.`,I_=r({__storyData:()=>L_,default:()=>R_}),L_={route:`pockets vue/components/router/about`,storyIcon:`fa fa-book`},R_=`\r
## About Pockets Router`,z_=r({__storyData:()=>B_,default:()=>V_}),B_={route:`pockets vue/components/html-editor/about`,storyIcon:`fa fa-book`},V_="\r\n## HTML Editor\r\n#### ```pockets-wysiwyg ```\r\n\r\nAn HTML Editor",H_=`<pockets-wysiwyg \r
    class='p-2 bg-grey-800'\r
    v-bind='props'\r
    v-model='props.modelValue'\r
/>`,U_=[`innerHTML`],W_={class:`grid-info-120`,role:`button`},G_=b(`span`,null,`Editable`,-1),K_=[`onUpdate:modelValue`],q_={class:`grid-info-120`,role:`button`},J_=b(`span`,null,`Delay`,-1),Y_=[`onUpdate:modelValue`],X_=c({__name:`example.story`,setup(e){let t=()=>({props:{editorConfig:{editable:!0},updateDelay:500,modelValue:`<p>I am editable content.</p><p>Click anywhere in here to see the editor.</p><p>You can also select elements or text to see additional options.</p>`}});return(e,n)=>{let r=f(`pockets-story-demo`),i=f(`pockets-story-demo-container`);return u(),L(i,{state:x(t),"local-storage":`pockets-wysiwyg-demo`},{default:A(({state:e})=>[(u(),L(r,{state:e,html:x(H_),key:e.props.updateDelay},{results:A(()=>[b(`div`,{innerHTML:e.props.modelValue},null,8,U_)]),_:2},1032,[`state`,`html`]))]),controls:A(({state:e})=>[b(`label`,W_,[G_,F(b(`input`,{type:`checkbox`,"onUpdate:modelValue":t=>e.props.editorConfig.editable=t,class:`form-control-switch fs-30 ms-auto`},null,8,K_),[[j,e.props.editorConfig.editable]])]),b(`label`,q_,[J_,F(b(`input`,{type:`number`,"onUpdate:modelValue":t=>e.props.updateDelay=t,class:`form-control`},null,8,Y_),[[C,e.props.updateDelay]])])]),_:1},8,[`state`])}}}),Z_=r({__storyData:()=>$_,default:()=>Q_}),Q_=X_,$_={tag:`pockets-wysiwyg`,route:`pockets vue/components/html-editor/example`,component:`@pockets-tip-tap/components/editor/index.vue`,header:{sourceFile:`@pockets-tip-tap/components/editor/index.vue`,missingSourceFile:!1},storyIcon:`fa fa-code`,componentInfo:{exportName:`default`,displayName:`editor`,description:``,tags:{},props:{modelValue:{name:`modelValue`,description:`HTML to edit.`,required:!0,type:{name:`string`}},editorConfig:{name:`editorConfig`,required:!1,type:{name:`{\r
  /**\r
    If false, editor will be disabled.\r
  */\r
  editable: boolean \r
}`},defaultValue:{func:!1,value:`() => ( {\r
  editable: true\r
} )`}},updateDelay:{name:`updateDelay`,description:`How long in ms to delay updating state when changes are made. Set to 0 to disable debounce.`,required:!1,type:{name:`number`},defaultValue:{func:!1,value:`1000`}},name:{name:`name`,description:`If name is a string, it will add a hidden input field with name as its name. Useful
    for when you wish for the editor content to show up as a form field in forms.`,required:!1,type:{name:`union`,elements:[{name:`false`},{name:`string`}]},defaultValue:{func:!1,value:`false`}}},events:{"update:modelValue":{name:`update:modelValue`,description:`Emits editor contents when change occurs. THis is set to a debounce based on the 
    updateDelay property.`}},sourceFiles:[`C:/Users/Justin/Documents/Workspace/xampp/apps/pockets/htdocs/wp-content/plugins/pockets/vue/dev/packages/@pockets-tip-tap/components/editor/index.vue`]}},ev=r({__storyData:()=>tv,default:()=>nv}),tv={route:`pockets-woo/cart/api`,title:`Cart API`,storyIcon:`fa fa-book`},nv="## Pockets Woo Cart Api\r\n### ```pockets-woo-cart```\r\n\r\nPockets woo provides an api to woocommerces cart. \r\n \r\n",rv=`<pockets-woo-cart\r
    v-bind='props'\r
    #default='cart'\r
>\r
    <div class='results p-2 bg-grey-800 text-white loading-container' :loading='cart.isLoading'>\r
        <pre>{{ cart }}</pre>\r
        <button @click='cart.api.hash++' class='btn btn-confirm'>\r
            Refresh Cart\r
        </button>\r
    </div>\r
</pockets-woo-cart>`,iv=r({__storyData:()=>ov,default:()=>av}),av={__name:`crud.story`,setup(e){let t=()=>({props:{query:{model:`woo/cart`,action:`read`,init:{},input:{total:``}}}});return(e,n)=>{let r=f(`pockets-story-demo-container`);return u(),L(r,{state:x(t),html:x(rv)},null,8,[`state`,`html`])}}},ov={tag:`pockets-woo-cart`,route:`pockets-woo/cart/component-example`,component:`@pockets-woo/cart/wrapper.vue`,header:{sourceFile:`@pockets-woo/cart/wrapper.vue`,missingSourceFile:!1},storyIcon:`fa fa-code`,componentInfo:{exportName:`default`,displayName:`wrapper`,description:``,tags:{},props:{query:{name:`query`,description:`Query Used for cart`,required:!0,type:{name:`intersection`,elements:[{name:`crudConnection`},{name:`{\r
    hash: any\r
}`}]}},cartId:{name:`cartId`,description:`Used to trigger opening/closing/showing cart instance`,required:!1,type:{name:`string`},defaultValue:{func:!1,value:`"global"`}}},events:{},slots:[{name:`default`,scoped:!0,bindings:[{name:`api`,title:`binding`},{name:`results`,title:`binding`},{name:`isOpen`,title:`binding`},{name:`isLoading`,title:`binding`},{name:`v-bind`,title:`binding`},{name:`ID`,title:`binding`}],description:`Provides an api for the accordion.`,tags:{binding:[{title:`binding`,type:{name:`object | boolean `},name:`results`,description:`Results of cart query. Will be false the first time until query conclued`},{title:`binding`,type:{name:` boolean `},name:`isLoading`,description:`When local cart is loading, this will be true`},{title:`binding`,type:{name:`boolean `},name:`isOpen`,description:`Is cart currently open/showing`},{title:`binding`,type:{name:` object `},name:`api`,description:`Woos main cart api`},{title:`binding`,type:{name:` string `},name:`ID`,description:`refers to the cartId prop passed in.`}]}}],sourceFiles:[`C:/Users/Justin/Documents/Workspace/xampp/apps/pockets/htdocs/wp-content/plugins/pockets/vue/dev/packages/@pockets-woo/cart/wrapper.vue`]}},sv=r({__storyData:()=>cv,default:()=>lv}),cv={route:`pockets-woo/about`,title:`About`,storyIcon:`fa fa-book`},lv=`\r
## Pockets Woo\r
\r
Pockets woo provides functionality that builds off of standard woocommerce functionality.\r
- A set of components that can be used to build things like an ajax driven cart.\r
- A set of directives that can be used to enhance things like woo forms, to tranform them into ajax driven forms. \r
`,uv=r({__storyData:()=>dv,default:()=>fv}),dv={route:`pockets-woo/directives/Form Handlers`,title:`Form Handlers`,storyIcon:`fa fa-book`},fv=`\r
## Pockets Woo Directives\r
\r
Pockets woo comes with directives that make modifying or enhancing woocommerce functionality.\r
\r
### \`\`\`v-pockets-woo-form-handler\`\`\`\r
\r
This directive can be used to turn any woo form into an ajax form with automatic\r
success and error handling. It will seamlessly interact with things like pockets woo cart api.\r
\r
\`\`\`html\r
<some-el\r
    v-pockets-woo-form-handler="{\r
        action: "anAction",\r
        success: "A success message",\r
        error: "An error message"\r
    }"\r
>\r
</some-el>\r
\`\`\`\r
\r
The directive expects an object containing: \r
\r
- action: \`\`\`"cart.addItem" | "cart.removeItem"\`\`\`\r
- success: \`\`\`string | function | bool\`\`\`\r
- error: \`\`\`string | function | bool\`\`\`\r
\r
Error and success can be either a string a function or a boolean. \r
- If it's a string, a toast will show when the form submits. \r
- If it's a function, the function will be called when the form submits.\r
- if it's a boolean, nothing will happen when the form submits.\r
\r
### \`\`\`v-pockets-woo-cart-form-init\`\`\`\r
\r
Can be attached to woos cart form to apply initiation logic when the form\r
is mounted.\r
 \r
\`\`\`html\r
<some-el\r
    v-pockets-woo-cart-form-init="{\r
    }"\r
>\r
</some-el>\r
\`\`\`\r
\r
### \`\`\`v-pockets-woo-checkout-form-init\`\`\`\r
\r
Can be attached to woos checkout form to apply initiation logic when the form\r
is mounted.\r
\r
\`\`\`html\r
<some-el\r
    v-pockets-woo-checkout-form-init="{\r
    }"\r
>\r
</some-el>\r
\`\`\`\r
\r
### \`\`\`v-pockets-woo-variation-form-init\`\`\`\r
\r
Can be attached to woos variation form to apply initiation logic when the form\r
is mounted.\r
\r
\`\`\`html\r
<some-el\r
    v-pockets-woo-variation-form-init="{\r
    }"\r
>\r
</some-el>\r
\`\`\`\r
\r
When this directive is applied, it attaches logic that tracks when a variation is selected in the form. It will set \`\`\`$pockets.woo.variation_form.selected\`\`\` to the selected variation. This state is reactive.\r
\r
This state is populated by woocommerce for each variation. A variety of information such as the variations price is added by default in woocommerce.\r
\r
To modify data available on a selected variation:\r
\r
\`\`\`php\r
add_filter( 'woocommerce_available_variation', function( $variation_data, $product, $variation ) {\r
\r
    $variation_data['some_data'] = 'foo';\r
\r
    return $variation_data;\r
\r
}, 10, 3 );\r
\`\`\`\r
\r
You can use this data anywhere in a vue template:\r
\r
\r
\`\`\`html\r
<div v-if='$pockets.woo.variation_form.selected'>\r
    {{ $pockets.woo.variation_form.selected.some_data }}\r
</div>\r
\`\`\`\r
`,pv={key:0},mv=b(`i`,{class:`nav-icon`},null,-1),hv=`pockets-documentation-nav-walker`,gv=c({name:hv,__name:`walker`,props:{children:{},path:{},fullPath:{},meta:{}},setup(e){let t=e,n=se(),r=w(!1),i=D(()=>(t.children??[]).slice().sort((e,t)=>{let n=e.meta?.title??e.path,r=t.meta?.title??t.path;return n.localeCompare(r)}).sort((e,t)=>{let n=Array.isArray(e.children)&&e.children.length>0,r=Array.isArray(t.children)&&t.children.length>0;return n&&!r?1:!n&&r?-1:0}).sort((e,t)=>(Number.isFinite(e.meta?.priority)?e.meta.priority:0)-(Number.isFinite(t.meta?.priority)?t.meta.priority:0))),a=e=>e.replace(/-/g,` `).replace(/^./,e=>e.toUpperCase()),o=D(()=>r.value?!0:i.value.some(e=>n.path.startsWith(e.fullPath))),s=D(()=>!t.path),c=e=>{r.value=e.newState===`open`},l=D(()=>s.value?`div`:`details`);return(e,r)=>{let d=f(`pockets-router-link`),h=f(`pockets-documentation-nav-walker`),g=y(`scroll-into-view`);return u(),L(v(x(l)),{open:o.value,onToggle:c,class:R(hv)},{default:A(()=>[s.value?V(``,!0):(u(),S(`summary`,pv,[mv,b(`span`,null,B(x(t).meta?.title??a(x(t).path??``)),1)])),b(`ul`,null,[(u(!0),S(E,null,p(i.value,e=>(u(),S(`li`,{key:e.fullPath},[e.children?V(``,!0):F((u(),L(d,{key:0,to:e?.meta?.link??e.fullPath,class:R({active:e.fullPath===x(n).path})},{default:A(()=>[b(`i`,{class:R([`nav-icon`,e.meta?.storyIcon??`fa fa-circle`])},null,2),b(`span`,null,B(e.meta?.title??a(e.path)),1)]),_:2},1032,[`to`,`class`])),[[g,{enabled:e.fullPath===x(n).path,parent:`.pockets-dashboard-sidebar-body`}]]),e.children?(u(),L(h,m({key:1,ref_for:!0},e),null,16)):V(``,!0)]))),128))])]),_:1},40,[`open`])}}}),_v=e=>(l(`data-v-a3b9a8e4`),e=e(),g(),e),vv={class:`col-12 p-2 bg-grey-800 grid columns-1 gap-2 text-white search-container max-width-lg m-auto shadow-menu`,style:{height:`80vh`}},yv={class:`d-flex align-items-stretch gap-10 border-4 border-bottom border-grey-md pb-2`},bv={class:`flex-grow-1`},xv={class:`d-flex`},Sv=[`value`],Cv=_v(()=>b(`button`,{class:`btn btn-grey-700`},[b(`i`,{class:`fa fa-search`})],-1)),wv=[_v(()=>b(`i`,{class:`fa fa-times`},null,-1))],Tv={class:`panel-container fs-20`},Ev={key:0},Dv={key:1,class:`text-start`},Ov={class:`m-0`},kv={class:`text-primary-lt fw-8`},Av={class:`grid columns-1 gap-1`},jv={class:`bg-grey-700 p-2`},Mv={class:`lh-20 text-capitalize`},Nv=G({__name:`content`,setup(e){let t=oe(),n=t.$api.useQuery(),r=w();function i(e){let t=e.path.substring(1).replaceAll(`-`,` `).split(`/`).join(` / `);return t==``&&(e?.meta?.title??!1)?e.meta.title:t}let a=D(()=>{let e=t.getRoutes(),{search:r=``}=n.value;if(r=r.toLowerCase(),r==``)return[];let i={type:(e,{storyType:t=``})=>[`md`,`vue`].includes(t),storyMD:(e,{storyType:t=``,content:n=null,title:i=null})=>{if(t!=`md`||e.path.toLowerCase().includes(r)||n&&n.length>0&&n.toLowerCase().includes(r)||i&&i.length>0&&i.toLowerCase().includes(r))return!0},storyComp:(e,{storyType:t=``,tag:n=``,component:i=``,title:a=!1})=>{if(t!=`vue`||e.path.toLowerCase().includes(r)||n.toLowerCase().includes(r)||i.toLowerCase().includes(r)||a&&a.length>0&&a.toLowerCase().includes(r))return!0}},a=[i.type,i.storyMD,i.storyComp];return e=e.filter(e=>a.every(t=>t(e,e.meta))).slice(0,50).sort((e,t)=>(t.meta.storyType===`md`)-(e.meta.storyType===`md`)),e}),o=()=>{n.value={...n.value,showSearch:null}},c=e=>{n.value={...n.value,...e}};return U(()=>{r.value.focus()}),(e,t)=>{let l=f(`pockets-router-link`),d=y(`pockets-form-handler`),m=y(`tooltip`);return u(),S(`div`,vv,[b(`div`,yv,[F((u(),S(`form`,bv,[b(`div`,xv,[b(`input`,{class:`form-control p-1`,placeholder:`Enter search`,ref_key:`searchBar`,ref:r,value:x(n).search,name:`search`,autocomplete:`off`},null,8,Sv),Cv])])),[[d,{submit:x(c)}]]),F((u(),S(`button`,{class:`btn btn-grey-700`,onClick:t[0]||=(...e)=>x(o)&&x(o)(...e)},wv)),[[m,`Close search`]])]),b(`div`,Tv,[!x(n).search||x(n).search.length==0?(u(),S(`div`,Ev,` Enter a search to see results. `)):V(``,!0),x(n).search&&x(n).search.length!=0&&x(a).length==0?(u(),S(`div`,Dv,[b(`p`,Ov,[s(`Sorry, no results for `),b(`span`,kv,`"`+B(x(n).search)+`"`,1),s(`.`)])])):V(``,!0),b(`div`,Av,[(u(!0),S(E,null,p(x(a),e=>(u(),S(`div`,null,[b(`div`,jv,[z(l,{to:e.path,class:`grid gap-1 align-items-center lh-40 text-decoration-none`,style:{"grid-template-columns":`40px 1fr`}},{default:A(()=>[b(`i`,{class:R(e.meta.storyIcon)},null,2),b(`span`,Mv,B(i(e)),1)]),_:2},1032,[`to`])])]))),256))])])])}}},[[`__scopeId`,`data-v-a3b9a8e4`]]),Pv=[b(`i`,{class:`fa fa-search`},null,-1)],Fv={__name:`index`,setup(e){let t=oe().$api.useQuery(),n=e=>{t.value={...t.value,showSearch:e==0?null:e}};return(e,r)=>{let i=f(`pockets-modal`),a=y(`tooltip`);return u(),S(E,null,[F((u(),S(`button`,{class:`btn btn-grey-700 p-half px-1`,onClick:r[0]||=e=>x(n)(x(t).showSearch==`true`?null:`true`)},Pv)),[[a,`Search documents`]]),z(i,{class:`d-flex`,open:x(t).showSearch==`true`,"onUpdate:open":x(n),"click-outside":!0,style:{"z-index":`99`}},{default:A(()=>[z(Nv)]),_:1},8,[`open`,`onUpdate:open`])],64)}}},Iv={class:`grid gap-0 pockets-dashboard-sidebar-panel`},Lv={class:`d-flex align-items-center border-5 border-grey-500 border-bottom pockets-dashboard-sidebar-header p-1`},Rv={href:`/`,class:`d-block`,"history-mode":`html5`},zv=[`src`],Bv={class:`ms-auto`},Vv={class:`pockets-dashboard-sidebar-body p-2 fancy-scroll`},Hv=G({__name:`index`,setup(e){let t=K.inject.routes(),n=K.inject.documentationConfig();return(e,r)=>{let i=f(`pockets-drawer-panel`),a=f(`pockets-drawer-trigger`),o=f(`pockets-drawer`),s=y(`tooltip`);return u(),L(o,{class:`gap-0 pockets-dashboard-sidebar bg-grey-700`},{default:A(()=>[z(i,{class:`border border-5 border-grey-500 bg-grey-800`,style:{"--expand":`320px`,"--collapse":`0px`,overflow:`hidden`,"min-height":`0`,"grid-row":`1`,"grid-column":`1`}},{default:A(()=>[b(`div`,Iv,[b(`div`,Lv,[F((u(),S(`a`,Rv,[b(`img`,{src:x(n).assets.logo,style:{height:`30px`},class:`img-fluid`},null,8,zv)])),[[s,`Back to site`]]),b(`div`,Bv,[z(Fv)])]),b(`div`,Vv,[z(gv,{children:x(t)[0].children},null,8,[`children`])])])]),_:1}),F(z(a,{class:`pockets-dashboard-sidebar-trigger p-1 btn btn-grey-700 py-2`},null,512),[[s,{content:`Toggle sidebar`,placement:`right`}]])]),_:1})}}},[[`__scopeId`,`data-v-062d5f96`]]),Uv={key:0,class:`d-flex bg-grey-800 px-2 pockets-dashboard-dev-bar border-start border-end border-top border-5 border-grey-500`},Wv={class:`d-flex gap-0 justify-content-end flex-grow-1`},Gv={key:0,class:`align-items-stretch`},Kv={class:`bg-grey-700 d-flex`},qv=[`href`],Jv=[`onClick`],Yv={key:1,class:`align-items-stretch`},Xv={class:`bg-grey-700 d-flex`},Zv=[`href`],Qv=[`onClick`],$v=G({__name:`index`,setup(e){let t=K.inject.story();return(e,n)=>{let r=f(`pockets-ux-copy`),i=y(`tooltip`);return x(t)&&x(t).header?(u(),S(`div`,Uv,[b(`div`,Wv,[x(t).header.resolvedPath?(u(),S(`div`,Gv,[b(`div`,Kv,[F((u(),S(`a`,{target:`_self`,href:`vscode://file/${x(t).header.resolvedPath}`,class:`p-1 px-2 text-grey-md`},[s(` View target file `)],8,qv)),[[i,x(t).header.resolvedPath]]),z(r,{source:x(t).header.resolvedPath},{default:A(({copy:e})=>[F(b(`button`,{class:`btn btn-accent-dk text-white p-1 text-start rounded-0 border-0 fa fa-copy ms-auto`,onClick:e},null,8,Jv),[[i,`Click to copy file path`]])]),_:1},8,[`source`])])])):V(``,!0),x(t).header.storyPath?(u(),S(`div`,Yv,[b(`div`,Xv,[F((u(),S(`a`,{target:`_self`,href:`vscode://file/${x(t).header.storyPath}`,class:`p-1 px-2 text-grey-md`},[s(` View story file `)],8,Zv)),[[i,x(t).header.storyPath]]),z(r,{source:x(t).header.storyPath},{default:A(({copy:e})=>[F(b(`button`,{class:`btn btn-accent-dk text-white p-1 text-start rounded-0 border-0 fa fa-copy ms-auto`,onClick:e},null,8,Qv),[[i,`Click to copy file path`]])]),_:1},8,[`source`])])])):V(``,!0)])])):V(``,!0)}}},[[`__scopeId`,`data-v-a9e5c06e`]]),ey={key:0,class:`grid columns-1 gap-2 p-2`,style:{"--bs-link-color":`var(--bs-grey-md)`,"--bs-link-hover-color":`var(--bs-primary-lt )`}},ty=[h(`<h1 class="col-12 text-accent-lt fw-8" id=""> 404 Content Not Found </h1><div class="col-12 fs-18"><p class=""><strong>Well, this is awkward.</strong></p><p class="">It looks like the page you’re looking for has wandered off, never existed, or just isn’t here anymore. </p><p class=""><strong>Here are a few things you can try:</strong></p><ul><li><p class="">Double-check the URL for any typos.</p></li><li><p class=""><a class="" href="/">Head back to the homepage</a>.</p></li></ul></div>`,2)],ny={__name:`index`,setup(e){let t=se();return(e,n)=>x(t).meta.is404?(u(),S(`div`,ey,ty)):V(``,!0)}},ry={class:`pockets-dashboard-main border-5 border-top border-bottom border-grey-500 bg-grey-700 text-white fancy-scroll cq`},iy=G({__name:`index`,setup(e){return(e,t)=>{let n=f(`pockets-router-view`);return u(),S(`div`,ry,[z(ny),z(n)])}}},[[`__scopeId`,`data-v-e678eeb0`]]),ay={class:`pockets-dashboard`},oy=G({__name:`index`,setup(e){let t=se();return K.provide.story(D(()=>t.meta)),(e,t)=>(u(),S(`div`,ay,[z($v),z(Hv),z(iy)]))}},[[`__scopeId`,`data-v-c0aa16d6`]]),sy={class:`grid columns-1 gap-2 pockets-documentation-story-markdown bg-grey-700 pb-4`},cy=Object.assign({inheritAttrs:!1},{__name:`index`,setup(e){let t=K.inject.story();return(e,n)=>{let r=f(`pockets-render-markdown`);return u(),S(`div`,sy,[z(r,{class:`p-2 grid columns-1 gap-2`,content:x(t).content},null,8,[`content`])])}}}),ly=()=>Object.assign({"/packages/@pockets-components/UX/bootstrap/stories/about.story.md":ce,"/packages/@pockets-components/UX/bootstrap/stories/interface/about-interface.story.md":de,"/packages/@pockets-components/UX/bootstrap/stories/interface/example-interface.story.vue":ye,"/packages/@pockets-components/UX/bootstrap/stories/select/about-select.story.md":Se,"/packages/@pockets-components/UX/bootstrap/stories/select/example.select.story.vue":Ae,"/packages/@pockets-components/UX/code-block/stories/about.story.md":Ne,"/packages/@pockets-components/UX/code-block/stories/example.story.vue":ze,"/packages/@pockets-components/UX/code-editor/stories/example.story.vue":We,"/packages/@pockets-components/UX/color-picker/stories/about.story.md":qe,"/packages/@pockets-components/UX/color-picker/stories/example.story.vue":Qe,"/packages/@pockets-components/UX/copy/stories/example.story.vue":rt,"/packages/@pockets-components/UX/fancy-input/stories/about.story.md":ot,"/packages/@pockets-components/UX/fancy-input/stories/example.story.vue":yt,"/packages/@pockets-components/UX/fancy-select/stories/about.story.md":St,"/packages/@pockets-components/UX/fancy-select/stories/example.story.vue":Vt,"/packages/@pockets-components/UX/form/stories/interface/about-interface.story.md":Wt,"/packages/@pockets-components/UX/form/stories/interface/example-interface.story.vue":Xt,"/packages/@pockets-components/UX/json-editor/stories/example.story.vue":tn,"/packages/@pockets-components/UX/moveable/stories/about.story.md":an,"/packages/@pockets-components/UX/moveable/stories/example.story.vue":fn,"/packages/@pockets-components/UX/popper/stories/about.story.md":hn,"/packages/@pockets-components/UX/popper/stories/example.story.vue":bn,"/packages/@pockets-components/UX/range-slider/stories/about.story.md":Cn,"/packages/@pockets-components/UX/range-slider/stories/example.story.vue":Bn,"/packages/@pockets-components/UX/repeater/stories/about.story.md":Un,"/packages/@pockets-components/UX/repeater/stories/example.story.vue":ir,"/packages/@pockets-components/UX/selectable-tags/stories/example.story.vue":ur,"/packages/@pockets-components/UX/state-containers/stories/global-state/about.story.md":pr,"/packages/@pockets-components/UX/state-containers/stories/global-state/global-state.story.vue":yr,"/packages/@pockets-components/UX/state-containers/stories/local-state/about.story.md":Sr,"/packages/@pockets-components/UX/state-containers/stories/local-state/local-state.story.vue":Dr,"/packages/@pockets-components/UX/state-containers/stories/temp-state/about.story.md":jr,"/packages/@pockets-components/UX/state-containers/stories/temp-state/temp-state.story.vue":Fr,"/packages/@pockets-components/UX/time-input/example-component/example.story.vue":Br,"/packages/@pockets-components/UX/wp-object-selector/stories/about.story.md":Ur,"/packages/@pockets-components/UX/wp-object-selector/stories/example.story.vue":Jr,"/packages/@pockets-components/accordion/stories/about.story.md":Zr,"/packages/@pockets-components/accordion/stories/basic-example.story.vue":hi,"/packages/@pockets-components/accordion/stories/setting-options.story.vue":bi,"/packages/@pockets-components/drawer/stories/container-component.story.vue":Ti,"/packages/@pockets-components/drawer/stories/panel-component.story.vue":ki,"/packages/@pockets-components/drawer/stories/trigger-component.story.vue":Ni,"/packages/@pockets-components/example.story.md":Ii,"/packages/@pockets-components/google-map/stories/advanced-marker/about.story.md":zi,"/packages/@pockets-components/google-map/stories/advanced-marker/example.story.vue":Qi,"/packages/@pockets-components/google-map/stories/api-loader/about.story.md":ta,"/packages/@pockets-components/google-map/stories/api-loader/example.story.vue":oa,"/packages/@pockets-components/google-map/stories/auto-complete/about.story.md":la,"/packages/@pockets-components/google-map/stories/auto-complete/example.story.vue":ma,"/packages/@pockets-components/google-map/stories/map-container/about.story.md":_a,"/packages/@pockets-components/google-map/stories/map-container/example.story.vue":Sa,"/packages/@pockets-components/google-map/stories/map-loader/about.story.md":Ta,"/packages/@pockets-components/google-map/stories/map-loader/example.story.vue":Ma,"/packages/@pockets-components/modal/stories/about.story.md":Fa,"/packages/@pockets-components/modal/stories/modal.story.vue":Ua,"/packages/@pockets-components/pockets-app/stories/example.story.md":Ka,"/packages/@pockets-components/render-html/stories/about.story.md":Ya,"/packages/@pockets-components/render-html/stories/render-html.story.vue":ro,"/packages/@pockets-components/render-markdown/stories/about.story.md":oo,"/packages/@pockets-components/render-markdown/stories/example.story.vue":uo,"/packages/@pockets-components/slider/stories/about.story.md":mo,"/packages/@pockets-components/slider/stories/slider-data.story.vue":xo,"/packages/@pockets-components/slider/stories/slider-html.story.vue":Eo,"/packages/@pockets-components/slider/stories/slider-multiple.story.vue":jo,"/packages/@pockets-components/slider/stories/slider-slide-template.story.vue":Io,"/packages/@pockets-components/toast/stories/about.story.md":zo,"/packages/@pockets-components/toast/stories/component-example.story.vue":Wo,"/packages/@pockets-components/toast/stories/global.example.story.vue":Yo,"/packages/@pockets-components/utility/watch-state/stories/example.story.vue":es,"/packages/@pockets-components/wp-error/stories/about.story.md":rs,"/packages/@pockets-components/wp-error/stories/example.story.vue":ss,"/packages/@pockets-components/youtube/components/play-list/stories/example.story.vue":gs,"/packages/@pockets-components/youtube/components/player/stories/about.story.md":ys,"/packages/@pockets-components/youtube/components/player/stories/example.story.vue":Cs,"/packages/@pockets-core/crud/component/stories/about.story.md":Es,"/packages/@pockets-core/crud/component/stories/crud.story.vue":As,"/packages/@pockets-core/plugins/stories/example.story.md":Ns,"/packages/@pockets-core/stories/about.story.md":Is,"/packages/@pockets-core/stories/crud/about.story.md":zs,"/packages/@pockets-core/stories/crud/adding-data/meta-data.story.md":Hs,"/packages/@pockets-core/stories/crud/adding-data/options.story.md":Gs,"/packages/@pockets-core/stories/crud/models/about.story.md":Js,"/packages/@pockets-core/stories/crud/models/adapters.story.md":Zs,"/packages/@pockets-core/stories/crud/models/get-resource.story.md":ec,"/packages/@pockets-core/stories/crud/models/permissions.story.md":rc,"/packages/@pockets-core/stories/crud/models/resource-walker.story.md":oc,"/packages/@pockets-core/stories/crud/models/schemas.story.md":lc,"/packages/@pockets-core/stories/crud/query-builder/query-builder.story.vue":Kd,"/packages/@pockets-core/stories/installation.story.md":Qd,"/packages/@pockets-core/stories/layouts/about.story.md":tf,"/packages/@pockets-core/stories/layouts/card-layout/card-layout.story.vue":cf,"/packages/@pockets-core/stories/layouts/col-fill-layout/layout.story.vue":pf,"/packages/@pockets-core/stories/layouts/col-full-split/layout.story.vue":yf,"/packages/@pockets-core/stories/layouts/staggered-layout/card-layout.story.vue":Tf,"/packages/@pockets-core/stories/plugin-api/class-documents/about.story.md":Of,"/packages/@pockets-core/stories/plugin-api/class-documents/class-documents.story.vue":Sm,"/packages/@pockets-core/stories/plugin-api/templates/about.story.md":Dm,"/packages/@pockets-core/stories/plugin-api/templates/adding-new-template-folder.story.md":Am,"/packages/@pockets-core/stories/plugin-api/templates/loading-template.story.md":Nm,"/packages/@pockets-core/stories/plugin-api/templates/register-template.story.md":Im,"/packages/@pockets-core/stories/vue/pockets-vue.story.md":zm,"/packages/@pockets-core/stories/wp-admin/dashboard.story.vue":Hm,"/packages/@pockets-directives/click-outside/stories/about.story.md":qm,"/packages/@pockets-directives/click-outside/stories/example-component/example.story.vue":Qm,"/packages/@pockets-directives/confirm-action/stories/about.story.md":th,"/packages/@pockets-directives/confirm-action/stories/example-component/example.story.vue":wh,"/packages/@pockets-directives/debounce/stories/about.story.md":Dh,"/packages/@pockets-directives/debounce/stories/example-component/example.story.vue":Fh,"/packages/@pockets-directives/directive-events/stories/example-component/example.story.vue":Bh,"/packages/@pockets-directives/focus/stories/example-component/example.story.vue":Gh,"/packages/@pockets-directives/forms/stories/about.story.md":Jh,"/packages/@pockets-directives/forms/stories/form-handler-example/example.story.vue":$h,"/packages/@pockets-directives/forms/stories/form-submit-example/example.story.vue":ig,"/packages/@pockets-directives/hover-intent/stories/about.story.md":sg,"/packages/@pockets-directives/hover-intent/stories/example-component/example.story.vue":xg,"/packages/@pockets-directives/masonry/stories/about.story.md":wg,"/packages/@pockets-directives/masonry/stories/example-component/example.story.vue":kg,"/packages/@pockets-directives/scroll-into-view/stories/about.story.md":Mg,"/packages/@pockets-directives/scroll-into-view/stories/example-component/example.story.vue":qg,"/packages/@pockets-documentation/documents/creating-stories/about.story.md":Xg,"/packages/@pockets-documentation/documents/creating-stories/example-component/example.story.vue":t_,"/packages/@pockets-documentation/documents/creating-stories/example-iframe/example-iframe.story.vue":s_,"/packages/@pockets-documentation/documents/creating-stories/example.story.md":u_,"/packages/@pockets-documentation/documents/sandbox/sandbox.story.vue":x_,"/packages/@pockets-documentation/documents/welcome.story.md":w_,"/packages/@pockets-node-tree/components/tree-router-view/stories/about.story.md":D_,"/packages/@pockets-node-tree/components/tree-router-view/stories/example.story.vue":A_,"/packages/@pockets-node-tree/stories/about.story.md":N_,"/packages/@pockets-router/stories/about-router.story.md":I_,"/packages/@pockets-tip-tap/stories/about.story.md":z_,"/packages/@pockets-tip-tap/stories/example.story.vue":Z_,"/packages/@pockets-woo/cart/stories/about.story.md":ev,"/packages/@pockets-woo/cart/stories/crud.story.vue":iv,"/packages/@pockets-woo/stories/about.story.md":sv,"/packages/@pockets-woo/stories/directives.story.md":uv}),uy=()=>{let e=ly(),t=Object.entries(e).reduce((e,[t,n])=>(e[t]=n,e),{});return t=dy(t),[{path:`/`,fullPath:`/`,component:oy,children:t},{path:`/:params*`,fullPath:`/`,component:oy,meta:{is404:!0}}]};function dy(e){let t=Object.keys(e),n=[];for(let r of t){let t=e[r],i=t?.__storyData,a=i?.route;if(!a)continue;let o=a.replace(/^\/|\/$/g,``).split(`/`),s=o.join(`-`),c=n,l=``;for(let e=0;e<o.length;e++){let n=o[e].replaceAll(` `,`-`).toLowerCase();n.startsWith(`:`)||(l+=`/`+n);let a=c.find(e=>e.path===n);if(!a){let u={children:[]};e===o.length-1&&(t.default,r.endsWith(`.md`)&&(u={name:s,component:cy,meta:{storyType:`md`,...i,content:t.default??``}}),r.endsWith(`.vue`)&&(u={name:s,component:t.default??{template:`<div>Could not find story file</div>`},meta:{storyType:`vue`,...i}})),a={path:n,fullPath:l,...u},c.push(a)}c=a.children??[]}}return n}export{uy as t};