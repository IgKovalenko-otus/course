<script setup lang="ts">
    import {useVuelidate} from '@vuelidate/core';
    import {
        alpha,
        email,
        helpers,
        minLength,
        required,
    } from '@vuelidate/validators';
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

    const countryList = ['Россия', 'Казахстан', 'Беларусь'];

    const order = ref({
        name: '',
        email: '',
        phone: '',
        country: '',
        address: '',
        package: false,
    });

    const rules = {
        name: {
            required: helpers.withMessage('Обязательное поле', required),
            alpha: helpers.withMessage('Значение не является алфавитным, язык: en', alpha),
        },
        email: {
            required: helpers.withMessage('Обязательное поле', required),
            email: helpers.withMessage('Формат поля ***@email.**', email),
        },
        phone: {
            required: helpers.withMessage('Обязательное поле', required),
            minLength: helpers.withMessage('Минимальное количество цифр 10, без кода +7', minLength(16)),
        },
        country: {
            required: helpers.withMessage('Обязательное поле', required),
        },
        address: {
            required: helpers.withMessage('Обязательное поле', required),
        },
    };

    const formField = useVuelidate(rules, order);

    async function submit() {
        const result = await formField.value.$validate();

        if (result) {
            alert('111');
        }
    }

</script>

<template>
    <UiForm>
        <UiText
            text="Оформление заказа"
            :size="SIZE_S"
            uppercase
            :weight="FONT_WEIGHT_BOLD"
        />
        <UiField :errors="formField.name.$errors">
            <UiInput
                v-model="formField.name.$model"
                placeholder="Имя"
            />
        </UiField>
        <UiField :errors="formField.email.$errors">
            <UiInput
                v-model="formField.email.$model"
                placeholder="Email"
            />
        </UiField>
        <UiField :errors="formField.phone.$errors">
            <MaskInput
                v-model="formField.phone.$model"
                mask="+7 ### ### ## ##"
                placeholder="+7"
                class="ui-input"
            />
        </UiField>
        <UiField :errors="formField.country.$errors">
            <UiSelect
                v-model="formField.country.$model"
                :options="countryList"
                placeholder="Страна"
            />
        </UiField>
        <UiField :errors="formField.address.$errors">
            <UiInput
                v-model="formField.address.$model"
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
            @click="submit()"
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
