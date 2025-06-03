<script setup lang="ts">
    import UiApp from 'blocks/App/UiApp.vue';
    import AdminUiPage from 'route/admin/AdminUiPage.vue';
    import BasketUiPage from 'route/basket/BasketUiPage.vue';
    import HomeUiPage from 'route/home/HomeUiPage.vue';
    import ProductUiPage from 'route/product/ProductUiPage.vue';

</script>

<template>
    <UiApp id="app">
        <HomeUiPage />
        <ProductUiPage />
        <BasketUiPage />
        <AdminUiPage />
    </UiApp>
</template>
