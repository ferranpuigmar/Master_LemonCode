import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { inter, playfair } from '@/lib/fonts'
import { Header } from '@/components/header'
import { Container } from '@/components/container'
import { ViewTransitions } from 'next-view-transitions'
import { Providers } from '@/context/providers'
import { getHouses } from '@/services/house-api'
import type { House } from '@/types/house'

import './globals.css'

export const metadata: Metadata = {
  title: 'CasasRurales',
  description: 'Alojamientos rurales para tus vacaciones',
}

export default async function RootLayout({ children }: { children: ReactNode }) {
  let houses: House[] = []
  let housesError = false

  try {
    houses = await getHouses()
  } catch {
    housesError = true
  }

  return (
    <ViewTransitions>
      <html lang="es" className={`${inter.variable} ${playfair.variable}`}>
        {/* Browser extensions (e.g. ColorZilla) inject attributes like
            cz-shortcut-listen on <body> before hydration; scope-suppress the
            resulting mismatch warning without hiding real ones elsewhere. */}
        <body suppressHydrationWarning>
          <Providers houses={houses} housesError={housesError}>
            <div className="flex flex-col min-h-screen">
              <Header />
              <main className="flex-grow bg-bg-primary">
                <Container>{children}</Container>
              </main>
            </div>
          </Providers>
        </body>
      </html>
    </ViewTransitions>
  )
}
