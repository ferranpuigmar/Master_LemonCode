<script lang="ts" setup>
import { Weekdays, type Weekday } from '@/types';
import { ChevronDown } from '@lucide/vue';

defineProps<{
    modelValue: Weekday;
}>();

defineEmits<{
    'update:modelValue': [value: Weekday];
}>();
</script>

<template>
    <div class="relative mt-1">
        <select
            :value="modelValue"
            @change="$emit('update:modelValue', ($event.target as HTMLSelectElement).value as Weekday)"
            name="weekday"
            id="weekday"
            class="appearance-none p-2 pr-8 block w-full rounded border border-gray-600 focus:border-brand-500 focus:ring-brand-500 sm:text-sm">
            <option v-for="day in Weekdays" :key="day" :value="day">{{ day }}</option>
        </select>
        <ChevronDown class="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
    </div>
</template>
