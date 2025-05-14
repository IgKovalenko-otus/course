<script setup lang="ts">
    import {ref} from 'vue';

    import type {IIcon} from './logic/types';

    import ColorUiButton from 'blocks/Button/ColorUiButton.vue';
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
                    v-for="({
                        src,
                        alt,
                        isActive
                    }, index) in listIcons"
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
            <div class="home-ui-page__label">
                <ColorUiButton
                    @click="counter++"
                    :text-props="{
                        text: 'Счетчик ' + counter
                    }"
                />
                <ColorUiButton
                    v-if="counter > 0"
                    @click="counter = 0"
                    :text-props="{
                        text: 'Сброс'
                    }"
                />
            </div>
            <ColorUiButton
                @click="loading = !loading"
                :button-props="{
                    rounded: true
                }"
                :text-props="{
                    text: 'Переключатель прелоудера'
                }"
            />
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
