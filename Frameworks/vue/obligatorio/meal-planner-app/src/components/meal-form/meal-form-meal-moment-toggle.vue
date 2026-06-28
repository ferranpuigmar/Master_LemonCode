<script lang="ts" setup>
import { MealMoments, type MealMoment } from '@/types';
import { Sun, Moon, type LucideIcon } from '@lucide/vue';

defineProps<{
    modelValue: MealMoment;
}>();

defineEmits<{
    'update:modelValue': [value: MealMoment];
}>();

const icons: Record<MealMoment, LucideIcon> = {
    Comida: Sun,
    Cena: Moon,
};
</script>

<template>
    <div class="mt-1 inline-flex rounded gap-1">
        <label
            v-for="moment in MealMoments"
            :key="moment"
            class="flex items-center gap-1.5 px-3 py-1.5 rounded cursor-pointer text-sm transition-colors border border-gray-300"
            :class="modelValue === moment ? 'bg-brand-500 text-white' : 'text-gray-700'">
            <input
                type="radio"
                name="mealMoment"
                :value="moment"
                :checked="modelValue === moment"
                @change="$emit('update:modelValue', moment)"
                class="sr-only">
            <component :is="icons[moment]" class="h-4 w-4" />
            {{ moment }}
        </label>
    </div>
</template>
