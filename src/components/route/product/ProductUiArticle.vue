<script setup lang="ts">
    import {
        onMounted,
        ref,
        watch,
    } from 'vue';
    import {useRoute} from 'vue-router';
    import axios from 'axios';

    import {
        FONT_WEIGHT_BOLD,
        SIZE_L,
        SIZE_S,
        SIZE_XL,
    } from 'src/constants';

    import UiArticle from 'blocks/Article/UiArticle.vue';
    import UiFrame from 'blocks/Frame/UiFrame.vue';
    import UiPicture from 'blocks/Picture/UiPicture.vue';
    import UiText from 'blocks/Text/UiText.vue';

    const route = useRoute();

    const test = ref({
        image: '',
        title: '',
        rating: [],
        description: '',
        price: 0,
    });

    onMounted(() => {
        axios
            .get(`https://fakestoreapi.com/products/${route.params.id}`)
            .then((response) => {
                test.value = response.data;
            })
            .catch((error) => console.log(error));
    });

    watch(test.value, (newValue) => {
        test.value = newValue;
    });

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
        </UiFrame>
    </UiArticle>
</template>

<style src="./styles/product-ui-article.scss" lang="scss"></style>
