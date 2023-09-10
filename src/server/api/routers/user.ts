import type { Gender, UserType } from "@prisma/client";
import { z } from "zod";
import {
    createTRPCRouter,
    protectedProcedure,
    publicProcedure,
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

    createUser: protectedProcedure
        .input(z.object({
            username: z.string(),
            phoneNumber: z.string(),
            firstname: z.string(),
            lastname: z.string(),
            userType: z.custom<UserType>(),
            verified: z.boolean(),
            email: z.string(),
            password: z.string(),
            location: z.string(),
            image: z.string(),
            age: z.number().optional(),
            gender: z.custom<Gender>(),
            ageRange: z.string(),
            playerPositionId1: z.number(),
            playerPositionId2: z.number(),
            playerPositionId3: z.number(),
            turfName: z.string(),
            turfDescription: z.string()
        }).partial())
        .mutation(async ({ ctx, input }) => {
            try {
                const userData = {
                    username: input.username,
                    phoneNumber: input.phoneNumber,
                    firstname: input.firstname,
                    lastname: input.lastname,
                    userType: input.userType,
                    verified: input.verified,
                    email: input.email,
                    password: input.password,
                    location: input.location,
                    image: input.image,
                }
                await ctx.prisma.user.update({
                    where: {
                        id: ctx.session.user.id
                    },
                    data: {
                        ...userData,
                    }
                })

                switch (input.userType) {
                    case "PLAYER":
                        if (input.gender && input.ageRange) {
                            const player = await ctx.prisma.player.upsert({
                                where: {
                                    userId: ctx.session.user.id
                                },
                                create: {
                                    age: input.age,
                                    gender: input.gender,
                                    ageRangeId: input.ageRange,
                                    userId: ctx.session.user.id,
                                    playerPositionId1: input.playerPositionId1,
                                    playerPositionId2: input.playerPositionId2,
                                    playerPositionId3: input.playerPositionId3
                                },
                                update: {
                                    age: input.age,
                                    gender: input.gender,
                                    ageRangeId: input.ageRange,
                                    userId: ctx.session.user.id,
                                    playerPositionId1: input.playerPositionId1,
                                    playerPositionId2: input.playerPositionId2,
                                    playerPositionId3: input.playerPositionId3
                                }
                            })
                            await ctx.prisma.user.update({
                                where: {
                                    id: ctx.session.user.id
                                },
                                data: {
                                    playerId: player.id,
                                    player: {
                                        connect: {
                                            id: player.id
                                        }
                                    }
                                },
                            })
                        } else {
                            return {
                                status: "Failed",
                                message: "Fill in required inputs"
                            }
                        }

                    case "TURF_OWNER":
                        const turfManager = await ctx.prisma.turf_Manager.upsert({
                            where: {
                                userId: ctx.session.user.id
                            },
                            create: {
                                userId: ctx.session.user.id
                            },
                            update: {
                                turfs: {
                                    create: {
                                        name: input.turfName,
                                        description: input.turfDescription
                                    }
                                }
                            }
                        })
                    default:

                }

                return {
                    status: "Ok",
                    message: "Account Created Successfully"
                }
            } catch (e) {
                console.log("Error baam", e)
                return {
                    status: "Failed",
                    message: e
                }
            }
        })
});
