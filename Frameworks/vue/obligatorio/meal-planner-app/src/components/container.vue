<script lang="ts" setup>
defineProps<{
    className?: string;
}>()
</script>

<template>
    <div :class="['px-6', className]">
        <slot />
    </div>
</template>