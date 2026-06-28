import type { Dish, MealMoment, Plan, Weekday } from "@/types";
import { defineStore } from "pinia";
import { ref } from "vue";
import { usePlanStore } from "@/stores/plan";

export const useDishesStore = defineStore('dishes', () => {
    const plansStore = usePlanStore();

    const dishes = ref<Dish[]>([]);

    function addDish(dish: Dish, plan?: Omit<Plan, "id" | "dishId">) {
        dishes.value.push(dish);
        if (plan) {
            plansStore.addPlan({ ...plan, dishId: dish.id });
        }
    }

    function removeDish(dishId: string) {
        dishes.value = dishes.value.filter(dish => dish.id !== dishId);
        plansStore.removePlansByDish(dishId);
    }

    function getDishById(dishId: string | null): Dish | undefined {
        if (!dishId) return undefined;
        return dishes.value.find(dish => dish.id === dishId);
    }

    function updateDish(dishId: string, updatedDish: Dish) {
        const dish = dishes.value.find(dish => dish.id === dishId);
        if (dish) {
            Object.assign(dish, updatedDish);
        }
    }

    function getDishes(): Dish[] {
        return dishes.value;
    }

    function getDishesByWeekday(weekday: Weekday): Dish[] {
        return plansStore.plans
            .filter(plan => plan.weekday === weekday)
            .map(plan => getDishById(plan.dishId))
            .filter((dish): dish is Dish => !!dish);
    }

    function getDishesByMoment(weekday: Weekday, mealMoment: MealMoment): Dish[] {
        return plansStore.plans
            .filter(plan => plan.weekday === weekday && plan.mealMoment === mealMoment)
            .map(plan => getDishById(plan.dishId))
            .filter((dish): dish is Dish => !!dish);
    }

    return { dishes, getDishesByWeekday, getDishesByMoment, addDish, removeDish, getDishById, updateDish, getDishes };
}, 
{
    persist: {
        key: 'dishes',
        storage: localStorage,
    }
});
