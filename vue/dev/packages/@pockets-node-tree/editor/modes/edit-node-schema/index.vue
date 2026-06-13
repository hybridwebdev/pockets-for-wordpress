<template>
    <div class="p-2">
        <div v-if='!editor.active' class='fw-8 text-center'>
            <p class='text-center'>
                Select a node to change its schema.
            </p>
        </div>
        <p v-if='editor.active && !editor.active.replace.self' class='alert alert-danger fw-8 text-center'>
            This nodes schema cannot be changed
        </p>
        <div v-if='editor.active.parent && editor.active.replace.self' class='grid columns-1 gap-1'>
            <p class='alert alert-danger fw-8'>Changing the schema of a node will reset it back to the default settings of the new schema!</p>
            <pockets-node-tree-schema-selector 
                v-model:selected='editor.active.node.schema' 
            />
        </div>
    </div>
</template>
<script setup>
import { editor } from "@pockets-node-tree"
</script>