<script setup lang="ts">
    import {computed, ref} from 'vue';

    import type {IUiPictureProps} from './logic/props';

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

</script>

<template>
    <picture
        :class="uiPictureModifiers"
        class="ui-picture"
    >
        <slot></slot>
        <img
            v-if="loaded === false"
            @load="loaded = true"
            :src="src"
            alt="Дубль для проверкии загрузки"
        >
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
