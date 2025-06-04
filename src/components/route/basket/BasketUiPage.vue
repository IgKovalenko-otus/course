<script setup lang="ts">
    import {onMounted, ref} from 'vue';
    import axios from 'axios';

    import UiPageContent from 'blocks/Page/Content/UiPageContent.vue';
    import UiPage from 'blocks/Page/UiPage.vue';
    import UiProductCard from 'blocks/ProductCard/UiProductCard.vue';
    import BasketUiForm from 'route/basket/BasketUiForm.vue';

    const cartProducts = ref([]);

    onMounted(() => {
        axios
            .get('https://fakestoreapi.com/products')
            .then((response) => {
                cartProducts.value = response.data;
            })
            .catch((error) => console.log(error));
    });
</script>

<template>
    <UiPage class="basket-ui-page">
        <UiPageContent class="basket-ui-page__content">
            <div class="basket-ui-page__list">
                <UiProductCard
                    v-for="{
                        id,
                        image,
                        title,
                        rating,
                        description,
                        price,
                    } in cartProducts"
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
            <BasketUiForm />
        </UiPageContent>
    </UiPage>
</template>

<style src="./styles/basket-ui-page.scss" lang="scss"></style>
