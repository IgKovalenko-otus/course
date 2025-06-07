<script setup lang="ts">
    import UiPageFooter from 'blocks/Page/Footer/UiPageFooter.vue';
    import UiPageHeader from 'blocks/Page/Header/UiPageHeader.vue';
</script>

<template>
    <div class="ui-page">
        <UiPageHeader />
        <slot></slot>
        <UiPageFooter />
    </div>
</template>

<style src="./styles/ui-page.scss" lang="scss"></style>
