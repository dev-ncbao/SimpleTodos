<template>
    <div :class="cx.wrapper">
        <div :class="cx.headerWrapper">
            <Header></Header>
        </div>
        <div :class="cx.mainWrapper">
            <slot></slot>
        </div>
        <div :class="cx.footerWrapper">
            <Footer></Footer>
        </div>
    </div>
</template>

<script setup lang="ts">
    import Header from './Header.vue'
    import Footer from './Footer.vue'
</script>

<style lang="scss" module="cx">
    .wrapper {
        width: inherit;
        height: inherit;
        margin: 0 auto 0;
        display: flex;
        flex-direction: column;
        align-items: center;

        .headerWrapper,
        .footerWrapper {
            width: inherit;
            display: flex;
            justify-content: center;
            z-index: 100;
            background-color: var(--white);
        }

        .headerWrapper {
            box-shadow: 0 1px 1.5px 1px #e5e5e5;
        }

        .mainWrapper {
            flex: 1;
            background-color: var(--white-blue);
        }

        .footerWrapper {
            box-shadow: 0 -1px 1.5px 1px #e5e5e5;
        }
    }
</style>
