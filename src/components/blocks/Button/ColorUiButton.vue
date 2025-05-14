<script setup lang="ts">
    import {TEXT_ALIGN_CENTER} from 'src/constants';
    import type {IColorUiButtonProps} from './logic/props';

    import UiButton from 'blocks/Button/base/UiButton.vue';
    import UiText from 'blocks/Text/UiText.vue';

    const {
        buttonProps,
        textProps,
    } = defineProps<IColorUiButtonProps>();

</script>

<template>
    <UiButton
        v-bind="buttonProps"
        class="color-ui-button"
    >
        <slot>
            <UiText
                v-bind="textProps"
                :align="TEXT_ALIGN_CENTER"
            />
        </slot>
    </UiButton>
</template>

<style src="./styles/color-ui-button.scss" lang="scss"></style>
