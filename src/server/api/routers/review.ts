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
        locale: z.enum(['EN', 'KO']).optional().default('EN'),
      }),
    )
    .query(async ({ ctx, input }) => {
      const reviews = await ctx.db.review.findMany({
        where: {
          is_best: input.isBest,
          locale: input.locale,
        },
      });

      return reviews.map((review) => ({
        id: review.id,
        writer: review.writer,
        title: review.title,
        content: review.content,
      }));
    }),
});
