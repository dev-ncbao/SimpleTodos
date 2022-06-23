<template>
    <div class="app">
        <component :is="layout">
            <router-view v-model:layout="layout"></router-view>
        </component>
    </div>
</template>

<script setup lang="ts">
    import { shallowRef } from 'vue'
    import LayoutDefault from '@/components/layouts/LayoutDefault/LayoutDefault.vue'

    const layout = shallowRef(LayoutDefault)
</script>

<style lang="scss">
    @import url('https://fonts.googleapis.com/css2?family=Anek+Latin:wght@400;500;600;700&display=swap');
    @import url('normalize.css');

    :root {
        // colors
        --primary: #3cb474;
        --primary-rgb: 60, 180, 116;
        --black: #000;
        --white: #fff;
        --white-blue: #f9fcfd;

        // common

        /* layout default */
        --layout-default-width: 1150px;

        --header-height: 70px;
        --footer-height: 60px;

        // app
        --app-padding-horizontal: 50px;

        // app small
        --app-small-padding-horizontal: 20px;
    }

    * {
        box-sizing: inherit;
    }

    html {
        font-size: 62.5%;
        box-sizing: border-box;
        line-height: 1.5;
        text-rendering: optimizeSpeed;
        font-family: 'Anek Latin', sans-serif;
        -webkit-font-smoothing: antialiased;
    }

    body {
        font-size: 1.6rem;
        padding: 0;
        margin: 0;
        width: 100vw;
        height: 100vh;
        background-color: var(--white-blue);

        #app,
        .app {
            width: inherit;
            height: inherit;
        }
    }

    a {
        text-decoration: none;
        color: inherit;
    }
</style>
