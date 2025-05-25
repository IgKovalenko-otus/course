<script setup lang="ts">
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

    const newProduct = ref<{image: string, title: string, description: string, price: number}>({
        image: '',
        title: '',
        description: '',
        price: 0,
    });
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
            <UiInput
                v-model="newProduct.image"
                placeholder="Картинка"
            />
        </UiField>
        <UiField>
            <UiInput
                v-model="newProduct.title"
                placeholder="Заголовок"
            />
        </UiField>
        <UiField>
            <UiInput
                v-model="newProduct.description"
                placeholder="Описание"
            />
        </UiField>
        <UiField>
            <UiInput
                v-model="newProduct.price"
                type="number"
                placeholder="Стоимость"
            />
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
