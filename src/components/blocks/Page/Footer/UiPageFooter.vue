<script setup lang="ts">
    import {ref} from 'vue';

    import UiText from 'blocks/Text/UiText.vue';

    import type {IUiListNavigationItem} from 'blocks/Page/Header/logic/types';

    const listNavigation = ref<IUiListNavigationItem[]>([
        {
            text: 'Home',
            link: '/',
        },
        {
            text: 'Basket',
            link: '/basket',
        },
    ]);
</script>

<template>
    <footer class="ui-page-footer">
        <ul class="ui-page-footer__list">
            <li
                v-for="({text, link}, index) in listNavigation"
                :key="index"
                class="ui-page-footer__list-item"
            >
                <RouterLink
                    :to="link"
                    class="ui-page-footer__link"
                >
                    <UiText :text="text" />
                </RouterLink>
            </li>
        </ul>
    </footer>
</template>

<style src="./styles/ui-page-footer.scss" lang="scss"></style>
