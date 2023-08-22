import { z } from "zod";
import {
    createTRPCRouter,
    publicProcedure,
    protectedProcedure,
} from "~/server/api/trpc";

export const turfRouter = createTRPCRouter({
    //   hello: publicProcedure
    //     .input(z.object({ text: z.string() }))
    //     .query(({ input }) => {
    //       return {
    //         greeting: `Hello ${input.text}`,
    //       };
    //     }),

    getAll: publicProcedure.query(({ ctx }) => {
        return ctx.prisma.turf.findMany()
    }),

    getSecretMessage: protectedProcedure.query(() => {
        return "you can now see this secret message!";
    }),
});
