import { z } from 'zod';

import {
  createTRPCRouter,
  //   protectedProcedure,
  publicProcedure,
} from '@/server/api/trpc';

export const reviewRouter = createTRPCRouter({
  getBestReviews: publicProcedure
    .input(
      z.object({
        isBest: z.boolean().optional(),
      }),
    )
    .query(async ({ ctx, input }) => {
      const reviews = await ctx.db.review.findMany({
        where: {
          is_best: input.isBest,
        },
      });

      return reviews;
    }),
});
