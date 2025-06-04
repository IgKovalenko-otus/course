<script setup lang="ts">
    import {useVuelidate} from '@vuelidate/core';
    import {helpers, minLength} from '@vuelidate/validators';
    import {ref} from 'vue';

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

    const login = ref({
        email: '',
        password: '',
    });

    const rules = {
        email: {
            minLength: helpers.withMessage('Минимальное количество символов должно быть болше 0', minLength(2)),
        },
        password: {
            minLength: helpers.withMessage('Минимальное количество символов должно быть болше 0', minLength(2)),
        },
    };

    const formField = useVuelidate(rules, login);

    async function submit() {
        const result = await formField.value.$validate();

        if (result) {
            console.log('good');
        }
    }
</script>

<template>
    <UiForm>
        <UiText
            text="Вход"
            :size="SIZE_S"
            uppercase
            :weight="FONT_WEIGHT_BOLD"
        />
        <UiField :errors="formField.email.$errors">
            <UiInput
                v-model="formField.email.$model"
                placeholder="Email"
            />
        </UiField>
        <UiField :errors="formField.password.$errors">
            <UiInput
                v-model="formField.password.$model"
                type="password"
                placeholder="Пароль"
            />
        </UiField>
        <ColorUiButton
            @click="submit()"
            :button-props="{
                rounded: true,
                size: SIZE_S,
            }"
            :text-props="{
                text: 'Войти',
                uppercase: true,
                size: SIZE_XS,
            }"
        />
    </UiForm>
</template>
