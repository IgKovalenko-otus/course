<script setup lang="ts">
    import UiPageContent from 'blocks/Page/Content/UiPageContent.vue';
    import UiPage from 'blocks/Page/UiPage.vue';
    import UiProductFilter from 'blocks/ProductFilter/UiProductFilter.vue';
</script>

<template>
    <UiPage class="home-ui-page">
        <UiPageContent class="home-ui-page__content">
            <UiProductFilter />
        </UiPageContent>
    </UiPage>
</template>

<style src="./styles/home-ui-page.scss" lang="scss"></style>
