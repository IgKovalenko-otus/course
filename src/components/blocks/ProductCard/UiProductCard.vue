<script setup lang="ts">
    import {useRouter} from 'vue-router';
    import WordHighlighter from 'vue-word-highlighter';

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

    const router = useRouter();

    const {
        productId = 0,
        image,
        title = 'Нет заголовка',
        rating,
        description = 'Нет описания',
        price = 0,
    } = defineProps<IUiProductCardProps>();
</script>

<template>
    <div
        @click="router.push(`/product/${productId}`)"
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
                :size="SIZE_S"
                :weight="FONT_WEIGHT_BOLD"
            >
                <WordHighlighter :query="searchText">
                    {{ title }}
                </WordHighlighter>
            </UiText>
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
    </div>
</template>

<style src="./styles/ui-product-card.scss" lang="scss"></style>
