<script setup lang="ts">
    import {useVuelidate} from '@vuelidate/core';
    import {
        alpha,
        email,
        helpers,
        minLength,
        required,
    } from '@vuelidate/validators';
    import {inject, ref} from 'vue';
    import {MaskInput} from 'vue-3-mask';
    import axios from 'axios';

    import {
        FONT_WEIGHT_BOLD,
        SIZE_S,
        SIZE_XS,
    } from 'src/constants';
    import type {IOrder} from './logic/types';

    import ColorUiButton from 'blocks/Button/ColorUiButton.vue';
    import UiCheckbox from 'blocks/Checkbox/UiCheckbox.vue';
    import UiField from 'blocks/Field/UiField.vue';
    import UiForm from 'blocks/Form/UiForm.vue';
    import UiInput from 'blocks/Input/UiInput.vue';
    import UiLabel from 'blocks/Label/UiLabel.vue';
    import UiMessage from 'blocks/Message/UiMessage.vue';
    import UiSelect from 'blocks/Select/UiSelect.vue';
    import UiText from 'blocks/Text/UiText.vue';
    import UiTransitionFadeIn from 'blocks/Transition/FadeIn/UiTransitionFadeIn.vue';

    const countryList = ['Россия', 'Казахстан', 'Беларусь'];
    const completedOrder = ref<boolean>(false);

    const order = ref<IOrder>({
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
            axios
                .post('https://httpbin.org/post', order.value)
                .then((response) => {
                    completedOrder.value = true;

                    console.log(response.data);
                })
                .catch((error) => console.log(error));
        }
    }

    const {cartTotal} = inject('cart', undefined);

</script>

<template>
    <UiForm class="basket-ui-form">
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
        <UiLabel class="basket-ui-form__total">
            <UiText text="Итого:" />
            <UiText :text="`${cartTotal.toFixed(2)} ₽`" />
        </UiLabel>
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
    <teleport to="#ui-app">
        <UiTransitionFadeIn>
            <UiMessage
                v-if="completedOrder"
                @click="completedOrder = false"
                text="Заказ оформлен!"
            />
        </UiTransitionFadeIn>
    </teleport>
</template>

<style src="./styles/basket-ui-form.scss" lang="scss"></style>
