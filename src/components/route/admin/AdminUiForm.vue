<script setup lang="ts">
    import {
        FONT_WEIGHT_BOLD,
        SIZE_S,
        SIZE_XS,
    } from 'src/constants';

    import ColorUiButton from 'blocks/Button/ColorUiButton.vue';
    import UiField from 'blocks/Field/UiField.vue';
    import UiForm from 'blocks/Form/UiForm.vue';
    import UiInput from 'blocks/Input/UiInput.vue';
    import UiText from 'blocks/Text/UiText.vue';
</script>

<template>
    <UiForm>
        <UiText
            text="Добавление карточки товара"
            :size="SIZE_S"
            uppercase
            :weight="FONT_WEIGHT_BOLD"
        />
        <UiField>
            <UiInput placeholder="Фото" />
        </UiField>
        <UiField>
            <UiInput placeholder="Название" />
        </UiField>
        <UiField>
            <UiInput placeholder="Описание" />
        </UiField>
        <UiField>
            <UiInput placeholder="Стоимость" />
        </UiField>
        <ColorUiButton
            :button-props="{
                rounded: true,
                size: SIZE_S,
            }"
            :text-props="{
                text: 'Добавить товар',
                uppercase: true,
                size: SIZE_XS,
            }"
        />
    </UiForm>
</template>
