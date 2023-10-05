import { z } from "zod";
import {
    createTRPCRouter,
    publicProcedure,
    protectedProcedure,
} from "~/server/api/trpc";

export const facilityRouter = createTRPCRouter({
    getAll: publicProcedure.query(({ ctx }) => {
        return ctx.prisma.facility.findMany()
    }),

    getSingle: protectedProcedure.input(z.object({ id: z.number() })).query(({ ctx, input }) => {
        return ctx.prisma.facility.findFirst({
            where: {
                id: input.id
            }
        })
    })
});