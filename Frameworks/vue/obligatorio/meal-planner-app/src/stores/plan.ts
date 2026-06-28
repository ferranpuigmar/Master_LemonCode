import type { MealMoment, Plan, Weekday } from "@/types";
import { defineStore } from "pinia";
import { ref } from "vue";

export const usePlanStore = defineStore('plan', () => {
    const plans = ref<Plan[]>([]);

    function addPlan(plan: Omit<Plan, "id">) {
        plans.value.push({ ...plan, id: crypto.randomUUID() });
    }

    function removePlanById(planId: string) {
        plans.value = plans.value.filter(plan => plan.id !== planId);
    }

    function removePlansByDish(dishId: string) {
        plans.value = plans.value.filter(plan => plan.dishId !== dishId);
    }

    function updatePlanForDish(dishId: string, weekday: Weekday, mealMoment: MealMoment) {
        const plan = plans.value.find(plan => plan.dishId === dishId);
        if (plan) {
            plan.weekday = weekday;
            plan.mealMoment = mealMoment;
        } else {
            addPlan({ weekday, mealMoment, dishId });
        }
    }

    function clearPlan() {
        plans.value = [];
    }

    return { plans, addPlan, removePlanById, removePlansByDish, updatePlanForDish, clearPlan };
},
{
    persist: {
        key: 'plan',
        storage: localStorage,
    }
});
