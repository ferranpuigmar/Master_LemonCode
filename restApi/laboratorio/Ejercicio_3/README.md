# Ejercicio 3 — Rick & Morty con GraphQL

Aplicación React que consume la API de personajes mediante GraphQL, con un servidor local que sirve los datos.

## Requisitos previos

- Node.js 20 o superior
- pnpm

## Configuración

Antes de arrancar hay que crear el fichero `.env` a partir de la plantilla `.env_sample`:

```bash
cp .env_sample .env
```

El `.env` no se versiona (está en el `.gitignore`), por eso hay que generarlo en cada clonado del repositorio. Las variables que debe contener son:

| Variable | Valor | Descripción |
| --- | --- | --- |
| `VITE_API_URL` | `/api` | Ruta base de los endpoints REST |
| `VITE_API_GRAPHQL_URL` | `/graphql` | Ruta del endpoint GraphQL |

Ambas son rutas relativas: el proxy de `vite.config.ts` las redirige al servidor local en `http://localhost:3000`.

## Instalación

```bash
pnpm install
```

Instala también las dependencias del servidor, a través del script `postinstall`.

## Arranque

```bash
pnpm start
```

Levanta en paralelo el servidor de desarrollo en `http://localhost:8080`, el servidor de datos en `http://localhost:3000` y la comprobación de tipos en modo watch.

## Scripts disponibles

| Script | Descripción |
| --- | --- |
| `pnpm start` | Arranca aplicación, servidor y type-check en paralelo |
| `pnpm run build` | Genera el build de producción en `dist/` |
| `pnpm run type-check` | Comprueba los tipos sin generar salida |
