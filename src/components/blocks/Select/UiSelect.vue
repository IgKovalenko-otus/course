<script setup lang="ts">
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
            Страна
        </option>
        <option
            value="Беларусь"
            class="ui-select__option"
        >
            Беларусь
        </option>
        <option
            value="Россия"
            class="ui-select__option"
        >
            Россия
        </option>
        <option
            value="Казахстан"
            class="ui-select__option"
        >
            Казахстан
        </option>
    </select>
</template>

<style src="./styles/ui-select.scss" lang="scss"></style>
