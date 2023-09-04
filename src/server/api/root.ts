import { exampleRouter } from "~/server/api/routers/example";
import { createTRPCRouter } from "~/server/api/trpc";
import { turfRouter } from "./routers/turf";
import { userRouter } from "./routers/user";
import { utilRouter } from "./routers/utils";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  example: exampleRouter,
  turf: turfRouter,
  user: userRouter,
  utils: utilRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;
