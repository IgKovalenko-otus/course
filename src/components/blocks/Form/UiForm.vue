<script setup lang="ts">
    import UiFrame from 'blocks/Frame/UiFrame.vue';
</script>

<template>
    <form
        onsubmit="return false"
        class="ui-form"
    >
        <UiFrame class="ui-form__content">
            <slot></slot>
        </UiFrame>
    </form>
</template>

<style src="./styles/ui-form.scss" lang="scss"></style>
