<script setup lang="ts">
    import {useNavigation} from 'composables/useNavigation';

    import UiText from 'blocks/Text/UiText.vue';

    const {listNavigation} = useNavigation();
</script>

<template>
    <footer class="ui-page-footer">
        <ul class="ui-page-footer__list">
            <li
                v-for="({text, to}, index) in listNavigation"
                :key="index"
                class="ui-page-footer__list-item"
            >
                <RouterLink
                    :to="to"
                    class="ui-page-footer__link"
                >
                    <UiText :text="text" />
                </RouterLink>
            </li>
        </ul>
    </footer>
</template>

<style src="./styles/ui-page-footer.scss" lang="scss"></style>
