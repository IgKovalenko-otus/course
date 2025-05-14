<script setup lang="ts">
    import {SIZE_XS} from 'src/constants';
    import type {IUiLabelProps} from './logic/types';

    const {gapSize = SIZE_XS} = defineProps<IUiLabelProps>();

</script>

<template>
    <div
        :class="gapSize && `ui-label--gap-${gapSize}`"
        class="ui-label"
    >
        <slot></slot>
    </div>
</template>

<style src="./styles/ui-label.scss" lang="scss"></style>
