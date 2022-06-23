import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/pages/Home.vue'
import About from '@/pages/About.vue'
import Todos from '@/pages/Todos/Todos.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    linkActiveClass: 'active',
    linkExactActiveClass: 'exact-active',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home,
        },
        {
            path: '/todos',
            name: 'Todos',
            component: Todos,
        },
        {
            path: '/about',
            name: 'About',
            component: About,
        },
    ],
})

export default router
