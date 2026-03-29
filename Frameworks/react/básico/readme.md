# Búsqueda de Usuarios - GitHub & Rick and Morty API

Aplicación React que permite buscar y explorar usuarios de GitHub y personajes de Rick and Morty con paginación integrada.

## 🚀 Características

- **Búsqueda de usuarios de GitHub**: Acceso a la API de GitHub para buscar usuarios con información completa
- **Búsqueda de personajes de Rick and Morty**: Integración con la API de Rick and Morty
- **Paginación inteligente**: Sistema de paginación adaptado a cada API
- **Búsqueda en tiempo real**: Debounce configurado para optimizar peticiones
- **Rutas dedicadas**: Detalle de usuarios y personajes en rutas separadas
- **Interfaz moderna**: UI construida con Material-UI
- **TypeScript**: Tipado completo para mayor seguridad

## 📋 Requisitos Previos

- Node.js (v18 o superior)
- npm o yarn

## 🛠️ Instalación

```bash
# Clonar el repositorio
git clone <repository-url>

# Instalar dependencias
npm install
```

## 📦 Stack Tecnológico

- **React 19.1.0**: Framework principal
- **TypeScript 5.8.3**: Lenguaje tipado
- **Vite 7.0.4**: Herramienta de construcción rápida
- **React Router DOM 7.8.2**: Enrutamiento
- **Material-UI 7.3.9**: Componentes de UI
- **Emotion**: Solución CSS-in-JS

## 🎯 Scripts Disponibles

```bash
# Inicia el servidor de desarrollo
npm start
# Abre: http://localhost:5173

# Construye la aplicación para producción
npm run build

# Vista previa de producción
npm run preview
```

## 📁 Estructura del Proyecto

```
src/
├── app.tsx                          # Componente raíz
├── index.tsx                        # Punto de entrada
├── styles/                          # Estilos globales
├── core/
│   └── router/                      # Configuración de rutas
│       ├── router.component.tsx
│       ├── routes.ts
│       └── source.ts
├── layouts/                         # Layouts base
│   ├── list.layout.tsx
│   └── detail.layout.tsx
├── scenes/                          # Páginas completas
│   ├── listGithub.page.tsx
│   ├── detailGithub.page.tsx
│   ├── listRym.page.tsx
│   └── detailRym.page.tsx
├── pods/                            # Funcionalidades específicas
│   ├── listGithub/                  # Búsqueda de usuarios GitHub
│   ├── detailGithub/                # Detalle de usuario GitHub
│   ├── listRym/                     # Búsqueda de personajes RYM
│   └── detailRym/                   # Detalle de personaje RYM
└── common/                          # Componentes y hooks compartidos
    ├── components/                  # Componentes reutilizables
    │   ├── list-header/
    │   ├── list-search-bar/
    │   ├── list-pagination/
    │   └── app-bar/
    ├── hooks/                       # Hooks personalizados
    │   ├── use-debounce.ts
    │   ├── use-queryParam.ts
    │   └── usePagination.ts
    └── pods/
        └── list/                    # Lógica compartida de listas
```

## 🏗️ Arquitectura

### Patrón Pod

El proyecto utiliza la arquitectura **Pod** que organiza funcionalidades en módulos independientes:

- **Api layer**: `*.api.ts` y `*.api-model.ts` - Llamadas HTTP
- **View Model**: `*.vm.ts` - Transformación de datos
- **Mappers**: `*.mappers.ts` - Conversión entre modelos
- **Container**: `*.container.tsx` - Lógica y estado
- **Presentación**: `*.component.tsx` - UI pura
- **Componentes**: `components/` - Componentes específicos del pod

### Hooks Personalizados

- **`useSearchableList`**: Maneja búsqueda, paginación y loading
- **`usePagination`**: Genera números de página y botones prev/next
- **`useDebounce`**: Debounce configurable para búsquedas
- **`useQueryParam`**: Sincroniza parámetros con URL

## 🔌 APIs Integradas

### GitHub API
- Búsqueda de usuarios: `GET /search/users`
- Detalles de usuario: `GET /users/{username}`

### Rick and Morty API
- Búsqueda de personajes: `GET /character`
- Detalles de personaje: Incluidos en listado con paginación

## 🎨 Alias de Rutas

Configurados en `vite.config.ts`:

```typescript
@src   → src/
@core  → src/core/
@pods  → src/pods/
```

Uso: `import Component from '@src/common/components/list-header'`

## ⚙️ Configuración TypeScript

- Fichero: `tsconfig.json`
- Paths configurados para alias
- Módulos ES
- DOM liberías incluidas

## 🎯 Flujo de Búsqueda

1. Usuario ingresa término en SearchBar
2. Debounce espera 500ms sin cambios
3. Se dispara petición a API
4. Los resultados se pagina según la API
5. Se actualiza estado local con ítems y páginas
6. Componente se re-renderiza

## 📝 Desarrollo

### Variables de Entorno

No hay variables de entorno requeridas actualmente. Las APIs son públicas.

## 🚨 Información Importante

- **Paginación de GitHub**: Usa headers `Link` con URLs directas
- **Paginación de RYM**: Retorna objeto con `info.pages` y `next` URL
- **Debounce**: Solo aplica a búsqueda, no a paginación inmediata
- **Loading state**: Oculta paginación mientras se carga

## 📄 Licencia

Proyecto de formación LemonCode.

## 👨‍💻 Autor

Ferran Puig
