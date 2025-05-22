<script setup lang="ts">
    import type {IUiSelectProps} from './logic/props';

    const {options, placeholder} = defineProps<IUiSelectProps>();

    const modelValue = defineModel<string | number>();

</script>

<template>
    <select
        v-model="modelValue"
        class="ui-select"
    >
        <option
            value=""
            disabled
            selected
            hidden
        >
            {{ placeholder }}
        </option>
        <option
            v-for="option in options"
            :key="option"
            :value="option"
            class="ui-select__option"
        >
            {{ option }}
        </option>
    </select>
</template>

<style src="./styles/ui-select.scss" lang="scss"></style>
