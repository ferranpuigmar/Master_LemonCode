'use client'

import { useMemo, useState } from 'react'
import { useDebounce } from 'use-debounce'
import type { House } from '@/types/house'

const DEBOUNCE_DELAY = 500

export function useHouseFilter(houses: House[]) {
  const [filterQuery, setFilterQuery] = useState('')
  const [debouncedQuery] = useDebounce(filterQuery, DEBOUNCE_DELAY)

  const filteredList = useMemo(() => {
    const query = debouncedQuery.trim().toLowerCase()
    if (!query) return houses

    return houses.filter(
      (house) =>
        house.name.toLowerCase().includes(query) ||
        house.city.toLowerCase().includes(query)
    )
  }, [houses, debouncedQuery])

  return { filterQuery, setFilterQuery, filteredList }
}
