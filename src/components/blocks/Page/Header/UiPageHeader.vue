<script setup lang="ts">
    import {ref} from 'vue';

    import {SIZE_XS} from 'src/constants';

    import ColorUiButton from 'blocks/Button/ColorUiButton.vue';
    import UiText from 'blocks/Text/UiText.vue';

    const listNavigation = ref<string[]>(['Home', 'Basket']);
</script>

<template>
    <header class="ui-page-header">
        <div class="ui-page-header__content">
            <nav class="ui-page-header__nav">
                <ColorUiButton
                    v-for="nav in listNavigation"
                    :key="nav"
                    :text-props="{
                        text: nav,
                        size: SIZE_XS,
                        uppercase: true,
                    }"
                    class="ui-page-header__nav-button"
                />
            </nav>
            <button class="ui-page-header__registration">
                <UiText
                    text="Registration"
                    :size="SIZE_XS"
                    uppercase
                />
            </button>
        </div>
    </header>
</template>

<style src="./styles/ui-page-header.scss" lang="scss"></style>
