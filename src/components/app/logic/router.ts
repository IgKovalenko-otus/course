import {createRouter, createWebHistory} from 'vue-router'

import HomeUiPage from 'route/home/HomeUiPage.vue';
import BasketUiPage from 'route/basket/BasketUiPage.vue';
import AdminUiPage from 'route/admin/AdminUiPage.vue';
import ProductUiPage from 'route/product/ProductUiPage.vue';

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
            component: BasketUiPage
        },
        {
            path: '/admin',
            name: 'admin',
            component: AdminUiPage
        },
        {
            path: '/product/:id',
            component: ProductUiPage
        },
    ],
})

export default router
