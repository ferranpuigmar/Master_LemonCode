<script lang="ts" setup>
import { ref } from 'vue';

defineProps<{
    open: boolean;
}>();

defineEmits<{
    'close': [void];
}>();

</script>

<template>
    <div v-if="open" class="absolute top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center">
      <div class="bg-white rounded shadow-md">
        <div class="p-4 border-b border-gray-200 flex justify-between">
          <h2 class="text-lg font-semibold text-gray-900">Confirmar acción</h2>
          <button type="button" aria-label="Cerrar" class="text-text-muted hover:text-text-base cursor-pointer"
            @click="$emit('close')">
            <X class="h-5 w-5" />
          </button>
        </div>
        <div class="p-4">
            <slot />
        </div>
      </div>
    </div>
</template>
