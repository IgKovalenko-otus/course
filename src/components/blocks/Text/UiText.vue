<script setup lang="ts">
    import {computed} from 'vue';

    import type {IUiTextProps} from './logic/props';

    const {
        text = '',
        size = '',
        align = '',
        weight = '',
        uppercase = false,
        noWrap = false,
        noLineHeight = false,
    } = defineProps<IUiTextProps>();

    const uiTextModifiers = computed<string[]>(() => ([
        size && `cbr-text--${size}`,
        align && `cbr-text--${align}`,
        weight && `cbr-text--${weight}`,
        uppercase && 'cbr-text--uppercase',
        noWrap && 'cbr-text--nowrap',
        noLineHeight && 'cbr-text--no-lh',
    ].filter((value): value is string => Boolean(value))));

</script>

<template>
    <div
        :class="uiTextModifiers"
        class="ui-text"
    >
        <slot>
            {{ text }}
        </slot>
    </div>
</template>

<style src="./styles/ui-text.scss" lang="scss"></style>
