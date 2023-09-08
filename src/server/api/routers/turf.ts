import { z } from "zod";
//import { Game } from "@prisma/client";
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

    getAllTurfs: publicProcedure.input(z.object({ stateId: z.number().optional(), cityId: z.number().optional() })).query(({ ctx, input }) => {
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

    getOneTurf: publicProcedure.input(z.object({ id: z.string() })).query(({ ctx, input }) => {
        return ctx.prisma.turf.findUnique({
            where: {
                id: input.id
            }
        })
    }),
    
    /**
     * Get all the games in a turf
     */
    getTurfGames: publicProcedure.input(z.object({ id: z.string() })).query(({ ctx, input }) => {
        return ctx.prisma.game.findMany({
            where: {
                locationId: input.id
            }
        })
    }),

    /**
     * Get a particular game in a turf?? 
     */
    getOneTurfGame: publicProcedure.input(z.object({ gameId: z.string() })).query(({ ctx, input }) => {
        return ctx.prisma.game.findUnique({
            where: {
                id: input.gameId
            }
        })
    })

});
