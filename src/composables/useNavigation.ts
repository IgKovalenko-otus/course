import {ref} from "vue";

import {ROUTE_NAME_BASKET, ROUTE_NAME_HOME, RouteName} from "src/constants";

type to = {
    name: RouteName
}

type ListNavigationItem = {
    text: string
    to: to
}

export function useNavigation() {
    const listNavigation = ref<ListNavigationItem[]>([
        {
            text: 'Home',
            to: {
                name: ROUTE_NAME_HOME,
            },
        },
        {
            text: 'Basket',
            to: {
                name: ROUTE_NAME_BASKET,
            },
        },
    ]);

    return {
        listNavigation
    }
}