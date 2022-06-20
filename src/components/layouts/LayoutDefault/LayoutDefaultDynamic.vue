<template>
    <slot></slot>
</template>

<script setup lang="ts">
    import LayoutDefaultVue from './LayoutDefault.vue'

    const props = defineProps(['layout'])

    const emit = defineEmits(['update:layout'])

    emit('update:layout', LayoutDefaultVue)
</script>
