'use client'

import { HouseCard } from './house-card'
import { House } from '@/types/house'

interface HouseListProps {
  filteredList?: House[]
}

export function HouseList({ filteredList }: HouseListProps) {
  if (!filteredList) { return null }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {filteredList.map((house) => (
        <div key={house.id}>
          <HouseCard house={house} />
        </div>
      ))}
    </div>
  )
}
