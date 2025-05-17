<script setup lang="ts">
    import {onMounted, ref} from 'vue';

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

    const activeCategory = ref<number>();

    const listCategory = ref<string[]>([]);

    const visibleCards = ref<number>(6);
    const listProducts = ref(allProducts.value.slice(0, visibleCards.value));

    const maxCountProducts = ref(allProducts.value.length);

    function updateCategory() {
        // обнулили категории
        listCategory.value = [];

        // запушили в новый массив все категории
        listProducts.value.filter((product) => listCategory.value.push(product.category));

        // удалили одинаковые категории
        listCategory.value = listCategory.value.filter((item, index) => listCategory.value.indexOf(item) === index);
    }

    function showMore(count: number) {
        // докинули новых карточек
        visibleCards.value += count;

        // новый список карточек
        listProducts.value = allProducts.value.slice(0, visibleCards.value);

        // обновление категорий по новому списку из карточек
        updateCategory();

        // скинули категории
        activeCategory.value = undefined;
    }

    function filterByCategory(value: string, index: number) {
        activeCategory.value = index;

        // обновили массив после прошлой фильтрации
        listProducts.value = allProducts.value.slice(0, visibleCards.value);

        // фильтруем продукты по категории
        listProducts.value = listProducts.value.filter((product) => product.category === value);
    }

    onMounted(() => {
        updateCategory();
    });
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
                    <template
                        v-for="(item, index) in listCategory"
                        :key="item"
                    >
                        <UiTag
                            v-if="item"
                            @click="filterByCategory(item, index)"
                            :is-active="activeCategory === index"
                            :text="item"
                        />
                    </template>
                </div>
            </div>
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
