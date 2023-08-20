import type { User, UserType } from "@prisma/client";
import { z } from "zod";
import {
    createTRPCRouter,
    publicProcedure,
    protectedProcedure,
} from "~/server/api/trpc";

export const userRouter = createTRPCRouter({
    //   hello: publicProcedure
    //     .input(z.object({ text: z.string() }))
    //     .query(({ input }) => {
    //       return {
    //         greeting: `Hello ${input.text}`,
    //       };
    //     }),

    getAll: publicProcedure.query(({ ctx }) => {
        return ctx.prisma.user.findMany()
    }),

    getSecretMessage: protectedProcedure.query(() => {
        return "you can now see this secret message!";
    }),

    updateUser: protectedProcedure
        .input(z.object({
            username: z.string(),
            phoneNumber: z.string(),
            firstname: z.string(),
            lastname: z.string(),
            userType: z.custom<UserType>(),
            verified: z.boolean(),
            email: z.string(),
            password: z.string(),
            emailVerified: z.date(),
            location: z.string(),
            image: z.string(),
            playerId: z.string(),
            turfManagerId: z.string(),
            adminId: z.string(),
            vendorId: z.string(),
        }).partial())
        .mutation(async ({ ctx, input }) => {
            // switch (input.userType) {
            //     case "PLAYER":
            //         const newPlayer = await ctx.prisma.player.create({
            //             data: {
            //                 userId: ctx.session.user.id
            //             }
            //         })
            // }

            const user = await ctx.prisma.user.update({
                where: {
                    id: ctx.session.user.id
                },
                data: {
                    ...input,
                }
            })
            return {
                status: "Ok"
            }
        })
});
