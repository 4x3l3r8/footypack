import { z } from "zod";
import {
    createTRPCRouter,
    publicProcedure,
    protectedProcedure,
} from "~/server/api/trpc";

export const utilRouter = createTRPCRouter({
    hello: publicProcedure
        .input(z.object({ text: z.string() }))
        .query(({ input }) => {
            return {
                greeting: `Hello ${input.text}`,
            };
        }),

    getAllAgeRanges: publicProcedure.query(({ ctx }) => {
        return ctx.prisma.ageRange.findMany();
    }),

    getAllPlayerPositions: publicProcedure.query(({ ctx }) => {
        return ctx.prisma.playPosition.findMany();
    }),

    getAllPitchSizes: publicProcedure.query(({ ctx }) => {
        return ctx.prisma.pitchSize.findMany();
    }),

    /**
     * Get all states (get their LGAs by adding {includeCities:true} as the input)
     */
    getAllStates: publicProcedure
        .input(z.object({ includeCities: z.boolean() }).optional())
        .query(({ ctx, input }) => {
            return ctx.prisma.state.findMany({
                include: {
                    cities: (input && input?.includeCities) ?? false
                }
            });
        }),


    getSecretMessage: protectedProcedure.query(() => {
        return "you can now see this secret message!";
    }),
});
