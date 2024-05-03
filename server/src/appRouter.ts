import { PrismaClient } from '@prisma/client';
import { z } from 'zod';

import { router, publicProcedure } from './trpc';

const prisma = new PrismaClient();

export const appRouter = router({
  health: publicProcedure.query(() => 'alive'),
  users: publicProcedure.query(async () => {
    const users = await prisma.user.findMany();
    return users;
  }),
  results: publicProcedure
    .input(z.object({ seasonId: z.string() }))
    .query(async (opt) => {
      const results = await prisma.result.findMany({
        where: {
          seasonId: Number(opt.input.seasonId),
        },
      });

      return results;
    }),
});
