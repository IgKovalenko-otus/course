<script setup lang="ts">
    import {
        computed,
        onMounted,
        reactive,
        ref,
    } from 'vue';
    import axios from 'axios';

    import {
        FONT_WEIGHT_BOLD,
        SIZE_S,
        SIZE_XS,
        TEXT_ALIGN_CENTER,
    } from 'src/constants';

    import ColorUiButton from 'blocks/Button/ColorUiButton.vue';
    import UiField from 'blocks/Field/UiField.vue';
    import UiFrame from 'blocks/Frame/UiFrame.vue';
    import UiInput from 'blocks/Input/UiInput.vue';
    import UiLabel from 'blocks/Label/UiLabel.vue';
    import UiProductCard from 'blocks/ProductCard/UiProductCard.vue';
    import UiTag from 'blocks/Tag/UiTag.vue';
    import UiText from 'blocks/Text/UiText.vue';
    import UiTransitionFadeIn from 'blocks/Transition/FadeIn/UiTransitionFadeIn.vue';

    const getInitialData = () => ({
        search: '',
        category: '',
        minPrice: 0,
        maxPrice: 999999,
    });

    const filter = ref(getInitialData());

    const allProducts = ref([]);
    const listCategory = ref<string[]>([]);

    function updateCategory() {
        // обнулили категории
        listCategory.value = [];

        // запушили в новый массив все категории
        allProducts.value.filter((el) => listCategory.value.push(el.category));

        // удалили одинаковые категории
        listCategory.value = listCategory.value.filter((el, index) => listCategory.value.indexOf(el) === index);
    }

    const activeListProduct = computed(() => allProducts.value.filter((el) => el.title.toLowerCase().includes(filter.value.search.toLowerCase())
        && el.category.toLowerCase().includes(filter.value.category.toLowerCase())
        && el.price >= filter.value.minPrice
        && el.price <= filter.value.maxPrice));

    onMounted(() => {
        axios
            .get('https://fakestoreapi.com/products')
            .then((response) => {
                allProducts.value = response.data;

                updateCategory();
            })
            .catch((error) => console.log(error));
    });

</script>

<template>
    <div class="ui-product-filter">
        <UiFrame class="ui-product-filter__tools">
            <div class="ui-product-filter__tools-section">
                <UiText
                    text="Цена"
                    uppercase
                    :size="SIZE_S"
                    :weight="FONT_WEIGHT_BOLD"
                />
                <UiLabel>
                    <UiField>
                        <UiInput
                            v-model="filter.minPrice"
                            type="number"
                            placeholder="от"
                        />
                    </UiField>
                    <UiField>
                        <UiInput
                            v-model="filter.maxPrice"
                            type="number"
                            placeholder="до"
                        />
                    </UiField>
                </UiLabel>
            </div>
            <div class="ui-product-filter__tools-section">
                <UiText
                    text="Категории"
                    uppercase
                    :size="SIZE_S"
                    :weight="FONT_WEIGHT_BOLD"
                />
                <div class="ui-product-filter__tools-list">
                    <template
                        v-for="item in listCategory"
                        :key="item"
                    >
                        <UiTag
                            v-if="item"
                            @click="filter.category = item"
                            :is-active="filter.category === item"
                            :text="item"
                        />
                    </template>
                </div>
            </div>
            <ColorUiButton
                @click="Object.assign(filter, getInitialData())"
                :button-props="{
                    rounded: true,
                    size: SIZE_S,
                }"
                :text-props="{
                    text: 'Очистить',
                    uppercase: true,
                    size: SIZE_XS,
                }"
            />
        </UiFrame>
        <div class="ui-product-filter__content">
            <UiField>
                <UiInput
                    v-model="filter.search"
                    placeholder="Поиск"
                />
            </UiField>
            <UiTransitionFadeIn>
                <div
                    v-if="activeListProduct.length > 0"
                    class="ui-product-filter__list"
                >
                    <UiProductCard
                        v-for="{
                            id,
                            image,
                            title,
                            rating,
                            description,
                            price,
                        } in activeListProduct"
                        :key="id"
                        :image="image"
                        :title="title"
                        :rating="rating"
                        :description="description"
                        :price="price"
                        :search-text="filter.search"
                    />
                </div>
                <UiFrame v-else>
                    <UiText
                        uppercase
                        :size="SIZE_S"
                        :align="TEXT_ALIGN_CENTER"
                        text="Товаров не найдено"
                    />
                </UiFrame>
            </UiTransitionFadeIn>
        </div>
    </div>
</template>

<style src="./styles/ui-product-filter.scss" lang="scss"></style>
