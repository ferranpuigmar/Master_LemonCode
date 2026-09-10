import { Hono } from 'hono';
import { logger } from 'hono/logger';
import { cors } from 'hono/cors';
import { serve } from '@hono/node-server';
import { characters } from './mock-data.js';
import { CharacterListResponse } from './model.js';

let db = {
  characters,
};

const PAGE_SIZE = 2;

const app = new Hono();
app.use(logger());

app.use('/api/*', cors());

app.get('/api/character', async (context) => {
  const name = context.req.query('name')?.toLowerCase();
  const page = Number(context.req.query('page') ?? 1);

  const matches = name
    ? db.characters.filter((c) => c.name.toLowerCase().includes(name))
    : db.characters;

  const pages = Math.ceil(matches.length / PAGE_SIZE);
  const offset = (page - 1) * PAGE_SIZE;

  const response: CharacterListResponse = {
    info: {
      count: matches.length,
      pages,
      next: page < pages ? String(page + 1) : null,
      prev: page > 1 ? String(page - 1) : null,
    },
    results: matches.slice(offset, offset + PAGE_SIZE),
  };
  return context.json(response);
});

app.get('/api/character/:id', (context) => {
  return context.json(
    db.characters.find((c) => c.id === Number(context.req.param('id')))
  );
});

app.put('/api/character/:id', async (context) => {
  const id = Number(context.req.param('id'));

  const character = await context.req.json();
  db.characters = db.characters.map((c) =>
    c.id === id ? { ...c, ...character } : c
  );

  return context.body(null, 204);
});

serve({ fetch: app.fetch, port: 3000 }, (info) => {
  console.log(`API running on ${info.port}`);
});
