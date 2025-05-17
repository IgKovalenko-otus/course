<script setup lang="ts">
    import UiPageHeader from 'blocks/Page/Header/UiPageHeader.vue';
</script>

<template>
    <div class="ui-page">
        <UiPageHeader />
        <slot></slot>
    </div>
</template>

<style src="./styles/ui-page.scss" lang="scss"></style>
