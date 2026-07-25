import { notFound } from 'next/navigation'
import { getHouseById, getHouses } from '@/services/house-api'
import { HouseDetail } from '@/components/house-detail'

export async function generateStaticParams() {
  const houses = await getHouses()
  return houses.map((house) => ({ id: house.id }))
}

export const dynamicParams = true
export const revalidate = 60

export default async function HousePage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params

  let house
  try {
    house = await getHouseById(id)
  } catch {
    notFound()
  }

  return <HouseDetail house={house} />
}
