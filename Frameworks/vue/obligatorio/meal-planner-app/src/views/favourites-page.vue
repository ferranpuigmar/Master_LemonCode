<script lang="ts" setup>
import { storeToRefs } from 'pinia';
import { Heart, CalendarPlus } from '@lucide/vue';
import { useFavouritesStore } from '@/stores/favourites';
import { useUiStore } from '@/stores/ui';

const favouritesStore = useFavouritesStore();
const { removeFavourite } = favouritesStore;
const { favouriteDishes } = storeToRefs(favouritesStore);

const uiStore = useUiStore();
const { openAddToPlanDrawer } = uiStore;
</script>

<template>
    <div class="py-6">
        <h1 class="text-xl font-semibold text-brand-800 mb-4">Platos favoritos</h1>

        <p v-if="favouriteDishes.length === 0" class="text-gray-500">
            Aún no tienes platos favoritos. Marca el corazón de un plato para añadirlo aquí.
        </p>

        <div v-else class="flex gap-2 max-w-md flex-col md:flex-row">
            <div v-for="dish in favouriteDishes" :key="dish.id"
                class="flex items-center justify-between gap-2 p-3 border border-brand-200 bg-white rounded min-w-fit">
                <span class="text-sm font-semibold text-brand-800 max-w-4xl truncate">{{ dish.name }}</span>
                <div class="flex items-center gap-2">
                    <button
                        class="text-sm text-gray-500 rounded hover:text-brand-600 transition cursor-pointer flex items-center gap-1 p-1 min-w-fit"
                        @click="openAddToPlanDrawer(dish.id)">
                        <CalendarPlus class="size-4" /> <span class="text-xs">Añadir al plan</span>
                    </button>
                    <button class="text-sm text-red-500 rounded hover:text-red-600 transition cursor-pointer p-1"
                        @click="removeFavourite(dish.id)">
                        <Heart class="size-4 fill-red-500" />
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
