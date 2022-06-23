<template>
    <slot></slot>
</template>

<script setup lang="ts">
    import LayoutDefault from './LayoutDefault.vue'

    const emits = defineEmits(['update:layout'])
    emits('update:layout', LayoutDefault)
</script>

<script lang="ts">
    export default {
        inheritAttrs: false,
    }
</script>
