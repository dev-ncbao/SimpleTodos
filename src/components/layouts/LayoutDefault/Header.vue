<template>
    <div :class="cx.wrapper">
        <span :class="cx.logo">
            <img src="@/assets/images/Logo__light.png" alt="Todos" />
        </span>
        <nav>
            <ul>
                <li :class="cx.active">Home</li>
                <li>Todos</li>
                <li>About</li>
            </ul>
        </nav>
        <span :class="cx.user"> Loading... </span>
    </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" module="cx">
    .wrapper {
        width: 100%;
        height: var(--header-height);
        display: flex;
        align-items: center;
        background-color: var(--white);
        font-size: 1.7rem;

        nav {
            flex: 1;

            ul {
                margin: 0;
                padding: 0;
                display: flex;
                justify-content: center;

                li {
                    margin: auto 4px;
                    padding: 4px 14px;
                    border-radius: 6px;
                    display: inline-block;
                    list-style: none;

                    &:hover {
                        background-color: rgba(var(--primary-rgb), 0.7);
                        color: white;
                        cursor: pointer;
                    }

                    &.active {
                        background-color: var(--primary);
                        color: white;
                    }
                }
            }
        }

        .logo,
        .user {
            flex-basis: 15%;
        }

        .logo {
            img {
                height: 40px;
            }
        }

        .user {
            text-align: right;
        }
    }
</style>
