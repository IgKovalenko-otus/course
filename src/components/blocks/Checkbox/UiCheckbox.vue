<script setup lang="ts">
    import UiLabel from 'blocks/Label/UiLabel.vue';

    const modelValue = defineModel<boolean>();

</script>

<template>
    <label class="ui-checkbox">
        <UiLabel class="ui-checkbox__label">
            <input
                v-model="modelValue"
                type="checkbox"
                class="ui-checkbox__input"
            >
            <div class="ui-checkbox__bg">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                >
                    <polyline points="20 6 9 17 4 12" />
                </svg>
            </div>
            <slot></slot>
        </UiLabel>
    </label>
</template>

<style src="./styles/ui-checkbox.scss" lang="scss"></style>
