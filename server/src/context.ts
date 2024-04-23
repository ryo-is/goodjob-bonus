import { TRPCError } from '@trpc/server';
import * as trpcExpress from '@trpc/server/adapters/express';

export async function createContext({
  req,
  res,
}: trpcExpress.CreateExpressContextOptions) {
  let isAuthed = false;

  if (req.headers.authorization) {
    isAuthed = req.headers.authorization.split(' ')[1] === 'token';
  }

  if (!isAuthed) {
    throw new TRPCError({ code: 'UNAUTHORIZED' });
  }

  return {
    isAuthed,
    headers: req.headers,
    req,
    res,
  };
}

export type Context = Awaited<ReturnType<typeof createContext>>;
