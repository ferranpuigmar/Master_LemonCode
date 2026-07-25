<script setup lang="ts">
import MainHeader from '@/components/main-header.vue'
import ListCard from '@/components/list-card.vue'

import { computed } from 'vue'
import { useListStore } from '@/stores/lists'
import { RouterView, RouterLink, useRouter } from 'vue-router'
import { useViewTransition } from '@/composables/useViewTransition'

const router = useRouter()

const listsStore = useListStore()
const hasList = computed(() => listsStore.lists.length > 0)
console.log('hasList', hasList.value)

const handleCreateList = async () => {
  const newList = await listsStore.createList('New List')
  if (newList) {
    router.push(`/lists/${newList.id}`)
  }
}

const handleOpenList = (listId: string) => {
  useViewTransition(() => {
    router.push(`/lists/${listId}`)
  })
}
</script>

<template>
  <div>
    <MainHeader />
    <main class="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div v-if="!hasList" class="text-center py-12">
        <p class="text-gray-400 text-lg mb-4">No list yet</p>
        <button
          @click="handleCreateList"
          class="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded"
        >
          Create Your First List
        </button>
      </div>
      <div
        v-if="hasList"
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
      >
        <div
          :to="`/lists/${list.id}`"
          v-for="list in listsStore.lists"
          :key="list.id"
          class="block"
          @click="handleOpenList(list.id)"
        >
          <ListCard :list="list" />
        </div>
      </div>
    </main>

    <RouterView />
  </div>
</template>
