<script setup lang="ts">
    import {inject} from 'vue';
    import {useRoute} from 'vue-router';

    import {SIZE_XS} from 'src/constants';

    import {useNavigation} from 'composables/useNavigation';

    import ColorUiButton from 'blocks/Button/ColorUiButton.vue';
    import UiText from 'blocks/Text/UiText.vue';

    const route = useRoute();

    const {listNavigation} = useNavigation();

    const loginModal = inject('loginModal');
    const {cartAddedCount} = inject('cart', undefined);

</script>

<template>
    <header class="ui-page-header">
        <div class="ui-page-header__content">
            <nav class="ui-page-header__nav">
                <RouterLink
                    v-slot="{isActive}"
                    v-for="({text, to}, index) in listNavigation"
                    :key="index"
                    :to="to"
                    class="ui-page-header__nav-button"
                >
                    <ColorUiButton
                        :is-active="isActive"
                        :text-props="{
                            text: text === 'Basket' ? `${text} ${cartAddedCount} шт` : text,
                            size: SIZE_XS,
                            uppercase: true,
                        }"
                    />
                </RouterLink>
            </nav>
            <button
                v-if="route.name === 'home'"
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
