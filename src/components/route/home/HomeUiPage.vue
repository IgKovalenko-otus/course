<script setup lang="ts">
    import {ref} from 'vue';

    import {FONT_WEIGHT_BOLD, SIZE_S} from 'src/constants';
    import type {IUser} from './logic/types';

    import ColorUiButton from 'blocks/Button/ColorUiButton.vue';
    import UiLabel from 'blocks/Label/UiLabel.vue';
    import UiPageContent from 'blocks/Page/Content/UiPageContent.vue';
    import UiPage from 'blocks/Page/UiPage.vue';
    import UiTag from 'blocks/Tag/UiTag.vue';
    import UiText from 'blocks/Text/UiText.vue';

    const listUsers = ref<IUser[]>([
        {
            name: 'Вася',
            age: 19,
        },
        {
            name: 'Петя',
            age: 45,
        },
        {
            name: 'Толя',
            age: 22,
        },
        {
            name: 'Катя',
            age: 29,
        },
        {
            name: 'Моли',
            age: 34,
        },
    ]);

    const selectUserAge = ref<number>(0);
    const selectUserIndex = ref<number>();

    function selectUser(index: number) {
        selectUserAge.value = listUsers.value[index].age;

        selectUserIndex.value = index;
    }

    const isOpenListUsers = ref<boolean>();

</script>

<template>
    <UiPage class="home-ui-page">
        <UiPageContent class="home-ui-page__content">
            <ul
                v-show="isOpenListUsers"
                class="home-ui-page__list"
            >
                <li
                    v-for="({name}, index) in listUsers"
                    :key="index"
                    @click="selectUser(index)"
                    class="home-ui-page__list-item"
                >
                    <UiTag
                        :is-active="selectUserIndex === index"
                        :text="name"
                    />
                </li>
            </ul>
            <UiLabel>
                <UiText
                    text="Возраст"
                    :size="SIZE_S"
                    :weight="FONT_WEIGHT_BOLD"
                />
                <UiText
                    :text="selectUserAge != 0 ? `${selectUserAge}` : 'Пользователь не выбран'"
                    :size="SIZE_S"
                />
            </UiLabel>
            <ColorUiButton
                @click="isOpenListUsers = !isOpenListUsers"
                :button-props="{
                    rounded: true
                }"
                :text-props="{
                    text: 'Список пользователей'
                }"
            />
        </UiPageContent>
    </UiPage>
</template>

<style src="./styles/home-ui-page.scss" lang="scss"></style>
