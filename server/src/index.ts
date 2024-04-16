import { createHTTPServer } from '@trpc/server/adapters/standalone';
import { z } from 'zod';
import cors from 'cors';

import { router, publicProcedure } from './trpc';

const appRouter = router({
  health: publicProcedure.query(() => {
    return 'alive';
  }),
  userList: publicProcedure.query(() => {
    return [
      { id: '000001', name: '田中太郎', goodjob: { count: 0, point: 0 } },
      { id: '000002', name: '山田花子', goodjob: { count: 12, point: 32 } },
    ];
  }),
  userById: publicProcedure.input(z.string()).query((opt) => {
    console.log(opt);

    return { id: '000002', name: '山田花子', count: 12, point: 32 };
  }),
});

export type AppRouter = typeof appRouter;

const server = createHTTPServer({ router: appRouter, middleware: cors() });

server.listen(3001);
console.log('The server is up on port 3001.');
