import * as trpcExpress from '@trpc/server/adapters/express';

export function createContext({
  req,
  res,
}: trpcExpress.CreateExpressContextOptions) {
  return {
    headers: req.headers,
    req,
    res,
  };
}

export type Context = Awaited<ReturnType<typeof createContext>>;
