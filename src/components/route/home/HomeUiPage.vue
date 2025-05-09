<script setup lang="ts">
    import {ref} from 'vue';

    import UiPage from 'blocks/Page/UiPage.vue';

    const counter = ref(0);

    const listIcons = ref([
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
        <ul
            v-for="({src, alt}, index) in listIcons"
            :key="index"
            class="home-ui-page__list"
        >
            <li class="home-ui-page__list-item">
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
    </UiPage>
</template>

<style src="./styles/home-ui-page.scss" lang="scss"></style>
