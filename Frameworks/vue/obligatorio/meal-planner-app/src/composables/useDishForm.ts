import { ref } from 'vue';
import type { Dish, MealMoment, Weekday } from '@/types';

export interface DishFormData {
    id: string;
    name: string;
    weekday: Weekday;
    mealMoment: MealMoment;
}

type FormErrors = Partial<Record<keyof DishFormData, string>>;

const initialFormData: Omit<DishFormData, 'id'> = {
    name: '',
    weekday: 'Lunes',
    mealMoment: 'Comida',
};

export function useDishForm(initialDish?: Dish, initialSlot?: { weekday: Weekday; mealMoment: MealMoment }) {
    const form = ref<DishFormData>({
        id: initialDish?.id ?? crypto.randomUUID(),
        name: initialDish?.name ?? initialFormData.name,
        weekday: initialSlot?.weekday ?? initialFormData.weekday,
        mealMoment: initialSlot?.mealMoment ?? initialFormData.mealMoment,
    });

    const errors = ref<FormErrors>({});

    function validate(): boolean {
        errors.value = {};

        if (!form.value.name.trim()) {
            errors.value.name = 'Este campo no puede estar vacío.';
        }

        return Object.keys(errors.value).length === 0;
    }

    function resetForm() {
        form.value = { ...initialFormData, id: crypto.randomUUID() };
        errors.value = {};
    }

    return { form, errors, validate, resetForm };
}
