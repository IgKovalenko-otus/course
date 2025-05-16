<script setup lang="ts">
    import {
        computed,
        onMounted,
        ref,
    } from 'vue';
    import {preload} from 'vue-onload';

    import type {IUiPictureProps} from './logic/types';

    import UiTransitionFadeIn from 'blocks/Transition/FadeIn/UiTransitionFadeIn.vue';

    const {
        alt,
        src,
        stub,
        isAbsolute,
        isCover,
    } = defineProps<IUiPictureProps>();

    const uiPictureModifiers = computed(() => ([
        isAbsolute && 'ui-picture--is-absolute',
        isCover && 'ui-picture--is-cover',
    ]));

    const loaded = ref(false);

    onMounted(() => {
        loaded.value = false;

        preload([src], (completed) => {
            if (completed) {
                loaded.value = true;
            }
        });
    });

</script>

<template>
    <picture
        :class="uiPictureModifiers"
        class="ui-picture"
    >
        <slot></slot>
        <UiTransitionFadeIn>
            <img
                v-if="loaded"
                :src="src"
                :alt="alt"
                draggable="false"
                class="ui-picture__img"
            >
            <img
                v-else-if="stub"
                :src="stub"
                alt="Заглушка"
                draggable="false"
                class="ui-picture__img"
            >
        </UiTransitionFadeIn>
    </picture>
</template>

<style src="./styles/ui-picture.scss" lang="scss"></style>
