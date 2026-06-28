<script lang="ts" setup>
import { Weekdays } from '@/types';
import DayCard from '@/components/day-card.vue';
import Modal from '@/components/modal.vue';
import { BrushCleaning, X } from '@lucide/vue';
import { usePlanStore } from '@/stores/plan';
import { ref } from 'vue';

const plansStore = usePlanStore();
const open = ref(false);
</script>

<template>
  <div class="py-4 flex items-center justify-start gap-4">
    <h1 class="text-xl font-bold text-gray-900">Plan semanal</h1>
    <button :disabled="plansStore.plans.length === 0"
      :class="[
        'bg-gray-400 text-white px-4 py-1.5 rounded-full text-sm enabled:hover:bg-gray-500 enabled:cursor-pointer transition text-sm flex items-center gap-1 disabled:opacity-50 disabled:cursor-not-allowed',
        'md:py-2 md:text-md'
      ]"
      @click="open = true">
      <BrushCleaning class="w-4 h-4 mr-2" /> Limpiar planificador
    </button>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-4 gap-4 py-6 pt-0">
    <div v-for="weekday in Weekdays" :key="weekday" class="bg-white shadow-md rounded-lg">
      <DayCard :weekday="weekday" />
    </div>
  </div>

  <Teleport to="body">
    <Modal :open="open" @close="open = false">
      <p>¿Estás seguro de que quieres limpiar el planificador?</p>
      <div class="flex justify-end gap-2 mt-4 text-sm">
        <button class="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500 transition cursor-pointer"
          @click="open = false">Cancelar</button>
        <button class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition cursor-pointer"
          @click="plansStore.clearPlan(); open = false">Limpiar</button>
      </div>
    </Modal>
  </Teleport>
</template>
