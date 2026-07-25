<script setup lang="ts">
import { Teleport, Transition, computed } from "vue";
import { X } from "@lucide/vue";

interface Props {
  drawerIsOpen: boolean;
  title?: string;
  price?: number;
}

const props = withDefaults(defineProps<Props>(), {
  title: "Reserva",
  price: 0,
});

const emit = defineEmits(["onClose"]);

function close() {
  emit("onClose");
}

</script>

<template>
  <Teleport to="body">
    <Transition name="drawer">
      <aside v-if="props.drawerIsOpen" role="dialog" aria-modal="true" :aria-label="title"
        class="fixed top-0 right-0 h-full w-full max-w-xl bg-white z-50 flex flex-col shadow-accent"
        style="box-shadow: var(--shadow-drawer)">
        <div class="flex items-start justify-between px-6 py-4 border-b border-border">
          <div class="flex flex-col space-y-2">
            <h2 class="text-2xl font-heading text-brand-900 leading-tight ">{{ title }}</h2>
            <p v-if="price" class="text-lg text-brand-300 leading-tight font-bold">{{ price }}€ / noche</p>
          </div>
          <button type="button" aria-label="Cerrar" class="text-text-muted hover:text-text-base cursor-pointer"
            @click="close">
            <X class="h-5 w-5" />
          </button>
        </div>
        <div class="flex-1 overflow-y-auto px-6 py-4">
          <slot />
        </div>
      </aside>
    </Transition>
  </Teleport>
</template>

<style scoped>
.drawer-enter-active {
  transition: transform 0.3s ease-out;
}

.drawer-leave-active {
  transition: transform 0.2s ease-in;
}

.drawer-enter-from,
.drawer-leave-to {
  transform: translateX(100%);
}

.drawer-enter-to,
.drawer-leave-from {
  transform: translateX(0);
}
</style>
