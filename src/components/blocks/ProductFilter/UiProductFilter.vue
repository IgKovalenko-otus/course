<script setup lang="ts">
    import {ref} from 'vue';

    import {SIZE_S, SIZE_XS} from 'src/constants';
    import products from 'src/mock/products.json';

    import ColorUiButton from 'blocks/Button/ColorUiButton.vue';
    import UiProductCard from 'blocks/ProductCard/UiProductCard.vue';

    const visibleCards = ref<number>(6);
    const listProducts = ref<[]>(products.slice(0, visibleCards.value));

    const maxCountProducts = ref(products.length);

    function showMore(count: number) {
        visibleCards.value += count;

        listProducts.value = products.slice(0, visibleCards.value);
    }
</script>

<template>
    <div class="ui-product-filter">
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
                @click="showMore(6)"
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
