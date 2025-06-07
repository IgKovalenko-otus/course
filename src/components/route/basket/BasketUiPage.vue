<script setup lang="ts">
    import {inject} from 'vue';

    import {SIZE_S, SIZE_XS} from 'src/constants';

    import ColorUiButton from 'blocks/Button/ColorUiButton.vue';
    import UiFrame from 'blocks/Frame/UiFrame.vue';
    import UiPageContent from 'blocks/Page/Content/UiPageContent.vue';
    import UiPage from 'blocks/Page/UiPage.vue';
    import UiProductCard from 'blocks/ProductCard/UiProductCard.vue';
    import UiText from 'blocks/Text/UiText.vue';
    import UiTransitionFadeIn from 'blocks/Transition/FadeIn/UiTransitionFadeIn.vue';
    import BasketUiForm from 'route/basket/BasketUiForm.vue';

    const {
        cart,
        addCount,
        removeCount,
        clearCart,
    } = inject('cart', undefined);
</script>

<template>
    <UiPage class="basket-ui-page">
        <UiPageContent class="basket-ui-page__content">
            <UiTransitionFadeIn>
                <div
                    v-if="cart.length > 0"
                    class="basket-ui-page__products"
                >
                    <div class="basket-ui-page__list">
                        <UiProductCard
                            v-for="({
                                id,
                                image,
                                title,
                                rating,
                                description,
                                price,
                                count,
                            }, index) in cart"
                            :key="id"
                            @add-count="addCount(cart[index])"
                            @remove-count="removeCount(cart[index])"
                            :product-id="id"
                            :image="image"
                            :title="title"
                            :rating="rating"
                            :description="description"
                            :price="price"
                            :count="count"
                            is-added
                            class="basket-ui-page__card"
                        />
                    </div>
                    <ColorUiButton
                        @click="clearCart"
                        :button-props="{
                            rounded: true,
                            size: SIZE_S,
                        }"
                        :text-props="{
                            text: 'Очистить корзину',
                            uppercase: true,
                            size: SIZE_XS,
                        }"
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
