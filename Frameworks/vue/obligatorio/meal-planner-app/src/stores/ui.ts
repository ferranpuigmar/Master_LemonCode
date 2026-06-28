import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUiStore = defineStore('ui', () => {
  const isAddDishDrawerOpen = ref(false)
  const editDishId = ref<string | null>(null)
  const reuseDishId = ref<string | null>(null)

  function openAddDishDrawer(id?: string) {
    isAddDishDrawerOpen.value = true
    editDishId.value = id ?? null
    reuseDishId.value = null
  }

  function openAddToPlanDrawer(dishId: string) {
    isAddDishDrawerOpen.value = true
    editDishId.value = null
    reuseDishId.value = dishId
  }

  function closeAddDishDrawer() {
    isAddDishDrawerOpen.value = false
    editDishId.value = null
    reuseDishId.value = null
  }

  function toggleDishDrawer() {
    isAddDishDrawerOpen.value = !isAddDishDrawerOpen.value
    if (!isAddDishDrawerOpen.value) {
      editDishId.value = null
      reuseDishId.value = null
    }
  }

  return { isAddDishDrawerOpen, openAddDishDrawer, openAddToPlanDrawer, closeAddDishDrawer, toggleDishDrawer, editDishId, reuseDishId }
},
{
  persist: {
    key: 'ui',
    storage: localStorage,
  }
})
