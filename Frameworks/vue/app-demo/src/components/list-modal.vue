<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { useListStore } from '@/stores/lists'
import { computed, nextTick, onMounted, ref } from 'vue'
import { useViewTransition } from '@/composables/useViewTransition'

const listStore = useListStore()
const router = useRouter()

const route = useRoute()
const listId = computed(() => route.params.id as string)
const list = computed(() => listStore.lists.find((list) => list.id === listId.value))

const closeModal = () => {
  useViewTransition(() => {
    router.push('/')
  })
}

const isEditingTitle = ref<boolean>(false)
const listTitleInternal = ref<string>(list.value?.title || '')

const saveTitle = () => {
  listStore.updateList(listId.value, { title: listTitleInternal.value })
}

const handleOnBlur = () => {
  isEditingTitle.value = false
  saveTitle()
}

const titleInput = ref<HTMLInputElement | null>(null)

const handleEditingTitle = () => {
  isEditingTitle.value = true
  listTitleInternal.value = list.value?.title || ''

  nextTick(() => {
    titleInput.value?.focus()
  })
}

onMounted(() => {
  if (!list.value) {
    closeModal()
  }
})
</script>

<template>
  <Teleport to="body">
    <Transition name="modal">
      <div
        class="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center"
        v-if="list"
        @click.stop="closeModal"
      >
        <div
          class="bg-dark-card border border-dark-border rounded-lg shadow-2xl w-full max-w-2xl max-h-[85vh] min-h-[500px] flex flex-col"
          :style="{ viewTransitionName: `card-${listId}` }"
          @click.stop
        >
          <button
            v-if="!isEditingTitle"
            class="text-xl font-semibold mb-4"
            @click="handleEditingTitle"
          >
            {{ list?.title }}
          </button>
          <input
            v-else
            ref="titleInput"
            v-model="listTitleInternal"
            @input="saveTitle"
            @blur="handleOnBlur"
          />
          <!-- <button
            @click="closeModal"
            class="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded"
          >
            Close
          </button> -->
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.2s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-active > div,
.modal-leave-active > div {
  transition: transform 0.2s ease;
}

.modal-enter-from > div,
.modal-leave-to > div {
  transform: scale(0.95);
}
</style>
