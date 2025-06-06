<script setup lang="ts">
    import {provide, ref} from 'vue';

    import UiPageContent from 'blocks/Page/Content/UiPageContent.vue';
    import UiPage from 'blocks/Page/UiPage.vue';
    import UiProductFilter from 'blocks/ProductFilter/UiProductFilter.vue';
    import UiTransitionFadeIn from 'blocks/Transition/FadeIn/UiTransitionFadeIn.vue';
    import LoginUiModal from 'route/home/authentication/LoginUiModal.vue';

    const loginModal = ref<boolean>(false);

    provide('loginModal', loginModal);
</script>

<template>
    <UiPage>
        <UiPageContent>
            <UiProductFilter />
        </UiPageContent>
    </UiPage>
    <Teleport to="#ui-app">
        <UiTransitionFadeIn>
            <LoginUiModal
                v-show="loginModal"
                @click="loginModal = false"
                :show-content="loginModal"
            />
        </UiTransitionFadeIn>
    </Teleport>
</template>
