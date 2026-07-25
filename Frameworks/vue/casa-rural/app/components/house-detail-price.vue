<script lang="ts" setup>
const props = defineProps<{
    price?: number;
    click?: () => void;
    isDisabled?: boolean;
}>()
</script>

<template>
    <div v-if="price" class="mt-4">
        <div class="flex flex-inline gap-6 items-center justify-end mb-4">
            <div class="flex flex-col justify-between items-start">
                <div class="text-xl font-heading">Precio</div>
                <span class="text-4xl text-gray-700">{{ price }}€ <span class="text-lg font-heading">/ noche</span></span>
            </div>
             <button :disabled="isDisabled" @click="click" class="bg-accent text-white px-6 py-4 rounded enabled:hover:bg-accent-dark transition-colors duration-300 cursor-pointer disabled:bg-gray-400 disabled:cursor-not-allowed">
                <span class="font-bold text-xl">Reservar</span>
            </button>
        </div>
    </div>
</template>