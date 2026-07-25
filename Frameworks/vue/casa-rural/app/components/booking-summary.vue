<script lang="ts" setup>
const props = defineProps<{
    price?: number;
    nights: number;
}>()

const totalPrice = computed(() => props.nights * (props.price ?? 0))
</script>

<template>
    <div v-if="nights > 0" class="mt-4 pt-4 border-t border-border flex items-center justify-between">
        <span class="text-fg-muted">{{ price }}€ × {{ nights }} {{ nights === 1 ? 'noche' : 'noches' }}</span>
        <span class="text-xl font-bold">{{ totalPrice }}€</span>
    </div>
</template>
