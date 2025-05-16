<script setup lang="ts">
    import {computed} from 'vue';

    import {SIZE_S} from 'src/constants';
    import type {IUiButtonProps} from './logic/props';

    const {
        size = SIZE_S,
        rounded = false,
        disabled = false,
    } = defineProps<IUiButtonProps>();

    const uiButtonModifiers = computed(() => ([
        size && `ui-button--${size}`,
        rounded && 'ui-button--rounded',
    ]));
</script>

<template>
    <button
        :class="uiButtonModifiers"
        :disabled="disabled"
        class="ui-button"
    >
        <slot></slot>
    </button>
</template>

<style src="./styles/ui-button.scss" lang="scss"></style>
