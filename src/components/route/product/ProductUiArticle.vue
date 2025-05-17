<script setup lang="ts">
    import {
        FONT_WEIGHT_BOLD,
        SIZE_L,
        SIZE_M,
        SIZE_S,
        SIZE_XL,
    } from 'src/constants';
    import products from 'src/mock/products.json';

    import UiArticle from 'blocks/Article/UiArticle.vue';
    import ColorUiButton from 'blocks/Button/ColorUiButton.vue';
    import UiFrame from 'blocks/Frame/UiFrame.vue';
    import UiPicture from 'blocks/Picture/UiPicture.vue';
    import UiText from 'blocks/Text/UiText.vue';

    const test = products[1];
</script>

<template>
    <UiArticle class="product-ui-article">
        <UiFrame class="product-ui-article__picture">
            <UiPicture
                :src="test.image"
                :alt="test.title"
                stub="/svg/card-picture-stub.svg"
            />
        </UiFrame>
        <UiFrame class="product-ui-article__content">
            <UiText
                :text="test.title"
                :size="SIZE_XL"
                uppercase
                :weight="FONT_WEIGHT_BOLD"
            />
            <UiText
                :text="test.description"
                :size="SIZE_S"
            />
            <UiText
                :text="`${test.price} ₽`"
                :weight="FONT_WEIGHT_BOLD"
                :size="SIZE_L"
            />
            <ColorUiButton
                :button-props="{
                    rounded: true,
                    size: SIZE_M,
                }"
                :text-props="{
                    text: 'Добавить в корзину',
                    weight: FONT_WEIGHT_BOLD,
                    size: SIZE_S,
                }"
            />
        </UiFrame>
    </UiArticle>
</template>

<style src="./styles/product-ui-article.scss" lang="scss"></style>
