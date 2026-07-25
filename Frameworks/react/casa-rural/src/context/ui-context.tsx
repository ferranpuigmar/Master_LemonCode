'use client'

import { createContext, useContext, useState } from 'react'
import type { ReactNode } from 'react'

interface UiContextValue {
  isBookingDrawer: boolean
  openBookingDrawer: () => void
  closeBookingDrawer: () => void
}

const UiContext = createContext<UiContextValue | null>(null)

export function UiProvider({ children }: { children: ReactNode }) {
  const [isBookingDrawer, setIsBookingDrawer] = useState(false)

  const openBookingDrawer = () => setIsBookingDrawer(true)
  const closeBookingDrawer = () => setIsBookingDrawer(false)

  return (
    <UiContext.Provider value={{ isBookingDrawer, openBookingDrawer, closeBookingDrawer }}>
      {children}
    </UiContext.Provider>
  )
}

export function useUi() {
  const context = useContext(UiContext)
  if (!context) {
    throw new Error('useUi must be used within a UiProvider')
  }
  return context
}
