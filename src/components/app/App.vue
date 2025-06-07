<script setup lang="ts">
    import {provide, ref} from 'vue';

    import UiApp from 'blocks/App/UiApp.vue';

    const cart = ref([]);

    const addToCart = (item: object) => {
        cart.value.push(item);

        console.log(cart.value);
    };

    provide('cart', {
        cart,
        addToCart,
    });
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
