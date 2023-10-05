import { z } from "zod";
import {
    createTRPCRouter,
    protectedProcedure,
} from "~/server/api/trpc";

export const playerRouter = createTRPCRouter({

    getAPlayer: protectedProcedure
        .input(z.object({
            playerId: z.string().optional()
        }).optional())
        .query(async ({ ctx, input }) => {
            if (input && input.playerId) {
                return ctx.prisma.player.findFirst({
                    where: {
                        id: ctx.session.user.id,
                    },
                    include: {
                        user: true
                    }
                })
            }
            return ctx.prisma.player.findFirst({
                where: {
                    userId: ctx.session.user.id,
                },
                include: {
                    user: true
                }
            })
        })
});
