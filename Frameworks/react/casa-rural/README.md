# Casa Rural

Catálogo de casas rurales construido con **Next.js (App Router)**. Permite listar
alojamientos, buscarlos, ver su detalle y reservar fechas con un calendario.

## Funcionalidad

- **Listado** de casas con **buscador** por nombre o ubicación (con _debounce_).
- **Detalle** de cada casa con su información y precio.
- **Reserva** mediante un calendario de 2 meses: selección de rango, cálculo de
  noches y total, y fechas ya ocupadas deshabilitadas.
- **Reservas persistidas** en `localStorage` (sobreviven a recargas).
- **Transiciones de página** animadas con la View Transitions API.
- **Manejo de errores**: si falla la carga de casas, se muestra un mensaje y un
  botón para **volver a intentarlo** sin recargar la página.

## Stack

- **Next.js 15** (App Router, React 19) con **Turbopack**
- **Tailwind CSS v4**
- **Gestión de estado con `useContext`** (`HousesProvider`, `BookingsProvider`, `UiProvider`)
- **react-datepicker** — calendario de reservas
- **next-view-transitions** — View Transitions API en navegación cliente
- **use-debounce** — _debounce_ del buscador
- **date-fns** y **lucide-react**

## Requisitos

Necesita el `api-server` (Hono) corriendo en `http://localhost:3001`. La URL se
configura en `.env` con `NEXT_PUBLIC_API_BASE`.

```bash
# En Frameworks/api-server
npm install
npm start
```

## Desarrollo

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

El `api-server` debe estar disponible durante el build para pre-renderizar las
páginas de detalle (ver más abajo).

## Estrategia de renderizado

- **Layout (SSR)**: `layout.tsx` carga la lista de casas en el servidor y la
  inyecta en los _providers_ de cliente. El home se renderiza ya con los datos
  (sin _flash_ de carga).
- **Home**: `page.tsx` es Server Component; delega la interactividad (buscador,
  filtrado) en `HouseHomepage` (`'use client'`).
- **Detalle `houses/[id]` (SSG + ISR)**:
  - `generateStaticParams` pre-genera en el **build** una página por cada casa
    conocida.
  - `dynamicParams = true` → las casas **añadidas después del build** se generan
    **bajo demanda** en la primera visita.
  - `export const revalidate = 60` → las páginas y la lista se **revalidan** en
    segundo plano cada 60 s (ISR), así que los cambios se reflejan sin redeploy.

## Estado (Context API)

| Provider           | Responsabilidad                                                        |
| ------------------ | ---------------------------------------------------------------------- |
| `HousesProvider`   | Lista de casas (inicializada desde SSR) + estado de error + `retry()`  |
| `BookingsProvider` | Reservas, persistidas en `localStorage`                                |
| `UiProvider`       | Estado de UI (apertura del drawer de reserva)                          |

Todos se componen en un único `Providers` (una sola frontera cliente) que el
layout alimenta con los datos cargados en servidor.

## Estructura

```
src/
  app/
    layout.tsx              # Layout raíz (SSR): fuentes, Providers, ViewTransitions, Header
    page.tsx                # Home (Server Component) → HouseHomepage
    houses/[id]/page.tsx    # Detalle (SSG + ISR)
    globals.css             # Tailwind v4 + tema + View Transitions + datepicker
  components/
    booking/                # Calendario de reserva (+ leyenda y resumen)  [barrel]
    house-detail/           # Detalle de la casa (+ drawer, item, precio)  [barrel]
    house-list/             # Lista de casas (+ card)                      [barrel]
    house-homepage.tsx      # Composición del home (buscador + lista)
    header.tsx / logo.tsx / container.tsx / search-input.tsx
  context/                  # Estado global con useContext + Providers
  hooks/use-house-filter.ts # Filtro con debounce (use-debounce)
  services/house-api.ts     # Acceso a datos (cliente API)
  mappers/house.mapper.ts   # Transformación DTO → dominio
  utils/                    # Utilidades puras (date, booking, imágenes)
  lib/fonts.ts              # Configuración transversal (next/font)
  types/                    # Tipos House / Booking
```

Las carpetas con varios componentes relacionados (`booking/`, `house-detail/`,
`house-list/`) exponen su API pública mediante un _barrel_ (`index.ts`).
