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
        path: '/about',
        component: () => import('@/views/HomeView.vue'),
    },
    {
        path: '/contact',
        component: () => import('@/views/HomeView.vue'),
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
