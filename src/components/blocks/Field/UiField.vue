<script setup lang="ts">
    import {SIZE_XXS} from 'src/constants';
    import type {IFieldProps} from './logic/props';

    import UiFrame from 'blocks/Frame/UiFrame.vue';
    import UiText from 'blocks/Text/UiText.vue';
    import UiTransitionFadeIn from 'blocks/Transition/FadeIn/UiTransitionFadeIn.vue';

    const {errors = []} = defineProps<IFieldProps>();
</script>

<template>
    <div class="ui-field">
        <UiFrame
            v-if="$slots.default"
            class="ui-field__content"
        >
            <slot></slot>
        </UiFrame>
        <UiTransitionFadeIn>
            <UiFrame
                v-if="errors.length"
                class="ui-field__errors"
            >
                <UiText
                    v-for="(error, index) in errors"
                    :key="index"
                    :size="SIZE_XXS"
                    :text="`${error.$message}`"
                />
            </UiFrame>
        </UiTransitionFadeIn>
    </div>
</template>

<style src="./styles/ui-field.scss" lang="scss"></style>
