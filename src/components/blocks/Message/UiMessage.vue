<script setup lang="ts">
    import {FONT_WEIGHT_BOLD, SIZE_XL} from 'src/constants';
    import type {IUiMessageProps} from './logic/props';

    import UiFrame from 'blocks/Frame/UiFrame.vue';
    import UiText from 'blocks/Text/UiText.vue';

    const {text = ''} = defineProps<IUiMessageProps>();
</script>

<template>
    <div class="ui-message">
        <UiFrame>
            <UiText
                :text="text"
                :size="SIZE_XL"
                :weight="FONT_WEIGHT_BOLD"
            />
        </UiFrame>
    </div>
</template>

<style src="./styles/ui-message.scss" lang="scss"></style>
