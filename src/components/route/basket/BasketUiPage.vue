<script setup lang="ts">
    import {inject} from 'vue';

    import UiFrame from 'blocks/Frame/UiFrame.vue';
    import UiPageContent from 'blocks/Page/Content/UiPageContent.vue';
    import UiPage from 'blocks/Page/UiPage.vue';
    import UiProductCard from 'blocks/ProductCard/UiProductCard.vue';
    import UiText from 'blocks/Text/UiText.vue';
    import UiTransitionFadeIn from 'blocks/Transition/FadeIn/UiTransitionFadeIn.vue';
    import BasketUiForm from 'route/basket/BasketUiForm.vue';

    const {cart} = inject('cart', undefined);

</script>

<template>
    <UiPage class="basket-ui-page">
        <UiPageContent class="basket-ui-page__content">
            <UiTransitionFadeIn>
                <div
                    v-if="cart.length > 0"
                    class="basket-ui-page__list"
                >
                    <UiProductCard
                        v-for="{
                            id,
                            image,
                            title,
                            rating,
                            description,
                            price,
                        } in cart"
                        :key="id"
                        :product-id="id"
                        :image="image"
                        :title="title"
                        :rating="rating"
                        :description="description"
                        :price="price"
                        class="basket-ui-page__card"
                    />
                </div>
                <UiFrame
                    v-else
                    class="basket-ui-page__message"
                >
                    <UiText text="Корзина пуста" />
                </UiFrame>
            </UiTransitionFadeIn>
            <BasketUiForm />
        </UiPageContent>
    </UiPage>
</template>

<style src="./styles/basket-ui-page.scss" lang="scss"></style>
