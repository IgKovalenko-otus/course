<script setup lang="ts">
    import {SIZE_XXS} from 'src/constants';
    import type {IProductCardRatingProps} from './logic/props';

    import UiLabel from 'blocks/Label/UiLabel.vue';
    import UiText from 'blocks/Text/UiText.vue';

    const {
        rate = 0,
        count = 0,
    } = defineProps<IProductCardRatingProps>();
</script>

<template>
    <UiLabel class="ui-product-card-rating">
        <UiLabel
            :gap-size="SIZE_XXS"
            class="ui-product-card-rating__label"
        >
            <svg
                viewBox="0 0 24 24"
                class="ui-product-card-rating__star"
            >
                <polygon
                    fill="#FFC95E"
                    fill-rule="evenodd"
                    points="12 16.667 5 22 8 14 2 9.5 9.5 9.5 12 2 14.5 9.5 22 9.5 16 14 19 22"
                />
            </svg>
            <UiText
                :text="`${rate}`"
                class="ui-product-card-rating__value"
            />
        </UiLabel>
        <UiText
            :text="`Всего оценок (${count})`"
            :size="SIZE_XXS"
            class="ui-product-card-rating__count"
        />
    </UiLabel>
</template>

<style src="./styles/ui-product-card-rating.scss" lang="scss"></style>
