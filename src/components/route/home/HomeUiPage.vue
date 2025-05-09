<script setup lang="ts">
    import {ref} from 'vue';

    import UiPageContent from 'blocks/Page/Content/UiPageContent.vue';
    import UiPage from 'blocks/Page/UiPage.vue';

    const counter = ref<number>(0);

    export interface IIcon {
        src?: string
        alt?: string
    }

    const listIcons = ref<IIcon[]>([
        {
            src: '/svg/vite.svg',
            alt: 'Vite logo',
        },
        {
            src: '/svg/vue.svg',
            alt: 'Vue logo',
        },
    ]);
</script>

<template>
    <UiPage class="home-ui-page">
        <UiPageContent class="home-ui-page__content">
            <ul class="home-ui-page__list">
                <li
                    v-for="({src, alt}, index) in listIcons"
                    :key="index"
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
        </UiPageContent>
    </UiPage>
</template>

<style src="./styles/home-ui-page.scss" lang="scss"></style>
