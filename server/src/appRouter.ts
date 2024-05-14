import { PrismaClient } from '@prisma/client';
import { TRPCError } from '@trpc/server';
import { z } from 'zod';

import { router, publicProcedure, authProcedure } from './trpc';

const prisma = new PrismaClient();

export const appRouter = router({
  health: publicProcedure.query(() => 'alive'),
  errorQuery: publicProcedure.query(() => {
    const isError = true;

    if (isError) {
      throw new TRPCError({
        message: 'error',
        code: 'BAD_REQUEST',
      });
    }

    return { message: 'ok' };
  }),
  errorMutatation: publicProcedure.mutation(() => {
    const isError = true;

    if (isError) {
      throw new TRPCError({
        message: 'error',
        code: 'BAD_REQUEST',
      });
    }
  }),
  users: authProcedure.query(async () => {
    const users = await prisma.user.findMany();
    return users;
  }),
  seasons: authProcedure.query(async () => {
    const seasons = await prisma.season.findMany();
    return seasons;
  }),
  results: authProcedure
    .input(z.object({ seasonId: z.string() }))
    .query(async (opt) => {
      const results = await prisma.result.findMany({
        where: {
          seasonId: Number(opt.input.seasonId),
        },
      });

      return results;
    }),
  resultSummary: authProcedure
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
          averageRnak:
            filteredResult.length === 0 ? 0 : totalRank / filteredResult.length,
          userName: u.name,
        });
      });

      return Object.fromEntries(res);
    }),
  addResult: authProcedure
    .input(
      z.object({
        userId: z.number(),
        seasonId: z.number(),
        rank: z.number(),
        point: z.number(),
      }),
    )
    .mutation(async (opt) => {
      const { userId, seasonId, rank, point } = opt.input;
      try {
        await prisma.result.create({
          data: {
            userId,
            seasonId,
            rank,
            point,
          },
        });
        return {
          message: 'ok',
        };
      } catch (e) {
        throw new TRPCError({
          code: 'INTERNAL_SERVER_ERROR',
          message: 'Faild add result',
          cause: e,
        });
      }
    }),
  bulkAddResult: authProcedure
    .input(
      z.array(
        z.object({
          userId: z.number(),
          seasonId: z.number(),
          rank: z.number(),
          point: z.number(),
        }),
      ),
    )
    .mutation(async (opt) => {
      const data = opt.input;
      try {
        const promises = data.map((d) =>
          prisma.result.create({
            data: {
              userId: d.userId,
              seasonId: d.seasonId,
              rank: d.rank,
              point: d.point,
            },
          }),
        );
        await Promise.all(promises);
        return {
          message: 'ok',
        };
      } catch (e) {
        throw new TRPCError({
          code: 'INTERNAL_SERVER_ERROR',
          message: 'Faild add result',
          cause: e,
        });
      }
    }),
});
