<script setup lang="ts">
    import type {ILoginUiFormProps} from 'route/home/authentication/logic/props';

    import UiModal from 'blocks/Modal/UiModal.vue';
    import UiModalWindow from 'blocks/Modal/Window/UiModalWindow.vue';
    import UiTransitionZoomIn from 'blocks/Transition/ZoomIn/UiTransitionZoomIn.vue';
    import LoginUiForm from 'route/home/authentication/LoginUiForm.vue';

    const {showContent = false} = defineProps<ILoginUiFormProps>();
</script>

<template>
    <UiModal>
        <UiModalWindow @click.stop>
            <UiTransitionZoomIn>
                <LoginUiForm v-show="showContent" />
            </UiTransitionZoomIn>
        </UiModalWindow>
    </UiModal>
</template>
