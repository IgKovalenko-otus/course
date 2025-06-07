<script setup lang="ts">
    import {inject, ref} from 'vue';

    import {SIZE_XS} from 'src/constants';
    import type {IUiListNavigationItem} from './logic/types';

    import ColorUiButton from 'blocks/Button/ColorUiButton.vue';
    import UiText from 'blocks/Text/UiText.vue';

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

    const loginModal = inject('loginModal');
    const {cart} = inject('cart', undefined);

</script>

<template>
    <header class="ui-page-header">
        <div class="ui-page-header__content">
            <nav class="ui-page-header__nav">
                <RouterLink
                    v-slot="{isActive}"
                    v-for="({text, link}, index) in listNavigation"
                    :key="index"
                    :to="link"
                    class="ui-page-header__nav-button"
                >
                    <ColorUiButton
                        :is-active="isActive"
                        :text-props="{
                            text: text === 'Basket' ? `${text} ${cart.length} шт` : text,
                            size: SIZE_XS,
                            uppercase: true,
                        }"
                    />
                </RouterLink>
            </nav>
            <button
                v-if="$route.name === 'home'"
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
</template>

<style src="./styles/ui-page-header.scss" lang="scss"></style>
