# Casa Rural

Catálogo de casas rurales construido con **Nuxt 4 / Vue 3**. Permite listar
alojamientos, buscarlos, ver su detalle y reservar fechas con un calendario.

## Desafíos implementados

- **App con Nuxt (App Router de Nuxt)**: layout, páginas y ruta dinámica.
- **Gestión de estado con Pinia**: stores de casas, reservas y UI.
- **Persistencia de estado** de las reservas con `pinia-plugin-persistedstate`
  (`localStorage`).
- **Carga de datos con `useAsyncData`** + composable de acceso a la API.
- **Ruta dinámica** `pages/houses/[id].vue` para el detalle.
- **Buscador con _debounce_** (`refDebounced` de `@vueuse/core`).
- **Reserva con calendario** (`@vuepic/vue-datepicker`): rango de fechas, cálculo
  de noches/total y fechas ocupadas deshabilitadas.
- **Drawer** con `Teleport` + `Transition` y **transición de página** entre rutas.
- **Optimización** de imágenes (`@nuxt/image`) y fuentes (`@nuxt/fonts`).

## Funcionalidad

- **Listado** de casas con **buscador** por nombre o ubicación (con _debounce_).
- **Detalle** de cada casa con su información y precio.
- **Reserva** mediante un calendario de 2 meses: selección de rango, cálculo de
  noches y total, y fechas ya ocupadas deshabilitadas.
- **Reservas persistidas** en `localStorage` (sobreviven a recargas).

## Stack

- **Nuxt 4** / **Vue 3**
- **Tailwind CSS v4** (`@tailwindcss/vite`)
- **Pinia** + **pinia-plugin-persistedstate** — gestión de estado
- **@vuepic/vue-datepicker** — calendario de reservas
- **@vueuse/core** — utilidades reactivas (_debounce_ del buscador)
- **@nuxt/image** y **@nuxt/fonts** — optimización de imágenes y fuentes
- **date-fns** y **@lucide/vue**

## Requisitos

Necesita el `api-server` (Hono) corriendo en `http://localhost:3001`. La URL se
configura en `.env` con `NUXT_PUBLIC_API_BASE`.

```bash
# En Frameworks/api-server
npm install
npm start
```

## Desarrollo

```bash
pnpm install
pnpm dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Build

```bash
pnpm build      # build para servidor (Nitro)
pnpm generate   # sitio estático (SSG)
pnpm preview    # previsualiza el build de producción
```

El `api-server` debe estar disponible durante el build para poder pre-renderizar
las páginas.

## Estado (Pinia)

| Store      | Responsabilidad                                             |
| ---------- | ----------------------------------------------------------- |
| `houses`   | Lista de casas y obtención por id (vía `useHouseApi`)       |
| `bookings` | Reservas, persistidas en `localStorage`                     |
| `ui`       | Estado de UI (apertura del drawer de reserva)               |

## Estructura

```
app/
  app.vue
  layouts/default.vue       # Layout: Header + Container + <slot>
  pages/
    index.vue               # Home → lista de casas
    houses/[id].vue         # Detalle (ruta dinámica) + reserva
  components/               # Componentes de UI (.vue)
  composables/
    useHouseApi.ts          # Acceso a datos (API)
    useHouseFilter.ts       # Filtro con debounce
  stores/                   # Pinia (houses, bookings, ui)
  utils/                    # Mapper, fechas, imágenes
  types/                    # Tipos House / Booking
  assets/css/main.css       # Tailwind v4 + tema
nuxt.config.ts
```
