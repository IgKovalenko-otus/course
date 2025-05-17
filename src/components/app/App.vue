<script setup lang="ts">
    import UiApp from 'blocks/App/UiApp.vue';
    import HomeUiPage from 'route/home/HomeUiPage.vue';
    import ProductUiPage from 'route/product/ProductUiPage.vue';

</script>

<template>
    <UiApp>
        <ProductUiPage />
        <HomeUiPage />
    </UiApp>
</template>
