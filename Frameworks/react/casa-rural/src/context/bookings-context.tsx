'use client'

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import type { ReactNode } from 'react'
import type { Booking } from '@/types/booking'
import { resolveStatus } from '@/utils/booking'
import { toISODate } from '@/utils/date'

const STORAGE_KEY = 'bookings'

interface BookingsContextValue {
  bookings: Booking[]
  activeBookings: Booking[]
  enjoyedBookings: Booking[]
  getBookingsByHouse: (houseId: string) => Booking[]
  addBooking: (house: Booking['house'], checkIn: Date, checkOut: Date) => Booking
}

const BookingsContext = createContext<BookingsContextValue | null>(null)

export function BookingsProvider({ children }: { children: ReactNode }) {
  const [bookings, setBookings] = useState<Booking[]>([])

  useEffect(() => {
    const storagedBookings = localStorage.getItem(STORAGE_KEY)
    if (!storagedBookings) return
    try {
      const parsed: unknown = JSON.parse(storagedBookings)
      if (Array.isArray(parsed)) {
        setBookings(parsed as Booking[])
      }
    } catch {
    }
  }, [])

  const activeBookings = useMemo(
    () => bookings.filter((booking) => booking.status === 'active'),
    [bookings]
  )

  const enjoyedBookings = useMemo(
    () => bookings.filter((booking) => booking.status === 'enjoyed'),
    [bookings]
  )

  const getBookingsByHouse = useCallback(
    (houseId: string) => bookings.filter((booking) => booking.house.id === houseId),
    [bookings]
  )

  const addBooking = useCallback(
    (house: Booking['house'], checkIn: Date, checkOut: Date) => {
      const booking: Booking = {
        id: crypto.randomUUID(),
        house,
        checkIn: toISODate(checkIn),
        checkOut: toISODate(checkOut),
        status: resolveStatus(toISODate(checkOut)),
      }

      setBookings((prev) => {
        const next = [...prev, booking]
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
        return next
      })

      return booking
    },
    []
  )

  return (
    <BookingsContext.Provider
      value={{ bookings, activeBookings, enjoyedBookings, getBookingsByHouse, addBooking }}
    >
      {children}
    </BookingsContext.Provider>
  )
}

export function useBookings() {
  const context = useContext(BookingsContext)
  if (!context) {
    throw new Error('useBookings must be used within a BookingsProvider')
  }
  return context
}
