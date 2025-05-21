<script setup lang="ts">
    import {MaskInput} from 'vue-3-mask';

    import {
        FONT_WEIGHT_BOLD,
        SIZE_S,
        SIZE_XS,
    } from 'src/constants';

    import ColorUiButton from 'blocks/Button/ColorUiButton.vue';
    import UiCheckbox from 'blocks/Checkbox/UiCheckbox.vue';
    import UiField from 'blocks/Field/UiField.vue';
    import UiForm from 'blocks/Form/UiForm.vue';
    import UiInput from 'blocks/Input/UiInput.vue';
    import UiSelect from 'blocks/Select/UiSelect.vue';
    import UiText from 'blocks/Text/UiText.vue';
</script>

<template>
    <UiForm>
        <UiText
            text="Оформление заказа"
            :size="SIZE_S"
            uppercase
            :weight="FONT_WEIGHT_BOLD"
        />
        <UiField>
            <UiInput placeholder="Имя" />
        </UiField>
        <UiField>
            <UiInput placeholder="Email" />
        </UiField>
        <UiField>
            <MaskInput
                mask="+7 ### ### ## ##"
                placeholder="+7"
                class="ui-input"
            />
        </UiField>
        <UiField>
            <UiSelect />
        </UiField>
        <UiField>
            <UiInput placeholder="Адрес" />
        </UiField>
        <UiCheckbox>
            <UiText
                text="Упаковка - 100 ₽"
                :size="SIZE_XS"
            />
        </UiCheckbox>
        <ColorUiButton
            :button-props="{
                rounded: true,
                size: SIZE_S,
            }"
            :text-props="{
                text: 'Отправить',
                uppercase: true,
                size: SIZE_XS,
            }"
        />
    </UiForm>
</template>
