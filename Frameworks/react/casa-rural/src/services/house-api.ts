import type { House, HouseDTO } from '@/types/house'
import { houseMapper } from '@/mappers/house.mapper'

const API_BASE = process.env.NEXT_PUBLIC_API_BASE ?? ''

export async function getHouses(): Promise<House[]> {
  const response = await fetch(`${API_BASE}/api/houses`, { next: { revalidate: 60 } })

  if (!response.ok) {
    throw new Error('No se pudieron cargar las casas')
  }

  const houses: HouseDTO[] | null = await response.json()

  return houses?.map((house) => houseMapper(house, API_BASE)) ?? []
}

export async function getHouseById(id: string): Promise<House> {
  const response = await fetch(`${API_BASE}/api/houses/${id}`, {
    next: { revalidate: 60 },
  })

  if (!response.ok) {
    throw new Error('No se pudo cargar la casa')
  }

  const house: HouseDTO | null = await response.json()

  if (!house) {
    throw new Error('Casa no encontrada')
  }

  return houseMapper(house, API_BASE)
}
