<script lang="ts" setup>
import type { Dish } from '@/types';
import { useDishesStore } from '@/stores/dishes';
import { usePlanStore } from '@/stores/plan';
import { useDishForm } from '@/composables/useDishForm';
import FormField from '@/components/meal-form/meal-form-form-field.vue';
import WeekdaySelect from '@/components/meal-form/meal-form-weekday-select.vue';
import MealMomentToggle from '@/components/meal-form/meal-form-meal-moment-toggle.vue';
import { useUiStore } from '@/stores/ui.ts';

const props = withDefaults(defineProps<{ dish?: Dish; reuseDish?: Dish }>(), {
    dish: undefined,
    reuseDish: undefined,
});

const dishesStore = useDishesStore();
const { addDish, updateDish } = dishesStore;

const planStore = usePlanStore();
const { addPlan, updatePlanForDish } = planStore;

const { form, errors, validate, resetForm } = useDishForm(props.dish ?? props.reuseDish);

const uiStore = useUiStore();
const { closeAddDishDrawer } = uiStore;

const handleOnSubmit = (event: Event) => {
    event.preventDefault();
    if (!validate()) return;

    const slot = { weekday: form.value.weekday, mealMoment: form.value.mealMoment };

    if (props.reuseDish) {
        addPlan({ ...slot, dishId: props.reuseDish.id });
        closeAddDishDrawer();
        return;
    }

    const dish: Dish = { id: form.value.id, name: form.value.name };

    if (props.dish) {
        updateDish(props.dish.id, dish);
        updatePlanForDish(props.dish.id, slot.weekday, slot.mealMoment);
        closeAddDishDrawer();
        return;
    }

    addDish(dish, slot);
    resetForm();
};
</script>

<template>
    <form name="meal-form" @submit="handleOnSubmit">
        <FormField label="Nombre del plato" for="name" :error="errors.name">
            <input v-model="form.name" type="text" name="name" id="name" :readonly="!!props.reuseDish"
                class="mt-1 p-2 block w-full rounded border border-gray-600 focus:border-brand-500 focus:ring-brand-500 sm:text-sm read-only:bg-gray-100 read-only:text-gray-500"
                placeholder="Nombre del plato" />
        </FormField>

        <FormField label="Día de la semana" for="weekday">
            <WeekdaySelect v-model="form.weekday" />
        </FormField>

        <FormField label="Momento del día">
            <MealMomentToggle v-model="form.mealMoment" />
        </FormField>

        <button type="submit"
            class="mt-4 w-full bg-brand-500 text-white px-4 py-2 rounded hover:bg-brand-600 transition cursor-pointer">Guardar</button>
    </form>
</template>
