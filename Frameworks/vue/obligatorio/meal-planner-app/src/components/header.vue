<script lang="ts" setup>
import { storeToRefs } from 'pinia';
import { RouterLink } from 'vue-router';
import { Heart } from '@lucide/vue';
import Drawer from '@/components/drawer.vue';
import Logo from '@/components/logo.vue';

import { useUiStore } from '@/stores/ui';
import MealForm from '@/components/meal-form/meal-form.vue';
import { useDishesStore } from '@/stores/dishes';
import Container from '@/components/container.vue';

const dishesStore = useDishesStore();
const { getDishById } = dishesStore;

const uiStore = useUiStore();
const { openAddDishDrawer, toggleDishDrawer } = uiStore;
const { isAddDishDrawerOpen, editDishId, reuseDishId } = storeToRefs(uiStore);

const handleToggleDrawer = () => {
    toggleDishDrawer();
};
</script>

<template>
    <header class="sticky top-0 left-0 right-0 z-50 bg-white shadow-sm">
        <Container :class-name="'bg-white text-black py-4 flex items-center justify-between'">
            <Logo />
            <div class="flex items-center gap-4 md:gap-8">
                <RouterLink to="/favoritos"
                    class="flex items-center gap-2 text-sm text-gray-600 hover:text-brand-600 transition">
                    <Heart class="size-6 md:size-6" /> <span class="hidden md:inline">Favoritos</span>
                </RouterLink>
                <button :class="[
                    'bg-brand-500 text-white text-sm px-4 py-1.5 rounded-full hover:bg-brand-600 transition cursor-pointer',
                    'md:px-6 md:py-2 md:text-md'
                ]" @click="openAddDishDrawer()">Agregar Plato</button>
            </div>
        </Container>
    </header>

    <Drawer :isEditing="!!editDishId" :drawerIsOpen="isAddDishDrawerOpen" @toggleDrawer="handleToggleDrawer">
        <MealForm :key="editDishId ?? reuseDishId ?? 'new'" :dish="getDishById(editDishId)"
            :reuse-dish="getDishById(reuseDishId)" />
    </Drawer>
</template>