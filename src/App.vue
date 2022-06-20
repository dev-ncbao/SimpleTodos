<template>
    <div class="app">
        <component :is="layout">
            <router-view :layout.sync="layout"></router-view>
        </component>
    </div>
</template>

<script setup lang="ts">
    import LayoutDefaultVue from '@/components/layouts/LayoutDefault/LayoutDefault.vue'

    let layout = LayoutDefaultVue
</script>

<style lang="scss">
    @import url('https://fonts.googleapis.com/css2?family=Anek+Latin:wght@400;500;600;700&display=swap');

    :root {
        // colors
        --primary: #3cb474;
        --primary-rgb: 60, 180, 116;
        --black: #000;
        --white: #fff;
        --white-blue: #f9fcfd;

        // header
        --header-height: 70px;

        // footer height
        --footer-height: 60px;

        // layout default
        --layout-default-width: 1150px;
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
