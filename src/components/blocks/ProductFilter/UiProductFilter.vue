<script setup lang="ts">
    import {ref} from 'vue';

    import {
        FONT_WEIGHT_BOLD,
        SIZE_S,
        SIZE_XS,
    } from 'src/constants';
    import products from 'src/mock/products.json';

    import ColorUiButton from 'blocks/Button/ColorUiButton.vue';
    import UiProductCard from 'blocks/ProductCard/UiProductCard.vue';
    import UiTag from 'blocks/Tag/UiTag.vue';
    import UiText from 'blocks/Text/UiText.vue';

    const allProducts = ref(products);

    const visibleCards = ref<number>(6);
    const listProducts = ref(allProducts.value.slice(0, visibleCards.value));

    const maxCountProducts = ref(allProducts.value.length);

    function showMore(count: number) {
        visibleCards.value += count;

        listProducts.value = allProducts.value.slice(0, visibleCards.value);
    }
</script>

<template>
    <div class="ui-product-filter">
        <div class="ui-product-filter__tools">
            <div class="ui-product-filter__tools-section">
                <UiText
                    text="Категории"
                    uppercase
                    :size="SIZE_S"
                    :weight="FONT_WEIGHT_BOLD"
                />
                <div class="ui-product-filter__tools-list">
                    <UiTag
                        v-for="({
                            id,
                            category,
                        }) in allProducts"
                        :key="id"
                        :text="category"
                    />
                </div>
            </div>
            <ColorUiButton
                :button-props="{
                    rounded: true,
                    size: SIZE_S,
                }"
                :text-props="{
                    text: 'фильтр',
                    uppercase: true,
                    size: SIZE_XS,
                }"
            />
        </div>
        <div class="ui-product-filter__content">
            <div class="ui-product-filter__list">
                <UiProductCard
                    v-for="{
                        id,
                        image,
                        title,
                        rating,
                        description,
                        price,
                    } in listProducts"
                    :key="id"
                    :image="image"
                    :title="title"
                    :rating="rating"
                    :description="description"
                    :price="price"
                />
            </div>
            <ColorUiButton
                v-if="listProducts.length < maxCountProducts"
                @click="showMore(3)"
                :button-props="{
                    rounded: true,
                    size: SIZE_S,
                }"
                :text-props="{
                    text: 'Загрузить ещё',
                    uppercase: true,
                    size: SIZE_XS,
                }"
                class="ui-product-filter__more"
            />
        </div>
    </div>
</template>

<style src="./styles/ui-product-filter.scss" lang="scss"></style>
