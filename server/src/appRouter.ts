import { z } from 'zod';

import { router, publicProcedure } from './trpc';

export const appRouter = router({
  health: publicProcedure.query(() => 'alive'),
  userList: publicProcedure.query(() => [
    { id: '000001', name: '田中太郎', totalPoint: 100, meanRank: 2.5 },
    { id: '000002', name: '山田花子', totalPoint: 200, meanRank: 1.5 },
  ]),
  userById: publicProcedure.input(z.object({ id: z.string() })).query((opt) => {
    console.log(opt);

    return { id: '000002', name: '山田花子', count: 12, point: 32 };
  }),
  sendBonus: publicProcedure
    .input(z.object({ id: z.string(), point: z.number() }))
    .mutation((opt) => {
      console.log(opt);
    }),
});
