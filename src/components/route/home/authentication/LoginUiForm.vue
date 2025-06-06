<script setup lang="ts">
    import {useVuelidate} from '@vuelidate/core';
    import {helpers, required} from '@vuelidate/validators';
    import {inject, ref} from 'vue';
    import {useRouter} from 'vue-router';
    import axios from 'axios';

    import {
        FONT_WEIGHT_BOLD,
        SIZE_S,
        SIZE_XS,
    } from 'src/constants';
    import type {ILogin} from './logic/types';

    import ColorUiButton from 'blocks/Button/ColorUiButton.vue';
    import UiField from 'blocks/Field/UiField.vue';
    import UiForm from 'blocks/Form/UiForm.vue';
    import UiInput from 'blocks/Input/UiInput.vue';
    import UiText from 'blocks/Text/UiText.vue';

    const router = useRouter();

    const login = ref<ILogin>({
        email: '',
        password: '',
    });

    const rules = {
        email: {
            required: helpers.withMessage('Значений должно быть больше 0', required),
        },
        password: {
            required: helpers.withMessage('Значений должно быть больше 0', required),
        },
    };

    const formField = useVuelidate(rules, login);

    const loginModal = ref<boolean>(inject('loginModal'));

    async function submit() {
        const result = await formField.value.$validate();

        if (result) {
            axios
                .post('https://fakestoreapi.com/auth/login', {
                    username: 'johnd',
                    password: 'm38rmF$',
                })
                .then((response) => {
                    localStorage.setItem('token', response.data.token);

                    loginModal.value = false;

                    router.push('/admin');
                })
                .catch((error) => console.log(error));
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
