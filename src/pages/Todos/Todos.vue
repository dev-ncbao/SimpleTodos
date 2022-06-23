<template>
    <layout-full-screen-dynamic>
        <div :class="cx.wrapper">
            <div :class="cx.headerWrapper">
                <header>
                    <span :class="cx.title">List of Todo</span>
                    <button :class="cx.btnCreate">Create</button>
                </header>
            </div>
            <div :class="cx.mainWrapper">
                <main></main>
            </div>
        </div>
    </layout-full-screen-dynamic>
</template>

<script setup lang="ts"></script>

<style lang="scss" module="cx">
    .wrapper {
    }
    .headerWrapper {
        header {
            height: 70px;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
    }
    .mainWrapper {
    }

    .title {
        font-size: 4rem;
        font-weight: 600;
    }
</style>
