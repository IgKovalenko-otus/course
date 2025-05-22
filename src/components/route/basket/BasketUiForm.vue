<script setup lang="ts">
    import {ref} from 'vue';
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

    const order = ref<{name: string, email: string, phone: string, country: string, address: string, package: boolean}>({
        name: '',
        email: '',
        phone: '',
        country: '',
        address: '',
        package: false,
    });
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
            <UiInput
                v-model="order.name"
                placeholder="Имя"
            />
        </UiField>
        <UiField>
            <UiInput
                v-model="order.email"
                placeholder="Email"
            />
        </UiField>
        <UiField>
            <MaskInput
                v-model="order.phone"
                mask="+7 ### ### ## ##"
                placeholder="+7"
                class="ui-input"
            />
        </UiField>
        <UiField>
            <UiSelect v-model="order.country" />
        </UiField>
        <UiField>
            <UiInput
                v-model="order.address"
                placeholder="Адрес"
            />
        </UiField>
        <UiCheckbox v-model="order.package">
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
