<template>
    <div 
        class="pockets-demo-state-ux grid-info-cq-sm-120 bg-black align-items-stretch gap-cq-sm-0" 
        v-if="api"
    >
        <div class="bg-black p-1"  v-tooltip="{ content: api.isLocalStorage && `Stored in localstorage under: ${api.storageKey}`}">
            Demo Data
        </div>
       <div class="d-flex justify-content-end gap-1 bg-grey-800 p-half">
           
            <button 
                v-confirm-action="{ 
                    confirm: api.reset, 
                    confirmClass: 'btn btn-confirm',
                    confirmText: 'Confirm',
                    defaultClass: 'btn btn-grey-700'
                }"
                class="p-half px-2"
                v-tooltip="'Reset Demo Data'"
            >
                Reset
            </button>
    
            <div v-if="api.isLocalStorage" class="d-flex" >
                
                <select 
                    v-model="api.store.selectedIndex" 
                    class="form-control px-2 p-half" 
                    style="width: 200px"
                    v-tooltip="'Select Demo Data'"
                >
                    <option v-for="(entry, index) in api.store.states" :value="index">
                        {{ entry.name }}
                    </option>
                </select>
                <button 
                    class=" btn btn-grey-700 p-half" 
                    @click="api.editorOpen = !api.editorOpen"
                    v-tooltip="'Manage Demo Data'"
                >
                    <i class="fa fa-cogs"></i>
                </button>
                <pockets-modal 
                    v-model:open="api.editorOpen"
                    class="d-flex"
                    :click-outside="true"
                    style="z-index: 1000"
                >
                    <div 
                        class="bg-grey-800 text-white fw-8 m-auto shadow-menu col-12"
                        style="max-width: 420px"
                    >
                        <div class="d-flex align-items-center ps-1 bg-grey-700">
                            <span>Manage Demos</span>
                            
                            <button class=" btn btn-grey-600 ms-auto"  @click="api.editorOpen = false">
                                <i class="fa fa-times"></i>
                            </button>
                        </div>
                        <div 
                            class="p-1 grid columns-1 gap-1 fancy-scroll" 
                            style="max-height: 70vh; overflow-y: auto"
                        >
                            
                            <pockets-ux-repeater
                                :min-items="1"
                                :max-items="8"
                                :new-item="api.createEntry"
                                v-model="api.store.states"
                                layout="tabbed"
                                itemInnerClass=""
                                itemTriggerElement="div"
                                itemClass="border-5 border-grey-500 border-end border-start border-bottom"
                                itemsClass="border-5 border-top border-grey-500"
                                itemTriggerClass="pockets-ux-repeater-toggle-tab-button bg-grey-700 d-flex p-0"
                                :itemTriggerElementShowTabIcon="false"
                                style="
                                    --repeater-item-controls-background: var(--bs-grey-700);
                                    --repeater-drag-shadow: var(--bs-grey-700)
                                "
                            >
                                <template #after-items />
                                <template #item-controls />
                                <template #item />
                                <template #item-tab-text="{ item }">
                                    <label class="grid-info-80 gap-0 py-half ps-1 pe-0">
                                        <span
                                            :class="{ 'text-primary-lt': item.hash == api.hash }"
                                            v-tooltip="{ content: item.hash == api.hash ? 'This demo is active' : '' }"
                                        >Name</span>
                                        <input v-model="item.name" class="form-control p-1">
                                    </label>
                                </template>
                            </pockets-ux-repeater>
    
                        </div>
                    </div>
    
                </pockets-modal>
    
            </div>
       </div>

    </div>
</template>
<script setup lang="ts">

import { context } from "../../../context"

let api = context.inject.demoState( false )

</script>
