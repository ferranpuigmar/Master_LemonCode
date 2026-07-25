'use client'

import type { ReactNode } from 'react'
import type { House } from '@/types/house'
import { BookingsProvider } from '@/context/bookings-context'
import { HousesProvider } from '@/context/houses-context'
import { UiProvider } from '@/context/ui-context'

export function Providers({
  houses,
  housesError = false,
  children,
}: {
  houses: House[]
  housesError?: boolean
  children: ReactNode
}) {
  return (
    <HousesProvider houses={houses} error={housesError}>
      <BookingsProvider>
        <UiProvider>{children}</UiProvider>
      </BookingsProvider>
    </HousesProvider>
  )
}
