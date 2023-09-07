import { z } from "zod";
import {
    createTRPCRouter,
    publicProcedure,
    protectedProcedure,
} from "~/server/api/trpc";

export const turfRouter = createTRPCRouter({
    
    // getAll: publicProcedure.query(({ ctx }) => {
    //     return ctx.prisma.turf.findMany()
    // }),

    getSecretMessage: protectedProcedure.query(() => {
        return "you can now see this secret message!";
    }),

    getAll: publicProcedure.input(z.object({ stateId: z.number().optional(), cityId: z.number().optional() })).query(({ ctx, input }) => {
        if (input.stateId){
            return ctx.prisma.turf.findMany({
                where: {
                    stateId: input.stateId
                }
            })
        } else if (input.cityId){
            return ctx.prisma.turf.findMany({
                where: {
                    cityId: input.cityId
                }
            })
        } else {
            return ctx.prisma.turf.findMany()
        }
    }),
});
