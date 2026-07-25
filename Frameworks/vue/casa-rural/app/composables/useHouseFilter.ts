import { refDebounced } from '@vueuse/core'
import type { House } from '~/types/house'

const DEBOUNCE_DELAY = 500

export function useHouseFilter(houses: Ref<House[]>) {
  const filterQuery = ref('')
  const debouncedFilterQuery = refDebounced(filterQuery, DEBOUNCE_DELAY)

  const filteredList = computed(() => {
    const query = debouncedFilterQuery.value.trim().toLowerCase()
    if (!query) return houses.value

    return houses.value.filter(house =>
      house.name.toLowerCase().includes(query) ||
      house.city.toLowerCase().includes(query)
    )
  })

  return { filterQuery, filteredList }
}
