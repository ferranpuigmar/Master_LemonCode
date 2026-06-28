<script lang="ts" setup>
import { X, Edit, Heart } from "@lucide/vue";

import { useDishesStore } from "@/stores/dishes";
import type { Dish } from "@/types";
import { useUiStore } from "@/stores/ui";
import { useFavouritesStore } from "@/stores/favourites";
import { usePlanStore } from "@/stores/plan";

const favouritesStore = useFavouritesStore();
const { isFavourite, addFavourite, removeFavourite } = favouritesStore;

const planStore = usePlanStore();
const { removePlansByDish } = planStore;

const dishesStore = useDishesStore();
const { removeDish } = dishesStore;

const uiStore = useUiStore();
const { openAddDishDrawer } = uiStore;

defineProps<{
    dish: Dish;
}>();

</script>

<template>
    <div class="flex flex-col justify-between items-start gap-2 p-2 border border-brand-200 bg-brand-50 rounded-sm">
        <div class="flex flex gap-2 relative w-full">
            <div class="text-sm font-semibold text-brand-800 px-1 pr-2">{{ dish.name }}</div>
            <button
                class="absolute top-0 right-0 text-sm text-gray-500 rounded hover:text-brand-600 transition cursor-pointer"
                @click="isFavourite(dish.id) ? removeFavourite(dish.id) : addFavourite(dish.id)">
                <Heart class="size-4" :class="{ 'text-red-500': isFavourite(dish.id) }" />
            </button>
        </div>
        <div class="flex items-center gap-1 border-t-1 border-brand-200 w-full pt-1 justify-between">
            <div class="flex justify-center items-center gap-1">
                <button
                    class="text-sm text-gray-500 rounded hover:text-brand-600 transition cursor-pointer p-1 pb-0 flex justify-center items-center gap-1"
                    @click="openAddDishDrawer(dish.id)">
                    <Edit class="size-4" /> <span class="text-xs">Editar</span>
                </button>
            </div>
            <button
                class="text-sm text-gray-500 rounded hover:text-brand-600 transition cursor-pointer p-1 pb-0 flex justify-center items-center gap-1"
                @click="isFavourite(dish.id) ? removePlansByDish(dish.id) : removeDish(dish.id)">
                <X class="size-4" /> <span class="text-xs">Eliminar</span>
            </button>
        </div>
    </div>
</template>