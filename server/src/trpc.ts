import { TRPCError, initTRPC } from '@trpc/server';

import { Context } from './context';

const t = initTRPC.context<Context>().create();

export const { router } = t;
export const publicProcedure = t.procedure;
export const authProcedure = publicProcedure.use((opts) => {
  const { ctx } = opts;

  let isAuthed = false;

  if (ctx.headers.authorization) {
    isAuthed = ctx.headers.authorization.split(' ')[1] === 'token';
  }

  if (!isAuthed) {
    throw new TRPCError({ code: 'UNAUTHORIZED' });
  }

  return opts.next({
    ctx,
  });
});
