<script setup lang="ts">
    import type {IInputProps} from 'blocks/Input/logic/props';

    const {
        uppercase = false,
        placeholder = '',
        type = 'text',
        autofocus = false,
        disabled = false,
        readonly = false,
    } = defineProps<IInputProps>();

    const modelValue = defineModel<string | number>();

</script>

<template>
    <input
        v-model="modelValue"
        :placeholder
        :autofocus
        :disabled
        :readonly
        :type
        autocomplete="off"
        :class="uppercase && 'ui-input--uppercase'"
        class="ui-input"
    >
</template>

<style src="./styles/ui-input.scss" lang="scss"></style>
