import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUiStore = defineStore('ui', () => {
  const isBookingDrawer = ref(false)

  function openBookingDrawer() {
    isBookingDrawer.value = true
  }

  function closeBookingDrawer() {
    isBookingDrawer.value = false
  }

  return { isBookingDrawer, openBookingDrawer, closeBookingDrawer }
})
