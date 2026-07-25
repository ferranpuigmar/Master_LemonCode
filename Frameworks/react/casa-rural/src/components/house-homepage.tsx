'use client'

import { BedDouble } from 'lucide-react'
import { HouseList } from '@/components/house-list'
import { SearchInput } from '@/components/search-input'
import { useHouses } from '@/context/houses-context'
import { useHouseFilter } from '@/hooks/use-house-filter'

export function HouseHomepage() {
  const { houses, error, isRetrying, retry } = useHouses()
  const { filterQuery, setFilterQuery, filteredList } = useHouseFilter(houses)

  return (
    <div className="mt-10">
      <h1 className="font-heading mb-6 text-3xl">
        <BedDouble className="inline-block mr-2 size-8" />
        Alojamientos
      </h1>

      {error && (
        <div className="flex flex-col justify-center items-center h-64 gap-4">
          <p className="font-heading">No se pudieron cargar las casas</p>
          <p className="text-fg-muted">Ha ocurrido un problema al conectar con el servidor.</p>
          <button
            onClick={retry}
            disabled={isRetrying}
            className="bg-accent text-white px-6 py-3 rounded font-bold enabled:hover:bg-accent-dark transition-colors duration-300 cursor-pointer disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            {isRetrying ? 'Reintentando...' : 'Volver a intentarlo'}
          </button>
        </div>
      )}

      {!error && (
        <div className="flex flex-col">
          <SearchInput
            value={filterQuery}
            onChange={setFilterQuery}
            placeholder="Buscar por nombre o ubicación..."
            className="mb-6"
          />

          <HouseList filteredList={filteredList} />
        </div>
      )}
    </div>
  )
}
