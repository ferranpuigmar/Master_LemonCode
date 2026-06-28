<script lang="ts" setup>
defineProps<{
    label: string;
    for?: string;
    error?: string;
}>();
</script>

<template>
    <div class="mb-3">
        <label v-if="label" :for="for" class="block text-sm font-medium text-gray-700">{{ label }}</label>
        <slot />
        <p v-if="error" class="text-red-500 text-sm mt-1">{{ error }}</p>
    </div>
</template>
