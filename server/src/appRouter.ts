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
  seasons: publicProcedure.query(async () => {
    const seasons = await prisma.season.findMany();
    return seasons;
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
  resultSummary: publicProcedure
    .input(z.object({ seasonId: z.string() }))
    .query(async (opt) => {
      const users = await prisma.user.findMany();
      const results = await prisma.result.findMany({
        where: {
          seasonId: Number(opt.input.seasonId),
        },
      });
      const res = new Map<
        number,
        { totalPoint: number; averageRnak: number; userName: string }
      >();
      users.forEach((u) => {
        const filteredResult = results.filter((r) => r.userId === u.id);
        let totalPoint = 0;
        let totalRank = 0;
        filteredResult.forEach((f) => {
          totalPoint += f.point;
          totalRank += f.rank;
        });
        res.set(u.id, {
          totalPoint,
          averageRnak: totalRank / filteredResult.length,
          userName: u.name,
        });
      });

      return Object.fromEntries(res);
    }),
});
