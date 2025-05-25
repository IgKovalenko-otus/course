<script setup lang="ts">
    import UiPageContent from 'blocks/Page/Content/UiPageContent.vue';
    import UiPage from 'blocks/Page/UiPage.vue';
    import UiProductCard from 'blocks/ProductCard/UiProductCard.vue';
    import BasketUiForm from 'route/basket/BasketUiForm.vue';
</script>

<template>
    <UiPage class="basket-ui-page">
        <UiPageContent class="basket-ui-page__content">
            <div class="basket-ui-page__list">
                <UiProductCard
                    v-for="item in 10"
                    :key="item"
                    class="basket-ui-page__card"
                />
            </div>
            <BasketUiForm />
        </UiPageContent>
    </UiPage>
</template>

<style src="./styles/basket-ui-page.scss" lang="scss"></style>
