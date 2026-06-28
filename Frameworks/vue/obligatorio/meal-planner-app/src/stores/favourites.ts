import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { useDishesStore } from "@/stores/dishes";
import type { Dish } from "@/types";

export const useFavouritesStore = defineStore('favourites', () => {
    const favouriteIds = ref<string[]>([]);

    const userDishStore = useDishesStore();
    const { getDishById } = userDishStore;

    const favouriteDishes = computed<Dish[]>(() => {
        return favouriteIds.value
            .map(id => getDishById(id))
            .filter((dish): dish is Dish => dish !== undefined);
    });

    function addFavourite(dishId: string) {
        if (!favouriteIds.value.includes(dishId)) {
            favouriteIds.value.push(dishId);
        }
    }

    function removeFavourite(dishId: string) {
        favouriteIds.value = favouriteIds.value.filter(id => id !== dishId);
    }

    function toggleFavourite(dishId: string) {
        if (favouriteIds.value.includes(dishId)) {
            removeFavourite(dishId);
        } else {
            addFavourite(dishId);
        }
    }

    const isFavourite = computed(() => {
        return (dishId: string) => favouriteIds.value.includes(dishId);
    });

    return { favouriteIds, favouriteDishes, addFavourite, removeFavourite, toggleFavourite, isFavourite };
},
{
    persist: {
        key: 'favourites',
        storage: localStorage,
    }
});