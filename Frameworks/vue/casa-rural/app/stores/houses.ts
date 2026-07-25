import { useHouseApi } from '~/composables/useHouseApi'
import type { House } from '~/types/house'

export const useHousesStore = defineStore('houses', () => {
  const list = ref<House[]>([])

  async function getHouses() {
    const response = await useHouseApi().getHouses();
    list.value = response;
  }

  async function getHouseById(id?: string) {
    if(!id) return null;

    return await useHouseApi().getHouseById(id);
  }

  return { list, getHouses, getHouseById }
})
