<template>
    <div :class="cx.wrapper">
        <span>Copyright &copy; 2022 dev-ncbao. All rights reserved</span>
    </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" module="cx">
    .wrapper {
        width: var(--layout-default-width);
        height: var(--footer-height);
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
