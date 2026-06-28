<script lang="ts" setup>
import { useDishesStore } from '@/stores/dishes';
import { type Weekday, MealMoments, type MealMoment } from '@/types';
import DishCard from '@/components/dish-card.vue';
import MealIcon from '@/components/meal-icon.vue';

const dishesStore = useDishesStore();
const { getDishesByMoment } = dishesStore;

defineProps<{
    weekday: Weekday;
}>();
</script>

<template>
    <div class="p-2 bg-brand-700 text-white rounded-t-lg text-center">
        {{ weekday }}
    </div>
    <div class="flex flex-col gap-1 p-4">
        <div v-for="mealMoment in MealMoments" :key="mealMoment">
            <div class="flex items-center gap-2 text-sm text-gray-700">
                <MealIcon :mealMoment="mealMoment" />
                {{ mealMoment }}
            </div>
            <div v-for="dish in getDishesByMoment(weekday, mealMoment)" :key="dish.id" class="my-2">
                <DishCard :dish="dish" />
            </div>
            <hr v-if="mealMoment !== MealMoments[MealMoments.length - 1]" class="my-2 border-gray-200" />
        </div>
    </div>
</template>