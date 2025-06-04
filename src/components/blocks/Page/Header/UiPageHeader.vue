<script setup lang="ts">
    import {ref} from 'vue';

    import {SIZE_XS} from 'src/constants';
    import type {IUiListNavigationItem} from './logic/types';

    import ColorUiButton from 'blocks/Button/ColorUiButton.vue';
    import UiText from 'blocks/Text/UiText.vue';
    import UiTransitionFadeIn from 'blocks/Transition/FadeIn/UiTransitionFadeIn.vue';
    import LoginUiModal from 'route/home/authentication/LoginUiModal.vue';

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

    const loginModal = ref<boolean>(false);
</script>

<template>
    <header class="ui-page-header">
        <div class="ui-page-header__content">
            <nav class="ui-page-header__nav">
                <RouterLink
                    v-for="({text, link}, index) in listNavigation"
                    :key="index"
                    :to="link"
                    class="ui-page-header__nav-button"
                >
                    <ColorUiButton
                        :text-props="{
                            text: text,
                            size: SIZE_XS,
                            uppercase: true,
                        }"
                    />
                </RouterLink>
            </nav>
            <button
                @click="loginModal = true"
                class="ui-page-header__login"
            >
                <UiText
                    text="Login"
                    :size="SIZE_XS"
                    uppercase
                />
            </button>
        </div>
    </header>
    <Teleport to="#ui-app">
        <UiTransitionFadeIn>
            <LoginUiModal
                v-show="loginModal"
                @click="loginModal = false"
                :show-content="loginModal"
            />
        </UiTransitionFadeIn>
    </Teleport>
</template>

<style src="./styles/ui-page-header.scss" lang="scss"></style>
