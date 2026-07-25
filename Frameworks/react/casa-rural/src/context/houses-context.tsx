'use client'

import { createContext, useCallback, useContext, useState, useTransition } from 'react'
import type { ReactNode } from 'react'
import type { House } from '@/types/house'
import { getHouses } from '@/services/house-api'

interface HousesContextValue {
  houses: House[]
  error: boolean
  isRetrying: boolean
  retry: () => void
}

const HousesContext = createContext<HousesContextValue | null>(null)

export function HousesProvider({
  houses: initialHouses,
  error: initialError = false,
  children,
}: {
  houses: House[]
  error?: boolean
  children: ReactNode
}) {
  const [houses, setHouses] = useState<House[]>(initialHouses)
  const [error, setError] = useState<boolean>(initialError)
  const [isRetrying, startTransition] = useTransition()

  const retry = useCallback(() => {
    startTransition(async () => {
      try {
        const data = await getHouses()
        setHouses(data)
        setError(false)
      } catch {
        setError(true)
      }
    })
  }, [])

  return (
    <HousesContext.Provider value={{ houses, error, isRetrying, retry }}>
      {children}
    </HousesContext.Provider>
  )
}

export function useHouses() {
  const context = useContext(HousesContext)
  if (!context) {
    throw new Error('useHouses must be used within a HousesProvider')
  }
  return context
}
