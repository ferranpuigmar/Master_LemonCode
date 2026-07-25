import Image from 'next/image'
import { Link } from 'next-view-transitions'
import type { House } from '@/types/house'

export function HouseCard({ house }: { house: House }) {
  return (
    <Link href={`/houses/${house.id}`} className="block">
      <div>
        <h3 className="font-heading mb-2 text-lg">{house.name}</h3>
        <div className="border border-border rounded-lg">
          <div className="relative h-48 w-full overflow-hidden rounded-lg">
            <Image
              src={house.image}
              alt={house.name}
              width={400}
              height={300}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </Link>
  )
}
