<script setup lang="ts">
    import {ref} from 'vue';

    import type {IIcon} from './logic/types';

    import UiPageContent from 'blocks/Page/Content/UiPageContent.vue';
    import UiPage from 'blocks/Page/UiPage.vue';

    const counter = ref<number>(0);

    const loading = ref<boolean>(false);

    const listIcons = ref<IIcon[]>([
        {
            src: '/svg/vite.svg',
            alt: 'Vite logo',
            isActive: false,
        },
        {
            src: '/svg/vue.svg',
            alt: 'Vue logo',
            isActive: true,
        },
    ]);
</script>

<template>
    <UiPage class="home-ui-page">
        <UiPageContent class="home-ui-page__content">
            <ul class="home-ui-page__list">
                <li
                    v-for="({src, alt, isActive}, index) in listIcons"
                    :key="index"
                    :class="isActive && 'home-ui-page__list-item--is-active'"
                    class="home-ui-page__list-item"
                >
                    <img
                        :src="src"
                        :alt="alt"
                        class="home-ui-page__img"
                    >
                </li>
            </ul>
            <button
                @click="counter++"
                class="home-ui-page__counter"
            >
                Counter {{ counter }}
            </button>
            <button
                @click="loading = !loading"
                class="home-ui-page__counter"
            >
                Показать прелоудер
            </button>
            <img
                v-show="loading"
                src="/svg/infinite-spinner.svg"
                alt="Прелоудер"
                class="home-ui-page__preloader"
            >
        </UiPageContent>
    </UiPage>
</template>

<style src="./styles/home-ui-page.scss" lang="scss"></style>
