# Ejercicio 1 (GraphQL) — Rick & Morty

Copia del Ejercicio 1 en la que el cliente REST (axios) se sustituye por el cliente GraphQL del Ejercicio 2 (`graphql-request`), apuntando a la API GraphQL pública de Rick & Morty.

## Configuración

```bash
cp .env_sample .env
```

| Variable | Valor | Descripción |
| --- | --- | --- |
| `VITE_API_GRAPHQL_URL` | `https://rickandmortyapi.com/graphql` | Endpoint GraphQL público |

## Instalación y arranque

```bash
pnpm install
pnpm start
```

Levanta el servidor de desarrollo en `http://localhost:8080` y el type-check en modo watch.
