<template>
    <div :class="cx.wrapper">
        <Header></Header>
        <slot></slot>
        <Footer></Footer>
    </div>
</template>

<script setup lang="ts">
    import Header from './Header.vue'
    import Footer from './Footer.vue'
</script>

<style lang="scss" module="cx">
    .wrapper {
        width: var(--default-layout-width);
        margin: 0 auto 0;
        display: flex;
        flex-direction: column;
        background-color: #f5f5f5;
    }
</style>
