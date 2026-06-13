<template>

    <button 
        class="fa-regular fa-pen-to-square"
        :class="[{active: editor.mode=='edit'}, baseClass]"
        v-tooltip='"Edit"'
        @click='editor.mode = "edit"'
        :disabled='editor.modeLocked'
    />

    <button 
        class='fa fa-solid fa-code-merge' 
        :class="[{active: editor.mode=='edit json'}, baseClass]"
        @click='editor.mode="edit json"' 
        :disabled='editor.modeLocked'
        v-tooltip='"Edit As JSON"'
    />

    <button 
        class='fa-solid fa-laptop-code' 
        :class="[{active: editor.mode=='edit node schema'}, baseClass]"
        @click='editor.mode="edit node schema"' 
        :disabled='editor.modeLocked'
        v-tooltip='"Edit the current nodes Schema"'
    />

    <div class="divider border border-1 border-accent-lt"/>

    <button 
        class="fa-regular fa-plus"
        :class="[{active: editor.mode=='add'}, baseClass]"
        v-tooltip='"Add"'
        @click='editor.mode = "add"'
        :disabled='editor.modeLocked'
    />

     <button 
        class='fa fa-solid fa-eraser' 
        :class="[{active: editor.mode=='remove'}, baseClass]"
        v-tooltip="'Remove'"
        :disabled='editor.modeLocked'
        @click='editor.mode = "remove"'
    />

    <div class="divider border border-1 border-accent-lt"/>

    <button 
        class='fa fa-crosshairs' 
        :class="[{active: editor.mode=='move'}, baseClass]"
        @click='editor.mode = "move"' 
        :disabled='editor.modeLocked && editor.mode!="move"'
        v-tooltip='"Move"'
    />
   
    <button 
        class='fa fa-solid fa-clone' 
        :class="[{active: editor.mode=='clone'}, baseClass]"
        @click='editor.mode="clone"' 
        :disabled='editor.modeLocked'
        v-tooltip='"Clone"'
    />

    <button 
        class='fa fa-solid fa-copy' 
        :class="[{active: editor.mode=='copy'}, baseClass]"
        @click='editor.mode="copy"' 
        :disabled='editor.modeLocked && editor.mode!="copy"'
        v-tooltip='"Copy"'
    />
    
</template>
<script lang='ts' setup>
import { editor } from "@pockets-node-tree"
let baseClass = 'btn border-0 btn-accent-dk fw-8 p-half rounded-0 flex-grow-1'
</script>
