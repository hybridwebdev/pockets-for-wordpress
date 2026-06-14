<template>
    <Teleport 
        :to='teleport' 
        :disabled='!teleport'
    >
        <Transition 
            :name='props.transitionName' 
            :duration="props.duration" 
        >
            <div 
                v-if='open === true' 
                v-bind="$attrs" 
                class='pockets-modal' 
                @click.self="closeSelf"
                :style='{"--animate-duration": `${props.duration}ms` }'
            >
                <slot v-bind="api" />
            </div>
        </Transition>
    </Teleport>
</template>
<script setup lang='ts'>

type props = {
    /**
        Element to teleport modal to. If false, telport is disabled
    */
    teleport?: string | boolean
    /**
        If modal is open or not. 
    */
    open?: boolean
    /**
        If set to true, clicking outside the modal closes it. 
    */
    clickOutside?: boolean

    /**
        Transition name to apply
    */
    transitionName?: string
    
    /**
        Transition duration in ms. Eg 1000 -> 1000ms -> 1s
    */
    duration?: number | string
}

let props = withDefaults( defineProps<props>(), {
    teleport: "body",
    clickOutside: false,
    transitionName: "animate-modal",
    duration: 500
} )

let open = defineModel( 'open', { default: false } )

let closeSelf = () => props.clickOutside ? close() : false

let close = () => open.value = false

let api = {
    close
}

defineSlots<{
    /**
        Content of modal
    */
    default: {

    }
}>() 

defineOptions({
    inheritAttrs: false
})

</script>
<style lang='scss'>

.pockets-modal {

    position: fixed;
    top:0;
    left:0;
    bottom:0;
    right:0;
    
    &::before {
        background: var(--overlay, rgba(0,0,0, .5));
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0
    }

    > * {
        position: relative;
    }
    
}

</style>