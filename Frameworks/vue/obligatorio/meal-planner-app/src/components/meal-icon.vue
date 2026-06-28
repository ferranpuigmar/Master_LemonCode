<script setup lang="ts">
import { mealIcons } from '@/utils/mealMoment';
import type { MealMoment } from '@/types';

interface Props {
    mealMoment: MealMoment;
    class?: string;
}

const props = defineProps<Props>();
</script>

<template>
    <component :is="mealIcons[props.mealMoment]" class="inline-block h-4 w-4" :class="props.class" />
</template>