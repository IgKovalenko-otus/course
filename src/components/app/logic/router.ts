import {createRouter, createWebHistory} from 'vue-router'

import HomeUiPage from 'route/home/HomeUiPage.vue';
import {ROUTE_NAME_ADMIN, ROUTE_NAME_BASKET, ROUTE_NAME_HOME} from "src/constants";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: ROUTE_NAME_HOME,
            component: HomeUiPage
        },
        {
            path: '/basket',
            name: ROUTE_NAME_BASKET,
            component: () => import('route/basket/BasketUiPage.vue')
        },
        {
            path: '/admin',
            name: ROUTE_NAME_ADMIN,
            component: () => import('route/admin/AdminUiPage.vue')
        },
        {
            path: '/product/:id',
            component: () => import('route/product/ProductUiPage.vue')
        },
    ],
})

export default router
