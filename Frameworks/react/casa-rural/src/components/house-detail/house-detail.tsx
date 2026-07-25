'use client'

import Image from 'next/image'
import { useMemo } from 'react'
import { BedDouble } from 'lucide-react'
import { eachDayOfInterval, parseISO, subDays } from 'date-fns'
import type { House } from '@/types/house'
import { BookingCalendar } from '@/components/booking'
import { HouseDetailDrawer } from './house-detail-drawer'
import { HouseDetailItem } from './house-detail-item'
import { HouseDetailPrice } from './house-detail-price'
import { useBookings } from '@/context/bookings-context'
import { useUi } from '@/context/ui-context'

export function HouseDetail({ house }: { house: House }) {
  const { id, name, description, price, image, address, bedrooms, beds, bathrooms } = house

  const { isBookingDrawer, openBookingDrawer, closeBookingDrawer } = useUi()
  const { addBooking, getBookingsByHouse } = useBookings()

  const occupiedDates = useMemo(
    () =>
      getBookingsByHouse(id).flatMap((booking) =>
        eachDayOfInterval({
          start: parseISO(booking.checkIn),
          end: subDays(parseISO(booking.checkOut), 1),
        })
      ),
    [getBookingsByHouse, id]
  )

  function confirmBooking(checkIn: Date, checkOut: Date) {
    if (!name) return
    addBooking({ id, name }, checkIn, checkOut)
    closeBookingDrawer()
  }

  return (
    <div className="mt-10">
      <h1 className="text-2xl font-bold mb-8 flex items-center">
        <BedDouble className="size-9 mr-2" />
        <span className="font-heading text-3xl">{name}</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-4">
        <Image
          src={image}
          alt="House Image"
          width={600}
          height={400}
          sizes="(max-width: 768px) 100vw, 50vw"
          className="w-full rounded-lg"
        />
        <div className="divide-y divide-gray-300">
          <HouseDetailItem title="Descripción" content={description} />
          <HouseDetailItem title="Dirección" content={address} />
          <HouseDetailItem title="Habitaciones" isInline content={bedrooms} />
          <HouseDetailItem title="Camas" isInline content={beds} />
          <HouseDetailItem title="Baños" isInline content={bathrooms} />
          <HouseDetailPrice
            price={price}
            onClick={openBookingDrawer}
            isDisabled={isBookingDrawer}
          />
        </div>
      </div>
      <HouseDetailDrawer
        isOpen={isBookingDrawer}
        onClose={closeBookingDrawer}
        title={name}
        price={price}
      >
        <BookingCalendar price={price} disabledDates={occupiedDates} onConfirm={confirmBooking} />
      </HouseDetailDrawer>
    </div>
  )
}
