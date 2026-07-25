<template>
  <header class="border-b border-dark-border bg-dark-card">
    <div class="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between">
        <h1 class="text-2xl font-semibold text-white">My Tasks Keeper</h1>
        <button
          @click="handleNewList"
          class="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200 font-medium cursor-pointer"
        >
          New List
        </button>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useListStore } from '@/stores/lists'

const DEFAULT_LIST_TITLE = 'New List'

const listsStore = useListStore()

const handleNewList = async () => {
  await listsStore.createList(DEFAULT_LIST_TITLE)
  // router.push({ name: 'ListDetail', params: { id: newList.id } }) // Navigate to the new list's detail page
}
</script>
