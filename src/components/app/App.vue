<script setup lang="ts">
    import UiApp from 'blocks/App/UiApp.vue';
</script>

<template>
    <UiApp id="ui-app">
        <RouterView v-slot="{Component}">
            <KeepAlive>
                <component
                    :is="Component"
                    :key="$route.params.id"
                />
            </KeepAlive>
        </RouterView>
    </UiApp>
</template>
