<script setup lang="ts">
    import {ref} from 'vue';

    import products from 'src/mock/products.json';

    import UiProductCard from 'blocks/ProductCard/UiProductCard.vue';

    const listProducts = ref(products);
</script>

<template>
    <div class="ui-product-filter">
        <div class="ui-product-filter__content">
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
    </div>
</template>
<style src="./styles/ui-product-filter.scss" lang="scss"></style>
