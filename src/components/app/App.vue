<script setup lang="ts">
    import {
        provide,
        ref,
        watch,
    } from 'vue';

    import UiApp from 'blocks/App/UiApp.vue';

    const loginModal = ref<boolean>(false);

    provide('loginModal', loginModal);

    const cart = ref([]);

    const addToCart = (item: any) => {
        cart.value.push(item);
        item.isAdded = true;
        item.count = 1;
    };

    const removeFromCart = (item: any) => {
        item.count = 0;
        item.isAdded = false;
        cart.value.splice(cart.value.indexOf(item), 1);
    };

    const addCount = (item: any) => {
        item.count += 1;
    };

    const removeCount = (item: any) => {
        if (item.count !== 1) {
            item.count -= 1;
        } else {
            removeFromCart(item);
        }
    };

    const clearCart = () => {
        cart.value.forEach((item: any) => {
            item.count = 0;
            item.isAdded = false;
        });

        cart.value.length = 0;
    };

    const cartAddedCount = ref(0);
    const cartTotal = ref(0);

    watch(cart.value, () => {
        cartAddedCount.value = 0;
        cartTotal.value = 0;

        cart.value.map((item: any) => item.count).forEach((num) => {
            cartAddedCount.value += num;
        });

        cart.value.map((item: any) => item.count * item.price).forEach((num) => {
            cartTotal.value += num;
        });
    });

    provide('cart', {
        cart,
        cartAddedCount,
        cartTotal,
        addToCart,
        addCount,
        removeCount,
        clearCart,
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
