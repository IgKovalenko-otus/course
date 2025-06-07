import {createRouter, createWebHistory} from 'vue-router'

import HomeUiPage from 'route/home/HomeUiPage.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeUiPage
        },
        {
            path: '/basket',
            name: 'basket',
            component: () => import('route/basket/BasketUiPage.vue')
        },
        {
            path: '/admin',
            name: 'admin',
            component: () => import('route/admin/AdminUiPage.vue')
        },
        {
            path: '/product/:id',
            component: () => import('route/product/ProductUiPage.vue')
        },
    ],
})

export default router
