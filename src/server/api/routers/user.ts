import type { DayOfWeek, GameTime, Gender, UserType } from "@prisma/client";
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
            turfDescription: z.string(),
            turfLocation: z.string(),
            turfCity: z.number(),
            turfState: z.number(),
            turfFacilites: z.number().array(),
            turfPitches: z.number().array(),
            turfGameDays: z.object({
                day: z.custom<DayOfWeek>(),
                stopTime: z.string(),
                startTime: z.string(),
            }).array(),
            turfImage: z.string().array(),
            turfPrice: z.string()
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
                        break

                    case "TURF_OWNER":
                        const createdGameTimes = new Set<GameTime>()
                        const turfManager = await ctx.prisma.turf_Manager.create({
                            data: {
                                userId: ctx.session.user.id,
                                turfs: {
                                    create: {
                                        name: input.turfName as string,
                                        description: input.turfDescription as string,
                                        street: input.turfLocation as string,
                                        cityId: input.turfCity as number,
                                        stateId: input.turfState as number,
                                        price: parseInt(input.turfPrice?.substring(3) as string).toLocaleString('en-NG', {
                                            style: "currency",
                                            currency: "NGN"
                                        }),
                                        State: {
                                            connect: {
                                                id: input.turfState
                                            }
                                        },
                                        City:{
                                            connect:{
                                                id: input.turfCity
                                            }
                                        },
                                        images: input.turfImage as string[],
                                        pitchSizesId: input.turfPitches,
                                        facilitiesId: input.turfFacilites,
                                    },
                                }
                            },
                            select: {
                                turfs: true
                            }
                        })


                        if (input.turfGameDays) {
                            for (const gameTime of input.turfGameDays) {
                                const gameTimes = await ctx.prisma.gameTime.create({
                                    data: {
                                        day: gameTime.day,
                                        startTime: gameTime.startTime,
                                        stoptTime: gameTime.stopTime,
                                        turfId: turfManager.turfs[0]?.id,
                                        Turf: {
                                            connect: {
                                                id: turfManager.turfs[0]?.id
                                            }
                                        }
                                    },
                                })
                                if (gameTimes) {
                                    createdGameTimes.add(gameTimes)
                                }
                            }
                        }
                        break
                    default:
                        break

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
