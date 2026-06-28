<script lang="ts" setup>
import { useRouter } from 'vue-router';
const router = useRouter();
</script>

<template>
    <button class="flex items-center cursor-pointer gap-3" @click="router.push('/')">
        <span class="text-3xl">🥗</span>
        <span class="block font-bold text-brand-900 text-md md:text-3xl text-left leading-none">Meal Planner</span>
    </button>
</template>