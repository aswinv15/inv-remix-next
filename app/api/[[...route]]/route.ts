import { Hono } from 'hono';
import { handle } from 'hono/vercel';

import assetsConstraints from './assetsconstraints';
import groups from './groups';

export const runtime = 'nodejs';

const app = new Hono().basePath('/api');

const routes = app
  .route('/assetsconstraints', assetsConstraints)
  .route('/groups', groups);

export const GET = handle(routes);
export const POST = handle(routes);
export const PATCH = handle(routes);
export const DELETE = handle(routes);

export type AppType = typeof routes;
