'use client'

import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { X } from 'lucide-react'
import type { ReactNode } from 'react'

interface DrawerProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  price?: number
  children: ReactNode
}

export function HouseDetailDrawer({
  isOpen,
  onClose,
  title = 'Reserva',
  price = 0,
  children,
}: DrawerProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return createPortal(
    <aside
      role="dialog"
      aria-modal="true"
      aria-label={title}
      aria-hidden={!isOpen}
      className={`fixed top-0 right-0 h-full w-full max-w-xl bg-white z-50 flex flex-col transition-transform duration-300 ease-out ${
        isOpen ? 'translate-x-0' : 'translate-x-full pointer-events-none'
      }`}
      style={{ boxShadow: 'var(--shadow-drawer)' }}
    >
      <div className="flex items-start justify-between px-6 py-4 border-b border-border">
        <div className="flex flex-col space-y-2">
          <h2 className="text-2xl font-heading leading-tight">{title}</h2>
          {price ? (
            <p className="text-lg leading-tight font-bold">{price}€ / noche</p>
          ) : null}
        </div>
        <button
          type="button"
          aria-label="Cerrar"
          className="text-fg-muted hover:text-fg-primary cursor-pointer"
          onClick={onClose}
        >
          <X className="h-5 w-5" />
        </button>
      </div>
      <div className="flex-1 overflow-y-auto px-6 py-4">{children}</div>
    </aside>,
    document.body
  )
}
