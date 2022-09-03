import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        component: () => import('@/components/login/login.vue'),
    },
    {
        path: '/register',
        component: () => import('@/components/login/register.vue'),
    },
    {
        path: '/dashboard',
        component: () => import('@/components/dashboard.vue'),
    },
    {
        path: '/bar',
        component: () => import('@/components/bar/index.vue'),
    },
    {
        path: '/cabniet',
        component: () => import('@/components/cabniet/index.vue'),
    },
    {
        path: '/recipes',
        component: () => import('@/components/recipes/index.vue'),
    },
    {
        path: '/scales',
        component: () => import('@/components/scales/index.vue'),
    },
    {
        path: '/servers',
        component: () => import('@/components/servers/index.vue'),
    },
    {
        path: '/summary',
        component: () => import('@/components/summary/index.vue'),
    },
    {
        path: '/bar/counter',
        component: () => import('@/components/bar/counter.vue'),
    },
    {
        path: '/bar/fridge',
        component: () => import('@/components/bar/fridges.vue'),
    },
    {
        path: '/bar/shelfs',
        component: () => import('@/components/bar/shelfs.vue'),
    },
    {
        path: '/cabniet/stats',
        component: () => import('@/components/cabniet/stats.vue'),
    },
    {
        path: '/cabniet/produce-inventory',
        component: () => import('@/components/cabniet/produceInventory.vue'),
    },
    {
        path: '/cabniet/alcohol-inventory',
        component: () => import('@/components/cabniet/alcoholInventory.vue'),
    },
    {
        path: '/recipes/addDrink',
        component: () => import('@/components/recipes/drink.vue'),
    },
    {
        path: '/recipes/editDrink',
        component: () => import('@/components/recipes/drink.vue'),
    },
    {
        path: '/recipes/serverTracker',
        component: () => import('@/components/servers/serverTracker.vue'),
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});


// router.beforeEach((to, from, next) => {
//     const publicPages = ['/login', '/register', '/home'];
//     const authRequired = !publicPages.includes(to.path);
//     const loggedIn = localStorage.getItem('user');

//     // trying to access a restricted page + not logged in
//     // redirect to login page
//     if (authRequired && !loggedIn) {
//         next('/login');
//     } else {
//         next();
//     }
// });

export default router
