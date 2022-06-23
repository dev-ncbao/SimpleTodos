<template>
    <div :class="cx.wrapper">
        <router-link to="/" :class="cx.logo">
            <img src="@/assets/images/Logo__light.png" alt="Todos" />
        </router-link>
        <nav>
            <ul>
                <li v-for="(route, index) in routeConfigs.routes" :key="index">
                    <router-link
                        :to="{ path: route.path }"
                        :active-class="routeConfigs.active"
                    >
                        {{ route.name }}
                    </router-link>
                </li>
            </ul>
        </nav>
        <span :class="cx.user">{{ user }}</span>
    </div>
</template>

<script setup lang="ts">
    import { useCssModule, reactive, ref, onMounted } from 'vue'

    const cx = useCssModule('cx')

    const routeConfigs = reactive({
        routes: [
            {
                path: '/',
                name: 'Home',
            },
            {
                path: '/todos',
                name: 'Todos',
            },
            {
                path: '/about',
                name: 'About',
            },
        ],
        active: cx.active,
    })

    const user = ref('')

    onMounted(() => {
        user.value = `Loading...: ${Math.round(Math.random() * 100) / 100}`
        setTimeout(() => {
            user.value = 'dev-ncbao'
        }, 2000)
    })
</script>

<style lang="scss" module="cx">
    .wrapper {
        width: inherit;
        height: var(--header-height);
        padding: 0 var(--app-padding-horizontal);
        display: flex;
        align-items: center;
        background-color: var(--white);
        font-size: 1.7rem;
    }

    nav {
        flex: 1;

        ul {
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            list-style-type: none;

            a {
                height: 40px;
                margin: 0 4px;
                padding: 0 14px;
                border-radius: 6px;
                display: flex;
                align-items: center;
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
        cursor: pointer;
        user-select: none;
    }

    .logo {
        display: flex;
        align-items: center;

        img {
            height: 40px;
        }
    }

    .user {
        text-align: right;
    }
</style>
