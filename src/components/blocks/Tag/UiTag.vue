<script setup lang="ts">
    import {SIZE_S} from 'src/constants';
    import type {IUiTagProps} from './logic/types';

    import UiText from 'blocks/Text/UiText.vue';

    const {
        isActive = false,
        text = '',
    } = defineProps<IUiTagProps>();

</script>

<template>
    <button
        :class="isActive && 'ui-tag--is-active'"
        class="ui-tag"
    >
        <UiText
            :text="text"
            :size="SIZE_S"
        />
    </button>
</template>

<style src="./styles/ui-tag.scss" lang="scss"></style>
