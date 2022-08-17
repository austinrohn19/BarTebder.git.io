import { createRouter, createWebHistory } from 'vue-router'

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: () => import('@/components/login/login.vue'),
        },
        {
            path: '/about',
            component: () => import('@/views/HomeView.vue'),
        },
        {
            path: '/contact',
            component: () => import('@/views/HomeView.vue'),
        },
    ],
})
