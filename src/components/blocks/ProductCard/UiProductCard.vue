<script setup lang="ts">
    import {
        FONT_WEIGHT_BOLD,
        SIZE_S,
        SIZE_XS,
    } from 'src/constants';
    import type {IUiProductCardProps} from './logic/props';

    import ColorUiButton from 'blocks/Button/ColorUiButton.vue';
    import UiFrame from 'blocks/Frame/UiFrame.vue';
    import UiLabel from 'blocks/Label/UiLabel.vue';
    import UiPicture from 'blocks/Picture/UiPicture.vue';
    import ProductCardRating from 'blocks/ProductCard/Rating/ProductCardRating.vue';
    import UiText from 'blocks/Text/UiText.vue';

    const {
        image,
        title = 'Нет заголовка',
        rating,
        description = 'Нет описания',
        price = 0,
    } = defineProps<IUiProductCardProps>();

</script>

<template>
    <a
        href="#"
        target="_blank"
        class="ui-product-card"
    >
        <UiFrame class="ui-product-card__content">
            <div class="ui-product-card__picture">
                <UiPicture
                    is-absolute
                    :src="image"
                    :alt="title"
                    stub="/svg/card-picture-stub.svg"
                />
            </div>
            <ProductCardRating
                :rate="rating?.rate"
                :count="rating?.count"
            />
            <UiText
                :text="title"
                :size="SIZE_S"
                :weight="FONT_WEIGHT_BOLD"
                class="ui-product-card__title"
            />
            <UiText
                :text="description"
                :size="SIZE_XS"
                class="ui-product-card__description"
            />
            <UiLabel class="ui-product-card__add">
                <UiText
                    :text="`${price} ₽`"
                    :weight="FONT_WEIGHT_BOLD"
                />
                <ColorUiButton
                    :button-props="{
                        rounded: true,
                        size: SIZE_XS,
                    }"
                    :text-props="{
                        text: 'В корзину',
                        size: SIZE_XS,
                    }"
                />
            </UiLabel>
        </UiFrame>
    </a>
</template>

<style src="./styles/ui-product-card.scss" lang="scss"></style>
