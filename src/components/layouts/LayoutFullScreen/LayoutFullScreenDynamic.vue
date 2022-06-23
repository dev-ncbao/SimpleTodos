<template>
    <slot></slot>
</template>

<script setup lang="ts">
    import LayoutFullScreen from './LayoutFullScreen.vue'

    const emits = defineEmits(['update:layout'])
    emits('update:layout', LayoutFullScreen)
</script>

<script lang="ts">
    export default {
        inheritAttrs: false,
    }
</script>
